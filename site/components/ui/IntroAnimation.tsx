'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const VW = 603.06;
const VH = 277.26;
const G_PATH =
  'M 304.56,14.59 L 292.18,38.66 L 44.56,38.66 L 158.4,229.53 L 195.2,165.56 L 166.31,165.56 L 184.54,143.9 L 240.59,143.9 L 158.74,276.31 L 0.89,14.59 Z';
const C_PATH =
  'M 519.13,124.48 L 483.76,124.48 L 441.62,52.67 L 325.09,252.38 L 558.83,252.38 L 515.2,178.04 L 545.87,178.04 L 602.19,274.76 L 281.74,274.76 L 441.49,0.96 Z';

const STORAGE_KEY   = 'gc-intro-v7';
const FADE_IN_S     = 0.9;   // logo fade-in
const HOLD_MS       = 1200;  // hold after logo fully visible
const IRIS_MS       = 1400;  // iris close — long enough to clearly see the shrink
const IRIS_DELAY_MS = FADE_IN_S * 1000 + HOLD_MS;

export default function IntroAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const [show,   setShow]   = useState(false);
  const [isIris, setIsIris] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    document.body.style.overflow = 'hidden';
    setShow(true);

    const finish = () => {
      setShow(false);
      document.body.style.overflow = '';
      sessionStorage.setItem(STORAGE_KEY, '1');
    };

    if (prefersReducedMotion) {
      const t = setTimeout(finish, 800);
      return () => { clearTimeout(t); document.body.style.overflow = ''; };
    }

    const t1 = setTimeout(() => setIsIris(true), IRIS_DELAY_MS);
    const t2 = setTimeout(finish, IRIS_DELAY_MS + IRIS_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!show) return null;

  return (
    <>
      {/* Fixed wrapper */}
      <div
        aria-hidden="true"
        style={{
          position:      'fixed',
          inset:          0,
          zIndex:         9999,
          pointerEvents: isIris ? 'none' : 'all',
        }}
      >
        {/* Black background — fades out to reveal hero */}
        <div
          style={{
            position:   'absolute',
            inset:       0,
            background: '#000',
            opacity:    isIris ? 0 : 1,
            transition: isIris
              ? `opacity ${IRIS_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`
              : 'none',
            willChange: 'opacity',
          }}
        />

        {/* Logo — grows and dissolves into the hero */}
        <div
          style={{
            position:       'absolute',
            inset:           0,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            pointerEvents:  'none',
          }}
        >
          <div
            style={{
              width:     'clamp(110px, 22vmin, 175px)',
              aspectRatio: `${VW} / ${VH}`,
              opacity:   isIris ? 0 : 1,
              transform: isIris ? 'scale(2.6)' : 'scale(1)',
              transition: isIris
                ? `transform ${IRIS_MS}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${Math.round(IRIS_MS * 0.55)}ms ease-in`
                : 'none',
              willChange:          'transform, opacity',
              backfaceVisibility:  'hidden',
            }}
          >
            <svg
              viewBox={`0 0 ${VW} ${VH}`}
              width="100%"
              height="100%"
              style={{
                animation: prefersReducedMotion
                  ? 'none'
                  : `gc-logo-in ${FADE_IN_S}s cubic-bezier(0.16,1,0.3,1) both`,
              }}
            >
              <path d={G_PATH} fill="white" />
              <path d={C_PATH} fill="white" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gc-logo-in {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
