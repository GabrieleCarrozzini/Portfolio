"use client";

import React, { useState } from "react";
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
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href ?? "/work"}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.97 }}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        marginTop: "2rem",
        padding: "14px 40px",
        overflow: "hidden",
        border: "1px solid rgba(250,250,248,0.65)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-label)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {/* Sliding fill */}
      <motion.span
        initial={false}
        animate={{ x: hovered ? "0%" : "-101%" }}
        transition={{ duration: 0.38, ease: [0.76, 0, 0.24, 1] }}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--white)",
          zIndex: 0,
        }}
      />
      {/* Label */}
      <motion.span
        animate={{ color: hovered ? "#060606" : "#FAFAF8" }}
        transition={{ duration: 0.05, delay: hovered ? 0.22 : 0 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        {children}
      </motion.span>
      {/* Arrow */}
      <motion.span
        animate={{
          x: hovered ? 5 : 0,
          color: hovered ? "#060606" : "#FAFAF8",
        }}
        transition={{
          x: { duration: 0.22, ease: "easeOut" },
          color: { duration: 0.05, delay: hovered ? 0.22 : 0 },
        }}
        aria-hidden="true"
        style={{ position: "relative", zIndex: 1, lineHeight: 1 }}
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
        <div className="marquee-track flex gap-4">
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
              style={{ rotate: `${index % 2 === 0 ? -2 : 5}deg` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover rounded-2xl shadow-md"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
