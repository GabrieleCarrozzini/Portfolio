# CREATIVE AUDIT
## Gabriele Carrozzini Portfolio vs. Jago.art Benchmark
### Date: June 2026 | Status: Pre-launch, unshipped

---

## VERDICT UPFRONT

The portfolio has a technically excellent foundation — premium design system, clean architecture, proper motion design, strong typographic identity. None of it matters right now.

**The single most damaging problem: there are zero real images on this website.**

Every project is rendered as a CSS drawing. A visitor lands, scrolls through six case studies, and sees no actual work. They are looking at coded simulations of a portfolio, not a portfolio. The design system is sophisticated window dressing around an empty house. This alone prevents any serious comparison with Jago.art, whose entire power comes from the photography of the work.

Fix the images first. Everything else is secondary.

---

## SECTION 1 — THE CORE FAILURE: NO REAL IMAGES

### What exists
The `ProjectVisual` component renders all five projects as pure CSS artwork — circuit grids, gradient blobs, SVG-approximated silhouettes, glitch text overlays. These render instantly, require no HTTP requests, and are technically elegant.

### Why this is a portfolio-killing mistake

1. **You have real work.** The `immagini risorse` folder contains 33 files across six projects — cinematic B&W photography, fully designed posters, commercial product compositions, book cover mockups. None of this is on the website.

2. **CSS art proves the wrong skill.** A visitor trying to evaluate you as a 3D character artist and graphic designer sees CSS code. The actual skill — composition, lighting, typography on real assets, poster design — is invisible.

3. **The design system frames nothing.** Clash Display, gold tokens, scroll reveals, cinematic easing — all of it exists to present work. Without work, it presents itself. That reads as compensation.

4. **Jago comparison becomes impossible.** Jago's site is transparent infrastructure for stone and bronze. Every design decision serves the photography. This portfolio's design decisions serve themselves because there is nothing else to serve.

5. **The GalleryStrip is empty.** The horizontal scroll strip on the homepage — the most viscerally engaging section — pulls from project gallery data and renders CSS thumbnails. It should be the most image-dense, kinetic moment on the site. Currently it is a scrollable row of colored rectangles.

### What needs to happen
Replace every `ProjectVisual` instance with real images. This is not optional polish — it is the difference between a portfolio and a prototype.

---

## SECTION 2 — COMPARISON WITH JAGO.ART

### How Jago achieves premium status (and why this site does not yet match it)

#### 2.1 The work IS the design
Jago's entire visual system is built to disappear. Dark canvas, neutral type, institutional labels — all of it steps back so the marble can speak. The photography (cream, grey, off-white sculptural forms) provides every visual temperature, every focal point, every moment of warmth. The UI is transparent infrastructure.

**This portfolio:** The visual system does not yet have anything to step back for. It is the foreground by default. The gold accents, the glitch hover effects, the circuit grid backgrounds, the HUD overlays — all of these are forced to carry visual weight that should belong to the work. When real images arrive, many decorative elements will need to be quieted.

#### 2.2 Documentation depth
Jago: 12–25 professional photographs per work. Three content layers per piece: finished work → making-of process → exhibition history.

**This portfolio:** 3 CSS gallery items per case study. Zero process photography. No contextual layer showing the work in use (beyond one Fuji mockup and one Lara mockup, both unused).

The depth gap is roughly 10:1. This is not a detail problem. This is the reason a visitor to Jago's site spends 4–6 minutes on a single artwork page. This portfolio has no mechanism to hold attention past the hero section.

#### 2.3 Visual proof of process
Jago shows the stone being carved. The half-finished block. The tools. The studio. This transforms each artwork from a product into a story — and it answers the question every potential client asks: *how does this person actually work?*

**This portfolio:** The `ProcessBreakdown` component has thoughtful labels (EYE FOCUS POINT, MASK AREA-CONTRAST, etc.) but no visual evidence. Words describing a process without images of that process is a claim without proof.

#### 2.4 Typography as institution vs. typography as decoration
Jago uses H6-level all-caps labels (DIMENSIONS · MATERIALS · YEAR · PHOTOGRAPHER) that directly reference museum wall-placard design. Every type decision reinforces the institutional register.

**This portfolio:** The Caption component and HUD labels are visually sophisticated — `PROJECT / DIVIDER / YEAR` in JetBrains Mono is correct and distinctive. But it reads as aesthetic choice rather than functional wayfinding. The gap is subtle: Jago's type solves a problem (how to present archival data), this portfolio's type creates an atmosphere.

#### 2.5 Restraint vs. complexity
Jago shows: dark bg, photography, minimal type. Total decorative element count per page: approximately 0.

**This portfolio:** Circuit grid backgrounds, noise grain textures, corner bracket marks, barcode decorations, code strings, HUD overlays, glitch hover animations, radial glow gradients, scan lines. This is not wrong — the aesthetic register (tech/cyberpunk/editorial) calls for it. But every decorative element must justify its presence once real images arrive. Several will compete with the photography rather than frame it.

#### 2.6 Per-project identity
Jago: The work itself defines the visual temperature of each page. Stone = cool grey. Bronze = warm amber. The CSS accent variable system isn't needed because the image carries the color.

**This portfolio:** Per-project accent system (gold/violet/red/orange) is correctly implemented. With real images this will work well — the images already carry these colors. The masked Cyberpunk character shoots are already amber/red. The Lara shots are already B&W/violet. The system is right. The images are missing.

#### 2.7 Scroll narrative
Jago's artwork pages have a three-act arc: encounter the finished work → understand the process → trace the institutional history. Scrolling is discovery.

**This portfolio:** Good scroll reveals (fade-in-up with cinematic easing), but no narrative arc in the scroll. Each section reveals content that exists independently rather than building on what came before. The case study structure (cover → context → showcase → process → gallery → next) is the right skeleton. It needs images to have flesh.

---

## SECTION 3 — DESIGN SYSTEM AUDIT

### What works

**Color system:** The black-900/gold-500 primary identity is strong and specific. The per-project accent variables are elegant and correctly implemented. Gold as signature accent is premium without being cold (unlike pure white or cyan).

**Typography:** Clash Display + Inter + JetBrains Mono is an excellent three-family stack. Fluid sizing with clamp() is technically correct. The display size (`clamp(3.5rem, 12vw, 11rem)`) creates genuine scale impact at large viewports.

**Motion tokens:** `cubic-bezier(.16,1,.3,1)` at 760ms is cinematic and unhurried. The 80ms stagger on ScrollReveal creates rhythm. This is well above average portfolio motion work.

**Spacing system:** 8px base scale applied consistently. Section padding at space-7/space-8 gives the layout air. Correct.

**Accessibility:** WCAG 2.2 AA compliant throughout — contrast ratios, focus states, keyboard navigation, reduced-motion support. This is rare for a portfolio this early in development. Keep it.

### What needs critique

**The hero section is abstract when it should be concrete.**
The animated V-silhouette CSS character in the homepage hero is technically impressive. But the hero of a visual portfolio is where the viewer decides in 3 seconds whether to stay. An abstract geometric character drawn in CSS does not establish credibility as a designer who works with real imagery. The hero should be the strongest single image in the portfolio. It currently shows no image at all.

**The GalleryStrip is the most wasted opportunity on the site.**
Horizontal scroll galleries are kinetically engaging precisely because of visual density — image after image, each a slightly different mood, building a sense of the body of work. CSS placeholders in a horizontal scroll strip convey nothing. This section should be the most compelling 5 seconds on the page.

**Case study covers are text-dominant.**
`CaseCover` renders a full-bleed area with HUD decorations and typography. It is well-designed. But without a photographic background, it is a well-designed empty frame. A case study cover should open with the strongest image from the project — the image that makes the viewer lean forward.

**Three gallery items per project is insufficient.**
Even for a student portfolio, 3 images per case study is thin. For a portfolio positioning itself as premium creative work, the minimum viable case study needs 6–8 images showing the full visual arc: source material → process → variants → final → context.

**The Cyberpunk projects are fragmented.**
`session-july14-blue-hair`, `session-july15-somi`, `session-aug05-masked`, `session-aug16-somi-dark` — four separate sessions of Cyberpunk-aesthetic character work exist as four loose folders. On the website, only one project slot (`v`) represents this whole body of work. The sessions need to either be consolidated into one rich case study or separated into distinct, titled projects. Currently the structure implies much more than the website shows.

**Process labels without visual evidence are claims without proof.**
The V project has process labels like "EYE FOCUS POINT" and "MASK AREA-CONTRAST". These are evocative and specific. They are also floating in air — there is no image showing what they describe. Process labels need accompanying images or they read as fabricated.

**The `Copertina.pdf` (Turn Me Off) cannot be displayed as-is.**
The PDF is the design source file. The website can only use raster images. Before the Turn Me Off case study can show the actual design, the PDF needs to be exported to PNG/JPG at high resolution. Currently only the book mockup image is available.

**Social links are hardcoded to `#`.**
In Nav, Footer, and Contact: ArtStation, Behance, Instagram, LinkedIn — all point nowhere. This is a launch blocker but also a credibility issue: a portfolio without real social links signals incompleteness to anyone who checks.

**The contact form does not send.**
The submit handler is a mock with a 2-second fake delay. This is a critical blocker for any inquiry the site generates.

---

## SECTION 4 — CONTENT QUALITY AUDIT

### Project naming and positioning

**V** — Clean, typographically interesting as a single letter. But without context (what is V? who is V?) the name creates intrigue only if the image supports it. Currently it doesn't.

**Fuji** — Strong. The commercial poster project is the most straightforwardly legible project in the portfolio — product, brand, execution. The name is the brand.

**Songbird** — The name exists in the data but there are no `session-july14-blue-hair` images on the site. The Songbird case study (`/work/songbird`) has a CSS-drawn violet neon portrait. The actual photoshoot images that presumably inspired or relate to Songbird are in the immagini folder but unused. The name is floating without images.

**Lara** — Correctly labeled "Personal / Fan Study". The naming is honest. The Tomb Raider poster work is visually strong and the most fully documented project in the immagini folder (8 files covering the full design arc).

**Turn Me Off** — Strong title. "TURN ME OFF" as a book cover title is bold and editorial. Currently only the mockup image is available; the flat design needs to be exported from the PDF.

### About page
The bio is well-written but abstract. It reads as a stylistic exercise ("Form over literal meaning, emotion over resolution") rather than a concrete professional statement. Jago's About opens with a humanizing quote that reveals character before revealing credentials. This About reveals aesthetic philosophy before establishing who the person is. The sequence should be: who → what → how → why. Currently it reads: why → what → how, with who as a subtext.

### Services page
The deliverables listed (TIFF/EXR renders, turntable/pose sets, wireframe breakdowns) are unverified against the actual portfolio output. The portfolio shows poster design and character photography — not 3D renders, turntables, or EXR files. This needs reconciliation before launch.

### Language consistency
Process copy and some section text mixes Italian and English. This is not inherently wrong — it can read as a distinctive voice. But it needs to be intentional. "Brevità, creatività e composizione" in the Fuji process section reads as left in from an Italian draft rather than a deliberate bilingual choice.

---

## SECTION 5 — MISSING ELEMENTS THAT JAGO HAS

In priority order:

1. **Real images in every project slot** (fatal gap)
2. **Process/making-of imagery** (Jago's most differentiating feature)
3. **In-use/in-context photography** (beyond mockups — photographic proof of work existing in the world)
4. **Per-project photographer/collaborator credit** (signals professional practice)
5. **Exhibition/publication history** per project (even "exhibited at [event], [year]" adds institutional weight)
6. **Editorial layer** — a minimal "notes" or "writing" section where the designer's voice exists separate from project descriptions
7. **Video** — even a 15-second ambient loop of the Sandevistan red glitch effect would create a dimension unavailable to competitors
8. **The `.art` domain signal** — `gabrielecarrozzini.com` is correct but generic; consider whether a more distinctive domain choice would reinforce the brand

---

## SECTION 6 — WHAT IS GENUINELY PREMIUM ABOUT THIS SITE

To be fair: several elements already match or exceed the Jago benchmark.

- **Motion design** is at Awwwards entry level. The cinematic easing, the scroll reveals, the stagger timing — these are not standard portfolio kit.
- **The design system coherence** is exceptional for a single-author portfolio. Token consistency, per-project accent swapping, CSS utility system — this is production-quality code.
- **Accessibility** at WCAG 2.2 AA is rare at this level and signals professional seriousness.
- **The HUD/tech aesthetic layer** — when images arrive, the circuit overlays, corner marks, and scan-line effects will create a design language genuinely distinctive in the creative portfolio space.
- **Typography** — Clash Display at display scale with JetBrains Mono labels is correct and premium. Few portfolios use a display typeface with this kind of authority.
- **Per-project color identity** — the CSS accent variable system, once backed by real images, will create clearly differentiated project identities within a unified brand.

The site has the bones of something outstanding. It needs the flesh.

---

## SECTION 7 — PRIORITY REPAIR ORDER

### Critical (blocks any meaningful assessment or use)
1. Export all project images to `/public/projects/[slug]/` and wire them into the site
2. Replace `ProjectVisual` CSS art with real images in CaseCover, GalleryRow, GalleryStrip, FeaturedWork
3. Export `Copertina.pdf` to PNG at full resolution for Turn Me Off case study
4. Fix contact form (wire to email service)
5. Update all social `href="#"` to real profile URLs

### High (blocks premium positioning)
6. Expand gallery from 3 items to 6–8 per case study using available images
7. Add process imagery to case studies (even 2 process images per project changes the depth completely)
8. Replace homepage hero CSS silhouette with strongest portfolio image
9. Rewrite Hero and About to lead with identity before philosophy

### Medium (needed before public sharing)
10. Reconcile services deliverables against actual output
11. Export/generate OG image (1200×630)
12. Decide on language strategy (English-primary with Italian flourishes = correct; mixed without intent = incorrect)
13. Consolidate or clearly separate the four Cyberpunk sessions on the work index

### Low (polish)
14. Add photographer/collaborator credits to case studies
15. Add project-level institutional context (where shown, when created, what it was for)
16. Consider video integration (even ambient loops)
17. Analytics setup
18. Favicon (current is Next.js default)

---

*End of Creative Audit*
