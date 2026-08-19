# Axiomancer equipment ownership and release provenance

Use during daily roundtable, cross-repo release checks, or mobile/mechanics equipment work after mechanics package upgrades.

## Durable lesson

Phase 154 moved equipment rule ownership into `axiomancer-mechanics`. Mobile should be presentation/glue only for generated loot, worn-state, and equip delta.

Engine-owned surfaces to verify:

- `generateRarityDrop`
- `rollCacheLoot`
- `equipmentFromTemplate`
- `firstEquippedPerSlot`
- `isEquippedFirstOfSlot`
- `findEquippedInSlot`
- `computeEquipDelta`
- `dropItemAtRarity`

Mobile should import these from `axiomancer-mechanics`, not recreate local logic in files such as `state/loot/affix-roll.ts`, `state/cache/loot-table.ts`, `state/selectors/equipment.ts`, or `state/presenters/equipDelta.ts`.

## Verification pattern

Mechanics:

```bash
npm run build
npm run deploy:check
npm run playtest
npx vitest run \
  src/Items/e2e/affixes.engine.test.ts \
  src/Items/e2e/modifier.catalogue.engine.test.ts \
  src/Items/e2e/loot.generation.engine.test.ts \
  src/Character/equip-delta.test.ts
npm view axiomancer-mechanics version --silent
```

Mobile:

```bash
npm ci
npm ls axiomancer-mechanics --depth=0
node - <<'NODE'
const ax=require('axiomancer-mechanics');
for (const k of ['generateRarityDrop','rollCacheLoot','equipmentFromTemplate','computeEquipDelta','firstEquippedPerSlot','dropItemAtRarity']) {
  console.log(k, typeof ax[k]);
}
NODE
npm run typecheck
npm run verify:visual
npm run e2e:gathering
npx jest \
  state/dev/__tests__/loot-rarity.test.ts \
  state/e2e/cache.loot-table.engine.test.ts \
  state/e2e/inventory.modal.engine.test.ts \
  components/inventory/__tests__/ItemCard.test.tsx \
  components/inventory/EquipDeltaPanel.test.tsx --runInBand
```

## Provenance drift pitfall

If mobile consumes a registry package version that differs from local mechanics `package.json`, or `npm view axiomancer-mechanics@<version> gitHead` is not present in the fetched local repo graph, do **not** invent a release story. Report it as release-provenance drift and queue release hygiene.

Useful checks:

```bash
npm view axiomancer-mechanics version --silent
npm view axiomancer-mechanics@<version> version gitHead dist-tags --json
git fetch origin --tags --prune
git branch -a --contains <gitHead>
git tag --list 'v<version>' --format='%(refname:short) %(objectname:short)'
```

## Reporting language

- Good: "Registry truth is usable by mobile, but release provenance is muddy. Queue release hygiene."
- Bad: "Published cleanly from this commit" unless git/tag/registry evidence proves it.

## Doctrine

When equipment rule logic migrates from mobile to mechanics, patch central/repo-local doctrine if settled: engine owns rules and randomness; mobile owns presentation, store dispatch, and player-facing readback.
