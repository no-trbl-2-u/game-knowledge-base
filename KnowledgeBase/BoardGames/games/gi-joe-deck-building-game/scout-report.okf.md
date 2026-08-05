---
okf_version: 0.2
type: scout_report
game:
  title: "G.I. JOE Deck-Building Game"
  slug: "gi-joe-deck-building-game"
  bgg_id: 343526
  publisher: "Renegade Game Studios"
  year: 2021
  weight: 2.50
  edition: "core set"
scope: "base game"
mechanics: [cooperative-game, deck-building, hand-management, variable-player-powers, solo-solitaire-game, campaign-game]
sources:
  - id: "src-001"
    title: "BoardGameGeek — G.I. JOE Deck-Building Game"
    url: "https://boardgamegeek.com/boardgame/343526/gi-joe-deck-building-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-14"
    notes: "Selection and mechanism source."
  - id: "src-002"
    title: "Renegade Game Studios — G.I. JOE Deck-Building Game"
    url: "https://renegadegamestudios.com/g-i-joe-deck-building-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-14"
    notes: "Official product page."
  - id: "src-003"
    title: "G.I. JOE Deck-Building Game Rulebook"
    url: "https://renegadegamestudios.com/content/File%20Storage%20for%20site/Rulebooks/GI%20JOE%20Deck-Builder/GIJ_SKU1_Deck_Builder_Rulebook_LowRez_P2%202021.12.14.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-14"
    notes: "Official PDF retrieved and text-extracted."
  - id: "src-004"
    title: "Meeple Mountain — GI JOE Deck-Building Game Review"
    url: "https://www.meeplemountain.com/reviews/gi-joe-deck-building-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-14"
    notes: "Review and BGG score signal."
  - id: "src-005"
    title: "Renegade Game Studios — G.I. JOE customer reviews"
    url: "https://renegadegamestudios.com/g-i-joe-deck-building-game/"
    kind: review
    provenance: community
    retrieved_at: "2026-07-14"
    notes: "Limited customer testimonials."
  - id: "src-006"
    title: "Renegade Game Studios — G.I. JOE FAQ"
    url: "https://renegadegamestudios.com/content/File%20Storage%20for%20site/GI%20JOE%20DBG/Joe%20DBG%20FAQ.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-08-05"
    notes: "Publisher-linked FAQ; extracted on the 2026-08-05 librarian retry pass (see rules/edge-cases-faq.okf.md)."
confidence: high
status: verified
---

## Scout objective

Study one game matching the current Bathcat focus: cooperative plus deckbuilder, prioritized by highest BGG score signal.

## Why this game

- Wishlist entry consumed: none; `WISHLIST.md` had no unchecked entries.
- BGG signal: Meeple Mountain reports a BGG Geek Rating of 7.67044 for BGG item 343526; the BGG page identifies the game as cooperative deck-building.
- Mechanics relevance: cooperative deck growth, mission resolution, escalating automated opposition, asymmetric Leaders, and scenario progression.
- Review/reception signal: publisher customer reviews praise theme, approachable base rules, adjustable difficulty, and synergy.

## Source search path

- BoardGameGeek: game page located; automated page/API retrieval returned access errors, so no live rank or vote count was asserted.
- Publisher page: retrieved successfully.
- Official rulebook: publisher PDF retrieved and text-extracted successfully.
- FAQ/errata: publisher FAQ URL registered; extracted on the 2026-08-05 librarian retry pass.
- Review sources: Meeple Mountain search result and publisher customer reviews.

## Rulebook extraction status

- Official rulebook found: yes.
- File inspected: yes.
- Page count/version/date if known: 24 pages; PDF created 2021-12-07, modified 2023-04-18.
- Text extraction quality: successful with pdftotext; minor font warnings only.

## Documents written

This run for *G.I. JOE Deck-Building Game* wrote the standard document set:
- `index.okf.md`
- `sources.okf.md`
- `rules/overview.okf.md`
- `rules/setup.okf.md`
- `rules/turn-structure.okf.md`
- `rules/actions.okf.md`
- `rules/scoring-endgame.okf.md`
- `rules/edge-cases-faq.okf.md`
- `reception/reviews.okf.md`
- `reception/better-if.okf.md`

## Run validation

- `WISHLIST.md` entry checked off: n-a; no unchecked entries existed.
- `node scripts/generate-index.mjs` run after writing docs: pending until all files are written.
- `node scripts/validate-okf.mjs` exit 0 before push: pending until all files are written.

## Strongest design lessons

A compact cooperative mission loop can make deckbuilding legible: recruit cards, assign a transport-limited team, resolve a concrete objective, then absorb escalating opposition.

## Strongest player complaints

This run found limited reception evidence. The unresolved FAQ and multi-system setup are the main documentation and onboarding risks.

## This game would be better if...

The first mission taught the entire loop through a controlled setup and the FAQ's card rulings were integrated into a player aid.

## Open questions

- What are the current live BGG average rating, rank, and vote count?
