# Axiomancer Kid first-map + combat-playtest HTML report pattern

Use this when the Kid daily playthrough cron is asked to combine `game.cli` first-continent traversal with a combat-playtest stage sweep and a visual HTML artifact.

## Mainline and scope

- Work from clean current `main` in both `axiomancer-mechanics` and `axiomancer-mobile`.
- Do not edit gameplay code, tune numbers, create branches, push, or open PRs from this evidence lane.
- If tracked generated playtest reports are rewritten, copy the metrics into the dated Workspace report and revert/clean the repo.
- It is acceptable for durable reports under `~/Workspace/reports/axiomancer-playthrough/` to be written by the cron.

## First-map route traversal witness

1. Inspect mechanics map and event truth first:
   - `src/World/Continents/**/maps.ts`
   - `src/World/MapEvents/content.ts`
   - route support in `src/CLI/game.cli.ts`
   - route/hazard e2e witnesses such as `src/CLI/e2e/game.cli.route-hazard.engine.test.ts` when present.
2. Try a player-ish continuous `npm run game -- --route ... --auto-combat --combat-policy status --combat-seed <seed> --combat-max-turns <n> --json-events --state-log <tmp.jsonl>` route first.
3. If a leaf/dead-end node blocks backtracking, do not fake a single full traversal. Report the exact route target error and run fresh legal branch probes from the starting state to cover the remaining nodes.
4. Record for each node: reached/unreached, event kind, enemy or gate payload where relevant, route probe name, and combat outcome.
5. Route-level combat proof requires state-log actions `hazardCombat:start`, `hazardCombat:autoPhase`, and `hazardCombat:end`. Standalone `npm run combat` remains command-path evidence only.

## Combat-playtest sweep pattern

- Read and follow `skills/combat-playtest.md` in the mechanics repo.
- Run the preflight suites named by the skill before drawing balance conclusions.
- Full sweep command shape:
  - `npm run combat-playtest -- --stage=all --policy=all --runs=60 --seed=1`
  - repeat with `--json` and `--cards` when runtime allows.
- Parse/record per-stage: cells, runs, V/M/D/R, win rate, average rounds, `statusEngagement`, `dotHpFraction`, and strike/direct share.
- Treat command-green as insufficient. Status doctrine is design-red if status engagement is low, if direct/strike dominates, if Befriend short-circuits the status witness, or if impossible is cracked by an unintended policy.

## Qualitative stage probes

- Delegation is useful when available: assign early, mid, and late/impossible qualitative lenses to separate subagents.
- Warn workers that `npm run combat` and `npm run combat-playtest` may use different policy vocabularies. The combat CLI may accept `naive|safe|aggressive|status` while the matrix uses policies such as `greedy`, `blind`, `dot-weaver`, `control-lock`, `aggro-brute`, `turtle`, `chaos`, and `mercy-seeker`.
- If qualitative `npm run combat -- --policy status` contradicts matrix results, report that as a first-class blocker rather than choosing one witness.
- Note state-log size and internal turn churn when it makes the witness noisy.

## HTML artifact requirements

Write the normal Markdown report plus a self-contained HTML artifact at:

- `~/Workspace/reports/axiomancer-playthrough/YYYY-MM-DD.md`
- `~/Workspace/reports/axiomancer-playthrough/YYYY-MM-DD-combat-map.html`

The HTML should use actual run data and mark unknown metrics explicitly. Include:

1. First-map route coverage as a node/path diagram or grid-like map.
2. Combat stage comparison cards for early/mid/late/impossible.
3. Bars for status engagement, DoT share, and strike/direct dominance.
4. Mercy/Befriend viability notes.
5. Failure/blocker lanes.
6. Clear “what to fix next” callouts.

Verification: confirm both files exist and the HTML parses with Python `html.parser` or another cheap parser; then check both repo worktrees are still clean.
