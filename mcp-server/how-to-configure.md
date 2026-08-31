# How to configure the kb-query MCP server

Everything needed to stand this up, connect a client, and keep it deploying
itself. Four parts, in order:

1. [Set the access token](#1-set-the-access-token) — required, the server is fail-closed
2. [Connect a client](#2-connect-a-client)
3. [Auto-deploy from GitHub](#3-auto-deploy-from-github)
4. [Verify](#4-verify) / [Troubleshooting](#troubleshooting)

| | |
|---|---|
| **Endpoint** | `https://kb-mcp.no-trbl-2-u.workers.dev/mcp` |
| **Liveness** | `GET /health` — unauthenticated; build identity, no corpus content |
| **Auth** | `Authorization: Bearer <MCP_TOKEN>` |
| **Transport** | MCP Streamable HTTP, stateless |
| **Cloudflare account** | `no.trbl.2.u@gmail.com` — Worker `kb-mcp` |

---

## 1. Set the access token

The server is **fail-closed**: with no `MCP_TOKEN` secret it answers every
request with `503`, rather than defaulting to public. Nothing works until this
is done.

Generate a token — any high-entropy string. For example:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
```

Store it in your password manager, then set it on the Worker:

```bash
npx wrangler secret put MCP_TOKEN
```

Wrangler prompts for the value and does not echo it. Secrets survive
deployments, including automatic ones — you set this once, not per deploy.

To rotate: run the same command with a new value, then update every client.
There is no grace period; the old token stops working immediately.

> **Why a bearer token and not Cloudflare Access?**
> Access is the better mechanism — dashboard-managed service tokens, central
> revocation, blocking at the edge before the Worker runs. It **cannot protect
> a `workers.dev` hostname**; it needs a custom domain on a zone in the
> account. There is no zone on this account today. If you add a domain, moving
> to Access is a clean swap.

---

## 2. Connect a client

The token belongs in an environment variable, never in a committed file.

There are two names, holding the same value, and mixing them up is the most
common way to get stuck:

| Name | Lives | Set by |
|---|---|---|
| `MCP_TOKEN` | On the Worker, at Cloudflare | `wrangler secret put` (step 1) |
| `KB_MCP_TOKEN` | In your shell or a local `.env` | You, per machine |

The server needs one to check against; the client needs one to send.

### Where to put `KB_MCP_TOKEN`

Either a shell export, or a **gitignored** `.env` at the repo root or in
`mcp-server/`:

```
KB_MCP_TOKEN=<token>
```

`scripts/smoke.mjs` reads either location, preferring `mcp-server/.env`, and a
real environment variable always wins. Node does **not** load `.env` on its own,
so other tools need `node --env-file=.env ...` unless they handle it themselves.
`.env` is already covered by `.gitignore` — confirm with `git check-ignore -v .env`
before writing a secret into a new one.

### Claude Code

```bash
export KB_MCP_TOKEN="<token>"
claude mcp add --transport http kb https://kb-mcp.no-trbl-2-u.workers.dev/mcp \
  --header "Authorization: Bearer ${KB_MCP_TOKEN}"
```

### Any repo, via `.mcp.json`

Committable — it references the variable rather than the value:

```json
{
  "mcpServers": {
    "kb": {
      "type": "http",
      "url": "https://kb-mcp.no-trbl-2-u.workers.dev/mcp",
      "headers": {
        "Authorization": "Bearer ${KB_MCP_TOKEN}"
      }
    }
  }
}
```

Each machine sets `KB_MCP_TOKEN` in its own shell profile or `.env`. A repo
with the variable gets a working server; one without gets a `401`.

### Raw HTTP

```bash
curl -s https://kb-mcp.no-trbl-2-u.workers.dev/mcp \
  -H "Authorization: Bearer ${KB_MCP_TOKEN}" \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

---

## 3. Auto-deploy from GitHub

Cloudflare dashboard → **Workers & Pages → kb-mcp → Settings → Build**, then
*Connect a repository*.

| Field | Value |
|---|---|
| Git account | `no-trbl-2-u` |
| Repository | `game-knowledge-base` |
| Production branch | `main` |
| Enable Preview builds | **unchecked** (see below) |
| Build command | `npm ci && npm run build` |
| Deploy command | `npx wrangler deploy && node scripts/smoke.mjs` |
| **Advanced → Root directory** | **`mcp-server`** |

Three of those are easy to get wrong:

- **Root directory is required.** `wrangler.jsonc` lives in `mcp-server/`, not
  at the repo root. Without it the build cannot find the config. Cloudflare
  still clones the whole repository, so `build-assets.mjs` reaching
  `../KnowledgeBase` works normally.
- **There is a build**, even though the field is marked optional. `dist/` is
  generated and deliberately gitignored — a 22 MB copy of the corpus does not
  belong in Git history. Leaving the build command empty deploys a Worker with
  no assets.
- **Preview builds off.** Every branch push would upload ~22 MB of assets for
  a preview URL. Enable it later if you want per-branch previews.
- **Chain the smoke check onto the deploy command.** `wrangler deploy` alone
  reports success as soon as the upload finishes; it cannot tell you the assets
  are readable or the tools answer. For the check to authenticate, add
  `KB_MCP_TOKEN` as a build-time environment variable (Settings → Build →
  Variables) — without it the run still verifies liveness and freshness, just
  not the tool surface.

Deploys do not touch secrets, so `MCP_TOKEN` persists across all of them.

### Manual deploy

Auto-deploy is a convenience, not a dependency:

```bash
cd mcp-server
npm run deploy      # build + wrangler deploy + smoke
```

---

## 4. Verify

```bash
curl -s https://kb-mcp.no-trbl-2-u.workers.dev/health
```

```json
{"ok":true,"server":{"name":"kb-query","version":"2.0.0"},"configured":true,
 "build":{"commit":"c82ed09...","built_at":"2026-08-31T20:05:42.103Z","docs":2765}}
```

`configured: false` means the `MCP_TOKEN` secret is missing — go back to
step 1. `build.commit` says which commit is live: compare it against
`git rev-parse origin/main` to tell whether the last merge actually deployed.
`npm run smoke` does that comparison for you. Then check the tool surface:

```bash
curl -s https://kb-mcp.no-trbl-2-u.workers.dev/mcp \
  -H "Authorization: Bearer ${KB_MCP_TOKEN}" \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"kb_overview","arguments":{}}}'
```

Six tools should be available: `kb_overview`, `kb_find_games`, `kb_search`,
`kb_read_doc`, `kb_cards`, `kb_keyword`.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `503 Server unconfigured` | No `MCP_TOKEN` secret | `npx wrangler secret put MCP_TOKEN` |
| `401 Unauthorized` | Missing/wrong header | Header must be exactly `Authorization: Bearer <token>` |
| `401` after `.mcp.json` edit | `${KB_MCP_TOKEN}` unset in that shell | Export it before launching the client |
| `KB_MCP_TOKEN is not set` from the smoke check | Client-side variable missing — unrelated to the Worker's secret | Export it, or add it to a gitignored `.env` (see step 2) |
| Smoke check says `unauthenticated checks passed` | It ran, but skipped the tool surface for lack of a token | Same fix; a clean run ends `all checks passed` |
| Client shows no tools | Hitting `/` instead of `/mcp` | URL must end in `/mcp` |
| Corpus is stale | No deploy since the merge | Compare `build.commit` on `/health` against `origin/main`; re-run the build or check Workers Builds |
| `build` is `null` on `/health` | Deployed Worker predates build identity, or assets failed to upload | Redeploy |
| Build fails: config not found | Root directory unset | Set it to `mcp-server` |
| Deployed Worker has no corpus | Build command empty | `npm ci && npm run build` |

### Local development

```bash
cd mcp-server
npm install
npx wrangler dev --var MCP_TOKEN:localdev
```

Serves on `http://localhost:8787` with a throwaway token. Never use a real
token as a `--var`; it lands in your shell history.

---

## Notes on cost and limits

The corpus deploys as 2,990 static assets (~22 MB) against a Workers Static
Assets ceiling of 20,000 files, so there is room to grow well past the current
43 games.

Searches over the `cards` scope decode a 5.3 MB bundle on a cold isolate —
measured at roughly 3 ms of CPU, inside the Workers Free 10 ms per-request
budget, and warm for every subsequent request on that isolate. If the corpus
grows enough to push past it, Workers Paid raises the CPU limit substantially.
