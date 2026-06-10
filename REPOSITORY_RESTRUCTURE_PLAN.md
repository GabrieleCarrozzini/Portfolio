# REPOSITORY RESTRUCTURE PLAN
**Portfolio — Gabriele Carrozzini**
Generated: 2026-06-09 | Status: AWAITING APPROVAL — NO CHANGES MADE YET

---

## EXECUTIVE SUMMARY

The repository has 7 distinct problems:

| Problem | Severity | Impact |
|---|---|---|
| ~117 MB of exact duplicate assets in `public/` | Critical | Site weight, maintenance |
| 36 MB single image (`v/gallery-02.png`) in public | Critical | Performance |
| 3 dead components never imported anywhere | Medium | Code quality |
| 2 orphaned public files after Songbird split | Medium | Confusion |
| Italian folder name with spaces (`immagini risorse`) | Medium | Professionalism |
| 50+ source files with broken naming | Medium | Team readability |
| 7 strategy documents scattered at root level | Low | Navigation |

---

## SECTION 1 — CURRENT STRUCTURE (annotated)

```
portfolio/
├── .claude/
│   └── settings.local.json               ✓ keep
│
├── immagini risorse/                      ⚠ RENAME — Italian, spaces
│   ├── cyberpunk/
│   │   ├── masked yellow/                 ⚠ RENAME — spaces
│   │   │   ├── Cyberpunk white card.png   ✗ spaces, vague
│   │   │   ├── hero.png                   ✓ ok
│   │   │   ├── mockup poster yellow.png   ✗ spaces, colour-as-desc
│   │   │   ├── ng yellow png.png          ✗ meaningless
│   │   │   └── photomode_05082025_211208.png ✗ game screenshot naming
│   │   ├── session-aug05-masked red/      ⚠ RENAME — spaces
│   │   │   ├── ng red png expo.png        ✗ meaningless
│   │   │   ├── ng red png senza sfumo.png ✗ Italian + meaningless
│   │   │   ├── ng red png.png             ✗ meaningless
│   │   │   ├── photomode_05082025_204035.png ✗ game screenshot naming
│   │   │   └── red jpeg sandevistan.jpg   ✗ spaces, format-as-name
│   │   ├── session-aug16-somi-dark/       ✓ ok
│   │   │   ├── av.png                     ✗ single letter, meaningless
│   │   │   ├── photomode_16082025_165357.png ✗ game screenshot naming
│   │   │   ├── photomode_16082025_175019.png ✗ game screenshot naming
│   │   │   └── png SoMi.png               ✗ spaces, format-as-name
│   │   ├── session-july14-blue-hair/      ✓ ok
│   │   │   ├── photomode_14072025_214719.png ✗ game screenshot naming
│   │   │   ├── photomode_14072025_220312.png ✗ game screenshot naming
│   │   │   └── photomode_14072025_223827.png ✗ game screenshot naming
│   │   └── session-july15-blue/           ✓ ok
│   │       ├── blue sfumato BENE da esempio.png ✗ Italian, spaces, CAPS, "da esempio"
│   │       ├── photomode_15072025_184604.png ✗ game screenshot naming
│   │       ├── photomode_15072025_185403.png ✗ game screenshot naming
│   │       └── photomode_15072025_185804.png ✗ game screenshot naming
│   ├── fuji/                              ✓ ok
│   │   ├── mockup fuji serio dritto.png   ✗ Italian, spaces
│   │   ├── mockup serio fuji.png          ✗ Italian, spaces
│   │   └── poster commerciale Fuji.jpg    ✗ Italian, spaces, capital
│   ├── tomb-raider/                       ✓ ok
│   │   ├── assets/
│   │   │   └── lara sfumato nero.png      ✗ Italian, spaces
│   │   ├── final/
│   │   │   ├── 1st Tomb raider.png        ✗ starts with number, spaces
│   │   │   └── Risorsa 1.png              ✗ Italian, meaningless
│   │   └── shots/
│   │       ├── Immagine WhatsApp 2025-04-23 ore 21.40.03_e3db22ec.jpg  ✗ WhatsApp export, 53 KB
│   │       ├── LaraVErticale.png          ✗ mixed case
│   │       ├── OriginalT.RAIDER.png       ✗ inconsistent case, dots
│   │       ├── TombRaider.jpg             ⚠ ok-ish
│   │       ├── TombRaider219.jpg          ✗ meaningless number
│   │       └── TombRaider219-rotated.jpg  ✗ process step as name
│   └── turn-me-off/                       ✓ ok
│       ├── Copertina.pdf                  ✗ Italian, capital (49 MB source — keep)
│       ├── copertina-export.png           ✗ Italian, process step
│       └── mockup libro copertina.png     ✗ Italian, spaces
│
├── site/                                  ✓ keep as-is (Next.js project)
│   ├── app/
│   │   ├── about/page.tsx                 ✓
│   │   ├── contact/ContactClient.tsx      ✓
│   │   ├── contact/page.tsx               ✓
│   │   ├── services/ServicesClient.tsx    ✓
│   │   ├── services/page.tsx              ✓
│   │   ├── work/[slug]/page.tsx           ✓
│   │   ├── work/page.tsx                  ✓
│   │   ├── favicon.ico                    ✓
│   │   ├── globals.css                    ✓
│   │   ├── layout.tsx                     ✓
│   │   ├── page.tsx                       ✓
│   │   ├── robots.ts                      ✓
│   │   └── sitemap.ts                     ✓
│   ├── components/
│   │   ├── home/
│   │   │   ├── AboutTeaser.tsx            ✓
│   │   │   ├── Capabilities.tsx           ✓
│   │   │   ├── ContactBand.tsx            ✓
│   │   │   ├── FeaturedWork.tsx           ✓
│   │   │   ├── GalleryStrip.tsx           ✗ DEAD CODE — 0 imports, replaced by WorkGallery
│   │   │   ├── Hero.tsx                   ✓
│   │   │   └── WorkGallery.tsx            ✓
│   │   ├── layout/
│   │   │   ├── Footer.tsx                 ✓
│   │   │   └── Nav.tsx                    ✓
│   │   ├── ui/
│   │   │   ├── Caption.tsx                ✓
│   │   │   ├── HudLabel.tsx               ✗ DEAD CODE — 0 imports anywhere
│   │   │   ├── ProjectVisual.tsx          ✗ DEAD CODE — 0 imports, old placeholder system
│   │   │   └── ScrollReveal.tsx           ✓
│   │   └── work/
│   │       ├── CaseCover.tsx              ✓
│   │       ├── GalleryRow.tsx             ✓
│   │       ├── ProcessBreakdown.tsx       ✓
│   │       └── ProjectCard.tsx            ✓ used in work/page.tsx
│   ├── lib/
│   │   ├── data/projects.ts               ✓
│   │   └── utils.ts                       ✓ (cn utility, standard Tailwind helper)
│   ├── public/
│   │   ├── file.svg                       ✗ Next.js boilerplate, unused
│   │   ├── globe.svg                      ✗ Next.js boilerplate, unused
│   │   ├── hero-bg.jpg                    ✗ OLD HERO — unused since hero redesign
│   │   ├── next.svg                       ✗ Next.js boilerplate, unused
│   │   ├── vercel.svg                     ✗ Next.js boilerplate, unused
│   │   ├── window.svg                     ✗ Next.js boilerplate, unused
│   │   └── projects/
│   │       ├── fuji/
│   │       │   ├── card.jpg               ⚠ DUPLICATE of hero.jpg (4.1 MB × 3)
│   │       │   ├── gallery-01.jpg         ⚠ DUPLICATE of hero.jpg (4.1 MB × 3)
│   │       │   ├── gallery-02.png         ✓ 8.5 MB — oversized, flag for compression
│   │       │   ├── gallery-03.png         ✓ 6.2 MB — oversized, flag for compression
│   │       │   └── hero.jpg               ✓ canonical
│   │       ├── lara/
│   │       │   ├── card.png               ⚠ DUPLICATE of gallery-01.png (5.5 MB × 2)
│   │       │   ├── gallery-01.png         ✓ canonical
│   │       │   ├── gallery-02.png         ✓
│   │       │   ├── gallery-03.jpg         ✓
│   │       │   ├── gallery-04.png         ✓
│   │       │   ├── gallery-05.jpg         ⚠ 53 KB WhatsApp export — very low quality
│   │       │   ├── gallery-06.png         ✓
│   │       │   ├── gallery-07.png         ✓
│   │       │   ├── gallery-08.jpg         ✓
│   │       │   └── hero.jpg               ⚠ DUPLICATE of gallery-03.jpg (738 KB × 2)
│   │       ├── sandevistan/
│   │       │   ├── card.jpg               ⚠ DUPLICATE of hero.jpg (68 KB × 3 — tiny, low priority)
│   │       │   ├── gallery-01.jpg         ⚠ DUPLICATE of hero.jpg
│   │       │   ├── gallery-02.png         ✓
│   │       │   ├── gallery-03.png         ✓
│   │       │   ├── gallery-04.png         ✓
│   │       │   ├── gallery-05.png         ✓
│   │       │   └── hero.jpg               ✓ canonical
│   │       ├── somi/
│   │       │   ├── card.png               ⚠ DUPLICATE of hero.png (2.8 MB × 3)
│   │       │   ├── gallery-01.png         ✓ canonical
│   │       │   ├── gallery-02.png         ✓
│   │       │   ├── gallery-03.png         ✓
│   │       │   ├── gallery-04.png         ✓
│   │       │   └── hero.png               ⚠ DUPLICATE of gallery-01.png
│   │       ├── songbird/
│   │       │   ├── card.png               ⚠ DUPLICATE of hero.png (1.6 MB × 3)
│   │       │   ├── gallery-01.png         ✓ canonical
│   │       │   ├── gallery-02.png         ✗ ORPHAN — B&W portrait now in somi/, unreferenced
│   │       │   ├── gallery-03.png         ✗ ORPHAN — B&W portrait now in somi/, unreferenced
│   │       │   ├── gallery-04.png         ✓
│   │       │   ├── gallery-05.png         ✓
│   │       │   ├── gallery-06.png         ✓
│   │       │   ├── gallery-07.png         ✓
│   │       │   └── hero.png               ⚠ DUPLICATE of gallery-01.png / card.png
│   │       ├── turn-me-off/
│   │       │   ├── card.png               ⚠ DUPLICATE of hero.png (11 MB × 3 = 33 MB!)
│   │       │   ├── gallery-01.png         ✓ 7 MB — oversized, flag for compression
│   │       │   ├── gallery-02.png         ⚠ DUPLICATE of hero.png
│   │       │   └── hero.png               ✓ canonical
│   │       └── v/
│   │           ├── card.png               ⚠ DUPLICATE of gallery-01.png (18 MB × 2 = 36 MB!)
│   │           ├── gallery-01.png         ✓ canonical (but 18 MB — oversized)
│   │           ├── gallery-02.png         ✗ 36 MB — CRITICAL oversize
│   │           ├── gallery-03.png         ✓
│   │           ├── gallery-04.png         ✓
│   │           ├── gallery-05.png         ✓
│   │           └── hero.png               ⚠ DUPLICATE of gallery-05.png (1.2 MB × 2)
│   ├── README.md                          ✗ Next.js boilerplate README, replace with real one
│   └── tsconfig.tsbuildinfo               ✓ build artifact, gitignored
│
├── CONTENT_EXTRACTION.md                  ⚠ MOVE → docs/planning/
├── CREATIVE_AUDIT.md                      ⚠ MOVE → docs/audits/
├── DESIGN_SYSTEM.md                       ⚠ MOVE → docs/strategy/
├── IMAGE_USAGE_PLAN.md                    ⚠ MOVE → docs/planning/ (or archive — implemented)
├── SITE_MAP.md                            ⚠ MOVE → docs/planning/
├── VISUAL_STRATEGY.md                     ⚠ MOVE → docs/strategy/
├── WEBSITE_CREATIVE_BRIEF.md             ⚠ MOVE → docs/strategy/
└── portfolio leggero.pdf                  ⚠ RENAME + MOVE → docs/portfolio/
```

---

## SECTION 2 — ISSUES FOUND

### 2A · Dead code (site/components/)

| File | Status | Reason |
|---|---|---|
| `components/home/GalleryStrip.tsx` | DELETE | 0 imports anywhere; replaced by WorkGallery.tsx |
| `components/ui/ProjectVisual.tsx` | DELETE | 0 imports anywhere; was old placeholder image system |
| `components/ui/HudLabel.tsx` | DELETE | 0 imports anywhere; never used in production |

### 2B · Duplicate public assets

Exact byte-identical files wasting disk space and creating maintenance confusion:

| Duplicate group | Size each | Copies | Wasted |
|---|---|---|---|
| `turn-me-off/card.png` = `hero.png` = `gallery-02.png` | 11,079 KB | 3 | **22 MB** |
| `v/card.png` = `gallery-01.png` | 18,002 KB | 2 | **18 MB** |
| `v/gallery-02.png` (not a dup, but 36 MB single file) | 36,212 KB | 1 | **36 MB oversized** |
| `fuji/card.jpg` = `hero.jpg` = `gallery-01.jpg` | 4,148 KB | 3 | **8 MB** |
| `lara/card.png` = `gallery-01.png` | 5,460 KB | 2 | **5 MB** |
| `lara/hero.jpg` = `gallery-03.jpg` | 738 KB | 2 | **0.7 MB** |
| `somi/card.png` = `hero.png` = `gallery-01.png` | 2,773 KB | 3 | **5.5 MB** |
| `songbird/card.png` = `hero.png` = `gallery-01.png` | 1,590 KB | 3 | **3 MB** |
| `sandevistan/card.jpg` = `hero.jpg` = `gallery-01.jpg` | 68 KB | 3 | <0.1 MB |

**Total wasted: ~62 MB of exact duplicates in `public/`**

### 2C · Orphaned public assets (unreferenced in projects.ts)

| File | Why orphaned |
|---|---|
| `public/projects/songbird/gallery-02.png` | B&W portrait moved to somi/, still sitting in songbird/ |
| `public/projects/songbird/gallery-03.png` | Same as above |
| `public/hero-bg.jpg` | Old hero background, hero section redesigned, never used |
| `public/file.svg` | Next.js boilerplate |
| `public/globe.svg` | Next.js boilerplate |
| `public/next.svg` | Next.js boilerplate |
| `public/vercel.svg` | Next.js boilerplate |
| `public/window.svg` | Next.js boilerplate |

### 2D · Oversized images (web-critical)

Next.js Image component handles resizing for display, but the source files in `public/` are still served. Files > 3 MB should be flagged:

| File | Size | Action |
|---|---|---|
| `v/gallery-02.png` | 36 MB | Re-export at max 2400px |
| `v/card.png` / `gallery-01.png` | 18 MB each | Re-export at max 2400px |
| `turn-me-off/hero.png` etc. | 11 MB each | Re-export at max 2400px |
| `fuji/gallery-02.png` | 8.5 MB | Re-export at max 2400px |
| `turn-me-off/gallery-01.png` | 7 MB | Re-export at max 2400px |
| `fuji/gallery-03.png` | 6.2 MB | Re-export at max 2400px |
| `lara/card.png` / `gallery-01.png` | 5.5 MB each | Re-export at max 2400px |

### 2E · Source asset naming violations

Complete list of files breaking the naming convention:

**`immagini risorse/cyberpunk/masked yellow/`**
| Current | Proposed |
|---|---|
| `Cyberpunk white card.png` | `v-poster-white-card.png` |
| `hero.png` | `v-character-cutout-gold.png` |
| `mockup poster yellow.png` | `v-poster-wall-mockup.png` |
| `ng yellow png.png` | `v-character-cutout-alt.png` |
| `photomode_05082025_211208.png` | `v-photo-golden-light.png` |

**`immagini risorse/cyberpunk/session-aug05-masked red/`**
| Current | Proposed |
|---|---|
| `ng red png expo.png` | `sandevistan-cutout-exposed.png` |
| `ng red png senza sfumo.png` | `sandevistan-cutout-clean.png` |
| `ng red png.png` | `sandevistan-cutout-standard.png` |
| `photomode_05082025_204035.png` | `sandevistan-photo-full-body.png` |
| `red jpeg sandevistan.jpg` | `sandevistan-hero-red.jpg` |

**`immagini risorse/cyberpunk/session-aug16-somi-dark/`**
| Current | Proposed |
|---|---|
| `av.png` | `somi-cutout-portrait.png` |
| `photomode_16082025_165357.png` | `somi-portrait-01-bw.png` |
| `photomode_16082025_175019.png` | `somi-portrait-02-bw.png` |
| `png SoMi.png` | `somi-character-export.png` |

**`immagini risorse/cyberpunk/session-july14-blue-hair/`**
| Current | Proposed |
|---|---|
| `photomode_14072025_214719.png` | `songbird-july14-portrait-01.png` |
| `photomode_14072025_220312.png` | `songbird-july14-portrait-02.png` |
| `photomode_14072025_223827.png` | `songbird-july14-portrait-03.png` |

**`immagini risorse/cyberpunk/session-july15-blue/`**
| Current | Proposed |
|---|---|
| `blue sfumato BENE da esempio.png` | `songbird-july15-cutout-blue.png` |
| `photomode_15072025_184604.png` | `songbird-july15-portrait-01.png` |
| `photomode_15072025_185403.png` | `songbird-july15-portrait-02.png` |
| `photomode_15072025_185804.png` | `songbird-july15-portrait-03.png` |

**`immagini risorse/fuji/`**
| Current | Proposed |
|---|---|
| `mockup fuji serio dritto.png` | `fuji-billboard-mockup-front.png` |
| `mockup serio fuji.png` | `fuji-billboard-mockup-angle.png` |
| `poster commerciale Fuji.jpg` | `fuji-poster-design.jpg` |

**`immagini risorse/tomb-raider/`**
| Current | Proposed |
|---|---|
| `assets/lara sfumato nero.png` | `assets/lara-cutout-dark.png` |
| `final/1st Tomb raider.png` | `final/lara-poster-design.png` |
| `final/Risorsa 1.png` | `final/lara-logo-asset.png` |
| `shots/Immagine WhatsApp 2025-04-23 ore 21.40.03_e3db22ec.jpg` | ARCHIVE — 53 KB, WhatsApp quality |
| `shots/LaraVErticale.png` | `shots/lara-portrait-vertical.png` |
| `shots/OriginalT.RAIDER.png` | `shots/lara-portrait-original.png` |
| `shots/TombRaider.jpg` | `shots/lara-portrait-hero.jpg` |
| `shots/TombRaider219.jpg` | `shots/lara-portrait-alternate.jpg` |
| `shots/TombRaider219-rotated.jpg` | `shots/lara-portrait-alternate-rotated.jpg` |

**`immagini risorse/turn-me-off/`**
| Current | Proposed |
|---|---|
| `Copertina.pdf` | `turn-me-off-cover-source.pdf` |
| `copertina-export.png` | `turn-me-off-cover-flat.png` |
| `mockup libro copertina.png` | `turn-me-off-book-mockup.png` |

**Root-level:**
| Current | Proposed |
|---|---|
| `portfolio leggero.pdf` | `docs/portfolio/gabriele-carrozzini-portfolio-2026.pdf` |

---

## SECTION 3 — PROPOSED STRUCTURE

```
portfolio/
│
├── assets/                              # renamed from "immagini risorse"
│   ├── v/
│   │   ├── v-character-cutout-gold.png
│   │   ├── v-character-cutout-alt.png
│   │   ├── v-photo-golden-light.png
│   │   ├── v-poster-design.png
│   │   ├── v-poster-wall-mockup.png
│   │   └── v-poster-white-card.png
│   ├── sandevistan/
│   │   ├── sandevistan-hero-red.jpg
│   │   ├── sandevistan-photo-full-body.png
│   │   ├── sandevistan-cutout-standard.png
│   │   ├── sandevistan-cutout-exposed.png
│   │   └── sandevistan-cutout-clean.png
│   ├── somi/
│   │   ├── somi-portrait-01-bw.png
│   │   ├── somi-portrait-02-bw.png
│   │   ├── somi-cutout-portrait.png
│   │   └── somi-character-export.png
│   ├── songbird/
│   │   ├── songbird-july15-cutout-blue.png
│   │   ├── songbird-july15-portrait-01.png
│   │   ├── songbird-july15-portrait-02.png
│   │   ├── songbird-july15-portrait-03.png
│   │   ├── songbird-july14-portrait-01.png
│   │   ├── songbird-july14-portrait-02.png
│   │   └── songbird-july14-portrait-03.png
│   ├── lara/
│   │   ├── lara-poster-design.png
│   │   ├── lara-logo-asset.png
│   │   ├── lara-cutout-dark.png
│   │   ├── lara-portrait-hero.jpg
│   │   ├── lara-portrait-vertical.png
│   │   ├── lara-portrait-original.png
│   │   ├── lara-portrait-alternate.jpg
│   │   └── lara-portrait-alternate-rotated.jpg
│   ├── fuji/
│   │   ├── fuji-poster-design.jpg
│   │   ├── fuji-billboard-mockup-front.png
│   │   └── fuji-billboard-mockup-angle.png
│   └── turn-me-off/
│       ├── turn-me-off-cover-source.pdf
│       ├── turn-me-off-cover-flat.png
│       └── turn-me-off-book-mockup.png
│
├── creative-review/                     # NEW — quality evaluation system
│   ├── creative-director.md
│   ├── motion-director.md
│   ├── museum-curator.md
│   ├── luxury-brand-director.md
│   └── awwwards-judge.md
│
├── docs/                                # NEW — all strategy documents
│   ├── strategy/
│   │   ├── visual-strategy.md           # ← VISUAL_STRATEGY.md
│   │   ├── design-system.md             # ← DESIGN_SYSTEM.md
│   │   └── creative-brief.md            # ← WEBSITE_CREATIVE_BRIEF.md
│   ├── planning/
│   │   ├── site-map.md                  # ← SITE_MAP.md
│   │   ├── content-extraction.md        # ← CONTENT_EXTRACTION.md
│   │   └── image-usage-plan.md          # ← IMAGE_USAGE_PLAN.md (mark as implemented)
│   ├── audits/
│   │   └── creative-audit.md            # ← CREATIVE_AUDIT.md
│   └── portfolio/
│       └── gabriele-carrozzini-portfolio-2026.pdf  # ← portfolio leggero.pdf
│
└── site/                                # Next.js project — mostly untouched
    ├── components/
    │   ├── home/
    │   │   └── GalleryStrip.tsx         ✗ DELETE
    │   └── ui/
    │       ├── HudLabel.tsx             ✗ DELETE
    │       └── ProjectVisual.tsx        ✗ DELETE
    └── public/
        ├── file.svg                     ✗ DELETE
        ├── globe.svg                    ✗ DELETE
        ├── hero-bg.jpg                  ✗ DELETE
        ├── next.svg                     ✗ DELETE
        ├── vercel.svg                   ✗ DELETE
        ├── window.svg                   ✗ DELETE
        └── projects/
            ├── fuji/
            │   ├── card.jpg             ✗ DELETE (= hero.jpg)
            │   └── gallery-01.jpg       ✗ DELETE (= hero.jpg) — update projects.ts
            ├── lara/
            │   ├── card.png             ✗ DELETE (= gallery-01.png)
            │   └── hero.jpg             ✗ DELETE (= gallery-03.jpg) — update projects.ts
            ├── sandevistan/
            │   ├── card.jpg             ✗ DELETE (= hero.jpg)
            │   └── gallery-01.jpg       ✗ DELETE (= hero.jpg) — update projects.ts
            ├── somi/
            │   ├── card.png             ✗ DELETE (= gallery-01.png)
            │   └── hero.png             ✗ DELETE (= gallery-01.png)
            ├── songbird/
            │   ├── card.png             ✗ DELETE (= gallery-01.png)
            │   ├── gallery-02.png       ✗ DELETE (orphaned — belongs to somi/)
            │   ├── gallery-03.png       ✗ DELETE (orphaned — belongs to somi/)
            │   └── hero.png             ✗ DELETE (= gallery-01.png)
            ├── turn-me-off/
            │   ├── card.png             ✗ DELETE (= hero.png)
            │   └── gallery-02.png       ✗ DELETE (= hero.png)
            └── v/
                ├── card.png             ✗ DELETE (= gallery-01.png)
                └── hero.png             ✗ DELETE (= gallery-05.png)
```

---

## SECTION 4 — CHANGE MANIFEST

### DELETE — Dead code (3 files)

```
site/components/home/GalleryStrip.tsx
site/components/ui/HudLabel.tsx
site/components/ui/ProjectVisual.tsx
```

### DELETE — Boilerplate & orphans (8 files)

```
site/public/file.svg
site/public/globe.svg
site/public/hero-bg.jpg
site/public/next.svg
site/public/vercel.svg
site/public/window.svg
site/public/projects/songbird/gallery-02.png   (orphaned after SoMi split)
site/public/projects/songbird/gallery-03.png   (orphaned after SoMi split)
```

### DELETE — Exact duplicates in public/ (14 files, ~62 MB recovered)

Before deleting each, `projects.ts` entries referencing them must be updated to the canonical path.

```
site/public/projects/fuji/card.jpg            → use hero.jpg
site/public/projects/fuji/gallery-01.jpg      → use hero.jpg in gallery array
site/public/projects/lara/card.png            → use gallery-01.png
site/public/projects/lara/hero.jpg            → use gallery-03.jpg
site/public/projects/sandevistan/card.jpg     → use hero.jpg
site/public/projects/sandevistan/gallery-01.jpg → use hero.jpg in gallery array
site/public/projects/somi/card.png            → use gallery-01.png
site/public/projects/somi/hero.png            → use gallery-01.png
site/public/projects/songbird/card.png        → use gallery-01.png
site/public/projects/songbird/hero.png        → use gallery-01.png
site/public/projects/turn-me-off/card.png     → use hero.png
site/public/projects/turn-me-off/gallery-02.png → use hero.png in gallery array
site/public/projects/v/card.png               → use gallery-01.png
site/public/projects/v/hero.png               → use gallery-05.png
```

### MOVE — Root strategy documents (7 files)

```
CONTENT_EXTRACTION.md    → docs/planning/content-extraction.md
CREATIVE_AUDIT.md        → docs/audits/creative-audit.md
DESIGN_SYSTEM.md         → docs/strategy/design-system.md
IMAGE_USAGE_PLAN.md      → docs/planning/image-usage-plan.md
SITE_MAP.md              → docs/planning/site-map.md
VISUAL_STRATEGY.md       → docs/strategy/visual-strategy.md
WEBSITE_CREATIVE_BRIEF.md → docs/strategy/creative-brief.md
portfolio leggero.pdf    → docs/portfolio/gabriele-carrozzini-portfolio-2026.pdf
```

### RENAME — Source assets (32 files in `immagini risorse/`)

Full rename table in Section 2E above.

### RENAME — Folder

```
immagini risorse/  →  assets/
```

### CREATE — Creative review system (5 files)

```
creative-review/creative-director.md
creative-review/motion-director.md
creative-review/museum-curator.md
creative-review/luxury-brand-director.md
creative-review/awwwards-judge.md
```

### CREATE — README

```
site/README.md  →  replace boilerplate with real project README
```

---

## SECTION 5 — PROJECTS.TS CHANGES REQUIRED

When duplicate public files are deleted, these data entries must be updated:

| Project | Field | Current value | New value |
|---|---|---|---|
| fuji | `heroImage` | `/projects/fuji/hero.jpg` | unchanged ✓ |
| fuji | `cardImage` | `/projects/fuji/hero.jpg` | unchanged ✓ |
| fuji | `gallery[0].src` | `/projects/fuji/gallery-01.jpg` | `/projects/fuji/hero.jpg` |
| lara | `heroImage` | `/projects/lara/hero.jpg` | `/projects/lara/gallery-03.jpg` |
| lara | `cardImage` | `/projects/lara/card.png` | `/projects/lara/gallery-01.png` |
| sandevistan | `gallery[0].src` | `/projects/sandevistan/gallery-01.jpg` | `/projects/sandevistan/hero.jpg` |
| somi | `heroImage` | `/projects/somi/hero.png` | `/projects/somi/gallery-01.png` |
| somi | `cardImage` | `/projects/somi/card.png` | `/projects/somi/gallery-01.png` |
| songbird | `heroImage` | `/projects/songbird/hero.png` | `/projects/songbird/gallery-01.png` |
| songbird | `cardImage` | `/projects/songbird/card.png` | `/projects/songbird/gallery-01.png` |
| turn-me-off | `heroImage` | `/projects/turn-me-off/hero.png` | unchanged ✓ |
| turn-me-off | `cardImage` | `/projects/turn-me-off/hero.png` | unchanged ✓ |
| turn-me-off | `gallery[1].src` | `/projects/turn-me-off/gallery-02.png` | `/projects/turn-me-off/hero.png` |
| v | `heroImage` | `/projects/v/hero.png` | `/projects/v/gallery-05.png` |
| v | `gallery[0].src` | `/projects/v/gallery-01.png` | unchanged ✓ (canonical) |

> Note: `v/card.png` is currently `gallery-01.png`. After dedup, `cardImage` becomes `/projects/v/gallery-01.png` (already correct since we updated it during the earlier session).

---

## SECTION 6 — IMPACT SUMMARY

| Action | Files affected | Disk saved |
|---|---|---|
| Delete dead components | 3 | ~20 KB |
| Delete boilerplate + orphans | 8 | ~9 MB |
| Delete exact public duplicates | 14 | ~62 MB |
| Rename source assets | 32 | 0 (rename only) |
| Move docs to /docs | 8 | 0 (move only) |
| Rename folder | 1 | 0 |
| Create creative-review docs | 5 | 0 |
| **Total** | **71** | **~71 MB** |

---

## AWAITING APPROVAL

Reply **APPROVE** to execute all changes, or specify which sections to execute.

Sections can be approved independently:
- **Section A** — Delete dead code (GalleryStrip, ProjectVisual, HudLabel)
- **Section B** — Delete boilerplate + orphaned public assets
- **Section C** — Deduplicate public project assets (requires projects.ts updates)
- **Section D** — Rename source assets (`immagini risorse/` → `assets/`)
- **Section E** — Move strategy documents to `docs/`
- **Section F** — Create `creative-review/` documents
- **Section G** — Replace site/README.md
