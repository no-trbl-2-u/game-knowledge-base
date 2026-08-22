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
    notes: "Rulebook landing page; individual PDF links resolved in the 2026-08-19 librarian pass (src-007, src-008)."
  - id: "src-007"
    title: "Arydia Rulebook (v35)"
    url: "https://www.dropbox.com/scl/fi/q9qpvu1uc1pea3lozj6i6/Rulebook_280x216mm_FlatFormat_v35_Cropped_OP.pdf?rlkey=fx2oqdenrwmbjcy32jpfsojh0&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Official rulebook, retrieved and text-extracted with curl + pypdf in the 2026-08-19 librarian pass. 36 pages, v35."
  - id: "src-008"
    title: "Arydia Quick Start Guide (v35)"
    url: "https://www.dropbox.com/scl/fi/t4wjp33aaheoxoniei36m/QuickStartGuide_280x216mm_v35_Cropped_OP.pdf?rlkey=5w4bqlm9dp7kl7e27cdhmzxrq&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Official first-game onboarding booklet, retrieved and text-extracted (16 pages) in the 2026-08-19 librarian pass; covers character creation, deferred by the main rulebook."
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
confidence: high
status: needs_followup
last_verified: "2026-08-19"
---

## Source registry

The official rulebook (src-007) and Quick Start Guide (src-008) are now the preferred authorities for rules claims. Reviews are used for reception and high-level rule orientation only. The BGG-facing retail statistic is a selection signal, not a substitute for the BGG page, which remains blocked (see Retrieval failures).

## Retrieval failures

- Claim: Direct BGG page and XML API retrieval was unavailable.
  Source: src-001
  Evidence: Access errors returned during the original 2026-07-23 scout run.
  Confidence: high
  Note (2026-08-19 librarian pass): retried via WebFetch; still HTTP 403, matching the systemic BGG block documented across the corpus (see `marvel-champions-the-card-game/scout-report.okf.md`). Not a game-specific issue.
- Claim: Rulebook PDFs were identified on the publisher's rulebook landing page but not downloaded and extracted.
  Source: src-003
  Evidence: The landing page listed PDF titles without direct extraction in the 2026-07-23 run.
  Confidence: high
  Resolution (2026-08-19 librarian pass): WebFetch resolved the exact PDF URLs from the landing page; curl + pypdf extracted the main Rulebook (src-007) and Quick Start Guide (src-008). Followup resolved.