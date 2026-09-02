# How to configure the kb-query MCP server

Everything needed to stand this up, connect a client (local or cloud), and
keep it deploying itself. Five parts, in order:

1. [Set the access token](#1-set-the-access-token) — required, the server is fail-closed
2. [Connect a client](#2-connect-a-client)
3. [Remote and cloud sessions](#3-remote-and-cloud-sessions) — cloud egress is allowlisted; this is not optional there
4. [Auto-deploy from GitHub](#4-auto-deploy-from-github)
5. [Verify](#5-verify) / [Troubleshooting](#troubleshooting)

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
> account. The account now has the `edventures.pet` zone, but no custom MCP
> hostname or Access policy is deployed; moving from `workers.dev` therefore
> remains a separate gated infrastructure change.

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

## 3. Remote and cloud sessions

A cloud session — Claude Code on the web, `claude --cloud`, a routine, the
mobile or desktop app — runs in a cloud environment with **an outbound
allowlist**, not open internet. `kb-mcp.no-trbl-2-u.workers.dev` is not on the
default list, so a session at the default **Trusted** level cannot reach this
server at all. Egress has to be solved before authentication ever matters.

Two ways to do it. They are alternatives, not steps.

### Option A — API credential (recommended)

Anthropic's agent proxy attaches the token to requests for the hosts you list,
*after* each request leaves the session's VM.

| Field | Value |
|---|---|
| Where | [claude.ai/code](https://claude.ai/code) → edit an **existing** environment → **API credentials** |
| Credential type | `Bearer` (the default) |
| Name | anything, e.g. `KB MCP` |
| Allowed websites | `kb-mcp.no-trbl-2-u.workers.dev` |
| Custom headers | Name `Authorization`, Prefix `Bearer`, Value = the token |

Two properties make this the better option:

- **The token never reaches Claude**, the commands it runs, or the session's
  environment variables. It cannot leak through a transcript or a printed `env`.
- **It opens egress by itself.** Sessions reach a credential's hosts even when
  the environment's network access level would not otherwise allow them, so no
  allowlist edit is needed.

Constraints worth knowing first: it needs an organization admin role (on Pro
and Max you hold it in your own organization), it exists only on
Anthropic-hosted environments, and you add it from the editor of an environment
that **already exists** — the new-environment dialog does not offer it. There is
no edit; to change a credential, delete it and add it again.

Because the token never enters the session environment, a `.mcp.json` that
interpolates `${KB_MCP_TOKEN}` has nothing to expand and would send the literal
string. Omit the `headers` block entirely and let the proxy supply it.

### Option B — environment variable plus a network allowlist

Set the environment's network access to **Custom**, add
`kb-mcp.no-trbl-2-u.workers.dev` to the allowlist, and add the token to the
environment's variables in `.env` format:

```
KB_MCP_TOKEN=<token>
```

`.mcp.json` then expands `${KB_MCP_TOKEN}` exactly as it does locally.

The cost is exposure. The environment-variable box is explicit that **anyone
who uses the environment can read the values**, and every command Claude runs
can read them too. You would be spreading a live credential to produce a header
that Option A attaches invisibly. Prefer Option A unless a constraint above
rules it out.

### Migrating a consumer off the old stdio server

A repo that predates the hosted server has an entry like this, which spawns a
script that **no longer exists** — `scripts/kb-mcp-server.mjs` was deleted when
the Worker replaced it, so a synced `kb/` no longer contains it:

```json
"kb-query": {
  "type": "stdio",
  "command": "node",
  "args": ["kb/scripts/kb-mcp-server.mjs", "--root", "kb"]
}
```

Replace it with the HTTP form:

```json
"kb-query": {
  "type": "http",
  "url": "https://kb-mcp.no-trbl-2-u.workers.dev/mcp",
  "headers": {
    "Authorization": "Bearer ${KB_MCP_TOKEN}"
  }
}
```

Under Option A, drop the `headers` block — the proxy supplies it.

This failure mode is worth recognising because it mimics every other one. The
old server is missing rather than unreachable, so a full network allowlist and
a correct token change nothing: the session never gets as far as a request.
`claude mcp list` names it directly, printing `✘ Failed to connect` against
`kb-query` while every other server connects.

---

## 4. Auto-deploy from GitHub

Cloudflare dashboard → **Workers & Pages → kb-mcp → Settings → Build**, then
*Connect a repository*.

| Field | Value |
|---|---|
| Git account | `no-trbl-2-u` |
| Repository | `game-knowledge-base` |
| Production branch | `main` |
| Enable Preview builds | **unchecked** (see below) |
| Build command | `npm ci && npm run build` |
| Deploy command | `npx wrangler deploy && node scripts/smoke.mjs --require-auth` |
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
  are readable or the tools answer. `--require-auth` makes a missing token a
  failure rather than a skipped half — in a pipeline, the checks being skipped
  are exactly the ones worth running.
- **`KB_MCP_TOKEN` must be a *build* variable, not a runtime one.** Cloudflare
  keeps the two environments separate in both directions: build variables are
  not readable at runtime, and **runtime secrets are not exposed to the build or
  deploy commands**. Add it under **Settings → Build → Build variables and
  secrets**. Putting it under *Runtime variables and secrets* leaves the deploy
  unable to read it, and puts a second live copy of the secret somewhere nothing
  uses. `MCP_TOKEN` is the opposite case: it belongs at runtime, because the
  Worker reads it on every request.

Deploys do not touch secrets, so `MCP_TOKEN` persists across all of them.

### Manual deploy

Auto-deploy is a convenience, not a dependency:

```bash
cd mcp-server
npm run deploy      # build + wrangler deploy + smoke
```

---

## 5. Verify

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
| `✘ Failed to connect` on `kb-query` | `.mcp.json` still spawns the deleted stdio server | Replace with the HTTP entry ([migration](#migrating-a-consumer-off-the-old-stdio-server)) |
| Cloud session cannot reach the server | Cloud egress is allowlisted; `workers.dev` is not on the default list | Add an API credential, or set Custom network access ([section 3](#3-remote-and-cloud-sessions)) |
| Cloud session sends `Bearer ${KB_MCP_TOKEN}` literally | Variable absent from the session environment — expected under Option A | Drop the `headers` block and let the proxy attach it |
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
