# kb-mcp — hosted MCP server for the OKF corpus

A Cloudflare Worker that serves this knowledge base over MCP Streamable HTTP.
It replaces the stdio server: no synced clone, no per-session process.

**Endpoint:** `https://kb-mcp.no-trbl-2-u.workers.dev/mcp` (bearer token required)
**Liveness:** `GET /health` — unauthenticated; reports build identity, not corpus content

**Setup and client wiring: [`how-to-configure.md`](how-to-configure.md).**

## Tools

| Tool | Answers |
|---|---|
| `kb_overview` | Every game with tags and doc counts, pattern docs, card-corpus stats. Start here. |
| `kb_find_games` | Games by mechanics slug and/or better-if label |
| `kb_search` | Regex over bodies and frontmatter; scopes `boardgames` / `cards` / `other` / `all` |
| `kb_read_doc` | One document verbatim, capped at 64KB |
| `kb_cards` | Dawncaster (1,692) or Slay the Spire (360) card records |
| `kb_keyword` | The 141-entry Dawncaster glossary |

## How it works

```
KnowledgeBase/  --build-assets.mjs-->  dist/kb/**            corpus (Static Assets)
                                       dist/index.json       manifest + game summary
                                       dist/search/*.txt     line-addressed body bundles
                                              |
                                       src/server.js         POST /mcp, JSON-RPC
```

Two constraints shape everything:

- **A Worker has no filesystem.** The corpus (2,989 files, ~22 MB) is far past
  the 3 MB script limit, so it ships as Static Assets and is read through the
  `ASSETS` binding. `run_worker_first: true` means nothing under `dist/` is
  served as a plain static file — the Worker sees every request.
- **A Worker cannot enumerate its assets binding.** It can only fetch a path it
  already knows. So every listing *and every body search* is precomputed by
  `scripts/build-assets.mjs`. This is the convention the corpus already uses
  for `INDEX.okf.md` and the card sidecars: derived, built, never hand-edited.

The server is **stateless** — no sessions, no SSE, no Durable Objects. It is
read-only, so there is no server-to-client stream to hold open.

### The search bundles

Each scope is flattened into one bundle of `<text>\t<doc id>\t<line number>`,
which the Worker fetches once per isolate and scans with a single global regex.
Both details were measured, not assumed:

| | |
|---|---|
| `split()` into 150k lines | ~20 ms CPU — over the Workers Free 10 ms budget |
| One global regex scan | ~0.7 ms |
| Path per line → numeric doc id | `cards` bundle 14.5 MB → 5.3 MB |

Text goes first on each line so `^` anchors mean what the caller intends. The
trade-off is that `$` cannot match end-of-line, since a metadata field follows;
the tool description says so. A hit landing inside that metadata is re-tested
against the text alone and dropped, so line numbers never surface as matches.

Only `.okf.md` is indexed. The stdio server also matched plain `.md`, which is
how operator-profile prose once answered corpus queries.

## Commands

```bash
npm run build     # regenerate dist/ from ../KnowledgeBase
npm test          # 36 unit, protocol and drift tests (no network, no build needed)
npm run dev       # local server on http://localhost:8787
npm run smoke     # probe a deployed server
npm run deploy    # build + deploy + smoke
```

## Tests

| File | Proves |
|---|---|
| `src/server.test.mjs` | Auth, protocol surface, all six tools, failure modes — against a stub `ASSETS` binding |
| `src/protocol.test.mjs` | A spec-following MCP client can complete a session: handshake order, `MCP-Protocol-Version`, exact id echo, every advertised tool callable |
| `src/fixture-drift.test.mjs` | The synthetic fixture still matches real `build-assets.mjs` output, and `wrangler.jsonc` still points at what the build produces. Skips without `dist/` |
| `scripts/build-assets.mjs` | Verifies its own output before finishing; refuses to emit artifacts the Worker could not trust |
| `scripts/smoke.mjs` | A *deployed* server is serving: assets uploaded, secret set, tools answering, and which commit is live |

The unit tests use a miniature fixture rather than the real corpus, so CI needs
no 22 MB build to test request handling. `fixture-drift.test.mjs` is what keeps
that shortcut honest.

`dist/` is gitignored — a 22 MB copy of the corpus does not belong in Git
history. It is rebuilt on every deploy, including automatic ones.

## Auth

**Fail closed.** Without an `MCP_TOKEN` secret the server answers `503` rather
than defaulting to public; an unconfigured server is a misconfigured one, not
an open one. With the secret set, `/mcp` requires
`Authorization: Bearer <token>`, compared in constant time.

`/health` stays unauthenticated so liveness checks and freshness crons work
without holding a secret. It reports whether the server is configured and which
build it is serving — commit, build time, doc count — and no corpus *content*:
no titles, no slugs, no paths. Those identity fields are already public in the
GitHub repository this corpus is published from.

Build identity exists because automatic deploys make "is production current?"
the interesting question. `npm run smoke` compares the live commit against
local `HEAD` and says which is which.

Cloudflare Access would be the better mechanism, but it cannot protect a
`workers.dev` hostname; it needs a custom domain on a zone in the account. The
account has the `edventures.pet` zone, but no custom MCP hostname or Access
policy is deployed yet. See
[`how-to-configure.md`](how-to-configure.md#1-set-the-access-token).

## Relationship to grep-first

The retired stdio server's design rule was "an ACCELERATOR, never a
dependency," and a remote server is a *harder* dependency than a local one —
it can be down, unreachable, or unauthorized. That rule still holds in
spirit: the hosted Worker is now the supported MCP retrieval surface, but
Axiomancer's synced `kb/` snapshot must keep resolving queries on its own as
a grep-first fallback whenever the Worker isn't. Nothing in the corpus
intake, validation, promotion, librarian, or audit pipeline calls the Worker.
