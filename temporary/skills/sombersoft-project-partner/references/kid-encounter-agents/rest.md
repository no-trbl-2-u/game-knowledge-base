---
name: rest
encounter_type: rest
scope: category
node_ids: []
dev_menu_button: REST
docs:
  - axiomancer-mobile/components/DebugTriggerEncounter.tsx
confidence: low
runs_informing_this: "Seeded from current dev-menu/code inspection; not in ordinary daily rotation."
updated: 2026-06-16
---

# Rest — play doctrine

> Durable play doctrine for The Kid. Stable how-to-play only. Rest is not in the ordinary daily rotation unless T directs it.

## How to enter (exact route)

SELF → `DEV MENU` → `DEBUG · TRIGGER ENCOUNTER` → `REST` (`testID="debug-trigger-encounter-rest"`). The dev trigger calls `beginRest({ healFraction: 0.5 })` and routes to `/rest`.

## What it is

Rest / Night Watch is a recovery minigame or recovery encounter. A real run reaches the rest screen, makes any available watch/recovery choices, and returns with recovery state visible.

## Rules learned

- Current dev trigger mirrors live default half-heal.
- Rest is currently secondary to Hazard/Gather/Combat for daily rotation.

## How to read it (UX / state cues)

- Watch VITAE/recovery, watch choices, costs, danger, and whether any upgrade/recovery tradeoff is visible.

## How to play it well (winning doctrine)

- Candidate playstyles: conservative recovery, upgrade-seeking, risk/greed if exposed.

## Loss / failure conditions & recovery

- A rest run fails as evidence if it cannot distinguish actual recovery from screen dressing.

## Known-good end-to-end checklist

- Enter via SELF → DEV MENU → REST.
- Reach `/rest` visibly.
- Make a rest/watch/recovery decision if present.
- Confirm resulting player/resource state.

## Regression watchpoints (stable)

- `REST` dev trigger should route to `/rest`, not generic `/event` with `NO EVENT`.

## Open questions / learn next

- Define final Rest minigame doctrine when T promotes that design pass.

## Subagent run directive

Use only when parent explicitly selects rest. Return structured notes and stop.

## Provenance

- Confidence: `low`. Informed by code inspection only. Last updated: `2026-06-16`.
