"use client";

import React from "react";
import { motion } from "framer-motion";
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
}) => (
  <motion.a
    href={href ?? "/work"}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{
      display: "inline-block",
      marginTop: "2rem",
      padding: "12px 32px",
      background: "transparent",
      border: "1px solid var(--white)",
      color: "var(--white)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      textDecoration: "none",
      cursor: "pointer",
    }}
  >
    {children}
  </motion.a>
);

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  ctaHref,
  images,
  className,
}) => {
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const duplicatedImages = [...images, ...images];

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
        className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/5"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          contain: "layout style",
        }}
      >
        <motion.div
          className="flex gap-4"
          style={{ willChange: "transform" }}
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
              style={{
                rotate: `${index % 2 === 0 ? -2 : 5}deg`,
              }}
            >
              <img
                src={src}
                alt={`Showcase image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
