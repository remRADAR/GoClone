# GoClone Design Decisions

The artifact is a responsive editorial agency/portfolio website for prospective creative-service clients. The direction is intentionally close to the authorized reference: cinematic full-bleed photography, Swiss-inspired grids, oversized condensed display type, acid-green utility accents, and a near-black/warm-paper split palette.

| Token | Decision |
|---|---|
| Canvas | `#090909` near-black and `#f1ede6` warm paper |
| Accent | `#c8ff35` acid green for indices, highlights, and key actions |
| Display type | Condensed system stack using Arial Narrow / Roboto Condensed / Impact fallbacks |
| Body type | Helvetica Neue / Arial system stack |
| Spacing | 8px base unit with 64 / 96 / 128px section rhythms |
| Grid | 12 columns on desktop, stacked 4-column mobile reflow |
| Shape | Mostly square editorial frames; 2–3px controls; restrained 12px portrait cards |
| Motion | 220ms hover feedback, 450–900ms reveals, slow marquee; reduced-motion fallback |

The implementation preserves native links, buttons, and disclosure controls. All reference imagery used by the build is stored locally under `public/assets`; no third-party image host or analytics dependency is required at runtime.
