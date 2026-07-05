---
okf_version: 0.2
type: game_index
game:
  title: "Slay the Spire: The Board Game"
  slug: "slay-the-spire-the-board-game"
  bgg_id: 338960
  publisher: "Contention Games"
  year: 2024
  weight: 2.90
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
    notes: "Official rulebook summary source."
  - id: "src-005"
    title: "Slay the Spire: The Board Game — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/338960/slay-the-spire-the-board-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-04"
    notes: "Metadata, rank/rating/player count/playtime/weight, discovery leads."
confidence: high
status: verified
---

# Slay the Spire: The Board Game

## Identity
- **Source-backed fact [high][src-005]:** BoardGameGeek lists *Slay the Spire: The Board Game* as a 2024 game with designer credits Gary Dworetsky, Anthony Giovannetti, and Casey Yano; publisher credit includes Contention Games.
- **Source-backed fact [high][src-005]:** BGG lists player count as 1-4, play time as 30-150 minutes, age 12+, weight 2.90/5, rank Overall 16 and Strategy 11, and rating 8.6 from roughly 13K ratings at discovery time.
- **Source-backed fact [high][src-005]:** BGG description: it is a "co-operative deck-building, dungeon-crawling adventure" where players build character decks, discover relics, and try to slay the Spire.
- **Source-backed fact [high][src-002]:** Official rulebook summary states the game is divided into Acts, each Act takes about 60-90 minutes, and the party may continue, stop, or save at the end of an Act.

## Mechanics tags
- Cooperative play
- Deckbuilding
- Roguelike / run reset
- Campaign-like Act progression
- Character asymmetry
- Card rewards and upgrades
- Relics, potions, statuses, curses
- Branching map and room selection
- Tactical combat with flexible/shared timing
- Solo/co-op automation

## Why selected
This entry was chosen because the game is high-ranked on BGG, has strong co-op deckbuilding and asymmetry signals useful to SomberSoft, and has an accessible official publisher-hosted rulebook PDF.

## Primary rules authority
- Official publisher-hosted rulebook PDF: `https://contentiongames.com/_images/STS_KS_Rulebook.pdf`
- BGG file entry confirms official rulebook v2.30 exists and notes changes: added teardown rules to page 23 and cut optional sequential-turn rules.

## Design implications for SomberSoft
- The strongest transferable lesson is numerical compression: the adaptation preserves deckbuilding identity while reducing health/damage/gold scale for tabletop handling.
- Cooperative deckbuilding gains teeth when one player death loses the party; shared fate increases table talk and interdependence.
- Flexible action order lets players co-plan without rigid downtime, but it demands careful rulebook clarity and interface affordances.

## Open questions
- [medium] Need direct full-text comparison between rulebook v2.30 and the publisher-hosted `STS_KS_Rulebook.pdf`; source extraction identifies official PDF content but not version metadata in the URL itself.
- [medium] Need a deeper sample of BGG user comments beyond search-visible snippets to quantify complaints by category.
