'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import InteractiveBentoGallery, { MediaItemType } from '@/components/ui/interactive-bento-gallery';

const workItems: MediaItemType[] = [
  {
    id: 1,
    type: 'image',
    title: 'Lara Croft',
    desc: 'Poster Design · Fan Study',
    url: '/projects/lara/gallery-01.png',
    span: 'md:col-span-1 md:row-span-4 sm:col-span-1 sm:row-span-3 col-span-1 row-span-3',
  },
  {
    id: 2,
    type: 'image',
    title: 'Sandevistan',
    desc: 'Glitch Photography · 3D Character',
    url: '/projects/sandevistan/hero.jpg',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2 col-span-1 row-span-2',
  },
  {
    id: 3,
    type: 'image',
    title: 'V — Cyberpunk',
    desc: '3D Character · Art Direction',
    url: '/projects/v/gallery-03.png',
    span: 'md:col-span-1 md:row-span-4 sm:col-span-1 sm:row-span-3 col-span-1 row-span-3',
  },
  {
    id: 4,
    type: 'image',
    title: 'Fuji',
    desc: 'Advertising · Product Composition',
    url: '/projects/fuji/hero.jpg',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2 col-span-1 row-span-2',
  },
  {
    id: 5,
    type: 'image',
    title: 'V — Poster',
    desc: 'Cyberpunk Poster Design',
    url: '/projects/v/gallery-01.png',
    span: 'md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-2 col-span-1 row-span-2',
  },
  {
    id: 6,
    type: 'image',
    title: 'Lara — Portrait',
    desc: 'Character Portrait · B&W',
    url: '/projects/lara/gallery-03.jpg',
    span: 'md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-2 col-span-1 row-span-2',
  },
  {
    id: 7,
    type: 'image',
    title: 'SoMi',
    desc: 'B&W Portrait · Dark Study',
    url: '/projects/somi/gallery-01.png',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 col-span-1 row-span-2',
  },
  {
    id: 8,
    type: 'image',
    title: 'Neon Sessions',
    desc: 'Portrait Sessions · Neon Light',
    url: '/projects/songbird/gallery-01.png',
    span: 'md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-2 col-span-1 row-span-2',
  },
  {
    id: 9,
    type: 'image',
    title: 'Turn Me Off',
    desc: 'Cover Design · Concept',
    url: '/projects/turn-me-off/hero.png',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 col-span-1 row-span-2',
  },
]

export default function BentoSection() {
  return (
    <section
      aria-labelledby="bento-heading"
      style={{
        background: 'var(--black-900)',
        paddingTop: 'var(--space-7)',
        paddingBottom: 'var(--space-7)',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div className="container-site" style={{ marginBottom: 'var(--space-6)' }}>
        <ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-2)' }}>
            <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Selected Work</span>
            <h2
              id="bento-heading"
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
              Gallery
            </h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.16em', color: 'var(--gray-500)', textTransform: 'uppercase' }}>
              Click to expand · drag to reorder
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="container-site">
        <InteractiveBentoGallery mediaItems={workItems} />
      </div>
    </section>
  )
}
