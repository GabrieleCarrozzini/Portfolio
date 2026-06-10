import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Gabriele Carrozzini — Visual Designer based in Rome, Italy. Biography, creative philosophy, skills, and background. Design should communicate before it decorates.',
};

const skills = [
  {
    category: 'Design',
    items: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Affinity Designer',
      'Inkscape',
    ],
  },
  {
    category: 'Disciplines',
    items: [
      'Brand Identity & Visual Systems',
      'Art Direction',
      'Poster & Key Art Design',
      'Cover & Packaging Design',
      'Advertising Composition',
      'Typography & Layout',
      'Character Art',
      'Visual Storytelling',
    ],
  },
  {
    category: 'Emerging Tools',
    items: [
      'Claude Code',
      'AI-Assisted Creative Workflows',
      'Microsoft Office Suite',
    ],
  },
];

const interests = [
  'Brand Identity',
  'Visual Design',
  'Art Direction',
  'Poster Design',
  'Character Art',
  'Visual Storytelling',
  'Environment Design',
  'Digital Experiences',
  'Creative Technology',
  'AI-Assisted Creative Work',
];

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--black-900)', paddingTop: 'calc(72px + var(--space-7))', paddingBottom: 'var(--space-8)' }}>

      {/* ── Hero block ──────────────────────────────────────────── */}
      <div className="container-site" style={{ marginBottom: 'var(--space-7)' }}>
        <ScrollReveal>
          <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>About</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--white)', lineHeight: 1, textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>
            Gabriele<br />Carrozzini
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'center' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.24em', color: 'var(--gold-500)', textTransform: 'uppercase' }}>
              Visual Designer
            </p>
            <span style={{ width: 1, height: 12, background: 'var(--gray-700)' }} aria-hidden="true" />
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.18em', color: 'var(--gray-500)', textTransform: 'uppercase' }}>
              Rome, Italy
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="hairline" style={{ marginBottom: 'var(--space-7)' }} />

      {/* ── Bio ─────────────────────────────────────────────────── */}
      <section aria-labelledby="bio-heading" style={{ marginBottom: 'var(--space-7)' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 'var(--space-6)', alignItems: 'start' }}>

            {/* Bio text */}
            <ScrollReveal direction="left">
              <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>Biography</span>
              <h2 id="bio-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1.05, textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>
                Design that<br />communicates first.
              </h2>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--gray-500)', lineHeight: 1.75, maxWidth: '52ch', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <p>
                  Gabriele Carrozzini is a visual designer based in Rome, Italy, focused on branding, visual identity, digital experiences, and atmosphere-driven design.
                </p>
                <p>
                  His work explores the intersection of graphic design, art direction, visual storytelling, and emerging creative technologies — drawn to projects that combine strong aesthetics with clear communication.
                </p>
                <p>
                  Most of his technical growth comes from self-directed learning, experimentation, and personal projects. He enjoys developing ideas from concept to execution, continuously refining both technical and creative skills.
                </p>
                <p>
                  He graduated in Commercial Techniques for Advertising Services in 2026, and completed a six-month academic experience in Dublin, Ireland — studying, living with a host family, and developing an international perspective.
                </p>
              </div>
            </ScrollReveal>

            {/* Sidebar info */}
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {/* Location */}
                <div style={{ borderLeft: '2px solid var(--gold-500)', paddingLeft: 'var(--space-3)' }}>
                  <div className="label" style={{ marginBottom: 6 }}>Location</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--white)' }}>Rome, Italy</div>
                </div>
                {/* Education */}
                <div style={{ borderLeft: '2px solid var(--line)', paddingLeft: 'var(--space-3)' }}>
                  <div className="label" style={{ marginBottom: 6 }}>Education</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--silver-400)', lineHeight: 1.5 }}>
                    Commercial Techniques for Advertising Services
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--gray-500)', marginTop: 4 }}>
                    Graduated 2026
                  </div>
                </div>
                {/* Dublin */}
                <div style={{ borderLeft: '2px solid var(--line)', paddingLeft: 'var(--space-3)' }}>
                  <div className="label" style={{ marginBottom: 6 }}>International</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--silver-400)', lineHeight: 1.5 }}>
                    6-month academic experience in Dublin, Ireland
                  </div>
                </div>
                {/* Languages */}
                <div style={{ borderLeft: '2px solid var(--line)', paddingLeft: 'var(--space-3)' }}>
                  <div className="label" style={{ marginBottom: 8 }}>Languages</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {[{ lang: 'Italian', level: 'Native' }, { lang: 'English', level: 'B2 Certified' }].map(l => (
                      <div key={l.lang} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--silver-400)' }}>{l.lang}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--gray-500)', textTransform: 'uppercase' }}>{l.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <style>{`@media(max-width:767px){section[aria-labelledby="bio-heading"] .container-site>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      <div className="hairline" style={{ marginBottom: 'var(--space-7)' }} />

      {/* ── Philosophy ───────────────────────────────────────────── */}
      <section aria-labelledby="philosophy-heading" style={{ marginBottom: 'var(--space-7)' }}>
        <div className="container-site">
          <ScrollReveal style={{ marginBottom: 'var(--space-5)' }}>
            <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Philosophy</span>
            <h2 id="philosophy-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1.05, textTransform: 'uppercase', maxWidth: '70%' }}>
              Design Voice
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <blockquote style={{ borderLeft: '2px solid var(--gold-500)', paddingLeft: 'var(--space-5)', marginBottom: 'var(--space-6)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.25, letterSpacing: '-0.01em', fontStyle: 'italic', marginBottom: 'var(--space-3)' }}>
                &ldquo;Design should communicate before it decorates.&rdquo;
              </p>
              <cite style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--gold-500)', textTransform: 'uppercase', fontStyle: 'normal' }}>
                — Gabriele Carrozzini
              </cite>
            </blockquote>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
            {[
              {
                label: 'Function first',
                body: 'Every visual decision — typography, composition, color, imagery, and motion — should contribute to a coherent experience. Decoration follows communication, never precedes it.',
              },
              {
                label: 'Atmosphere & Worldbuilding',
                body: 'Especially interested in projects that create worlds: visual identity systems that feel like places, campaigns that feel like moods, and work that makes the viewer feel something specific.',
              },
              {
                label: 'Purposeful Refinement',
                body: 'The goal is work that feels purposeful, emotionally engaging, and visually refined without relying on unnecessary complexity. Subtract until only intent remains.',
              },
              {
                label: 'Technology & Creativity',
                body: 'Fascinated by the relationship between technology and creativity — including AI-assisted creative workflows as a genuine design tool, not a shortcut.',
              },
            ].map((p, i) => (
              <ScrollReveal key={p.label} delay={i * 0.08}>
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: 'var(--space-4)' }}>
                  <div className="label-gold" style={{ marginBottom: 8 }}>{p.label}</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--gray-500)', lineHeight: 1.65 }}>{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){section[aria-labelledby="philosophy-heading"] .container-site>div:last-child{grid-template-columns:1fr!important}}`}</style>
      </section>

      <div className="hairline" style={{ marginBottom: 'var(--space-7)' }} />

      {/* ── Areas of Interest ────────────────────────────────────── */}
      <section aria-labelledby="interests-heading" style={{ marginBottom: 'var(--space-7)' }}>
        <div className="container-site">
          <ScrollReveal style={{ marginBottom: 'var(--space-5)' }}>
            <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Focus Areas</span>
            <h2 id="interests-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1.05, textTransform: 'uppercase' }}>
              Areas of Interest
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {interests.map((item, i) => (
                <span
                  key={item}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: i % 3 === 0 ? 'var(--gold-500)' : 'var(--gray-500)',
                    border: '1px solid var(--line)',
                    padding: '8px 16px',
                    background: 'var(--black-800)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="hairline" style={{ marginBottom: 'var(--space-7)' }} />

      {/* ── Skills & Tools ───────────────────────────────────────── */}
      <section aria-labelledby="skills-heading" style={{ marginBottom: 'var(--space-7)' }}>
        <div className="container-site">
          <ScrollReveal style={{ marginBottom: 'var(--space-5)' }}>
            <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Skills &amp; Tools</span>
            <h2 id="skills-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1.05, textTransform: 'uppercase' }}>
              Toolkit
            </h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            {skills.map((group, i) => (
              <ScrollReveal key={group.category} delay={i * 0.1}>
                <div>
                  <div className="label" style={{ color: 'var(--gold-500)', marginBottom: 'var(--space-3)' }}>{group.category}</div>
                  <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {group.items.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gold-500)', opacity: 0.5, flexShrink: 0 }} aria-hidden="true" />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--silver-400)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section[aria-labelledby="skills-heading"] .container-site>div:last-child{grid-template-columns:1fr!important}}`}</style>
      </section>

      <div className="hairline" style={{ marginBottom: 'var(--space-7)' }} />

      {/* ── Experience ───────────────────────────────────────────── */}
      <section aria-labelledby="experience-heading" style={{ marginBottom: 'var(--space-7)' }}>
        <div className="container-site">
          <ScrollReveal style={{ marginBottom: 'var(--space-5)' }}>
            <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Experience</span>
            <h2 id="experience-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1.05, textTransform: 'uppercase' }}>
              Background
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ borderLeft: '2px solid var(--line)', paddingLeft: 'var(--space-5)' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: 'calc(var(--space-5) * -1 - 5px)', top: 6, width: 8, height: 8, borderRadius: '50%', background: 'var(--gold-500)' }} aria-hidden="true" />
                <div className="label" style={{ color: 'var(--gold-500)', marginBottom: 6 }}>Graphic Design &amp; Web Studio Collaboration</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--gray-500)', lineHeight: 1.7, maxWidth: '55ch', marginBottom: 'var(--space-3)' }}>
                  Contributed to web and visual communication projects, covering logo design, visual asset creation, content organisation, website content management, and graphic support for digital projects.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Logo Design', 'Visual Assets', 'Content Management', 'Graphic Support', 'Digital Projects'].map(tag => (
                    <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', background: 'var(--black-800)', border: '1px solid var(--line)', color: 'var(--gray-500)', padding: '3px 8px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="hairline" style={{ marginBottom: 'var(--space-6)' }} />

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <div className="container-site" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.01em', textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>
            Let&rsquo;s Work Together.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-gold">Get in Touch</Link>
            <Link href="/work" className="btn-ghost">View Work</Link>
          </div>
        </ScrollReveal>
      </div>

    </div>
  );
}
