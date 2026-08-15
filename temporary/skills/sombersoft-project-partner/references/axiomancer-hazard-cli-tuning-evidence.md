# Axiomancer hazard CLI tuning evidence

Use this reference when updating or invoking repo-local hazard-minigame tuning workflows in `~/Workspace/axiomancer-both/axiomancer-mechanics`.

## Durable lesson

Hazard tuning should treat the shipped terminal CLI as the empirical witness before any numeric/content tuning. Do not leave the workflow as pure library inspection, probability estimates, or generic `npm test` verification when the repo exposes hazard playthrough evidence.

## CLI surface

The mechanics repo has a hazard testing CLI flow reachable through:

```bash
npm run hazard -- [flags]
npm run game -- hazard [flags]
```

Useful flags:

- `--hazard H01` — choose a hazard card.
- `--route top|bottom` — choose the route.
- `--auto` — use the greedy automated play policy.
- `--seed <seed>` — deterministic run.
- `--runs <n>` — repeat encounters.
- `--json-events` — emit JSON gameplay events.
- `--state-log <path>` — write JSONL state/action log.

Canonical smoke example:

```bash
npm run hazard -- --auto --seed 42 --runs 1 --hazard H01 --route top --json-events --state-log /tmp/hazard-H01-top-42.jsonl
```

Targeted e2e check:

```bash
npx vitest run src/CLI/e2e/hazard.cli.engine.test.ts
```

## How to use it for tuning

Before numeric changes:

1. Run a fixed hazard/route/seed matrix for the focus axis.
2. Save JSONL state logs outside the repo or under ignored artifacts unless T explicitly asks for committed evidence.
3. Parse `computeFinalScore` records for `finalScore`, `marks`, `route`, and `ledger`.
4. Treat `finalScore > 0` as a pass/clear for route-rate evidence.
5. Record mark strings (`OOX`, `OXX`, etc.), total score, ledger changes, and illegal-action records.
6. Apply at most one numeric/content change per axis.
7. Re-run the same matrix with the same seeds after each applied change.
8. Then run `npm test` / `npm run verify` as required by the repo-local skill.

## GitHub Actions wrapper pattern

When T asks to turn hazard tuning into a GitHub Action, mirror `.github/workflows/mechanics-tuning.yml` rather than inventing a new automation contract:

- create `.github/workflows/hazard-tuning.yml` with manual `workflow_dispatch`;
- expose a single optional `focus` input and pass it as `/hazard-tuning --focus="${{ github.event.inputs.focus }}"`;
- use `anthropics/claude-code-base-action@beta` with `CLAUDE_CODE_OAUTH_TOKEN` and repo `GITHUB_TOKEN`;
- grant `contents: write`, `pull-requests: write`, and `id-token: write`;
- set Claude permissions bypass through the supported `settings` input: `{"permissions":{"defaultMode":"bypassPermissions","skipDangerousModePermissionPrompt":true}}`;
- keep `allowed_tools` broad enough for Bash/Read/Edit/Write/Glob/Grep/Agent/TodoWrite/WebFetch/WebSearch because the workflow is the trust boundary;
- provision a CI `.env` with `GH_TOKEN` and `GH_REPO` so repo-local skills that shell-read `.env` can push branches and open PRs;
- update `skills/hazard-tuning.md` to point to the workflow;
- verify with `git diff --check`, YAML parsing or actionlint when available, sentinel checks for `workflow_dispatch`, `/hazard-tuning --focus`, and `bypassPermissions`, then `npm run verify`.

## Pitfalls

- Do not claim “no hazard tuning/testing CLI exists” once `npm run hazard` is present.
- Do not file a harness-gap entry merely because there is no separate `npm run hazard-tune`; use the existing CLI first.
- Only file a harness gap when `--auto`, fixed seeds, `--runs`, `--json-events`, and `--state-log` still cannot expose the metric.
- Repeated `illegalHazardAction` records are usually driver/policy evidence, not balance truth, unless the same illegal action is player-facing and manually reproducible.
- If rebasing a pushed skill branch onto advanced `origin/main`, expect the branch history to rewrite; push with `--force-with-lease`, not plain force.
