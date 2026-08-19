# Axiomancer roundtable affix / loot review pattern

Use when the daily SomberSoft roundtable, oversight, or T-directed agenda asks for current truth about affixes, loot, modifiers, rarity drops, or mobile loot presentation.

## Source-order

1. Establish mainline truth first: fetch both repos, fast-forward clean `main`, and record branch/HEAD/dirty state.
2. Mechanics is rules authority. Inspect current files rather than memory:
   - `axiomancer-mechanics/src/Items/affix.library.ts`
   - `axiomancer-mechanics/src/Items/modifier.catalogue.ts`
   - `axiomancer-mechanics/src/Items/item.factory.ts`
   - `axiomancer-mechanics/src/Items/loot.generation.ts`
   - `axiomancer-mechanics/src/World/LootCache/*`
   - `axiomancer-mechanics/src/Character/equip-delta.ts` when equip delta/UI presentation is in scope.
3. Mobile is presentation/glue authority. Inspect:
   - `axiomancer-mobile/state/dev/loot-rarity.ts`
   - `axiomancer-mobile/components/DebugLootRarityButtons.tsx`
   - `axiomancer-mobile/state/cache/store-actions.ts`
   - `axiomancer-mobile/state/actions.ts` cache-event branch
   - `axiomancer-mobile/components/inventory/ItemCard.tsx`
   - `axiomancer-mobile/components/inventory/rarityAffordance.ts`
   - `axiomancer-mobile/state/presenters/inventory*.ts`
   - `axiomancer-mobile/state/e2e/cache.loot-table.engine.test.ts`

## Facts to extract

- Recent commits touching Items/LootCache/Effects/equip-delta/mobile loot surfaces; if none, say the current contract is inherited mainline truth, not fresh overnight work.
- Affix catalogue size, prefix count, suffix count.
- Backing modifier catalogue size.
- Status-effect library scale or status-affix bias evidence when relevant.
- Rarity contract:
  - common: 0 named affixes.
  - uncommon: 1 named affix.
  - rare: prefix + suffix.
  - unique: fixed modifiers, not prefix/suffix affixes.
- `AffixControl`, pinned prefix/suffix behavior, `dropItemWithAffixes`, `rolledMods`, `resolveModifiers`, stat/effect/resource payload merging, unique exception, and seeded RNG behavior.
- LootCache / Reliquary behavior: modest vs rich tier, unique chance, trap/probe/claim/currency/keepsake flow.
- Mobile integration: engine-owned `generateRarityDrop`/`rollCacheLoot`, dev LOOT buttons, inventory rarity shine/outline/accessibility labels, equip-delta delegation to engine.

## Verification matrix

Mechanics targeted witnesses:

```bash
npx vitest run src/Items/e2e/affixes.engine.test.ts src/Items/e2e/modifier.catalogue.engine.test.ts src/World/LootCache/e2e/loot-cache.engine.test.ts src/CLI/e2e/lootcache.cli.engine.test.ts
npx vitest run src/Items/e2e/loot.generation.engine.test.ts
npm run build && npm run deploy:check
```

Mobile targeted witnesses:

```bash
npm ls axiomancer-mechanics --depth=0
npm test -- --runTestsByPath state/dev/__tests__/loot-rarity.test.ts components/inventory/__tests__/ItemCard.test.tsx components/inventory/__tests__/rarityAffordance.test.ts state/e2e/cache.loot-table.engine.test.ts --runInBand
npm run typecheck
npm run deploy:check
```

If visual smoke is already freshly covered by the Kid report, do not rerun it during roundtable unless it would change the judgment. Classify visual diffs separately from affix/loot contract truth.

## Reporting posture

- Evidence first; no memory-only claims.
- Separate "recent change" from "current mainline truth".
- Flag open decisions explicitly, especially baseline approval, mobile presentation depth, or story/product timing.
- Do not patch doctrine unless a settled fact is stale. Roundtable is synthesis unless a small factual maintenance patch is clearly warranted.
