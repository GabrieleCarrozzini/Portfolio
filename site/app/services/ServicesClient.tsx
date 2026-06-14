'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ServicesGrid, type ServiceCard } from '@/components/ui/services';

const cards: ServiceCard[] = [
  {
    title: '3D Character Art & Rendering',
    subtitle: 'Character · 3D · Lighting',
    backImage:  '/hero-roll/ASSET-sandevistan-sandevistan-cutout-clean.png',
    frontImage: '/hero-roll/ASSET-v-v-character-cutout-gold.png',
    href:   '/work/v',
    accent: '#FFFFFF',
  },
  {
    title: 'Poster & Key Art Design',
    subtitle: 'Key Art · Typography · Print',
    backImage:  '/hero-roll/ASSET-lara-lara-portrait-hero.jpg',
    frontImage: '/hero-roll/ASSET-lara-lara-poster-design.png',
    href:   '/work/lara',
    accent: '#8A4FFF',
  },
  {
    title: 'Cover & Packaging Design',
    subtitle: 'Cover · Packaging · Editorial',
    backImage:  '/hero-roll/ASSET-turn-me-off-turn-me-off-cover-flat.png',
    frontImage: '/hero-roll/hero-turn-me-off-book-mockup.png',
    href:   '/work/turn-me-off',
    accent: '#D33127',
  },
  {
    title: 'Advertising & Product Composition',
    subtitle: 'Advertising · Outdoor · Brand',
    backImage:  '/hero-roll/ASSET-fuji-fuji-poster-design.jpg',
    frontImage: '/hero-roll/ASSET-fuji-fuji-billboard-mockup-front.png',
    href:   '/work/fuji',
    accent: '#E8551F',
  },
];

const process = [
  { step: '01', label: 'Brief',    description: 'You share scope, references, timeline, and goals. I ask the sharp questions.' },
  { step: '02', label: 'Concept',  description: 'Mood boards, initial compositions, type explorations. One or two clear directions.' },
  { step: '03', label: 'Execution',description: '3D build, design, comp, render, refine. Regular checkpoints. Final delivery in agreed formats.' },
];

export default function ServicesClient() {
  return (
    <div style={{ background: 'var(--black-900)', paddingTop: 'calc(72px + var(--space-7))', paddingBottom: 'var(--space-8)' }}>

      {/* ── Page header ─────────────────────────────────────────── */}
      <div className="container-site" style={{ marginBottom: 'var(--space-7)' }}>
        <ScrollReveal>
          <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Services</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--fs-h1)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--white)',
            lineHeight: 1,
            textTransform: 'uppercase',
            marginBottom: 'var(--space-4)',
          }}>
            How Can I Help?
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-body)',
            color: 'var(--gray-500)',
            maxWidth: '48ch',
            lineHeight: 1.65,
          }}>
            Four disciplines, one operating principle — every project is handled with intent from brief to delivery. Pricing on request based on scope and timeline.
          </p>
        </ScrollReveal>
      </div>

      <div className="hairline" style={{ marginBottom: 'var(--space-7)' }} />

      {/* ── Service cards ────────────────────────────────────────── */}
      <section aria-label="Service offerings" style={{ marginBottom: 'var(--space-7)' }}>
        <div className="container-site">
          <ScrollReveal>
            <ServicesGrid cards={cards} />
          </ScrollReveal>
        </div>
      </section>

      <div className="hairline" style={{ marginBottom: 'var(--space-7)' }} />

      {/* ── Process ──────────────────────────────────────────────── */}
      <section aria-labelledby="process-heading" style={{ marginBottom: 'var(--space-7)' }}>
        <div className="container-site">
          <ScrollReveal style={{ marginBottom: 'var(--space-5)' }}>
            <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Process</span>
            <h2 id="process-heading" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--fs-h2)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--white)',
              lineHeight: 1.05,
              textTransform: 'uppercase',
            }}>
              Brief → Concept<br />→ Execution
            </h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
            {process.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.12}>
                <div style={{ borderTop: '2px solid var(--gold-500)', paddingTop: 'var(--space-4)' }}>
                  <div className="label" style={{ color: 'var(--gold-500)', marginBottom: 8 }}>{s.step}</div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--fs-h3)',
                    fontWeight: 700,
                    color: 'var(--white)',
                    letterSpacing: '-0.01em',
                    marginBottom: 'var(--space-3)',
                    textTransform: 'uppercase',
                  }}>
                    {s.label}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--gray-500)', lineHeight: 1.65 }}>
                    {s.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){#process-heading~div{grid-template-columns:1fr!important}}`}</style>
      </section>

      <div className="hairline" style={{ marginBottom: 'var(--space-7)' }} />

      {/* ── Engagement model ─────────────────────────────────────── */}
      <section aria-labelledby="engagement-heading" style={{ marginBottom: 'var(--space-7)' }}>
        <div className="container-site">
          <ScrollReveal style={{ marginBottom: 'var(--space-5)' }}>
            <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>How We Work</span>
            <h2 id="engagement-heading" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--fs-h2)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--white)',
              lineHeight: 1.05,
              textTransform: 'uppercase',
            }}>
              Engagement Model
            </h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
            {[
              { title: 'Project',   desc: 'Fixed scope, fixed fee. Ideal for single campaigns, posters, covers, or character renders.' },
              { title: 'Retainer',  desc: 'Ongoing creative partnership. Monthly hours for brands and studios needing consistent visual output.' },
              { title: 'Licensing', desc: 'Artwork licensed for specific commercial uses. Contact to discuss territory, duration, and exclusivity.' },
            ].map((m, i) => (
              <ScrollReveal key={m.title} delay={i * 0.1}>
                <div style={{ padding: 'var(--space-4)', border: '1px solid var(--line)', background: 'var(--black-800)' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--fs-h3)',
                    fontWeight: 700,
                    color: 'var(--gold-500)',
                    letterSpacing: '-0.01em',
                    marginBottom: 'var(--space-2)',
                    textTransform: 'uppercase',
                  }}>
                    {m.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--gray-500)', lineHeight: 1.65 }}>
                    {m.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){#engagement-heading~div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <div className="container-site" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--fs-h3)',
            fontWeight: 700,
            color: 'var(--white)',
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-4)',
          }}>
            Ready to Brief a Project?
          </p>
          <Link href="/contact" className="btn-gold" style={{ padding: '16px 40px' }}>
            Start a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>

    </div>
  );
}
