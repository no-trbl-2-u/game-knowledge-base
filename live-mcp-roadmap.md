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
| State | **Serving nothing.** No `MCP_TOKEN` secret, so every request returns `503` |
| Deploys | Manual (`npm run deploy`); auto-deploy not connected |
| Tests | 27 unit tests + build invariants + a post-deploy smoke check, all gated by the `validate` required check |

---

## Phase 0 — Activation

Nothing works until this phase is done, and every step is yours.

- [ ] **`needs human`** — Generate a token: `node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"`, and store it in your password manager.
- [ ] **`needs human`** — Install it: `cd mcp-server && npx wrangler secret put MCP_TOKEN` — this is a credential, so an agent should never create or hold it.
- [ ] Confirm activation: `curl -s https://kb-mcp.no-trbl-2-u.workers.dev/health` must report `"configured":true`.
- [ ] **`needs human`** — Finish the Workers Builds connect screen: build `npm ci && npm run build`, deploy `npx wrangler deploy`, preview builds **off**, **Advanced → Root directory `mcp-server`**.
- [ ] **`needs human`** — Trigger one build now that `main` contains `mcp-server/`, proving auto-deploy works end to end.
- [ ] **`needs human`** — Export `KB_MCP_TOKEN` in the shell profile of every machine that will run a client.

---

## Phase 1 — Adoption

- [ ] Add the `.mcp.json` block from `how-to-configure.md` to the Axiomancer repo, which references `${KB_MCP_TOKEN}` and is therefore safe to commit.
- [ ] Call `kb_overview` from a real MCP client and confirm all six tools appear — the handshake has only ever been exercised by `curl` and `wrangler dev`.
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

Remaining test debt, deliberately not taken on:

- [ ] No test asserts the fixture in `server.test.mjs` still matches the real `build-assets.mjs` output shape, so a layout change could pass tests and break production — the build's own invariants narrow this but do not close it.
- [ ] `wrangler deploy` itself is unexercised in CI; nothing catches a `wrangler.jsonc` mistake until someone deploys.

---

## Phase 3 — Hardening

- [ ] **`needs human`** — Buy or move a domain onto the Cloudflare account if you want Cloudflare Access, which cannot protect a `workers.dev` hostname and needs a zone.
- [ ] Swap the bearer token for Access service tokens once a zone exists, gaining central revocation and edge-level blocking before the Worker runs.
- [ ] **`needs human`** — Add a WAF rate-limiting rule, since a leaked token currently has no request ceiling.
- [ ] **`needs human`** — Write down a rotation procedure and pick a cadence; rotation has no grace period, so every client breaks the moment the secret changes.
- [ ] **`needs human`** — Turn on Cloudflare alerting for Worker error rate, because `observability` is enabled but nobody is watching it.
- [ ] Decide whether `/health` should stay unauthenticated — it currently leaks only "this server exists and is configured", which is judged acceptable but was never explicitly signed off.

---

## Phase 4 — Quality and known limits

- [ ] Fix `kb_search`'s `$` anchor: metadata trails each indexed line, so `$` cannot match end-of-line — solvable by moving line numbers out-of-band, at the cost of a second lookup structure.
- [ ] Drain the 22 games carrying `weight: null` in frontmatter, which is a corpus coverage gap surfaced by this work and belongs to a `/librarian` pass, not the server.
- [ ] Watch the `cards` search bundle as the corpus grows: cold-isolate decode plus scan measures ~3.4 ms today against the Workers Free 10 ms CPU budget, so headroom is real but finite.
- [ ] **`needs human`** — Move to Workers Paid if that budget is ever exceeded, which raises the CPU ceiling substantially for $5/month.
- [ ] Reconsider shipping `visuals/*.webp` as assets, since they inflate every deploy and no tool currently reads them.
- [ ] Add a `kb_sources` tool if consumers start needing source provenance without reading whole documents.

---

## Guardrails that must survive all of the above

- **The server stays an accelerator, never a dependency.** A remote server can be down, unreachable, or unauthorized in ways a local process cannot; grep-first must keep resolving every query without it.
- **`dist/` stays gitignored.** It is a 22 MB derived copy of the corpus and does not belong in Git history.
- **Fail closed stays the default.** An unconfigured server is a misconfigured one, not a public one.
- **Nothing in the corpus pipeline may call this server** — intake, promotion, librarian, and audit passes must not acquire a network dependency on it.
