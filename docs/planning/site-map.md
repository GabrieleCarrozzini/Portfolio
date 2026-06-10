# SITE_MAP.md
### Information architecture — Gabriele Carrozzini portfolio site
*Audience priority: (1) recruiters / studio art directors, (2) commercial clients. Both scan fast and decide in seconds, so the IA front-loads proof of work and makes contact frictionless.*

---

## Global structure

```
/                     Homepage (hero + featured work + capabilities snapshot)
/work                 Case Studies index (the portfolio grid)
/work/v               V — cyberpunk poster + character
/work/lara            Lara — poster + image set      [label: personal study]
/work/turn-me-off     Turn Me Off — cover design      [label: personal study]
/work/fuji            Fuji — advertising composition
/work/songbird        Songbird — portrait gallery
/about                About / Bio
/services             Services (client-facing)
/skills               Skills & Tools (recruiter-facing; can merge into /about)
/contact              Contact
```

Persistent **nav:** Work · Services · About · Contact (+ a fixed gold "Hire / Contact" CTA).
Persistent **footer:** email, socials/ArtStation/Behance, language toggle (if bilingual), back-to-top.

> **Decision flag:** Skills and About overlap heavily. Recommended default = merge Skills into About as a dedicated section, and keep `/services` separate (different audience). Keep `/skills` as a standalone page only if the skills/tools list is long enough to justify it. Below I spec all six pages as requested; mark Skills as "optional standalone".

---

## 1. Homepage `/`

**Purpose.** In one viewport, prove this is a premium 3D + design artist and route the visitor to either work (recruiter) or contact (client). Win or lose the visitor here.

**Sections (in order):**
1. **Hero** — "VISUAL POWER" display headline + sharp role line ("3D Character Artist & Art Director"). One dominant render (the V/masked character). Tagline ("Creativity begins where meaning ends…"). Primary CTA + scroll cue.
2. **Featured work (3–4 cases)** — curated, not all. Lead with the strongest: V, Fuji, Songbird, Turn Me Off. Each = cover image + title + year + accent.
3. **Capabilities snapshot** — 3–4 concise pillars (3D Character Art · Poster & Cover Design · Advertising Composition · Art Direction). Builds the hybrid positioning fast.
4. **Selected gallery strip** — horizontal scroll of standout images (the "01/02/03" treatment) for quick visual proof.
5. **About teaser** — 2–3 lines + portrait, link to full About.
6. **Contact band** — full-width gold-accented CTA section.

**Content hierarchy.** Headline > hero image > featured work > capabilities > everything else. Nothing competes with the hero.

**CTA strategy.** Primary (gold, persistent): **"View Work"** in hero for recruiters; secondary **"Start a project"** → contact for clients. The bottom contact band repeats the conversion ask after the visitor has seen proof.

---

## 2. About `/about`

**Purpose.** Convert interest into trust — who Gabriele is, the creative philosophy, the human behind the renders.

**Sections:**
1. **Intro** — portrait + 2–3 sentence positioning bio (poetic-but-clear voice).
2. **Approach / philosophy** — the "form over meaning" manifesto, expanded into how it shapes the work.
3. **Skills & tools** (if not standalone) — software, disciplines, specialties.
4. **Background / timeline** *(only if real info exists — currently missing in source)*.
5. **Personal CTA** — "Let's work together" → contact.

**Content hierarchy.** Bio first (recruiters skim it), philosophy second, skills third.

**CTA strategy.** Soft, single CTA to contact. About is a trust page, not a conversion page — don't over-sell.

---

## 3. Services `/services`

**Purpose.** Tell *clients* exactly what they can hire and how to brief it. (Recruiters skip this; that's fine.)

**Sections:**
1. **Header** — what you offer in one line.
2. **Service blocks** — derived from the portfolio's actual output:
   - **3D Character Art & Rendering** (V, Songbird, Lara renders).
   - **Poster & Key-Art Design** (V Poster, Lara Poster).
   - **Cover & Packaging Design** (Turn Me Off).
   - **Advertising / Product Composition** (Fuji — "brief, creatività e composizione").
   - **Art Direction / Visual Identity**.
   Each block: what it is · deliverables · example case link.
3. **Process** — leverage the existing "Brief → creatività → composizione" and the technical-breakdown page as a real 3-step process narrative. This is a genuine differentiator; use it.
4. **CTA** — "Request a quote / brief a project".

**Content hierarchy.** Services list > process > CTA.

**CTA strategy.** Per-service mini-CTA ("See example" → case study) plus one strong page-level "Start a project".

> **Gap flag:** the portfolio shows *output* but states no pricing, turnaround, or engagement model. Add at least an engagement model (project / retainer / licensing) so client inquiries arrive qualified.

---

## 4. Skills `/skills` *(optional standalone — else a section in About)*

**Purpose.** Fast recruiter-scannable competency proof.

**Sections:**
1. **Disciplines** — 3D character art, lighting/render, poster design, typography, compositing, advertising layout.
2. **Tools** — *(missing in source — must be supplied; likely a 3D suite + 2D/compositing stack).*
3. **Strengths** — cinematic lighting, monumental typography, brand-consistent series work, technical breakdown/process.

**Content hierarchy.** Tools + disciplines as scannable grouped tags, not prose.

**CTA strategy.** Minimal — link to Work and Contact.

> **Gap flag:** no software/tools are named anywhere in the portfolio. This is the single most important missing item for recruiters. Must be filled before launch.

---

## 5. Case Studies / Projects `/work` (+ `/work/[slug]`)

**Purpose.** The core of the site — depth of proof. Index for scanning, detail pages for evaluation.

**Index `/work` sections:**
1. **Header** — "Selected Work".
2. **Filter/tags** *(optional)* — by type (Character · Poster · Cover · Advertising) and by status (Client · Personal study).
3. **Project grid** — frameless cards: cover, title, year, accent, type tag.

**Detail `/work/[slug]` sections (reusable template):**
1. **Cover** — full-bleed hero of the piece (bleeding title), project name / year / type / accent.
2. **Context** — 2–3 lines: brief, role, what it is. Honest status label (Client vs Personal/Fan study).
3. **Showcase** — the design + its realistic mockup(s).
4. **Process / breakdown** *(toggle)* — the page-16-style annotated analysis (focus points, contrast, geometry) where it exists.
5. **Image set** — full gallery for that project.
6. **Next project** — link to keep the visitor moving.

**Content hierarchy.** Cover > context > visuals > process > next.

**CTA strategy.** Soft "Next project" + a single "Like this? Start a project" at the end of each case.

> **Per-project content notes (from source):**
> - **V** — cyberpunk poster + character; HUD/circuit framing; 2024.
> - **Lara** — poster (2025) + image set (2024); **label as personal/fan study (Tomb Raider / Lara Croft are trademarked).**
> - **Turn Me Off** — Netflix cover (2026); **fix Francys/Luca name error; label as concept/personal study (Netflix branding is trademarked).**
> - **Fuji** — advertising composition; has real brief copy already written — reuse it.
> - **Songbird** — portrait gallery (2024).

---

## 6. Contact `/contact`

**Purpose.** Remove every obstacle between an interested recruiter/client and a message.

**Sections:**
1. **Direct line** — email (primary), socials/portfolios (ArtStation, Behance, Instagram, LinkedIn).
2. **Form** — name, email, project type (dropdown mirroring Services), message. Short. Spam-protected.
3. **Availability** — current status ("Available for freelance / open to roles").
4. **Closing line** — a short brand statement.

**Content hierarchy.** Email/direct contact first (many will skip the form), form second.

**CTA strategy.** This page IS the CTA. One action, no distractions, no nav clutter.

> **Critical gap flag:** the portfolio contains **no contact information of any kind** — no email, phone, social, or website. The site literally cannot launch without this. It must be supplied; I will not fabricate it.

---

## Conversion path summary

```
Recruiter:  Home → Featured/Work → Case detail → Skills/About → Contact
Client:     Home → Services → Case example → Contact
```
Both paths terminate at Contact within 3 clicks. The persistent gold CTA guarantees Contact is always one click away from any page.
