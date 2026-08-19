# Axiomancer Mobile minigame browser e2e depth

Use when the daily roundtable, oversight, or attention-ledger cadence selects Mobile `NEEDS_ATTENTION.md` §5 or asks whether Phase 137 minigames have browser-level evidence.

## Current inspection pattern

1. Establish mobile mainline truth first: fetch/sync `main`, clean status, and verify installed `axiomancer-mechanics` with `npm ls axiomancer-mechanics --depth=0`.
2. Inspect `package.json` scripts for `e2e:hazard`, `e2e:gathering`, `e2e:minigames`, `e2e:combat`, and any Quest/Rest/Cache browser scripts.
3. Inspect `scripts/` for concrete browser harnesses:
   - usually present: `hazard-e2e.mjs`, `gathering-e2e.mjs`, `encounter-routing-e2e.mjs`, `combat-encounter-e2e.mjs`, `loot-rarity-e2e.mjs`
   - gap to check: `quest-e2e.mjs`, `rest-e2e.mjs`, `cache-e2e.mjs`
4. Inspect Jest-level witnesses before declaring the product untested:
   - `state/e2e/quest.flow.engine.test.ts`
   - `state/e2e/quest.screen.test.tsx`
   - `state/e2e/rest.flow.engine.test.ts`
   - `state/e2e/cache.flow.engine.test.ts`
   - `state/e2e/map-encounter-minigames.engine.test.ts`
5. Run or report the strongest cheap gates available:
   - `npm run typecheck`
   - targeted EventGate/map-minigame/debug-trigger tests
   - Hazard UI tests when Hazard surface changed
   - `npm run e2e:combat` and `npm run verify:visual` only if their output is relevant to the verdict.

## Classification doctrine

- Missing Quest/Rest/Cache browser scripts are **browser-depth evidence debt**, not proof those minigames are absent or broken when Jest flow/screen coverage exists.
- If `e2e:minigames` chains through `combat-encounter-e2e.mjs`, a stale `combat-pressure-tracks` selector can block the broad run before Quest/Rest/Cache depth can be judged. Classify that as harness sequencing/selector debt.
- A valid attention-ledger verdict is usually: `defer / recommend phase` unless T explicitly asks to implement immediately.
- Do not patch the ledger row closed until sibling browser scripts exist or T decides Jest-level coverage is sufficient.

## Recommended phase shape

A future evidence phase should:

1. Add `quest-e2e.mjs`, `rest-e2e.mjs`, and `cache-e2e.mjs` as browser-level siblings to Hazard/Gathering.
2. Repair `combat-encounter-e2e.mjs` selectors to current HP-only/Hazard-style board truth before chaining it in `e2e:minigames`.
3. Ensure `e2e:minigames` can run through all minigame witnesses without a stale combat selector masking later evidence.
4. Keep Jest flow/screen tests as unit/route witnesses, not substitutes for browser playthrough evidence when the question is UX/harness depth.
