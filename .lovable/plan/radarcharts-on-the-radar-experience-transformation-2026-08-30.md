# RADARCharts — On The Radar Experience Transformation

Deliverable: a downloadable zip containing the adapted RADARCharts codebase (Next.js 16). This Lovable preview stays untouched.

## What I found in the two repos

**Repository A — remRADAR/remradar (RADARCharts)**
- Next.js 16 + React 19, Tailwind v4, Lenis smooth scroll, @react-spring/web, zustand, zod. Yarn.
- The homepage (`src/views/home.tsx`) is not really a React homepage: it renders `FramerMainView`, which loads an exported Framer HTML page in an iframe (`/framer-site/aktiv-section-v4.html`) and then injects hundreds of lines of `!important` CSS and DOM patches to force RADARCharts content into it. This is the monolith the brief is about.
- Sections are addressed only as Framer selectors in `content/homepage-components.json`: Third section / looping media ("aktiv"), Showreel logo, Category strip, Now Reading, RADARMusic card, and others.
- Primary navigation lives in the footer: `FloatingDockFooter` — Home `/`, ON THE RADAR `/ontheradar`, Magazine `/magazine`, RADARMusic `/radarmusic`, RADARMe `/platforms`, REM `/about`, plus a managed-navigation feed from `lib/wordpress`. A second `liquid-glass-footer` also exists.
- Real routes come from `src/lib/framer-pages.ts`: charts, ontheradar, magazine, radarmusic, platforms, playlists, store, spotlights, motherland, about — all served through one `[route]` catch-all that renders another Framer view. Plus `/ratecard`, `/ontheradar/[slug]`, `/admin/homepage`, and API routes (articles, contact, homepage-components, component-replacements).

**Repository B — remRADAR/OnTheRadar**
- Not a React app: a static HTML/CSS/JS clone of https://fuel.framer.website/ (index, about, work, blog, contact + `assets/`). So its experience must be studied from the real DOM/CSS/JS and reimplemented in React, which is the approach you chose.

## The transformation

### 1. Audit and migration matrix
Extract from repo B's actual HTML/CSS/JS: nav open/close choreography, scroll pacing, section reveal thresholds, easing curves and durations, type scale and letter-spacing, spacing rhythm, breakpoints, hover/focus states. Record every RADARCharts homepage component with its new component name, route, data source, and On The Radar treatment. Written up as `docs/MIGRATION-MATRIX.md` in the zip.

### 2. Kill the iframe homepage
Replace `FramerMainView` with native React sections. Content and media currently forced into the Framer DOM by selector get lifted into typed data modules, so nothing is lost but nothing is injected either.

Home becomes: Hero → Charts → Discovery / Category → Editorial (Now Reading / articles) → RADARMusic (playlists, releases) → remaining existing RADARCharts modules → CTA. Each is its own component with its own data boundary, semantics, responsive rules, and reveal lifecycle. No section keeps hard-coded copy inline.

### 3. Footer nav → one global navigation
Extract every official item from `FloatingDockFooter` and the managed navigation feed, preserve each destination, and rebuild them as a single `GlobalNavigation` in the app shell using the On The Radar nav feel (reimplemented with the existing Lenis + react-spring stack, no new heavy dependency). The floating dock and the second glass footer are removed as navigation; the footer keeps only legal/meta links. Mobile gets the same visual philosophy as a full-surface overlay, not a generic hamburger drawer.

### 4. Routing and shell
`RootLayout → GlobalNavigation → PageTransition → route content`. Every nav item opens a real page. The `[route]` catch-all is kept for pages that still have Framer content, but each official destination gets a proper page boundary and metadata; pages without real content get a structural shell, not invented content. Direct URL, refresh, back and forward all verified.

### 5. Scroll and motion
Section-scale pacing driven by Lenis and in-view springs — no CSS scroll-snap, no scroll-jacking, no forced extra scrolling. Short, intentional page transitions that never block navigation. Full `prefers-reduced-motion` support via the existing `ReducedMotion` component.

### 6. Charts stays a core feature
`ChartsSection` is a real component backed by a `chartData` provider interface (currently local, swappable for CMS/API/DB) and also drives `/charts`. Not a decorative card.

### 7. CMS readiness
Content lives in typed modules under a content layer: hero, charts, artists, articles, playlists, navigation config. Components consume props only. Kept simple — clean boundaries, not a framework.

### 8. Assets, performance, a11y, SEO
RADARCharts logo, artist, music, chart and editorial assets only — nothing from the clone. Responsive images, lazy loading below the fold, route-level code splitting, no continuous animation loops. Semantic HTML, keyboard nav, visible focus, labelled controls, comfortable touch targets. Per-page title/description/canonical/OG preserved through the existing `generate-page-metadata` and structured-data utilities; sitemap and robots kept working.

### 9. QA before delivery
Build the adapted app, then drive it headlessly across small mobile → large desktop: homepage, every nav destination, direct load, refresh, back/forward, overlay nav on touch, no horizontal overflow, no clipped or overlapping content, no broken images or transitions. Fix what the QA finds and re-verify — a passing build is not the finish line.

## Technical notes

- Work happens on a local clone of remRADAR/remradar; the stack stays Next.js 16 / React 19 / Tailwind v4 / Lenis / react-spring. No framework migration, no new heavy animation library.
- Existing API routes, cookie system, welcome gate, YouTube player, PWA registration, admin homepage editor and WordPress integration are migrated, not deleted.
- Removal is gated on inspection: anything deleted is confirmed dead or has its behaviour moved first.
- Output: `radarcharts-transformed.zip` in your documents, excluding `node_modules` and `.git`, plus a short changelog of what moved where.

## Scope note

The homepage rewrite means the visual output will be a native RADARCharts homepage rather than a pixel-identical replay of the exported Framer page. That is the point of the brief, but it does mean the new sections are a faithful reconstruction of the current content, not a byte-level copy of the iframe.
