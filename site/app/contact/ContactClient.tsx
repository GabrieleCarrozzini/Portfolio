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
  { label: 'Instagram', handle: '@gabrielecarrozzini_', href: 'https://www.instagram.com/gabrielecarrozzini_' },
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

        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 'var(--space-7)', alignItems: 'start' }}>
          {/* Left */}
          <ScrollReveal direction="left">
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <div className="label" style={{ marginBottom: 'var(--space-3)' }}>Direct Line</div>
              <a
                href="mailto:gabriele.carrozzini1@gmail.com"
                style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.2vw, 1.4rem)', fontWeight: 700, color: 'var(--white)', textDecoration: 'none', letterSpacing: '-0.01em', transition: 'color 200ms ease', wordBreak: 'break-all', marginBottom: 12 }}
                onMouseOver={(e) => ((e.target as HTMLElement).style.color = 'var(--gold-500)')}
                onMouseOut={(e) => ((e.target as HTMLElement).style.color = 'var(--white)')}
              >
                gabriele.carrozzini1@gmail.com
              </a>
              <a
                href="tel:+393891942431"
                style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.12em', color: 'var(--gray-500)', textDecoration: 'none', transition: 'color 200ms ease' }}
                onMouseOver={(e) => ((e.target as HTMLElement).style.color = 'var(--white)')}
                onMouseOut={(e) => ((e.target as HTMLElement).style.color = 'var(--gray-500)')}
              >
                +39 389 194 2431
              </a>
            </div>

            <div style={{ marginBottom: 'var(--space-6)' }}>
              <div className="label" style={{ marginBottom: 'var(--space-3)' }}>Portfolios &amp; Socials</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-2) 0', borderBottom: '1px solid var(--line)', textDecoration: 'none', transition: 'all 200ms ease' }}
                    onMouseOver={(e) => { e.currentTarget.style.borderBottomColor = 'var(--gold-500)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.borderBottomColor = 'var(--line)'; }}
                    aria-label={`${s.label} — ${s.handle}`}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--white)', textTransform: 'uppercase' }}>{s.label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--gray-500)' }}>{s.handle} →</span>
                  </a>
                ))}
              </div>
            </div>

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

          {/* Right — form */}
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
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
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

      <div className="container-site" style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
        <div className="hairline" style={{ marginBottom: 'var(--space-5)' }} />
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'rgba(255,255,255,0.15)', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>VISUAL POWER</p>
        <p aria-hidden="true" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.28em', color: 'rgba(233,161,36,0.2)', marginTop: 8 }}>XN4LCO-43KS · 未来</p>
      </div>

      <style>{`@media(max-width:767px){.container-site>div[style*="5fr 7fr"]{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
