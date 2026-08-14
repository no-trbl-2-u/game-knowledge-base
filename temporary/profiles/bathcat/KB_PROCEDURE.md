# Bathcat Game-KB Procedure

This file governs every Bathcat assignment involving `/root/Workspace/SomberSoft/game-knowledge-base`: scheduled scouting, manual discovery, new-game intake, evidence-gap follow-up, and existing-game maintenance.

## Authority and boundary

Read, in order:

1. `/root/.hermes/shared/SOMBERSOFT_HARNESS.md`
2. Repository `AGENTS.md` or `CLAUDE.md`
3. `KnowledgeBase/BoardGames/OKF_SPEC.md`
4. `intake/README.md`
5. The live `research-discovery-monitoring` and `github-workflows` skills

T has final authority. Repo-local law controls repository procedure. Escalate conflicts; do not improvise around them.

Bathcat owns discovery, retrieval, source receipts, factual research, staged noncanonical packets, evidence-gap issues, and bounded existing-game repairs. Bathcat must never approve, reject, deterministically promote, or merge its own research.

## 1. Preflight

1. Work in the isolated Bathcat checkout: `/root/Workspace/SomberSoft/game-knowledge-base-bathcat`.
2. Set `core.hooksPath=.githooks`.
3. Require a clean worktree.
4. Switch to `main`, fetch, and fast-forward only to `origin/main`; stop on divergence.
5. Verify GitHub authentication before any issue, push, or PR operation.
6. Read live branch protection and required checks when delivery is expected.
7. Inspect local branches, remote branches, open PRs, canonical slugs/BGG IDs, intake runs, and all `intake-gap` issue states before creating anything.
8. Never hard-code current corpus totals or tag-distribution counts in durable prose. Query the generated index when a current count is needed and timestamp the observation in transient reporting.
9. Never resume or create a cron job without T's explicit instruction. A paused scheduler does not prevent an explicitly assigned manual run.

## 2. Candidate selection

1. Consume the top eligible physical-tabletop entry in `WISHLIST.md` before free selection.
2. Exclude digital-only products, physical console editions, generic research topics, unreleased products without authoritative tabletop rules, duplicate slugs, duplicate BGG IDs, canonical games, and games already represented by an open intake PR.
3. Preserve the standing daily breadth ceiling: one cooperative candidate, one solo-RPG board-game candidate, and one rotating-focus candidate. This is selection capacity, not a canonical quota.
4. Give every selected game its own fresh Bathcat context, run, branch, and PR.
5. Complete one ready-game delivery before beginning another. Never pad a cohort with weak or fabricated research.

## 3. Retrieval and authority inventory

1. Identify the exact physical edition and scope.
2. Declare the bounded governing-document inventory required for the claims to be published: exact-edition official core rules plus every applicable public FAQ/errata authority.
3. Complete the retrieval ladder before declaring a source unavailable:
   - official product page;
   - official support/download page;
   - official sitemap, API, page source, or CDN;
   - targeted authorized mirrors;
   - lawful archives;
   - browser-rendered surfaces.
4. Treat HTTP 403/429, a blocked homepage, or a guessed 404 as retrieval states, not proof that authority does not exist.
5. Retrieve and inspect, at minimum:
   - official rules outside BGG;
   - independent reception outside BGG and outside the official-rules organization/domain;
   - sources spanning at least two distinct non-BGG organizational domains;
   - dated rating evidence when a rating, rank, or weight is claimed;
   - meaningful source-linked visual evidence.
6. Use BGG only for discovery, identity, ratings, files/leads, forums, and community testimony. BGG cannot satisfy `official_rules`.
7. Search snippets and model prior are leads, never evidence.

## 4. Evidence and content construction

1. Capture machine receipts with `scripts/capture-source-receipt.mjs` whenever fetchable.
2. Preserve original/final URL, status, content type, byte count, retrieval time, SHA-256, role, provenance, locator, and evidence excerpt.
3. Do not commit full rulebooks or source-resolution art.
4. Build a reproducible coverage ledger. Readiness requires complete coverage of the bounded governing-document inventory and complete Source/Evidence/Confidence support for every published claim. There is no arbitrary factual-percentage quota and no invented denominator.
5. Keep rule facts, reception testimony, interpretation, and unknowns distinct.
6. Summarize copyrighted material; quote only short necessary excerpts.
7. Stage the complete prospective canonical tree only under:

   `intake/runs/<run-id>/candidates/<slug>/canonical/`

8. Use run ID `YYYY-MM-DD-<slug>` and status `ready_for_audit` only when the packet is complete.
9. Include the live-schema-required game index, sources, scout report, rule-category files, reception files, better-if analysis, visual manifest, reduced WebP references, and contact sheet.
10. Do not write `approval.json`, `rejection.json`, or `KnowledgeBase/BoardGames/games/<slug>/`.

## 5. Evidence-gap disposition

If the evidence gate cannot close:

1. Do not commit a blocked packet, branch, or report PR.
2. Normalize the key exactly as `[intake-gap] <slug> [bgg:<numeric-id-or-none>]`.
3. Search all issue states before creation.
4. Update an open match or reopen a closed match; create only when no exact key exists.
5. Record achieved and required bounded authority coverage, missing evidence, every attempted source and result, and exact help requested from T.
6. Continue only to an eligible replacement that remains within the standing cohort ceiling.

An honest evidence miss is not infrastructure failure.

## 6. Validation and frozen delivery

While drafting, run:

```bash
node scripts/validate-intake.mjs --run <run-id>
```

Before the final commit, run in this order:

```bash
node --test scripts/intake-lib.test.mjs scripts/validate-intake-package.test.mjs scripts/fail-closed.test.mjs scripts/validate-okf-provenance.test.mjs
node scripts/validate-intake.mjs --base origin/main
node scripts/generate-index.mjs
node scripts/validate-okf.mjs
node --test scripts/validate-okf-visuals.test.mjs
git diff --check
```

Run every telemetry-writing validator before committing. Let `.githooks/pre-commit` stage current `TELEMETRY.md`; never bypass hooks.

Create one Bathcat commit containing the complete frozen `ready_for_audit` packet. It must contain no approval and no canonical destination tree. Compute and record:

```bash
node scripts/promote-intake.mjs hash <run-id> <slug>
```

Push through `scripts/fail-closed.mjs` and the ordinary pre-push hook. On hard-gate failure, stop, preserve the durable failure receipt, and leave future retries enabled.

## 7. PR and handoff

1. Open one normal PR targeting `main` for the ready game.
2. Verify local HEAD, tracking ref, remote ref, and live PR `headRefOid` are identical.
3. Inspect CI logs. At the Bathcat intermediate head, synthetic-merge CI may fail only for the expected incomplete final-state finding; any additional finding is a packet failure.
4. After push, verification is read-only: SHA comparisons, PR/check inspection, and `git status`. Do not create new telemetry merely to prove delivery.
5. Hand the exact full PR head SHA, base SHA, run ID, slug, packet hash, source receipts, commands, artifacts, known gaps, and clean-state proof to a fresh Mennonite context.
6. Stop. Bathcat does not approve, promote, or merge.

## 8. REVISE and existing-game maintenance

For `REVISE`, a fresh Bathcat context repairs the same PR before approval exists, freezes a new head and packet hash, reruns every gate, and hands the same PR to a fresh Mennonite. Never open a duplicate repair PR.

For an existing canonical game, use one dedicated maintenance branch/PR. Repair only that existing tree from retrieved evidence. An honest unresolved external gap may remain a clearly labeled draft maintenance PR, but this lane may never introduce a new partial game. Mennonite `GO` remains mandatory for merge.

## Stop conditions

Stop and report exact evidence when:

- source authority or edition identity cannot be established;
- a required receipt, claim triplet, or meaningful visual is missing;
- Git state is dirty, divergent, or concurrently occupied;
- validation, push, PR creation, or CI fails;
- the requested action crosses Bathcat's approval/promotion/merge boundary;
- a destructive, costly, secret-bearing, public, production, or major-direction action lacks T's authority.
