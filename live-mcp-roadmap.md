# Live MCP server — roadmap

What remains for `mcp-server/` (the hosted `kb-query` Cloudflare Worker).
Steps only you can do are tagged **`needs human`** — credentials, dashboard
settings, purchases, and judgement calls. Everything untagged is ordinary work
an agent session can pick up.

Setup instructions live in [`mcp-server/how-to-configure.md`](mcp-server/how-to-configure.md);
this file tracks what is *not done yet*.

---

## Where it stands

| | |
|---|---|
| Endpoint | `https://kb-mcp.no-trbl-2-u.workers.dev/mcp` — deployed, all six tools |
| State | **Live, private and self-deploying.** `MCP_TOKEN` set; merges to `main` deploy automatically |
| Deploys | Workers Builds connected to `main`; first automatic build not yet observed |
| Tests | 36 unit/protocol/drift tests + build invariants + a post-deploy smoke check, gated by the `validate` required check |
| Freshness | `/health` reports the commit it is serving; `npm run smoke` compares it to local `HEAD` |

---

## Phase 0 — Activation — **substantially done**

- [x] Token generated and stored by the operator; an agent never created or held it.
- [x] `MCP_TOKEN` secret installed on the Worker — `/health` reports `"configured":true` and unauthenticated requests get `401`.
- [x] Workers Builds connected: build `npm ci && npm run build`, preview builds off, root directory `mcp-server`.
- [x] Auto-deploy proven: merging #64 produced a Workers Build ~45s later serving that exact commit, with the SHA supplied by `WORKERS_CI_COMMIT_SHA` rather than a local git fallback.
- [x] Deploy command chained to the smoke check with `--require-auth`.
- [ ] **`needs human`** — Move `KB_MCP_TOKEN` from *Runtime variables and secrets* to **Settings → Build → Build variables and secrets**, then delete the runtime copy. Runtime secrets are not exposed to build or deploy commands, so the smoke check cannot currently authenticate. `MCP_TOKEN` stays a runtime secret.
- [x] `KB_MCP_TOKEN` exported locally (via a gitignored `.env`, which the smoke check now reads).

---

## Phase 1 — Adoption

- [ ] Add the `.mcp.json` block from `how-to-configure.md` to the Axiomancer repo, which references `${KB_MCP_TOKEN}` and is therefore safe to commit.
- [ ] **`needs human`** — Call `kb_overview` from a real MCP client and confirm all six tools appear. `src/protocol.test.mjs` now proves a spec-following client *can* complete a session, so a failure here is the host's to explain — but no in-repo test can stand in for a particular client.
- [ ] **`needs human`** — Decide whether Axiomancer keeps `scripts/kb-sync.mjs`: the hosted server removes the need for a synced clone, but grep-first is the documented fallback and dropping the sync removes it.
- [ ] Update the Axiomancer `kb-query` skill so it prefers the hosted server and falls back to grep when the server is unreachable or unauthorized.

---

## Phase 2 — Close the engineering gaps — **done**

Was the honest weak point: no automated test of any kind, and a broken deploy
caught only by someone trying to use the server.

- [x] Logic extracted to `src/server.js`, which imports no Workers-only API; `src/index.js` is now a three-line entry point.
- [x] `src/server.test.mjs` — 27 tests over auth, protocol, all six tools, and the failure modes, run against a stub `ASSETS` binding with a miniature fixture corpus so CI needs no 22 MB build.
- [x] Both added as steps inside the existing `validate` job rather than a new job, since `validate` is already a required check and a new one would need branch protection edited by hand.
- [x] `build-assets.mjs` verifies its own output — doc ids resolve, every bundle line keeps its two trailing fields, scopes stay disjoint, copied file count matches the index — and each invariant was negative-tested by corrupting a bundle.
- [x] `scripts/smoke.mjs` probes a deployed server across all four storage paths; `npm run deploy` runs it automatically after `wrangler deploy`.

Both pieces of debt this phase originally left open are now closed:

- [x] `src/fixture-drift.test.mjs` compares the unit fixture against real build output — index keys, bundle line layout, build identity — and CI asserts it did not silently skip. It caught its first drift immediately, when build identity was added.
- [x] `wrangler deploy --dry-run` runs in a separate `worker-dry-run` job, which validates `wrangler.jsonc` and bundles the Worker without credentials. A cheap structural check duplicates the common cases inside the fast suite.
- [x] `src/protocol.test.mjs` drives the server as a spec-following MCP client: handshake order, `MCP-Protocol-Version`, exact request-id echo, and every advertised tool callable with its own required arguments.

- [ ] **`needs human`** — `worker-dry-run` is not a required status check; add it in branch protection if a `wrangler.jsonc` mistake ever reaches `main`.

---

## Phase 3 — Hardening

- [ ] **`needs human`** — Buy or move a domain onto the Cloudflare account if you want Cloudflare Access, which cannot protect a `workers.dev` hostname and needs a zone.
- [ ] Swap the bearer token for Access service tokens once a zone exists, gaining central revocation and edge-level blocking before the Worker runs.
- [ ] **`needs human`** — Add a WAF rate-limiting rule, since a leaked token currently has no request ceiling.
- [ ] **`needs human`** — Write down a rotation procedure and pick a cadence; rotation has no grace period, so every client breaks the moment the secret changes.
- [ ] **`needs human`** — Turn on Cloudflare alerting for Worker error rate, because `observability` is enabled but nobody is watching it.
- [ ] **`needs human`** — Sign off on `/health` staying unauthenticated. It now also reports the deployed commit, build time, and doc count, so a freshness cron needs no secret. All three are already public in this repository, and no corpus content is exposed — but the decision was made in passing rather than deliberately.

---

## Phase 4 — Quality and known limits

- [ ] Fix `kb_search`'s `$` anchor: metadata trails each indexed line, so `$` cannot match end-of-line — solvable by moving line numbers out-of-band, at the cost of a second lookup structure.
- [ ] Drain the 22 games carrying `weight: null` in frontmatter, which is a corpus coverage gap surfaced by this work and belongs to a `/librarian` pass, not the server.
- [x] Bundle growth is now guarded: the build warns at 9 MB and fails at 14 MB per scope, since cold-isolate decode plus scan measured ~3.4 ms at 5.3 MB against the Workers Free 10 ms CPU budget.
- [ ] **`needs human`** — Move to Workers Paid if that budget is ever exceeded, which raises the CPU ceiling substantially for $5/month.
- [ ] Reconsider shipping `visuals/*.webp` as assets, since they inflate every deploy and no tool currently reads them.
- [ ] Add a `kb_sources` tool if consumers start needing source provenance without reading whole documents.

---

## Guardrails that must survive all of the above

- **The server stays an accelerator, never a dependency.** A remote server can be down, unreachable, or unauthorized in ways a local process cannot; grep-first must keep resolving every query without it.
- **`dist/` stays gitignored.** It is a 22 MB derived copy of the corpus and does not belong in Git history.
- **Fail closed stays the default.** An unconfigured server is a misconfigured one, not a public one.
- **Nothing in the corpus pipeline may call this server** — intake, promotion, librarian, and audit passes must not acquire a network dependency on it.
