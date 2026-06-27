'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 400ms ease, backdrop-filter 400ms ease',
          background: scrolled ? 'rgba(6,6,6,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(250,250,248,0.08)' : '1px solid transparent',
        }}
      >
        <div className="container-site" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo / wordmark */}
          <Link
            href="/"
            aria-label="Gabriele Carrozzini - Home"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
          >
            <svg
              viewBox="0 0 603.06 277.26"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                height: 30, width: 'auto', display: 'block', userSelect: 'none', flexShrink: 0,
                animation: 'gc-nav-glow 4s ease-in-out infinite',
                willChange: 'filter',
              }}
              aria-label="GC"
            >
              <polygon points="304.56 14.59 292.18 38.66 44.56 38.66 158.4 229.53 195.2 165.56 166.31 165.56 184.54 143.9 240.59 143.9 158.74 276.31 .89 14.59 304.56 14.59" />
              <polygon points="519.13 124.48 483.76 124.48 441.62 52.67 325.09 252.38 558.83 252.38 515.2 178.04 545.87 178.04 602.19 274.76 281.74 274.76 441.49 .96 519.13 124.48" />
            </svg>
            <style>{`
              @keyframes gc-nav-glow {
                0%, 100% { filter: drop-shadow(0 0 0px  rgba(255,255,255,0));   }
                50%       { filter: drop-shadow(0 0 8px  rgba(255,255,255,0.55)) drop-shadow(0 0 18px rgba(255,255,255,0.2)); }
              }
              @media (prefers-reduced-motion: reduce) {
                svg[aria-label="GC"] { animation: none !important; }
              }
            `}</style>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            <ul
              role="list"
              style={{ display: 'flex', alignItems: 'center', gap: 40, listStyle: 'none', margin: 0, padding: 0 }}
              className="hidden-mobile"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link ${pathname.startsWith(link.href) ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA â€" always visible */}
            <Link href="/contact" className="btn-gold hidden-mobile" style={{ padding: '10px 22px' }}>
              Hire Me
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="show-mobile"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
            >
              <motion.span
                animate={shouldReduceMotion ? undefined : { rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                style={{ display: 'block', width: 24, height: 1, background: 'var(--white)', rotate: shouldReduceMotion && menuOpen ? 45 : undefined }}
              />
              <motion.span
                animate={shouldReduceMotion ? undefined : { opacity: menuOpen ? 0 : 1 }}
                style={{ display: 'block', width: 24, height: 1, background: 'var(--white)', opacity: shouldReduceMotion && menuOpen ? 0 : undefined }}
              />
              <motion.span
                animate={shouldReduceMotion ? undefined : { rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                style={{ display: 'block', width: 24, height: 1, background: 'var(--white)', rotate: shouldReduceMotion && menuOpen ? -45 : undefined }}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: 'rgba(6,6,6,0.98)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center',
              gap: 40,
            }}
          >
            <nav aria-label="Mobile navigation">
              <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 32, textAlign: 'center', padding: 0 }}>
                {[...navLinks, { href: '/contact', label: 'Contact' }].map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 8vw, 3rem)',
                        fontWeight: 700,
                        color: pathname.startsWith(link.href) ? 'var(--gold-500)' : 'var(--white)',
                        textDecoration: 'none',
                        letterSpacing: '-0.02em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.24em', color: 'var(--gray-500)', textTransform: 'uppercase' }}>
              gabriele.carrozzini1@gmail.com
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </>
  );
}

