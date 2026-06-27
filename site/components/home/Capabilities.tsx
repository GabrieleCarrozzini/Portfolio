'use client';

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

/* ─── Bento card wrapper ─────────────────────────────── */
function BentoCard({
  children,
  className = '',
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        background: 'var(--black-800)',
        border: '1px solid var(--line)',
        overflow: 'hidden',
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Decoration: nested frames (Brand Identity) ────── */
function FramesDecoration() {
  return (
    <div style={{ position: 'relative', height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(250,250,248,0.06)' }} aria-hidden="true" />
      <div style={{ position: 'absolute', inset: '14px 28px', border: '1px solid rgba(250,250,248,0.09)' }} aria-hidden="true" />
      <div style={{ position: 'absolute', inset: '28px 56px', border: '1px solid rgba(250,250,248,0.13)' }} aria-hidden="true" />
      <div style={{ position: 'absolute', inset: '42px 80px', border: '1px solid rgba(215,175,95,0.25)' }} aria-hidden="true" />
      <span
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          fontWeight: 700,
          letterSpacing: '-0.05em',
          textTransform: 'uppercase',
          color: 'var(--white)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Identity
      </span>
    </div>
  );
}

/* ─── Decoration: miniature poster (Art Direction) ───── */
function PosterDecoration() {
  return (
    <div style={{ position: 'relative', height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        aria-hidden="true"
        style={{
          width: 78,
          height: 108,
          background: 'rgba(250,250,248,0.03)',
          border: '1px solid rgba(250,250,248,0.12)',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <div style={{ position: 'absolute', top: 10, left: 8, right: 8, height: 1, background: 'rgba(215,175,95,0.5)' }} />
        <div style={{ position: 'absolute', top: 18, left: 8, right: 8, height: 10, background: 'rgba(250,250,248,0.18)' }} />
        <div style={{ position: 'absolute', top: 33, left: 8, right: 8, height: 3, background: 'rgba(250,250,248,0.07)' }} />
        <div style={{ position: 'absolute', top: 40, left: 8, right: 8, height: 3, background: 'rgba(250,250,248,0.05)' }} />
        <div style={{ position: 'absolute', top: 47, left: 8, right: 8, height: 3, background: 'rgba(250,250,248,0.04)' }} />
        <div style={{ position: 'absolute', bottom: 10, left: 8, right: 8, height: 22, background: 'rgba(215,175,95,0.07)', border: '1px solid rgba(215,175,95,0.18)' }} />
      </div>
      <div aria-hidden="true" style={{ position: 'absolute', top: 20, left: 20, fontFamily: 'var(--font-mono)', fontSize: '0.45rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gray-700)' }}>
        Art Direction
      </div>
    </div>
  );
}

/* ─── Decoration: atmosphere rings (Character Art) ───── */
function RingsDecoration() {
  return (
    <div style={{ height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        aria-hidden="true"
        style={{
          position: 'relative',
          width: 88,
          height: 88,
          borderRadius: '50%',
          border: '1px solid rgba(250,250,248,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: -14, borderRadius: '50%', border: '1px solid rgba(250,250,248,0.07)' }} />
        <div style={{ position: 'absolute', inset: -28, borderRadius: '50%', border: '1px solid rgba(250,250,248,0.04)' }} />
        <div style={{ position: 'absolute', inset: -42, borderRadius: '50%', border: '1px solid rgba(215,175,95,0.06)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', color: 'var(--gold-500)', lineHeight: 1 }}>◱</span>
      </div>
    </div>
  );
}

/* ─── Decoration: waveform chart (Digital) ─────────── */
function WaveformDecoration() {
  return (
    <div style={{ padding: '24px 24px 0', overflow: 'hidden' }}>
      <svg viewBox="0 0 386 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 90C3 90 14.3 68 35.1 63C55.9 58 66 56.9 66 56.9C66 56.9 80.7 56.9 92.2 56.9C103.7 56.9 100.9 44.2 109.1 44.2C117.2 44.2 117.2 64.5 124.8 64.5C132.3 64.5 142.3 54.6 153.8 56.9C165.4 59.2 186.8 64.5 193.8 64.5C200.7 64.5 206.3 44.2 214.1 44.2C221.8 44.2 238.7 65.5 244.2 64.5C249.8 63 258.8 42 266.2 42C272.1 42 284.1 62 286.7 62C294.8 62.1 300.2 51 305.4 51C312.3 51 323.4 45.6 335.6 44.2C347.7 42.8 348.2 57.4 363.6 56.9C379 56.4 383 75 383 75"
          fill="url(#waveGrad)"
        />
        <path
          d="M3 88C3 88 15.3 66 36 60.5C56.7 55 66.7 56.5 66.7 56.5C66.7 56.5 80 56.5 91.5 56.5C102.9 56.5 100.4 44.9 108.6 44.9C116.7 44.9 117.7 64.4 125.2 64.4C132.8 64.4 142.1 55 153.6 56.9C165.1 58.8 186.1 64.4 193 64.4C199.9 64.4 205.3 44.9 213 44.9C220.8 44.9 237.8 65.6 243.4 64.4C249 63 258 42.5 265.3 42.5C271.1 42.5 283.2 62 285.8 62C293.8 62.1 299.2 51.1 304.4 51.1C311.3 51.1 321.4 46.3 333.6 44.9C345.7 43.4 346.9 57.7 362.3 56.5C377.6 55.3 383 74 383 74"
          stroke="var(--gold-500)"
          strokeOpacity="0.7"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="waveGrad" x1="3" y1="42" x2="3" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--gold-500)" stopOpacity="0.12" />
            <stop offset="1" stopColor="var(--gold-500)" stopOpacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ─── Main section ─────────────────────────────────── */
export default function Capabilities() {
  return (
    <section
      aria-labelledby="capabilities-heading"
      style={{
        background: 'var(--black-900)',
        paddingTop: 'var(--space-7)',
        paddingBottom: 'var(--space-7)',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div className="container-site">
        <ScrollReveal style={{ marginBottom: 'var(--space-6)' }}>
          <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Capabilities</span>
          <h2
            id="capabilities-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--fs-h1)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--white)',
              lineHeight: 1,
              textTransform: 'uppercase',
            }}
          >
            The Work
          </h2>
        </ScrollReveal>

        {/* ── Bento grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 'var(--space-3)',
          }}
        >
          {/* Card 1 — Brand Identity (2 cols) */}
          <ScrollReveal delay={0} className="col-span-6 lg:col-span-2">
            <BentoCard style={{ height: '100%', minHeight: 280 }}>
              <FramesDecoration />
              <div style={{ padding: '0 var(--space-4) var(--space-4)' }}>
                <span className="label" style={{ color: 'var(--gold-500)', display: 'block', marginBottom: 'var(--space-2)' }}>01</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 'var(--space-2)' }}>
                  Brand Identity & Visual Systems
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.65 }}>
                  Logos and identity systems built to hold together across every touchpoint — print to digital, static to motion.
                </p>
              </div>
            </BentoCard>
          </ScrollReveal>

          {/* Card 2 — Poster & Art Direction (2 cols) */}
          <ScrollReveal delay={0.08} className="col-span-6 sm:col-span-3 lg:col-span-2">
            <BentoCard style={{ height: '100%', minHeight: 280 }}>
              <PosterDecoration />
              <div style={{ padding: '0 var(--space-4) var(--space-4)' }}>
                <span className="label" style={{ color: 'var(--gold-500)', display: 'block', marginBottom: 'var(--space-2)' }}>02</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 'var(--space-2)' }}>
                  Poster & Art Direction
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.65 }}>
                  Cinematic poster compositions and visual direction for film, music and gaming.
                </p>
              </div>
            </BentoCard>
          </ScrollReveal>

          {/* Card 3 — Character Art (2 cols) */}
          <ScrollReveal delay={0.16} className="col-span-6 sm:col-span-3 lg:col-span-2">
            <BentoCard style={{ height: '100%', minHeight: 280 }}>
              <RingsDecoration />
              <div style={{ padding: '0 var(--space-4) var(--space-4)' }}>
                <span className="label" style={{ color: 'var(--gold-500)', display: 'block', marginBottom: 'var(--space-2)' }}>03</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 'var(--space-2)' }}>
                  Character Art & Visual Storytelling
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.65 }}>
                  Characters and illustration with atmosphere — each subject belongs to a specific world with its own visual language.
                </p>
              </div>
            </BentoCard>
          </ScrollReveal>

          {/* Card 4 — Digital Experiences (3 cols, tall) */}
          <ScrollReveal delay={0.1} className="col-span-6 lg:col-span-3">
            <BentoCard style={{ height: '100%', minHeight: 300 }}>
              <WaveformDecoration />
              <div style={{ padding: 'var(--space-4)' }}>
                <span className="label" style={{ color: 'var(--gold-500)', display: 'block', marginBottom: 'var(--space-2)' }}>04</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 'var(--space-2)' }}>
                  Digital Experiences & Creative Technology
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.65 }}>
                  End-to-end visual direction for digital products. Identity, layout, motion, interaction — including AI-assisted creative workflows.
                </p>
              </div>
            </BentoCard>
          </ScrollReveal>

          {/* Card 5 — Manifesto / Philosophy (3 cols) */}
          <ScrollReveal delay={0.18} className="col-span-6 lg:col-span-3">
            <BentoCard
              style={{
                height: '100%',
                minHeight: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'var(--space-5)',
              }}
            >
              <div>
                <span className="label-gold" style={{ display: 'block', marginBottom: 'var(--space-4)' }}>Philosophy</span>
                <blockquote
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)',
                    fontWeight: 700,
                    color: 'var(--white)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.15,
                    borderLeft: '2px solid var(--gold-500)',
                    paddingLeft: 'var(--space-3)',
                    margin: 0,
                  }}
                >
                  &ldquo;Design should communicate before it decorates.&rdquo;
                </blockquote>
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  marginTop: 'var(--space-4)',
                }}
              >
                {[
                  'Form over literal meaning',
                  'Concept-first, decoration second',
                  'Narrative through visual language',
                  'Every element earns its place',
                ].map((principle) => (
                  <li
                    key={principle}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--gray-500)',
                    }}
                  >
                    <span style={{ width: 16, height: 1, background: 'var(--gold-500)', flexShrink: 0 }} aria-hidden="true" />
                    {principle}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .col-span-6.lg\\:col-span-2,
          .col-span-6.lg\\:col-span-3 { grid-column: span 6; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .sm\\:col-span-3 { grid-column: span 3; }
        }
      `}</style>
    </section>
  );
}
