---
okf_version: 0.2
type: game_index
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  weight: 4.38
  edition: "English base game / rules updated March 2012"
scope: "base game"
mechanics: [deck-building, hand-management, card-play-conflict-resolution, modular-board, grid-movement, dice-rolling, cooperative-game, solo-solitaire-game, variable-player-powers, campaign-game]
sources:
  - id: "src-001"
    title: "Mage Knight Board Game — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/96848/mage-knight-board-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Discovery layer for metadata, mechanisms, classification, official-link lead, review/forum leads, complexity signal."
  - id: "src-002"
    title: "Mage Knight — WizKids product page"
    url: "https://wizkids.com/mage-knight"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official product page; web search extraction exposed overview, details, component list, and official rule/FAQ links."
  - id: "src-003"
    title: "MK_rulebook_ENG_searchable-mar2012.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Official rulebook linked by WizKids. WizKids host still 500s; text extracted from a Wayback Machine snapshot on 2026-07-08 (20 pages, pypdf)."
  - id: "src-004"
    title: "MK_walkthrough_ENG_searchable-mar2012.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_walkthrough_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Official walkthrough linked by WizKids. WizKids host still 500s; text extracted from a Wayback Machine snapshot on 2026-07-08 (20 pages, pypdf)."
  - id: "src-005"
    title: "MK_FAQ_1.0v2.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_FAQ_1.0v2.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Official FAQ linked by WizKids. WizKids host still 500s; text extracted from a Wayback Machine snapshot on 2026-07-08 (3 pages, pypdf); dated 'Version 1.0 - 7th February 2014'."
confidence: high
status: verified
---

## Summary

Mage Knight Board Game is a 2011 WizKids title by Vlaada Chvátil about exploring and conquering the Atlantean Empire through deck-driven movement, combat, influence, mana management, units, reputation, fame, scenarios, solo/co-op/competitive modes, and character progression. It was selected because it is not yet present in the KB, BGG exposes a heavy-game reception signal, and WizKids still publishes official rules, walkthrough, and FAQ links.

## Source-backed facts

- Claim: BGG lists Mage Knight Board Game as item ID 96848, designed by Vlaada Chvátil and published by WizKids.
  Source: src-001
  Evidence: BGG search extract: "Designer ... Vlaada Chvátil" and "Publisher ... WizKids" on the Mage Knight Board Game page.
  Confidence: high
- Claim: BGG classifies the game with adventure, exploration, fantasy, and fighting categories and mechanisms including card-play conflict resolution, cooperative game, deck/bag/pool building, dice rolling, grid movement, and variable-player powers.
  Source: src-001
  Evidence: BGG extract mechanism/category block.
  Confidence: high
- Claim: WizKids positions Mage Knight as "Epic Exploration and Conquest" mixing character development, intrigue, and combat.
  Source: src-002
  Evidence: WizKids snippet: "a game of Epic Exploration and Conquest that mixes character development, intrigue, and the clashing of swords".
  Confidence: high
- Claim: WizKids lists release date November 2011, 1-4 players, ages 14+, and 1-4 hour game time.
  Source: src-002
  Evidence: WizKids Details table: "Release Date November 2011", "Game Time 1-4 Hours", "Ages 14+", "Players 1-4".
  Confidence: high
- Claim: WizKids officially links a Game Walkthrough, Download Rules, and Official FAQ.
  Source: src-002
  Evidence: WizKids page links named "Game Walkthrough", "Download Rules", and "Official FAQ".
  Confidence: high

## Rules / Mechanics

Mage Knight is an optimization adventure system. The main verbs are move, explore, interact, recruit, fight, heal, gain fame/reputation, learn stronger cards, and conquer scenario targets. Its lesson is not simply complexity; it is compression. One hand of cards becomes mobility, purchasing power, attack, block, healing, and timing pressure.

## Player friction

The strongest friction signals are rules density, long play time, turn analysis, and downtime outside solo play. BGG lists a complexity weight of 4.38/5 in search extraction, and player comments cite "rules checking" and "fiddly rules."

## Praised design

Reception praises the game as a dense solo/co-op puzzle with meaningful character progression, replayability, deterministic combat, and strong card-combo payoff.

## Better-if opportunities

See `reception/better-if.okf.md`.

## Open questions

- Decide whether Ultimate Edition deserves a separate edition entry after base-game study is complete.

## Retry notes
- 2026-07-08: Resolved. WizKids' own hosts still return HTTP 500 for the rulebook/walkthrough/FAQ PDFs, but Wayback Machine snapshots of all three were fetched and text-extracted successfully; see `sources.okf.md` and the `rules/*` docs for page-referenced claims now sourced directly from official text.
