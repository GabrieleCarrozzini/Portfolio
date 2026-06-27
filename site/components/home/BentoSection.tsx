import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data/projects';

export default function BentoSection() {
  return (
    <section
      aria-label="Collection"
      style={{ background: 'var(--black-900)', borderTop: '1px solid var(--line)' }}
    >
      {/* Minimal header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 24,
          padding: 'var(--space-4) var(--space-6)',
        }}
      >
        <span className="label-gold">Collection</span>
        <span className="label" style={{ color: 'var(--gray-700)' }}>
          {projects.length} Works
        </span>
      </div>

      {/* Full-bleed collection grid */}
      <div className="collection-grid">
        {projects.map((p, i) => {
          const isOrphaned = i === projects.length - 1 && projects.length % 3 === 1;
          return (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className={`collection-item${isOrphaned ? ' collection-item-wide' : ''}`}
              aria-label={`${p.title} — ${p.type}`}
            >
              <div className="collection-img-wrap">
                <Image
                  src={p.heroImage}
                  alt={p.title}
                  fill
                  sizes={
                    isOrphaned
                      ? '100vw'
                      : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  }
                  style={{
                    objectFit: 'cover',
                    objectPosition: p.focalPoint ?? 'center',
                  }}
                  loading="lazy"
                />
              </div>
              <div className="collection-overlay">
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--fs-label)',
                    letterSpacing: 'var(--tracking-label)',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                    display: 'block',
                    marginBottom: 10,
                  }}
                >
                  {p.type.split(' · ')[0]}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    color: 'var(--white)',
                  }}
                >
                  {p.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>

      <style>{`
        .collection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .collection-item {
          position: relative;
          display: block;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          text-decoration: none;
          background: var(--black-800);
        }
        .collection-item-wide {
          grid-column: 1 / -1;
          aspect-ratio: 16 / 9;
        }
        .collection-img-wrap {
          position: absolute;
          inset: 0;
          transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .collection-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: clamp(16px, 3vw, 32px);
          background: linear-gradient(
            to top,
            rgba(6, 6, 6, 0.88) 0%,
            rgba(6, 6, 6, 0.3) 55%,
            transparent 100%
          );
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 280ms ease, transform 280ms ease;
        }
        .collection-item:hover .collection-img-wrap {
          transform: scale(1.05);
        }
        .collection-item:hover .collection-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        @media (hover: none) {
          .collection-overlay {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 767px) {
          .collection-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .collection-item-wide {
            grid-column: 1 / -1;
            aspect-ratio: 4 / 3;
          }
        }
        @media (max-width: 480px) {
          .collection-grid {
            grid-template-columns: 1fr;
          }
          .collection-item,
          .collection-item-wide {
            aspect-ratio: 4 / 3;
            grid-column: auto;
          }
        }
      `}</style>
    </section>
  );
}
