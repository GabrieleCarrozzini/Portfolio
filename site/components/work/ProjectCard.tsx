import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/data/projects';
import Caption from '@/components/ui/Caption';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-card"
      style={{ '--project-accent': project.accentColor } as React.CSSProperties}
      aria-label={`View ${project.title} — ${project.type}, ${project.year}`}
    >
      {/* Media */}
      <div className="card-media" style={{ aspectRatio: '4/3' }}>
        <div className="card-media-inner" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
          <Image
            src={project.cardImage}
            alt={`${project.title} — ${project.type}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover', objectPosition: 'center top', transition: 'transform 600ms cubic-bezier(.16,1,.3,1)' }}
          />
        </div>
        {/* Index */}
        <div style={{
          position: 'absolute', top: 16, left: 16, zIndex: 3,
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)',
        }} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </div>
        {/* Status badge */}
        {project.status !== 'original' && (
          <div style={{
            position: 'absolute', top: 16, right: 16, zIndex: 3,
            fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            background: 'rgba(6,6,6,0.88)', color: 'var(--gray-500)',
            padding: '4px 10px',
          }}>
            {project.statusLabel}
          </div>
        )}
        {/* Tags */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, display: 'flex', gap: 4, padding: 16 }}>
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', background: 'rgba(6,6,6,0.75)',
              color: project.accentColor, padding: '3px 8px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Meta */}
      <div className="card-meta" style={{ paddingTop: 'var(--space-3)' }}>
        <Caption project={project.title} year={project.year} />
        <h3 className="card-title" style={{ marginTop: 8 }}>{project.title}</h3>
        <span className="card-label">{project.type.split(' · ')[0]}</span>
      </div>
    </Link>
  );
}
