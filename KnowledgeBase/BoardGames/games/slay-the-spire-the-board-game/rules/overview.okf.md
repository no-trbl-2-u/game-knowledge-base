---
okf_version: 0.1
type: rule_category
game:
  title: "Slay the Spire: The Board Game"
  slug: "slay-the-spire-the-board-game"
  bgg_id: 338960
  publisher: "Contention Games"
  year: 2024
  edition: "base game"
scope: "base game"
sources:
  - id: "src-002"
    title: "Rulebook - Contention Games"
    url: "https://contentiongames.com/_images/STS_KS_Rulebook.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-04"
    notes: "Core loop, player state, and progression rules."
  - id: "src-005"
    title: "Slay the Spire: The Board Game — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/338960/slay-the-spire-the-board-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-04"
    notes: "Win condition corroboration."
  - id: "src-006"
    title: "Slay the Spire: The Board Game Review"
    url: "https://www.meeplemountain.com/reviews/slay-the-spire-the-board-game"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-04"
    notes: "Map composition detail."
confidence: high
status: verified
---

# Rules overview

## Core loop
- **Source-backed fact [high][src-002]:** The rulebook describes the game as a cooperative roguelike deckbuilding adventure where players craft decks, fight enemies, gain relics, and defeat bosses.
- **Source-backed fact [high][src-002]:** Players proceed through Acts. At the end of an Act they can continue, stop and end the adventure, or save and continue later.
- **Source-backed fact [high][src-005]:** If players defeat the final Boss, they win; which Boss is final depends on how many Acts they choose to play.
- **Source-backed fact [high][src-002]:** If any player HP reaches 0, that player dies and the party loses, except where optional rules alter that.

## Player state
- **Source-backed fact [high][src-002]:** Player boards track HP, Block, Energy, character ability, and resource/status cubes.
- **Source-backed fact [high][src-002]:** Damage can be prevented by Block; "lose HP" effects cannot be blocked.
- **Source-backed fact [high][src-002]:** Power cards stay in play until combat ends; exhausted cards leave the combat until it ends.

## Progression
- **Source-backed fact [high][src-002]:** Each player starts with a starter deck and improves it through card rewards, removal, upgrade, and transformation.
- **Source-backed fact [medium][src-006]:** The map includes normal encounters, elites, shops, campfires, and bosses; randomized tokens preserve a procedural feeling on a physical board.

## System lesson
The rules preserve roguelike pressure by making defeat reset the run, but preserve table sanity through Act stopping/saving. This makes a long campaign-shaped session divisible without dissolving stakes.

## Open questions
- [medium] Need exact page references from the full v2.30 PDF for every keyword; the extracted PDF summary gives table of contents and sections but not complete page-anchored text for all abilities.
