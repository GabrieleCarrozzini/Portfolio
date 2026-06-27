'use client';

import Link from 'next/link';

export interface ServiceCard {
  title: string;
  subtitle: string;
  backImage: string;
  frontImage: string;
  href: string;
  accent: string;
}

export function ServicesGrid({ cards }: { cards: ServiceCard[] }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {cards.map((svc, i) => (
          <Link
            key={i}
            href={svc.href}
            className="svc-card group"
            onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.borderColor = svc.accent + '55')}
            onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--line)')}
          >
            {/* Stacked images */}
            <div className="svc-images">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={svc.backImage}  alt="" aria-hidden="true" className="svc-img-back"  />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={svc.frontImage} alt="" aria-hidden="true" className="svc-img-front" />
            </div>

            {/* Text */}
            <div className="svc-text">
              <p className="svc-subtitle">{svc.subtitle}</p>
              <h3 className="svc-title">{svc.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .svc-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: var(--black-800);
          border: 1px solid var(--line);
          border-radius: 0;
          padding: 28px 28px 24px;
          height: 340px;
          text-decoration: none;
          transition: border-color 300ms ease;
          overflow: hidden;
        }

        .svc-images {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .svc-img-back,
        .svc-img-front {
          position: absolute;
          width: 155px;
          height: auto;
          object-fit: cover;
          border-radius: 0;
        }
        .svc-img-back  {
          transform: rotate(-6deg);
          transition: transform 420ms cubic-bezier(0.16,1,0.3,1);
        }
        .svc-img-front {
          transform: rotate(4deg);
          transition: transform 420ms cubic-bezier(0.16,1,0.3,1);
        }

        .group:hover .svc-img-back  { transform: rotate(-11deg) scale(1.06); }
        .group:hover .svc-img-front { transform: rotate(8deg)   scale(1.06); }

        .svc-text {
          margin-top: auto;
          padding-top: 14px;
        }
        .svc-subtitle {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gray-500);
          margin-bottom: 6px;
        }
        .svc-title {
          font-family: var(--font-display);
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--white);
          line-height: 1.1;
        }

        @media (prefers-reduced-motion: reduce) {
          .svc-img-back, .svc-img-front { transition: none; }
        }
      `}</style>
    </>
  );
}
