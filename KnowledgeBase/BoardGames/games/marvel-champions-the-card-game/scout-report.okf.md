---
okf_version: 0.2
type: scout_report
game:
  title: "Marvel Champions: The Card Game"
  slug: "marvel-champions-the-card-game"
  bgg_id: 285774
  publisher: "Fantasy Flight Games"
  year: 2019
  weight: null
  edition: "core game"
scope: "base game"
mechanics: [cooperative-game, deck-building, hand-management, solo-solitaire-game, variable-player-powers]
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/285774/marvel-champions-the-card-game"
    failure: blocked
    fallback: "Search result snippet and BGG URL identity"
    retry_needs: browser_fetch
    notes: "Direct urllib request returned HTTP 403; exact live rating/rank/weight not captured."
  - source_id: "src-003"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/b6/30/b630ddfe-e745-435b-a284-572dd510e15d/mc_rulesreference_v15-compressed.pdf"
    failure: pdf_extraction
    fallback: "Publisher product page and search result identifying the official Rules Reference"
    retry_needs: pdf_tooling
    notes: "Current publisher page advertises a newer January 2026 reference; inspect both versions."
  - source_id: "src-004"
    url: "https://www.meeplemountain.com/reviews/marvel-champions-the-card-game/"
    failure: other
    fallback: "Search result snippet"
    retry_needs: browser_fetch
    notes: "Full review text was not extracted in this run."
sources:
  - id: "src-001"
    title: "BoardGameGeek — Marvel Champions: The Card Game"
    url: "https://boardgamegeek.com/boardgame/285774/marvel-champions-the-card-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-12"
    notes: "Selection and eligibility source."
  - id: "src-002"
    title: "Fantasy Flight Games — Marvel Champions product page"
    url: "https://www.fantasyflightgames.com/en/products/marvel-champions-the-card-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-12"
    notes: "Official rules hub."
  - id: "src-003"
    title: "Marvel Champions Rules Reference v1.5"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/b6/30/b630ddfe-e745-435b-a284-572dd510e15d/mc_rulesreference_v15-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-12"
    notes: "Official PDF located; extraction failed."
  - id: "src-004"
    title: "Meeple Mountain — Marvel Champions review"
    url: "https://www.meeplemountain.com/reviews/marvel-champions-the-card-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-12"
    notes: "Review lead."
confidence: low
status: needs_followup
---

## Scout objective

Study one cooperative deck-building/card-construction game for rules structure, reception, and better-if opportunities.

## Why this game

- Wishlist entry consumed: no unchecked entries; free choice.
- BGG signal: BGG page identified a prominent eligible cooperative LCG; direct live score metadata was blocked, so exact score comparison remains unresolved.
- Mechanics relevance: cooperative play, hero deck construction, hand management, asymmetric powers, and solo suitability.
- Review/reception signal: available review snippet praises hero/villain combination breadth.

## Source search path

- BoardGameGeek: game page located; direct fetch blocked with HTTP 403.
- Publisher page: Fantasy Flight Games product/download hub located.
- Official rulebook: v1.5 PDF URL located; extraction failed; current v1.7 reference advertised by publisher page.
- Review sources: Meeple Mountain review located as a lead.

## Rulebook extraction status

- Official rulebook found: yes
- File inspected: no
- Page count/version/date if known: v1.5 URL located; current v1.7 advertised, exact file not retrieved.
- Text extraction quality: unavailable

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

- `WISHLIST.md` entry checked off: n/a — wishlist had no unchecked entry.
- `node scripts/generate-index.mjs` run after writing docs: pending
- `node scripts/validate-okf.mjs` exit 0 before push: pending

## Strongest design lessons

The available evidence points to combinatorial replayability as the game's primary design asset: hero identity and villain scenario can be recombined without abandoning a shared cooperative frame.

## Strongest player complaints

Not established in this run; review and rules extraction followups remain open.

## This game would be better if...

The first-play path exposed deck construction, card timing, and form switching through a guided scenario instead of requiring the card pool to teach itself.

## Open questions

- What is the current BGG score/rank/weight?
- Which rules-reference revision is canonical for the core-game corpus?