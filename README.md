# Nurama developer portal

Source for [docs.nurama.com](https://docs.nurama.com): guides and generated reference for the Nurama REST API, WebSocket events, JavaScript SDK and MCP server. Built with [Fumadocs](https://fumadocs.dev) on Next.js, exported statically and served from Cloudflare Workers.

## Layout

| Path | What it is | Who edits it |
| --- | --- | --- |
| `content/docs/**` | Hand-written guides (MDX): overview, getting started, guides | People, via pull requests |
| `content/api/index.mdx`, `content/api/meta.json` | The REST reference's intro page and ordering | People |
| `content/generated/**` | OpenAPI and AsyncAPI documents, SDK reference markdown, MCP tool catalogue | The `nurama` monorepo's `publish-docs-content` workflow, on every production release |
| `content/{websocket,sdk,mcp}/**`, `content/api/*/`, `.generated/**`, `public/*.json` | Pages and files derived from `content/generated` by `scripts/generate.mjs` | Nobody: regenerated on every build, gitignored |

Each section (guides, REST API, WebSocket, SDK, MCP) is its own Fumadocs loader and route under `app/docs/`, so a page only ships its own section's navigation. The REST reference has no MDX files at all: Fumadocs renders it as virtual pages from `.generated/openapi/<tag>/<operation>.json` (one small document per operation, see `lib/source.ts`).

## Develop

```bash
pnpm install
pnpm dev        # runs scripts/generate.mjs, then next dev
```

`pnpm build` produces the static site in `out/`; `pnpm lint` and `pnpm types:check` run in CI on every pull request.

## Deploy

Pushes to `main` build and deploy through `.github/workflows/deploy.yml` (Cloudflare Workers static assets, configured in `wrangler.jsonc`). Required repository configuration: `secrets.CLOUDFLARE_API_TOKEN` and `vars.CLOUDFLARE_ACCOUNT_ID`.

## Contributing

Fix a guide by editing its MDX and opening a pull request. To fix generated content, change the source in the monorepo instead: the endpoint's Joi schema or `.doc.yml` for the REST reference, `websocket.yml` for events, the SDK's JSDoc for the SDK reference, or the tool definition for MCP. Pull requests that touch `content/generated` are rejected by CI.

## License

Apache-2.0. See `LICENSE`.
