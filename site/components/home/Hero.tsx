'use client';

import { AnimatedMarqueeHero } from '@/components/ui/hero-3';

const HERO_IMAGES = [
  // Hero mockups
  '/hero/v-poster-wall-mockup.png',
  '/hero/turn-me-off-book-mockup.png',
  '/hero/lara-logo-asset.png',
  '/hero/fuji-billboard-mockup-angle.png',
  // V
  '/projects/v/gallery-01.png',
  '/projects/v/gallery-02.png',
  '/projects/v/gallery-03.png',
  '/projects/v/gallery-04.png',
  '/projects/v/gallery-05.png',
  // Sandevistan
  '/projects/sandevistan/hero.jpg',
  '/projects/sandevistan/gallery-02.png',
  '/projects/sandevistan/gallery-03.png',
  '/projects/sandevistan/gallery-04.png',
  '/projects/sandevistan/gallery-05.png',
  // Fuji
  '/projects/fuji/hero.jpg',
  '/projects/fuji/gallery-02.png',
  '/projects/fuji/gallery-03.png',
  // Lara
  '/projects/lara/gallery-01.png',
  '/projects/lara/gallery-02.png',
  '/projects/lara/gallery-03.jpg',
  '/projects/lara/gallery-04.png',
  '/projects/lara/gallery-05.jpg',
  '/projects/lara/gallery-06.png',
  '/projects/lara/gallery-07.png',
  '/projects/lara/gallery-08.jpg',
  // Turn Me Off
  '/projects/turn-me-off/hero.png',
  '/projects/turn-me-off/gallery-01.png',
  // Neon Sessions
  '/projects/songbird/gallery-01.png',
  '/projects/songbird/gallery-04.png',
  '/projects/songbird/gallery-05.png',
  '/projects/songbird/gallery-06.png',
  '/projects/songbird/gallery-07.png',
  // SoMi
  '/projects/somi/gallery-01.png',
  '/projects/somi/gallery-02.png',
  '/projects/somi/gallery-03.png',
  '/projects/somi/gallery-04.png',
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
