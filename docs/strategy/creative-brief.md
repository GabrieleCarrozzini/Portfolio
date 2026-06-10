# WEBSITE_CREATIVE_BRIEF.md
### Creative brief — premium portfolio website for Gabriele Carrozzini
*No code. This is the brief a studio or developer would build from.*

---

## 1. Project summary
A premium, dark-mode-first portfolio website that translates Gabriele Carrozzini's cinematic 3D + graphic-design identity ("VISUAL POWER") into a fast, accessible, conversion-oriented site for recruiters and clients. The site must preserve the original portfolio's identity — black + gold, monumental typography, cinematic imagery, HUD/technical accents — while dramatically improving usability, navigation, and interactivity.

---

## 2. Objectives
1. **Convert** — get recruiters to "View Work" and clients to "Contact" within 3 clicks.
2. **Prove craft** — present the work as gallery-grade, with depth (case studies + process).
3. **Establish positioning** — communicate the rare 3D + design hybrid clearly and immediately.
4. **Perform** — fast, SEO-friendly, accessible, responsive across devices.

**Success metrics:** time-to-first-meaningful-paint < 2.5s on 4G; bounce reduced via clear hero CTA; ≥3% contact conversion; Lighthouse ≥ 90 (Performance, Accessibility, SEO).

---

## 3. Audience
- **Primary — recruiters / studio art directors:** scan fast, want proof + skills + tools, then a way to reach out. Optimize Work and Skills for skimming.
- **Secondary — commercial clients:** want to know what they can buy and how to brief it. Optimize Services + Contact.

---

## 4. Brand identity to preserve
Pull all tokens from `DESIGN_SYSTEM.md`. Non-negotiable carry-overs:
- **Black + gold** as the fixed brand layer; violet/red/orange as per-project accents.
- **Monumental display typography** that bleeds off-frame.
- **Cinematic image treatment** (low-key lighting, vignettes, B&W + single neon accent, glitch/motion).
- **HUD / technical layer** (mono labels, code strings, optional grid/focus-point motifs).
- The **`PROJECT / divider / YEAR`** caption motif as a recurring section marker.
- Manifesto voice: "Creativity begins where meaning ends…"

---

## 5. Aesthetic direction (2026)
- **Dark-mode first**, near-black canvas, single saturated accent — the current premium/editorial direction, and already the brand's native mode.
- **Editorial-gallery feel**, not template-portfolio: full-bleed sections, exhibition cadence, generous negative space.
- **Restrained, weighty motion** — slow cinematic reveals, mask/clip wipes, subtle parallax, micro-glitch on hover. Expensive, never bouncy.
- **Tactile detail** — gold hairlines, mono metadata, grain/vignette overlays, optional custom focus-point cursor.
- **Anti-pattern to avoid:** gamer-RGB neon overload, heavy drop-shadow material cards, dense feed-like grids, stocky generic-portfolio layouts.

---

## 6. Information architecture
Per `SITE_MAP.md`: Home · Work (index + case-study template) · Services · About (incl. Skills) · Contact. Persistent minimal nav with a fixed gold contact CTA. Both audience paths reach Contact in ≤3 clicks.

---

## 7. Visual storytelling requirements
- Home hero = single dominant character render + "VISUAL POWER" + sharp role line; one idea, full impact.
- Each case study follows **cover → context → showcase → process → gallery → next**, reusing the caption motif.
- Preserve each project's original mood via a per-page `--project-accent` (V/Fuji gold, Songbird/Lara violet, Turn Me Off red, Fuji warm-orange).
- Surface the **process/breakdown** (page-16 style) as a real differentiator — it proves engineering, not just taste.
- **Honesty labels:** Lara and Turn Me Off shown as personal/fan/concept studies; Fuji/V/Songbird as original work. Protects credibility and reduces IP risk.

---

## 8. Motion design
- **Reveals:** opacity + translate + clip/mask, 600–900ms, `cubic-bezier(.16,1,.3,1)`, staggered.
- **Display type:** mask/letter reveal on covers.
- **Hover:** brief chromatic micro-glitch on case tiles (≤200ms); scale 1.02 + gold hairline.
- **Parallax:** subtle subject/background depth on hero (±20px max).
- **Page transitions:** black wipe between case studies (echoes section cadence).
- **Hard rule:** full `prefers-reduced-motion` support; no flashing > 3Hz (seizure safety); motion must never block content or interaction.

---

## 9. Responsive requirements
- **Dark-mode-first, mobile-up.** Breakpoints ≈ 390 / 768 / 1024 / 1440.
- Re-crop 16:9 covers to vertical focal crops on mobile via `object-position` (no letterboxing).
- Display type scales via `clamp()`; reduce off-screen bleed on small screens.
- Galleries 3→2→1 columns, index labels preserved.
- Split layouts stack (image then text). Touch targets ≥44px; hover effects get scroll/tap equivalents.
- Preserve black space on mobile — do not compress to mimic desktop density.

---

## 10. Performance
- Target LCP < 2.5s (4G), CLS < 0.1, INP < 200ms; Lighthouse Performance ≥ 90.
- Images: `AVIF/WebP`, responsive `srcset`, `loading="lazy"`, fixed aspect-ratio boxes to prevent layout shift; the portfolio is image-heavy, so this is the #1 perf lever.
- Fonts: max 3 families, subset, `font-display: swap`, preload the hero display face only.
- Defer non-critical JS; animate with CSS/`transform`/`opacity` (GPU-friendly); avoid heavy WebGL unless justified and lazy-loaded.
- Static/SSG or edge-rendered; CDN; cache aggressively.

---

## 11. SEO
- Semantic HTML, single `<h1>` per page, logical heading order.
- Per-page `<title>` + meta description; Open Graph + Twitter cards using each case study's cover.
- Descriptive, keyword-aware `alt` text on every render/poster (e.g. "3D cyberpunk character poster — V, 2024").
- Schema.org `Person` + `CreativeWork` structured data.
- Clean slugs (`/work/v`), sitemap.xml, robots.txt, canonical tags.
- If bilingual: proper `hreflang` and separate localized routes (don't mix languages within a page).
- Replace generic "Creative Artist" with searchable role terms in titles/meta ("3D Character Artist", "Art Director", "Key Art Designer").

---

## 12. Accessibility (WCAG 2.2 AA)
- All text/bg pairs meet 4.5:1 (large text 3:1) — re-test thin light-gray flavor copy on black; bump weight/size where it fails.
- Visible gold focus states on every interactive element; full keyboard operability; focus trapping in lightbox/menu, `Esc` to close.
- `prefers-reduced-motion` honored everywhere; no rapid flashing.
- Meaningful `alt` text; never convey state by color alone.
- Body ≥16px; avoid ultra-thin weights for paragraphs.

---

## 13. Tech direction (suggested, not prescriptive)
- **Stack:** SSG/edge framework (e.g. Astro or Next.js) for performance + SEO; headless CMS or MDX so Gabriele can add case studies without a developer.
- **Styling:** design tokens from `DESIGN_SYSTEM.md` as CSS custom properties; utility or component CSS.
- **Motion:** a lightweight scroll/animation lib (e.g. GSAP/Framer Motion or native View Transitions + IntersectionObserver), lazy-loaded.
- **Media:** automated image pipeline (AVIF/WebP, responsive sizes).
- **Forms:** spam-protected contact form + serverless email handler.

---

## 14. Content dependencies (blocking — from CONTENT_EXTRACTION.md)
The site **cannot launch** without these; gather before/while building:
1. **Contact details + socials/portfolio links** — blocking.
2. **Software/tools list** — blocking for recruiters.
3. Real **bio** (location, experience, background).
4. Fix **Francys/Luca** naming error.
5. **IP/status labels** on Lara & Turn Me Off.
6. Short **descriptions** for V and Songbird.
7. **Services engagement model**.
8. Any **achievements / clients / testimonials**.
9. **Confirm Fuji year**; **language decision** (IT/EN/bilingual).

---

## 15. Deliverables & phasing (suggested)
1. **Phase 0 — Content & decisions:** close the §14 gaps; lock language + role label.
2. **Phase 1 — Design:** apply tokens, build the reusable case-study + caption components, motion spec, responsive crops.
3. **Phase 2 — Build:** SSG + CMS, image pipeline, forms, SEO/structured data.
4. **Phase 3 — QA:** accessibility audit (contrast, keyboard, reduced-motion), Lighthouse ≥ 90 across the board, cross-device.
5. **Phase 4 — Launch:** analytics, sitemap submission, OG previews verified.

---

## 16. Definition of done
- Both audience paths reach Contact in ≤3 clicks.
- Lighthouse ≥ 90 (Performance, Accessibility, SEO).
- WCAG 2.2 AA verified; reduced-motion verified.
- Identity (black+gold, monumental type, cinematic imagery, HUD accents) recognizably preserved vs the source PDF.
- All §14 content gaps closed — no placeholder/lorem, no fabricated contact info, no unlabeled trademarked work.
