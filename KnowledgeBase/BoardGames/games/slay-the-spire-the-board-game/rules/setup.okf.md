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
    notes: "Act I and later-Act setup steps."
  - id: "src-007"
    title: "REVIEW: Slay the Spire: The Board Game"
    url: "https://rollinginthemeep.com/2025/05/22/review-slay-the-spire-the-board-game"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-04"
    notes: "Setup/teardown friction."
  - id: "src-008"
    title: "A Review of Slay The Spire (The Board Game) From Someone Who Doesn't Like Rogue-like Games And Has Never Played The Video Game!"
    url: "https://coopgestalt.com/2024/06/13/a-review-of-slay-the-spire-the-board-game-from-someone-who-doesnt-like-rogue-like-games-and-has-never-played-the-video-game"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-04"
    notes: "Setup ambiguity around the Summon deck."
confidence: high
status: verified
---

# Setup

## Standard Act I setup summary
- **Source-backed fact [high][src-002]:** Each player chooses a character and takes that character's player board, mini, starter deck, card reward deck, and rare reward deck.
- **Source-backed fact [high][src-002]:** Players place cubes with Energy at 3, Block at 0, and HP at the highest printed number on their player board.
- **Source-backed fact [high][src-002]:** The Act I decks used include 1st Encounter, Encounter, Elite, Summon, Event, Relic, Potion, Boss Relic, Daze, Status, and Curse; the rulebook instructs players to shuffle all except Summons, Daze, and Status and keep "1st Encounter!" cards separate.
- **Source-backed fact [high][src-002]:** Players take the Act I board, choose an Act I map, place randomized dark/light map tokens on matching spaces, flip them face up, place figures on the lowest open space, reveal/select the Act I Boss, place the Boot meeple, and draw Neow's Blessing.
- **Source-backed fact [high][src-002]:** Solo setup adds the Loaded Die solo relic.

## Later Act setup
- **Source-backed fact [high][src-002]:** At the start of Acts II and III, replace Act decks for Encounters, Elites, Summons, and Events; heal all players to maximum HP; shuffle each player's card reward deck including skipped cards, but do not shuffle rare rewards.

## Player friction
- **Player friction [rules ambiguity][medium][src-008]:** A reviewer accidentally shuffled the Summon deck and argued the rulebook should explain why it remains unshuffled; they suggested wording that the Summon deck is searched alphabetically later.
- **Player friction [setup/teardown][medium][src-007]:** Review dislikes include fiddly tracking and a massive box/large table footprint; retail comments also call setup time heavy or lengthy.

## Design implications for SomberSoft
- Setup instructions should not merely say what to do; they should say why when a step violates common habit, e.g., "do not shuffle this searchable deck."
- Physical setup can support procedural variety if token types constrain randomness into legible bands.
