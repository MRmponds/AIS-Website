# Advanced Intelligent Systems (AIS) — Website

Premium marketing site for Advanced Intelligent System Limited — a Lusaka-based
software, data and IT company serving Zambian SMEs.

## Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS 3.4** (design tokens in `tailwind.config.ts`)
- **Framer Motion** (scroll reveals, hero motion) — respects `prefers-reduced-motion`
- **lucide-react** icons

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build a static site

```bash
npm run build      # outputs a static site to ./out
```

Deploy the `out/` folder to any static host (Netlify, Vercel, cPanel, S3…).

> Do not run `npm run build` while `npm run dev` is live — they share `.next`.
> Stop the dev server first.

## Where to edit content

Everything visitor-facing lives in **`src/lib/site.ts`** — company details,
services, capabilities, clients, stats and contact info. Update copy there
without touching components.

Brand colours and motion live in **`tailwind.config.ts`** and
**`src/app/globals.css`** (CSS design tokens).

## Sections (`src/components/home/`)

Hero → tech marquee → Stats → Services → Capabilities → Approach →
Clients & compliance → CTA → Contact, wrapped by `Nav` and `Footer`.

## Assets

- `public/assets/` — AIS's own 3D service icons (from the company profile).
- `public/clients/` — client logos (Jianfeng, Cypeed, DMedia Films).
