# SomberSoft ADR/CDR Decision Records

Use when T wants decisions to stop living only in chat, memory, phase rows, critique logs, or reports.

## Doctrine

SomberSoft should use a three-layer decision-record system:

1. **Company Decision Records (CDRs)** under `~/Workspace/decisions/` for company-wide doctrine: source-of-truth hierarchy, Hermes/Nexus authority, specialist roles, mainline autonomy, recurring rituals, public artifact policy, kill-list policy.
2. **Mechanics ADRs** under `axiomancer-mechanics/docs/adr/` for engine architecture and rules doctrine: combat resources, known-vs-equipped skills, friendship HP pressure, reference playtests, continent deferral, public API/versioning.
3. **Mobile ADRs** under `axiomancer-mobile/docs/adr/` for UI/app architecture: engine-presenter boundary, visual baselines, mobile does not invent mechanics, combat terminology, reference screenshots vs generated baselines, deployment gate truth.

## Source-of-truth hierarchy

When ADRs/CDRs are installed, prefer this hierarchy:

1. T's latest explicit decision.
2. CDRs / ADRs.
3. Central SomberSoft ledger.
4. Active build plan.
5. Phase candidates.
6. Critique/audit logs.
7. Historical reports.

The central ledger should index the decision system; CDRs/ADRs carry durable law; build plans execute; reports provide evidence.

## Naming

Company records already installed under `~/Workspace/decisions/`:

- `CDR-0001-source-of-truth-hierarchy.md`
- `CDR-0002-hermes-nexus-authority-boundary.md`
- `CDR-0003-mainline-autonomy-policy.md`
- `CDR-0004-specialist-gang-model.md`

Mechanics ADRs already installed under `axiomancer-mechanics/docs/adr/`:

- `ADR-0001-combat-resources-live-on-combat-state.md`
- `ADR-0002-skills-are-known-not-equipped.md`
- `ADR-0003-difficult-befriending-requires-hp-pressure.md`
- `ADR-0004-reference-playtests-anchor-balance.md`
- `ADR-0005-new-continents-deferred-until-first-continent-clean.md`
- `ADR-0006-nexus-state-reconciliation-precedes-feature-work.md`

Mobile ADRs already installed under `axiomancer-mobile/docs/adr/`:

- `ADR-0001-engine-truth-and-presenter-boundary.md`
- `ADR-0002-visual-baselines-are-committed-evidence.md`
- `ADR-0003-mobile-does-not-invent-mechanics.md`
- `ADR-0004-combat-terminology-prefers-player-language.md`
- `ADR-0005-reference-screenshots-and-generated-smoke-baselines-are-distinct.md`
- `ADR-0006-nexus-state-reconciliation-precedes-ui-polish.md`

## Minimal record template

```md
# ADR-0003 — Difficult Befriending Requires HP Pressure

Status: Accepted
Date: 2026-06-01
Scope: axiomancer-mechanics

## Decision

Difficult enemies require HP pressure before befriending can resolve or become likely. This follows Pokemon-like capture pressure: the player must weaken the foe before mercy has decisive force.

## Context

Pure patience can build friendship counter but still fail to resolve if the enemy remains too healthy. Coastal Tyrant evidence showed high timeout and low friendship.

## Consequences

- Playtest policies must include wound-then-spare paths.
- Boss/elite befriendability configs should expose or imply HP gates.
- UI should communicate why mercy cannot resolve yet.
- Balance targets should treat timeout-heavy mercy as failure unless explicitly designed otherwise.

## Links

- Phase 101 — Coastal Tyrant mercy-route tuning
- Glanton Nexus state reconciliation guardrail
```

## Integration steps

When creating or extending the system:

1. Create or update index files: `~/Workspace/decisions/README.md`, `docs/adr/README.md` in each repo.
2. Link the company index from `SOMBERSOFT_COMMAND_LEDGER.md`.
3. Link repo ADR indexes from each repo README and relevant agent/Nexus entrypoints.
4. Patch `/oversight` so durable decisions get CDR/ADR consideration before returning to `/march`.
5. Patch `/march` so decision-record contradictions are treated as drift and surfaced before dispatch.
6. In repo ADR work, run the repo deploy gate before final report: currently `npm run deploy:check` in both Axiomancer repos. Treat the mobile deploy check as an EAS/manual-deploy stub if it exits 0 and says so; still record it as the uniform gate.
7. Commit and push repo-local ADR/doc changes directly to `main` after verification. Root company CDRs under `~/Workspace/decisions/` may not be inside a git repo; report that plainly rather than pretending they were committed.
