# Visual Review Notes

## First local desktop render

The exposed GoClone build rendered successfully at the local verification URL after allowing the temporary Vite host. The homepage is a full-viewport orange/red/blue portrait composition with the white logo at upper-left, centered numeric navigation, a CEO card at upper-right, left-side CTA copy, lower-left service labels, plus marks, and a large FUEL× wordmark. This matches the reference’s above-the-fold structure and visual temperature.

The local render uses local `/assets/*` paths for all captured imagery and exposes the full long-form page content in the browser. The browser reported interactive links for all primary navigation items, portfolio cards, pricing CTAs, article rows, footer actions, and buttons for each FAQ row.

## Noted comparison deltas

- The local hero image is a static captured frame rather than the reference’s more fluid art-directed motion.
- The local wordmark is text-based, which keeps the GoClone asset boundary clean but differs from the reference’s exact logo treatment.
- Local navigation labels are uppercase due to the implementation’s editorial system; the reference uses mixed case labels.
- The local build adds explicit focus states, reduced-motion support, and a mobile menu to make the experience more robust than a screenshot-only reproduction.

## Portfolio route verification

`/work/portfolio` resolves successfully through the local server. The captured desktop state shows a full-bleed close-up portrait hero with a very large white/outline Latest Portfolio title, a paper section below with four project cards, and the FAQ/footer sequence. All four project links and five FAQ buttons are exposed as interactive controls in the browser.

## About and contact route verification

`/about` resolves successfully and renders a full-bleed sunglasses portrait with the large “We are here.” hero treatment, followed by the three process rows (Research, Experiment, Refinement), stats, FAQ, and footer. `/contact` resolves successfully and renders a split dark/image hero with “Let’s make something matter.” and a visible “Start a job request” link, followed by FAQ/footer content.

Both routes expose the same header and footer navigation, and the browser found all expected FAQ buttons and CTAs. No blank-page placeholder or blocked-host error remains in the rendered output.

## Interaction verification

The browser reached the FAQ region after activating the first contact-page FAQ control. The FAQ controls remained keyboard/native buttons and the corresponding answer text was present in the rendered content. The screenshot also confirmed the image-led FAQ layout and the local showreel link.

## Mobile responsive verification

At 390×844, the home hero reflows to a single-column composition with the logo and Menu control in the header, readable CTA copy, stacked service labels, plus marks, and a large FUEL× wordmark. The about route reflows to a full-bleed hero with the “We are here.” display treatment and metadata section below. The contact route reflows from a split desktop hero into a stacked dark copy block followed by the portrait image, with a full-width CTA. No horizontal overflow was visible in the captured mobile states.

The mobile homepage capture shows the large wordmark approaching the footer note at the bottom edge; this is an intentional editorial overlap in the reference language, but the wordmark will be nudged upward slightly for improved legibility.
