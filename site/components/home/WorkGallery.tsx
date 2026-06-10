'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data/projects';
import type { Project, GalleryImage } from '@/lib/data/projects';
import ScrollReveal from '@/components/ui/ScrollReveal';

/* ─── Project card ──────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const count = project.gallery?.length ?? 0;

  return (
    <ScrollReveal delay={index * 0.07} style={{ height: '100%' }}>
      <motion.button
        onClick={onOpen}
        whileHover="hover"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4/3',
          overflow: 'hidden',
          background: 'var(--black-800)',
          border: 'none',
          cursor: 'pointer',
          display: 'block',
          padding: 0,
          '--project-accent': project.accentColor,
        } as React.CSSProperties}
        aria-label={`Open gallery — ${project.title}, ${count} images`}
      >
        {/* Hero image */}
        <motion.div
          variants={{ hover: { scale: 1.06 }, initial: { scale: 1 } }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Image
            src={project.heroImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: project.focalPoint ?? 'center top' }}
          />
        </motion.div>

        {/* Permanent bottom gradient */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(6,6,6,0.85) 0%, rgba(6,6,6,0.3) 40%, transparent 70%)',
            zIndex: 2,
          }}
        />

        {/* Hover overlay — darkens slightly */}
        <motion.div
          variants={{ hover: { opacity: 1 }, initial: { opacity: 0 } }}
          style={{ position: 'absolute', inset: 0, background: 'rgba(6,6,6,0.25)', zIndex: 3 }}
        />

        {/* ── Always visible info ── */}
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: 'clamp(16px, 2.5vw, 28px)',
            zIndex: 4,
          }}
        >
          {/* Index + photo count */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10 }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)',
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            {count > 0 && (
              <motion.span
                variants={{ hover: { opacity: 1, y: 0 }, initial: { opacity: 0, y: 6 } }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: project.accentColor,
                }}
              >
                {count} PHOTOS →
              </motion.span>
            )}
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              fontWeight: 700,
              color: 'var(--white)',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              lineHeight: 1,
              marginBottom: 6,
            }}
          >
            {project.title}
          </h3>

          {/* Type label */}
          <span
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--gray-500)',
            }}
          >
            {project.type.split(' · ')[0]}
          </span>
        </div>

        {/* Status badge */}
        {project.status !== 'original' && (
          <div
            style={{
              position: 'absolute', top: 14, right: 14, zIndex: 5,
              fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              background: 'rgba(6,6,6,0.85)', color: 'var(--gray-500)',
              padding: '3px 8px', border: '1px solid var(--gray-700)',
            }}
          >
            {project.statusLabel}
          </div>
        )}

      </motion.button>
    </ScrollReveal>
  );
}

/* ─── Gallery overlay ───────────────────────────────────────── */
function GalleryOverlay({
  project,
  gallery,
  activeIndex,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: {
  project: Project;
  gallery: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft')  onPrev();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  const current = gallery[activeIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(6,6,6,0.97)',
        display: 'flex', flexDirection: 'column',
        '--project-accent': project.accentColor,
      } as React.CSSProperties}
    >
      {/* ── Header ── */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          flexShrink: 0,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '16px 32px',
          borderBottom: `1px solid rgba(255,255,255,0.07)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Link
            href={`/work/${project.slug}`}
            onClick={onClose}
            style={{
              fontFamily: 'var(--font-display)', fontSize: '1.1rem',
              fontWeight: 700, letterSpacing: '-0.01em',
              textTransform: 'uppercase', color: 'var(--white)',
              textDecoration: 'none',
            }}
          >
            {project.title}
          </Link>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--gray-500)' }}>
            {String(activeIndex + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
          </span>
          <Link
            href={`/work/${project.slug}`}
            onClick={onClose}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: project.accentColor, textDecoration: 'none',
            }}
          >
            Case Study →
          </Link>
        </div>
        <button
          onClick={onClose}
          aria-label="Close gallery"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            letterSpacing: '0.2em', color: 'var(--gray-500)',
            background: 'none', border: '1px solid var(--gray-700)',
            padding: '6px 14px', cursor: 'pointer',
            transition: 'border-color 200ms ease, color 200ms ease',
          }}
          onMouseOver={e => { e.currentTarget.style.borderColor = project.accentColor; e.currentTarget.style.color = 'var(--white)'; }}
          onMouseOut={e =>  { e.currentTarget.style.borderColor = 'var(--gray-700)';   e.currentTarget.style.color = 'var(--gray-500)'; }}
        >
          ESC
        </button>
      </div>

      {/* ── Main image ── */}
      <div
        style={{ flex: 1, position: 'relative', overflow: 'hidden', minHeight: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            {current && (
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        {gallery.length > 1 && (
          <>
            <button
              onClick={onPrev}
              aria-label="Previous image"
              style={{
                position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(6,6,6,0.7)', border: '1px solid var(--gray-700)',
                color: 'var(--white)', width: 48, height: 48, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', transition: 'border-color 200ms ease',
                zIndex: 10,
              }}
              onMouseOver={e => e.currentTarget.style.borderColor = project.accentColor}
              onMouseOut={e => e.currentTarget.style.borderColor = 'var(--gray-700)'}
            >
              ←
            </button>
            <button
              onClick={onNext}
              aria-label="Next image"
              style={{
                position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(6,6,6,0.7)', border: '1px solid var(--gray-700)',
                color: 'var(--white)', width: 48, height: 48, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', transition: 'border-color 200ms ease',
                zIndex: 10,
              }}
              onMouseOver={e => e.currentTarget.style.borderColor = project.accentColor}
              onMouseOut={e => e.currentTarget.style.borderColor = 'var(--gray-700)'}
            >
              →
            </button>
          </>
        )}

        {/* Alt caption */}
        {current && (
          <div
            style={{
              position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase', whiteSpace: 'nowrap',
              zIndex: 10,
            }}
          >
            {current.alt}
          </div>
        )}
      </div>

      {/* ── Thumbnail strip ── */}
      {gallery.length > 1 && (
        <div
          onClick={e => e.stopPropagation()}
          style={{
            flexShrink: 0,
            height: 88,
            display: 'flex',
            gap: 3,
            padding: '8px 32px',
            overflowX: 'auto',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            scrollbarWidth: 'thin',
          }}
        >
          {gallery.map((img, i) => (
            <button
              key={img.index}
              onClick={() => onSelect(i)}
              aria-label={`View image ${img.index}`}
              style={{
                flexShrink: 0,
                width: 116,
                height: 72,
                position: 'relative',
                cursor: 'pointer',
                padding: 0,
                background: 'none',
                border: i === activeIndex
                  ? '2px solid rgba(255,255,255,0.7)'
                  : '2px solid transparent',
                opacity: i === activeIndex ? 1 : 0.45,
                transition: 'opacity 200ms ease, border-color 200ms ease',
                overflow: 'hidden',
              }}
              onMouseOver={e => { if (i !== activeIndex) e.currentTarget.style.opacity = '0.75'; }}
              onMouseOut={e =>  { if (i !== activeIndex) e.currentTarget.style.opacity = '0.45'; }}
            >
              <Image src={img.src} alt="" fill sizes="116px" style={{ objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ─── Main section ──────────────────────────────────────────── */
export default function WorkGallery() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openProject = projects.find(p => p.slug === openSlug) ?? null;
  const gallery: GalleryImage[] = openProject?.gallery ?? [];

  const open = (slug: string) => { setOpenSlug(slug); setActiveIndex(0); };
  const close = () => setOpenSlug(null);
  const prev = useCallback(() => setActiveIndex(i => (i - 1 + gallery.length) % gallery.length), [gallery.length]);
  const next = useCallback(() => setActiveIndex(i => (i + 1) % gallery.length), [gallery.length]);

  return (
    <section
      aria-labelledby="works-gallery-heading"
      style={{
        background: 'var(--black-900)',
        paddingTop: 'var(--space-7)',
        paddingBottom: 'var(--space-7)',
        borderTop: '1px solid var(--line)',
      }}
    >
      {/* Section header */}
      <div className="container-site" style={{ marginBottom: 'var(--space-6)' }}>
        <ScrollReveal>
          <span className="label-gold" style={{ display: 'block', marginBottom: 10 }}>All Works</span>
          <h2
            id="works-gallery-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--fs-h1)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--white)',
              textTransform: 'uppercase',
            }}
          >
            Projects
          </h2>
        </ScrollReveal>
      </div>

      {/* ── 2-column project grid ── */}
      <div
        className="container-site work-gallery-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 3,
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            onOpen={() => open(project.slug)}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          #works-gallery-heading ~ div,
          [aria-labelledby="works-gallery-heading"] .container-site:last-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* ── Gallery overlay ── */}
      <AnimatePresence>
        {openSlug && openProject && (
          <GalleryOverlay
            project={openProject}
            gallery={gallery}
            activeIndex={activeIndex}
            onClose={close}
            onPrev={prev}
            onNext={next}
            onSelect={setActiveIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
