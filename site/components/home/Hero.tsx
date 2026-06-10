'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

/* ─── Background frame pool — hero mockup images ── */
const FRAMES = [
  { src: '/hero/v-poster-wall-mockup.png',          pos: '50% 50%', kb: { s0: 1.06, x0: 0,   y0: 0,  s1: 1.0,  x1: 0,   y1: 0  } },
  { src: '/hero/lara-logo-asset.png',               pos: '50% 50%', kb: { s0: 1.0,  x0: -10, y0: 0,  s1: 1.06, x1: 10,  y1: -8 } },
  { src: '/hero/fuji-billboard-mockup-angle.png',   pos: '50% 50%', kb: { s0: 1.05, x0: 8,   y0: 0,  s1: 1.0,  x1: -8,  y1: 0  } },
  { src: '/hero/turn-me-off-book-mockup.png',       pos: '50% 50%', kb: { s0: 1.0,  x0: 0,   y0: -8, s1: 1.06, x1: 0,   y1: 8  } },
];

const FRAME_MS  = 5500; // visible time per frame
const FADE_S    = 1.8;  // crossfade duration in seconds

/* ─── JAGO-style intro overlay ─────────────────────────────── */
function IntroOverlay() {
  const easing: [number, number, number, number] = [0.76, 0, 0.24, 1];
  const wordStyle = {
    fontFamily: 'var(--font-display)' as const,
    fontSize: 'clamp(3rem, 9.5vw, 10rem)' as const,
    fontWeight: 700,
    letterSpacing: '-0.04em',
    textTransform: 'uppercase' as const,
    lineHeight: 0.85,
  };

  return (
    <motion.div
      key="intro-overlay"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.65, delay: 1.2, ease: easing }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'var(--black-900)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* ── Name reveal ── */}
      <div style={{ textAlign: 'center', userSelect: 'none' }}>

        {/* GABRIELE — slides up from hidden */}
        <div style={{ overflow: 'hidden', lineHeight: 0.85 }}>
          <motion.div
            initial={{ y: '115%', opacity: 0 }}
            animate={{ y: '0%',   opacity: 1 }}
            transition={{ duration: 0.42, delay: 0.08, ease: easing }}
            style={{ ...wordStyle, color: 'var(--white)' }}
          >
            GABRIELE
          </motion.div>
        </div>

        {/* CARROZZINI — slides up 0.15s later */}
        <div style={{ overflow: 'hidden', lineHeight: 0.85, marginTop: '0.06em' }}>
          <motion.div
            initial={{ y: '115%', opacity: 0 }}
            animate={{ y: '0%',   opacity: 1 }}
            transition={{ duration: 0.42, delay: 0.2, ease: easing }}
            style={{ ...wordStyle, color: 'var(--gold-500)' }}
          >
            CARROZZINI
          </motion.div>
        </div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1,  y: 0  }}
          transition={{ duration: 0.4, delay: 0.46 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.32em',
            color: 'var(--gray-500)',
            textTransform: 'uppercase',
            marginTop: '1.8em',
          }}
        >
          Visual Designer · Rome, Italy
        </motion.div>
      </div>

      {/* Corner HUD marks */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        aria-hidden="true"
        style={{ position: 'absolute', top: 40, left: 40, width: 32, height: 32, borderTop: '1px solid rgba(233,161,36,0.35)', borderLeft: '1px solid rgba(233,161,36,0.35)' }}
      />
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        aria-hidden="true"
        style={{ position: 'absolute', bottom: 40, right: 40, width: 32, height: 32, borderBottom: '1px solid rgba(233,161,36,0.35)', borderRight: '1px solid rgba(233,161,36,0.35)' }}
      />
    </motion.div>
  );
}

/* ─── Hero section ──────────────────────────────────────────── */
export default function Hero() {
  const [showIntro, setShowIntro] = useState(false);
  const [frameIdx,  setFrameIdx]  = useState(0);
  const [mounted,   setMounted]   = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 700], [0, 28]);
  const bgY      = useTransform(scrollY, [0, 700], [0, 80]);

  useEffect(() => {
    setMounted(true);

    // Check sessionStorage for first-visit intro
    const played = sessionStorage.getItem('intro-played');
    if (!played) {
      setShowIntro(true);
      // Hide intro after slide-up exit animation completes (~1.85s)
      timerRef.current = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem('intro-played', '1');
      }, 1900);
    }

    // Start frame cycling
    const id = setInterval(
      () => setFrameIdx(i => (i + 1) % FRAMES.length),
      FRAME_MS,
    );

    return () => {
      clearInterval(id);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const easing: [number, number, number, number] = [0.76, 0, 0.24, 1];
  const frame = FRAMES[frameIdx];

  return (
    <>
      {/* ── Intro overlay (first visit only) ───────────────── */}
      <AnimatePresence>
        {showIntro && mounted && <IntroOverlay key="intro" />}
      </AnimatePresence>

      {/* ── Hero section ─────────────────────────────────────── */}
      <section
        aria-label="Hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'var(--black-900)',
        }}
      >
        {/* ── Layer 1: Ken Burns cycling background ─────────── */}
        <motion.div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, y: bgY, zIndex: 1 }}
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={frameIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_S, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <motion.div
                initial={{ scale: frame.kb.s0, x: frame.kb.x0, y: frame.kb.y0 }}
                animate={{ scale: frame.kb.s1, x: frame.kb.x1, y: frame.kb.y1 }}
                transition={{ duration: FRAME_MS / 1000 + FADE_S, ease: 'linear' }}
                style={{ position: 'absolute', inset: '-6%' }}
              >
                <Image
                  src={frame.src}
                  alt=""
                  fill
                  priority={frameIdx === 0}
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: frame.pos }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Unified dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,6,6,0.58)', zIndex: 2 }} />
          {/* Left gradient — heavier for text column */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,6,6,0.92) 0%, rgba(6,6,6,0.68) 40%, rgba(6,6,6,0.2) 70%, transparent 100%)', zIndex: 3 }} />
          {/* Bottom fade */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%', background: 'linear-gradient(to top, var(--black-900) 0%, transparent 100%)', zIndex: 4 }} />
        </motion.div>

        {/* ── Layer 2: Text content ─────────────────────────── */}
        <motion.div
          style={{ y: contentY, position: 'relative', zIndex: 10, width: '100%' }}
        >
          <div
            className="container-site"
            style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}
          >
            <div style={{ maxWidth: 'clamp(340px, 58vw, 820px)' }}>

              {/* Role label */}
              {mounted && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05, ease: easing }}
                  style={{ marginBottom: 'var(--space-4)' }}
                >
                  <span className="label-gold">Visual Designer · Rome, Italy</span>
                </motion.div>
              )}

              {/* ── Name headline — JAGO-style reveal ── */}
              <h1
                aria-label="Gabriele Carrozzini — Visual Designer portfolio"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 8.5vw, 9.5rem)',
                  fontWeight: 700,
                  lineHeight: 0.88,
                  letterSpacing: '-0.04em',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-5)',
                }}
              >
                {/* GABRIELE */}
                <span style={{ display: 'block', overflow: 'hidden', lineHeight: 0.9 }}>
                  {mounted ? (
                    <motion.span
                      initial={{ y: '110%' }}
                      animate={{ y: '0%' }}
                      transition={{ duration: 0.45, delay: 0.05, ease: easing }}
                      style={{ display: 'block', color: 'var(--white)' }}
                    >
                      GABRIELE
                    </motion.span>
                  ) : (
                    <span style={{ display: 'block', color: 'var(--white)' }}>GABRIELE</span>
                  )}
                </span>
                {/* CARROZZINI */}
                <span style={{ display: 'block', overflow: 'hidden', lineHeight: 0.9 }}>
                  {mounted ? (
                    <motion.span
                      initial={{ y: '110%' }}
                      animate={{ y: '0%' }}
                      transition={{ duration: 0.45, delay: 0.17, ease: easing }}
                      style={{ display: 'block', color: 'var(--gold-500)' }}
                    >
                      CARROZZINI
                    </motion.span>
                  ) : (
                    <span style={{ display: 'block', color: 'var(--gold-500)' }}>CARROZZINI</span>
                  )}
                </span>
              </h1>

              {/* Tagline */}
              {mounted ? (
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.52, ease: easing }}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--fs-body)',
                    color: 'var(--gray-500)',
                    maxWidth: 380,
                    lineHeight: 1.65,
                    marginBottom: 'var(--space-6)',
                    fontStyle: 'italic',
                  }}
                >
                  Design should communicate before it decorates.
                </motion.p>
              ) : (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--gray-500)', maxWidth: 380, lineHeight: 1.65, marginBottom: 'var(--space-6)', fontStyle: 'italic' }}>
                  Design should communicate before it decorates.
                </p>
              )}

              {/* CTAs */}
              {mounted ? (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.68, ease: easing }}
                  style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center' }}
                >
                  <Link href="/work" className="btn-gold">
                    View Work
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="btn-ghost">Start a Project</Link>
                </motion.div>
              ) : (
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <Link href="/work" className="btn-gold">View Work</Link>
                  <Link href="/contact" className="btn-ghost">Start a Project</Link>
                </div>
              )}

            </div>
          </div>
        </motion.div>

        {/* ── Frame indicator ───────────────────────────────── */}
        {mounted && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', bottom: 'var(--space-6)', right: 'var(--space-6)',
              display: 'flex', gap: 5, zIndex: 12,
            }}
          >
            {FRAMES.map((_, i) => (
              <button
                key={i}
                onClick={() => setFrameIdx(i)}
                style={{
                  width: i === frameIdx ? 22 : 5,
                  height: 3,
                  background: i === frameIdx ? 'var(--gold-500)' : 'rgba(255,255,255,0.22)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'all 400ms ease',
                }}
                aria-label={`Frame ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* ── HUD decorations ───────────────────────────────── */}
        <div aria-hidden="true">
          <div style={{ position: 'absolute', top: 100, left: 'var(--space-6)', width: 28, height: 28, borderTop: '1px solid rgba(233,161,36,0.3)', borderLeft: '1px solid rgba(233,161,36,0.3)', zIndex: 12 }} />
          <div style={{ position: 'absolute', bottom: '18%', right: '8%', display: 'flex', gap: 2, alignItems: 'flex-end', zIndex: 12, opacity: 0.3 }}>
            {[6,3,8,4,10,2,7,5,9,3,6,8,4,3].map((h, i) => (
              <div key={i} style={{ width: 2, height: h, background: 'var(--gold-500)' }} />
            ))}
          </div>
          <div style={{ position: 'absolute', bottom: '15.5%', right: '8%', fontFamily: 'var(--font-mono)', fontSize: 7, letterSpacing: '0.18em', color: 'rgba(233,161,36,0.3)', zIndex: 12 }}>
            XN4LCO-43KS
          </div>
          <div style={{ position: 'absolute', top: '12%', right: '3%', fontFamily: 'serif', fontSize: 'clamp(80px, 12vw, 160px)', color: 'rgba(233,161,36,0.03)', lineHeight: 1, zIndex: 2, userSelect: 'none', pointerEvents: 'none' }}>
            未来
          </div>
        </div>

        {/* ── Scroll indicator ──────────────────────────────── */}
        <div
          style={{ position: 'absolute', bottom: 'var(--space-5)', left: '50%', transform: 'translateX(-50%)', zIndex: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
          aria-hidden="true"
        >
          <span className="label" style={{ fontSize: '0.6rem' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, var(--gold-500), transparent)' }}
          />
        </div>

      </section>
    </>
  );
}
