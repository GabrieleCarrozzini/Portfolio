'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/*
 * GC logo reconstructed as SVG polylines.
 * G: inverted open triangle (top-bar + left diagonal + partial right leg + crossbar)
 * C: upward open triangle (left diagonal + apex + right diagonal)
 *
 * ViewBox  0 0 490 310
 * Stroke   30 / butt cap / miter join
 */
const G_PATH = 'M 215,50 L 18,50 L 116,260 L 158,170 L 215,170';
const C_PATH = 'M 240,260 L 356,50 L 472,260';
const SW = 30;

const DRAW_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const IRIS_EASE = 'cubic-bezier(0.76,0,0.24,1)';

// Total sequence: G draws 0-900ms, C draws 300-1100ms, hold 600ms, iris 900ms
const IRIS_START = 1700;
const GONE_AT   = 2700;

export default function IntroOverlay() {
  const [visible,  setVisible]  = useState(false);
  const [closing,  setClosing]  = useState(false);
  const [gone,     setGone]     = useState(false);

  useEffect(() => {
    const seen    = sessionStorage.getItem('gc-intro');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen || reduced) return;

    setVisible(true);
    document.body.style.overflow = 'hidden';

    const t1 = setTimeout(() => setClosing(true), IRIS_START);
    const t2 = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = '';
      sessionStorage.setItem('gc-intro', '1');
    }, GONE_AT);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible || gone) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'var(--black-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        clipPath: closing ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)',
        transition: `clip-path 1s ${IRIS_EASE}`,
        pointerEvents: closing ? 'none' : 'all',
      }}
    >
      <svg
        viewBox="0 0 490 310"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: 'clamp(200px, 42vmin, 400px)',
          height: 'auto',
          overflow: 'visible',
          display: 'block',
        }}
      >
        {/* G mark — draws from top-right → top-bar left → apex → crossbar */}
        <motion.path
          d={G_PATH}
          fill="none"
          stroke="white"
          strokeWidth={SW}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={4}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, ease: DRAW_EASE, delay: 0 }}
        />

        {/* C mark — draws from bottom-left → apex → bottom-right */}
        <motion.path
          d={C_PATH}
          fill="none"
          stroke="white"
          strokeWidth={SW}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={4}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: DRAW_EASE, delay: 0.32 }}
        />
      </svg>
    </div>
  );
}
