'use client';

import Link from 'next/link';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

export default function Hero() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="/projects/v/gallery-01.png"
      bgImageSrc="/projects/lara/gallery-03.jpg"
      title="GABRIELE CARROZZINI"
      date="Visual Designer · Rome, Italy"
      scrollToExpand="Scroll to expand"
      textBlend
    >
      {/* ── Content visible after full expansion ── */}
      <div
        style={{
          background: 'var(--black-900)',
          borderTop: '1px solid var(--line)',
          padding: 'var(--space-7) 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 'var(--space-5)',
        }}
      >
        <div>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.28em',
              color: 'var(--gold-500)',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-4)',
            }}
          >
            Visual Designer · Rome, Italy
          </span>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-body)',
              color: 'var(--gray-500)',
              maxWidth: '38ch',
              lineHeight: 1.7,
              fontStyle: 'italic',
              margin: '0 auto',
            }}
          >
            Design should communicate before it decorates.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <Link href="/work" className="btn-gold">
            View Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/contact" className="btn-ghost">Start a Project</Link>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}
