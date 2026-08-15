# Axiomancer Mobile visual baseline approval

Use when T says to approve screenshots, approve visual baselines, accept current smoke screenshots, take screenshots for all smoke-test routes, make the screenshots canon/law for the smoke test, or otherwise bless `screenshots/current/` as the new expected UI for Axiomancer Mobile.

## Scope

This is evidence/baseline work, not feature implementation. It normally touches only `screenshots/baseline/*.png` unless documentation needs updating.

## Procedure

1. Work in `~/Workspace/axiomancer-both/axiomancer-mobile`.
2. Establish mainline truth first:
   - `git status --short --branch`
   - `git fetch origin`
   - `git checkout main`
   - `git pull --rebase origin main`
3. Generate fresh evidence if needed:
   - run `npm run verify:visual` to populate `screenshots/current/` and `.smoke-dist/`;
   - if it exits `1` with successful export and only pixel diffs, inspect current/diff screenshots before approval;
   - classify browser-policy console lines such as blocked `navigator.vibrate` as policy noise unless paired with visible/runtime breakage.
4. Before approving, inspect combat-current screenshots and copy for canon terms:
   - player-facing combat copy/accessibility must say `VITAE` and `STANCE` / `CHOOSE A STANCE`;
   - do **not** approve a baseline that preserves `HEALTH`/`HP`/`GUARD` wording unless T explicitly overturns doctrine;
   - if T says “normalize VITAE,” make the small copy/accessibility patch first, then rerun targeted combat UI tests plus `npm run typecheck` before approving screenshots.
5. Run:
   - `npm run baseline:approve`
6. Verify the visual gate after approval:
   - If `.smoke-dist/` and current screenshots came from a fresh visual run, `SMOKE_REUSE_EXPORT=1 npm run verify:visual` is acceptable and faster.
   - Otherwise run full `npm run verify:visual` so the export and screenshots are regenerated.
7. When T asks to “take screenshots” or wants a quick review artifact, create a lightweight contact sheet from `screenshots/current/*.png` and deliver it as media in chat. This is a human-readable preview only; the committed law remains `screenshots/baseline/*.png` plus the verified smoke gate.
8. Commit baseline PNG changes directly on `main` with a lowercase test/evidence message, e.g.:
   - `test: approve visual baselines`
   - if copy was normalized in the same pass: `test: approve vitae visual baseline`
9. Push `main`.
10. Final report should include approved route names, verification result counts, commit hash, push status, and any policy-noise console lines separately from real errors.

## Exit-code reading

From `scripts/smoke-screens.mjs`:

- `0` — routes match baseline.
- `1` — visual diffs exist; review before approval.
- `2` — one or more baselines are missing; this is often first-run baseline debt, not app failure.
- `3` — boot/config/export/browser failure.

## Pitfalls

- Do not call missing baselines a product failure when export and route capture succeeded.
- Do not approve screenshots before mainline is current; stale baselines become false law.
- Do not run full lint/typecheck/test gates for evidence-only screenshot approval unless code changed or the repo-local skill demands it. The required proof is the visual gate returning `0` after baseline approval.
- If the approval pass includes a small code/copy normalization such as `HEALTH` → `VITAE`, run targeted component/e2e tests that cover the touched surface and `npm run typecheck` before approving/committing baselines.
- Keep `screenshots/current/` and `screenshots/baseline/` conceptually separate: current is generated evidence, baseline is the committed witness.
- Do not approve a dead `/combat` placeholder screenshot (`THE FIELD STIRS.`) as combat evidence. If `/combat` is unseeded/blank, remove it from `scripts/smoke-screens.mjs:ROUTES`, mirror the route removal in `scripts/__tests__/smoke-screens.test.ts`, delete `screenshots/baseline/combat.png`, and document `combat-encounter.png` as the canonical seeded Hazard-style combat screenshot.
- After changing visual-smoke routes, run the smoke-screens helper test and full `npm run verify:visual`, then commit the route/test/README/baseline changes together.
- A generated contact sheet is for Telegram review convenience. Do not commit it unless T explicitly asks for a durable artifact.
