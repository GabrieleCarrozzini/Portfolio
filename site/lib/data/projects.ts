export type ProjectAccent = 'gold' | 'violet' | 'red' | 'orange';

export interface GalleryImage {
  index: string;
  alt: string;
  colorClass: string;
  src: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  type: string;
  status: 'original' | 'personal-study' | 'concept';
  statusLabel: string;
  accent: ProjectAccent;
  accentColor: string;
  tagline: string;
  description: string;
  role: string;
  tags: string[];
  nextSlug: string;
  featured: boolean;
  order: number;
  heroImage: string;
  cardImage: string;
  /** CSS object-position value for cropped card/cover contexts */
  focalPoint?: string;
  processCopy?: string;
  processLabels?: { label: string; value: string }[];
  gallery?: GalleryImage[];
  /** 'portrait' = 2-col tall grid, contain; default = 3-col square, cover */
  galleryLayout?: 'portrait' | 'grid';
}

export const projects: Project[] = [
  // ── V — MASKED YELLOW ─────────────────────────────────────────────────────
  {
    slug: 'v',
    title: 'V',
    year: '2025',
    type: 'Cyberpunk Poster · 3D Character',
    status: 'original',
    statusLabel: 'Original Work',
    accent: 'gold',
    accentColor: '#E9A124',
    tagline: 'Form beyond meaning.',
    description:
      'A cyberpunk character poster merging 3D character rendering with HUD-inspired graphic design. Circuit-line framing, barcode data, and Japanese glyphs create a technical mythology around the masked figure — where identity dissolves into signal.',
    role: '3D Character Art · Poster Design · Art Direction',
    tags: ['3D Character', 'Poster Design', 'Cyberpunk', 'Art Direction'],
    nextSlug: 'sandevistan',
    featured: true,
    order: 1,
    heroImage: '/projects/v/gallery-05.png',
    cardImage: '/projects/v/gallery-01.png',
    focalPoint: '50% 18%',
    processLabels: [
      { label: 'EYE FOCUS POINT',      value: '4*10' },
      { label: 'MASK AREA-CONTRAST',   value: '6*23' },
      { label: 'GEOMETRIC REPETITION', value: '0^10' },
      { label: 'CODE STRING',          value: 'XN4LCO-43KS' },
      { label: 'GLYPH REF',            value: '未来' },
    ],
    gallery: [
      { index: '01', alt: 'V — Cyberpunk white card poster, circuit-frame UI, amber gold system, 未来',   colorClass: 'v-gallery-1', src: '/projects/v/gallery-01.png' },
      { index: '02', alt: 'V — framed wall mockup poster, amber on black, physical print',                colorClass: 'v-gallery-2', src: '/projects/v/gallery-02.png' },
      { index: '03', alt: 'V — photoshoot, golden ambient light, masked figure portrait',                 colorClass: 'v-gallery-3', src: '/projects/v/gallery-03.png' },
      { index: '04', alt: 'V — gold portrait cutout, isolated character asset',                           colorClass: 'v-gallery-4', src: '/projects/v/gallery-04.png' },
      { index: '05', alt: 'V — gold full-body character cutout',                                          colorClass: 'v-gallery-5', src: '/projects/v/gallery-05.png' },
    ],
  },

  // ── SANDEVISTAN — MASKED RED ──────────────────────────────────────────────
  {
    slug: 'sandevistan',
    title: 'Sandevistan',
    year: '2025',
    type: 'Glitch Photography · 3D Character',
    status: 'original',
    statusLabel: 'Original Work',
    accent: 'red',
    accentColor: '#D33127',
    tagline: 'Velocity made visible.',
    description:
      'A dedicated session exploring the Sandevistan ability — the red glitch of hyper-accelerated time. Raw chromatic aberration, motion blur, and aggressive post-processing transform a 3D character render into a visceral moment of pure kinetic energy.',
    role: '3D Character Art · Post-Processing · Art Direction',
    tags: ['3D Character', 'Glitch', 'Cyberpunk', 'Post-Processing'],
    nextSlug: 'fuji',
    featured: false,
    order: 2,
    heroImage: '/projects/sandevistan/hero.jpg',
    cardImage: '/projects/sandevistan/hero.jpg',
    focalPoint: '50% 18%',
    gallery: [
      { index: '01', alt: 'Sandevistan — red glitch full-body shot, chromatic aberration, motion blur',   colorClass: 'san-gallery-1', src: '/projects/sandevistan/hero.jpg' },
      { index: '02', alt: 'Sandevistan — photoshoot, hard red dramatic light, masked portrait',           colorClass: 'san-gallery-2', src: '/projects/sandevistan/gallery-02.png' },
      { index: '03', alt: 'Sandevistan — red tinted character cutout, isolated asset',                    colorClass: 'san-gallery-3', src: '/projects/sandevistan/gallery-03.png' },
      { index: '04', alt: 'Sandevistan — posterized high-contrast two-tone red treatment',                colorClass: 'san-gallery-4', src: '/projects/sandevistan/gallery-04.png' },
      { index: '05', alt: 'Sandevistan — clean red export, graphic reduction of photography',             colorClass: 'san-gallery-5', src: '/projects/sandevistan/gallery-05.png' },
    ],
  },

  // ── FUJI ──────────────────────────────────────────────────────────────────
  {
    slug: 'fuji',
    title: 'Fuji',
    year: '2024',
    type: 'Advertising · Product Composition',
    status: 'original',
    statusLabel: 'Original Work',
    accent: 'orange',
    accentColor: '#E8551F',
    tagline: 'Brief, creatività e composizione.',
    description:
      'Studio grafico pubblicitario focalizzato sulla valorizzazione del gusto attraverso tipografia monumentale, palette calda ed effetti splash. La composizione ricerca equilibrio tra immagine e testo, enfatizzando dinamismo, freschezza e identità visiva.',
    role: 'Advertising Design · Product Composition · Typography',
    tags: ['Advertising', 'Product', 'Composition', 'Poster'],
    nextSlug: 'lara',
    featured: true,
    order: 3,
    heroImage: '/projects/fuji/hero.jpg',
    cardImage: '/projects/fuji/hero.jpg',
    focalPoint: '50% 44%',
    processCopy:
      'The challenge: make a product feel cinematic. Monumental typography overwhelms the frame — "FUJI" pushes past every margin. A warm orange gradient evokes freshness. The water splash interrupts the grid with controlled chaos.',
    gallery: [
      { index: '01', alt: 'Fuji — flat poster design, warm orange gradient, peach product photography, 2024', colorClass: 'fuji-gallery-1', src: '/projects/fuji/hero.jpg' },
      { index: '02', alt: 'Fuji — outdoor billboard mockup, straight-on view, commercial scale',              colorClass: 'fuji-gallery-2', src: '/projects/fuji/gallery-02.png' },
      { index: '03', alt: 'Fuji — outdoor billboard mockup, 3/4 angled perspective view',                     colorClass: 'fuji-gallery-3', src: '/projects/fuji/gallery-03.png' },
    ],
  },

  // ── LARA ──────────────────────────────────────────────────────────────────
  {
    slug: 'lara',
    title: 'Lara',
    year: '2024–2025',
    type: 'Poster · Image Set',
    status: 'personal-study',
    statusLabel: 'Personal / Fan Study',
    accent: 'violet',
    accentColor: '#8A4FFF',
    tagline: 'Orphaned by shadows, forged in blood.',
    description:
      'A personal study exploring the Lara Croft myth through monumental poster design and 3D character portraiture. The poster deploys distressed typography and a violet neon halo — strength made visual. This is fan art; Tomb Raider and Lara Croft are trademarks of Crystal Dynamics.',
    role: '3D Character Art · Poster Design · Fan Study',
    tags: ['Fan Study', '3D Character', 'Poster Design', 'B&W'],
    nextSlug: 'turn-me-off',
    featured: true,
    order: 4,
    heroImage: '/projects/lara/gallery-03.jpg',
    cardImage: '/projects/lara/gallery-01.png',
    focalPoint: '50% 16%',
    processCopy:
      '"Orphaned by shadows, forged in blood, / Her pistols whisper of vengeance, / A legend carved in bullet casings. / The jungle\'s embrace birthed no princess, only a predator."',
    gallery: [
      { index: '01', alt: 'Lara Croft — final poster design, LARA CROFT typography, Tomb Raider branding', colorClass: 'lara-gallery-1', src: '/projects/lara/gallery-01.png' },
      { index: '02', alt: 'Lara poster — slatted-wall display mockup, framed black on black',               colorClass: 'lara-gallery-2', src: '/projects/lara/gallery-02.png' },
      { index: '03', alt: 'Lara Croft — full-body portrait, glowing halo, B&W, arms crossed',               colorClass: 'lara-gallery-3', src: '/projects/lara/gallery-03.jpg' },
      { index: '04', alt: 'Lara Croft — cinematic wide crop, neon halo ring, dark environment',              colorClass: 'lara-gallery-4', src: '/projects/lara/gallery-04.png' },
      { index: '05', alt: 'Lara Croft — close-up bust portrait, B&W, halo glow',                            colorClass: 'lara-gallery-5', src: '/projects/lara/gallery-05.jpg' },
      { index: '06', alt: 'Lara Croft — isolated cutout asset, masking step, upper body B&W',               colorClass: 'lara-gallery-6', src: '/projects/lara/gallery-06.png' },
      { index: '07', alt: 'Lara Croft — vertical crop variant, darker moodier tone',                        colorClass: 'lara-gallery-7', src: '/projects/lara/gallery-07.png' },
      { index: '08', alt: 'Lara Croft — alternate angle, close-up portrait crop',                           colorClass: 'lara-gallery-8', src: '/projects/lara/gallery-08.jpg' },
    ],
  },

  // ── TURN ME OFF ───────────────────────────────────────────────────────────
  {
    slug: 'turn-me-off',
    title: 'Turn Me Off',
    year: '2026',
    type: 'Cover Design',
    status: 'concept',
    statusLabel: 'Concept / Personal Study',
    accent: 'red',
    accentColor: '#D33127',
    tagline: 'Spegni lo schermo. Accendi la mente.',
    description:
      'A cover design concept for a psychological thriller exploring digital surveillance. The CRT eye motif and chromatic glitch title treatment evoke the horror of being watched. This is a personal concept study using the Netflix visual language for educational purposes.',
    role: 'Cover Design · Typography · Art Direction',
    tags: ['Cover Design', 'Concept', 'Typography', 'Glitch'],
    nextSlug: 'neon-sessions',
    featured: true,
    order: 5,
    heroImage: '/projects/turn-me-off/hero.png',
    cardImage: '/projects/turn-me-off/hero.png',
    focalPoint: '50% 50%',
    processCopy:
      'Viviamo circondati da immagini, notifiche e storie che scorrono senza fine. Ma cosa succede quando qualcuno decide di premere davvero il pulsante "off"? Forse sono loro che guardano noi. Chi sta davvero controllando chi?',
    gallery: [
      { index: '01', alt: 'Turn Me Off — flat cover design, CRT eye motif, glitch title treatment, 2026', colorClass: 'tmo-gallery-1', src: '/projects/turn-me-off/gallery-01.png' },
      { index: '02', alt: 'Turn Me Off — physical book mockup, two copies, dark surface, side lighting',   colorClass: 'tmo-gallery-2', src: '/projects/turn-me-off/hero.png' },
    ],
  },

  // ── NEON SESSIONS — BLUE LIGHT PORTRAITS ─────────────────────────────────
  {
    slug: 'neon-sessions',
    title: 'Neon Sessions',
    year: '2024',
    type: 'Portrait Sessions · Neon Light',
    status: 'original',
    statusLabel: 'Original Work',
    accent: 'violet',
    accentColor: '#8A4FFF',
    tagline: 'Light sculpted into identity.',
    description:
      'Two portrait sessions exploring a cybernetic character through neon blue and magenta lighting — vivid colour temperature, blue hair, electric atmosphere. Different moods, same visual world: cool, intimate, and electric.',
    role: '3D Character Art · Lighting · Rendering · Compositing',
    tags: ['3D Character', 'Portrait', 'Blue Light', 'Neon'],
    nextSlug: 'somi',
    featured: false,
    order: 6,
    heroImage: '/projects/songbird/gallery-01.png',
    cardImage: '/projects/songbird/gallery-01.png',
    focalPoint: '50% 22%',
    galleryLayout: 'portrait',
    gallery: [
      { index: '01', alt: 'Neon Sessions — blue gradient portrait cutout, platinum hair, soft blue light',     colorClass: 'songbird-gallery-1', src: '/projects/songbird/gallery-01.png' },
      { index: '02', alt: 'Neon Sessions — July 15 session, arms crossed, strong blue rim light',              colorClass: 'songbird-gallery-2', src: '/projects/songbird/gallery-04.png' },
      { index: '03', alt: 'Neon Sessions — July 15 session, cigarette, editorial blue atmosphere',             colorClass: 'songbird-gallery-3', src: '/projects/songbird/gallery-05.png' },
      { index: '04', alt: 'Neon Sessions — July 14 session, vivid blue hair close-up',                        colorClass: 'songbird-gallery-4', src: '/projects/songbird/gallery-06.png' },
      { index: '05', alt: 'Neon Sessions — July 14 session, blue hair, hand gesture, magenta lighting',       colorClass: 'songbird-gallery-5', src: '/projects/songbird/gallery-07.png' },
    ],
  },

  // ── SOMI — B&W DARK PORTRAITS ─────────────────────────────────────────────
  {
    slug: 'somi',
    title: 'SoMi',
    year: '2025',
    type: 'B&W Portrait · Dark Study',
    status: 'original',
    statusLabel: 'Original Work',
    accent: 'violet',
    accentColor: '#C0BFC8',
    tagline: 'Identity stripped to light and shadow.',
    description:
      'A dark portrait session with the SoMi character — dramatic monochrome, facial cybernetics, long dark hair, and high-contrast low-key lighting. Form reduced to its essential language: shadow as structure, light as revelation.',
    role: '3D Character Art · Portrait · Monochrome Lighting',
    tags: ['3D Character', 'B&W Portrait', 'Monochrome', 'Cyberpunk'],
    nextSlug: 'v',
    featured: false,
    order: 7,
    heroImage: '/projects/somi/gallery-01.png',
    cardImage: '/projects/somi/gallery-01.png',
    focalPoint: '50% 18%',
    gallery: [
      { index: '01', alt: 'SoMi — B&W portrait, cybernetic facial implants, dark hair, dramatic low-key light', colorClass: 'somi-gallery-1', src: '/projects/somi/gallery-01.png' },
      { index: '02', alt: 'SoMi — B&W portrait alternate angle, high-contrast monochrome',                      colorClass: 'somi-gallery-2', src: '/projects/somi/gallery-02.png' },
      { index: '03', alt: 'SoMi — character cutout asset, isolated portrait, dark background',                  colorClass: 'somi-gallery-3', src: '/projects/somi/gallery-03.png' },
      { index: '04', alt: 'SoMi — character PNG export, full portrait isolated',                                colorClass: 'somi-gallery-4', src: '/projects/somi/gallery-04.png' },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}
