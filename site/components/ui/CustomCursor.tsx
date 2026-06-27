'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const onMove = (e: MouseEvent) => {
      setVisible(true);
      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      setHovered(!!target.closest('a, button, [role="button"], input, textarea, select, label'));
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', () => setVisible(false));
    document.addEventListener('mouseenter', () => setVisible(true));
    document.addEventListener('mouseover', onOver, { passive: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', () => setVisible(false));
      document.removeEventListener('mouseenter', () => setVisible(true));
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        border: `1.5px solid rgba(250,250,248,${hovered ? 1 : 0.75})`,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 999999,
        transform: `translate(-50%, -50%) scale(${hovered ? 1.83 : 1})`,
        transition: 'transform 180ms var(--ease-cinematic), opacity 200ms ease, border-color 180ms ease',
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
