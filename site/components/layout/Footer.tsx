'use client';

import Link from 'next/link';

const socials = [
  { label: 'Behance',   href: 'https://www.behance.net/gabrielcarrozz1' },
  { label: 'Instagram', href: 'https://www.instagram.com/gabrielecarrozzini_/' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/feed/' },
  { label: 'Facebook',  href: 'https://www.facebook.com/gabriele.carrozzini.5/' },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: '1px solid var(--line)',
        background: 'var(--black-900)',
        padding: 'clamp(48px, 7vw, 96px) 0 clamp(32px, 4vw, 56px)',
      }}
    >
      <div className="container-site">

        {/* Main block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'clamp(32px, 5vw, 56px)', marginBottom: 'clamp(32px, 5vw, 56px)' }}>

          {/* Identity */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'block', marginBottom: 10 }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                color: 'var(--white)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}>
                GABRIELE CARROZZINI
              </span>
            </Link>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.72rem, 1vw, 0.8rem)',
              letterSpacing: '0.22em',
              color: 'var(--gray-500)',
              textTransform: 'uppercase',
            }}>
              Visual Designer &nbsp;·&nbsp; Rome, Italy
            </p>
          </div>

          {/* Social links */}
          <nav aria-label="Social links">
            <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: 'clamp(16px, 3vw, 32px)', alignItems: 'center' }}>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="footer-social"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="hairline" style={{ marginBottom: 'clamp(20px, 3vw, 32px)' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <a
            href="mailto:gabriele.carrozzini1@gmail.com"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.72rem, 1vw, 0.8rem)',
              letterSpacing: '0.08em',
              color: 'var(--white)',
              textDecoration: 'none',
              transition: 'color 200ms ease',
            }}
            onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--gray-500)')}
            onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--white)')}
          >
            gabriele.carrozzini1@gmail.com
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 3vw, 32px)', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.68rem, 0.9vw, 0.75rem)',
              letterSpacing: '0.1em',
              color: 'var(--gray-700)',
              textTransform: 'uppercase',
            }}>
              © {new Date().getFullYear()} Gabriele Carrozzini
            </span>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="footer-top-btn"
            >
              ↑ Top
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-social {
          font-family: var(--font-mono);
          font-size: clamp(0.72rem, 1vw, 0.82rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gray-500);
          text-decoration: none;
          transition: color 220ms ease;
        }
        .footer-social:hover { color: var(--white); }

        .footer-top-btn {
          background: none;
          border: 1px solid var(--gray-700);
          color: var(--gray-500);
          font-family: var(--font-mono);
          font-size: clamp(0.65rem, 0.85vw, 0.72rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 8px 16px;
          cursor: pointer;
          transition: border-color 200ms ease, color 200ms ease;
        }
        .footer-top-btn:hover {
          border-color: var(--white);
          color: var(--white);
        }
      `}</style>
    </footer>
  );
}
