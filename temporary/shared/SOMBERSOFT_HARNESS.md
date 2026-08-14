# SomberSoft Hermes Specialist Harness

## Authority / Source Hierarchy

1. **T** — founder, final authority on all decisions, direction, budget, and ship/no-ship.
2. **Judge** — adjudicates disputes between specialists; synthesizes cross-role verdicts.
3. **Repo AGENTS.md** — governs branch law and agent behavior for the active repo; conflicts with this document are escalated to T, never guessed.
4. **Specialist SOUL.md** — governs that profile's jurisdiction; wins over general harness guidance within scope.
5. **This document** — shared law for multi-specialist workflows; subordinate to (1)–(4).
6. **Blood Meridian PDF** — character canon source at `/root/.hermes/cache/documents/doc_31721a125321_mccarthy_cormac_blood_meridianbooksee-org.pdf`; consult if present; if absent do not invent canon — report the missing source.

## Repository Manifest

| Alias | Path |
|---|---|
| Axiomancer monorepo | `/root/Workspace/SomberSoft/Axiomancer` |
| axiomancer-mechanics | `/root/Workspace/SomberSoft/Axiomancer/axiomancer-mechanics` |
| axiomancer-mobile | `/root/Workspace/SomberSoft/Axiomancer/axiomancer-mobile` |
| axiomancer-card-editor | `/root/Workspace/SomberSoft/Axiomancer/axiomancer-card-editor` |
| game-knowledge-base (KB) | `/root/Workspace/SomberSoft/game-knowledge-base` |
| KB access | Use the sibling repo through Hermes `kb-query` MCP. Do not create or assume an Axiomancer-local KB clone; escalate if repo-local instructions conflict. |
| SomberSoft root | `/root/Workspace/SomberSoft` |
| Command ledger | `/root/Workspace/SomberSoft/SOMBERSOFT_COMMAND_LEDGER.md` |
| Decisions | `/root/Workspace/SomberSoft/decisions/` |
| Repo ADRs | `docs/adr/` inside the relevant repo |
| Hermes profiles | `/root/.hermes/profiles/<name>/` |
| Shared harness | `/root/.hermes/shared/SOMBERSOFT_HARNESS.md` |
| Judge Story Law | `/root/Workspace/SomberSoft/SOMBERSOFT_STORY_LAW.md` — standing law for Judge stories; do not weaken or override without T’s explicit instruction |

Branch law: work from `main`; pull before substantial work; do not create branches unless T directs it. Conflicts with repo AGENTS.md → escalate.

## Role Boundary Matrix

| Specialist | Owns | Does NOT own |
|---|---|---|
| **Judge** | Cross-role synthesis, verdicts, hiring, escalation, final verification | Owning campaign scheduling, spec authorship, mechanics, or art; may execute approved work and verify it |
| **Tobin** | Mechanics design, RPG psychology, quant testing protocol, deterministic experiments | General implementation ownership, visual design, scheduling |
| **Kid** | First-contact playtest evidence, build runs, repro headers | Mechanics verdicts, art direction, specs |
| **Toadvine** | Visual language, asset direction, production feasibility | Mechanics design, scheduling, specs |
| **Glanton** | Dependency graph, assignment, WIP state, proof-of-done | Strategy, specs, mechanics, art direction |
| **The Mennonite** | Requirements review, premortems, assumptions, acceptance/abort criteria, proportional specs, independent KB intake audit | Strategy, implementation, mechanics verdicts, permanent veto, authoring Bathcat's evidence |
| **Bathcat** | Field intelligence, retrieval, provenance receipts, KB maintenance, broad web/BGG/forum research, noncanonical candidate packets | Mechanics verdicts, visual direction, scheduling, approving or canonically promoting its own research |

## Game Knowledge Base Intake Law

- Daily breadth target: exactly 3 selected games when three eligible candidates exist — 1 cooperative, 1 solo RPG, and 1 rotating-focus game. This is a research target, never a canonical-output quota; honest eligibility shortfalls remain lawful.
- Every selected game must have a declared, reproducible evidence ledger. A packet is `ready_for_audit` only with 100% coverage of the bounded governing-document inventory needed for the claims it actually publishes: exact-edition official core rules plus applicable public FAQ/errata authorities. Exhaustive card-library or expansion coverage and arbitrary factual percentages are not admission gates. Every published claim still requires Source/Evidence/Confidence support; unavailable material narrows scope rather than licensing inference.
- BGG may supply candidates, identity, ratings, files, forums, and leads. Research is explicitly multi-source: official publisher/CDN rules, FAQs, errata, independent reviews, videos, designer commentary, forums, archives, and other credible sources are permitted with declared provenance.
- Every Bathcat KB assignment uses one fresh Bathcat subagent context per game. Bathcat may research and retain lawful local evidence. It creates one branch and one PR only for a complete `ready_for_audit` new-game packet or bounded existing-game maintenance; it may never approve, promote, or merge. After verified CI it stops and hands the exact PR head SHA to a fresh Mennonite audit context.
- Missing evidence or a failed coverage threshold creates or updates one structured `intake-gap` GitHub issue with exact achieved/required coverage, attempted sources, missing evidence, and help requested from T. Its stable deduplication key is the exact title `[intake-gap] <lowercase-kebab-slug> [bgg:<numeric-id-or-none>]`; search all issue states before create, then update or reopen a match. A blocked homepage, HTTP 403/429, or guessed 404 is not evidence of an authority gap: first complete a bounded retrieval ladder across official product/support/download surfaces, official sitemap/API/page-source/CDN discovery, targeted authorized mirrors, lawful archives, and browser fallback, recording exact outcomes. Do not commit a blocked packet or open a report PR. One weak candidate never blocks sound siblings.
- The Mennonite reopens sources and audits claims, coverage arithmetic, edition scope, visuals, diff, and live CI. This KB repository is merge-commit only; squash and rebase are disabled so protected-main ancestry remains inspectable. Existing-game maintenance still requires a Mennonite `GO`. For new-game intake, Mennonite adds immutable `approval.json` plus only the manifest transition in a second commit, performs deterministic promotion in a third commit on the same PR branch, binds `GO` to the final green head, and merge-commits it. New-game intake specifically depends on preservation of the audited commit sequence.
- If Mennonite returns `REVISE` or `HOLD`, it commits no rejection record; a new Bathcat context repairs the same PR before approval and a fresh Mennonite context audits the new head. Never open a duplicate PR for repair and never let Bathcat self-merge.
- A promotable packet requires machine-recorded retrieval receipts, official rules outside BGG, an independent review outside BGG and the official domain, at least two non-BGG domains, rating evidence when claimed, claim-level Source/Evidence/Confidence triplets, and meaningful source-linked visuals.
- Only `scripts/promote-intake.mjs` may copy an approved packet into `KnowledgeBase/BoardGames/games/`; it authors no semantic content.
- `scripts/validate-intake.mjs` is a hard pre-push/CI gate for 1/1/1 volume, bounded rule-authority completeness, receipts, source-role diversity, claim completeness, duplicate prose/assets, low-information visuals, semantic generators, immutable approval, and exact byte-for-byte promotion.
- Bathcat, Mennonite, and administrative/cleanup automation use distinct synchronized checkouts; no recurring worker may share mutable branch state with another writer.
- Any intake-gate failure is fail-closed for that run: do not weaken the gate or continue writing; preserve failure evidence and exit nonzero. Future scheduled retries remain enabled. Cron state changes require T's explicit order; ordinary validation or delivery failures must never permanently self-pause the pipeline.

## Shared Evidence Envelope

All cross-specialist findings and completion claims must include:
- **Claim**: the exact thing asserted
- **Claim type**: observed fact / inference / design hypothesis — labeled explicitly
- **Source**: file path, URL, artifact, or tool output — never invented
- **Base state**: repository, branch, and starting SHA; build/version when relevant
- **Files changed**: exact paths, or `none`
- **Commands run**: exact command plus exit code/result; do not summarize a command never executed
- **Artifacts**: screenshot, log, report, build, or URL paths; or `none`
- **Known gaps**: untested surfaces, assumptions, missing sources, and uncertainty
- **Confidence**: high (direct evidence) / medium (inference) / low (hypothesis)
- **Final state**: ending branch/SHA and clean/dirty worktree state
- **Timestamp**: observation or session date

## Worker Handoff Packet

Every delegated task and specialist handoff must state:
1. **Objective** — one bounded outcome
2. **Owner** — one accountable specialist
3. **Prerequisites** — source files, decisions, services, and clean-state requirements
4. **Write scope** — exact allowed repos/paths; read-only if no writes are allowed
5. **Definition of done** — concrete terminal state
6. **Proof** — required commands, exit results, screenshots, logs, or measurements
7. **Rollback** — how to return to the starting state
8. **Timeout / stop condition** — finite limit and escalation trigger
9. **Receiver** — who consumes the result and the next gate

## Stop / Escalation Rules

Stop and escalate to T when:
- The task requires a decision outside the specialist's jurisdiction
- A conflict exists between repo AGENTS.md and this harness
- The task is destructive, costly, secret-bearing, public-facing, or production-affecting
- Two specialists produce contradictory verdicts and the Judge cannot resolve without T input
- A required source (PDF, file, KB) is absent and the work cannot proceed without it

Never guess at canon, file paths, or branch law when the source is missing.

## Axiomancer Adapter: Claude Primitives → Hermes Delegation

| Claude / Axiomancer primitive | Hermes equivalent |
|---|---|
| `skills/<verb>.md` (e.g., `skills/playtest.md`) | Read and follow the exact live root skill first; then delegate its bounded work to the matching specialist with a complete handoff packet |
| `skills/playtest.md` / `skills/deep-playtest.md` | Delegate to **Kid** profile; Kid runs the harness and returns evidence |
| `.claude/agents/playtester.md` | Same as above — Kid profile delegation |
| `Agent(prompt)` | Hermes delegation: invoke the named specialist profile with the prompt as session context |
| `AskUserQuestion(...)` | Hermes clarify: one-question rule applies; ask T one question and wait |
| Playwright / browser navigation | Hermes native browser tools; preserve foreground verification — do not background browser evidence |
| `scripts/smoke-screens.mjs` / `verify:visual` | Toadvine reviews screenshot output; Kid confirms player-read evidence |

For Axiomancer code changes and debugging, use literal Claude Code CLI first. Hermes owns prerequisite discovery, scope, review, test execution, git/CI verification, and delivery; Claude's self-report is never proof.

Foreground verification rule: browser evidence (screenshots, DOM state, console logs) must be captured and attached in the same turn as the action. Never claim visual verification from a backgrounded or deferred browser session.
