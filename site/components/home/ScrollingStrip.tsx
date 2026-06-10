"use client"

import Image from "next/image"
import { ScrollVelocity } from "@/components/ui/scroll-velocity"

const row1 = [
  { title: "V — Cyberpunk",   src: "/projects/v/gallery-01.png" },
  { title: "Lara",            src: "/projects/lara/gallery-01.png" },
  { title: "Sandevistan",     src: "/projects/sandevistan/hero.jpg" },
  { title: "Fuji",            src: "/projects/fuji/hero.jpg" },
  { title: "Somi",            src: "/projects/somi/gallery-01.png" },
  { title: "Songbird",        src: "/projects/songbird/gallery-01.png" },
]

const row2 = [
  { title: "Turn Me Off",     src: "/projects/turn-me-off/hero.png" },
  { title: "Lara portrait",   src: "/projects/lara/gallery-03.jpg" },
  { title: "Sandevistan blue",src: "/projects/sandevistan/gallery-02.png" },
  { title: "V poster",        src: "/projects/v/gallery-03.png" },
  { title: "Somi bw",         src: "/projects/somi/gallery-02.png" },
  { title: "Fuji billboard",  src: "/projects/fuji/gallery-02.png" },
]

function ImageCard({ title, src }: { title: string; src: string }) {
  return (
    <div
      className="relative h-[6rem] w-[9rem] shrink-0 md:h-[8rem] md:w-[12rem] xl:h-[11rem] xl:w-[16rem]"
      style={{ transform: "translateZ(0)" }}
    >
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 768px) 9rem, (max-width: 1280px) 12rem, 16rem"
        className="object-cover object-center"
      />
    </div>
  )
}

export default function ScrollingStrip() {
  return (
    <div
      style={{
        background: "var(--black-900)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        paddingTop: "var(--space-4)",
        paddingBottom: "var(--space-4)",
        overflow: "hidden",
        contain: "layout style",
      }}
      aria-hidden="true"
    >
      <div className="flex flex-col gap-3">
        <ScrollVelocity velocity={3}>
          {row1.map(({ title, src }) => (
            <ImageCard key={title} title={title} src={src} />
          ))}
        </ScrollVelocity>

        <ScrollVelocity velocity={-3}>
          {row2.map(({ title, src }) => (
            <ImageCard key={title} title={title} src={src} />
          ))}
        </ScrollVelocity>
      </div>
    </div>
  )
}
