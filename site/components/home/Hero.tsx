'use client';

import { AnimatedMarqueeHero } from '@/components/ui/hero-3';

// Interleaved across projects — never two adjacent images from the same project
const HERO_IMAGES = [
  '/hero-roll/ASSET-lara-lara-portrait-hero.webp',
  '/hero-roll/ASSET-sandevistan-RED-official.webp',
  '/hero-roll/ASSET-reference-songbird-july14-portrait-01.webp',
  '/hero-roll/ASSET-v-v-character-cutout-gold.webp',
  '/hero-roll/ASSET-somi-somi-character-export.webp',
  '/hero-roll/projects-fuji-gallery-03.webp',
  '/hero-roll/hero-turn-me-off-book-mockup.webp',
  '/hero-roll/ASSET-sandevistan-sandevistan-cutout-clean.webp',
  '/hero-roll/ASSET-reference-songbird-july15-portrait-01.webp',
  '/hero-roll/ASSET-lara-lara-poster-design.webp',
  '/hero-roll/ASSET-v-v-photo-golden-light.webp',
  '/hero-roll/ASSET-somi-somi-portrait-01-bw.webp',
  '/hero-roll/ASSET-fuji-fuji-billboard-mockup-front.webp',
  '/hero-roll/ASSET-reference-songbird-july14-portrait-02.webp',
  '/hero-roll/ASSET-lara-lara-portrait-original.webp',
  '/hero-roll/ASSET-sandevistan-sandevistan-cutout-exposed.webp',
  '/hero-roll/hero-v-poster-wall-mockup.webp',
  '/hero-roll/ASSET-reference-songbird-july15-portrait-02.webp',
  '/hero-roll/projects-lara-gallery-02.webp',
  '/hero-roll/ASSET-turn-me-off-turn-me-off-cover-flat.webp',
  '/hero-roll/ASSET-v-v-poster-white-card.webp',
  '/hero-roll/ASSET-fuji-fuji-poster-design.webp',
  '/hero-roll/ASSET-reference-songbird-july14-portrait-03.webp',
  '/hero-roll/ASSET-lara-lara-portrait-vertical.webp',
  '/hero-roll/ASSET-sandevistan-sandevistan-photo-full-body.webp',
  '/hero-roll/ASSET-somi-somi-portrait-02-bw.webp',
  '/hero-roll/ASSET-reference-songbird-july15-portrait-03.webp',
  '/hero-roll/hero-lara-logo-asset.webp',
  '/hero-roll/projects-lara-gallery-05.webp',
];

export default function Hero() {
  return (
    <AnimatedMarqueeHero
      tagline="Visual Designer · Rome, Italy"
      title={
        <>
          <span style={{ display: 'block' }}>GABRIELE</span>
          <span style={{ display: 'block' }}>CARROZZINI</span>
        </>
      }
      description="Photography, branding & motion"
      ctaText="View Work"
      ctaHref="/work"
      images={HERO_IMAGES}
    />
  );
}
