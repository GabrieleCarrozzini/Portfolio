'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent]       = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY]       = useState<number>(0);
  const [isMobileState, setIsMobileState]   = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
        else if (newProgress < 0.75) { setShowContent(false); }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchY     = e.touches[0].clientY;
      const deltaY     = touchStartY - touchY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta  = deltaY * scrollFactor;
        const newProgress  = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
        else if (newProgress < 0.75) { setShowContent(false); }
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => { setTouchStartY(0); };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel',      handleWheel      as unknown as EventListener, { passive: false });
    window.addEventListener('scroll',     handleScroll     as EventListener);
    window.addEventListener('touchstart', handleTouchStart as unknown as EventListener, { passive: false });
    window.addEventListener('touchmove',  handleTouchMove  as unknown as EventListener, { passive: false });
    window.addEventListener('touchend',   handleTouchEnd   as EventListener);

    return () => {
      window.removeEventListener('wheel',      handleWheel      as unknown as EventListener);
      window.removeEventListener('scroll',     handleScroll     as EventListener);
      window.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
      window.removeEventListener('touchmove',  handleTouchMove  as unknown as EventListener);
      window.removeEventListener('touchend',   handleTouchEnd   as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => { setIsMobileState(window.innerWidth < 768); };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth      = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight     = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX  = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord   = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className="overflow-x-hidden"
      style={{ background: 'var(--black-900)' }}
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* ── Background image — fades out as media expands ── */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt=""
              width={1920}
              height={1080}
              className="w-screen h-screen"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
            {/* Dark scrim so portfolio bg color bleeds through naturally */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(6,6,6,0.82) 0%, rgba(6,6,6,0.42) 60%, rgba(6,6,6,0.2) 100%)' }}
            />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* ── Expanding media ── */}
              <div
                className="absolute z-0 top-1/2 left-1/2"
                style={{
                  width:     `${mediaWidth}px`,
                  height:    `${mediaHeight}px`,
                  maxWidth:  '95vw',
                  maxHeight: '85vh',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(233,161,36,${0.15 - scrollProgress * 0.15})`,
                }}
              >
                {mediaType === 'image' ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={mediaSrc}
                      alt={title || ''}
                      width={1280}
                      height={720}
                      className="w-full h-full"
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: 'rgba(6,6,6,0.45)' }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.7 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay muted loop playsInline
                      preload="auto"
                      className="w-full h-full"
                      style={{ objectFit: 'cover' }}
                    />
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: 'rgba(6,6,6,0.45)' }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                {/* HUD corner marks */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute', top: 12, left: 12,
                    width: 20, height: 20,
                    borderTop: `1px solid rgba(233,161,36,${0.6 - scrollProgress * 0.6})`,
                    borderLeft: `1px solid rgba(233,161,36,${0.6 - scrollProgress * 0.6})`,
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute', bottom: 12, right: 12,
                    width: 20, height: 20,
                    borderBottom: `1px solid rgba(233,161,36,${0.6 - scrollProgress * 0.6})`,
                    borderRight: `1px solid rgba(233,161,36,${0.6 - scrollProgress * 0.6})`,
                  }}
                />
              </div>

              {/* ── Date + scroll hint — split left/right ── */}
              <div className="flex flex-col items-center text-center relative z-10 mt-4" style={{ marginTop: `${mediaHeight / 2 + 24}px` }}>
                {date && (
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.28em',
                      color: 'rgba(233,161,36,0.7)',
                      textTransform: 'uppercase',
                      transform: `translateX(-${textTranslateX}vw)`,
                      transition: 'none',
                    }}
                  >
                    {date}
                  </p>
                )}
                {scrollToExpand && (
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.28em',
                      color: 'rgba(250,250,248,0.35)',
                      textTransform: 'uppercase',
                      marginTop: 6,
                      transform: `translateX(${textTranslateX}vw)`,
                      transition: 'none',
                    }}
                  >
                    {scrollToExpand}
                  </p>
                )}
              </div>

              {/* ── Title — splits apart as media expands ── */}
              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col ${textBlend ? 'mix-blend-difference' : ''}`}
                style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 8.5vw, 9.5rem)',
                    fontWeight: 700,
                    lineHeight: 0.88,
                    letterSpacing: '-0.04em',
                    textTransform: 'uppercase',
                    color: 'var(--white)',
                    transform: `translateX(-${textTranslateX}vw)`,
                    transition: 'none',
                    userSelect: 'none',
                  }}
                >
                  {firstWord}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 8.5vw, 9.5rem)',
                    fontWeight: 700,
                    lineHeight: 0.88,
                    letterSpacing: '-0.04em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-500)',
                    transform: `translateX(${textTranslateX}vw)`,
                    transition: 'none',
                    userSelect: 'none',
                  }}
                >
                  {restOfTitle}
                </div>
              </div>

            </div>

            {/* ── Content revealed after expansion ── */}
            <motion.section
              className="flex flex-col w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
