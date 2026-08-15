---
name: boss
encounter_type: boss
scope: category
node_ids: []
dev_menu_button: BOSS
docs:
  - axiomancer-mobile/components/DebugTriggerEncounter.tsx
  - axiomancer-mobile/docs/combat.md
confidence: low
runs_informing_this: "Seeded from current dev-menu/code inspection; not in ordinary daily rotation."
updated: 2026-06-16
---

# Boss — play doctrine

> Durable play doctrine for The Kid. Stable how-to-play only. Boss is not in the ordinary daily rotation unless T directs it.

## How to enter (exact route)

SELF → `DEV MENU` → `DEBUG · TRIGGER ENCOUNTER` → `BOSS` (`testID="debug-trigger-encounter-boss"`). The dev trigger chooses the lowest-level boss foe on the current map, falling back to the gentlest foe if none exists.

## What it is

Boss is a combat variant with boss chrome and no ordinary flee fantasy. A real run must reach combat prelude, fight, round resolution, and terminal outcome or exact blocker.

## Rules learned

- Uses combat rules, but boss presentation/escape affordances differ.
- Treat boss as a T-directed or regression probe, not a standing daily rotation target.

## How to read it (UX / state cues)

- Same as combat, plus boss-specific KNEEL/STRIKE chrome and no-flee expectations.

## How to play it well (winning doctrine)

- Use combat strategy labels: aggressive, defensive, mixed, strategist/status-first.
- Boss evidence should emphasize survivability, status leverage, and whether boss stakes are legible.

## Loss / failure conditions & recovery

- Defeat is valid if aftermath is reached; soft-lock is blocker evidence.

## Known-good end-to-end checklist

- Enter via SELF → DEV MENU → BOSS.
- Confirm boss prelude/chrome.
- Choose stance/action.
- Resolve at least one round and continue to terminal outcome or exact blocker.

## Regression watchpoints (stable)

- `BOSS` dev trigger remains available.
- Boss should not silently behave like ordinary combat if boss chrome/constraints are expected.

## Open questions / learn next

- First attended boss ladder should define baseline boss-specific doctrine.

## Subagent run directive

Use only when parent explicitly selects boss. Return structured notes and stop.

## Provenance

- Confidence: `low`. Informed by code inspection only. Last updated: `2026-06-16`.
