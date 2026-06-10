import ScrollReveal from '@/components/ui/ScrollReveal';

const capabilities = [
  {
    index: '01',
    title: 'Brand Identity & Visual Systems',
    description: 'Logos, visual identity systems, color and typography hierarchies that hold together across every touchpoint — from print to digital, from static to motion.',
    icon: '◈',
  },
  {
    index: '02',
    title: 'Poster & Art Direction',
    description: 'Monumental poster compositions that command attention. Typographic systems, cinematic imagery, and the visual grammar of film, music, and gaming marketing.',
    icon: '◰',
  },
  {
    index: '03',
    title: 'Character Art & Visual Storytelling',
    description: 'Illustration and character design with a strong sense of atmosphere and narrative. Each subject feels like it belongs to a specific world, with its own visual language and presence.',
    icon: '◱',
  },
  {
    index: '04',
    title: 'Digital Experiences & Creative Technology',
    description: 'End-to-end visual direction for digital products — from identity and layout to motion and interaction. Includes AI-assisted creative workflows as a genuine part of the design process.',
    icon: '◲',
  },
];

export default function Capabilities() {
  return (
    <section aria-labelledby="capabilities-heading" style={{ background: 'var(--black-900)', paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)', borderTop: '1px solid var(--line)' }}>
      <div className="container-site">
        <ScrollReveal style={{ marginBottom: 'var(--space-6)' }}>
          <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Capabilities</span>
          <h2 id="capabilities-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1, maxWidth: '60%', textTransform: 'uppercase' }}>
            The Work
          </h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'var(--space-4)' }}>
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.index} delay={i * 0.1}>
              <article
                style={{
                  padding: 'var(--space-5)',
                  border: '1px solid var(--line)',
                  background: 'var(--black-800)',
                  height: '100%',
                  transition: 'border-color 300ms ease',
                }}
                className="capability-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
                  <span className="label" style={{ color: 'var(--gray-700)' }}>{cap.index}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--gold-500)', lineHeight: 1 }} aria-hidden="true">{cap.icon}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-3)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                  {cap.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--gray-500)', lineHeight: 1.65 }}>
                  {cap.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
