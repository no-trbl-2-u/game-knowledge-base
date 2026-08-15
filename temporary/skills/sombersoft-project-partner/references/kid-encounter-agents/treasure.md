---
name: treasure
encounter_type: treasure
scope: category
node_ids: []
dev_menu_button: TREASURE
docs:
  - axiomancer-mobile/components/DebugTriggerEncounter.tsx
confidence: low
runs_informing_this: "Seeded from current dev-menu/code inspection; not in ordinary daily rotation."
updated: 2026-06-16
---

# Treasure / Loot-cache — play doctrine

> Durable play doctrine for The Kid. Stable how-to-play only. Treasure is not in the ordinary daily rotation unless T directs it.

## How to enter (exact route)

SELF → `DEV MENU` → `DEBUG · TRIGGER ENCOUNTER` → `TREASURE` (`testID="debug-trigger-encounter-treasure"`). The dev trigger calls `beginLootCache` with a sample consumable and 25 currency, routing through CacheGate to `/cache`.

## What it is

Treasure / The Reliquary is a loot-cache encounter. A real run reaches cache UI, makes cautious/deep/seal-style decisions if present, and claims or leaves with visible payoff.

## Rules learned

- Current dev seed includes sample item + coin so the claim ledger has content.
- Known design pressure: payoff should feel like loot/relic depth, not only flat shillings.

## How to read it (UX / state cues)

- Watch delve/probe/seal controls, danger, reward preview, and final spoils ledger.

## How to play it well (winning doctrine)

- Candidate playstyles: cautious probe, deep delve, seal/leave.

## Loss / failure conditions & recovery

- Failure evidence should distinguish real danger from placeholder reward thinness.

## Known-good end-to-end checklist

- Enter via SELF → DEV MENU → TREASURE.
- Reach `/cache` visibly.
- Make a cache decision.
- Confirm final reward/danger state or exact blocker.

## Regression watchpoints (stable)

- `TREASURE` dev trigger should route to `/cache`, not generic `/event`.
- Reward depth should be reported honestly if it remains placeholder-like.

## Open questions / learn next

- First T-directed cache ladder should judge whether reward depth is still flat.

## Subagent run directive

Use only when parent explicitly selects treasure. Return structured notes and stop.

## Provenance

- Confidence: `low`. Informed by code inspection only. Last updated: `2026-06-16`.
