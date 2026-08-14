---
name: hazard-combat-first-level
encounter_type: hazard-combat
scope: route
node_ids:
  - fishing-village
  - fv-1..fv-25
dev_menu_button: null
docs:
  - axiomancer-mechanics/docs/combat.md
  - axiomancer-mechanics/docs/world.md
  - axiomancer-mechanics/automation/scripts/walkthroughs/README.md
  - axiomancer-mechanics/automation/scripts/walkthroughs/fishing-village-exploration.goal.md
  - axiomancer-mobile/skills/playtest.md
  - axiomancer-mobile/skills/deep-playtest.md
  - axiomancer-mobile/components/event/EncounterModalOverlay.tsx
  - axiomancer-mobile/app/(tabs)/exploration/index.tsx
confidence: medium
runs_informing_this: "Created 2026-06-23 from T direct steering: Kid must stop treating legacy /combat as the primary combat witness and instead test the new Hazard-style combat through actual first-level map traversal and encounter triggers."
updated: 2026-06-23
---

# Hazard-style combat first-level walkthrough — play doctrine

> Durable play doctrine for The Kid. Stable how-to-play only. Transient bugs go to the dated report, repo `plan/CRITIQUE.md`, or issue candidates.

## What this replaces

The old daily `combat` target proved the legacy `/combat` route and direct dev-trigger fights. That is now secondary evidence. T wants the Kid testing the new Hazard-style combat by walking the real first level and entering fights from authored map nodes and encounter triggers.

Use this file as the base prompt whenever the daily focus is combat unless T explicitly asks for a legacy `/combat` regression.

## How to enter

Primary route:

1. Start from a fresh player / Apprentice-style early-game state.
2. Enter WILDS / Exploration.
3. Walk the actual `fishing-village` first-level map nodes.
4. Let authored node events trigger organically.
5. When an encounter trigger fires, choose `FIGHT` and verify the in-place Hazard-style combat surface, not the old `/combat` route.
6. Continue traversal after aftermath when possible until the route has covered the first level or honestly hits a blocker.

Mechanics fallback route:

- Prefer a committed first-level game-CLI walkthrough if it exists.
- Today the closest witness is `automation/scripts/walkthroughs/fishing-village-exploration`, but it only covers fv-1 → fv-11 → fv-14 → fv-15 and legacy round actions. Treat it as partial map/trigger evidence, not proof of the new Hazard-style combat feel.
- If the game CLI lacks full first-level map traversal, actual encounter triggers, or Hazard-style combat integration, report that as a harness gap. Do not pretend the old defend-loop proves the new combat.

Mobile fallback route:

- If direct WILDS traversal is blocked, use dev tools only to seed/reset state or open the nearest first-level scenario. Do not let SELF → DEV MENU → COMBAT become the main proof unless T requests a legacy regression.

## What it is

A route-level playtest: first-level exploration plus combat entry plus Hazard-style combat readability. The test should answer whether a new player can walk the first level, understand node choices, trigger encounters, read the fight offer, enter Hazard-style combat, resolve at least one fight/minigame sequence, and return to exploration/aftermath without the designer explaining the ritual.

## Evidence matrix

Report counts, not loose impressions:

- route / node list attempted;
- nodes reached;
- encounter triggers observed;
- Hazard-style combat entries reached;
- rounds/hazard-combat decisions resolved;
- terminal outcomes: victory, defeat, mercy/friendship, flee, timeout, blocker;
- commands/harnesses used;
- screenshots/logs/state logs;
- cells invalidated by missing CLI/mobile support.

Minimum daily sample when this doctrine is selected:

- One full first-level route attempt on mobile or exported web.
- One mechanics CLI/e2e witness if a committed route exists.
- If full traversal is impossible, one strongest partial route plus a named blocker/harness gap.

## How to read it

Good state:

- Map nodes are visible, legible, and traversable.
- Node kind/trigger is understandable before and after tapping.
- Encounter modal names the foe/threat and offers clear `FIGHT` / `FLEE` stakes.
- `FIGHT` opens the new in-place Hazard-style combat surface.
- The UI uses `VITAE` and `STANCE` doctrine where combat language appears.
- Aftermath returns cleanly to the route or records a terminal run state.

Bad state:

- The flow jumps to old `/combat` as the primary route.
- The proof starts from SELF → DEV MENU → COMBAT and never walks the level.
- The CLI only drives `stance` + `action` defend/attack loops and no Hazard-style combat decision surface.
- Encounter trigger opens but combat cannot be played to a result.
- Node traversal requires hidden tester knowledge instead of visible affordances.

## How to play it well

- First-contact lens: do not optimize before recording what a new player sees.
- Winning lens: after first contact, choose the clearest survival line, preserve VITAE, and record whether status effects/skills/stance decisions matter.
- Strategy lens: identify whether the new Hazard-style combat asks a real card/dice/resource question or collapses into rote tapping.
- Bug-hunt lens: force back/continue/retrigger edges after aftermath.
- Regression lens: verify that old legacy-combat surfaces have not silently become the main proof again.

## Known-good end-to-end checklist

- Fresh start or Apprentice-style first-level state.
- Reach `fishing-village` WILDS map.
- Traverse at least one authored route using real connected nodes.
- Trigger at least one encounter from a node, not only via debug button.
- Choose `FIGHT`.
- See and operate the new Hazard-style combat surface.
- Resolve at least one meaningful combat/hazard decision sequence.
- Reach aftermath or record the exact blocker.
- Check console/logs/state logs.
- Write a dated report with matrix counts and gaps.

## Regression watchpoints

- Legacy `/combat` is fallback/regression evidence only, not the primary daily combat witness.
- The Kid must not report old CLI heart-defend loops as proof of Hazard-style combat.
- The first-level route must be real `fishing-village` content, not a fabricated node list.
- If the CLI lacks the whole first-level route, file/report the missing CLI surface: actual map nodes, encounter triggers, and Hazard-style combat integration.
- Do not trust the old `fishing-village-exploration` goal text without re-running/parsing the current state log. On 2026-06-24 current `main` traversed `fv-1 -> fv-11 -> fv-14 -> fv-15` but resolved `loot-cache`, `narration`, `quest` and **zero** encounter/combat events; the goal file still claimed a deterministic Mournful Gull encounter. Treat this as stale route-doctrine evidence until a new committed first-level route witness lands. On 2026-06-25 this remained true: direct replay exited cleanly but produced only `world:moved` events plus `cli:exit`, while standalone `npm run combat -- --enemy mournful-gull --auto --policy status --seed 42` proved Hazard-style combat only as fallback, not route proof.
- If `npm run combat` is used as fallback mechanics proof, verify it actually compiles under `ts-node` before reporting combat evidence; it has previously failed while `npm run type-check` alone was green enough to hide command-path-specific import/type errors.
- Mobile player-flow proof may currently be stronger than mechanics route proof: on 2026-06-25 exported web `/exploration` reached `Hovel/fv-1 -> Crossing/fv-2 -> Market/fv-12`, triggered an organic `Driftwood Husk` encounter, used the player-facing `Engage` CTA, and opened the in-place Hazard-style combat board without touching legacy `/combat` or SELF → DEV MENU. Record current route labels and CTAs exactly; do not force old `FIGHT`/Mournful Gull wording onto new evidence.
- Treat `npm run e2e:combat` selector failures such as missing `combat-pressure-tracks` as harness/selector drift until compared against the visible board. If the browser shows HP/VITAE, enemy intent phases, dice tray, card hand, play area, signature skills/Conviction, and End Phase from organic exploration flow, entry into Hazard-style combat is proven even if the e2e selector is stale. Full proof still requires completing a real card/die decision or round resolution.
- Current mobile route evidence (2026-06-26) supports `Hovel/fv-1 -> Crossing/fv-2 cache -> Market/fv-12 encounter -> Driftwood Husk -> Engage -> ENTER COMBAT` as an organic exported-web path into the in-place Hazard-style board. The current encounter CTA is `Engage`, not old `FIGHT`; record the wording seen rather than forcing stale copy onto the report.
- 2026-06-27 repeat evidence confirmed the same organic mobile path after repairing stale `node_modules` (`npm ci` changed installed `axiomancer-mechanics` from invalid `0.32.1` to `0.32.3`): Hovel -> Crossing cache -> Market encounter -> Driftwood Husk -> Engage -> Enter combat reached PHASE 1/3 and End Phase advanced to PHASE 2/3 with player VITAE dropping 75 -> 69. Mechanics `fishing-village-exploration` still resolved fv-11 loot, fv-14 narration, fv-15 quest board and zero encounter/combat events. Mobile `e2e:combat` still failed on stale `combat-pressure-tracks` selector; classify that as harness drift under HP-only doctrine.
- Card play on the current board is drag-first: stage a card by dragging it into the play area, then drag a usable die onto it before applying. Click-only Hermes/browser interaction can advance phases via End Phase but may not prove card resolution. For full proof, use a drag-capable browser path or a committed harness that can apply card+die decisions.
- 2026-06-29 five-run ladder: mobile player flow remains green for organic entry (`/exploration` Hovel/fv-1 -> Crossing/fv-2 cache -> Market/fv-12 encounter -> Driftwood Husk -> `Engage` -> `Enter combat`) and in-place Hazard-style board. Targeted mobile witnesses passed (`state/e2e/combat-encounter.screen.test.tsx`, `components/event/__tests__/EncounterModalOverlay.test.tsx`, 32/32 tests). The proof remains incomplete for full organic resolution because no drag-capable route harness completed card -> die -> apply -> terminal outcome. Mechanics `fishing-village-exploration.json` still resolves fv-11 loot-cache, fv-14 narration, fv-15 quest board and zero encounter/combat events; its goal text is stale for Mournful Gull combat. `scripts/combat-encounter-e2e.mjs` still waits for removed `combat-pressure-tracks`; classify that as stale harness debt under HP-only board doctrine, not product failure.
- 2026-06-30 repeat evidence confirmed mobile organic entry and one phase advance after repairing stale installed mechanics (`npm ci` changed invalid local `axiomancer-mechanics@0.34.0` to required `0.35.1`): `/exploration` Hovel/fv-1 -> Crossing/fv-2 cache -> Market/fv-12 encounter -> Driftwood Husk -> `Engage` -> `Enter combat` reached the in-place HP-only board, then `End phase` advanced from PHASE 1/3 ROUND 1 to PHASE 2/3 ROUND 2 with player VITAE 75 -> 69. Use JS/data-testid activation (`document.querySelector('[data-testid="combat-enter"]').click()`) as an automation fallback when accessibility click reports success but the `combat-enter` button does not advance; record this as harness/automation friction, not player-facing failure, unless a human click also fails. `npm run e2e:combat` may rewrite `screenshots/combat-redesign/01-reveal.png` before failing on stale `combat-pressure-tracks`; revert that generated screenshot before declaring mobile main clean. Full organic resolution remains unproven until a drag-capable route harness completes card -> die -> apply -> terminal outcome.
- 2026-07-01 repeat evidence after mechanics/mobile `0.37.0` confirmed the same split: mechanics `fishing-village-exploration` still exits cleanly but only emits `world:moved` events for `fv-11 -> fv-14 -> fv-15` and resolves loot-cache/narration/quest-board with zero route encounters; direct `npm run combat -- --enemy driftwood-husk --preset apprentice --seed 42 --auto --policy aggressive` proves Hazard-pattern CLI fallback only. Mobile must run `npm ci` if `npm ls axiomancer-mechanics --depth=0` reports an invalid stale install; after repair to `0.37.0`, `/exploration` still reaches `Hovel/fv-1 -> Crossing/fv-2 cache -> Market/fv-12 encounter -> Driftwood Husk -> Engage -> Enter combat`, and End Phase can advance the in-place board. `verify:visual` may be red on root/exploration pixel drift while route proof remains usable; classify browser `navigator.vibrate` before user gesture as policy noise unless paired with a visible runtime break. Full organic resolution remains unproven until card -> die -> apply -> terminal outcome is automated.
- 2026-07-02 mechanics main fixed the route split: the preferred CLI witness is now `npx ts-node src/CLI/game.cli.ts --route fv-2,fv-12 --auto-combat --combat-policy status --combat-seed 42 --combat-max-turns 12 --json-events --state-log /tmp/fishing-village-exploration.jsonl`. Current proof reaches `fv-2` loot-cache, `fv-12` Driftwood Husk encounter, then emits `hazardCombat:start`, `hazardCombat:autoPhase`, `hazardCombat:mercy`, and `hazardCombat:end` with a mercy outcome. Mobile route proof still reaches the in-place board and can advance End Phase; full mobile organic terminal resolution remains unproven until a route harness completes card -> die -> apply -> terminal outcome. If mobile typecheck fails because `selectActiveTab` can return retired `/combat`, patch cold-start routing to `/combat-encounter` and update navigation tests.
- Mobile and mechanics should converge on the same authored first-level route; divergence belongs in `divergences.md` once the self-audit phases ship.

## Open questions / learn next

- Establish a committed `first-level-hazard-combat` game-CLI walkthrough that traverses all intended first-level route beats and enters Hazard-style combat from authored triggers.
- Confirm whether mobile has a deterministic full-route playthrough harness or needs one.
- Define the exact first-level completion condition: all 25 fishing-village nodes, critical path + branches, boss gate, or a curated route with encounter/hazard/rest/gather/loot coverage.

## Subagent run directive

Read this doctrine plus current mechanics/mobile route and combat docs. Walk the real first level. Prefer actual map traversal and encounter triggers. Use legacy `/combat` only as explicitly labeled fallback/regression evidence. Return the structured note schema from `../kid-encounter-playtest-learning.md`, plus the matrix counts above, then stop.

## Provenance

- Confidence: `medium`. Created from T steering on 2026-06-23; not yet backed by a five-run ladder under the new route doctrine.
