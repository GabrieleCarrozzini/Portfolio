'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/lib/data/projects';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface GalleryRowProps {
  project: Project;
}

export default function GalleryRow({ project }: GalleryRowProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gallery = project.gallery || [];

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  const nextImage = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % gallery.length));

  if (!gallery.length) return null;

  return (
    <section
      aria-labelledby="gallery-heading"
      style={{ background: 'var(--black-900)', paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)', borderTop: '1px solid var(--line)' }}
    >
      <div className="container-site">
        <ScrollReveal style={{ marginBottom: 'var(--space-5)' }}>
          <span className="label-gold" style={{ display: 'block', marginBottom: 8 }}>Gallery</span>
          <h2 id="gallery-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--white)', textTransform: 'uppercase' }}>
            Image Set
          </h2>
        </ScrollReveal>

        <div
          role="list"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)' }}
          aria-label={`${project.title} gallery`}
        >
          {gallery.map((item, i) => (
            <ScrollReveal key={item.index} delay={i * 0.08} role="listitem">
              <button
                onClick={() => openLightbox(i)}
                aria-label={`Open image ${item.index}: ${item.alt}`}
                style={{
                  position: 'relative', width: '100%', aspectRatio: '1/1',
                  background: 'var(--black-800)', border: '1px solid var(--line)',
                  cursor: 'pointer', overflow: 'hidden', padding: 0, display: 'block',
                  transition: 'border-color 200ms ease',
                  '--project-accent': project.accentColor,
                } as React.CSSProperties}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = project.accentColor)}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--line)')}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
                {/* Index */}
                <div style={{
                  position: 'absolute', top: 12, left: 12, zIndex: 3,
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  letterSpacing: '0.2em', color: project.accentColor,
                  textShadow: '0 0 8px rgba(0,0,0,0.8)',
                }} aria-hidden="true">
                  {item.index}
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-label={`Lightbox — ${gallery[lightboxIndex]?.alt}`}
            aria-modal="true"
            onClick={closeLightbox}
            onKeyDown={(e) => {
              if (e.key === 'Escape') closeLightbox();
              if (e.key === 'ArrowRight') nextImage();
              if (e.key === 'ArrowLeft') prevImage();
            }}
            tabIndex={-1}
          >
            {/* Image container — contains at max 85vw × 85vh */}
            <div
              style={{ position: 'relative', width: 'min(85vw, 1000px)', height: 'min(85vh, 800px)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {gallery[lightboxIndex] && (
                <Image
                  src={gallery[lightboxIndex].src}
                  alt={gallery[lightboxIndex].alt}
                  fill
                  sizes="85vw"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              )}
              {/* Counter */}
              <div style={{ position: 'absolute', bottom: -40, left: 0, fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--gray-500)' }}>
                {String(lightboxIndex + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
              </div>
              {/* Alt text */}
              <div style={{ position: 'absolute', bottom: -60, left: 0, fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--gray-700)', maxWidth: '50ch' }}>
                {gallery[lightboxIndex]?.alt}
              </div>
            </div>

            {/* Navigation */}
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous image" style={{ position: 'absolute', left: 'var(--space-4)', top: '50%', transform: 'translateY(-50%)', background: 'none', border: '1px solid var(--gray-700)', color: 'var(--white)', fontSize: '1.5rem', width: 48, height: 48, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 200ms ease' }}>←</button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next image" style={{ position: 'absolute', right: 'var(--space-4)', top: '50%', transform: 'translateY(-50%)', background: 'none', border: '1px solid var(--gray-700)', color: 'var(--white)', fontSize: '1.5rem', width: 48, height: 48, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 200ms ease' }}>→</button>
            {/* Close */}
            <button onClick={closeLightbox} aria-label="Close lightbox (Escape)" style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', background: 'none', border: '1px solid var(--gray-700)', color: 'var(--white)', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              ESC
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive grid */}
      <style>{`
        @media (max-width: 768px) { [aria-label$="gallery"] { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { [aria-label$="gallery"] { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
