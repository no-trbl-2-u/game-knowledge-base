---
okf_version: 0.2
type: operations
game:
  title: "SomberSoft Board Game Knowledge Base"
  slug: "board-game-knowledge-base"
  bgg_id: null
  publisher: "SomberSoft"
  year: 2026
  edition: "initial scaffold"
scope: "knowledge-base operations"
sources:
  - id: "src-001"
    title: "SomberSoft/T instruction: daily board-game KB scout"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-06-29"
    notes: "T directed creation of a SomberSoft directory, daily 6am scout, OKF documents, rulebook categorization, BGG discovery, publisher rulebook sourcing, reviews, and better-if analysis."
  - id: "src-002"
    title: "Hermes cron job: board-game-knowledgebase-daily-scout"
    url: "cronjob:44c13742fca9"
    kind: other
    provenance: official
    retrieved_at: "2026-06-29"
    notes: "Scheduled Hermes cron job configured to run daily at 06:00 UTC and deliver reports back to origin."
  - id: "src-003"
    title: "OKF 0.2 proposal (GitHub issue #1)"
    url: "https://github.com/no-trbl-2-u/game-knowledge-base/issues/1"
    kind: other
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Axiomancer integration proposal: mechanics tags, corpus index, patterns layer, librarian gate, wishlist consumption, failed-source policy. 2026-07-15 audit: check-links flags this URL 'dead' (404) because game-knowledge-base is a private repo — unauthenticated fetch always 404s on issue pages. Re-confirmed via `gh issue view 1` (state: closed, body/comments intact, content matches Evidence quotes below); not link rot, no remediation needed."
  - id: "src-004"
    title: "T instruction: evidence-gated 5/5/5 scout"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-07-30"
    notes: "T reduced the daily target to five cooperative candidates, five solo RPG candidates, and five rotating-focus candidates after rejecting count-driven generated filler. Canonical records require actual rulebooks, real reviews, factual evidence, and meaningful visuals."
  - id: "src-005"
    title: "T instruction: six-game external-source two-key intake"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-07-30"
    notes: "T approved the full prevention stack, reduced the target to two cooperative, two solo RPG, and two rotating-focus candidates, and explicitly allowed research beyond BoardGameGeek. Bathcat scouts and assembles evidence; an independent Mennonite audit and deterministic promotion are required before canonical entry."
  - id: "src-006"
    title: "T instruction: three-game depth and coverage gates"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "T replaced the 2/2/2 breadth target with one cooperative, one solo RPG, and one rotating-focus game per run; every game requires complete governing-rules coverage, and non-deckbuilders target at least 60 percent measured factual coverage."
  - id: "src-007"
    title: "T instruction: split passing packets from open gap PRs"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "T directed Bathcat to merge games that meet threshold independently and leave each below-threshold game on an open PR whose description states exactly why the gate was missed so T can help fill the evidence gap."
confidence: high
status: verified
---

## Summary

The Board Game Knowledge Base is an active SomberSoft research corpus. It is isolated in its own repository and housed at:

`/root/Workspace/SomberSoft/game-knowledge-base/KnowledgeBase/BoardGames/`

Remote:

`https://github.com/no-trbl-2-u/game-knowledge-base`

Its daily operator is **Bathcat — SomberSoft Field Intelligence and Knowledge Scout**.

The current purpose is knowledge gathering only. Full integration into downstream agents, tools, or game systems is deferred.

## Source-backed facts

- Claim: The knowledge base belongs inside the SomberSoft directory.
  Source: src-001
  Evidence: T asked to start the knowledge base project as "a directory inside of SomberSoft."
  Confidence: high

- Claim: The daily cadence is once per day at 6am.
  Source: src-001, src-002
  Evidence: T specified "Everyday, once a day at 6am"; cron job `44c13742fca9` is scheduled as `0 6 * * *`.
  Confidence: high

- Claim: The current scout target is one cooperative, one solo RPG, and one rotating-focus game per run.
  Source: src-001, src-004, src-005, src-006
  Evidence: T first moved from one game to broader cohorts, then replaced the 2/2/2 breadth target with a 1/1/1 depth target and explicit coverage gates.
  Confidence: high

- Claim: Audit readiness requires complete governing-rules coverage for every game and at least 60 percent measured factual coverage for non-deckbuilders.
  Source: src-006
  Evidence: T explicitly set 100 percent rules coverage for all three games and a minimum 60 percent factual-coverage target for non-deckbuilders.
  Confidence: high

- Claim: Passing and blocked candidates must have independent PR disposition.
  Source: src-007
  Evidence: T directed that qualifying games be committed and merged while every below-threshold game remains on an open PR explaining the exact shortfall so he can help close it.
  Confidence: high

- Claim: Candidate selection is not canonical coverage.
  Source: src-004
  Evidence: T rejected model-filled blanks because actual rulebooks, real reviews, and factual information are available; only evidence-complete games may be promoted.
  Confidence: high

- Claim: BoardGameGeek is a primary discovery source, but publisher websites are preferred for actual rulebooks.
  Source: src-001, src-005
  Evidence: T identified BoardGameGeek as a candidate source while explicitly directing that factual research may come from outside BGG; official publisher material remains rules authority and independent outside sources supply reception.
  Confidence: high

- Claim: Bathcat may not certify or canonically promote its own research packet.
  Source: src-005
  Evidence: T approved the complete prevention plan, including separate scouting, independent evidence audit, immutable packet approval, and deterministic promotion.
  Confidence: high

- Claim: The corpus should preserve both rules and reception.
  Source: src-001
  Evidence: T requested "rules, as well as, reviews" to learn what people liked and disliked about rules.
  Confidence: high

- Claim: The corpus should emphasize improvement opportunities.
  Source: src-001
  Evidence: T specified a large focus on "this game would be better if..."
  Confidence: high

- Claim: The scout consumes WISHLIST.md before free selection.
  Source: src-003
  Evidence: OKF 0.2 §5: "before free selection, take the topmost unchecked WISHLIST.md entry; check it off in the same run that covers it... Free-choice selection applies only when the wishlist is empty."
  Confidence: high

- Claim: Failed sources become structured followups records, never raw stashed documents.
  Source: src-003
  Evidence: OKF 0.2 §6 recommendation: "no raw stashing... make failures structured and retryable" — per failure: source id + exact URL, what failed, what was used as fallback, what a retry needs. The weekly librarian consumes exactly this.
  Confidence: high

- Claim: Every scout run must validate its own output against OKF_SPEC.md before pushing.
  Source: src-003
  Evidence: Issue #1 status comment after the 2026-07-04 slay-the-spire run drifted off-spec (46 findings): "have the scout run node scripts/validate-okf.mjs on its own output before pushing, and treat findings as a failed run."
  Confidence: high

## Specialist assignment

**Bathcat** owns the daily scout function.

Role:

- field intelligence scout
- knowledge-base researcher
- source-receipt assembler
- rulebook categorizer
- review/reception extractor
- better-if opportunity classifier

Strength:

- preserves evidence instead of vibes;
- separates official rules from community interpretation;
- turns player complaints into reusable design pressure;
- keeps each game entry structured enough for future agent/tool integration.

Danger:

- may over-index on documentation and miss table-feel unless reception sources are gathered aggressively.

## Current automation

Cron job:

- Name: `board-game-kb-bathcat-scout-quarantine`
- Job ID: `44c13742fca9`
- Schedule: `0 6 * * *`
- Next scheduled run if re-enabled: `2026-07-31T06:00:00+00:00`
- Workdir: `/root/Workspace/SomberSoft/game-knowledge-base`
- Skill: `research-discovery-monitoring`
- Toolsets: `web`, `file`, `terminal`, `delegation`
- Report delivery: origin Telegram thread
- Git delivery: dedicated scout branch and pull request; protected `main` requires current green `validate` CI before squash merge
- Required scout gate: `node scripts/validate-intake.mjs --run <run-id>`; any finding is a failed run and must not be pushed
- Candidate target: 1 cooperative + 1 solo RPG + 1 rotating-focus, with honest eligibility shortfalls allowed
- Coverage gate: 100% governing-rules coverage for every ready packet; non-deckbuilders also require at least 60% measured factual coverage
- Canonical promotion: no quota; Bathcat cannot approve or promote. The Mennonite audits immutable packets and `scripts/promote-intake.mjs` copies approved trees byte-for-byte.

Independent audit job:

- Name: `board-game-kb-mennonite-intake-audit`
- Job ID: `b0bf3fa19896`
- Schedule: `0 9 * * *`
- Scope: reopen receipt sources, record hash-bound approval or rejection, and promote each approved packet through a separate CI-gated pull request
- Fail-closed threshold: two rejections in one run or rejection of more than half its ready packets pauses Bathcat before the next scout
- Current state: paused until the prevention-stack change is merged and remote CI is verified

## Selection doctrine (amended per OKF 0.2 §5)

1. Take the **topmost unchecked entry in `WISHLIST.md`**. Cover it, and check it off in the same run with a link to the new game dir.
2. Only when the wishlist is empty: free-choice selection per the README's selection doctrine (accessible official rules, high BGG signal, SomberSoft-relevant mechanics).
3. Never repeat a game already present unless explicitly updating an older entry.

This turns daily growth from "whatever the scout felt like" into demand-driven coverage: design sessions append requests, the scout drains them top-down.

## Daily output contract

Each daily batch selects up to three unique candidates in disjoint 1/1/1 cohorts, with one independently mergeable run and PR per candidate. Bathcat may promote none. Every candidate carries a reproducible coverage ledger. Passing packets merge after green CI. Failed thresholds remain blocked on open draft gap PRs containing exact achieved/required coverage, missing evidence, attempted sources, and help requested. Selection manifests must keep `blocked`, `ready_for_audit`, `rejected`, `approved`, and `promoted` states distinct under `intake/runs/`.

Each independently approved, deterministically promoted game writes one directory:

`KnowledgeBase/BoardGames/games/<slug>/`

Minimum expected files:

- `index.okf.md`
- `sources.okf.md`
- `rules/overview.okf.md`
- `rules/setup.okf.md`
- `rules/turn-structure.okf.md`
- `rules/actions.okf.md`
- `rules/scoring-endgame.okf.md`
- `rules/edge-cases-faq.okf.md`
- `reception/reviews.okf.md`
- `reception/better-if.okf.md`
- `scout-report.okf.md`
- `visuals/packet.okf.md`
- `visuals/contact-sheet.webp`
- `visuals/references/*.webp` (4–8 reduced, source-linked references)

Every doc uses **OKF 0.2 frontmatter exactly as written in `OKF_SPEC.md`** — the spec, not the scout's memory of it, is the output format. In particular: `okf_version: 0.2`, `mechanics` (controlled slugs, identical across the game's docs), `better_if_labels` on reception docs, and `src-NNN` source ids.

Before pushing, the run must:

1. Capture retrieval receipts for official rules outside BGG, independent reception outside BGG and the publisher domain, dated rating evidence when claimed, claim-level citations, and meaningful source-linked visuals. At least two distinct non-BGG domains are required.
2. Leave every Bathcat packet outside the canonical `games/` tree. Only a Mennonite approval bound to the exact packet SHA-256 may authorize deterministic promotion.
3. Record every failed source fetch/extraction as a structured blocker — never replace it with model knowledge or raw stashed documents.
4. Run `node scripts/validate-intake.mjs --base origin/main`; the hard gate enforces cohort volume, receipts, source diversity, claims, duplication, visual meaning, immutable approval, and exact promotion.
5. After approved promotion, regenerate the corpus index and run `node scripts/validate-okf.mjs`. Treat **any finding as a failed run**. Validation is necessary but does not substitute for independent evidence review.

Protected-main law: all scout packets, audit decisions, and canonical promotions travel through pull requests. `main` requires the `validate` status check, up-to-date branches, resolved conversations, and denies force-push/deletion. CODEOWNERS records T's authenticated repository account. Because both Hermes profiles use that one GitHub account, persona independence is enforced by separate jobs, immutable packet hashes, write jurisdictions, and CI—not by pretending they are separate GitHub identities.

## Open questions

- Whether 6am should be interpreted as UTC permanently or later moved to T's local timezone.
- Whether future volume should change only after observed evidence-complete throughput supports it.
- Whether future entries should produce visual HTML indexes for each game in addition to OKF markdown.
