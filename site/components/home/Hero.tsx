'use client';

import { AnimatedMarqueeHero } from '@/components/ui/hero-3';

const HERO_IMAGES = [
  '/hero/v-poster-wall-mockup.png',
  '/hero/turn-me-off-book-mockup.png',
  '/hero/lara-logo-asset.png',
  '/hero/fuji-billboard-mockup-angle.png',
  '/projects/lara/gallery-01.png',
  '/projects/lara/gallery-03.jpg',
  '/projects/sandevistan/hero.jpg',
  '/projects/v/gallery-01.png',
  '/projects/somi/gallery-01.png',
  '/projects/songbird/gallery-01.png',
  '/projects/turn-me-off/hero.png',
  '/projects/v/gallery-03.png',
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
