'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import ScrollReveal from '@/components/ui/ScrollReveal';

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/>
  </svg>
);
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

/* ── Social links ─────────────────────────────────────────────── */
const socials = [
  {
    href: 'https://www.instagram.com/gabrielecarrozzini_',
    label: 'Instagram',
    handle: '@gabrielecarrozzini_',
    icon: <IconInstagram />,
  },
  {
    href: 'https://www.behance.net/gabrielecarrozzini',
    label: 'Behance',
    handle: 'behance.net/gabrielecarrozzini',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zm-7.183-2.895c.157-2.249-1.617-2.484-2.579-2.484-.929 0-2.44.516-2.49 2.484h5.069zM8.183 12.339c1.105 0 2.08-.548 2.08-1.773 0-1.227-.975-1.773-2.08-1.773H4v3.546h4.183zm-.13 4.742c1.229 0 2.286-.578 2.286-1.923 0-1.346-1.057-1.924-2.286-1.924H4v3.847h4.053z"/>
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/gabriele-carrozzini',
    label: 'LinkedIn',
    handle: 'linkedin.com/in/gabriele-carrozzini',
    icon: <IconLinkedin />,
  },
  {
    href: 'https://github.com/GabrieleCarrozzini',
    label: 'GitHub',
    handle: 'github.com/GabrieleCarrozzini',
    icon: <IconGithub />,
  },
];

/* ── Skills list ──────────────────────────────────────────────── */
const skills = [
  'Brand Identity',
  'Art Direction',
  'Poster Design',
  'Key Art',
  'Character Art',
  'Cover Design',
  'Motion',
  'Digital Experience',
];

/* ── Connect mini-form ────────────────────────────────────────── */
function ConnectForm() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || message.trim().length < 3) return;
    setStatus('sent');
    setMessage('');
    setTimeout(() => setStatus('idle'), 2500);
  };

  return (
    <form onSubmit={handleSend} style={{ display: 'flex', gap: 8, width: '100%', maxWidth: 480 }}>
      <input
        ref={inputRef}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Quick message…"
        maxLength={200}
        className={twMerge(
          'form-input',
          'flex-1 rounded-none',
        )}
        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}
      />
      <button
        type="submit"
        disabled={!message.trim() || message.trim().length < 3}
        className="btn-gold"
        style={{ padding: '0 20px', opacity: message.trim().length >= 3 ? 1 : 0.45 }}
      >
        Send →
      </button>
    </form>
  );
}

/* ── Main export ──────────────────────────────────────────────── */
export const PersonalLanding: React.FC = () => {
  return (
    <div style={{ background: 'var(--black-900)', paddingTop: 'calc(72px + var(--space-7))', paddingBottom: 'var(--space-8)' }}>
      <div className="container-site">

        {/* ── Hero ── */}
        <ScrollReveal style={{ marginBottom: 'var(--space-7)' }}>
          <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>About</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--fs-h1)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--white)',
            lineHeight: 1,
            textTransform: 'uppercase',
          }}>
            Form Over<br />Literal Meaning.
          </h1>
        </ScrollReveal>

        <div className="hairline" style={{ marginBottom: 'var(--space-6)' }} />

        {/* ── Profile + Bio ── */}
        <div className="about-grid" style={{ marginBottom: 'var(--space-7)' }}>
          {/* Portrait */}
          <ScrollReveal direction="left">
            <div style={{
              position: 'relative',
              aspectRatio: '4/5',
              background: 'var(--black-800)',
              overflow: 'hidden',
              border: '1px solid var(--line)',
            }}>
              <Image
                src="/profile.jpg"
                alt="Gabriele Carrozzini, Visual Designer, Rome"
                fill
                sizes="(max-width: 767px) 100vw, 40vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
              {/* HUD corners */}
              <div style={{ position: 'absolute', top: 20, left: 20, width: 24, height: 24, borderTop: '1px solid var(--gold-500)', borderLeft: '1px solid var(--gold-500)', zIndex: 2 }} aria-hidden="true" />
              <div style={{ position: 'absolute', bottom: 20, right: 20, width: 24, height: 24, borderBottom: '1px solid var(--gold-500)', borderRight: '1px solid var(--gold-500)', zIndex: 2 }} aria-hidden="true" />
              <div style={{ position: 'absolute', bottom: 20, left: 20, zIndex: 2 }}>
                <span className="label" style={{ color: 'var(--gold-500)' }}>Rome, Italy</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-body)',
              color: 'var(--gray-500)',
              lineHeight: 1.75,
              marginBottom: 'var(--space-4)',
            }}>
              Gabriele Carrozzini is a visual designer based in Rome, Italy. He works across brand identity, art direction, poster design, character art, and digital experiences — always built on one principle: design should communicate before it decorates.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-body)',
              color: 'var(--gray-500)',
              lineHeight: 1.75,
              marginBottom: 'var(--space-5)',
            }}>
              With a background spanning editorial, branding, and motion, his work sits at the intersection of visual culture and strategic communication. Every project begins with research and ends with intention.
            </p>

            {/* Skills */}
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <div className="label" style={{ marginBottom: 'var(--space-2)' }}>Disciplines</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skills.map((s) => (
                  <span key={s} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--gray-500)',
                    border: '1px solid var(--line)',
                    padding: '4px 10px',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <Link href="/work" className="btn-gold" style={{ padding: '12px 28px' }}>
                View Work →
              </Link>
              <Link href="/contact" className="btn-ghost" style={{ padding: '12px 28px' }}>
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="hairline" style={{ marginBottom: 'var(--space-6)' }} />

        {/* ── Socials + Connect ── */}
        <div className="about-bottom-grid">

          {/* Socials */}
          <ScrollReveal direction="left">
            <div className="label" style={{ marginBottom: 'var(--space-3)' }}>Find Me On</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-row"
                  aria-label={`${s.label} — ${s.handle}`}
                >
                  <span className="social-row__icon">{s.icon}</span>
                  <span className="social-row__label">{s.label}</span>
                  <span className="social-row__handle">{s.handle} →</span>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Availability + quick message */}
          <ScrollReveal>
            <div style={{ padding: 'var(--space-4)', border: '1px solid var(--line)', background: 'var(--black-800)', marginBottom: 'var(--space-4)' }}>
              <div className="label-gold" style={{ marginBottom: 8 }}>Availability</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--gray-500)', lineHeight: 1.6, marginBottom: 'var(--space-2)' }}>
                Available for freelance projects and open to full-time creative roles. Typical lead time 2–4 weeks.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4CAF50', display: 'inline-block', boxShadow: '0 0 6px #4CAF50' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.18em', color: '#4CAF50', textTransform: 'uppercase' }}>Available Now</span>
              </div>
            </div>

            <div className="label" style={{ marginBottom: 'var(--space-2)' }}>Quick Message</div>
            <ConnectForm />
          </ScrollReveal>
        </div>
      </div>

      {/* Footer stamp */}
      <div className="container-site" style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
        <div className="hairline" style={{ marginBottom: 'var(--space-5)' }} />
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'rgba(255,255,255,0.15)', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>VISUAL POWER</p>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: var(--space-6);
          align-items: start;
        }
        .about-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-6);
          align-items: start;
        }
        .social-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-2) var(--space-2);
          border-bottom: 1px solid var(--line);
          text-decoration: none;
          transition: border-color 200ms ease;
        }
        .social-row:hover { border-bottom-color: var(--gold-500); }
        .social-row__icon {
          display: flex;
          align-items: center;
          color: var(--white);
          flex-shrink: 0;
        }
        .social-row__label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--white);
          flex: 1;
        }
        .social-row__handle {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          color: var(--gray-500);
          transition: color 200ms ease;
        }
        .social-row:hover .social-row__handle { color: var(--gold-500); }

        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr; }
          .about-bottom-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
