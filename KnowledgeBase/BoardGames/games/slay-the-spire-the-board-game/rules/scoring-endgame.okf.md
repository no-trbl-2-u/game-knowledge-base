---
okf_version: 0.2
type: rule_category
game:
  title: "Slay the Spire: The Board Game"
  slug: "slay-the-spire-the-board-game"
  bgg_id: 338960
  publisher: "Contention Games"
  year: 2024
  edition: "base game"
scope: "base game"
mechanics: [deck-building, cooperative-game, hand-management, campaign-game, point-to-point-movement, variable-player-powers, solo-solitaire-game]
sources:
  - id: "src-002"
    title: "Rulebook - Contention Games"
    url: "https://contentiongames.com/_images/STS_KS_Rulebook.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-04"
    notes: "Win/loss conditions and progression sections."
  - id: "src-003"
    title: "Slay the Spire - Official Rulebook"
    url: "https://boardgamegeek.com/filepage/276680/slay-the-spire-official-rulebook"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-04"
    notes: "v2.27/v2.30 change notes."
  - id: "src-005"
    title: "Slay the Spire: The Board Game — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/338960/slay-the-spire-the-board-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-04"
    notes: "Win condition corroboration."
  - id: "src-008"
    title: "A Review of Slay The Spire (The Board Game) From Someone Who Doesn't Like Rogue-like Games And Has Never Played The Video Game!"
    url: "https://coopgestalt.com/2024/06/13/a-review-of-slay-the-spire-the-board-game-from-someone-who-doesnt-like-rogue-like-games-and-has-never-played-the-video-game"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-04"
    notes: "Post-Act-III progression friction."
confidence: high
status: verified
---

# Scoring and endgame

## Win/loss
- **Source-backed fact [high][src-002]:** Victory occurs if players defeat the final Boss.
- **Source-backed fact [high][src-002]:** Which Boss counts as final depends on how many Acts the group wants to play; players may stop after any Act.
- **Source-backed fact [high][src-002]:** If a player's HP is reduced to 0, that player dies and the party loses, except under optional variants.
- **Source-backed fact [high][src-002]:** The game is divided into Acts; each Act takes about 60-90 minutes, with stop/save/continue options at Act end.

## Progression beyond victory
- **Source-backed fact [medium][src-002]:** Rulebook sections include Unlocks & Ascension, Achievements & Daily Climb, Act IV, Quick Start Rules, and Optional Rules.
- **Source-backed fact [medium][src-003]:** The v2.27 rulebook included an A7 sticker fix; v2.30 reprint added teardown rules and removed optional sequential-turn rules.

## Player friction
- **Player friction [campaign/progression][high][src-008]:** A reviewer who had never played the video game found post-Act III progression unclear and said the rulebook seemed to assume video-game knowledge.

## Design implications for SomberSoft
- Modular victory length is strong: one Act can satisfy a table, while three Acts or Act IV offer mastery depth.
- If a game has unlocks/ascension, the post-win reset/progression procedure must be explicit. The absence of a save-file metaphor on tabletop makes reset rules mission-critical.
