'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const services = [
  {
    index: '01',
    title: '3D Character Art & Rendering',
    description: 'Full-pipeline character creation: concept development, sculpting, texture, rigging-ready topology, and cinematic final renders. Dramatic low-key lighting, realistic skin and material work.',
    deliverables: ['Final renders (TIFF/EXR)', 'Turntable / pose set', 'Wireframe breakdown', 'PSD layered comp'],
    caseLink: '/work/v',
    caseLabel: 'See V →',
    accentColor: '#E9A124',
  },
  {
    index: '02',
    title: 'Poster & Key Art Design',
    description: 'Monumental poster compositions that command attention. Typographic systems, cinematic imagery, and the visual grammar of film and gaming marketing.',
    deliverables: ['Print-ready PDF (300dpi)', 'Digital version', 'Layered PSD', 'Format variations'],
    caseLink: '/work/lara',
    caseLabel: 'See Lara →',
    accentColor: '#8A4FFF',
  },
  {
    index: '03',
    title: 'Cover & Packaging Design',
    description: 'Book covers, album art, product packaging — surfaces that live in physical space and need to hold attention on a shelf. Typography, hierarchy, and material finish guidance.',
    deliverables: ['Print-ready artwork', 'Mockup renders', 'Brand guidelines', 'Digital adaptation'],
    caseLink: '/work/turn-me-off',
    caseLabel: 'See Turn Me Off →',
    accentColor: '#D33127',
  },
  {
    index: '04',
    title: 'Advertising / Product Composition',
    description: 'Brief, creatività e composizione. Product advertising that pairs warm, dynamic imagery with bold editorial type. Balance between image and text, emphasis on freshness and visual identity.',
    deliverables: ['Key visual (various formats)', 'Outdoor adaptation', 'Digital banner set', 'Brand usage guide'],
    caseLink: '/work/fuji',
    caseLabel: 'See Fuji →',
    accentColor: '#E8551F',
  },
  {
    index: '05',
    title: 'Art Direction & Visual Identity',
    description: 'End-to-end visual direction for campaigns, characters, or brand systems. Mood, palette, type, motion direction.',
    deliverables: ['Creative brief', 'Mood boards', 'Style guide', 'Series direction'],
    caseLink: '/work',
    caseLabel: 'See All Work →',
    accentColor: '#E9A124',
  },
];

const process = [
  { step: '01', label: 'Brief', description: 'You share scope, references, timeline, and goals. I ask the sharp questions.' },
  { step: '02', label: 'Creatività', description: 'Concept development — mood boards, initial compositions, type explorations. One or two directions.' },
  { step: '03', label: 'Composizione', description: 'Execution. 3D build, design, comp, render, refine. Regular checkpoints. Final delivery in agreed formats.' },
];

export default function ServicesClient() {
  return (
    <div style={{ background: 'var(--black-900)', paddingTop: 'calc(72px + var(--space-7))', paddingBottom: 'var(--space-8)' }}>
      {/* Header */}
      <div className="container-site" style={{ marginBottom: 'var(--space-7)' }}>
        <ScrollReveal>
          <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Services</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--white)', lineHeight: 1, textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>
            What You Can<br />Commission
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--gray-500)', maxWidth: '50ch', lineHeight: 1.65 }}>
            Five disciplines, one operating principle. All work is project-based; pricing on request based on scope and timeline.
          </p>
        </ScrollReveal>
      </div>

      <div className="hairline" style={{ marginBottom: 'var(--space-7)' }} />

      {/* Services list */}
      <section aria-labelledby="services-heading" style={{ marginBottom: 'var(--space-7)' }}>
        <div className="container-site">
          <h2 id="services-heading" className="label-gold" style={{ marginBottom: 'var(--space-5)' }}>Offerings</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {services.map((svc, i) => (
              <ScrollReveal key={svc.index} delay={i * 0.07}>
                <article
                  style={{
                    padding: 'var(--space-5)',
                    background: 'var(--black-800)',
                    border: '1px solid var(--line)',
                    '--service-accent': svc.accentColor,
                  } as React.CSSProperties}
                  className="service-card"
                  onMouseOver={(e) => (e.currentTarget.style.borderColor = svc.accentColor + '88')}
                  onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--line)')}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 'var(--space-4)', alignItems: 'start' }}>
                    <div>
                      <span className="label" style={{ color: svc.accentColor, display: 'block', marginBottom: 8 }}>{svc.index}</span>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--white)', lineHeight: 1.1 }}>
                        {svc.title}
                      </h3>
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--gray-500)', lineHeight: 1.65 }}>
                      {svc.description}
                    </p>
                    <div>
                      <div className="label" style={{ marginBottom: 8 }}>Deliverables</div>
                      <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 'var(--space-3)' }}>
                        {svc.deliverables.map((d) => (
                          <li key={d} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--gray-500)', display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{ color: svc.accentColor }} aria-hidden="true">—</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                      <Link href={svc.caseLink} className="btn-ghost" style={{ fontSize: '0.6rem', padding: '8px 16px' }}>
                        {svc.caseLabel}
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:767px){section[aria-labelledby="services-heading"] article>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      <div className="hairline" style={{ marginBottom: 'var(--space-7)' }} />

      {/* Process */}
      <section aria-labelledby="process-heading" style={{ marginBottom: 'var(--space-7)' }}>
        <div className="container-site">
          <ScrollReveal style={{ marginBottom: 'var(--space-5)' }}>
            <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Process</span>
            <h2 id="process-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1.05, textTransform: 'uppercase' }}>
              Brief → Creatività<br />→ Composizione
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
            {process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.12}>
                <div style={{ borderTop: '2px solid var(--gold-500)', paddingTop: 'var(--space-4)' }}>
                  <div className="label" style={{ color: 'var(--gold-500)', marginBottom: 8 }}>{step.step}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.01em', marginBottom: 'var(--space-3)', textTransform: 'uppercase' }}>
                    {step.label}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--gray-500)', lineHeight: 1.65 }}>{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){section[aria-labelledby="process-heading"] .container-site>div:last-child{grid-template-columns:1fr!important}}`}</style>
      </section>

      <div className="hairline" style={{ marginBottom: 'var(--space-7)' }} />

      {/* Engagement model */}
      <section aria-labelledby="engagement-heading" style={{ marginBottom: 'var(--space-7)' }}>
        <div className="container-site">
          <ScrollReveal style={{ marginBottom: 'var(--space-5)' }}>
            <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>How We Work</span>
            <h2 id="engagement-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1.05, textTransform: 'uppercase' }}>
              Engagement Model
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
            {[
              { title: 'Project', desc: 'Fixed scope, fixed fee. Ideal for single campaigns, posters, covers, or character renders.' },
              { title: 'Retainer', desc: 'Ongoing creative partnership. Monthly hours for brands and studios needing consistent visual output.' },
              { title: 'Licensing', desc: 'Artwork licensed for specific commercial uses. Contact to discuss territory, duration, and exclusivity.' },
            ].map((model, i) => (
              <ScrollReveal key={model.title} delay={i * 0.1}>
                <div style={{ padding: 'var(--space-4)', border: '1px solid var(--line)', background: 'var(--black-800)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--gold-500)', letterSpacing: '-0.01em', marginBottom: 'var(--space-2)', textTransform: 'uppercase' }}>
                    {model.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--gray-500)', lineHeight: 1.65 }}>{model.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){section[aria-labelledby="engagement-heading"] .container-site>div:last-child{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* CTA */}
      <div className="container-site" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.01em', textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>
            Ready to Brief a Project?
          </p>
          <Link href="/contact" className="btn-gold" style={{ padding: '16px 36px' }}>
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
