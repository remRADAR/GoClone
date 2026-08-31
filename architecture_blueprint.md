# GoClone Architecture Blueprint

## Scope and authorization

The target reference is `https://fuel.framer.website/`. The user confirmed authorization to inspect and redevelop it. GoClone uses the reference as a visual and interaction model and keeps the implementation self-contained.

## Repository and merge strategy

`remix-of-clone-craft` supplied the Lovable-generated TanStack Start + Vite + React + TypeScript runtime conventions, including the root shell, router setup, error boundary, and UI dependency baseline. Its current homepage was a blank-page placeholder, so no usable page implementation was copied. `GoClone` was an empty repository; the merged build now lives there as the destination implementation.

## Route map

| Route | Purpose | Implementation |
|---|---|---|
| `/` | Full long-form agency home: hero, about, portfolio, services, pricing, testimonial, archive, stats, articles, FAQ, footer | `HomePage` |
| `/work/portfolio` | Portfolio hero, four project cards, FAQ, footer | `PortfolioPage` |
| `/about` | Studio hero, Research/Experiment/Refinement process, stats, FAQ, footer | `AboutPage` |
| `/contact` | Contact hero, job-request CTA, FAQ, footer | `ContactPage` |

## Component inventory

`src/site.tsx` contains the shared site shell, header, footer, hero variants, section intro, portfolio cards, FAQ accordion, process rows, pricing cards, stats, articles, and route-level page compositions. `src/styles.css` owns the visual token layer, 12-column desktop grid, 4-column mobile reflow, image treatment, responsive breakpoints, focus states, and reduced-motion fallback.

## Visual system

The interface uses a near-black canvas, warm paper typography, acid-green utility accents, hairline borders, condensed uppercase display typography, and full-bleed editorial photography. The desktop layout uses a 12-column grid; mobile collapses to stacked content with a native Menu disclosure. Motion is limited to hover image scale, reveal-like transitions, and a footer marquee, all disabled under `prefers-reduced-motion: reduce`.

## Data and integrations

The experience is static and self-contained. All image assets are local under `public/assets/`. There are no server APIs, authentication flows, analytics SDKs, tracking pixels, secrets, or required environment variables. The showreel is a safe external YouTube link and is not auto-played. The email CTA uses a local `mailto:` address.

## Known limitations

The reference’s original animation choreography is not fully measurable from static evidence, so GoClone uses restrained CSS motion. Exact proprietary fonts are not assumed; the project uses a reproducible system/condensed stack. Portfolio cards route to the portfolio overview instead of unimplemented detail pages.
