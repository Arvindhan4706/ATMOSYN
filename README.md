# Atmosyn Website

Official website for Atmosyn — Nature × Technology × Innovation.
Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

## Getting started

```bash
npm install        # install dependencies (run from native Windows, not WSL)
cp .env.example .env.local   # then fill in the values
npm run dev        # start development server on http://localhost:3000
```

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | recommended | Canonical site URL used in metadata, sitemap, and robots |
| `COLLABORATION_WEBHOOK_URL` | **yes (for the form)** | Where collaboration inquiries are delivered (Slack/Discord/Formspree/Make/own API). While unset, `/api/collaboration` responds `503` honestly instead of pretending the submission was stored |

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (flat config, `eslint.config.mjs`) |
| `npm run lint:fix` | ESLint with autofix |
| `npm run typecheck` | TypeScript type checking (`tsc --noEmit`) |

## Project structure

```
src/
├── app/            # App Router: pages, API routes, sitemap.ts, robots.ts, icon.svg
├── components/     # home/, layout/, collaboration/, work/, ui/
├── data/           # Typed static content (site config, pillars, projects, team, research themes)
├── hooks/          # useScrollAnimation (IntersectionObserver reveal)
├── lib/            # Shared validation schemas (Zod)
└── styles/         # globals.css (Tailwind 4 @theme tokens + editorial utilities)
public/             # Static assets (logo.svg, ...)
docs/               # Internal reference documents
```

## Content & data

All site copy that changes over time lives in `src/data/` as typed modules.
When content changes substantively, bump `siteConfig.lastContentUpdate` so the
sitemap reports a meaningful `lastModified` date.

## Deployment

- **Production:** push to `main` (GitHub Actions `deploy.yml` builds, lints, and deploys to Vercel).
- **Preview:** pull requests deploy to a Vercel preview URL via `ci.yml` (same-repo PRs only — forks do not receive secrets).
- **CI:** lint → typecheck → build → advisory axe-core accessibility audit (results uploaded as an artifact).

## Editorial policy

This site deliberately avoids unverifiable claims. Exploratory work is labeled
as such, and no fabricated metrics, testimonials, or credentials are to be
added. See the Scientific Integrity section on `/about`.
