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
| Deploys | Workers Builds connected to `main`; automatic exact-commit deployment proven from merged PR #64 onward |
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

## Phase 1 — Adoption — **Axiomancer connected**

- [x] Axiomancer PR #267 replaced the deleted stdio entry with the live HTTP endpoint and `${KB_MCP_TOKEN}` bearer header.
- [x] Axiomancer GitHub Actions has the repository secret and can reach the Worker: post-wiring `/march` and `/digest` runs returned authenticated `tools/list: 200` and discovered all six tools.
- [x] A real MCP client completed authenticated discovery and `kb_overview` against the deployed corpus during the Axiomancer migration.
- [x] Axiomancer skills name `kb-query` as the external prior-art surface and require `kb:` / `src-NNN` receipts where evidence is used.
- [x] ~~Keep `scripts/kb-sync.mjs` for now as a grep-first fallback~~ — **reversed 2026-09-04** (Axiomancer PR #285). The script, the gitignored `kb/` snapshot, and every grep-first instruction that pointed at it are deleted. The hosted Worker is now Axiomancer's sole route to the corpus.
- [x] ~~Verify the Axiomancer `kb-query` skill actually falls back to grep-first when the Worker is down~~ — moot; there is no fallback to verify. The replacement requirement, now written into Axiomancer's skill and design agents: an unreachable Worker is reported as *prior-art grounding unavailable for this run*, and anything answered from memory is labeled UNGROUNDED. A stale local copy is never substituted, and a remembered figure is never presented as a corpus fact.
- [ ] **`needs human`** — Accept the availability trade this makes explicit: a Worker outage now removes prior-art grounding from Axiomancer design sessions outright rather than degrading it to a lagging snapshot. Nothing in Axiomancer's build, test, or gameplay path depends on the corpus, so the blast radius is research quality, not runtime.
- [ ] **`needs human`** — Configure egress and credential attachment separately for any hosted Claude environment outside GitHub Actions; `workers.dev` is not on every provider's default allowlist.
- [ ] Add privacy-preserving `tools/call` telemetry. Current Worker invocation counts include health checks, initialization, and `tools/list`, so they cannot prove substantive corpus use.

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

- [ ] **`needs human`** — Put the Worker behind a custom hostname on the existing `edventures.pet` zone if you want Cloudflare Access; the current `workers.dev` hostname cannot be protected by Access.
- [ ] Swap the bearer token for Access service tokens after a custom hostname and Access policy are deployed, gaining central revocation and edge-level blocking before the Worker runs.
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

- **The Worker is the supported retrieval surface, not the only path.** A remote server can be down, unreachable, or unauthorized in ways a local process cannot — and in a cloud session it can also be *unroutable*, which is a failure mode a local process never had. Grep-first must keep resolving every query without it.
- **`dist/` stays gitignored.** It is a 22 MB derived copy of the corpus and does not belong in Git history.
- **Fail closed stays the default.** An unconfigured server is a misconfigured one, not a public one.
- **Nothing in the corpus pipeline may call this server** — intake, promotion, librarian, and audit passes must not acquire a network dependency on it.
