## Goal
Refactor the current single-file Nexora brand page into a reusable **design system foundation** that future landing pages can plug into with minimal effort, while preserving the existing brand guidelines showcase.

## Architecture

```text
src/
├── styles.css                      # tokens (already brand-themed) + utilities
├── design-system/
│   ├── tokens.ts                   # TS mirror of CSS tokens (colors, fonts, spacing, radii, shadows, gradients)
│   ├── primitives/
│   │   ├── Section.tsx             # vertical rhythm wrapper + numbered header
│   │   ├── Container.tsx           # 12-col max-width grid
│   │   ├── Eyebrow.tsx             # small uppercase label
│   │   ├── DisplayHeading.tsx      # Sora display type scale (h1/h2/h3)
│   │   ├── GradientText.tsx        # brand gradient text
│   │   ├── GlowOrb.tsx             # ambient radial glow background
│   │   └── GridBackdrop.tsx        # grid / mesh / solid backdrop variants
│   ├── blocks/
│   │   ├── Hero.tsx                # reusable hero (eyebrow + headline + sub + CTA + visual slot)
│   │   ├── FeatureGrid.tsx         # 2/3/4-col feature cards
│   │   ├── LogoCloud.tsx
│   │   ├── CTASection.tsx
│   │   ├── StatStrip.tsx
│   │   └── FooterBrand.tsx
│   ├── brand/
│   │   ├── NexoraLogo.tsx          # the slanted N mark + wordmark (size/variant props)
│   │   └── BrandMark.tsx           # generic mark slot
│   └── index.ts                    # barrel export — single import surface
└── routes/
    ├── index.tsx                   # brand guidelines page (refactored to use primitives/blocks)
    └── showcase.tsx                # NEW — example landing page built only from design-system imports, proving reusability
```

## Refactor approach
- Extract repeated JSX patterns in current `index.tsx` (numbered section header, color swatch, type spec card, mockup frame) into primitives.
- Each primitive accepts variant props (`tone`, `size`, `backdrop`) driven by tokens — no hardcoded colors.
- `tokens.ts` re-exports CSS var names + raw hex for places that need JS values (e.g. SVG fills, canvas, charts).
- Add a `<DSProvider>`-free approach: tokens live in CSS vars so any consumer just imports a component.

## Showcase route
A second route `/showcase` renders a complete sample landing page (hero → logo cloud → feature grid → stats → CTA → footer) composed exclusively from `@/design-system` exports. Acts as both a live reference and a regression check that the system is truly reusable.

## Documentation surface
- Add a `### Design System` section in the brand guidelines page that lists each primitive/block with a tiny live demo and the import snippet (`import { Hero } from "@/design-system"`).
- Inline JSDoc on each component describing props.

## Out of scope
- No backend, no auth, no new dependencies.
- Visual identity (colors, fonts, gradients) stays exactly as already approved.
- Existing Nexora brand page content remains; it is only re-implemented on top of the new primitives.

## Deliverables
1. `src/design-system/**` with tokens, primitives, blocks, brand components, barrel export.
2. Refactored `src/routes/index.tsx` consuming the design system.
3. New `src/routes/showcase.tsx` demonstrating a landing page built purely from design-system imports.
4. Build passes; both routes render.
