import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects, getProject } from '@/lib/data/projects';
import CaseCover from '@/components/work/CaseCover';
import ProcessBreakdown from '@/components/work/ProcessBreakdown';
import GalleryRow from '@/components/work/GalleryRow';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Caption from '@/components/ui/Caption';

interface Params { slug: string }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.type}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Gabriele Carrozzini`,
      description: project.description,
      type: 'article',
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = getProject(project.nextSlug);
  const gallery = project.gallery || [];

  /* Showcase images: first image = main visual; [1] and [2] = mockup pair */
  const showcaseMain = gallery[0];
  const mockupA = gallery[1];
  const mockupB = gallery[2];

  return (
    <article
      style={{ '--project-accent': project.accentColor } as React.CSSProperties}
    >
      {/* 1. Full-bleed cover */}
      <CaseCover project={project} />

      {/* 2. Context */}
      <section
        aria-labelledby="context-heading"
        style={{ background: 'var(--black-900)', paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)' }}
      >
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 'var(--space-6)', alignItems: 'start' }}>
            {/* Left */}
            <ScrollReveal direction="left">
              <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Context</span>
              <h2 id="context-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1.05, marginBottom: 'var(--space-4)', textTransform: 'uppercase' }}>
                {project.title}
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--gray-500)', lineHeight: 1.7, maxWidth: '45ch' }}>
                {project.description}
              </p>
            </ScrollReveal>

            {/* Right — metadata */}
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div style={{ borderLeft: `2px solid ${project.accentColor}`, paddingLeft: 'var(--space-3)' }}>
                  <div className="label" style={{ marginBottom: 6 }}>Role</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--white)' }}>{project.role}</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--line)', paddingLeft: 'var(--space-3)' }}>
                  <div className="label" style={{ marginBottom: 6 }}>Year</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--white)' }}>{project.year}</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--line)', paddingLeft: 'var(--space-3)' }}>
                  <div className="label" style={{ marginBottom: 6 }}>Status</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: project.status === 'original' ? project.accentColor : 'var(--gray-500)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {project.statusLabel}
                  </div>
                </div>
                <div style={{ borderLeft: '2px solid var(--line)', paddingLeft: 'var(--space-3)' }}>
                  <div className="label" style={{ marginBottom: 8 }}>Tags</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', background: 'var(--black-800)', border: '1px solid var(--line)', color: 'var(--gray-500)', padding: '4px 10px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <style>{`
          @media (max-width: 767px) {
            section[aria-labelledby="context-heading"] .container-site > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Gold hairline */}
      <div className="hairline" />

      {/* 3. Showcase */}
      <section
        aria-labelledby="showcase-heading"
        style={{ background: 'var(--black-900)', paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)' }}
      >
        <div className="container-site">
          <ScrollReveal style={{ marginBottom: 'var(--space-5)' }}>
            <Caption project={project.title} year={project.year} type={project.type} />
          </ScrollReveal>

          {/* Main showcase visual */}
          {showcaseMain && (
            <ScrollReveal>
              <div
                aria-label={`${project.title} showcase — ${showcaseMain.alt}`}
                style={{
                  position: 'relative', width: '100%',
                  aspectRatio: project.galleryLayout === 'portrait' ? '2/3' : '4/3',
                  overflow: 'hidden', border: '1px solid var(--line)',
                  background: 'var(--black-800)',
                  maxWidth: project.galleryLayout === 'portrait' ? '480px' : undefined,
                  margin: project.galleryLayout === 'portrait' ? '0 auto' : undefined,
                }}
              >
                <Image
                  src={showcaseMain.src}
                  alt={showcaseMain.alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  style={{
                    objectFit: project.galleryLayout === 'portrait' ? 'contain' : 'cover',
                    objectPosition: project.focalPoint ?? 'center top',
                  }}
                />
              </div>
            </ScrollReveal>
          )}

          {/* Tagline below showcase */}
          <ScrollReveal delay={0.15} style={{ marginTop: 'var(--space-4)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontStyle: 'italic', color: 'var(--gray-500)', letterSpacing: '0.02em' }}>
              &ldquo;{project.tagline}&rdquo;
            </p>
          </ScrollReveal>

          {/* Mockup pair — only if we have at least 2 gallery images */}
          {mockupA && project.galleryLayout !== 'portrait' && (
            <ScrollReveal delay={0.1} style={{ marginTop: 'var(--space-5)', display: 'grid', gridTemplateColumns: mockupB ? '1fr 1fr' : '1fr', gap: 'var(--space-3)' }}>
              <div
                aria-label={mockupA.alt}
                style={{ position: 'relative', aspectRatio: '4/3', border: '1px solid var(--line)', overflow: 'hidden' }}
              >
                <Image
                  src={mockupA.src}
                  alt={mockupA.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: project.focalPoint ?? 'center top' }}
                />
                <div style={{ position: 'absolute', bottom: 12, left: 12, zIndex: 4 }}>
                  <span className="label" style={{ background: 'rgba(6,6,6,0.8)', padding: '2px 8px' }}>
                    {mockupA.index}
                  </span>
                </div>
              </div>

              {mockupB && (
                <div
                  aria-label={mockupB.alt}
                  style={{ position: 'relative', aspectRatio: '4/3', border: '1px solid var(--line)', overflow: 'hidden' }}
                >
                  <Image
                    src={mockupB.src}
                    alt={mockupB.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: project.focalPoint ?? 'center top' }}
                  />
                  <div style={{ position: 'absolute', bottom: 12, left: 12, zIndex: 4 }}>
                    <span className="label" style={{ background: 'rgba(6,6,6,0.8)', padding: '2px 8px' }}>
                      {mockupB.index}
                    </span>
                  </div>
                </div>
              )}
            </ScrollReveal>
          )}
        </div>

        <style>{`
          @media (max-width: 640px) {
            section[aria-labelledby="showcase-heading"] .container-site > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 4. Process breakdown */}
      <ProcessBreakdown project={project} />

      {/* 5. Gallery */}
      <GalleryRow project={project} />

      {/* 6. Next project */}
      {nextProject && (
        <section
          aria-label="Next project"
          style={{ background: 'var(--black-800)', borderTop: '1px solid var(--line)', paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-6)' }}
        >
          <div className="container-site" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <div>
              <span className="label" style={{ display: 'block', marginBottom: 8 }}>Next Project</span>
              <Link
                href={`/work/${nextProject.slug}`}
                style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)',
                  fontWeight: 700, color: 'var(--white)', textDecoration: 'none',
                  letterSpacing: '-0.02em', textTransform: 'uppercase',
                  transition: 'color 200ms ease',
                }}
                className="next-project-link"
              >
                {nextProject.title} →
              </Link>
            </div>

            {/* Mini preview */}
            <Link
              href={`/work/${nextProject.slug}`}
              style={{ position: 'relative', width: 160, height: 100, display: 'block', overflow: 'hidden', border: '1px solid var(--line)', flexShrink: 0, textDecoration: 'none' }}
              aria-label={`Preview of ${nextProject.title}`}
            >
              <Image
                src={nextProject.heroImage}
                alt={nextProject.title}
                fill
                sizes="160px"
                style={{ objectFit: 'cover', objectPosition: project.focalPoint ?? 'center top' }}
              />
            </Link>
          </div>
        </section>
      )}

      {/* Like this CTA */}
      <section style={{ background: 'var(--black-900)', borderTop: '1px solid var(--line)', paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-6)', textAlign: 'center' }}>
        <div className="container-site">
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.01em', marginBottom: 'var(--space-4)', textTransform: 'uppercase' }}>
            Like this work?
          </p>
          <Link href="/contact" className="btn-gold">
            Start a Project
          </Link>
        </div>
      </section>
    </article>
  );
}
