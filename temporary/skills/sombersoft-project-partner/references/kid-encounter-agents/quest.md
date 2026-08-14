---
name: quest
encounter_type: quest
scope: category
node_ids: []
dev_menu_button: QUEST
docs:
  - axiomancer-mobile/components/DebugTriggerEncounter.tsx
confidence: low
runs_informing_this: "Seeded from current dev-menu/code inspection; not in ordinary daily rotation."
updated: 2026-06-16
---

# Quest Board — play doctrine

> Durable play doctrine for The Kid. Stable how-to-play only. Quest is not in the ordinary daily rotation unless T directs it.

## How to enter (exact route)

SELF → `DEV MENU` → `DEBUG · TRIGGER ENCOUNTER` → `QUEST` (`testID="debug-trigger-encounter-quest"`). The dev trigger calls `beginQuestBoard({ boardId: 'build-the-boat' })`, the first authored board.

## What it is

Quest Board is a board/minigame encounter around authored quest verbs. A real run reaches `/quest`, chooses board verbs, and produces reward, failure, progress, or exact blocker.

## Rules learned

- Current dev trigger targets `build-the-boat`.
- Mechanics sim vocabulary suggests safe/low-risk, gambler/press-your-luck, and economist/reward-optimizer playstyles.

## How to read it (UX / state cues)

- Watch available verbs, risk/reward framing, progress, costs, failure/escalation, and reward ledger.

## How to play it well (winning doctrine)

- Candidate playstyles: safe/low-risk, gambler/press-your-luck, economist/reward-optimizer.

## Loss / failure conditions & recovery

- Failure should be recorded as board outcome only if the board reaches a real result; dead verbs/routes are blockers.

## Known-good end-to-end checklist

- Enter via SELF → DEV MENU → QUEST.
- Reach `/quest` visibly.
- Choose at least one quest-board verb.
- Record progress/reward/failure or exact blocker.

## Regression watchpoints (stable)

- `QUEST` dev trigger should route to `/quest`, not generic `/event`.
- `build-the-boat` remains the default board unless mobile changes its dev seed intentionally.

## Open questions / learn next

- First T-directed quest ladder should classify verbs by clarity and payoff.

## Subagent run directive

Use only when parent explicitly selects quest. Return structured notes and stop.

## Provenance

- Confidence: `low`. Informed by code inspection only. Last updated: `2026-06-16`.
