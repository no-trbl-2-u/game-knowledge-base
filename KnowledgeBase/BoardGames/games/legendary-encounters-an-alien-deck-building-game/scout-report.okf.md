---
okf_version: 0.2
type: scout_report
game:
  title: "Legendary Encounters: An Alien Deck Building Game"
  slug: "legendary-encounters-an-alien-deck-building-game"
  bgg_id: 146652
  publisher: "Upper Deck Entertainment"
  year: 2014
  weight: 2.71
  edition: "base game"
scope: "base game"
mechanics: [cooperative-game, deck-bag-and-pool-building, deck-building, hand-management, open-drafting, solo-solitaire-game, variable-player-powers]
followups:
  - source_id: "src-002"
    url: "https://boardgamegeek.com/filepage/104744/legendary-enccounters-rulebook"
    failure: blocked
    fallback: "BGG files listing plus secondary rules walkthrough/review sources were used for high-level summaries."
    retry_needs: browser_fetch
    notes: "Official rulebook listing was found, but direct file/PDF extraction was not completed during this cron run."
  - source_id: null
    url: "https://upperdeck.com/"
    failure: not_found
    fallback: "BGG official file listing and secondary summaries."
    retry_needs: alternate_source
    notes: "Search did not surface a stable publisher-hosted base-game rulebook PDF."
sources:
  - id: "src-001"
    title: "BoardGameGeek — Legendary Encounters: An Alien Deck Building Game"
    url: "https://boardgamegeek.com/boardgame/146652/legendary-encounters-an-alien-deck-building-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-09"
    notes: "Discovery source for BGG score signal and classification."
  - id: "src-002"
    title: "BoardGameGeek files — Legendary Enccounters Rulebook"
    url: "https://boardgamegeek.com/filepage/104744/legendary-enccounters-rulebook"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-09"
    notes: "Official rulebook lead; direct extraction pending."
  - id: "src-003"
    title: "Life of Uz — Board-Gaming Review: Legendary Encounters An Alien Deckbuilding Game"
    url: "http://lifeofuz.blogspot.com/2016/05/board-gaming-review-legendary.html"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-09"
    notes: "Rules walkthrough and reception source."
  - id: "src-004"
    title: "The Esoteric Order of Gamers — Legendary Encounters: An ALIEN Deck Building Game v1"
    url: "https://www.orderofgamers.com/legendary-encounters-alien-v1"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-09"
    notes: "Rules summary page and commentary."
confidence: medium
status: needs_followup
---

## Scout objective

Study one high-scoring cooperative deckbuilding game not already present in the corpus.

## Why this game

- Wishlist entry consumed: none. `WISHLIST.md` had no unchecked entries.
- BGG signal: BGG result displayed overall rank about 198, rating 7.8, roughly 14K ratings, and weight 2.71/5.
- Mechanics relevance: cooperative-game plus deck-bag-and-pool-building/deck-building.
- Review/reception signal: secondary review praised thematic tension and flagged timing/difficulty friction.

## Source search path

- BoardGameGeek: found game page, files page, rank/weight/classification, and official rulebook lead.
- Publisher page: no stable Upper Deck base-game rulebook URL found in search.
- Official rulebook: BGG file listing found; direct extraction pending.
- FAQ/errata: EOG summary and BGG files indicate FAQ/rules aids exist; official FAQ extraction pending.
- Review sources: Life of Uz and EOG commentary used as secondary evidence.

## Rulebook extraction status

- Official rulebook found: lead found, extraction incomplete.
- File inspected: BGG file listing inspected via search/extracted snippets, not full PDF.
- Page count/version/date if known: unknown.
- Text extraction quality: not available.

## Documents written

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

- `WISHLIST.md` entry checked off: n-a; no unchecked entry.
- `node scripts/generate-index.mjs` run after writing docs: yes.
- `node scripts/validate-okf.mjs` exit 0 before push: yes.

## Strongest player complaints

- Timing/objective ambiguity.
- Brutal high-player-count difficulty.
- Setup/card sorting burden.

## This game would be better if...

- Scenario setup were faster and more physically segmented.
- Timing collisions had a single official reference sheet.
- Player-count scaling was clearer before first play.

## Open questions

- Direct official rulebook and FAQ extraction remain the main knowledge gap.
