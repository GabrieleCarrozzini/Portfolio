'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const VW = 603.06;
const VH = 277.26;
const G_PATH =
  'M 304.56,14.59 L 292.18,38.66 L 44.56,38.66 L 158.4,229.53 L 195.2,165.56 L 166.31,165.56 L 184.54,143.9 L 240.59,143.9 L 158.74,276.31 L 0.89,14.59 Z';
const C_PATH =
  'M 519.13,124.48 L 483.76,124.48 L 441.62,52.67 L 325.09,252.38 L 558.83,252.38 L 515.2,178.04 L 545.87,178.04 L 602.19,274.76 L 281.74,274.76 L 441.49,0.96 Z';

const STORAGE_KEY   = 'gc-intro-v8';

// Draw phase: G draws 0–0.85s, C draws 0.25–1.1s
// Fill phase: both fill 1.1–1.55s
// Total logo visible: 1.55s
// Hold after logo: 1100ms
// Iris close: 1400ms
const DRAW_G_DUR    = 0.85;
const DRAW_C_DELAY  = 0.25;
const FILL_DELAY_S  = 1.1;
const FILL_DUR      = 0.45;
const LOGO_TOTAL_S  = FILL_DELAY_S + FILL_DUR; // 1.55s
const HOLD_MS       = 1100;
const IRIS_MS       = 1400;
const IRIS_DELAY_MS = Math.round(LOGO_TOTAL_S * 1000) + HOLD_MS; // ~2650ms

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
      const t = setTimeout(finish, 600);
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
      <div
        aria-hidden="true"
        style={{
          position:      'fixed',
          inset:          0,
          zIndex:         9999,
          pointerEvents: isIris ? 'none' : 'all',
        }}
      >
        {/* Black background */}
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

        {/* Logo */}
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
              willChange:         'transform, opacity',
              backfaceVisibility: 'hidden',
            }}
          >
            <svg
              viewBox={`0 0 ${VW} ${VH}`}
              width="100%"
              height="100%"
              style={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : {
                      animation: `gc-intro-glow ${LOGO_TOTAL_S}s ease-out forwards`,
                      willChange: 'filter',
                    }
              }
            >
              {prefersReducedMotion ? (
                <>
                  <path d={G_PATH} fill="white" />
                  <path d={C_PATH} fill="white" />
                </>
              ) : (
                <>
                  {/* G — draws first, fills after */}
                  <path
                    d={G_PATH}
                    fill="transparent"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinejoin="round"
                    pathLength="1"
                    style={{
                      strokeDasharray: '1',
                      strokeDashoffset: '1',
                      animation: [
                        `gc-draw ${DRAW_G_DUR}s cubic-bezier(0.4,0,0.2,1) forwards`,
                        `gc-path-fill ${FILL_DUR}s ease ${FILL_DELAY_S}s forwards`,
                      ].join(', '),
                    }}
                  />
                  {/* C — draws with slight delay, fills same time */}
                  <path
                    d={C_PATH}
                    fill="transparent"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinejoin="round"
                    pathLength="1"
                    style={{
                      strokeDasharray: '1',
                      strokeDashoffset: '1',
                      animation: [
                        `gc-draw ${DRAW_G_DUR}s ${DRAW_C_DELAY}s cubic-bezier(0.4,0,0.2,1) forwards`,
                        `gc-path-fill ${FILL_DUR}s ease ${FILL_DELAY_S}s forwards`,
                      ].join(', '),
                    }}
                  />
                </>
              )}
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        /* Stroke draw */
        @keyframes gc-draw {
          from { stroke-dashoffset: 1; }
          to   { stroke-dashoffset: 0; }
        }

        /* Fill in + stroke fade */
        @keyframes gc-path-fill {
          0%   { fill: transparent; stroke-opacity: 1; }
          100% { fill: white;       stroke-opacity: 0; }
        }

        /* Glow: builds to peak at end of draw, gentle residual glow */
        @keyframes gc-intro-glow {
          0%   { filter: drop-shadow(0 0 0px  rgba(255,255,255,0)); }
          65%  { filter: drop-shadow(0 0 20px rgba(255,255,255,0.9)) drop-shadow(0 0 40px rgba(255,255,255,0.35)); }
          100% { filter: drop-shadow(0 0 8px  rgba(255,255,255,0.4)); }
        }
      `}</style>
    </>
  );
}
