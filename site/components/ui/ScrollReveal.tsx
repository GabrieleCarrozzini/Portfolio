'use client';

import { useEffect, useRef, HTMLAttributes } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  once?: boolean;
  distance?: number;
}

const makeVariants = (direction: string, distance: number): Variants => ({
  hidden: {
    opacity: 0,
    y:       direction === 'up'    ? distance : 0,
    x:       direction === 'left'  ? -distance
           : direction === 'right' ?  distance : 0,
    scale:   direction === 'none'  ? 1 : 0.97,
  },
  visible: { opacity: 1, y: 0, x: 0, scale: 1 },
});

export default function ScrollReveal({
  children,
  className,
  style,
  delay = 0,
  direction = 'up',
  distance = 52,
  once = true,
  ...rest
}: ScrollRevealProps) {
  const ref      = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-8% 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={controls}
      variants={makeVariants(direction, distance)}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
        scale: { duration: 0.85 },
      }}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </motion.div>
  );
}
