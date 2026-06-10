# DESIGN_SYSTEM.md
### Reverse-engineered design system — Gabriele Carrozzini portfolio
*Source: `portfolio_leggero.pdf` (18 pages). This document does not summarize the portfolio; it extracts the operating rules behind it and translates them into a web-ready system.*

---

## 0. How to read this document
Every item is structured as:
- **What it is** — the rule as it appears in the source.
- **Why it works** — the design logic.
- **Web translation** — how to implement it on a modern site (tokens, behaviour, constraints).

Hex values are reconstructed from the artwork; treat them as a starting palette to be locked against final assets, not as sampled ground truth.

---

## 1. Brand positioning

**What it is.** A solo creative working at the intersection of **3D character art and graphic/poster design**, presented as a single authored voice ("Creative Artist", "VISUAL POWER"). The work spans cinematic character renders (V, Songbird, Lara), poster/cover design (V Poster, Lara Poster, Turn Me Off), advertising composition (Fuji), and technical breakdowns (wireframe/grid page). The recurring message is *form over literal meaning* — "Creativity begins where meaning ends."

**Why it works.** It reads as an *art director who can both generate the image and design the layout around it* — rare and valuable. The dark, cinematic treatment signals premium/entertainment-adjacent positioning (film, games, streaming, FMCG advertising) rather than generic freelance design.

**Web translation.** Position the site as a **director-level visual artist**, not a "graphic designer who also does 3D". Lead with the hybrid skill (3D + design) because that's the differentiator. Replace the vague "Creative Artist" label with a scannable role line, e.g. *"3D Character Artist & Art Director"* in the hero `<h1>` subtitle, while keeping "VISUAL POWER" as the emotional headline.

---

## 2. Visual identity

**What it is.** A high-contrast, cinematic, near-noir identity built on:
- Deep black canvases.
- A **signature amber/gold** as the primary brand colour (hero, V poster, Fuji, technical page).
- **Violet/purple neon** and **red** as secondary, project-driven accents (Songbird = violet, Turn Me Off / action poses = red).
- Monumental typography that often bleeds off-frame.
- Sci-fi / HUD framing devices: circuit lines, barcodes, code strings (`XN4LCO-43KS`), Japanese glyphs (未来 = "future"), grid overlays.

**Why it works.** The black + gold pairing is luxurious and instantly memorable, while the per-project accent system lets each piece feel distinct without breaking the brand. The HUD/technical layer communicates craft and "behind-the-scenes" rigor.

**Web translation.** Treat **black + gold** as the fixed brand layer (nav, footer, hero, buttons, focus states). Treat **violet/red/orange** as *project theme accents* applied only inside each case study (a CSS custom property `--project-accent` swapped per page). This preserves identity globally while letting case studies carry their original mood.

---

## 3. Design philosophy

**What it is.** *Subtraction and intent.* The taglines state it directly: "When logic steps back, form takes control. What remains is pure visual intent." Compositions are mostly empty space with one dominant subject and minimal supporting type.

**Why it works.** Negative space + a single hero subject is the most reliable way to make an image feel expensive. It forces hierarchy and eliminates clutter.

**Web translation.** Build the site on **one focal element per viewport**. Resist filling sections. Generous whitespace (here, black space) is the brand — do not compress it on desktop to "fit more above the fold". Content density should feel curated, gallery-like, not feed-like.

---

## 4. Tone of voice

**What it is.** Two registers coexist:
- **Manifesto / poetic** (hero tagline, Lara's "Orphaned by shadows, forged in blood…", Turn Me Off's "Spegni lo schermo. Accendi la mente.").
- **Technical / clinical** (code strings, "EYE FOCUS POINT", "MASK AREA-CONTRAST", "GEOMETRIC REPETITION", coordinates).

**Why it works.** The poetic voice sells emotion; the technical voice sells competence. Together they say "I feel *and* I engineer the image."

**Web translation.** Use the poetic voice for hero/section intros (short, declarative, present tense, no hedging). Use the technical voice for case-study captions and process notes (mono font, uppercase labels, real parameters). Keep both terse — never write a paragraph where a line will do. **Fix the language inconsistency**: the portfolio mixes Italian and English. Pick one primary language for the site; if both are needed, build proper i18n rather than mixing within a page.

---

## 5. Typography hierarchy

**What it is.** A clear three-tier system observed across pages:
1. **Monumental display** — heavy, wide/condensed, often clipped by the frame ("VISUAL POWER", "FUJI", "TURN ME OFF", "LARA CROFT"). Multiple personalities: extended-heavy (VISUAL POWER), tall-condensed (FUJI), distressed/grunge (LARA), chrome/glitch (TURN ME OFF).
2. **Tracked uppercase labels** — wide letter-spacing on small caps ("GABRIELE CARROZZINI / CREATIVE ARTIST", "SONGBIRD (GALLERIA RITRATTI)", project + year captions).
3. **Light body / flavor copy** — thin, calm, sometimes letter-spaced ("Creativity begins where meaning ends…").

**Why it works.** The size jump between display and body is dramatic, which creates instant hierarchy and cinematic scale. Tracked labels act as connective tissue and feel editorial/premium.

**Web translation.** Define a type scale with a large step ratio (≈1.333–1.5) so the contrast survives:
```
--fs-display : clamp(3.5rem, 12vw, 11rem)   /* hero, project titles */
--fs-h1      : clamp(2.5rem, 6vw, 5rem)
--fs-h2      : clamp(1.75rem, 3.5vw, 2.75rem)
--fs-body    : clamp(1rem, 1.1vw, 1.125rem)
--fs-label   : 0.75rem                       /* uppercase, tracked */
--tracking-label : 0.18em – 0.32em
```
Let display type bleed off-screen on hero/case-study covers (negative margins / `overflow: hidden` containers) to reproduce the clipped framing. Keep body line-length 60–75ch.

---

## 6. Font recommendations

**What it is.** The portfolio uses several distinct display faces plus a clean label/body face and a code/mono treatment.

**Web translation (pick by license tier):**

| Role | Free (Google/Fontshare) | Premium (commercial) | Notes |
|---|---|---|---|
| Hero / extended-heavy display ("VISUAL POWER") | **Clash Display**, **Archivo Expanded** | **Monument Extended**, **Druk Wide** | The wide-heavy face is the brand's signature; invest here if budget allows. |
| Condensed monumental ("FUJI") | **Anton**, **Bebas Neue** | **Druk Condensed**, **Compressa** | For tall, ink-heavy poster titles. |
| Body / UI | **Inter**, **Geist** | **Suisse Int'l**, **Neue Haas Grotesk** | Neutral neo-grotesque; carries the calm flavor copy. |
| Labels / HUD / metadata / code strings | **Geist Mono**, **Space Mono**, **JetBrains Mono** | **Söhne Mono** | Reproduces the `XN4LCO-43KS` / coordinate aesthetic — a genuine identity cue, not decoration. |

Limit live fonts to **3 families max** (one display, one grotesque, one mono) to protect load performance. The "distressed Lara" and "chrome glitch Turn Me Off" treatments are *effects on display type*, not separate webfonts — recreate them as per-case-study styling (texture overlay, chromatic offset), not extra font payloads.

---

## 7. Color palette

**What it is / Web translation.** Brand layer is fixed; accents are per-project. Reconstructed tokens:

**Primary (brand layer)**
```
--black-900 : #060606   /* base canvas */
--black-800 : #0C0B0A   /* slightly warm black for gold contexts */
--gold-500  : #E9A124   /* SIGNATURE accent — CTAs, links, focus */
--gold-600  : #C8851A   /* hover/pressed */
--gold-300  : #F3C36B   /* highlights, hairlines */
```
**Secondary (project accents)**
```
--violet-500 : #8A4FFF  /* Songbird / Lara "images" galleries */
--red-500    : #D33127  /* Turn Me Off / action poses */
--orange-grad: linear-gradient(#E8551F, #F5A623) /* Fuji / warm-taste work */
```
**Neutral ramp (text, surfaces, B&W work)**
```
--white      : #FAFAF8
--silver-400 : #C9CDD2   /* metallic "VISUAL" type */
--gray-500   : #8A8A8A
--gray-700   : #3A3A3A
--line       : rgba(233,161,36,0.18) /* gold hairline at low opacity */
```
**Why it works.** One saturated accent on near-black is high-contrast and luxurious; restraint keeps it from looking gamer-RGB. The neutral ramp supports the heavy use of black-and-white photography/renders.

**Rule:** never put two project accents in the same viewport. Global UI = gold only.

---

## 8. Spacing system

**What it is.** The artwork is loose and breathing — large margins, content pushed to one side, captions floated with deliberate air.

**Web translation.** Use an 8px base scale with generous section rhythm:
```
--space-1:4px  --space-2:8px  --space-3:16px  --space-4:24px
--space-5:40px --space-6:64px --space-7:96px  --space-8:160px
```
Section vertical padding should default to `--space-7`/`--space-8` on desktop. Cinematic identity dies when sections are cramped — err toward more space, especially around hero/case-study covers.

---

## 9. Grid system

**What it is.** Two grids coexist: a **cinematic full-bleed frame** (16:9 hero/cover compositions, subject right or center, text left) and an explicit **technical grid** (page 16 literally shows a measured grid with coordinates and focus annotations). Galleries use **3-up** layouts ("01 02 03").

**Why it works.** Full-bleed frames feel like film stills; the visible technical grid signals craft; the 3-up rhythm is a clean, scannable gallery convention.

**Web translation.** Use a **12-column** layout grid (max content width ≈ 1280–1440px, full-bleed allowed for media) with a `--gutter` of `--space-4`. Asymmetric splits (e.g. 5/7 or 4/8) recreate the "text left, image right" covers better than centered symmetry. Galleries = responsive 3→2→1 columns. Consider a subtle visible baseline/column grid as an optional "process mode" overlay echoing page 16.

---

## 10. Layout principles

**What it is.** Recurring patterns: (a) **cover spread** — title bleeds off, subject dominant, minimal caption; (b) **caption block** — `PROJECT NAME` / divider line / `YEAR`, centered; (c) **mockup pairing** — each design followed by a realistic environment mockup; (d) **technical breakdown** — annotated analysis of one piece.

**Why it works.** The repetition creates a predictable, premium rhythm: *cover → mockup → context*. The viewer always knows where they are.

**Web translation.** Make these four into reusable layout components: `CaseCover`, `MockupShowcase`, `ProcessBreakdown`, `GalleryRow`. The `PROJECT / line / YEAR` caption is a literal repeating motif — build it as one component and reuse it as the section heading for every case study.

---

## 11. Visual hierarchy

**What it is.** Order of attention is engineered: dominant image/subject → monumental title → tracked label → light body. The technical page even maps it ("EYE FOCUS POINT" → "MASK AREA-CONTRAST").

**Why it works.** Single dominant focal point per frame means zero ambiguity about where to look.

**Web translation.** One `<h1>`/hero per page; one dominant media element per section. Use size, not color, as the primary hierarchy driver (color is reserved for the gold accent). Apply scroll-driven focus: as a section enters, its title and subject lead, supporting text reveals after.

---

## 12. Image treatment

**What it is.** Three consistent treatments: **(1) dramatic cinematic color** (gold rim-light on black, V/hero/Fuji), **(2) high-contrast B&W with a single neon accent** (Songbird violet, Lara violet ring), **(3) motion/glitch** (red duplication trails, chromatic offsets, CRT distortion on Turn Me Off). Heavy vignettes, low-key lighting, realistic product mockups.

**Why it works.** Constraint. Limiting each piece to one lighting/color logic makes a varied body of work feel authored by one hand.

**Web translation.** Standardize image handling: serve `AVIF/WebP`, `loading="lazy"`, `object-fit: cover`, consistent aspect-ratio boxes (16:9 covers, 4:5 portraits, 1:1 gallery thumbs). Recreate treatments with CSS where possible (vignette via radial gradient overlay, neon ring via blurred box-shadow/pseudo-element, glitch via layered chromatic offset on hover) rather than baking effects into every export — keeps assets light and swappable.

---

## 13. Card styles

**What it is.** The portfolio has no literal UI cards, but the **framed poster mockups** and the **"01/02/03" gallery tiles** are the de-facto card pattern: a media surface on black, a small index/label, minimal chrome.

**Why it works.** The "card" is almost invisible — the image *is* the card. No heavy borders, no shadows competing with the artwork.

**Web translation.** Cards = near-frameless. Black/transparent background, the image fills the card, metadata (`index`, `title`, `year`) sits below or overlays at low opacity. On hover: subtle scale (`1.02`), a gold hairline appears, accent label lights up. Avoid material-design elevation/drop-shadows — they fight the cinematic flatness.

---

## 14. Section styles

**What it is.** Sections are **full-viewport, black-bg, one idea each**, separated by space rather than dividers. The `PROJECT / line / YEAR` caption acts as a section marker.

**Why it works.** Full-bleed black sections create a slideshow/exhibition cadence — the site feels like walking through a gallery.

**Web translation.** Sections default to `min-height: 100vh` for covers, `auto` for content. Separate with space and an optional thin gold hairline rule, never with boxed backgrounds. Use scroll-snap on the case-study cover sequence for the exhibition feel (with a reduced-motion fallback to normal scroll).

---

## 15. Animation principles

**What it is.** The static portfolio implies motion: glitch trails (page 17), motion duplication, "future" sci-fi energy, splash dynamism (Fuji).

**Why it works.** The aesthetic is already kinetic and cinematic — motion is on-brand, not decoration.

**Web translation.** Cinematic, weighty, restrained:
- **Reveal:** clip-path/mask wipes and slow opacity+translate (600–900ms, `cubic-bezier(.16,1,.3,1)`), staggered.
- **Display type:** slight letter-by-letter or mask reveal on covers.
- **Hover micro-glitch:** brief chromatic offset on case tiles (≤200ms).
- **Parallax:** subtle depth between subject and background on hero (max ±20px).
- **Page transitions:** black wipe between case studies (echoes section cadence).
Hard rule: everything must respect `prefers-reduced-motion: reduce` (disable glitch/parallax, keep simple fades). Motion should feel expensive and slow, never bouncy.

---

## 16. Interaction patterns

**What it is.** Implied by the HUD/technical layer: this is a brand that would expose process and parameters.

**Web translation.**
- **Cursor:** optional custom reticle/focus-point cursor echoing "EYE FOCUS POINT" (with normal-cursor fallback).
- **Case study:** cover → scroll reveals mockups → optional "Process" toggle revealing the annotated breakdown (page-16-style overlay).
- **Galleries:** click to open a cinematic lightbox; keyboard arrows; index counter ("01/03").
- **Nav:** minimal, fixed, gold-on-black; collapses to a full-screen overlay menu on mobile.
- **Feedback:** gold focus ring on all interactive elements; hover states use accent color + hairline, not color fills.

---

## 17. Mobile adaptation principles

**What it is.** Source is 16:9 desktop/cinema-oriented; portraits (Songbird, gallery 14/15) are the only natively vertical assets.

**Why it works (and where it breaks).** Wide off-screen-bleeding type and 16:9 covers do not survive a 390px viewport without rework.

**Web translation.**
- Reduce display type bleed on mobile (clip less, scale down via `clamp`).
- Re-crop 16:9 covers to vertical/4:5 focal crops using `object-position` so the subject stays framed — don't letterbox.
- Galleries collapse 3→1 column; preserve the index labels.
- Move "text-left / image-right" splits to stacked (image then text).
- Touch targets ≥44px; replace hover-only glitch/reveals with on-scroll/tap equivalents.
- Keep generous black space — do not compress to mimic desktop density.

---

## 18. Accessibility considerations

**What it is.** The aesthetic (low-key, gold-on-black, light/thin flavor copy, glitch effects) carries real accessibility risk if shipped as-is.

**Web translation — non-negotiables:**
- **Contrast:** body text must hit WCAG AA (4.5:1). Gold `#E9A124` on `#060606` passes for large text; thin light-gray flavor copy on black often fails — bump weight/size or lighten. Test every text/bg pair.
- **Motion:** full `prefers-reduced-motion` support; glitch/flicker must be disable-able (flicker is a seizure risk — avoid rapid >3Hz flashing entirely).
- **Semantics:** real heading order, `alt` text on every render/poster (describe the artwork meaningfully, not "image"), focus-visible states in gold.
- **Type:** don't go below 16px body; avoid ultra-thin weights for paragraphs; respect letter-spacing limits for legibility.
- **Color independence:** never use accent color alone to convey state (pair with text/icon/underline).
- **Lightbox/menu:** focus trapping, `Esc` to close, ARIA roles.

---

## 19. Token summary (copy-ready)
```css
:root{
  /* color — brand */
  --black-900:#060606; --black-800:#0C0B0A;
  --gold-500:#E9A124; --gold-600:#C8851A; --gold-300:#F3C36B;
  /* color — neutral */
  --white:#FAFAF8; --silver-400:#C9CDD2;
  --gray-500:#8A8A8A; --gray-700:#3A3A3A;
  --line:rgba(233,161,36,.18);
  /* color — project accents (swap per case study) */
  --project-accent:#E9A124;       /* default gold */
  /* type */
  --fs-display:clamp(3.5rem,12vw,11rem);
  --fs-h1:clamp(2.5rem,6vw,5rem);
  --fs-h2:clamp(1.75rem,3.5vw,2.75rem);
  --fs-body:clamp(1rem,1.1vw,1.125rem);
  --fs-label:.75rem; --tracking-label:.24em;
  /* space (8px base) */
  --space-1:4px;--space-2:8px;--space-3:16px;--space-4:24px;
  --space-5:40px;--space-6:64px;--space-7:96px;--space-8:160px;
  /* motion */
  --ease-cinematic:cubic-bezier(.16,1,.3,1);
  --dur-reveal:760ms;
}
```
