import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ContactBand() {
  return (
    <section
      aria-labelledby="contact-band-heading"
      style={{
        background: 'var(--black-800)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        paddingTop: 'var(--space-8)',
        paddingBottom: 'var(--space-8)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Centered hairline accent */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 64, height: 1, background: 'var(--gold-500)' }} aria-hidden="true" />
      {/* Ghosted background text */}
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-0.1em', left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-display)', fontSize: 'clamp(7rem, 20vw, 22rem)', fontWeight: 700, letterSpacing: '-0.05em', textTransform: 'uppercase', color: 'rgba(250,250,248,0.025)', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', lineHeight: 1, zIndex: 0 }}>
        Contact
      </div>
      {/* Grid bg */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(250,250,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,248,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="container-site" style={{ position: 'relative', textAlign: 'center' }}>
        <ScrollReveal>
          <span className="label" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>
            Available for Freelance · Open to Roles
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            id="contact-band-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 6vw, 6rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
              color: 'var(--white)',
              lineHeight: 1.05,
              marginBottom: 'var(--space-4)',
            }}
          >
            Let&rsquo;s Make Something <span style={{ color: 'var(--gold-500)' }}>Memorable.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-gold" style={{ padding: '16px 36px' }}>
            Start a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a href="mailto:gabriele.carrozzini1@gmail.com" className="btn-ghost" style={{ padding: '16px 36px' }}>
            Email Directly
          </a>
        </ScrollReveal>

        {/* Decorative code string */}
        <div
          aria-hidden="true"
          style={{
            marginTop: 'var(--space-6)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.28em',
            color: 'rgba(250,250,248,0.15)',
            textTransform: 'uppercase',
          }}
        >
          XN4LCO-43KS · æœªæ¥ · VISUAL POWER
        </div>
      </div>
    </section>
  );
}

