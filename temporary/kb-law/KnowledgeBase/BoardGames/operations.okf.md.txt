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
    title: "SomberSoft operator instruction: daily board-game KB scout"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-06-29"
    notes: "The operator directed creation of a SomberSoft directory, daily 6am scout, OKF documents, rulebook categorization, BGG discovery, publisher rulebook sourcing, reviews, and better-if analysis."
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
    title: "Operator instruction: evidence-gated 5/5/5 scout"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-07-30"
    notes: "The operator reduced the daily target to five cooperative candidates, five solo RPG candidates, and five rotating-focus candidates after rejecting count-driven generated filler. Canonical records require actual rulebooks, real reviews, factual evidence, and meaningful visuals."
  - id: "src-005"
    title: "Operator instruction: six-game external-source two-key intake"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-07-30"
    notes: "The operator approved the full prevention stack, reduced the target to two cooperative, two solo RPG, and two rotating-focus candidates, and explicitly allowed research beyond BoardGameGeek. Bathcat scouts and assembles evidence; an independent Mennonite audit and deterministic promotion are required before canonical entry."
  - id: "src-006"
    title: "Operator instruction: three-game depth and coverage gates"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "The operator replaced the 2/2/2 breadth target with one cooperative, one solo RPG, and one rotating-focus game per run; every game requires complete governing-rules coverage, and non-deckbuilders target at least 60 percent measured factual coverage."
  - id: "src-007"
    title: "Operator instruction: split passing packets from open gap PRs"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "The operator directed Bathcat to merge games that meet threshold independently and leave each below-threshold game on an open PR whose description states exactly why the gate was missed so the missed gate is legible in the run record."
  - id: "src-008"
    title: "Operator instruction: one-game one-PR intake with issue-based gaps"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "The operator replaced report-style blocked PRs with GitHub issues and selected one PR per ready game: Bathcat authors the packet, a fresh Mennonite audits, approves and deterministically promotes on that branch, and merges on GO."
  - id: "src-009"
    title: "Operator instruction: bounded-authority intake law supersedes factual quota"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-08-01"
    notes: "The operator directed correction of the stale 60 percent factual-coverage doctrine. Current readiness requires complete bounded governing-document coverage for published claims plus claim-level Source/Evidence/Confidence support; no arbitrary factual-percentage admission quota remains."
  - id: "src-010"
    title: "Hermes cron job: board-game-kb-mennonite-intake-audit"
    url: "cronjob:b0bf3fa19896"
    kind: other
    provenance: official
    retrieved_at: "2026-08-01"
    notes: "Live scheduler state verified enabled at 09:00 UTC in the isolated Mennonite checkout. Fail-closed runs preserve evidence and future retries; cron state changes are made only by explicit operator order."
  - id: "src-011"
    title: "Operator instruction: pause specialist automation and remove stale corpus totals"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-08-03"
    notes: "The operator ordered every Bathcat and Mennonite cron job paused, required one exact KB procedure file in each profile, and prohibited hard-coded live corpus totals while retaining the 1/1/1 intake quota."
  - id: "src-012"
    title: "Operator instruction: unattended operation and additive coverage"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-08-04"
    notes: "The operator directed that the pipeline run unattended with no human in any procedure, removed coverage percentages as admission gates in favour of adding coverage in later passes, set the working aim as high rules coverage with low-to-mid component coverage, and prohibited Bathcat from inventing any data to satisfy a coverage figure."
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
  Evidence: The operator asked to start the knowledge base project as "a directory inside of SomberSoft."
  Confidence: high

- Claim: The configured scout cadence is once per day at 6am, but execution is currently paused.
  Source: src-001, src-002, src-011
  Evidence: The operator specified "Everyday, once a day at 6am" and cron job `44c13742fca9` retains schedule `0 6 * * *`; the operator ordered the Bathcat and Mennonite jobs paused on 2026-08-03.
  Confidence: high

- Claim: The current scout target is one cooperative, one solo RPG, and one rotating-focus game per run.
  Source: src-001, src-004, src-005, src-006
  Evidence: The operator first moved from one game to broader cohorts, then replaced the 2/2/2 breadth target with a 1/1/1 depth target and explicit coverage gates.
  Confidence: high

- Claim: Audit readiness requires complete claim-level evidence for whatever the packet publishes; no coverage percentage is an admission gate.
  Source: src-009, src-012
  Evidence: The 60 percent factual threshold was retired first, then the bounded governing-document completeness gate; admission now rests entirely on Source/Evidence/Confidence support for every published claim, and coverage is recorded as a descriptive ledger that later passes extend.
  Confidence: high

- Claim: Coverage is additive rather than exclusionary, and no worker may invent data to raise it.
  Source: src-012
  Evidence: A game is admitted with whatever it can evidence and improved by later passes; unretrieved denominators stay null, unretrieved facts stay absent, and the validator enforces ledger arithmetic so a count cannot exceed its denominator or report a percentage it did not compute.
  Confidence: high

- Claim: Every ready game uses one PR, while blocked research uses an issue rather than Git content.
  Source: src-008
  Evidence: The operator selected the one-game/one-PR model and directed that blocked evidence gaps become issues. This supersedes src-007's open-gap-PR disposition.
  Confidence: high

- Claim: Candidate selection is not canonical coverage.
  Source: src-004
  Evidence: The operator rejected model-filled blanks because actual rulebooks, real reviews, and factual information are available; only evidence-complete games may be promoted.
  Confidence: high

- Claim: BoardGameGeek is a primary discovery source, but publisher websites are preferred for actual rulebooks.
  Source: src-001, src-005
  Evidence: The operator identified BoardGameGeek as a candidate source while explicitly directing that factual research may come from outside BGG; official publisher material remains rules authority and independent outside sources supply reception.
  Confidence: high

- Claim: Bathcat may not certify or canonically promote its own research packet.
  Source: src-005
  Evidence: The operator approved the complete prevention plan, including separate scouting, independent evidence audit, immutable packet approval, and deterministic promotion.
  Confidence: high

- Claim: The corpus should preserve both rules and reception.
  Source: src-001
  Evidence: The operator requested "rules, as well as, reviews" to learn what people liked and disliked about rules.
  Confidence: high

- Claim: The corpus should emphasize improvement opportunities.
  Source: src-001
  Evidence: The operator specified a large focus on "this game would be better if..."
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
- Scheduler state: query Hermes live; the operator ordered this job paused on 2026-08-03 pending further direction
- Workdir: `/root/Workspace/SomberSoft/game-knowledge-base-bathcat`
- Skill: `research-discovery-monitoring`
- Toolsets: `web`, `file`, `terminal`, `delegation`
- Report delivery: origin Telegram thread
- Git delivery: one dedicated branch and PR per ready game; protected `main` requires current green `validate` CI on the final promoted head and a merge commit preserving Bathcat, approval, and promotion commits. A pre-approval `ready_for_audit` head is not expected to be promotable and is audited as it stands
- Required scout gate: `node scripts/validate-intake.mjs --run <run-id>`; any finding is a failed run and must not be pushed
- Candidate target: 1 cooperative + 1 solo RPG + 1 rotating-focus, with honest eligibility shortfalls allowed
- Coverage gate: none. Coverage is a descriptive ledger, not an admission test; aim high on rules, accept low-to-mid on components and other factual detail, and add more in later passes rather than withholding the game
- Canonical promotion: no quota; Bathcat cannot approve or promote. The Mennonite audits immutable packets and `scripts/promote-intake.mjs` copies approved trees byte-for-byte.

Independent audit job:

- Name: `board-game-kb-mennonite-intake-audit`
- Job ID: `b0bf3fa19896`
- Schedule: `0 9 * * *`
- Scope: reopen receipt sources, record hash-bound approval in a second commit, deterministically promote in a third commit on the same PR, and merge-commit only after final green CI; failures are PR `REVISE` verdicts
- Failure law: infrastructure failures write durable evidence and leave future scheduled retries enabled; ordinary `REVISE` verdicts do not pause either job, and cron state changes require the operator's explicit order
- Scheduler state: query Hermes live; the operator ordered this job paused on 2026-08-03 pending further direction. Isolated checkout: `/root/Workspace/SomberSoft/game-knowledge-base-mennonite`

## Selection doctrine (amended per OKF 0.2 §5)

1. Take the **topmost unchecked entry in `WISHLIST.md`**. Cover it, and check it off in the same run with a link to the new game dir.
2. Only when the wishlist is empty: free-choice selection per the README's selection doctrine (accessible official rules, high BGG signal, SomberSoft-relevant mechanics).
3. Never repeat a game already present unless explicitly updating an older entry.

This turns daily growth from "whatever the scout felt like" into demand-driven coverage: design sessions append requests, the scout drains them top-down.

## Daily output contract

Each daily batch selects up to three unique candidates in disjoint 1/1/1 cohorts. Every candidate gets one independently mergeable run and PR. Bathcat may promote none. Every candidate carries a reproducible coverage ledger, and that ledger is descriptive: partial coverage is publishable, and later passes add to it. No coverage percentage withholds a game. A candidate with no lawful document evidence at all creates or updates an `intake-gap` issue recording what is absent, which sources were attempted with what result, and which document leads a later scheduled pass should try; it does not create a run directory or PR. Every lead names a retrievable document — a URL, an archive capture, an official scan or readout inventory, a licensed corpus — because no run waits on a human and an unretrievable lead is an instruction nothing can execute. New committed runs begin `ready_for_audit`, then move to `approved` and `promoted` through ordered Mennonite commits on the same branch. Historical `blocked` and `rejected` states remain readable but are not valid new diffs.

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
- `visuals/references/*.webp` (2–8 reduced, source-linked references)

Every doc uses **OKF 0.2 frontmatter exactly as written in `OKF_SPEC.md`** — the spec, not the scout's memory of it, is the output format. In particular: `okf_version: 0.2`, `mechanics` (controlled slugs, identical across the game's docs), `better_if_labels` on reception docs, and `src-NNN` source ids.

Before pushing, the run must:

1. Capture retrieval receipts for official rules outside BGG, independent reception outside BGG and the publisher domain, dated rating evidence when claimed, claim-level citations, and meaningful source-linked visuals. At least two distinct non-BGG domains are required.
2. Leave every Bathcat packet outside the canonical `games/` tree. Only a Mennonite approval bound to the exact packet SHA-256 may authorize deterministic promotion.
3. Record every failed source fetch/extraction as a structured blocker — never replace it with model knowledge, an estimate, a value inferred from a similar game, or raw stashed documents.
4. Run `node scripts/validate-intake.mjs --base origin/main`; the hard gate enforces cohort volume, receipts, source diversity, claims, duplication, visual meaning, immutable approval, and exact promotion.
5. After approved promotion, regenerate the corpus index and run `node scripts/validate-okf.mjs`. Treat **any finding as a failed run**. Validation is necessary but does not substitute for independent evidence review.

Protected-main law: each ready game's scout packet, audit decision, and canonical promotion travel in three ordered commits within one PR. `main` requires the `validate` status check, up-to-date branches, resolved conversations, and denies force-push/deletion. New-game intake uses merge commits; squash/rebase would erase the parent-state evidence. CODEOWNERS records the operator's authenticated repository account. Because both Hermes profiles use that one GitHub account, persona independence is enforced by fresh contexts, immutable packet hashes, write jurisdictions, preserved commit history, and CI—not by pretending they are separate GitHub identities.

## Open questions

- Whether 6am should be interpreted as UTC permanently or moved to a local timezone.
- Whether future volume should change only after observed evidence-complete throughput supports it.
- Whether future entries should produce visual HTML indexes for each game in addition to OKF markdown.
