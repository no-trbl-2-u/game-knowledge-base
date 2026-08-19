# Axiomancer action model pins and phase-queue updates

Use this pattern when T asks to change the model for `/march`, `/mechanics-tuning`, `/hazard-tuning`, or similar autonomous GitHub Actions, and when he asks to queue a mechanics/mobile phase in the same pass.

## Workflow model-pin audit

1. Start from clean, current `main` in both repos when the request may span mechanics and mobile:
   - `~/Workspace/axiomancer-both/axiomancer-mechanics`
   - `~/Workspace/axiomancer-both/axiomancer-mobile`
2. Fetch and fast-forward before editing.
3. Inspect both repo-local workflow directories, not only skill markdown:
   - `axiomancer-mechanics/.github/workflows/march.yml`
   - `axiomancer-mechanics/.github/workflows/mechanics-tuning.yml`
   - `axiomancer-mechanics/.github/workflows/hazard-tuning.yml`
   - `axiomancer-mobile/.github/workflows/march.yml`
4. Search for stale model pins across both repos after editing, e.g. `claude-opus-4-8`, retired Sonnet ids, and generic `model:` lines in workflows.
5. If T says “sonnet latest,” prefer the current active Sonnet family pin used by Anthropic/Claude Code at the time of the change rather than leaving the retired action default in place. In the 2026-06 pass, that was `claude-sonnet-4-6`.
6. Update comments beside the pin so they do not preserve stale Opus rationale.

## Phase-queue update alongside model changes

When T asks to create a mechanics phase:

1. Add a worker-ready brief under `axiomancer-mechanics/plan/phases/phase_<N>_<slug>.md`.
2. Add a `[ ] Phase <N> — ...` row near the top of `plan/steps/01_build_plan.md` so `/march` sees it as the next pending autonomous phase.
3. Keep the phase brief audit/implementation boundary explicit. If the phase is an audit before tuning, say “audit first, retune second,” list evidence commands to run, and name which changes require T approval.
4. For Hazard-style combat tuning audits, make workers classify levers as:
   - data/content
   - tuning parameter
   - witness-policy behavior
   - core mechanics requiring T approval

## Verification

- Run `git diff --check` in every touched repo.
- Parse workflow YAML when possible (`python3` + `yaml.safe_load` is enough if PyYAML exists).
- Search old model pins after the change.
- Commit and push each touched repo’s clean `main` separately unless T asked for branches/PRs.
- Final status should show `HEAD == origin/main` and clean worktrees.
