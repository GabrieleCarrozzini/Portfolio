# IMAGE USAGE PLAN
## Per-project image selection, sequence, storytelling, and animation specification
### Gabriele Carrozzini | June 2026

---

## HOW TO READ THIS DOCUMENT

Each project section defines:
- **Hero image** — the single image that opens the case study cover and represents the project everywhere on the site (cards, GalleryStrip, social previews)
- **Featured images** — 3 images used in the FeaturedWork section and project card on the work index
- **Gallery sequence** — every image in the case study, in order, with role annotation
- **Visual storytelling arc** — the narrative logic of the sequence
- **Transition ideas** — how to move between images within the project
- **Animation ideas** — per-image or per-section motion

All file paths are relative to `immagini risorse/`.

---

## NOTE ON MISSING ASSETS

Before wiring images into the site, two preparation steps are required:

1. **Export `turn-me-off/Copertina.pdf` to PNG.** Use Photoshop or Illustrator: export at 2× resolution (minimum 2400px on the long edge), flatten to RGB, save as `turn-me-off-design.png`. This is the only way to display the flat book cover design in the browser.

2. **Standardize file paths in `/public/`.**  
   Suggested convention: `/public/projects/[project-slug]/[role]-[index].jpg`  
   Example: `/public/projects/lara/hero.jpg`, `/public/projects/lara/gallery-01.jpg`

3. **Prepare `TombRaider219.jpg`.** This image is rotated 90°. Before use, rotate it correctly (counter-clockwise 90°) in any image editor and re-export.

---

---

# PROJECT 1 — LARA CROFT / TOMB RAIDER
**Slug:** `lara` | **Accent:** `--violet-500` | **Status:** Personal / Fan Study

## Hero Image
**File:** `tomb-raider/shots/TombRaider.jpg`

**Why:** Full-body portrait, maximum compositional authority. The glowing halo above her head creates a near-perfect compositional anchor — circle centered, figure below, dark environment receding. Arms crossed posture signals confidence and status. The image is sharp, the tonal range is excellent, and it reads immediately at any scale from thumbnail to full-bleed. No other image in this project approaches this level of compositional control.

**Usage:** Case study cover full-bleed background, FeaturedWork card, GalleryStrip entry, OG image for the `/work/lara` page.

---

## Featured Images (3)

1. **`tomb-raider/final/1st Tomb raider.png`**  
   The final designed poster. Shows the design output — typography, layout, branding. This is the proof of skill. On the work index card, this is more informative than a raw game screenshot because it shows what was *made*, not just what was photographed.

2. **`tomb-raider/final/Risorsa 1.png`**  
   The wall mockup. Shows the poster in physical context (ribbed black wall, framed). Answers the question: "does this look like real work?" immediately. The dark-on-dark integration (black frame on dark ribbed wall) is sophisticated and unusual.

3. **`tomb-raider/shots/OriginalT.RAIDER.png`**  
   The cinematic wide/landscape crop. Different aspect ratio from the hero, different framing — she is smaller in frame, the glowing halo is more prominent, the environment more visible. Provides compositional variety.

---

## Gallery Sequence (8 images)

| # | File | Role | Rationale |
|---|------|------|-----------|
| 1 | `tomb-raider/final/1st Tomb raider.png` | **OUTPUT REVEAL** — designed poster | Open with the deliverable. The viewer immediately knows: this is a poster design project. |
| 2 | `tomb-raider/final/Risorsa 1.png` | **CONTEXT** — wall mockup | Show it living in the world. One image is flat design, the next is reality. |
| 3 | `tomb-raider/shots/TombRaider.jpg` | **SOURCE HERO** — full-body portrait | Walk backward: this is the source material that became the poster. |
| 4 | `tomb-raider/shots/OriginalT.RAIDER.png` | **SOURCE WIDE** — cinematic crop | Same scene, wider field. Shows how the source footage was explored. |
| 5 | `tomb-raider/shots/Immagine WhatsApp 2025-04-23 ore 21.40.03_e3db22ec.jpg` | **SOURCE CLOSE** — bust crop | Tightest frame on the face. Contrasts with the full-body shots above. |
| 6 | `tomb-raider/assets/lara sfumato nero.png` | **PROCESS** — isolated cutout | Shows the extraction/masking step. The silhouette floated from the scene. |
| 7 | `tomb-raider/shots/LaraVErticale.png` | **VARIANT** — darker vertical | Darker, moodier version of the hero shot. Shows a creative direction that was explored. |
| 8 | `tomb-raider/shots/TombRaider219.jpg` | **ALTERNATE ANGLE** — portrait crop | ⚠️ Must be rotated before use. Once corrected: shows the character from a different angle (close-up bust, more intimate). |

**Note:** `LaraVErticale.png` and `TombRaider219.jpg` are weaker images — use them only if they add narrative value. If the gallery feels crowded, cut these two and keep the sequence at 6 images.

---

## Visual Storytelling Arc
**Output first, source second, process third.**
The viewer sees the poster → sees it in context → then discovers it was built from real game photography → then sees the individual steps (extraction, masking). The journey ends where the design began.

This reversal (showing the end before the beginning) is more engaging than the chronological sequence because it answers "what is this project?" before "how was it made?" — which is the order a client actually cares about.

---

## Transition Ideas
- **Gallery 1 → 2:** Cross-dissolve on the poster image, holding the composition (both are portrait-oriented, roughly the same figure position)
- **Gallery 2 → 3:** Hard cut. The mockup is warm (dark room) and the source photography is cooler (halo). The tonal shift earns the cut.
- **Gallery 3 → 6 (cutout):** As the isolated cutout enters the viewport, consider a brief clip-path wipe from left to right — as if the background is being "erased" revealing the isolated figure. This directly communicates the masking process.

---

## Animation Ideas
- **Hero CaseCover:** The hero image enters with a very slow vertical pan — image starts slightly cropped to show just the halo, then slowly descends to reveal the full figure (Ken Burns style, top → bottom, 10 seconds, ease-out). This creates the sensation of the character walking into frame.
- **Gallery 1 (designed poster):** Clip-path reveal from bottom to top — the poster "prints" onto the screen. 900ms, `--ease-cinematic`.
- **Gallery 6 (cutout):** Float animation on loop — the isolated Lara silhouette slowly rotates ±2° and translates ±8px vertically on a 6-second sine loop. She is alive, barely. Pause on hover.
- **Process label matching:** The "EYE FOCUS POINT" process label should be visually anchored to a crop of the face from `TombRaider.jpg` — a small 1:1 crop beside the label.

---

---

# PROJECT 2 — V / CYBERPUNK MASKED (Sandevistan)
**Slug:** `v` | **Accent:** `--gold-500` | **Status:** Original

## Hero Image
**File:** `cyberpunk/session-aug05-masked/red jpeg sandevistan.jpg`

**Why:** This is the most visually violent image in the entire portfolio. The red glitch, the motion-blur ghost, the raised-hands pose, the black mask against scarlet — it has maximum arrest value. It will stop the scroll. The red-on-black palette is perfectly aligned with the site's dark canvas. No other image in any project generates this level of immediate visual impact.

**Usage:** Case study cover background, FeaturedWork card, GalleryStrip primary entry, OG image for `/work/v`.

---

## Featured Images (3)

1. **`cyberpunk/session-aug05-masked/Cyberpunk white card.png`**  
   The final designed card/poster. Circuit-frame UI, Japanese 未来 text, amber color system. The design output — proof of what was created, not just photographed.

2. **`cyberpunk/session-aug05-masked/mockup poster yellow.png`**  
   The framed poster leaning against a draped wall. Physical proof. The amber tones are consistent with the site's gold accent. This is the most "gallery-worthy" image in the project.

3. **`cyberpunk/session-aug05-masked/red jpeg sandevistan.jpg`**  
   Same as hero — included in featured set as the primary photography statement.

---

## Gallery Sequence (10 images)

| # | File | Role | Rationale |
|---|------|------|-----------|
| 1 | `cyberpunk/session-aug05-masked/Cyberpunk white card.png` | **OUTPUT REVEAL** — designed card | The designed piece first. Shows the full composition: UI frame, typography, imagery. |
| 2 | `cyberpunk/session-aug05-masked/mockup poster yellow.png` | **CONTEXT** — framed physical poster | Immediately: the design exists as a physical object in a real space. |
| 3 | `cyberpunk/session-aug05-masked/red jpeg sandevistan.jpg` | **SOURCE DRAMA** — red glitch full body | The most powerful raw photograph. This is the source that fed the design. |
| 4 | `cyberpunk/session-aug05-masked/photomode_05082025_211208.png` | **SOURCE PORTRAIT** — golden light | The calm before the glitch. Amber portrait, mask, circuit light patterns on skin. |
| 5 | `cyberpunk/session-aug05-masked/photomode_05082025_204035.png` | **SOURCE VARIANT** — red dramatic light | Same session, harder red lighting. Closer to the sandevistan image's mood. |
| 6 | `cyberpunk/session-aug05-masked/ng yellow png.png` | **ASSET** — gold portrait cutout | The extracted head/bust in gold. Shows how the card design was built. |
| 7 | `cyberpunk/session-aug05-masked/hero.png` | **ASSET** — gold full-body cutout | Same figure, slightly wider crop. |
| 8 | `cyberpunk/session-aug05-masked/ng red png.png` | **VARIANT** — red tint cutout | Color exploration — what the figure looked like in the red treatment. |
| 9 | `cyberpunk/session-aug05-masked/ng red png expo.png` | **VARIANT** — posterized | High-contrast two-tone treatment. Shows graphic reduction of the photography. |
| 10 | `cyberpunk/session-aug05-masked/ng red png senza sfumo.png` | **VARIANT** — clean red | Cleaner version of image 8. Can be combined/compared with image 8 as a pair. |

**Note:** Images 8–10 are variants of the same figure in the same pose. Show them as a tight comparison group (small-scale side by side), not as sequential full-width images.

---

## Visual Storytelling Arc
**Design output → physical context → raw photographic source → process of extraction and color iteration.**

The arc says: I made this designed card → here it is physical → here is the photography it came from → here is how the photography was transformed into the design elements.

The variant images (8–10) are a design process moment: showing the color exploration before arriving at the amber/gold of the final card.

---

## Transition Ideas
- **Gallery 1 → 2:** Zoom-out transition — the flat card appears to "push back" from the viewer and land in the mockup frame. Can be approximated with a scale + fade sequence.
- **Gallery 2 → 3:** Hard cut. The warm mockup photograph cuts to the violent red glitch. Maximum contrast. No dissolve — the cut earns its shock.
- **Gallery 3 → 4:** Slow cross-dissolve. Both are portrait shots of the same figure; the glitch fades to reveal the clean golden portrait beneath.
- **Images 8–10:** Displayed simultaneously as a 3-column comparison strip, not individually.

---

## Animation Ideas
- **Hero CaseCover:** Red glitch image enters with a scanline wipe — the image appears as if a CRT screen is warming up, scanlines sweeping left to right, then stabilizing. 1.2 seconds. Disorienting in the best way.
- **Gallery 3 (sandevistan):** On hover, the glitch intensifies briefly (existing `glitch-hover` effect applies perfectly here). Add a brief red chromatic aberration shift on hover (offset red channel by 4px).
- **Gallery 6–7 (cutouts):** The isolated gold figures should float over the dark background with a subtle ambient glow animation — a gold radial gradient pulsing at 0.3 opacity on a 4-second sine loop.
- **Variant comparison (8–10):** The three variants slide in as a horizontal micro-gallery within the main gallery — enter from the right, settle into position, interactive left/right navigation.

---

---

# PROJECT 3 — SONGBIRD / CYBERPUNK BLUE-HAIR + SOMI
**Slug:** `songbird` | **Accent:** `--violet-500` | **Status:** Original

## Note on project scope
This project currently has two separate photoshoot sessions (July 14: blue-hair; July 15: white-hair/SoMi) plus the SoMi Dark session (August 16). The website currently treats these as one `songbird` project. The IMAGE_USAGE_PLAN below treats all sessions as one unified case study unless the project data is restructured.

---

## Hero Image
**File:** `cyberpunk/session-july15-somi/blue sfumato BENE da esempio.png`

**Why:** The processed cutout of the white-hair SoMi character, blue-tinted on a clean white-transitioning-to-transparent background, is the most graphic and finished-feeling image in this project. It reads as a designed asset, not just a photograph — and for a project about character aesthetics, this matters. The blue color temperature is the most distinctive element, differentiating this project from the amber/gold of V.

Alternative hero: `cyberpunk/session-aug16-somi-dark/photomode_16082025_165357.png` (B&W cybernetic face) — more dramatic, darker. Use this if the project emphasizes the darker/more technical SoMi identity.

---

## Featured Images (3)

1. **`cyberpunk/session-july15-somi/blue sfumato BENE da esempio.png`** — Same as hero
2. **`cyberpunk/session-july14-blue-hair/photomode_14072025_220312.png`** — Blue-hair character, close-up, vivid
3. **`cyberpunk/session-aug16-somi-dark/photomode_16082025_165357.png`** — B&W cybernetic portrait

---

## Gallery Sequence (7 images)

| # | File | Role | Rationale |
|---|------|------|-----------|
| 1 | `session-july15-somi/blue sfumato BENE da esempio.png` | **HERO ASSET** — blue cutout | Opens with the most finished/designed element. |
| 2 | `session-aug16-somi-dark/photomode_16082025_165357.png` | **DARK PORTRAIT** — B&W cybernetic | Contrast: from processed/clean to raw/intense. Entirely different mood. |
| 3 | `session-aug16-somi-dark/photomode_16082025_175019.png` | **DARK VARIANT** — alternate angle | Second angle of the same intense B&W character. |
| 4 | `session-july15-somi/photomode_15072025_184604.png` | **PHOTOSHOOT** — arms crossed | July 15 session. Arms-crossed posture, blue rim light. Clean portrait. |
| 5 | `session-july15-somi/photomode_15072025_185403.png` | **PHOTOSHOOT** — cigarette | Strongest character moment in the July 15 session. Editorial mood. |
| 6 | `session-july14-blue-hair/photomode_14072025_220312.png` | **BLUE SESSION** — close-up | July 14. Most different image in the set — vivid saturated blue hair, close framing. |
| 7 | `session-july14-blue-hair/photomode_14072025_214719.png` | **BLUE SESSION** — hand pose | Magenta/blue, hand gesture, different energy from image 6. |

**Excluded:** `session-aug16-somi-dark/av.png` (too tight for gallery use — better as site avatar), `session-aug16-somi-dark/png SoMi.png` (very dark, similar to images 2–3), `session-july15-somi/photomode_15072025_185804.png` (weaker composition, redundant with image 4).

---

## Visual Storytelling Arc
**From processed character design → into the raw photographic sessions that built it.**

The gallery opens with the most "designed" image (the blue cutout) — positioning this as a character design project, not just a photoshoot documentation. Then it descends into the photographic sessions in reverse chronological order: the intense B&W August session, then the clinical July 15 session, then the vivid blue July 14 session.

This creates a progression from cool restraint to saturated energy — from nearly monochrome to full neon saturation.

---

## Transition Ideas
- **Images 1 → 2:** The clean white-background blue cutout dissolves into the stark black-background B&W portrait. Maximum tonal contrast. The white background of image 1 should dissolve out, not cut — so the figure seems to gain weight and darkness.
- **Images 4 → 6:** The shift from the July 15 session (black background, blue-white light) to the July 14 session (concrete wall, magenta-purple) is a location change. Use a horizontal wipe to signal "new environment."

---

## Animation Ideas
- **Hero CaseCover:** The blue-cutout figure enters from offscreen right, sliding into a compositional position against the dark canvas. No clip-path — a translate-X from +80px to 0, over 1.2 seconds, ease-out. She arrives.
- **Gallery 2 (B&W cybernetic face):** On page enter, a subtle focus-rack effect — the image starts slightly blurred (2px Gaussian) and sharpens to crisp over 600ms. The cybernetic details (seam lines, hexagonal eye implant) sharpen into clarity.
- **Gallery 6–7 (blue-hair):** The vivid blue images should pulse with a very subtle blue radial glow behind them on the dark background — an ambient halo matching the in-image color temperature. Keyframe animation, 0.08–0.15 opacity range, 3-second loop.

---

---

# PROJECT 4 — FUJI (Commercial Poster)
**Slug:** `fuji` | **Accent:** `--orange-start/end` | **Status:** Original

## Hero Image
**File:** `fuji/poster commerciale Fuji.jpg`

**Why:** The flat poster design is the project's primary deliverable and its strongest single image. The warm red-orange gradient, the monumental "FUJI" typography, the product photography of the peach — these create immediate visual impact and communicate professional commercial design competency. Clean, bold, unambiguous.

---

## Featured Images (3)

1. **`fuji/poster commerciale Fuji.jpg`** — Same as hero
2. **`fuji/mockup fuji serio dritto.png`** — Straight-on billboard. Shows the poster at outdoor commercial scale.
3. **`fuji/mockup serio fuji.png`** — Angled billboard. Adds perspective/depth.

---

## Gallery Sequence (3 images)

| # | File | Role | Rationale |
|---|------|------|-----------|
| 1 | `fuji/poster commerciale Fuji.jpg` | **OUTPUT** — flat poster design | The deliverable, full-frame. Typography, composition, product photography, pricing, gradient — everything visible. |
| 2 | `fuji/mockup fuji serio dritto.png` | **CONTEXT 1** — billboard straight | The design at outdoor scale, straight-on. Scale becomes immediately apparent. |
| 3 | `fuji/mockup serio fuji.png` | **CONTEXT 2** — billboard angled | Same billboard, 3/4 angle. Depth and physicality. |

**Note:** This project has only 3 images. This is the minimum viable gallery. If additional assets exist (alternate colorways, print-ready files, process sketches, typography lockups in isolation), add them here. For now the 3-image arc works because each image answers a different question: "what did you design?" → "does it work at scale?" → "does it look real?"

---

## Visual Storytelling Arc
**The simplest arc of any project: make it, place it.**

Fuji is the most commercially legible project in the portfolio — a viewer understands immediately what it is and why it exists. The gallery doesn't need narrative complexity. It needs confidence: show the work, show it in context, move on. The warmth and energy of the orange-red palette does the emotional work; the gallery just needs to get out of the way.

---

## Transition Ideas
- **Gallery 1 → 2:** The poster crops from flat art to billboard by zooming out — a continuous zoom from close on the flat design to the billboard in environment. Not literally (this would require video), but the scroll from image 1 to image 2 should create the sensation of "pulling back."
- **Gallery 2 → 3:** Straight cut. Both mockups are on the same dark grey background; the cut from straight-on to angled is clean and fast.

---

## Animation Ideas
- **Hero CaseCover:** The flat poster enters with a "print reveal" — horizontal scanlines sweeping top to bottom at 50ms intervals, building the image line by line. 800ms total. References commercial printing.
- **Typography detail:** The "FUJI" text in the poster is so large that at certain viewport widths, only portions of the letterforms are visible. Use this intentionally: position the image so the "F" and "I" crop at the frame edges, implying a scale too large to contain.
- **Gallery 2–3 (billboards):** On the dark background, add a very subtle warm gradient behind the billboard mockup images — a radial warm glow emanating from where the lit billboard face sits. Makes the billboard feel like it's actually emitting light.

---

---

# PROJECT 5 — TURN ME OFF (Book Cover)
**Slug:** `turn-me-off` | **Accent:** `--red-500` | **Status:** Concept / Personal Study

## ⚠️ Required preparation
`Copertina.pdf` must be exported to PNG at 2× resolution before this project can be properly displayed. The mockup alone is insufficient — a book cover portfolio entry must show both the flat design and the physical object.

---

## Hero Image
**File:** `turn-me-off/mockup libro copertina.png`

**Why:** The physical book mockup is currently the only image available for display (the PDF cannot render in a browser). Two books, dark surface, dramatic side-lighting — it reads as editorial and physical simultaneously. The "TURN ME OFF" title is bold and legible from the spine even in the dark. The red eye/TV imagery on the cover face is instantly arresting.

**Once PDF is exported:** Reconsider the hero — the flat cover design (if it shows the CRT-eye concept clearly at full scale) may be more impactful as the opening image.

---

## Featured Images (2 — currently, pending PDF export)

1. **`turn-me-off/mockup libro copertina.png`** — Physical books mockup (hero)
2. **`turn-me-off/Copertina.pdf` → exported PNG** — Flat design once available

---

## Gallery Sequence (2–3 images)

| # | File | Role | Rationale |
|---|------|------|-----------|
| 1 | `Copertina.pdf` → PNG | **OUTPUT** — flat cover design | ⚠️ Pending export. Show the cover face, spine, back — the full designed object as a flat document. |
| 2 | `turn-me-off/mockup libro copertina.png` | **CONTEXT** — physical books | Two books standing on a dark surface. Side-lit to show the spine. The physical proof. |

**Additional assets to create:**
- A closeup crop of the cover face showing the CRT-eye detail at 2× zoom
- The spine typography isolation
- Front + back cover flat layout
If these can be extracted from the PDF, add them as gallery images 3–4.

---

## Visual Storytelling Arc
**The designed object → the physical object.**

Turn Me Off is the portfolio's most typographically intense project — the title itself is a confrontational statement, and the CRT/eye imagery carries strong cultural resonance (surveillance, media, Netflix content culture). The gallery should feel like a book launch, not a process breakdown: lead with the finished cover, close with the object in hand.

---

## Transition Ideas
- **Gallery 1 → 2:** The flat cover should animate as if it's being folded into three dimensions — a perspective transform that rotates the flat image into the angle of the physical mockup. This is the most elaborate transition in the entire portfolio, reserved for this project alone.

---

## Animation Ideas
- **Hero CaseCover:** The mockup image enters on a very dark background. The "TURN ME OFF" title on the cover and on the case study heading should appear to have a brief red chromatic aberration on first load — channels split and re-align within 300ms. One-time, on page load only.
- **Gallery 1 (flat cover):** Red glitch scan effect on hover — the CRT aesthetic of the cover design echoed in the image interaction.
- **Ambient:** A very subtle CRT scanline overlay (the existing `.scanlines` CSS class) applied behind/over the hero image for this specific project. Red-tinted, low opacity (~0.05). Makes the cover art feel like it's being viewed on a monitor.

---

---

# GALLERY STRIP — HOMEPAGE (FULL SEQUENCE)

The horizontal scroll strip on the homepage should contain 12 images in a specific order. Sequence logic: dark → warm → saturated → dark → designed → contextual → repeat. The strip must never feel tonally monotonous.

| Position | File | Project | Tone |
|----------|------|---------|------|
| 1 | `tomb-raider/shots/TombRaider.jpg` | Lara | Dark, B&W, strong |
| 2 | `cyberpunk/session-aug05-masked/Cyberpunk white card.png` | V | Dark, amber/gold |
| 3 | `fuji/poster commerciale Fuji.jpg` | Fuji | Warm, orange-red |
| 4 | `cyberpunk/session-july14-blue-hair/photomode_14072025_220312.png` | Songbird | Saturated, blue/purple |
| 5 | `tomb-raider/final/1st Tomb raider.png` | Lara | Dark, typographic |
| 6 | `turn-me-off/mockup libro copertina.png` | Turn Me Off | Dark, red accent |
| 7 | `cyberpunk/session-aug05-masked/red jpeg sandevistan.jpg` | V | Dark, vivid red |
| 8 | `fuji/mockup fuji serio dritto.png` | Fuji | Dark bg, warm screen |
| 9 | `cyberpunk/session-aug16-somi-dark/photomode_16082025_165357.png` | Songbird | Dark, B&W, extreme |
| 10 | `tomb-raider/shots/OriginalT.RAIDER.png` | Lara | Dark, cinematic wide |
| 11 | `cyberpunk/session-aug05-masked/mockup poster yellow.png` | V | Dark, framed |
| 12 | `cyberpunk/session-july15-somi/blue sfumato BENE da esempio.png` | Songbird | Cool blue, clean |

---

# FEATURED WORK — HOMEPAGE (CARD IMAGES)

The FeaturedWork section shows the 3–4 highlighted projects as cards. Use these images:

| Card | Project | Image | Reason |
|------|---------|-------|--------|
| 1 | V | `session-aug05-masked/red jpeg sandevistan.jpg` | Maximum visual impact, establishes cyberpunk identity |
| 2 | Lara | `tomb-raider/final/1st Tomb raider.png` | Shows designed output, typographic confidence |
| 3 | Fuji | `fuji/poster commerciale Fuji.jpg` | Warm contrast against the dark surrounding cards |
| 4 | Turn Me Off | `turn-me-off/mockup libro copertina.png` | Dark editorial, different format (physical object) |

---

# WORK INDEX — PROJECT CARD THUMBNAILS

| Card | Project | Thumbnail Image | Notes |
|------|---------|-----------------|-------|
| V | V | `session-aug05-masked/Cyberpunk white card.png` | Shows the designed output, not the raw photo |
| Fuji | Fuji | `fuji/poster commerciale Fuji.jpg` | Clean poster crop |
| Songbird | Songbird | `session-july15-somi/blue sfumato BENE da esempio.png` | Most distinctive/graphic image |
| Lara | Lara | `tomb-raider/shots/TombRaider.jpg` | Strongest photographic presence |
| Turn Me Off | Turn Me Off | `turn-me-off/mockup libro copertina.png` | Most distinctive object |

---

# OG IMAGES (Social Previews, 1200×630)

Each case study page should have its own OG image for when links are shared on social media. These need to be created (1200×630 crop from each hero image, with the project title and site name overlaid):

| Page | Source image | Type |
|------|-------------|------|
| `/` (homepage) | `session-aug05-masked/red jpeg sandevistan.jpg` | Site-wide default |
| `/work/v` | `session-aug05-masked/Cyberpunk white card.png` | Project OG |
| `/work/lara` | `tomb-raider/shots/TombRaider.jpg` | Project OG |
| `/work/fuji` | `fuji/poster commerciale Fuji.jpg` | Project OG |
| `/work/songbird` | `session-aug16-somi-dark/photomode_16082025_165357.png` | Project OG |
| `/work/turn-me-off` | `turn-me-off/mockup libro copertina.png` | Project OG |

---

*End of Image Usage Plan*
