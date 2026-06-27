import Image from 'next/image';
import { Project } from '@/lib/data/projects';
import Caption from '@/components/ui/Caption';

interface CaseCoverProps {
  project: Project;
}

export default function CaseCover({ project }: CaseCoverProps) {
  return (
    <section
      aria-label={`${project.title} — case study cover`}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        background: 'var(--black-900)',
        '--project-accent': project.accentColor,
      } as React.CSSProperties}
    >
      {/* Full image — contain so nothing is cropped */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src={project.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'contain',
            objectPosition: 'center center',
          }}
        />
      </div>

      {/* Gradient scrim — lighter since image is fully visible */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(6,6,6,0.96) 0%, rgba(6,6,6,0.25) 40%, transparent 70%)',
        }}
      />

      {/* Grain overlay — masks compression artefacts and upscaling */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
          opacity: 0.055,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Title bleed — off-frame top */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -20,
          left: '-2vw',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(6rem, 18vw, 18rem)',
          fontWeight: 700,
          lineHeight: 0.85,
          letterSpacing: '-0.04em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.04)',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {project.title}
      </div>

      {/* Content */}
      <div className="container-site" style={{ position: 'relative', zIndex: 10, paddingBottom: 'var(--space-7)' }}>
        {/* Status label */}
        {project.status !== 'original' && (
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <span
              className="label"
              style={{
                background: 'rgba(6,6,6,0.8)',
                color: 'var(--gray-500)',
                padding: '4px 12px',
                border: '1px solid var(--gray-700)',
              }}
            >
              {project.statusLabel}
            </span>
          </div>
        )}

        {/* Caption motif */}
        <Caption project={project.title} year={project.year} className="mb-4" />
        <div style={{ marginBottom: 'var(--space-3)' }} />

        {/* Main title */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--fs-h1)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--white)',
            lineHeight: 1,
            marginBottom: 'var(--space-3)',
            textTransform: 'uppercase',
          }}
        >
          {project.title}
        </h1>

        {/* Type + year */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', alignItems: 'center' }}>
          <span className="label" style={{ color: project.accentColor }}>{project.type}</span>
          <span style={{ width: 1, height: 12, background: 'var(--gray-700)' }} aria-hidden="true" />
          <span className="label">{project.year}</span>
        </div>
      </div>

      {/* HUD corner marks */}
      <div aria-hidden="true" style={{ position: 'absolute', top: 100, left: 'var(--space-6)', width: 32, height: 32, borderTop: `1px solid ${project.accentColor}88`, borderLeft: `1px solid ${project.accentColor}88` }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: 'var(--space-7)', right: 'var(--space-6)', width: 24, height: 24, borderBottom: `1px solid ${project.accentColor}66`, borderRight: `1px solid ${project.accentColor}66` }} />
    </section>
  );
}
