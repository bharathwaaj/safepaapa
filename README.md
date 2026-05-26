# SafePaapa — குழந்தைகளை பாதுகாப்போம்

Child safety awareness for Tamil Nadu — for parents, teachers, and children.

**[safepaapa.in](https://safepaapa.in)**

## What it is

A Tamil-language resource for child protection awareness, built in response to incidents like the Sulur case. It provides:

- Situation guides (stranger danger, online safety, unsafe touch)
- Separate sections for parents, teachers, children, and schools
- Shareable wisdom cards via WhatsApp
- Emergency contacts and POCSO resources
- Interactive scenarios to prepare children for unsafe situations

## Tech stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Cloudflare Workers](https://workers.cloudflare.com) — deployment

## Development

```sh
pnpm install
pnpm dev        # dev server at localhost:4321
pnpm build      # production build to ./dist/
pnpm preview    # build + wrangler dev (Cloudflare Workers preview)
pnpm deploy     # build + wrangler deploy
```

## Project structure

```
src/
├── pages/          # index, parents, children, teachers, schools, resources, emergency
├── components/     # SituationCard, Scenario, TinyWisdom, ShareCard, …
├── layouts/        # Layout.astro
├── data/           # content: situations, scenarios, wisdom cards, safety rules, …
└── styles/         # global.css
public/             # images, logo, OG images
```
