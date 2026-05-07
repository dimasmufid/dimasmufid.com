# Dimas Mufid — Blog

This repo powers my personal blog and build journal. I'm a data engineer who got tired of watching business teams wait on dashboards, so I'm building **Mark**, an AI business analyst that turns messy data into clear answers. I write here to share the process, the detours, and the lessons learned.

## Core positioning

This website is Dimas Mufid's founder business card. When someone discovers Dimas through Instagram, YouTube, search, or one of his projects, the site should quickly establish what he is currently building, why he is credible, and how to reach him.

Dimas is the founder/operator behind three active B2B projects. The site should make those projects visible and current, while showing that he is technical, hands-on, and understands the problems he talks about. The intended impression is: Dimas builds and operates serious B2B products, understands both the business and technical sides, and is the right person to contact when someone wants to work with one of those projects.

## What you'll find
- Build-in-public logs for Mark: from the [first pitch](/blog/mark-project) to the [agentic experiments](/blog/mark-agentic-plan) and [tech stack shifts](/blog/mark-tech-stack-change) as I figure out how to ship a reliable AI analyst.
- Notes from shipping: weekly evaluations, learning logs, and the messy middle of deciding what to cut or double down on.
- Data/AI engineering practice: BigQuery, FastAPI + Next.js, and patterns for turning raw data into narratives and visuals.
- Occasional stories from consulting at Entrefine and why I still prefer building scrappy, end-to-end systems.

## Tech stack
- [Astro 5](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/) + [TypeScript](https://www.typescriptlang.org/)
- Markdown/MDX content living in `src/content`
- RSS feed and sitemap generated out of the box
- Dark/light theme, minimal layout, no heavy JS frameworks

## Run it locally
```bash
pnpm install
pnpm run dev       # start the dev server at http://localhost:4321
```

Other scripts:
- `pnpm run build` — production build
- `pnpm run preview` — preview the built site
- `pnpm run lint` — lint the codebase

## Content structure
- Blog posts: `src/content/blog`
- Projects: `src/content/projects`
- Pages & layouts: `src/pages` and `src/layouts`

## Say hello
- X/Twitter: [@dimasmufid](https://x.com/dimasmufid)
- GitHub: [dimasmufid](https://github.com/dimasmufid)
- LinkedIn: [dimasmufid](https://www.linkedin.com/in/dimasmufid)
- Email: dimasmoveit@gmail.com
