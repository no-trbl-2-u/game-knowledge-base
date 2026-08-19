# Axiomancer Mobile dev-menu populate and evidence fixtures

Use when T asks about Mobile dev-menu controls, POPULATE, evidence presets, inventory fixtures, or visual UI states that need representative game data.

## Lesson

Dev-menu tools must be evidence-grade. For T, a button is weak if it merely dumps data but cannot create the exact state needed to judge the current UI work.

## POPULATE current shape

The Mobile `DEBUG · POPULATE` control lives under the `/dev` route in **INVENTORY & ITEM TOOLS**:

- UI: `components/DebugPopulateAllItems.tsx`
- Section mount: `components/dev/DevToolsSections.tsx`
- Action: `state/actions.ts` → `populateAllItemsAction()`
- Shared materializer: `state/selectors/equipment.ts` → `templateToEquipment()`

It calls `actions.populateAllItems()`, walks the engine registries, and adds one of each:

- `equipmentTemplates`
- `uniqueTemplates`
- `consumableLibrary`

The result toast reports totals such as `populated · N total · X eq / Y uniq / Z cons`.

## Pitfall

Do not assume POPULATE exercises every UI rarity state. Inspect the current materialization path.

As observed in the 2026-06-17 rarity-shine discussion, Mobile's `templateToEquipment()` hard-coded `rarity: 'common'` for normal equipment while the populate path manually overrides unique templates to `rarity: 'unique'`. That means POPULATE can flood inventory and test unique/common handling, but may fail to produce deterministic uncommon/rare examples for green/blue rarity visuals unless the phase updates it.

This is a class of bug: broad debug dumps are not the same as representative evidence fixtures.

## Preferred phase/task guidance

When queuing or implementing a Mobile phase whose UI depends on specific item states:

1. Inspect the dev-menu control and the underlying action/helper, not just the visible button.
2. Require deterministic representative fixtures for each state the UI must prove.
3. For item rarity work, prefer a dedicated **RARITY SHOWCASE** control or a POPULATE enhancement that guarantees:
   - common item
   - uncommon item with one affix
   - rare item with two affixes
   - unique item with fixed modifiers
4. Drive UI semantics from engine/state truth such as `item.rarity`; do not parse composed names.
5. Use structured fields (`prefixName`, `suffixName`, IDs) only for labels/tooltips, not as the primary rarity classifier.
6. Tests should prove the dev fixture creates the states needed by the visual surface.

## Reporting language

If asked to explain POPULATE, be direct:

- It is a dev-only full-inventory dump.
- It is useful for inventory load and broad rendering.
- It is not automatically sufficient for a feature needing specific rarity/affix examples.
- The fix is to turn it into an evidence fixture or add a narrower showcase button.
