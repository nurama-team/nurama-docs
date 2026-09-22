# AGENTS.md — nurama-docs

Guidance for AI coding agents working in this repository (the public developer portal).

## What this repo is

A Fumadocs (Next.js, static export) site. Two kinds of content:

- **Hand-written** MDX under `content/docs/` (overview, getting started, guides) plus `content/api/index.mdx` and `content/api/meta.json` (the REST section's intro and ordering). Edit freely.
- **Generated** content under `content/generated/`, pushed by the `nurama` monorepo on each production release and **never edited here**. `scripts/generate.mjs` turns it into MDX under `content/{websocket,sdk,mcp}/`, tag-folder `meta.json` files under `content/api/*/`, and one OpenAPI document per operation under `.generated/openapi/`; the REST reference is rendered by Fumadocs OpenAPI as virtual pages from those files. All of that output is gitignored and rebuilt by `pnpm generate` (run automatically before `dev` and `build`).

Each section is a separate loader in `lib/source.ts` and a separate route under `app/docs/` (`(guides)`, `reference/api`, `reference/websocket`, `reference/sdk`, `reference/mcp`), all sharing `lib/section-route.tsx` and `components/section-layout.tsx`. Keep it that way: one combined tree would put the whole site's navigation into every page.

If a generated page is wrong, the fix belongs in the monorepo source (Joi schema or `.doc.yml`, `websocket.yml`, SDK JSDoc, MCP tool definition) or, when the rendering itself is wrong, in `scripts/generate.mjs`.

## Commands

```bash
pnpm install
pnpm generate      # derive reference pages from content/generated
pnpm dev           # generate + next dev
pnpm build         # generate + next build (static export to out/)
pnpm lint          # eslint (must exit 0)
pnpm types:check   # next typegen && tsc --noEmit (must exit 0)
```

CI (`.github/workflows/verify.yml`) runs lint, typecheck and build on every pull request and fails any PR that touches `content/generated`.

## Conventions

- MDX pages need `title` and `description` frontmatter. Use Fumadocs components already in the default set (`Callout`, `Cards`, `Card`); import others explicitly.
- Link between pages with absolute paths (`/docs/...`); sections are separate loaders, so relative links do not resolve across them. The reference sections live at `/docs/reference/{api,websocket,sdk,mcp}`.
- Generated MDX must be safe for MDX: `scripts/generate.mjs` escapes `<`, `{` and `}` outside code. Keep that behaviour when changing the generators.
- Keep the site static: no server-only routes beyond the build-time ones that already exist (`llms.txt`, `llms-full.txt`, `llms.mdx/*`, `api/search`). Anything dynamic breaks `output: 'export'`.
- The playground on API pages calls `api.nurama.com` from the browser; it needs CORS to allow this origin. That is an API-side setting, not something to work around here.

## Deploy

`.github/workflows/deploy.yml` builds on pushes to `main` and runs `wrangler deploy` (Cloudflare Workers static assets, `wrangler.jsonc`). Needs `secrets.CLOUDFLARE_API_TOKEN` and `vars.CLOUDFLARE_ACCOUNT_ID`.
