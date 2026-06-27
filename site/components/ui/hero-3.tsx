"use client";

import React, { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref?: string;
  images: string[];
  className?: string;
}

const ActionButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.a
      href={href ?? "/work"}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.97 }}
      animate={
        shouldReduceMotion
          ? {}
          : {
              boxShadow: [
                "0 0 0px rgba(250,250,248,0)",
                "0 0 14px rgba(250,250,248,0.55), 0 0 28px rgba(250,250,248,0.18)",
                "0 0 0px rgba(250,250,248,0)",
              ],
            }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 2.8, ease: "easeInOut", repeat: Infinity }
      }
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        marginTop: "2rem",
        padding: "16px 48px",
        background: "var(--white)",
        border: "1.5px solid rgba(250,250,248,0.9)",
        fontFamily: "var(--font-display)",
        fontSize: "0.9rem",
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        textDecoration: "none",
        cursor: "pointer",
        color: "#060606",
        lineHeight: 1,
      }}
    >
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      <motion.span
        animate={{ x: hovered ? 5 : 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        aria-hidden="true"
        style={{ position: "relative", zIndex: 1, lineHeight: 1, color: "#060606" }}
      >
        →
      </motion.span>
    </motion.a>
  );
};

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  ctaHref,
  images,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const FADE_IN_ANIMATION_VARIANTS = shouldReduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 10 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring" as const, stiffness: 100, damping: 20 },
        },
      };

  // Shuffle then triple for a varied, seamless strip
  const tripledImages = useMemo(() => {
    const shuffled = [...images].sort((a, b) => {
      const ha = (a.charCodeAt(5) * 2654435761) >>> 0;
      const hb = (b.charCodeAt(5) * 2654435761) >>> 0;
      return ha - hb;
    });
    return [...shuffled, ...shuffled, ...shuffled];
  }, [images]);

  const SECONDS_PER_LOOP = 60;

  return (
    <section
      className={cn(
        "relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4",
        className
      )}
      style={{ background: "var(--black-900)" }}
    >
      <div className="z-10 flex flex-col items-center">
        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-block px-4 py-1.5 text-sm font-medium"
          style={{
            border: "1px solid var(--line)",
            color: "var(--gray-500)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--fs-label)",
            letterSpacing: "var(--tracking-label)",
            textTransform: "uppercase",
          }}
        >
          {tagline}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={
            typeof title === "string"
              ? {
                  hidden: {},
                  show: { transition: { staggerChildren: 0.1 } },
                }
              : FADE_IN_ANIMATION_VARIANTS
          }
          className="display"
          style={{ color: "var(--white)" }}
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={FADE_IN_ANIMATION_VARIANTS}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--fs-label)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--gray-500)",
          }}
        >
          {description}
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
        >
          <ActionButton href={ctaHref}>{ctaText}</ActionButton>
        </motion.div>
      </div>

      {/* Animated Image Marquee */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: '52%',
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 22%, black 85%, transparent)",
          maskImage: "linear-gradient(to bottom, transparent, black 22%, black 85%, transparent)",
          contain: "layout style",
        }}
      >
        <div
          className="flex gap-5"
          style={{
            willChange: "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            animation: shouldReduceMotion ? "none" : `marquee-scroll ${SECONDS_PER_LOOP}s linear infinite`,
          }}
        >
          {tripledImages.map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0"
              style={{
                height: 'clamp(200px, 28vh, 340px)',
                aspectRatio: '3/4',
                rotate: `${((index % 7) - 3) * 0.9}deg`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
                style={{ borderRadius: 0 }}
                loading={index < 12 ? 'eager' : 'lazy'}
                fetchPriority={index < 6 ? 'high' : 'low'}
                decoding="async"
                width={390}
                height={520}
              />
            </div>
          ))}
        </div>

        <style>{`
          @keyframes marquee-scroll {
            from { transform: translateX(0) translateZ(0); }
            to   { transform: translateX(-33.333%) translateZ(0); }
          }
        `}</style>
      </div>
    </section>
  );
};
