# Scroll and Navigation Audit

## Reference observations

The Fuel reference keeps the main navigation, logo, and CEO card visible while the page scrolls beyond the hero. The hero is a full-viewport composition with decorative plus marks and a large wordmark anchored near the lower edge. After one viewport of scrolling, the hero gives way to the About section with a large editorial statement and an image-led split layout. The reference exposes a long scroll narrative rather than a separate app chrome or fixed sidebar.

The current GoClone shell already uses an absolute header, which visually matches the reference at the top of the page but means the header scrolls away instead of staying available through the long-form page. The current CSS has hover transitions, a footer marquee, reduced-motion support, and responsive breakpoints, but no scroll-triggered reveal system, active navigation state, or mobile sticky navigation behavior.

## Audit targets

| Behavior | Current GoClone | Reference | Priority |
|---|---|---|---|
| Header at hero top | Present and visually aligned | Present | Pass |
| Header during scroll | Scrolls out of view | Remains available in observed scroll state | High |
| Section reveal | No scroll-triggered reveal | Subtle staged movement/entrance implied by reference | Medium |
| Active route/nav state | No active styling | Current page is visually identifiable through the navigation | Medium |
| Mobile menu | Native disclosure exists | Reference adapts navigation for narrow screens | Pass, needs sticky treatment |
| Hero transition | Standard document flow | Reference transitions from hero into editorial content | Medium |
| Reduced motion | Supported | Required for robust adaptation | Pass |

## Local runtime verification

At a 893px viewport after scrolling to approximately 962px, the GoClone runtime reported `--scroll-progress: 0.8745`, two revealed sections out of ten marked `[data-reveal]`, active navigation `Home 01`, and a correctly wired mobile menu control with `aria-controls="primary-navigation"`. The local header scrolls away with the hero, matching the observed reference scroll state rather than remaining sticky. The hero wordmark responds to the scroll-progress variable through a subtle upward parallax transform.

The About route was also checked after navigation. The runtime reported `pathname: /about`, active navigation `About 03`, and one of four route sections initially visible, confirming route-aware navigation state and observer initialization on subpages.
