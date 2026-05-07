# Repository Guidelines

## Website Positioning

This is Dimas Mufid's personal landing page and founder business card, not just a generic blog or portfolio. People may arrive here after seeing Dimas in content about his projects on Instagram, YouTube, search, or other channels.

The site should quickly communicate:

- What Dimas is currently working on.
- That Dimas is the founder/operator behind three active B2B projects in `src/content/projects`.
- That Dimas is credible, technical, and hands-on enough to know what he is talking about.
- That visitors can reach Dimas when they want to work with, partner with, buy from, or discuss one of those projects.

Keep the intended impression clear in design, copy, and content decisions: Dimas builds and operates serious B2B products, understands both the business and technical sides, and gets his hands dirty.

## Blog Writing Pattern

Blog posts should read like a founder build journal plus technical decision log. Preserve Dimas's voice: direct, reflective, practical, and honest about learning while building. The writing should feel like someone documenting real work in progress, not polished corporate marketing.

Strong posts usually follow this arc:

- Start with personal project context: what Dimas is building, what stage the project is in, or what problem appeared during the work.
- Explain the pain before the solution: describe what was hard, blocked, confusing, too slow, or overcomplicated.
- Compare options and tradeoffs before making a decision.
- Show concrete technical artifacts when useful: folder structures, code snippets, architecture diagrams, screenshots, Dockerfiles, implementation details, or tool choices.
- Connect technical decisions back to product or founder lessons.
- End with a practical reflection: what changed, what was learned, and what Dimas will do next.

Recurring themes to preserve:

- Dimas is technical and hands-on, but does not worship complexity.
- Market validation, user value, and shipping speed matter more than elegant architecture.
- Boring technology is acceptable when it helps the product reach users faster.
- The strongest credibility signal is showing the messy real process, then extracting a clear lesson from it.

When drafting new posts, prefer this structure: `Context -> Problem -> Options considered -> Decision -> Implementation details -> What changed -> Founder lesson`.

## Project Structure & Module Organization

This is an Astro 5 personal blog and portfolio site. Routes live in `src/pages`, page shells in `src/layouts`, UI components in `src/components`, global styles in `src/styles/global.css`, and utilities in `src/lib`. Content collections are under `src/content`: blog posts in `src/content/blog/<slug>/index.md` and projects in `src/content/projects/<slug>/index.md`. Static assets live in `public`; imported SVG icons live in `src/assets/icons`. Cloudflare Worker deployment code is in `src/worker.ts` with settings in `wrangler.jsonc`.

## Build, Test, and Development Commands

Use pnpm, as pinned in `package.json`.

- `pnpm install` installs dependencies from `pnpm-lock.yaml`.
- `pnpm run dev` starts Astro locally at `http://localhost:4321`.
- `pnpm run dev:network` exposes the dev server on the local network.
- `pnpm run build` runs `astro check` and creates the production build.
- `pnpm run preview` serves the built site locally.
- `pnpm run lint` checks ESLint rules across the repo.
- `pnpm run lint:fix` applies safe ESLint fixes.
- `pnpm run deploy:dry-run` validates the Cloudflare deploy path without publishing.

## Coding Style & Naming Conventions

Write TypeScript, Astro, and JavaScript as ES modules. ESLint requires semicolons and double quotes, with template literals allowed when useful. Keep component names PascalCase, such as `Header.astro`, route files lowercase, and content slugs kebab-case. Prefer helpers from `src/lib/utils.ts` and constants from `src/consts.ts` before adding shared code. Keep Tailwind classes colocated with markup unless a style is truly global.

## Testing Guidelines

There is no dedicated test suite. Treat `pnpm run build` as the primary correctness check because it includes Astro type and content validation. Run `pnpm run lint` before submitting changes. For visual changes, also run `pnpm run dev` or `pnpm run preview` and inspect affected pages such as `/`, `/blog`, `/projects`, and changed detail pages.

## Commit & Pull Request Guidelines

Recent history uses short imperative commits, for example `Configure Cloudflare Workers deployment` and `Update Mark sandbox post`. Keep commits focused on one logical change. Pull requests should include a summary, validation commands, linked issues when applicable, and screenshots for visible UI or layout changes. Note Cloudflare configuration changes explicitly.

## Content & Configuration Tips

Content frontmatter must match `src/content/config.ts`. Blog posts require `title`, `description`, and `date`; optional fields include `tags` and `draft`. Projects require `title`, `description`, `date`, and `featured`, with optional `demoURL`, `demoImage`, and `repoURL`. Do not commit generated folders such as `dist`, `.astro`, `.wrangler`, or `node_modules`.
