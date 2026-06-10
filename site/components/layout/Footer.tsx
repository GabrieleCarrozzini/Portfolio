'use client';

import Link from 'next/link';

const socials = [
  { label: 'ArtStation', href: '#', abbr: 'AS' },
  { label: 'Behance', href: '#', abbr: 'BE' },
  { label: 'Instagram', href: '#', abbr: 'IG' },
  { label: 'LinkedIn', href: '#', abbr: 'LI' },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: '1px solid var(--line)',
        background: 'var(--black-900)',
        padding: 'var(--space-6) 0',
      }}
    >
      <div className="container-site">
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'block', marginBottom: 8 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--white)', letterSpacing: '-0.02em' }}>
                GABRIELE CARROZZINI
              </span>
            </Link>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.24em', color: 'var(--gold-500)', textTransform: 'uppercase' }}>
              3D Character Artist &amp; Art Director
            </p>
          </div>

          {/* Socials */}
          <nav aria-label="Social links" style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-500)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
                onMouseOver={(e) => ((e.target as HTMLElement).style.color = 'var(--gold-500)')}
                onMouseOut={(e) => ((e.target as HTMLElement).style.color = 'var(--gray-500)')}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Gold hairline */}
        <div className="hairline" style={{ marginBottom: 'var(--space-4)' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--gray-700)', textTransform: 'uppercase' }}>
            © {new Date().getFullYear()} Gabriele Carrozzini — All rights reserved
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:hello@gabrielecarrozzini.com"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--gold-500)', textDecoration: 'none' }}
            >
              hello@gabrielecarrozzini.com
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              style={{
                background: 'none', border: '1px solid var(--gray-700)', color: 'var(--gray-500)',
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', padding: '6px 12px', cursor: 'pointer',
                transition: 'border-color 200ms ease, color 200ms ease',
              }}
              onMouseOver={(e) => { const el = e.currentTarget; el.style.borderColor = 'var(--gold-500)'; el.style.color = 'var(--gold-500)'; }}
              onMouseOut={(e) => { const el = e.currentTarget; el.style.borderColor = 'var(--gray-700)'; el.style.color = 'var(--gray-500)'; }}
            >
              ↑ Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
