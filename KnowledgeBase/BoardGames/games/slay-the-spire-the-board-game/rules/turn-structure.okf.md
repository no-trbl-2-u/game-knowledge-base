---
okf_version: 1.0
document_type: rules_turn_structure
game_slug: slay-the-spire-the-board-game
title: "Turn Structure: Slay the Spire: The Board Game"
source_ids: [official-rulebook, meeple-mountain-review, coopgestalt-review, bgg-rulebook-file]
confidence: high
last_scouted_utc: 2026-07-04
---

# Turn structure

## Combat round
- **Source-backed fact [high][meeple-mountain-review]:** At the start of a combat round, a die is rolled; it can determine monster actions and trigger special relics.
- **Source-backed fact [high][meeple-mountain-review]:** Players resolve applicable start-of-turn abilities in an order they choose, then take actions by playing cards, spending Energy, and coordinating attacks/skills.
- **Source-backed fact [high][coopgestalt-review]:** The rulebook states: "Players can play cards, use potions, and activate abilities in any order they choose." The reviewer identifies this as fine-grained player-selected turn order.
- **Source-backed fact [high][meeple-mountain-review]:** After players finish, monsters activate; monsters generally target the player in their row, while some attacks affect the whole party.
- **Source-backed fact [medium][meeple-mountain-review]:** Some monsters follow preset action sequences tracked by a cube; others use randomized die-determined actions.

## Timing style
- **Praised design [turn pacing][high][coopgestalt-review]:** Flexible action order allows simultaneous action for speed and precise player-selected sequencing when tactics demand it.
- **Source-backed fact [medium][bgg-rulebook-file]:** The BGG official rulebook v2.30 file notes that optional sequential-turn rules were cut from page 23; a designer/publisher comment says removing the snippet corrected an overreaction to early playtesting feedback.

## Design implications for SomberSoft
- The game replaces rigid turns with a shared tactical phase. This improves co-op expressiveness but requires UI clarity in digital analogues: visible intents, shared queue, reversible planning, and no hidden timing traps.
- Simultaneous/free order is safest when enemies have readable intents and all players share loss conditions.