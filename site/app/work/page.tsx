import type { Metadata } from 'next';
import { projects } from '@/lib/data/projects';
import ProjectCard from '@/components/work/ProjectCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Selected Work',
  description:
    'Case studies and projects by Gabriele Carrozzini — 3D character art, poster design, advertising composition, cover design. Five projects spanning cyberpunk, film noir, and editorial aesthetics.',
};

export default function WorkPage() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div style={{ background: 'var(--black-900)', paddingTop: 'calc(72px + var(--space-7))', paddingBottom: 'var(--space-8)' }}>
      <div className="container-site">
        {/* Header */}
        <ScrollReveal style={{ marginBottom: 'var(--space-7)' }}>
          <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>
            Portfolio
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--fs-h1)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--white)',
              lineHeight: 1,
              textTransform: 'uppercase',
              marginBottom: 'var(--space-4)',
            }}
          >
            Selected Work
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--gray-500)', maxWidth: '50ch', lineHeight: 1.65 }}>
            Five projects across 3D character art, poster design, advertising, and cover design — each built on one constraint: form over literal meaning.
          </p>
        </ScrollReveal>

        {/* Gold hairline */}
        <div className="hairline" style={{ marginBottom: 'var(--space-6)' }} />

        {/* Project grid */}
        <div
          role="list"
          aria-label="Project list"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--space-5)' }}
        >
          {sorted.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.08} role="listitem">
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom tag */}
        <div style={{ marginTop: 'var(--space-7)', textAlign: 'center' }}>
          <span
            className="label"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.28em', color: 'rgba(233,161,36,0.3)' }}
          >
            XN4LCO-43KS · 未来 · VISUAL POWER
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { [aria-label="Project list"] { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
