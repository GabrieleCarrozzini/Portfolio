'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const projectTypes = [
  'Select project type',
  'Brand Identity & Visual System',
  'Poster & Key Art Design',
  'Cover & Packaging Design',
  'Art Direction',
  'Character Art & Illustration',
  'Digital Experience',
  'Other / General Inquiry',
];

const socials = [
  {
    label: 'Instagram',
    handle: '@gabrielecarrozzini_',
    href: 'https://www.instagram.com/gabrielecarrozzini_',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
      </svg>
    ),
    desc: 'Visual Stories',
  },
  {
    label: 'Behance',
    handle: 'behance.net/gabrielecarrozzini',
    href: 'https://www.behance.net/gabrielecarrozzini',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zm-7.183-2.895c.157-2.249-1.617-2.484-2.579-2.484-.929 0-2.44.516-2.49 2.484h5.069zM8.183 12.339c1.105 0 2.08-.548 2.08-1.773 0-1.227-.975-1.773-2.08-1.773H4v3.546h4.183zm-.13 4.742c1.229 0 2.286-.578 2.286-1.923 0-1.346-1.057-1.924-2.286-1.924H4v3.847h4.053z"/>
      </svg>
    ),
    desc: 'Portfolio',
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/gabrielecarrozzini',
    href: 'https://www.linkedin.com/in/gabriele-carrozzini',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    desc: 'Professional Network',
  },
];

export default function ContactClient() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
  };

  return (
    <div style={{ background: 'var(--black-900)', paddingTop: 'calc(72px + var(--space-7))', paddingBottom: 'var(--space-8)' }}>
      <div className="container-site">

        {/* ── Header ── */}
        <ScrollReveal style={{ marginBottom: 'var(--space-7)' }}>
          <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Contact</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--white)', lineHeight: 1, textTransform: 'uppercase', marginBottom: 'var(--space-3)' }}>
            Start a<br />Conversation.
          </h1>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--gold-500)', textTransform: 'uppercase' }}>
            Available for Freelance · Open to Roles
          </div>
        </ScrollReveal>

        <div className="hairline" style={{ marginBottom: 'var(--space-6)' }} />

        {/* ── Two-column layout ── */}
        <div className="contact-grid">

          {/* ── Left column ── */}
          <ScrollReveal direction="left">

            {/* Direct line */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <div className="label" style={{ marginBottom: 'var(--space-3)' }}>Direct Line</div>
              <a
                href="mailto:gabriele.carrozzini1@gmail.com"
                className="contact-email"
              >
                gabriele.carrozzini1@gmail.com
              </a>
              <a
                href="tel:+393891942431"
                className="contact-phone"
              >
                +39 389 194 2431
              </a>
            </div>

            {/* Social cards */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <div className="label" style={{ marginBottom: 'var(--space-3)' }}>Portfolios &amp; Socials</div>
              <div className="social-grid">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card"
                    aria-label={`${s.label} — ${s.handle}`}
                  >
                    <span className="social-card__icon">{s.icon}</span>
                    <span className="social-card__body">
                      <span className="social-card__name">{s.label}</span>
                      <span className="social-card__desc">{s.desc}</span>
                    </span>
                    <span className="social-card__arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div style={{ padding: 'var(--space-4)', border: '1px solid var(--line)', background: 'var(--black-800)' }}>
              <div className="label-gold" style={{ marginBottom: 8 }}>Availability</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                Available for freelance projects and open to full-time creative roles. Typical project lead time 2–4 weeks.
              </p>
              <div style={{ marginTop: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4CAF50', display: 'inline-block', boxShadow: '0 0 6px #4CAF50' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.18em', color: '#4CAF50', textTransform: 'uppercase' }}>Available Now</span>
              </div>
            </div>

          </ScrollReveal>

          {/* ── Right column — form ── */}
          <ScrollReveal>
            {status === 'sent' ? (
              <div style={{ padding: 'var(--space-7)', textAlign: 'center', border: '1px solid var(--gold-500)', background: 'var(--black-800)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 700, color: 'var(--gold-500)', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: 'var(--space-3)' }}>Message Sent.</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--gray-500)', lineHeight: 1.65 }}>
                  Thanks for reaching out. I&rsquo;ll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Contact form" noValidate style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div className="form-two-col">
                  <div>
                    <label htmlFor="name" className="label" style={{ display: 'block', marginBottom: 6 }}>Name *</label>
                    <input id="name" name="name" type="text" required autoComplete="name" className="form-input" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="email" className="label" style={{ display: 'block', marginBottom: 6 }}>Email *</label>
                    <input id="email" name="email" type="email" required autoComplete="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label htmlFor="type" className="label" style={{ display: 'block', marginBottom: 6 }}>Project Type</label>
                  <select id="type" name="type" className="form-input" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} style={{ background: 'var(--black-900)' }}>
                    {projectTypes.map((t) => (
                      <option key={t} value={t === 'Select project type' ? '' : t} style={{ background: 'var(--black-900)', color: 'var(--white)' }}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="label" style={{ display: 'block', marginBottom: 6 }}>Message *</label>
                  <textarea id="message" name="message" required rows={6} className="form-input" placeholder="Brief the project — scope, timeline, references…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical', fontFamily: 'var(--font-body)' }} />
                </div>
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
                <button type="submit" disabled={status === 'sending'} className="btn-gold" style={{ alignSelf: 'flex-start', padding: '14px 32px', opacity: status === 'sending' ? 0.7 : 1 }} aria-disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  {status !== 'sending' && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>

      {/* Footer stamp */}
      <div className="container-site" style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
        <div className="hairline" style={{ marginBottom: 'var(--space-5)' }} />
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'rgba(255,255,255,0.15)', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>VISUAL POWER</p>
        <p aria-hidden="true" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.28em', color: 'rgba(250,250,248,0.12)', marginTop: 8 }}>XN4LCO-43KS · æœªæ¥</p>
      </div>

      <style>{`
        /* Two-column page grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: var(--space-7);
          align-items: start;
        }

        /* Direct line links */
        .contact-email {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(1rem, 2.2vw, 1.4rem);
          font-weight: 700;
          color: var(--white);
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: color 200ms ease;
          word-break: break-all;
          margin-bottom: 12px;
        }
        .contact-email:hover { color: var(--gold-500); }

        .contact-phone {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          color: var(--gray-500);
          text-decoration: none;
          transition: color 200ms ease;
        }
        .contact-phone:hover { color: var(--white); }

        /* Social cards grid */
        .social-grid {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .social-card {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3) var(--space-3);
          background: var(--black-800);
          border: 1px solid var(--line);
          text-decoration: none;
          transition: border-color 220ms ease, background 220ms ease;
          cursor: pointer;
        }
        .social-card:hover {
          border-color: var(--gold-500);
          background: var(--black-700, #111);
        }
        .social-card:hover .social-card__arrow {
          transform: translateX(4px);
          color: var(--gold-500);
        }
        .social-card:hover .social-card__name {
          color: var(--gold-500);
        }

        .social-card__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border: 1px solid var(--line);
          color: var(--white);
          transition: border-color 220ms ease;
        }
        .social-card:hover .social-card__icon {
          border-color: var(--gold-500);
        }

        .social-card__body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .social-card__name {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--white);
          transition: color 220ms ease;
        }

        .social-card__desc {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          color: var(--gray-600, var(--gray-500));
          text-transform: uppercase;
        }

        .social-card__arrow {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--gray-600, var(--gray-500));
          transition: transform 220ms ease, color 220ms ease;
          flex-shrink: 0;
        }

        /* Form two-col */
        .form-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3);
        }

        /* Responsive */
        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .form-two-col { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
