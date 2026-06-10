'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/lib/data/projects';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface ProcessBreakdownProps {
  project: Project;
}

export default function ProcessBreakdown({ project }: ProcessBreakdownProps) {
  const [open, setOpen] = useState(false);
  const hasProcess = Boolean(project.processLabels?.length || project.processCopy);

  if (!hasProcess) return null;

  return (
    <section aria-labelledby="process-heading" style={{ background: 'var(--black-900)', paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-6)', borderTop: '1px solid var(--line)' }}>
      <div className="container-site">
        <ScrollReveal style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: open ? 'var(--space-5)' : 0 }}>
          <div>
            <span className="label-gold" style={{ display: 'block', marginBottom: 8 }}>Process</span>
            <h2 id="process-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--white)', textTransform: 'uppercase' }}>
              Technical Breakdown
            </h2>
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="process-content"
            className="btn-ghost"
          >
            {open ? 'Close —' : 'Open +'}
          </button>
        </ScrollReveal>

        <AnimatePresence>
          {open && (
            <motion.div
              id="process-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{
                  background: 'var(--black-800)',
                  border: '1px solid var(--line)',
                  padding: 'var(--space-6)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* HUD grid overlay */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    opacity: 0.4,
                  }}
                />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Labels grid */}
                  {project.processLabels && project.processLabels.length > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
                      {project.processLabels.map((item) => (
                        <div key={item.label} style={{ borderLeft: `2px solid ${project.accentColor}`, paddingLeft: 'var(--space-3)' }}>
                          <div className="label" style={{ color: project.accentColor, marginBottom: 4 }}>{item.label}</div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--white)', letterSpacing: '0.08em' }}>{item.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Process copy */}
                  {project.processCopy && (
                    <div style={{ borderTop: project.processLabels?.length ? '1px solid var(--line)' : 'none', paddingTop: project.processLabels?.length ? 'var(--space-4)' : 0 }}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--gray-500)', lineHeight: 1.7, maxWidth: '65ch', fontStyle: 'italic' }}>
                        {project.processCopy}
                      </p>
                    </div>
                  )}

                  {/* Corner marks */}
                  <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: 24, height: 24, borderTop: `1px solid ${project.accentColor}`, borderLeft: `1px solid ${project.accentColor}` }} />
                  <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, right: 0, width: 24, height: 24, borderBottom: `1px solid ${project.accentColor}`, borderRight: `1px solid ${project.accentColor}` }} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
