# Axiomancer Mobile combat UX tuning automation

Use this reference when T asks to create, run, update, or schedule Mobile combat UX tuning work.

## Durable lesson

T wants Mobile combat UX tuning to behave like a tuning loop, not a passive audit:

- primary metric: automated **input friction**;
- witness: automated tests/browser/e2e evidence, not human screenshot review;
- if the worker finds a friction problem and a small Mobile-only improvement is plausible, it should A/B test the change;
- if the A/B improves the metric and gates stay green, it may keep the change;
- the worker should ask no questions during the tuning run;
- successful kept changes or durable findings should be delivered on a branch with a GitHub PR, not pushed directly to main;
- player-facing copy remains `VITAE` and `STANCE`, even when engine internals expose HP.

## Repo-local implementation pattern

For `axiomancer-mobile`, encode this as a repo-local skill rather than a global one when the behavior is specific to that repo:

- `skills/combat-ux-tuning.md` — contract and A/B loop.
- `.github/workflows/combat-ux-tuning.yml` — manual `workflow_dispatch` runner through Claude Code.

The workflow should:

1. install dependencies;
2. install Playwright chromium if browser evidence may be used;
3. configure git identity;
4. run Claude Code on `skills/combat-ux-tuning.md`;
5. pass `focus` and `dry_run` inputs;
6. instruct the worker to ask no questions;
7. require branch + PR for non-dry-run kept changes/findings;
8. deny direct pushes to `main`.

## Friction metrics to preserve

Use countable metrics, not taste:

- `actionsToEnterCombat`
- `attemptsToStageCard`
- `attemptsToAssignDie`
- `attemptsToApplyCard`
- `failedGestures`
- `actionsToFirstResolvedCard`
- `actionsToEndPhaseAfterCard`
- `terminalOutcomeReached`
- `stablePhaseReached`
- `consoleErrors`
- `testHarnessPassFail`

## Pitfalls

- Do not turn this into visual baseline approval. `verify:visual` is supporting evidence only.
- Do not change engine combat rules or local-simulate mechanics in Mobile.
- Do not let Claude Code authentication failure become doctrine; preserve the prompt or implement directly, but record the setup blocker plainly.
- Do not forget workflow verification after pushing: GitHub may take a few seconds before `gh workflow view <file>` sees a newly added workflow.
