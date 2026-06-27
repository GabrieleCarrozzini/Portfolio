'use client';

import React, { useEffect, useRef, HTMLAttributes } from 'react';

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
  itemWidth?: number;
  itemHeight?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.1, itemWidth = 320, itemHeight = 430, ...props }, ref) => {
    const rotationRef = useRef(0);
    const wheelRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
      const spin = () => {
        rotationRef.current += autoRotateSpeed;
        if (wheelRef.current) {
          wheelRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
        }
        rafRef.current = requestAnimationFrame(spin);
      };
      rafRef.current = requestAnimationFrame(spin);
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [autoRotateSpeed]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn('relative w-full h-full flex items-center justify-center', className)}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          ref={wheelRef}
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                className="absolute"
                style={{
                  width: itemWidth,
                  height: itemHeight,
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: -itemWidth / 2,
                  marginTop: -itemHeight / 2,
                  willChange: 'transform',
                }}
              >
                <div className="relative w-full h-full overflow-hidden group" style={{ border: '1px solid rgba(250,250,248,0.10)' }}>
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full text-white" style={{ padding: itemWidth < 200 ? '8px 10px' : '16px' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: itemWidth < 200 ? '0.42rem' : '0.55rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-500)',
                        marginBottom: itemWidth < 200 ? 3 : 6,
                      }}
                    >
                      {item.binomial}
                    </p>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: itemWidth < 200 ? '0.85rem' : 'clamp(1.3rem, 2.5vw, 1.7rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.025em',
                        textTransform: 'uppercase',
                        lineHeight: 1,
                        color: 'var(--white)',
                      }}
                    >
                      {item.common}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: itemWidth < 200 ? '0.38rem' : '0.5rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(250,250,248,0.45)',
                        marginTop: itemWidth < 200 ? 3 : 6,
                      }}
                    >
                      {item.photo.by}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
