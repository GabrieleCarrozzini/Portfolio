'use client';

import InfiniteGallery from '@/components/ui/3d-gallery-photography';

const portfolioImages = [
  { src: '/projects/lara/gallery-01.png',        alt: 'Lara Croft' },
  { src: '/projects/sandevistan/hero.jpg',        alt: 'Sandevistan' },
  { src: '/projects/v/gallery-03.png',            alt: 'V — Cyberpunk' },
  { src: '/projects/fuji/hero.jpg',               alt: 'Fuji' },
  { src: '/projects/v/gallery-01.png',            alt: 'V — Poster' },
  { src: '/projects/lara/gallery-03.jpg',         alt: 'Lara Portrait' },
  { src: '/projects/somi/gallery-01.png',         alt: 'SoMi' },
  { src: '/projects/songbird/gallery-01.png',     alt: 'Neon Sessions' },
  { src: '/projects/turn-me-off/hero.png',        alt: 'Turn Me Off' },
  { src: '/projects/v/gallery-04.png',            alt: 'V Gold' },
  { src: '/projects/lara/gallery-05.jpg',         alt: 'Lara Close-up' },
  { src: '/projects/sandevistan/gallery-02.png',  alt: 'Sandevistan Portrait' },
];

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100dvh', background: 'var(--black-900)', overflow: 'hidden' }}>

      {/* 3D Gallery — fills the full hero */}
      <InfiniteGallery
        images={portfolioImages}
        speed={1}
        visibleCount={12}
        className="absolute inset-0 w-full h-full"
        style={{ position: 'absolute', inset: 0 }}
        fadeSettings={{ fadeIn: { start: 0.05, end: 0.25 }, fadeOut: { start: 0.4, end: 0.43 } }}
        blurSettings={{ blurIn: { start: 0.0, end: 0.1 }, blurOut: { start: 0.4, end: 0.43 }, maxBlur: 6.0 }}
      />

      {/* Name — mix-blend-exclusion punches through the images */}
      <div
        aria-label="Gabriele Carrozzini"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mixBlendMode: 'exclusion',
          pointerEvents: 'none',
          zIndex: 10,
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 10vw, 11rem)',
            fontWeight: 700,
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
          }}
        >
          <span style={{ display: 'block' }}>GABRIELE</span>
          <span style={{ display: 'block' }}>CARROZZINI</span>
        </h1>
      </div>

      {/* Bottom labels */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 var(--space-6)',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.28em',
            color: 'rgba(250,250,248,0.45)',
            textTransform: 'uppercase',
          }}
        >
          Visual Designer · Rome, Italy
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.28em',
            color: 'rgba(250,250,248,0.25)',
            textTransform: 'uppercase',
          }}
        >
          Scroll to explore
        </span>
      </div>

    </section>
  );
}
