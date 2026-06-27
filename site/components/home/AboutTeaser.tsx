import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutTeaser() {
  return (
    <section aria-labelledby="about-teaser-heading" style={{ background: 'var(--black-900)', paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)', borderTop: '1px solid var(--line)' }}>
      <div className="container-site">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', alignItems: 'center' }}>
          {/* Left â€" text */}
          <ScrollReveal direction="left">
            <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>About</span>
            <h2 id="about-teaser-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1.05, marginBottom: 'var(--space-4)' }}>
              Form over<br />literal meaning.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--gray-500)', lineHeight: 1.7, maxWidth: '45ch', marginBottom: 'var(--space-5)' }}>
              Gabriele Carrozzini is a visual designer based in Rome, Italy. He works across brand identity, art direction, poster design, character art, and digital experiences â€" always built on one principle: design should communicate before it decorates.
            </p>
            <Link href="/about" className="btn-ghost" aria-label="Read full biography">
              Full Bio →
            </Link>
          </ScrollReveal>

          {/* Right — portrait */}
          <ScrollReveal>
            <div
              style={{
                position: 'relative',
                aspectRatio: '4/5',
                background: 'var(--black-800)',
                overflow: 'hidden',
                border: '1px solid var(--line)',
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Gabriele Carrozzini, Visual Designer, Rome"
                fill
                sizes="(max-width: 767px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
              {/* HUD corners */}
              <div style={{ position: 'absolute', top: 20, left: 20, width: 24, height: 24, borderTop: '1px solid var(--gold-500)', borderLeft: '1px solid var(--gold-500)', zIndex: 2 }} aria-hidden="true" />
              <div style={{ position: 'absolute', bottom: 20, right: 20, width: 24, height: 24, borderBottom: '1px solid var(--gold-500)', borderRight: '1px solid var(--gold-500)', zIndex: 2 }} aria-hidden="true" />
              <div style={{ position: 'absolute', bottom: 20, left: 20, zIndex: 2 }}>
                <span className="label" style={{ color: 'var(--gold-500)' }}>G. Carrozzini</span>
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 50%, rgba(6,6,6,0.45) 100%)', zIndex: 1 }} aria-hidden="true" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Responsive stacking */}
      <style>{`
        @media (max-width: 767px) {
          #about-teaser-heading {
            grid-column: 1 / -1;
          }
          section[aria-labelledby="about-teaser-heading"] .container-site > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

