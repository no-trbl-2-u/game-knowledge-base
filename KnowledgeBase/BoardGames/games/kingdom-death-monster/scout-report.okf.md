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
    notes: "Direct BGG page returned HTTP 403 and XML API returned HTTP 401 on 2026-07-17; current score/rank/weight remain unverified. Retried 2026-09-04 (librarian): still HTTP 403/401, and a real headless Chromium session (Playwright) was also held at the Cloudflare 'Performing security verification' interstitial. Systemic to boardgamegeek.com from this environment; alternate_source (a BGG-derived mirror) remains the right retrieval route."
  - source_id: "src-005"
    url: "https://shop.kingdomdeath.com/products/kingdom-death-monster-1-5"
    failure: other
    fallback: "Product page was accessible, but no downloadable rulebook was located in the retrieved material."
    retry_needs: manual_review
    notes: "Retry official rulebook, FAQ, or BGG files. Retried 2026-09-04 (librarian): the shop product page still returns HTTP 200 (299,990 bytes) and was fully enumerated — it contains no PDF link of any kind, confirming the original finding on a second dated retrieval rather than leaving it as a one-run observation. The only support surface it exposes is https://support.kingdomdeath.com/en-US, which was also retrieved (HTTP 200) and is a store/fulfillment help centre (store-faq, damaged-items, combine-order, backer-kit articles), not a rules document archive. BGG files remain the outstanding lead but require an authenticated BGG session (see src-001). Not an absence claim."
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
  - id: "src-006"
    title: "Kingdom Death official FAQ — Showdown"
    url: "https://kingdomdeath.com/rules/faq"
    kind: faq
    provenance: official
    retrieved_at: "2026-09-05"
    notes: "Dynamic HTML receipt: HTTP 200, 99,460 bytes, SHA-256 64a66e8d68f1b8976741bfb750bfe169a13ace768192639e504a58404a1993af."
  - id: "src-007"
    title: "Kingdom Death: Monster — WayTooManyGames review"
    url: "https://waytoomany.games/2019/08/11/kingdom-death-monster-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-09-05"
    notes: "Dynamic HTML receipt observed 2026-09-05T03:17:11Z: HTTP 200, 281,491 bytes, SHA-256 5b67c31cae543f3849147d4314540f6d95811b41470fed0fe8434232b7851b4f."
  - id: "src-008"
    title: "Review - Kingdom Death: Monster — Always Board Never Boring"
    url: "https://www.alwaysboardneverboring.com/2016/11/kingdom-death-monster.html"
    kind: review
    provenance: secondary
    retrieved_at: "2026-09-05"
    notes: "Dynamic HTML receipt: HTTP 200, 190,494 bytes, SHA-256 941cf1159ef5530bf6541cee74dcbe7822971df828537fec6a6b7079ca5c6ee6."
  - id: "src-009"
    title: "Kingdom Death: Monster Game Review — Meeple Mountain"
    url: "https://www.meeplemountain.com/reviews/kingdom-death-monster/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-09-05"
    notes: "Dynamic HTML receipt observed 2026-09-05T03:17:12Z: HTTP 200, 240,299 bytes, SHA-256 89e27c36d62c9bee61aac895e0a153b249a76a863f4be65c9e474d0837473c5e."
confidence: medium
status: needs_followup
---

## Scout objective

Study one high-scoring RPG / role-playing board game for rules structure, reception, and better-if opportunities.

## Why this game

- Wishlist entry consumed: yes — the explicit Kingdom Death: Monster AI-deck and hit-location-deck follow-up was updated in this maintenance pass.
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
- Official FAQ: retrieved from `kingdomdeath.com/rules/faq`; selected Showdown entries now support attack timing and hit-location edge cases.
- Review sources: Meeple Mountain retrieved as a review lead.
- Additional review sources: WayTooManyGames and Always Board Never Boring retrieved for deck architecture and reception corroboration.
- Forum/community sources: not used.

## Rulebook extraction status

- Official rulebook found: no.
- File inspected: no.
- Page count/version/date if known: unknown.
- Text extraction quality: not applicable; bounded secondary summaries only.

## 2026-09-05 maintenance findings

- Claim: The official FAQ provides a supported rule source for selected showdown timing and hit-location edge cases, but it is not a replacement for the unretrieved 1.6 core rulebook.
  Source: src-005, src-006
  Evidence: The official FAQ was retrieved successfully and contains Showdown entries; the separate official rulebook search path still yielded no downloadable core rulebook.
  Confidence: high

- Claim: Independent reviews corroborate the AI deck as both monster behavior and a depletable health structure, while hit-location cards carry location-specific combat consequences.
  Source: src-007, src-008, src-009
  Evidence: The three retrieved review pages describe encounter-specific AI decks, AI-card attrition or health, and hit-location cards with wound, reaction, reward, or critical-result content.
  Confidence: high

- Claim: The current research closes the wishlist subtopic at the level of sourced architecture and reception, not complete edition-matched rules coverage.
  Source: src-006, src-007, src-008, src-009
  Evidence: Official FAQ semantics and three independent review receipts support the added claims, while the core rulebook remains an open document gap.
  Confidence: high

## Documents written

- `games/kingdom-death-monster/index.okf.md`
- `games/kingdom-death-monster/sources.okf.md`
- `games/kingdom-death-monster/rules/overview.okf.md`
- `games/kingdom-death-monster/rules/setup.okf.md`
- `games/kingdom-death-monster/rules/turn-structure.okf.md`
- `games/kingdom-death-monster/rules/actions.okf.md`
- `games/kingdom-death-monster/rules/scoring-endgame.okf.md`
- `games/kingdom-death-monster/rules/edge-cases-faq.okf.md`
- `games/kingdom-death-monster/reception/reviews.okf.md`
- `games/kingdom-death-monster/reception/better-if.okf.md`

## Run validation

- `WISHLIST.md` entry checked off: n/a — wishlist empty.
- `node scripts/generate-index.mjs` run after writing docs: pending.
- `node scripts/validate-okf.mjs` exit 0 before push: pending.
- 2026-08-31 (librarian): the two `pending` lines above record the state at scout time only. Kingdom Death: Monster is promoted canonical corpus; `node scripts/generate-index.mjs` and `node scripts/validate-okf.mjs` both ran green in the 2026-08-31 librarian pass.
- 2026-09-05 (Bathcat maintenance): updated `KnowledgeBase/BoardGames/games/kingdom-death-monster/sources.okf.md`, `rules/actions.okf.md`, `rules/turn-structure.okf.md`, `rules/edge-cases-faq.okf.md`, `reception/reviews.okf.md`, `reception/better-if.okf.md`, and this report with the four fresh receipts and bounded claims above; canonical index regeneration and validation are pending final gate execution.

## Strongest design lessons

Persistent survivor identity becomes meaningful when the same campaign loop carries tactical risk, settlement consequence, and narrative continuity.

## Strongest player complaints

The sourced friction is commitment: a 21-pound product and a campaign played over many nights. Numeric BGG reception and broad complaint consensus remain unverified.

## This game would be better if...

The campaign taught its rules in guided layers and made irreversible consequences legible before players committed to them, while preserving the danger that defines the system.

## Open questions

Retry BGG statistics through an authenticated or alternate source; retrieve the official 1.6 rulebook; verify phase order, setup, combat timing, injuries, settlement failure, and campaign end conditions.
