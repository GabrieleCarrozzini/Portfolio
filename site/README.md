# gabriele-carrozzini.com

Portfolio site for Gabriele Carrozzini — Visual Designer, Rome.

## Stack

- Next.js (App Router) · React 19 · TypeScript strict
- Tailwind CSS v4 · Framer Motion v12
- Installed but not yet integrated: gsap, lenis, @react-three/fiber, @react-three/drei

## Structure

```
app/              pages (home, about, work, contact, services)
components/       home/, layout/, ui/, work/
lib/data/         projects.ts — single data layer for all project content
public/projects/  optimised web assets per project
```

## Project data

All project content lives in `lib/data/projects.ts`. Adding a project means adding an entry to the `projects` array and dropping images into `public/projects/<slug>/`.

## Dev

```bash
npm run dev     # localhost:3000
npm run build   # production build
npm run lint    # ESLint
```

## Source assets

Raw/source files live in `../assets/` — outside the Next.js project, not served.

## Docs

Strategy and planning documents are in `../docs/`.
Quality evaluation frameworks are in `../creative-review/`.
