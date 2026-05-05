# Repository Guidelines

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
