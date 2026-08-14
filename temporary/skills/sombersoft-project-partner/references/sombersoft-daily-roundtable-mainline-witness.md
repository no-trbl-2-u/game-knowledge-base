# Daily roundtable mainline witness pattern

Use for the daily SomberSoft roundtable when the preceding Kid playthrough is blocked by dirty/stale live checkouts or when local repo state may not speak for `origin/main`.

## Pattern

1. Read the Kid report, but do not treat it as product evidence until repo truth is re-established.
2. Fetch both Axiomancer repos and record live branch/status/ahead-behind.
3. If a live checkout is dirty, stale, or behind, create a detached worktree from `origin/main` and run evidence there instead of judging the dirty tree.
   - Mechanics: a clean live main can be used if it is aligned with `origin/main`; otherwise use a detached witness.
   - Mobile/Expo: prefer a real `npm ci` inside the detached worktree before `typecheck` or `verify:visual`; avoid symlinked `node_modules` for Expo Router evidence.
4. Capture gate outputs exactly, then clean generated artifacts before declaring the source worktree clean.
5. For mechanics `npm run playtest`, capture aggregate metrics from generated reports, then revert/remove generated tracked/untracked report artifacts unless the task explicitly updates fixtures. If the playtest report is needed for Tobin's verdict, read it before cleanup and record the key numbers in the dated roundtable report.
6. For mobile, always verify installed engine package truth before trusting typecheck or visual smoke: run `npm ls axiomancer-mechanics --depth=0`. If it is invalid/stale against `package.json`, run `npm ci` and re-check before judging product behavior. If Kid already repaired it earlier the same morning, still re-check but do not reinstall unless the command shows drift.
7. For mobile `npm run verify:visual`, classify by evidence:
   - export/console failure = product/runtime failure;
   - missing baselines = baseline debt;
   - clean export + console clean + pixel diffs = visual regression/approval judgment;
   - diffs expanding from a narrow route pair to most/all smoke routes after an engine catch-up are global state/baseline drift until inspected, not six independent product failures;
   - `/combat` text of only `THE FIELD STIRS.` plus navigation = seeded route/state initialization issue unless T/Judge explicitly decides that blank state is doctrine.
8. When screenshots alone are hard to judge, run a cheap text extraction against the static export with Playwright or equivalent to record what each route actually renders. Preserve canon wording checks (`VITAE`, `STANCE`/`CHOOSE A STANCE`) separately from blank-state evidence.
9. For the T-directed attention-ledger cadence, select exactly one unresolved backlog item and inspect current repo truth for that item only. If the item is factually stale/resolved, patch the narrow ledger/doc row and verify. If it is still a live product/doctrine choice, do not invent closure for neatness: name the file/section, record the current evidence, defer with the exact decision needed, and ask at most one highest-priority question in the final summary.
10. Write the roundtable report under `~/Workspace/reports/roundtable/YYYY-MM-DD.md` and keep the final Telegram/chat summary concise. If questions exist, ask only the highest-priority doctrine/blocker question in the final summary.

## Doctrine cautions

- A Kid blockage can be valid hygiene evidence without being valid gameplay evidence.
- Command-green playtests can still be design-red; report the design signal, not only the exit code.
- Stale mobile `node_modules` can recur between Kid and roundtable when mobile main advances after Kid's run; re-check package truth during roundtable even if Kid already repaired it earlier.
- Do not patch the central ledger from a dirty or non-main doctrine repo unless the factual correction is urgent and explicitly scoped.
- Do not approve mobile combat baselines that preserve a blank combat smoke state by accident.
- Do not close an attention-ledger item merely because it was inspected. A deliberately retained fallback, deferred feature, or product choice remains open/deferred until T decides or shipped code settles it.
