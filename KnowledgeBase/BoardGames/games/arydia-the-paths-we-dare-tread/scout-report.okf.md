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
    retry_needs: manual_review
    notes: "Direct BGG page and XML API returned access errors during this run. Retried 2026-08-19 (librarian): still HTTP 403, matching the systemic BGG block documented in marvel-champions-the-card-game/scout-report.okf.md — not a game-specific issue. Downgraded to manual_review since automated fetch has failed twice."
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
    notes: "Official rulebook lead; PDF links resolved and extracted in the 2026-08-19 librarian pass. Followup resolved."
  - id: "src-007"
    title: "Arydia Rulebook (v35)"
    url: "https://www.dropbox.com/scl/fi/q9qpvu1uc1pea3lozj6i6/Rulebook_280x216mm_FlatFormat_v35_Cropped_OP.pdf?rlkey=fx2oqdenrwmbjcy32jpfsojh0&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Recovered via the publisher rulebooks page and text-extracted with curl + pypdf in the 2026-08-19 librarian pass. 36 pages, v35."
  - id: "src-008"
    title: "Arydia Quick Start Guide (v35)"
    url: "https://www.dropbox.com/scl/fi/t4wjp33aaheoxoniei36m/QuickStartGuide_280x216mm_v35_Cropped_OP.pdf?rlkey=5w4bqlm9dp7kl7e27cdhmzxrq&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Official first-game onboarding booklet, retrieved and text-extracted (16 pages) in the 2026-08-19 librarian pass."
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
confidence: high
status: needs_followup
last_verified: "2026-08-19"
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
- Official rulebook: landing page found; main Rulebook and Quick Start Guide PDFs resolved and text-extracted in the 2026-08-19 librarian pass.
- Reviews: Cooperative Board Games and GamesRadar+ retrieved through search results.
- Forum/community sources: not used.

## Rulebook extraction status

- Official rulebook found: yes.
- File inspected: yes (2026-08-19 librarian pass).
- Page count/version/date: Rulebook 36 pages (v35); Quick Start Guide 16 pages (v35).
- Text extraction quality: successful with curl + pypdf; the Quick Start Guide hit a form-XObject extraction limit on some decorative elements but body text extracted cleanly.

## Documents written for the Arydia intake

This run produced the standard canonical set for Arydia: `index.okf.md`,
`sources.okf.md`, the six `rules/*.okf.md` category files (overview,
setup, turn-structure, actions, scoring-endgame, edge-cases-faq), and
both `reception/*.okf.md` files (reviews, better-if).

## Run validation

- `WISHLIST.md` entry checked off: no — skipped because it is card-costing research, outside the current RPG focus.
- `node scripts/generate-index.mjs` run after writing docs: pending.
- `node scripts/validate-okf.mjs` exit 0 before push: pending.
- 2026-08-31 (librarian): the two `pending` lines above record the state at scout time only. Arydia: The Paths We Dare Tread is promoted canonical corpus; `node scripts/generate-index.mjs` and `node scripts/validate-okf.mjs` both ran green in the 2026-08-31 librarian pass.

## Strongest design lessons

Threat-based enemy AI can turn rising danger into a visible campaign pressure while preserving role-playing combat decisions.

## Strongest player complaints

The strongest sourced friction is physical campaign-state burden: one review reports that only one game can be ongoing because substantial state lives in components.

## This game would be better if...

The campaign supported multiple save states and a staged onboarding scenario for the threat system.

## Open questions

Direct BGG score verification remains blocked corpus-wide as of 2026-08-19 (manual review needed). Official rulebook extraction, setup/turn phases, actions, and scoring are now resolved in `rules/*.okf.md`. Path-specific setup/skill rules (printed on each Path's physical slipcase) and a broader review sample remain open.