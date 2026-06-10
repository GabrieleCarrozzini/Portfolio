"use client"

import Image from "next/image"
import { ScrollVelocity } from "@/components/ui/scroll-velocity"

const row1 = [
  { title: "V — Cyberpunk",      src: "/projects/v/gallery-01.png" },
  { title: "Lara",               src: "/projects/lara/gallery-01.png" },
  { title: "Sandevistan",        src: "/projects/sandevistan/hero.jpg" },
  { title: "Fuji",               src: "/projects/fuji/hero.jpg" },
  { title: "Somi",               src: "/projects/somi/gallery-01.png" },
  { title: "Songbird",           src: "/projects/songbird/gallery-01.png" },
  { title: "Turn Me Off",        src: "/projects/turn-me-off/hero.png" },
  { title: "V — gold",          src: "/projects/v/gallery-02.png" },
]

const row2 = [
  { title: "Lara portrait",      src: "/projects/lara/gallery-03.jpg" },
  { title: "Sandevistan blue",   src: "/projects/sandevistan/gallery-02.png" },
  { title: "Fuji billboard",     src: "/projects/fuji/gallery-02.png" },
  { title: "Somi bw",            src: "/projects/somi/gallery-02.png" },
  { title: "Songbird July",      src: "/projects/songbird/gallery-04.png" },
  { title: "V poster",           src: "/projects/v/gallery-03.png" },
  { title: "Turn Me Off book",   src: "/projects/turn-me-off/gallery-01.png" },
  { title: "Lara logo",          src: "/projects/lara/gallery-05.jpg" },
]

function ImageCard({ title, src }: { title: string; src: string }) {
  return (
    <div className="relative h-[6rem] w-[9rem] shrink-0 md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]">
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 768px) 9rem, (max-width: 1280px) 12rem, 18rem"
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
