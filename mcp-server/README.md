# kb-mcp — hosted MCP server for the OKF corpus

A Cloudflare Worker that serves this knowledge base over MCP Streamable HTTP.

**Live:** `https://kb-mcp.no-trbl-2-u.workers.dev/mcp`
**Liveness:** `GET /health`

Status: **pipeline proof.** Two tools (`kb_overview`, `kb_read_doc`) prove the
whole path — build → assets → Worker → MCP client. The remaining tools
(`kb_find_games`, `kb_search`, `kb_cards`, `kb_keyword`) are not ported yet.

## How it works

```
KnowledgeBase/  --build-assets.mjs-->  dist/kb/**      (Workers Static Assets)
                                       dist/index.json (manifest + game summary)
                                              |
                                       src/index.js    (POST /mcp, JSON-RPC)
```

Two constraints shape the design:

- **A Worker has no filesystem.** The corpus (2,989 files, ~22 MB) is far past
  the 3 MB script limit, so it ships as Static Assets and is read through the
  `ASSETS` binding. `run_worker_first: true` means nothing under `dist/` is
  served as a plain static file — the Worker sees every request.
- **A Worker cannot enumerate its assets binding.** It can only fetch a path it
  already knows. So every listing — the file manifest, the per-game frontmatter
  summary — is precomputed by `scripts/build-assets.mjs` into `dist/index.json`
  and fetched once per isolate. This is the same convention the corpus already
  uses for `INDEX.okf.md` and the card sidecars: derived, built, never
  hand-edited.

The server is **stateless** — no sessions, no SSE, no Durable Objects. It is
read-only, so there is no server-to-client stream to hold open. Each POST
carries one JSON-RPC message and gets one JSON response back.

## Commands

```bash
npm run build     # regenerate dist/ from ../KnowledgeBase
npm run dev       # local server on http://localhost:8787
npm run deploy    # build + deploy to Cloudflare
```

## Connecting a client

Claude Code:

```bash
claude mcp add --transport http kb https://kb-mcp.no-trbl-2-u.workers.dev/mcp
```

Or in `.mcp.json`:

```json
{
  "mcpServers": {
    "kb": {
      "type": "http",
      "url": "https://kb-mcp.no-trbl-2-u.workers.dev/mcp"
    }
  }
}
```

## Auth

Currently **open** — the corpus is a public GitHub repo, so the exposure is
bandwidth rather than secrets. The Worker already honours an optional shared
secret; setting it turns the gate on:

```bash
npx wrangler secret put MCP_TOKEN
```

Clients then send `Authorization: Bearer <token>`.

## Freshness

`dist/` is built from the working tree and is gitignored. Today a deploy is
manual, so the live corpus is only as fresh as the last `npm run deploy`.
Wiring a deploy to merges on `main` needs a `CLOUDFLARE_API_TOKEN` repo secret
(scoped to Workers Scripts:Edit) — separate from the local OAuth login.
