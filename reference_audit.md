# Fuel Reference Audit

## Direct comparison evidence

The current GoClone homepage contains all observed reference sections in the same overall order: hero, About Us, Portfolio, Premium Services, Pricing, Testimonial, Archive, Stats, Article, FAQ, and footer. The current routes `/work/portfolio`, `/about`, and `/contact` also cover the observed secondary-page purposes.

| Area | Current GoClone | Fuel reference | Assessment |
|---|---|---|---|
| Hero asset and color | Same authorized hero capture, local under `/assets/` | Same orange/red/blue portrait treatment | Aligned |
| Header | Logo, centered four-item navigation, CEO card | Same structure | Structure aligned; local nav is visibly larger and uppercase |
| Hero CTA | Left CTA is positioned around the lower-middle of the hero | Left CTA sits much higher, around the upper-left third | Material spacing discrepancy |
| Services label | Lower-left stacked list | Lower-left stacked list | Aligned |
| Plus marks | Three decorative marks | Three decorative marks | Aligned |
| Hero wordmark | Text-rendered `FUEL×`, white and narrower | Large custom image wordmark with more width and subtle image texture | Material styling discrepancy; exact treatment is not reproduced |
| Main section rhythm | Dark/paper alternating sections with editorial borders | Dark/paper alternating sections with editorial borders | Aligned |
| Portfolio | Four project cards and a See all action | Four project cards and a See all action | Aligned; local uses Photography spelling rather than the reference typo Photograhy |
| Pricing | Starter, Professional, Elite with matching prices/features | Same three plans and prices/features | Aligned |
| Testimonial | Quote plus 99/84/94 metrics | Quote plus additional top-line counts and 99/84/94 metrics | Minor missing detail: local omits the 122+/257+/315+ count row |
| Archive | Six rows with year labels and case links | Six archive names with varying years and an archive CTA | Aligned in structure, simplified in content |
| Stats | Four metrics and explanatory copy | Same four metrics and explanatory copy | Aligned |
| Articles | Four article rows | Same four article rows | Aligned |
| FAQ | Five accordion questions, portrait, showreel link | Same five questions, portrait, showreel link | Aligned and locally interactive |
| Footer | CTA, email, marquee, wordmark, navigation, year/runtime note | Same core footer plus Framer attribution badge | Minor intentional omission of platform attribution |

## Priority fixes

1. Move the desktop hero CTA upward to match the reference’s upper-left placement.
2. Reduce desktop navigation typography and restore mixed-case labels for closer visual fidelity.
3. Widen the hero wordmark treatment and use the captured wordmark asset where it improves fidelity without sacrificing accessible text.
4. Add the reference’s top-line testimonial counts as a small metric row.

## Intentional deviations

GoClone keeps a local email address, uses local assets, adds explicit focus states and reduced-motion handling, and omits Framer’s “Made in Framer” attribution badge. These are clean implementation decisions rather than missing product sections.

## Post-fix verification

The desktop audit capture now places the hero CTA in the upper-left third, reduces the navigation scale, and uses the captured wide wordmark asset. The 893px render is materially closer to the reference screenshot while retaining the local CEO card and local asset paths. The mobile capture retains the compact Menu control, keeps the CTA readable, and reflows the wide wordmark without horizontal overflow.

The testimonial count row has been added above the percentage metrics to cover the reference’s 122+/257+/315+ detail. Remaining differences are limited to exact proprietary animation choreography, the Framer attribution badge, and some copy/typography micro-variations.
