'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';
import { projects } from '@/lib/data/projects';

// One full rotation every 60 s — mirrors the hero marquee loop duration
const AUTO_ROTATE_SPEED = 0.1; // deg/frame at 60 fps

const galleryItems: GalleryItem[] = projects.map((p) => ({
  common: p.title,
  binomial: p.type.split(' · ')[0],
  photo: {
    url: p.heroImage,
    text: p.tagline,
    pos: p.focalPoint,
    by: p.year,
  },
}));

export default function CollectionGallery() {
  const [radius, setRadius] = useState(560);
  const [cardSize, setCardSize] = useState<{ w: number; h: number }>({ w: 320, h: 430 });

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 768;
      setRadius(mobile ? 300 : 560);
      setCardSize(mobile ? { w: 160, h: 215 } : { w: 320, h: 430 });
    };
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section
      aria-labelledby="collection-gallery-heading"
      style={{
        background: 'var(--black-900)',
        borderTop: '1px solid var(--line)',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          position: 'absolute',
          top: 'calc(72px + var(--space-5))',
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 'var(--space-2)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <h2
          id="collection-gallery-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--fs-h1)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--white)',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          Selected Work
        </h2>
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--gray-700)',
            marginTop: 'var(--space-2)',
          }}
        >
          Drag · Click to open
        </span>
      </div>

      {/* Gallery */}
      <div style={{ width: '100%', height: '100%' }}>
        <CircularGallery items={galleryItems} radius={radius} autoRotateSpeed={AUTO_ROTATE_SPEED} itemWidth={cardSize.w} itemHeight={cardSize.h} />
      </div>

      {/* Footer CTA */}
      <div
        style={{
          position: 'absolute',
          bottom: 'var(--space-5)',
          pointerEvents: 'all',
          zIndex: 10,
        }}
      >
        <Link href="/work" className="btn-glow-white">
          View All Works →
        </Link>
      </div>

      <style>{`
        .btn-glow-white {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 20px 72px;
          background: var(--white);
          border: 1.5px solid rgba(250,250,248,0.9);
          color: #060606;
          font-family: var(--font-display);
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          animation: glow-pulse 2.8s ease-in-out infinite;
          transition: opacity 200ms ease;
        }
        .btn-glow-white:hover { opacity: 0.88; }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 0px rgba(250,250,248,0); }
          50% { box-shadow: 0 0 16px rgba(250,250,248,0.55), 0 0 32px rgba(250,250,248,0.18); }
        }
        @media (prefers-reduced-motion: reduce) {
          .btn-glow-white { animation: none; }
        }
        @media (max-width: 768px) {
          .btn-glow-white { padding: 14px 32px; }
        }
      `}</style>
    </section>
  );
}
