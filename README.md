# Portfolio

Personal developer portfolio for [Marvy Nwaokobia](https://github.com/MarvyNwaokobia) — full-stack & protocol engineer. A single-page site covering skills, featured projects, and contact info.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Fonts via `next/font/google`: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (headings, labels, code) + [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) (body)

No backend, no database, no external APIs — fully static, deployable anywhere that serves a Next.js app.

## Project structure

```
src/
├── app/
│   ├── layout.tsx     # fonts, metadata, root HTML shell
│   ├── page.tsx        # assembles the page from section components
│   └── globals.css     # design tokens (colors) + base styles
├── components/
│   ├── Nav.tsx          # sticky header with anchor links
│   ├── Hero.tsx          # intro / tagline / CTAs
│   ├── Skills.tsx         # skills grid, reads from data/projects.ts
│   ├── Projects.tsx        # featured projects grid with category filter
│   ├── About.tsx            # longer-form bio
│   ├── Contact.tsx           # GitHub / Twitter links
│   └── Footer.tsx
└── data/
    └── projects.ts    # single source of truth for project + skill content
```

To add, remove, or edit a project or skill, edit `src/data/projects.ts` — nothing else needs to change.

## Design system

Dark (OLED-style) theme, defined as CSS custom properties in `src/app/globals.css` and exposed to Tailwind via `@theme inline`:

| Token | Value | Use |
|---|---|---|
| `--background` | `#020617` | page background |
| `--card` | `#0e1223` | project/skill cards |
| `--foreground` | `#f8fafc` | primary text |
| `--muted-foreground` | `#94a3b8` | secondary text |
| `--border` | `#283044` | card/section borders |
| `--accent` | `#22c55e` | links, active states, CTA |

Respects `prefers-reduced-motion` and uses visible focus rings (`:focus-visible`) for keyboard navigation.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (Next.js will pick the next free port if 3000 is taken).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Deployment

Not yet deployed. The natural fit is [Vercel](https://vercel.com/new) given the Next.js stack — connect this repo and it deploys with zero config.
