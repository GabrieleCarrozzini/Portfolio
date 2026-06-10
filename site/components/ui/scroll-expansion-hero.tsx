'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaSrc: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  children?: ReactNode;
}

/*
  Performance notes
  ─────────────────
  • scrollProgress is a MotionValue, NOT React state → wheel/touch events never
    trigger a React re-render; Framer Motion updates the DOM directly.
  • All animated properties (clipPath, opacity, x) are derived via useTransform
    and run entirely on Framer Motion's animation loop, off the React render cycle.
  • clip-path: inset() is GPU-composited in every modern browser — it never causes
    layout reflow, unlike animating width/height which does every frame.
  • will-change hints promote animated elements to their own compositor layer.
*/
export default function ScrollExpandMedia({
  mediaSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  children,
}: ScrollExpandMediaProps) {
  // ── Motion value — never causes React re-renders ──────────────────────────
  const progress = useMotionValue(0);

  // ── Threshold-based state (only changes 2-3 times per session) ────────────
  const [expanded, setExpanded]       = useState(false);
  const [showContent, setShowContent] = useState(false);

  // ── Viewport dimensions in refs — updated on resize, read by transforms ───
  const winW        = useRef(typeof window !== 'undefined' ? window.innerWidth  : 1440);
  const winH        = useRef(typeof window !== 'undefined' ? window.innerHeight : 900);
  const isMobileRef = useRef(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  // ── Derived animated values ───────────────────────────────────────────────

  // Background fades out in the first half of the scroll
  const bgOpacity = useTransform(progress, [0, 0.55], [1, 0]);

  // Dark overlay on the expanding image fades out as it fills the screen
  const overlayOpacity = useTransform(progress, [0, 1], [0.6, 0]);

  // clip-path crops the full-screen image to a small centered rectangle at 0,
  // expanding to full viewport at 1. GPU-composited — zero layout reflow.
  const clipPath = useTransform(progress, (p) => {
    const startW = isMobileRef.current ? 240 : 320;
    const startH = isMobileRef.current ? 340 : 440;
    const ix = Math.max(0, ((1 - p) * (winW.current - startW)) / 2);
    const iy = Math.max(0, ((1 - p) * (winH.current - startH)) / 2);
    return `inset(${iy}px ${ix}px ${iy}px ${ix}px)`;
  });

  // Gold border around the clipped window, fades out as it goes full-screen
  const borderOpacity = useTransform(progress, [0, 0.85], [1, 0]);
  const borderClip = useTransform(progress, (p) => {
    const startW = isMobileRef.current ? 240 : 320;
    const startH = isMobileRef.current ? 340 : 440;
    const ix = Math.max(0, ((1 - p) * (winW.current - startW)) / 2);
    const iy = Math.max(0, ((1 - p) * (winH.current - startH)) / 2);
    // slightly inside the media clip for the border
    return `inset(${iy - 1}px ${ix - 1}px ${iy - 1}px ${ix - 1}px)`;
  });

  // Title words slide off screen in opposite directions
  const factor = () => (isMobileRef.current ? 1.8 : 1.5);
  const x1 = useTransform(progress, (p) => -(p * winW.current * factor()));
  const x2 = useTransform(progress, (p)  =>  p * winW.current * factor());

  // Labels slide off screen (slower)
  const lx1 = useTransform(progress, (p) => -(p * winW.current * 1.2));
  const lx2 = useTransform(progress, (p) =>   p * winW.current * 1.2);

  // ── Resize handler ────────────────────────────────────────────────────────
  useEffect(() => {
    const onResize = () => {
      winW.current        = window.innerWidth;
      winH.current        = window.innerHeight;
      isMobileRef.current = window.innerWidth < 768;
      // Nudge the motion value so transforms recompute for the new viewport
      const v = progress.get();
      progress.set(v + 0.0001);
      progress.set(v);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [progress]);

  // ── Scroll / touch event handlers ────────────────────────────────────────
  useEffect(() => {
    let touchY = 0;

    const onWheel = (e: WheelEvent) => {
      const cur = progress.get();
      if (expanded && e.deltaY < 0 && window.scrollY <= 5) {
        setExpanded(false);
        e.preventDefault();
        return;
      }
      if (!expanded) {
        e.preventDefault();
        const next = Math.min(Math.max(cur + e.deltaY * 0.0009, 0), 1);
        progress.set(next);
        if (next >= 1)   { setExpanded(true);  setShowContent(true);  }
        if (next < 0.75) { setShowContent(false); }
      }
    };

    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY; };

    const onTouchMove = (e: TouchEvent) => {
      if (!touchY) return;
      const cur    = progress.get();
      const deltaY = touchY - e.touches[0].clientY;
      if (expanded && deltaY < -20 && window.scrollY <= 5) {
        setExpanded(false);
        e.preventDefault();
        return;
      }
      if (!expanded) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        const next   = Math.min(Math.max(cur + deltaY * factor, 0), 1);
        progress.set(next);
        if (next >= 1)   { setExpanded(true);  setShowContent(true);  }
        if (next < 0.75) { setShowContent(false); }
        touchY = e.touches[0].clientY;
      }
    };

    const onTouchEnd  = ()  => { touchY = 0; };
    const onScroll    = ()  => { if (!expanded) window.scrollTo(0, 0); };

    window.addEventListener('wheel',      onWheel,      { passive: false });
    window.addEventListener('scroll',     onScroll);
    window.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove',  onTouchMove,  { passive: false });
    window.addEventListener('touchend',   onTouchEnd);

    return () => {
      window.removeEventListener('wheel',      onWheel);
      window.removeEventListener('scroll',     onScroll);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove',  onTouchMove);
      window.removeEventListener('touchend',   onTouchEnd);
    };
  }, [expanded, progress]);

  const firstWord   = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div className="overflow-x-hidden" style={{ background: 'var(--black-900)' }}>
      <section className="relative flex flex-col min-h-[100dvh]">

        {/* ── Background — same image, fades out ── */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ opacity: bgOpacity, willChange: 'opacity' }}
          aria-hidden="true"
        >
          <Image
            src={bgImageSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(6,6,6,0.75) 0%, rgba(6,6,6,0.35) 60%, rgba(6,6,6,0.15) 100%)' }}
          />
        </motion.div>

        {/* ── Hero viewport ── */}
        <div className="relative z-10 w-full h-[100dvh] overflow-hidden">

          {/* Expanding image — clip-path grows from center rectangle to full screen */}
          <motion.div
            className="absolute inset-0"
            style={{ clipPath, willChange: 'clip-path' }}
          >
            <Image
              src={mediaSrc}
              alt={title || ''}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            {/* Overlay fades as image reveals */}
            <motion.div
              className="absolute inset-0"
              style={{ background: 'rgba(6,6,6,0.85)', opacity: overlayOpacity, willChange: 'opacity' }}
            />
          </motion.div>

          {/* Gold border that tracks the clip-path edge */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: borderClip,
              opacity: borderOpacity,
              outline: '1px solid rgba(233,161,36,0.55)',
              willChange: 'clip-path, opacity',
            }}
          />

          {/* Title — GABRIELE slides left, CARROZZINI slides right */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none select-none gap-2 mix-blend-difference">
            <motion.div
              style={{
                x: x1,
                willChange: 'transform',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8.5vw, 9.5rem)',
                fontWeight: 700,
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                color: 'var(--white)',
              }}
            >
              {firstWord}
            </motion.div>
            <motion.div
              style={{
                x: x2,
                willChange: 'transform',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8.5vw, 9.5rem)',
                fontWeight: 700,
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                color: 'var(--gold-500)',
              }}
            >
              {restOfTitle}
            </motion.div>
          </div>

          {/* Labels — bottom, split apart */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-between px-8 z-20 pointer-events-none">
            {date && (
              <motion.p
                style={{
                  x: lx1,
                  willChange: 'transform',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.28em',
                  color: 'rgba(233,161,36,0.7)',
                  textTransform: 'uppercase',
                }}
              >
                {date}
              </motion.p>
            )}
            {scrollToExpand && (
              <motion.p
                style={{
                  x: lx2,
                  willChange: 'transform',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.28em',
                  color: 'rgba(250,250,248,0.35)',
                  textTransform: 'uppercase',
                }}
              >
                {scrollToExpand}
              </motion.p>
            )}
          </div>

        </div>

        {/* ── Content revealed after full expansion ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          {children}
        </motion.div>

      </section>
    </div>
  );
}
