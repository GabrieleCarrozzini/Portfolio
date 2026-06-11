'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function IntroOverlay() {
  const [ready, setReady] = useState(false);
  const [splitting, setSplitting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('gc-intro');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seen || reduced) return;

    setReady(true);
    document.body.style.overflow = 'hidden';

    const t1 = setTimeout(() => setSplitting(true), 1400);
    const t2 = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = '';
      sessionStorage.setItem('gc-intro', '1');
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
    };
  }, []);

  if (!ready || gone) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: splitting ? 'none' : 'all',
      }}
    >
      {/* Top curtain */}
      <motion.div
        animate={{ y: splitting ? '-100%' : '0%' }}
        transition={{ duration: 1.0, ease: EASE }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '50%',
          background: 'var(--black-900)',
        }}
      />

      {/* Bottom curtain */}
      <motion.div
        animate={{ y: splitting ? '100%' : '0%' }}
        transition={{ duration: 1.0, ease: EASE }}
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '50%',
          background: 'var(--black-900)',
        }}
      />

      {/* GC Logo — centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={
          splitting
            ? { opacity: 0, scale: 0.94 }
            : { opacity: 1, scale: 1 }
        }
        transition={
          splitting
            ? { duration: 0.35, ease: 'easeIn' }
            : { duration: 0.72, ease: [0.16, 1, 0.3, 1] }
        }
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <Image
          src="/logo-gc.png"
          alt="GC"
          width={200}
          height={283}
          priority
          style={{
            width: 'clamp(120px, 18vmin, 200px)',
            height: 'auto',
            filter: 'invert(1)',
            mixBlendMode: 'screen',
            display: 'block',
            userSelect: 'none',
          }}
        />
      </motion.div>
    </div>
  );
}
