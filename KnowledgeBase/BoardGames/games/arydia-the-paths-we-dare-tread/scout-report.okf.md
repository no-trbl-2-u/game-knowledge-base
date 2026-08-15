---
okf_version: 0.2
type: scout_report
game:
  title: "Arydia: The Paths We Dare Tread"
  slug: "arydia-the-paths-we-dare-tread"
  bgg_id: 219650
  publisher: "Far Off Games"
  year: 2026
  weight: null
  edition: "base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, variable-player-powers]
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/219650/arydia-the-paths-we-dare-tread"
    failure: blocked
    fallback: "Used BGG search result metadata and a retailer's BGG-facing rating signal."
    retry_needs: alternate_source
    notes: "2026-08-15 audit: re-confirmed still blocked (403/401), same systemic BGG anti-bot pattern documented corpus-wide in issue #6. No change from 2026-07-23."
sources:
  - id: "src-001"
    title: "Arydia: The Paths We Dare Tread — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/219650/arydia-the-paths-we-dare-tread"
    kind: bgg_page
    provenance: official
    retrieved_at: "2026-07-23"
    notes: "RPG identity and discovery."
  - id: "src-002"
    title: "Arydia — Far Off Games"
    url: "https://faroffgames.com/pages/arydia"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-23"
    notes: "Publisher product description."
  - id: "src-003"
    title: "Arydia Rulebooks — Far Off Games"
    url: "https://faroffgames.com/pages/arydia-rulebooks"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-23"
    notes: "Official rulebook lead; links to the direct PDF now registered as src-007."
  - id: "src-007"
    title: "Arydia rulebook PDF (v35, publisher-hosted download)"
    url: "https://www.dropbox.com/scl/fi/q9qpvu1uc1pea3lozj6i6/Rulebook_280x216mm_FlatFormat_v35_Cropped_OP.pdf?rlkey=fx2oqdenrwmbjcy32jpfsojh0&dl=1"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-15"
    notes: "2026-08-15 audit: downloaded and extracted. 36 pages; SHA-256 72109d2161caee72a1330cf83543442531e8991f9d122a6ac3e7bc432f3ba1ed."
  - id: "src-004"
    title: "Arydia Board Game Review — Cooperative Board Games"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/arydia/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-23"
    notes: "Rules and reception summary."
  - id: "src-005"
    title: "Arydia review — GamesRadar+"
    url: "https://www.gamesradar.com/games/board-games/arydia-the-paths-we-dare-tread-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-23"
    notes: "Combat and reception summary."
  - id: "src-006"
    title: "Arydia product listing — The Game Steward"
    url: "https://www.thegamesteward.com/products/arydia-the-paths-we-dare-tread-all-in-bundle-plus-fabled-fishing-kickstarter-edition-board-game"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-23"
    notes: "BGG average rating signal 7.02 in search extract."
confidence: medium
status: needs_followup
---

## Scout objective

Study one high-scoring RPG / role-playing board game for rules structure, reception, and better-if opportunities.

## Why this game

- Wishlist entry consumed: no. The top unchecked entry, card costing benchmarks, does not fit the RPG focus and remains unchecked.
- Free-choice selection: Arydia was selected as an eligible RPG candidate not already present in the KB; the available BGG-facing score signal was 7.02.
- BGG signal: retailer search result reported a BGG average rating of 7.02; direct BGG statistics were blocked.
- Mechanics relevance: campaign progression, role differentiation, cooperative tactical combat, exploration, and enemy AI.
- Review/reception signal: reviewers praise exploration, tactile state, and threat-driven combat; physical campaign state is a reported friction point.

## Focus-fit and exclusion check

- RPG identity evidence: BGG describes exiles exploring, fighting, and questing; the publisher describes character paths, hostile locations, skills, and cooperation.
- Deckbuilder exclusion: no deck-building, deckbuilder, or deck-construction core mechanism was identified in the BGG description, publisher description, or reviews. Enemy AI cards are behavior programming, not player deck construction.

## Source search path

- BoardGameGeek: page identified; direct retrieval blocked.
- Publisher page: identified; direct retrieval rate-limited.
- Official rulebook: landing page found; PDFs not extracted.
- Reviews: Cooperative Board Games and GamesRadar+ retrieved through search results.
- Forum/community sources: not used.

## Rulebook extraction status

- Official rulebook found: yes, landing page identified.
- File inspected: yes (2026-08-15 audit) — the landing page links a direct publisher-hosted PDF (src-007), 36 pages, v35.
- Page count/version/date: 36 pages, "v35" per filename; no printed revision date found.
- Text extraction quality: good (`pypdf`); `rules/setup.okf.md` upgraded to verified with page-cited claims. Other rule categories (turn-structure, actions, scoring-endgame) still cite secondary reviews only and remain a librarian/audit followup.

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
- `rules/setup.okf.md` (upgraded to `status: verified` by the 2026-08-15 audit; see src-007 in `sources.okf.md`)

## Run validation

- `WISHLIST.md` entry checked off: no — skipped because it is card-costing research, outside the current RPG focus.
- `node scripts/generate-index.mjs` run after writing docs: pending.
- `node scripts/validate-okf.mjs` exit 0 before push: pending.

## Strongest design lessons

Threat-based enemy AI can turn rising danger into a visible campaign pressure while preserving role-playing combat decisions.

## Strongest player complaints

The strongest sourced friction is physical campaign-state burden: one review reports that only one game can be ongoing because substantial state lives in components.

## This game would be better if...

The campaign supported multiple save states and a staged onboarding scenario for the threat system.

## Open questions

Direct BGG score verification remains blocked (systemic anti-bot pattern). Rulebook extraction is now underway: setup is verified from the primary PDF (src-007); exact turn/action/scoring phases and a broader review sample remain librarian follow-ups.