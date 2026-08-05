---
okf_version: 0.2
type: scout_report
game:
  title: "Kingdom Death: Monster"
  slug: "kingdom-death-monster"
  bgg_id: 55690
  publisher: "Kingdom Death"
  year: 2015
  weight: null
  edition: "1.6"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, grid-movement, variable-player-powers]
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/55690/kingdom-death-monster"
    failure: blocked
    fallback: "Used the publisher product page plus search-result metadata and a secondary review."
    retry_needs: alternate_source
    notes: "Direct BGG page returned HTTP 403 and XML API returned HTTP 401 on 2026-07-17; current score/rank/weight remain unverified. 2026-08-05 librarian retry: unchanged, still HTTP 403 / HTTP 401."
  - source_id: "src-005"
    url: "https://shop.kingdomdeath.com/products/kingdom-death-monster-1-5"
    failure: other
    fallback: "Product page was accessible, but no downloadable rulebook was located in the retrieved material."
    retry_needs: manual_review
    notes: "Retry official rulebook, FAQ, or BGG files. 2026-08-05 librarian retry: page still loads (HTTP 200) but still has no rulebook/FAQ PDF link in the fetched HTML; a genuine interactive/JS-rendered session or a different official URL (kingdomdeath.com support/FAQ, not the shop storefront) is needed next."
sources:
  - id: "src-001"
    title: "Kingdom Death: Monster — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/55690/kingdom-death-monster"
    kind: bgg_page
    provenance: official
    retrieved_at: "2026-07-17"
    notes: "Primary discovery and score lead; access blocked."
  - id: "src-002"
    title: "Kingdom Death: Monster 1.6 — Kingdom Death"
    url: "https://shop.kingdomdeath.com/products/kingdom-death-monster-1-5"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-17"
    notes: "Official product page: cooperative campaign and survivor premise; advertises 21-pound product."
  - id: "src-003"
    title: "Kingdom Death: Monster — Wikipedia"
    url: "https://en.wikipedia.org/wiki/Kingdom_Death:_Monster"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-17"
    notes: "Secondary high-level overview of hunt and settlement loop."
  - id: "src-004"
    title: "Kingdom Death: Monster Game Review — Meeple Mountain"
    url: "https://www.meeplemountain.com/reviews/kingdom-death-monster/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-17"
    notes: "Review mechanism list and reception lead."
  - id: "src-005"
    title: "Kingdom Death official rulebook lead"
    url: "https://shop.kingdomdeath.com/products/kingdom-death-monster-1-5"
    kind: other
    provenance: official
    retrieved_at: "2026-07-17"
    notes: "Registered failed extraction/search path; no rulebook file located in accessible product material."
confidence: medium
status: needs_followup
---

## Scout objective

Study one high-scoring RPG / role-playing board game for rules structure, reception, and better-if opportunities.

## Why this game

- Wishlist entry consumed: no — the wishlist had no unchecked entries; free choice.
- BGG signal: Kingdom Death: Monster was selected from the high-rated RPG field; the BGG page is the primary score lead, but its current numeric score and rank could not be retrieved in this run.
- Mechanics relevance: persistent campaign progression, survivor development, cooperative tactical combat, dice-driven risk, and differentiated roles.
- Review/reception signal: available review metadata identifies role-playing, campaign, storytelling, grid movement, dice rolling, and critical hits/failures.

## Focus-fit and exclusion check

- RPG identity evidence: the publisher describes survivors whose story unfolds over many nights in a cooperative campaign; the review explicitly identifies role playing, campaign, and storytelling.
- Deckbuilder exclusion: no deck-building, deckbuilder, or deck-construction mechanism was identified in the accessible publisher description or review mechanism list. It was not selected as a hybrid exception.

## Source search path

- BoardGameGeek: identified as primary discovery source; HTTP 403 on page and HTTP 401 on XML API.
- Publisher page: retrieved successfully.
- Official rulebook: not located.
- FAQ/errata: not located.
- Review sources: Meeple Mountain retrieved as a review lead.
- Forum/community sources: not used.

## Rulebook extraction status

- Official rulebook found: no.
- File inspected: no.
- Page count/version/date if known: unknown.
- Text extraction quality: not applicable; bounded secondary summaries only.

## Documents written

This run for *Kingdom Death: Monster* wrote the standard document set:
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

For *Kingdom Death: Monster*:
- `WISHLIST.md` entry checked off: n/a — wishlist empty.
- `node scripts/generate-index.mjs` run after writing docs: pending.
- `node scripts/validate-okf.mjs` exit 0 before push: pending.

## Strongest design lessons

Persistent survivor identity becomes meaningful when the same campaign loop carries tactical risk, settlement consequence, and narrative continuity.

## Strongest player complaints

The sourced friction is commitment: a 21-pound product and a campaign played over many nights. Numeric BGG reception and broad complaint consensus remain unverified.

## This game would be better if...

The campaign taught its rules in guided layers and made irreversible consequences legible before players committed to them, while preserving the danger that defines the system.

## Open questions

Retry BGG statistics through an authenticated or alternate source; retrieve the official 1.6 rulebook; verify phase order, setup, combat timing, injuries, settlement failure, and campaign end conditions.
