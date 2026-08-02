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
scope: "setup and component inventory"
mechanics: ["campaign-game", "cooperative-game", "dice-rolling", "hidden-information", "legacy-game", "modular-board", "semi-cooperative-game", "tile-placement", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-002"
    title: "Hasbro F3147 product and instructions page"
    url: "https://instructions.hasbro.com/en-us/instruction/avalon-hill-betrayal-legacy-role-playing-haunted-narrative-board-game"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; SHA-256 a10d44315499200a6be82486510e7c5d88f469c72f58c10daf39575bcf14ac4a."
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
    notes: "HTTP 200; 5,358,358 bytes; 23 pages; SHA-256 ab30782170e8e8d6c794486385422517aad54e0b2ae2781126bfae30bc11ad5e; footer TM & ©2018 Wizards of the Coast LLC; code 300C4595000001 EN."
confidence: medium
status: needs_followup
---

# Setup and Components

## Starting inventory

- Claim: The official 2018 and F3147 rulebooks record the same starting inventory: one sealed box, one sealed envelope, one rulebook, two haunt books, one Bleak Journal, one sticker sheet, one Folium Infernum, twelve tiles, one numbered track, five figures, five bases, five Family cards, twenty clips, eight dice, seven Item cards, eleven Event cards, one Traitor card, one Monster card, two Legacy decks, one Purgatory deck, twenty tile planks, and 122 tokens.
  Source: src-003, src-007
  Evidence: "Starting Game Components," printed Rules p.2 in both PDFs.
  Confidence: high

- Claim: This inventory is normalized as 22/22 printed lines by preserving the paired haunt-books and Legacy-decks entries and keeping the twelve-tile and twenty-tile-plank entries separate; this is inventory transcription, not proof of every physical printing or hidden text readout.
  Source: src-003, src-007
  Evidence: Both inventories print paired haunt books and paired Legacy decks as grouped entries, while listing 12 tiles and 20 tile planks separately.
  Confidence: high

- Claim: Hasbro's web manifest separately advertises 71 tiles total and 122 tokens, but the source-level starting inventory keeps the twelve-tile line and twenty-tile-plank line separate; no additive-total or physical-identity inference is made.
  Source: src-002, src-003
  Evidence: "71 tiles (including 4 starting tiles), and 122 tokens" on Hasbro; PDF lists twelve available starting-game tiles plus twenty tile planks.
  Confidence: medium

## Campaign setup

- Claim: Before first play, players punch materials, separate the initial card types, preserve the ordered Legacy and Purgatory decks, keep tile planks in order, and choose one family for the entire campaign.
  Source: src-003
  Evidence: "Before You Start," printed Rules p.6 (PDF p.5).
  Confidence: high

- Claim: Chapter setup attaches four clips to each Family card, places the four starting tiles as separate regions, assigns a family-colored base and figure, records a character first name and age, and then reads the top Legacy card.
  Source: src-003
  Evidence: "Setup," printed Rules p.7 (PDF p.5).
  Confidence: high

- Claim: Free play instead shuffles ordinary card decks and tiles, sets out found cards, and randomly chooses the first player.
  Source: src-003
  Evidence: "Setup" steps 8-9, printed Rules p.7 (PDF p.5).
  Confidence: high

## Unknown content boundary

The component quantities are documented, but complete ordered deck, concealed sticker, sealed-content, and card/tile identity readouts were not acquired. No hidden count is inferred.
