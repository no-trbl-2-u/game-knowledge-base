---
okf_version: 0.2
type: rule_category
game:
  title: "Betrayal Legacy"
  slug: "betrayal-legacy"
  bgg_id: 240196
  publisher: "Avalon Hill"
  year: 2018
  weight: 2.92
  edition: "Hasbro F3147 support bundle; exact 2018 equivalence unproven"
scope: "exploration and turn structure"
mechanics: ["campaign-game", "cooperative-game", "dice-rolling", "hidden-information", "legacy-game", "modular-board", "semi-cooperative-game", "tile-placement", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-003"
    title: "Hasbro F3147 English rules bundle"
    url: "https://instructions.hasbro.com/api/download/F3147_en-us_avalon-hill-betrayal-legacy-role-playing-haunted-narrative-board-game.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; 84 pages; SHA-256 5c558dacdc495c13ff5ae7d36db4a2dc8ced0e02e39b156d0075c9de4b4a60c9."
  - id: "src-007"
    title: "Official 2018 Wizards Betrayal Legacy rulebook"
    url: "https://media.wizards.com/2018/downloads/rules/BLY-Rulebook-web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; 5,358,358 bytes; 23 pages; SHA-256 ab30782170e8e8d6c794486385422517aad54e0b2ae2781126bfae30bc11ad5e."
confidence: medium
status: needs_followup
---

# Exploration and Turn Structure

- Claim: A turn allows movement up to current Speed and any number of different available actions, subject to each action word being used at most once that turn.
  Source: src-003, src-007
  Evidence: "On Your Turn," printed Rules p.9 (PDF p.6), and "Actions," printed Rules p.14 (PDF p.9).
  Confidence: high

- Claim: Entering an unexplored doorway generally reveals the top tile matching the current region; the new tile is aligned by doorway, and its symbols resolve left to right.
  Source: src-003, src-007
  Evidence: "Discovering a New Tile," printed Rules p.10 (PDF p.7).
  Confidence: high

- Claim: Discovering a tile can interrupt movement and actions while tile symbols resolve; afterward play may continue unless an effect ends the turn or the haunt starts.
  Source: src-003, src-007
  Evidence: "Turn Timing When Discovering a Tile," printed Rules p.10 (PDF p.7).
  Confidence: high

- Claim: Ordinary Event, Item, and Omen cards are drawn according to the discovered tile's symbols and region restrictions; Ongoing Events remain in front of a player until their text removes them.
  Source: src-003, src-007
  Evidence: "Cards" and "Drawing Event, Item, and Omen Cards," printed Rules p.11 (PDF p.7).
  Confidence: high

- Claim: Used Item and Omen cards are turned sideways and reset at the start of their controller's next turn.
  Source: src-003, src-007
  Evidence: "Cards" and game differences, printed Rules pp.3 and 11 (PDF pp.3 and 7).
  Confidence: high
