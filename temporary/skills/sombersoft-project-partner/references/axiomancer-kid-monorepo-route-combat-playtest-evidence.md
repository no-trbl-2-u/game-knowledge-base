# Axiomancer Kid monorepo route + combat-playtest evidence pattern

Use when operating the daily Kid playthrough cron or any scheduled Axiomancer evidence run that asks for first-map route traversal plus combat-playtest matrix evidence.

## Durable workflow lessons

- Prefer the live monorepo at `~/Workspace/SomberSoft/Axiomancer` when present. The old split paths under `~/Workspace/axiomancer-both/` may be absent; absence of those paths is not a task blocker if the monorepo exists and is current.
- In the monorepo, sync once at the root: `git status --short --branch`, `git fetch origin --prune`, `git checkout main`, `git pull --rebase origin main`, then record the short root HEAD. Mechanics and mobile share that HEAD.
- For mechanics route evidence, read `axiomancer-mechanics/src/World/Continents/**/maps.ts`, `axiomancer-mechanics/src/World/MapEvents/content.ts`, and the registry before choosing a route. Do not trust historical route assumptions.
- Current `game.cli` may support `--route`; use it before inventing stdin/script prompt answer files. Pair it with `--json-events` and `--state-log /tmp/...jsonl` so `hazardCombat:start`, `hazardCombat:autoPhase`, and `hazardCombat:end` can be verified from the state log.
- `moveToNode` forbids re-entry to completed nodes. A single player-ish route may be unable to cover every node on a branched first map. Report the maximum no-backtrack path and name the missed branches; do not fake all-node coverage. Use branch-reset probes or a future non-mutating route-audit mode for full map coverage.
- Route combat lifecycle evidence is not the same as survivorship evidence if `game.cli` launches Hazard combat but does not feed combat outcome back into traversal state. If traversal continues after `hazardCombat:end` reports `defeat`, classify later movement as command-path evidence.
- If `skills/combat-playtest.md` is absent in mechanics, use the nearest live authority: `axiomancer-mechanics/docs/playtest.md`, `CLAUDE.md`, package scripts, and `src/CLI/combat-playtest.cli.ts` comments. State that the requested skill file was absent; do not treat that as absence of the combat-playtest workflow.
- For combat-playtest sweeps, prefer `npm run combat-playtest -- --stage=all --policy=all --runs=60 --seed=1 --json` first, then summarize per stage: cells, runs, W/M/D/R, win rate, statusEngagement, dotHpFraction, strike/direct share, average rounds, policies, enemies, and card coverage.
- Watch for split evidence: route play may produce mercy/befriend outcomes while the combat-playtest matrix reports zero mercies. Treat that as mercy policy/accounting/scenario drift requiring targeted probes, not as a contradiction to hand-wave.

## Artifact pattern

Write both:

- `~/Workspace/reports/axiomancer-playthrough/YYYY-MM-DD.md`
- `~/Workspace/reports/axiomancer-playthrough/YYYY-MM-DD-combat-map.html`

The HTML should be self-contained and show actual data only: route coverage, missed nodes, encounter outcomes, stage bars, status vs direct dominance, mercy visibility, blockers, and next evidence-bearing fixes.

## Reporting language

Use clean evidence terms:

- **route command-path evidence**: route moved through nodes and launched combat, but traversal state did not consume combat outcome.
- **clean survivorship evidence**: combat outcome affects route survival/progression and the player survives the path.
- **branch coverage blocker**: no-backtrack topology prevents a single route from visiting every node.
