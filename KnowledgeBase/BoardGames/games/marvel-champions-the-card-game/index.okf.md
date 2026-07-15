---
okf_version: 0.2
type: game_index
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
sources:
  - id: "src-001"
    title: "BoardGameGeek — Marvel Champions: The Card Game"
    url: "https://boardgamegeek.com/boardgame/285774/marvel-champions-the-card-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-12"
    notes: "Discovery source; BGG describes the game as an LCG in which players battle villains with unique hero teams. Direct metadata was blocked during this run."
  - id: "src-002"
    title: "Fantasy Flight Games — Marvel Champions product page"
    url: "https://www.fantasyflightgames.com/en/products/marvel-champions-the-card-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-12"
    notes: "Official product page linking Learn to Play and current Rules Reference documents."
  - id: "src-003"
    title: "Marvel Champions Rules Reference v1.5"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/b6/30/b630ddfe-e745-435b-a284-572dd510e15d/mc_rulesreference_v15-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Official reference source located through search; current product page now advertises a newer January 2026 reference (v1.7), not yet diffed against v1.5. Audit 2026-07-15: extraction retried with pypdf (56 pages), succeeded — see rules/*.okf.md for cited claims."
  - id: "src-004"
    title: "Meeple Mountain — Marvel Champions review"
    url: "https://www.meeplemountain.com/reviews/marvel-champions-the-card-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Audit 2026-07-15: full review retrieved, replacing the 2026-07-12 search-snippet fallback. See reception/reviews.okf.md."
confidence: medium
status: verified
---

## Summary

*Marvel Champions* is a cooperative living card game in which heroes assemble decks and fight an automated villain. It was chosen as a high-profile eligible free-choice target because BGG identifies the title and its public description centers on cooperative hero-versus-villain play. Audit 2026-07-15: the official Rules Reference PDF (src-003) is now fully extracted and cited across `rules/*.okf.md`; BGG's live score/rank/weight (src-001) remains blocked (see Open questions).

## Source-backed facts

- Claim: BGG identifies the game as an LCG about battling Marvel villains with unique hero teams.
  Source: src-001
  Evidence: "Battle Marvel villains with unique teams of iconic heroes in this LCG."
  Confidence: high
- Claim: Fantasy Flight Games provides official Learn to Play and Rules Reference downloads for the game.
  Source: src-002
  Evidence: Product page lists "Learn to Play" and "Marvel Champions Rules Reference" downloads.
  Confidence: high
- Claim: A round alternates a player phase (each player takes one turn) and a villain phase (threat, activation, encounter cards); setup is a fixed 16-step sequence; the team wins by defeating the villain's final stage and loses if the main scheme deck completes.
  Source: src-003
  Evidence: See `rules/overview.okf.md`, `rules/setup.okf.md`, `rules/turn-structure.okf.md`, and `rules/scoring-endgame.okf.md` for page-cited claims.
  Confidence: high

## Rules / Mechanics

- Cooperative play pits players and their hero decks against a villain and encounter system.
- Hero identity, aspect choices, allies, upgrades, supports, events, and resource cards define deck construction.
- Heroes can change between hero and alter-ego forms, trading combat pressure for recovery and threat control.

## Player friction

- A large card pool and text-heavy effects create onboarding burden.
- Scenario, modular encounter, and deck construction choices produce substantial setup overhead.

## Praised design

- Hero identity and villain scenarios create strong replayability through combinations.
- The game makes cooperation concrete by giving roles and timing windows to different decks.

## Open questions

- Exact BGG rating, rank, and weight remain unrecoverable: retried 2026-07-15 via WebFetch, still HTTP 403 (same systemic block hitting BGG pages across most games in this corpus — see the monthly link-rot issue's "suspect" list). Needs a genuine browser-session fetch or an alternate metadata mirror, not another automated retry.
- Core-set versus revised-core (v1.7) deck lists should be separated in a future pass.