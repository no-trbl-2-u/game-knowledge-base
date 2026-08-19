# Axiomancer daily playthrough cron

Use when operating the daily Kid playthrough cron for Axiomancer mechanics + mobile.

## Mainline law

- Work from `main` only.
- For both repos, run:
  - `git status --short --branch`
  - `git fetch origin --prune`
  - `git checkout main`
  - `git pull --rebase origin main`
  - record `git rev-parse --short HEAD`
- Do not create branches.
- If local changes block checkout or pull, stop and report the blockage.

## Mechanics evidence

- Prefer the canonical player-ish harness: `npm run playtest`.
- For first-level Hazard-style combat, do not trust committed walkthrough goal prose by itself. Re-run the walkthrough and parse the current JSON events/state log for actual `moveToNode`, `resolveMapEvent`, `combat:started`, and `hazardCombat:*` records. If the route now resolves non-encounter events where the goal claims an encounter, report stale harness doctrine rather than claiming route combat proof.
- If using `npm run combat` as fallback Hazard-style mechanics proof, run the actual command after type-checking; command-path-specific `ts-node` import/type errors can break the CLI even when broader docs imply the engine is tested.
- Capture scenario id, run count, policies, win/friendship/defeat/timeout rates, average rounds, dominant policy/stance, and notable findings.
- For Kid encounter/minigame evidence, borrow the mechanics tuning skills' **matrix structure** — player tiers/presets, fixed seeds, strategies/playstyles, run counts, deck presets where relevant — but do **not** A/B-test mechanics, auto-tune numbers, or open tuning PRs. The Kid reports evidence; he does not tune.
- If the playtest command rewrites tracked generated reports under `automation/playtest/reports/`, read and capture the metrics into the dated Workspace report, then revert/clean those generated files so mainline stays clean.
- Do not commit generated report churn unless T explicitly asks for refreshed fixtures/baselines.

## Mobile evidence

- Prefer repo harnesses before inventing browser flows:
  - `npm run verify:visual`
  - `npm run typecheck`
  - repo-local `skills/playtest.md` / `skills/deep-playtest.md` only when their prerequisites fit the session.
- Interpret `verify:visual` precisely:
  - exit `0`: visual gate green.
  - exit `1`: real diff; inspect and report differing routes and pixel ratios. Do not approve baselines unless T asked for approval.
  - exit `2`: missing baseline debt, not automatically product failure.
  - exit `3`: boot/config failure.
- If `verify:visual` exports successfully but live traversal evidence is incomplete, a Hermes browser probe against `.smoke-dist` can supplement console/render evidence. Do not overclaim full combat UI playthrough unless the browser actually reaches stance choice, action choice, and round resolution.
- For the new Hazard-style combat route, do not let stale mobile e2e selectors counterfeit product failure. If `npm run e2e:combat` fails on removed pressure-track test IDs such as `combat-pressure-tracks`, classify it as HP-only-board harness drift and supplement with a real WILDS → encounter modal → Engage → `ENTER COMBAT` browser route witness. A partial mobile proof may be valid for entry and multi-phase enemy resolution even when drag-heavy card play prevents full victory/mercy; state that limit plainly.
- Some mobile browser/e2e harnesses write tracked screenshots while failing (for example `screenshots/combat-redesign/01-reveal.png`). Treat these like generated evidence churn: record the path and finding in the dated report, then `git checkout -- <path>` or otherwise restore the generated tracked file unless T explicitly asked to refresh that artifact/baseline.
- Browser policy lines such as blocked `navigator.vibrate` before user gesture remain policy noise unless paired with visible/runtime breakage. React/web console warnings about accessibility props or nested buttons should be recorded as console hygiene, not automatically conflated with gameplay failure.

## Encounter/minigame learning ladder

When mobile encounter evidence is needed, invoke `references/kid-encounter-playtest-learning.md` before or alongside the ordinary harness. The Kid should complete at least one five-run ladder per feasible daily run, rotating only across the standing daily targets: **Hazard → Gathering → Combat**. Use sequential subagents for one encounter type/category or named node, using `SELF` → `DEV MENU` → `DEBUG · TRIGGER ENCOUNTER` where available, accumulating notes, rotating lenses (naive/UX, winning, strategy, bug-hunt, regression), and then creating/updating stable doctrine under `references/kid-encounter-agents/`. If time prevents full coverage, state exactly which of Hazard/Gathering/Combat ran and which were deferred.

## Stale dependency trap

After a fresh pull, mobile `node_modules` can lag behind `package.json` / `package-lock.json`.

If `npm run typecheck` reports engine fields or phases missing — especially `mercy_choice` or `mercyChoiceActive` — first verify installed package truth:

```bash
npm ls axiomancer-mechanics --depth=0
node -e "const p=require('./node_modules/axiomancer-mechanics/package.json'); console.log(p.version)"
```

If installed mechanics is stale or invalid against the root dependency range, run:

```bash
npm ci
npm run typecheck
```

Only treat the error as a cross-repo contract/version break after the installed package matches the current dependency contract and the typecheck still fails.

## Report path

Write the dated report to:

```text
/root/Workspace/reports/axiomancer-playthrough/YYYY-MM-DD.md
```

Include:

- mechanics result
- mobile result
- failures and suspected causes
- commands and exit codes
- artifacts written
- encounter-learning ladders run/deferred and any `references/kid-encounter-agents/` files created or updated
- commits made, if any
- questions requiring T direction
