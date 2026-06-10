'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { getFeaturedProjects } from '@/lib/data/projects';
import type { Project } from '@/lib/data/projects';
import ScrollReveal from '@/components/ui/ScrollReveal';

const PREVIEW_INTERVAL = 1700; // ms between gallery images on hover

/* â”€â”€â”€ Single featured card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const [previewIdx, setPreviewIdx]     = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const gallery = project.gallery ?? [];

  const startPreview = useCallback(() => {
    if (!gallery.length) return;
    setPreviewIdx(0);
    intervalRef.current = setInterval(
      () => setPreviewIdx(i => ((i ?? 0) + 1) % gallery.length),
      PREVIEW_INTERVAL,
    );
  }, [gallery.length]);

  const stopPreview = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setPreviewIdx(null);
  }, []);

  useEffect(() => () => stopPreview(), [stopPreview]);

  const isPreviewing = previewIdx !== null && gallery.length > 0;
  const previewSrc   = isPreviewing ? gallery[previewIdx!].src : null;
  const focalPoint   = project.focalPoint ?? '50% 20%';

  return (
    <ScrollReveal delay={index * 0.08} style={{ flexShrink: 0 }}>
      <Link
        href={`/work/${project.slug}`}
        style={{ display: 'block', textDecoration: 'none' }}
        onMouseEnter={startPreview}
        onMouseLeave={stopPreview}
      >
        <motion.article
          whileHover="hover"
          style={{
            position: 'relative',
            width: 'clamp(310px, 34vw, 460px)',
            aspectRatio: '2 / 3',
            overflow: 'hidden',
            background: 'var(--black-800)',
            cursor: 'pointer',
            '--project-accent': project.accentColor,
          } as React.CSSProperties}
        >
          {/* â”€â”€ Steam-style progress bar â€” appears on hover â”€â”€ */}
          <AnimatePresence>
            {isPreviewing && gallery.length > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: 3, display: 'flex', gap: 1, zIndex: 20,
                }}
              >
                {gallery.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      background: i === previewIdx
                        ? project.accentColor
                        : 'rgba(255,255,255,0.22)',
                      transition: 'background 150ms ease',
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* â”€â”€ Base card image â”€â”€ */}
          <motion.div
            variants={{ hover: { scale: 1.05 }, initial: { scale: 1 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={project.cardImage}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 34vw"
              style={{ objectFit: 'cover', objectPosition: focalPoint }}
            />
          </motion.div>

          {/* â”€â”€ Cycling preview images (Steam effect) â”€â”€ */}
          <AnimatePresence mode="sync">
            {previewSrc && (
              <motion.div
                key={`${project.slug}-${previewIdx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                style={{ position: 'absolute', inset: 0, zIndex: 3 }}
              >
                <Image
                  src={previewSrc}
                  alt=""
                  fill
                  sizes="34vw"
                  style={{ objectFit: 'cover', objectPosition: focalPoint }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* â”€â”€ Permanent bottom gradient â”€â”€ */}
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(6,6,6,0.92) 0%, rgba(6,6,6,0.4) 35%, transparent 65%)',
              zIndex: 8,
            }}
          />


          {/* â”€â”€ Card info â”€â”€ */}
          <div
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: 'clamp(20px, 3vw, 32px)',
              zIndex: 15,
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
                fontWeight: 700,
                color: 'var(--white)',
                letterSpacing: '-0.025em',
                textTransform: 'uppercase',
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {project.title}
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gray-500)' }}>
                {project.type.split(' Â· ')[0]}
              </span>
              <motion.span
                variants={{ hover: { opacity: 1, x: 0 }, initial: { opacity: 0, x: -6 } }}
                transition={{ duration: 0.3 }}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.16em', color: project.accentColor }}
              >
                View â†’
              </motion.span>
            </div>
            {project.status !== 'original' && (
              <div style={{ marginTop: 10 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-500)', border: '1px solid var(--gray-700)', padding: '2px 8px' }}>
                  {project.statusLabel}
                </span>
              </div>
            )}
          </div>
        </motion.article>
      </Link>
    </ScrollReveal>
  );
}

/* â”€â”€â”€ View-all end card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function ViewAllCard({ total }: { total: number }) {
  return (
    <ScrollReveal style={{ flexShrink: 0 }}>
      <Link href="/work" style={{ display: 'block', textDecoration: 'none' }}>
        <motion.div
          whileHover="hover"
          style={{
            position: 'relative',
            width: 'clamp(180px, 20vw, 240px)',
            aspectRatio: '2 / 3',
            background: 'var(--black-800)',
            border: '1px solid var(--line)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(rgba(250,250,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,248,0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />
          <div style={{ position: 'relative', textAlign: 'center', padding: 24 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--gold-500)', textTransform: 'uppercase', marginBottom: 16 }}>
              {String(total).padStart(2, '0')} Works
            </div>
            <motion.p
              variants={{ hover: { color: 'var(--gold-500)' }, initial: { color: 'var(--white)' } }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)', fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 1.1 }}
            >
              View<br />All
            </motion.p>
            <motion.div
              variants={{ hover: { x: 6 }, initial: { x: 0 } }}
              transition={{ duration: 0.3 }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--gold-500)', marginTop: 20 }}
            >
              â†’
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </ScrollReveal>
  );
}

/* â”€â”€â”€ Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export default function FeaturedWork() {
  const featured = getFeaturedProjects();

  return (
    <section
      aria-labelledby="featured-heading"
      style={{
        background: 'var(--black-900)',
        paddingTop: 'var(--space-7)',
        paddingBottom: 'var(--space-7)',
        borderTop: '1px solid var(--line)',
        overflow: 'hidden',
      }}
    >
      {/* â”€â”€ Section header â”€â”€ */}
      <div className="container-site" style={{ marginBottom: 'var(--space-5)' }}>
        <ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-2)' }}>
            <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Featured</span>
            <h2
              id="featured-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--fs-h1)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--white)',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              Selected Work
            </h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.16em', color: 'var(--gray-500)', textTransform: 'uppercase' }}>
              Hover to preview Â· click to open case study
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* â”€â”€ Horizontal scroll track â”€â”€ */}
      <div
        style={{
          display: 'flex',
          gap: 3,
          paddingLeft: 'max(var(--space-6), calc((100% - 1440px) / 2 + var(--space-6)))',
          paddingRight: 'max(var(--space-6), calc((100% - 1440px) / 2 + var(--space-6)))',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingBottom: 4,
          alignItems: 'stretch',
        } as React.CSSProperties}
        className="featured-scroll-track"
      >
        {featured.map((project, i) => (
          <FeaturedCard key={project.slug} project={project} index={i} />
        ))}
        <ViewAllCard total={featured.length + 2} />
      </div>

      <style>{`
        .featured-scroll-track::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

