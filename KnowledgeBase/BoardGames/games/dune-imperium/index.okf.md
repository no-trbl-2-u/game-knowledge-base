---
okf_version: 0.2
type: game_index
game:
  title: "Dune: Imperium"
  slug: "dune-imperium"
  bgg_id: 316554
  publisher: "Dire Wolf"
  year: 2020
  weight: 3.08
  edition: "English base game"
scope: "base game"
mechanics: [deck-building, worker-placement, hand-management, multi-use-cards, force-commitment, race, variable-player-powers]
sources:
  - id: "src-001"
    title: "Dune: Imperium — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/316554/dune-imperium"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Discovery layer for metadata, rank, mechanisms, player-count signals, and reception leads."
  - id: "src-002"
    title: "Dune: Imperium — Dire Wolf product page"
    url: "https://www.direwolfdigital.com/dune-imperium/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Publisher/product source and gateway to official resources."
  - id: "src-003"
    title: "DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official English rulebook hosted on Dire Wolf CloudFront resource path."
confidence: high
status: verified
---

## Summary

Dune: Imperium is a 2020 Dire Wolf strategy game combining deck-building, worker placement, faction influence, hidden-information combat, and a 10-point victory race. It was selected because BGG marks it as a top-ranked strategy title with strong reception signals and because official rules, FAQ, and player aids are accessible from the publisher resource path.

## Source-backed facts

- Claim: The game is published by Dire Wolf and listed on BGG as Dune: Imperium (2020), BGG item ID 316554.
  Source: src-001
  Evidence: "# Dune: Imperium (2020)" and "Publisher ... Dire Wolf" in BGG extracted/search result.
  Confidence: high
- Claim: BGG describes the game as using deck building to add hidden information to worker placement.
  Source: src-001
  Evidence: "uses deck building to add a hidden information angle to traditional worker placement."
  Confidence: high
- Claim: The official rulebook describes Dune: Imperium as a deck-building worker placement game.
  Source: src-003
  Evidence: Rulebook p.2 / extracted lines 17-21: "DUNE: IMPERIUM is a deck-building worker placement game..."
  Confidence: high
- Claim: The game ends at the end of a round if any player has 10 or more Victory Points or if the Conflict Deck is empty.
  Source: src-003
  Evidence: Rulebook p.6 / extracted lines 371-373.
  Confidence: high

## Rules / Mechanics

Core loop: reveal a Conflict, draw five cards, alternate Agent turns until players reveal, resolve combat, seed spice on ignored maker spaces, recall Agents, and repeat. The most instructive mechanism is that cards have dual use: Agent icons unlock board spaces, while unrevealed cards later generate persuasion/swords.

## Player friction

The game carries moderate procedural load: icon matching, resource gates, influence thresholds, combat intrigue timing, and split card use. BGG also marks language dependence as moderate in-game text needing a crib sheet or paste-ups.

## Praised design

Reception sources repeatedly praise the fusion of deck-building and worker placement, the tension from hidden combat strength, and varied paths through factions, combat, and economic card acquisition.

## Better-if opportunities

See `reception/better-if.okf.md` for classified opportunities.

## Design implications for SomberSoft

- Dual-use cards are strongest when each use creates a real opportunity cost, not a decorative alternate mode.
- Short victory races make every scoring vector legible and urgent.
- Hidden combat modifiers can create tension if bounded by public commitment signals.

## Open questions

- Whether the original base game should be studied beside Uprising as an official iteration/patch of the same design lineage.
- Which leader/faction balance complaints are best supported by tournament or digital telemetry rather than anecdotal review comments.
