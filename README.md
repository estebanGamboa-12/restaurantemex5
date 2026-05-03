# NOIR — Restaurant demo

Awwwards-style demo for a fine-dining restaurant in Madrid.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind · GSAP · Framer Motion · Lenis**.

## Run

```bash
npm install   # done
npm run dev   # http://localhost:3000
```

## What's inside

- Lenis smooth scroll
- Custom cursor (mix-blend-mode + magnetic interactions)
- Page loader with progress counter
- Hero with staggered word reveals
- Manifesto with parallax shift
- Asymmetric dish grid with image hover scale
- Editorial gallery with clip-path reveals
- Chef bio
- Journal preview + 3 full blog posts (`/journal/[slug]`)
- Marquee strips
- Reserve section (rust/red colour block)
- Reservation form (`/reserve`)
- 404 page (`/not-found`)
- SEO: per-page metadata, JSON-LD (Restaurant, Article, BreadcrumbList, Blog),
  sitemap, robots.

## Routes

- `/` — home
- `/menu` — full tasting menu (dark)
- `/journal` — journal listing
- `/journal/[slug]` — blog posts (3 included)
- `/reserve` — reservation form

## Fonts

Google Fonts via `next/font`: Inter Tight (display), Instrument Serif (italic
emphasis), JetBrains Mono (UI labels).
