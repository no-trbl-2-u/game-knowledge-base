# Axiomancer repo-local skills as GitHub Actions

Use when T asks to make an Axiomancer repo-local skill available as a GitHub Action, e.g. `/deck-tuning`, `/combat-playtest`, `/combat-tuning`, `/hazard-tuning`, `/mechanics-tuning`, or `/march`.

## Axiomancer mechanics pattern

1. Work from clean current `main` in `/root/Workspace/axiomancer-both/axiomancer-mechanics` unless T asks for a branch.
2. Verify the repo-local skill file exists under `skills/<skill>.md` before creating a workflow.
3. Mirror the skill's authority in the workflow comments:
   - `/combat-playtest` is report-only; it must not tune numbers or cards.
   - `/deck-tuning` owns card pool/deck economy/sandbox experiments, not engine constants.
   - `/combat-tuning` owns engine combat constants and numeric/content-level levers, not traversal Hazard minigame tuning.
   - `/hazard-tuning` is for traversal/crossing hazard minigame tuning, not combat cards.
4. Create `.github/workflows/<skill>.yml` with manual `workflow_dispatch` and optional `focus` input when the skill supports it.
5. Use `anthropics/claude-code-base-action@beta` with `model: claude-sonnet-5`, `CLAUDE_CODE_OAUTH_TOKEN`, and supported permission bypass settings:
   `settings: '{"permissions":{"defaultMode":"bypassPermissions","skipDangerousModePermissionPrompt":true}}'`.
6. Provision `.env` with CI-scoped `GH_TOKEN` and `GH_REPO` if the Nexus skills expect it.
7. Push to `main` by default for safe workflow additions, then verify GitHub sees it with `gh workflow list --all --limit 20` and `gh workflow view <file>.yml --yaml`.

## Verification pitfall

Immediately after push, `gh workflow view <file>.yml --yaml` may return an HTTP 404 while GitHub indexes the new workflow. Wait a few seconds, list workflows, then retry. Do not treat the first transient 404 as a failed push.

## Triggering

Adding the Action is not the same as running the Action. Do not trigger a Claude workflow unless T asked for a run; workflow creation alone can be verified without consuming a model run.