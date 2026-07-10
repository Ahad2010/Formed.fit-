# FORMED — Private Personal Training

A pixel-matched Next.js rebuild of [formed.fit](https://www.formed.fit) — private, in-home personal training for busy professionals in Tampa Bay.

Built section-by-section against the live site using DevTools/WhatFont inspection to match exact typography, spacing, and color values.

## Tech Stack

- **[Next.js 16](https://nextjs.org)** — App Router, Turbopack
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** — CSS-first config via `@theme` in `globals.css` (no `tailwind.config.ts`)
- **[next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** — Cormorant Garamond (display) + DM Sans (body), loaded via Google Fonts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
formed-fit/
├── app/
│   ├── fonts.ts          # Cormorant Garamond + DM Sans via next/font
│   ├── layout.tsx        # wires font CSS variables onto <html>
│   ├── globals.css       # Tailwind v4 import + @theme font tokens
│   └── page.tsx          # composes all sections
├── components/
│   ├── Header.tsx         # logo, nav, mobile hamburger menu
│   ├── Hero.tsx            # full-bleed hero with headline + CTAs
│   ├── TrustRow.tsx        # "Vetted Trainers / Equipment / Not a Marketplace"
│   ├── Effective.tsx       # "Simple. Consistent. Effective." — 3-step process
│   ├── Designed.tsx        # "Who It's For" — split image/copy section
│   ├── Handled.tsx         # "Why FORMED" — 6-item feature grid
│   ├── Membership.tsx      # pricing tiers + feature list + CTA
│   ├── GetStarted.tsx      # closing full-bleed CTA section
│   ├── Footer.tsx          # 4-column footer + social links
│   └── Button.tsx          # shared solid/outline button (used everywhere)
└── public/
    └── images/             # section background/photo assets
```

## Design System Notes

- **Typography scale** was measured directly off the live site with a font-inspector tool (WhatFont), not estimated — see the comment block at the top of each component for the exact font, weight, size, and line-height used.
- **Colors** are mostly near-black (`#0C0C0B`) on cream (`#F3F0E9` / `#F5F2EC`) for light sections, and cream text on near-black (`#111110`) for dark sections. A few accent colors (terracotta labels, muted grays) are flagged inline where the exact hex couldn't be confirmed from a screenshot — grep for "flagged assumption" in component comments if refining further.
- **Button system** (`Button.tsx`) is the single source of truth for both button variants (`solid` / `outline`) — sharp corners, uppercase, wide letter-spacing. Update it once to change buttons sitewide.
- All images use `next/image` with `fill` + an `overflow-hidden` wrapper rather than fixed `width`/`height` props, to avoid Next.js aspect-ratio warnings.

## Known Gaps / TODO

- Services, About, FAQ, and individual application-flow pages are not yet built — only the homepage.
- A few color values (see component comments) are best-effort matches pending a fresh WhatFont capture.
- Social icons in the footer are hand-drawn SVG approximations, not the real site's exact icon assets.
