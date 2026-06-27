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

  const isPortrait = project.galleryLayout === 'portrait';
  const cols = isPortrait ? 2 : 3;

  return (
    <section aria-labelledby="gallery-heading" className="jago-gallery-section">
      {/* Header */}
      <div className="container-site jago-gallery-header">
        <ScrollReveal>
          <span className="label-gold" style={{ display: 'block', marginBottom: 8 }}>Gallery</span>
          <h2 id="gallery-heading" className="jago-gallery-title">Image Set</h2>
        </ScrollReveal>
      </div>

      {/* Grid */}
      <div
        role="list"
        className={`jago-gallery-grid jago-cols-${cols}`}
        aria-label={`${project.title} gallery`}
      >
        {gallery.map((item, i) => (
          <ScrollReveal key={item.index} delay={Math.min(i * 0.06, 0.24)} role="listitem">
            <button
              onClick={() => openLightbox(i)}
              aria-label={`Open image ${item.index}: ${item.alt}`}
              className="jago-gallery-item"
            >
              {/* Image */}
              <div className="jago-gallery-img-wrap">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={`(max-width: 768px) 50vw, ${Math.round(100 / cols)}vw`}
                  style={{ objectFit: 'cover', objectPosition: 'center top', transition: 'transform 600ms ease' }}
                  className="jago-gallery-img"
                />
              </div>

              {/* Caption */}
              <div className="jago-gallery-caption">
                <span className="jago-gallery-index">{item.index}</span>
                <span className="jago-gallery-alt">{item.alt.split(' — ')[1] || item.alt}</span>
              </div>
            </button>
          </ScrollReveal>
        ))}
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
              <div style={{ position: 'absolute', bottom: -40, left: 0, fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--gray-500)' }}>
                {String(lightboxIndex + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
              </div>
              <div style={{ position: 'absolute', bottom: -60, left: 0, fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--gray-700)', maxWidth: '50ch' }}>
                {gallery[lightboxIndex]?.alt}
              </div>
            </div>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous image" style={{ position: 'absolute', left: 'var(--space-4)', top: '50%', transform: 'translateY(-50%)', background: 'none', border: '1px solid var(--gray-700)', color: 'var(--white)', fontSize: '1.5rem', width: 48, height: 48, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>←</button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next image" style={{ position: 'absolute', right: 'var(--space-4)', top: '50%', transform: 'translateY(-50%)', background: 'none', border: '1px solid var(--gray-700)', color: 'var(--white)', fontSize: '1.5rem', width: 48, height: 48, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</button>
            <button onClick={closeLightbox} aria-label="Close lightbox (Escape)" style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', background: 'none', border: '1px solid var(--gray-700)', color: 'var(--white)', width: 44, height: 44, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>ESC</button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .jago-gallery-section {
          background: #f7f6f3;
          border-top: 1px solid #d8d6d0;
          padding-bottom: 0;
        }
        .jago-gallery-header {
          padding-top: var(--space-7);
          padding-bottom: var(--space-5);
          border-bottom: 1px solid #d8d6d0;
        }
        .jago-gallery-title {
          font-family: var(--font-display);
          font-size: var(--fs-h3);
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #0a0a0a;
          text-transform: uppercase;
        }
        .jago-gallery-title + .label-gold,
        .jago-gallery-header .label-gold {
          color: #888 !important;
        }
        .jago-gallery-grid {
          display: grid;
          background: #d8d6d0;
          gap: 1px;
        }
        .jago-cols-3 { grid-template-columns: repeat(3, 1fr); }
        .jago-cols-2 { grid-template-columns: repeat(2, 1fr); }
        .jago-gallery-item {
          display: flex;
          flex-direction: column;
          background: #f7f6f3;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: left;
          width: 100%;
          transition: background 200ms ease;
        }
        .jago-gallery-item:hover { background: #efede8; }
        .jago-gallery-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          overflow: hidden;
        }
        .jago-cols-3 .jago-gallery-img-wrap { aspect-ratio: 3/4; }
        .jago-cols-2 .jago-gallery-img-wrap { aspect-ratio: 2/3; }
        .jago-gallery-item:hover .jago-gallery-img {
          transform: scale(1.03) !important;
        }
        .jago-gallery-caption {
          padding: 14px 16px 18px;
          border-top: 1px solid #d8d6d0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .jago-gallery-index {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          color: #aaa;
          text-transform: uppercase;
        }
        .jago-gallery-alt {
          font-family: var(--font-body);
          font-size: 0.78rem;
          color: #333;
          letter-spacing: 0.01em;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (max-width: 900px) {
          .jago-cols-3 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .jago-cols-3, .jago-cols-2 { grid-template-columns: 1fr; }
          .jago-gallery-img-wrap { aspect-ratio: 4/5; }
        }
      `}</style>
    </section>
  );
}
