# Axiomancer cross-repo combat audit pattern

Use when T asks for a zoomed-out Axiomancer audit across mechanics + mobile, especially when combat gaps might live on either side and `/march` workers only see local phases.

## Trigger phrases

- "deep audit between the two repos"
- "can't tell if mechanics or mobile"
- "combat gaps"
- "compare everything"
- "include AI workflow / skills / memory"
- "workers don't have full context"

## Procedure

1. Load SomberSoft/Axiomancer context skills, then inspect both repo READMEs and the central ledger.
2. Establish branch truth before code truth:
   - `git fetch origin --prune`
   - `git status --short --branch`
   - `git rev-list --left-right --count origin/main...HEAD`
   - report if local phase queues are branch-local fossils.
3. Audit both repos in parallel when possible:
   - Mechanics: combat docs, resolver/phases, skills engine, game store, world encounter/event code, playtest harness, phase plan, audit/critique/candidates, repo skills.
   - Mobile: combat presenter/actions/components, event/exploration flow, store event propagation, tests, playtest reports, early combat UX docs, repo skills.
   - Workflow: central ledger, AGENTS/agents entrypoints, `skills/march.md`, oversight/playtest skills, reports, cron assumptions, branch hygiene.
4. Prefer cross-contract findings over isolated symptoms. Ask: which layer owns the truth, and which layer is patching after the fact?
5. Write a durable audit report under `~/Workspace/reports/audits/` when the result is substantial.

## Combat contract checks that mattered

- Encounter recurrence: mechanics may consume nodes inside `resolveMapEvent`; mobile cannot reliably restore encounter reusability after receiving an already-consumed state.
- Resources: mechanics truth is `combatResources`; mobile must not teach stale `combatMana`/`manaCost` if token pools exist.
- Event evidence: mobile should pass structured `resolution.combatEvents` through the store/event surface, not only summarize them locally.
- Skill availability: resolve `knownSkills` vs `equippedSkills` as a product contract before fixing one side alone.
- Honest affordances: visible `item` and `flee` controls must be implemented, hidden, or explicitly disabled; no silent no-ops.
- Direct `/combat` fixture route is not the same as WILDS encounter truth; do not judge first-fight balance from a fixture without stating it.

## `/march` worker rail findings

`/march` workers execute local phases well but can miss broad combat context unless forced to read it. For gameplay/combat phases, add or verify rails for:

- central ledger
- branch divergence against `origin/main`
- latest `~/Workspace/reports/axiomancer-playthrough/*.md`
- cross-repo combat docs and reports
- mechanics playtest `NEXT_STEPS.md` where relevant
- `agents.md`/`AGENTS.md` entrypoint alignment

## Report shape

Keep the final chat summary compact, but put the full evidence in a durable markdown report:

- executive verdict
- repo/branch state
- what is healthy
- primary combat gaps
- AI workflow gaps
- dead/stale scaffolding
- priority order
- final judgment
