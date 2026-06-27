'use client';

import { useRef, useEffect, useState, HTMLAttributes } from 'react';

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  once?: boolean;
  distance?: number;
}

export default function ScrollReveal({
  children,
  className,
  style,
  delay = 0,
  direction = 'up',
  distance = 40,
  once = true,
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { rootMargin: '-8% 0px', threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const hiddenTransform =
    direction === 'up'    ? `translateY(${distance}px)` :
    direction === 'left'  ? `translateX(-${distance}px)` :
    direction === 'right' ? `translateX(${distance}px)` :
    'none';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : hiddenTransform,
        transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: visible ? 'auto' : 'opacity, transform',
      }}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </div>
  );
}
