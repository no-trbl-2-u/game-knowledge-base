---
okf_version: 0.2
type: game_index
game:
  title: "Ark Nova"
  slug: "ark-nova"
  bgg_id: 342942
  publisher: "Feuerland Spiele / Capstone Games"
  year: 2021
  weight: 3.80
  edition: "English base game, Capstone current web resources"
scope: "base game"
mechanics: [action-selection, hand-management, tableau-building, grid-coverage, tile-placement, set-collection, end-game-bonuses, income, solo-solitaire-game, variable-setup]
sources:
  - id: "src-001"
    title: "Ark Nova | Board Game | BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/342942/ark-nova"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-01"
    notes: "Discovery layer for rank, rating, credits, categories, mechanisms, community metadata."
  - id: "src-002"
    title: "Ark Nova product page"
    url: "https://capstone-games.com/products/ark-nova"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official publisher page and resource links."
  - id: "src-003"
    title: "Ark Nova Rulebook PDF"
    url: "https://cdn.shopify.com/s/files/1/0947/3907/1278/files/Ark-Nova-Rulebook.pdf?v=1754428544"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official rulebook PDF; downloaded and converted locally with pdftotext for extraction."
confidence: high
status: verified
---

## Summary

Ark Nova is a 1–4 player heavy strategy game about building a modern, scientifically managed zoo. It is useful to SomberSoft because it joins card-driven tactical play, spatial construction, action-slot timing, engine growth, conservation contracts, and an unusual two-track race endgame.

## Source-backed facts

- Claim: BoardGameGeek lists Ark Nova as a 2021 game with BGG item ID 342942, overall rank #2, strategy rank #2, rating 8.5, 1–4 players, 90–150 minutes, and weight 3.80/5.
  Source: src-001
  Evidence: "Overall: #2 · Strategy: #2"; "BGG Rating 8.5"; "Players 1–4"; "Play Time 90–150 minutes"; "Complexity / Weight 3.80 / 5".
  Confidence: high
- Claim: Capstone describes the game as planning and designing a modern scientifically managed zoo, with enclosures, animals, conservation projects, specialists, and unique buildings.
  Source: src-002
  Evidence: "you will plan and design a modern, scientifically managed zoo"; "build enclosures, accommodate animals, and support conservation projects".
  Confidence: high
- Claim: The game centers on five action cards whose power depends on slot position.
  Source: src-002
  Evidence: "Each player has a set of five action cards... the power of an action is determined by the slot the card currently occupies."
  Confidence: high
- Claim: The rulebook component list includes 212 Zoo cards, 11 Final Scoring cards, 12 Base Conservation Project cards, and 20 double-sided Action cards.
  Source: src-003
  Evidence: "212 Zoo cards"; "11 Final Scoring cards"; "12 Base Conservation Project cards"; "20 double-sided Action cards".
  Confidence: high

## Rules / Mechanics

Mechanic cluster: action selection, hand management, tableau building, grid coverage, contracts/conservation projects, end-game bonuses, income breaks, solo challenge, variable maps/action upgrades.

## Player friction

Primary expected friction: large card deck, slow first turns, high icon load, large table footprint, and scoring/endgame opacity. See reception files.

## Praised design

The action-slot mechanism produces timing tension: take a weak action now or wait for stronger leverage. The zoo map makes engine growth visible and constrains card play through enclosure and adjacency requirements.

## Better-if opportunities

- onboarding: guided first-game decks and visible card prerequisites are important because many cards are initially unplayable.
- scoring/endgame: endgame scoring should be teachable without rulebook retrieval.
- randomness: a large deck needs enough churn and market access to prevent dead strategic lanes.

## Design implications for SomberSoft

- A simple five-action row can carry a heavy system if every action is desirable at different tempos.
- Physical or digital UI should show future action strength and card prerequisites clearly.
- Two opposing scoring markers create a race with legible tension, but final-score math must be ritualized and visible.

## Open questions

- How much of Ark Nova's replayability survives if card count is reduced but churn tools improve?
- Is the official solo mode's fixed declining action count more useful than an automa for SomberSoft solo designs?
