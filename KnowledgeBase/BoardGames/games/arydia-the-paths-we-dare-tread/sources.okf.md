---
okf_version: 0.2
type: sources
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
sources:
  - id: "src-001"
    title: "Arydia: The Paths We Dare Tread — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/219650/arydia-the-paths-we-dare-tread"
    kind: bgg_page
    provenance: official
    retrieved_at: "2026-07-23"
    notes: "Identity and discovery."
  - id: "src-002"
    title: "Arydia — Far Off Games"
    url: "https://faroffgames.com/pages/arydia"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-23"
    notes: "Publisher description."
  - id: "src-003"
    title: "Arydia Rulebooks — Far Off Games"
    url: "https://faroffgames.com/pages/arydia-rulebooks"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-23"
    notes: "Rulebook landing page."
  - id: "src-004"
    title: "Arydia Board Game Review — Cooperative Board Games"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/arydia/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-23"
    notes: "Combat and campaign summary."
  - id: "src-005"
    title: "Arydia review — GamesRadar+"
    url: "https://www.gamesradar.com/games/board-games/arydia-the-paths-we-dare-tread-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-23"
    notes: "Reception and combat testimony."
  - id: "src-006"
    title: "Arydia product listing — The Game Steward"
    url: "https://www.thegamesteward.com/products/arydia-the-paths-we-dare-tread-all-in-bundle-plus-fabled-fishing-kickstarter-edition-board-game"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-23"
    notes: "BGG average rating signal 7.02 in search extract."
  - id: "src-007"
    title: "Arydia Rulebook (Rulebook_280x216mm_FlatFormat_v35, Dropbox-hosted)"
    url: "https://www.dropbox.com/scl/fi/q9qpvu1uc1pea3lozj6i6/Rulebook_280x216mm_FlatFormat_v35_Cropped_OP.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-05"
    notes: "36-page rulebook PDF linked from src-003's landing page; downloaded and text-extracted with pypdf on the librarian retry pass. Front matter, table of contents, and prose paragraphs extract cleanly; card-layout and stat-block pages (icons, dice-check tables) extract with corrupted glyphs and duplicated overlapping text and are not reliable for numeric claims without a layout-aware re-extraction or manual page review."
confidence: medium
status: needs_followup
---

## Source registry

The official publisher and rulebook landing page are the preferred authorities. Reviews are used for reception and high-level rule orientation only. The BGG-facing retail statistic is a selection signal, not a substitute for the BGG page. src-007 is the actual rulebook PDF (src-003 is only the landing page that links it); its prose sections are citable, but its icon-heavy stat/check tables are not until re-extracted with layout-aware tooling.