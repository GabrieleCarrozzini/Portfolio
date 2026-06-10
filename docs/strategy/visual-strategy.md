# VISUAL STRATEGY
## How to build a portfolio that looks like the work made it, not like the design made it
### Gabriele Carrozzini | June 2026

---

## CORE PRINCIPLE

The design system's job is to disappear. It exists to frame real images with authority and then get out of the way. Every decorative element — circuit grids, HUD overlays, corner marks, gold accents — should amplify what the images communicate, not compensate for their absence.

When you look at a page and you see the design, the images haven't done their job. When you look at a page and you see the work, the design has done its job.

This strategy defines how to get there.

---

## PART 1 — THE VISUAL IDENTITY

### What the current system communicates
- Technical precision (mono labels, grid overlays, circuit patterns)
- Cinematic restraint (dark palette, gold accent, wide typographic scale)
- Cyberpunk/editorial aesthetic (HUD elements, scan lines, glitch effects)
- Premium positioning (Clash Display at large scale, conservative spacing)

### What it needs to communicate (and currently doesn't)
- Authorial confidence (the work is the evidence, not the framing)
- Design depth (showing process, not just outcomes)
- Versatility (B&W editorial + commercial product + book cover = range)
- Human presence (who made this, with what intention)

### The gap
The identity is a vessel without contents. Every premium signal the design system sends depends on real work landing inside it. The system is ready. The contents need to arrive.

---

## PART 2 — IMAGE PHILOSOPHY

### The hierarchy of image types

**Tier 1: Final designed output** — the poster, the card, the cover. Always the clearest proof of skill. These lead every project.

**Tier 2: In-context mockups** — the work placed in the world (framed on a wall, on a billboard, as a physical book). These answer "does this work in reality?" They follow the flat design.

**Tier 3: Source/photographic material** — the raw game screenshots, the photoshoot portraits, the product photography that fed the design. These add narrative: "this is where it came from." They follow the mockup.

**Tier 4: Assets and process exports** — cutouts, color variants, extracted elements. These show the design thinking and iteration. They appear last in the gallery, never first.

This hierarchy is non-negotiable. Never open a project with a cutout. Never open a project with an asset variant. Open with the strongest finished piece, then walk backward through how it was made.

### Image treatment principles

**Never crop arbitrarily.** Every crop should be intentional — portrait vs. landscape determined by the composition's center of gravity, not by the slot size.

**Respect the original color temperature.** The Lara shots are B&W by design. The Fuji poster is warm red-orange by design. The Cyberpunk card is amber-on-black by design. Do not apply additional color grading or tinting beyond what already exists in the source images.

**Let dark images be dark.** Several key assets (OriginalT.RAIDER.png, png SoMi.png, av.png) are very dark images. On a dark portfolio background, this creates a seamless, immersive quality. Do not add white borders, cards with white backgrounds, or drop shadows that fight the image's own tone.

**Cutouts need white or transparent backgrounds.** The isolated assets (`lara sfumato nero.png`, `blue sfumato BENE da esempio.png`, `ng red png.png`) were designed to float. They should either be placed against the dark site background (which makes them feel integrated) or used as compositing elements in designed layouts — never dropped onto colored cards.

---

## PART 3 — HOMEPAGE VISUAL STRATEGY

### Hero section: replace the CSS silhouette

**Current state:** Animated geometric V-character silhouette, gold/circuit aesthetic, headline reveal animation.

**Required state:** The hero opens with the strongest single image from the portfolio. Based on the available assets, the candidates are:
- `red jpeg sandevistan.jpg` — red glitch full-body shot, maximum visual drama
- `TombRaider.jpg` — cinematic B&W Lara portrait, strong compositional authority
- `Cyberpunk white card.png` — designed output, but too small-scale for a hero bg
- `photomode_16082025_165357.png` — extreme B&W portrait, but very tight/close

**Recommendation:** `red jpeg sandevistan.jpg` as the hero background image, with the current headline and CTA overlaid. The red-on-black glitch aesthetic is fully consistent with the site's visual language. The figure's pose (hands raised, gun-finger gesture) is arresting. The motion-blur ghost creates cinematic depth. The existing gold typography will read clearly over the dark areas.

The CSS silhouette can be retired or kept as a fallback for reduced-motion users only.

### FeaturedWork section: show real project covers

Currently renders CSS-art ProjectVisuals. Each card should show the primary hero image for that project, with the existing hover/scale treatment applied to real photography.

The visual effect will be transformative: four cards showing a B&W Lara portrait, a red glitch cyberpunk shot, an orange peach poster, and a "TURN ME OFF" book cover — all in the same grid — immediately communicates range and craft.

### GalleryStrip: the most kinetic moment on the page

This horizontal scroll section should function as a visual torrent — 12–16 images pulled from across all projects, flowing in a carefully sequenced order. The sequence matters:

Suggested sequence for GalleryStrip:
1. `TombRaider.jpg` (B&W portrait, strong)
2. `Cyberpunk white card.png` (gold card design)
3. `poster commerciale Fuji.jpg` (warm red-orange)
4. `photomode_14072025_220312.png` (blue-hair, vivid)
5. `1st Tomb raider.png` (poster design)
6. `mockup libro copertina.png` (book physical)
7. `red jpeg sandevistan.jpg` (red glitch)
8. `mockup fuji serio dritto.png` (billboard)
9. `photomode_16082025_165357.png` (B&W cybernetic face)
10. `OriginalT.RAIDER.png` (cinematic Lara)
11. `mockup poster yellow.png` (framed cyberpunk poster)
12. `photomode_15072025_184604.png` (white-hair SoMi)

The sequence alternates: dark → warm → saturated → dark → designed → contextual. It should never feel monochromatic.

---

## PART 4 — CASE STUDY VISUAL STRATEGY

### The arc every case study must follow

1. **Open with the output** — what you made, at full scale, immediately. No context needed yet. The image should be strong enough to justify scrolling.
2. **Establish context** — brief, role, brief description. One screen.
3. **Show the work in the world** — mockup, context image, real application. Proves the work is real.
4. **Walk backward into process** — source imagery, raw shots, iteration. Shows how the output was reached.
5. **Zoom in on detail** — asset-level closeups, extracted elements, color variants. Shows design thinking.
6. **Exit to next project** — the sequence of case studies should feel like one coherent body of work.

### CaseCover as cinematic image

The full-bleed case study cover is currently a designed layout without a background image. Every case study cover should use its hero image as a full-bleed background:
- Set `object-fit: cover` and `object-position` tuned per image
- Apply the existing HUD overlay decorations on top
- The typography (project title, type, year) floats over the image
- Slight dark vignette ensures text legibility

### Process section: add images

The ProcessBreakdown component currently shows text labels. Alongside each label, add a small image (crop of the source image, or a detail shot) that visually demonstrates what the label describes. This directly addresses the Jago benchmark gap: process claims need visual evidence.

---

## PART 5 — ANIMATION AND MOTION STRATEGY

### What to keep
- Scroll reveal timing (760ms, `cubic-bezier(.16,1,.3,1)`) — this is correct and premium
- Stagger timing (80ms between items) — creates rhythm without feeling mechanical
- Nav scroll behavior (blur/darken at 48px) — subtle and functional
- Lightbox keyboard navigation — excellent UX baseline

### What to add

**Image reveal animations (per-image):**
As each gallery image enters the viewport, it should not simply fade in. Proposed: a vertical clip-path reveal — the image uncurtains from bottom to top over 900ms, with the `--ease-cinematic` easing. This references the existing `clip-path-reveal` CSS class and extends it to images. Effect: the image slides into existence rather than materializing. Cinematic, not flashy.

**Hero image entrance:**
On the homepage, the hero background image should enter with a very slow Ken Burns effect (scale from 1.05 → 1.0 over 8 seconds, ease-out). Combined with the existing headline reveal, this creates the sensation of the image settling behind the text. Subtle — a viewer should feel it more than see it.

**FeaturedWork hover:**
Currently: CSS scale + glitch effect on hover. With real images: add a `mix-blend-mode` shift on hover — the image color temperature warms or desaturates slightly as the card elevates. This is more refined than the current glitch, which is better suited for the Cyberpunk projects than Fuji or Turn Me Off.

**GalleryStrip motion:**
The current implementation uses CSS `overflow-x: auto`. Consider adding a subtle auto-scroll that pauses on hover (requestAnimationFrame-based, not CSS animation — smoother). This prevents the strip from sitting static for visitors who don't know to scroll horizontally.

**Lightbox transitions:**
Current: Opens with a simple transition. Add: on lightbox open, the clicked thumbnail expands to fill the screen (FLIP animation using Framer Motion `layoutId`). This creates a spatial continuity — the image grows from where it was, rather than appearing from nowhere.

**Project-to-project navigation:**
The "Next Project" section at the bottom of each case study should show a preview image of the next project (currently CSS art). On hover, the preview image should crossfade/expand slightly. This creates visual appetite for continuing through the portfolio.

### What to remove or quiet

**The glitch hover on FeaturedWork cards** — compelling for the Cyberpunk project, but incongruous when applied to the Fuji peach poster or the Turn Me Off book cover. Make it project-specific: only apply glitch hover to Cyberpunk/V case studies. Use scale-only hover for Fuji and Turn Me Off.

**Circuit grid background at full opacity** — the `bg-circuit` pattern is currently visible throughout. With real images present, this texture will compete for attention. Lower opacity to approximately 15% in sections that contain images, keeping it more visible in text-only sections.

**Noise grain animation** — the 8-second looping grain is ambient and correct for the aesthetic. But on image-heavy sections, ensure it is applied at a low z-index so it overlays only the background, not the images themselves.

---

## PART 6 — PROJECT VISUAL IDENTITY

### Tomb Raider / Lara
- Palette in images: deep black, near-white, glowing halo
- Site accent: `--violet-500` (`#8A4FFF`) — this should be visible in section accents, captions, hover states for this project
- Typography mood: distressed, monumental — the "LARA CROFT" display treatment in the poster is already correct; the case study should carry this through
- Grid treatment: portrait-dominant images call for a tall narrow grid — single column at key moments, not a square grid

### Cyberpunk / V (Masked + SoMi Dark)
- Palette in images: amber, red, glitch, B&W
- Site accent: `--gold-500` (`#E9A124`) — already the signature accent, correct for this project
- Typography mood: HUD, technical, fragmented — the existing Clash Display + JetBrains Mono combination is ideal
- Grid treatment: the images are portrait-dominant; a mix of full-width hero and small-grid thumbnails creates the best rhythm

### Cyberpunk / Songbird (Blue Hair + White Hair Sessions)
- Palette in images: vivid blue, purple/magenta, electric
- Site accent: `--violet-500` with blue tinting — the existing accent can push slightly cooler for this project
- Typography mood: dreamy, neon, slightly destabilized — contrast with the more technical V aesthetic
- Grid treatment: the 6–7 images across both sessions can form a single contact-sheet style grid (equal-size thumbnails) — referencing editorial fashion photography

### Fuji
- Palette in images: red-orange gradient, warm white, vivid peach
- Site accent: `--orange-start` / `--orange-end` gradient
- Typography mood: commercial, confident, bold — the Clash Display at display scale fits perfectly
- Grid treatment: the three available images (flat poster + two billboard mockups) need no special treatment — full-width flat → mockup pair side by side

### Turn Me Off
- Palette in images: very dark, red glow, book spine highlight, cream text
- Site accent: `--red-500` (`#D33127`)
- Typography mood: distressed, cinematic, almost horror-editorial — "TURN ME OFF" in glitch letterforms is the strongest typographic moment in the whole portfolio
- Grid treatment: physical books on dark surface → expand to show details; the spine treatment in the mockup is the most interesting design detail and deserves a closeup

---

## PART 7 — WHAT TO BUILD NEXT (IN ORDER)

1. Export all images to `/public/projects/[slug]/` with consistent naming convention:
   `[slug]-hero.jpg`, `[slug]-featured-1.jpg`, `[slug]-gallery-01.jpg`, etc.

2. Export `Copertina.pdf` to `turn-me-off-design.png` at 2× resolution

3. Update `projects.ts` to include real image paths alongside existing data

4. Replace `ProjectVisual` in `CaseCover.tsx` with `<Image>` component using hero image

5. Replace `ProjectVisual` in `FeaturedWork.tsx` with real hero images per project

6. Replace `ProjectVisual` in `GalleryRow.tsx` with real gallery arrays (6–8 images each)

7. Replace `ProjectVisual` in `GalleryStrip.tsx` items with real images using the sequence defined in Part 3

8. Update hero section to use `red jpeg sandevistan.jpg` as background

9. Apply project-specific glitch hover only to Cyberpunk projects

10. Implement clip-path vertical reveal for gallery images entering viewport

---

*End of Visual Strategy*
