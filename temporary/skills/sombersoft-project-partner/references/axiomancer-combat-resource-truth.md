# Axiomancer combat resource truth

Use this reference when T asks whether Axiomancer skills can cast, whether resources live on character/game/combat state, or whether token/resource docs are trustworthy.

## Canonical shape

- `Character` owns skill knowledge/unlocks only:
  - `knownSkills: string[]`
  - no persistent mana/resource pool.
  - no canonical player skill equipment/loadout gate; current `equippedSkills` usage in main is legacy compatibility debt tracked by Phase 98.
- `GameState` owns the active combat pointer:
  - `combat: CombatState | null`.
- `CombatState` owns the live player casting pool:
  - `combatResources: { heart, body, mind, fallacy, paradox }`.

Do not look for `Character.mana`, `Character.maxMana`, `Character.resources`, or `CombatState.player.combatResources`. Those are stale mental models.

## Runtime flow

- `initializeCombat(player, enemy)` seeds `combatResources` from equipped item/set combat-start grants. With no token-granting gear, the pool starts at zero.
- Player `attack` / `defend` actions generate stance tokens through `generateBasicActionResources`:
  - attack hit: `+3` of player action stance
  - attack miss: `+1` of player action stance
  - defend: `+5` of player action stance
- Item/set generation bonuses may add extra tokens on top of that base table.
- Consumable `resourceGrant` may add tokens when used through the combat `item` action.
- Player `skill` actions check `canUseSkill(combatResources, skill)`, spend `skill.resourceCost`, then generate one Fallacy/Paradox token according to skill category/tier.
- Enemy-cast skills use a sentinel pool internally and discard it; they do not spend or generate against the player's `combatResources`.

## Audit/remediation pattern

When this territory is questioned:

1. Sync `main` first: fetch, checkout `main`, pull/rebase if no local edits block it.
2. Read current README/AGENTS plus `docs/skills.md`, `docs/quickstart-skills.md`, `docs/quickstart-combat.md`, and relevant types/engine files.
3. Inspect implementation anchors:
   - `src/Skills/types.ts`
   - `src/Skills/skill.engine.ts`
   - `src/Combat/types.ts`
   - `src/Combat/combat.reducer.ts`
   - `src/Combat/phases/scenario.ts`
   - `src/Items/types.ts`
   - `src/Items/equipment.engine.ts`
4. If docs contradict code, patch docs and code comments together. In this class of issue, docs can poison future mobile/UI assumptions even when engine code is right.
5. Verify with at least:
   - `npm run type-check`
   - targeted skill/resource/combat tests, usually `src/Skills/e2e/skill.engine.test.ts`, `src/Skills/e2e/skill-resource-system.engine.test.ts`, and `src/Combat/e2e/combat.resolver.engine.test.ts`.
6. Commit directly to `main` and push unless T asked otherwise.

## Known stale-doc traps

- Quickstarts may imply an off-stance resource award. The base engine has no separate off-stance award; all base tokens are of the player action's stance.
- Older text may say token pools always start at zero. More precisely: `initializeCombat` seeds from item/set combat-start grants; zero is the ungeared/default case.
- Older migration text may say `CombatState.player.combatResources`. Correct path is `CombatState.combatResources`.
