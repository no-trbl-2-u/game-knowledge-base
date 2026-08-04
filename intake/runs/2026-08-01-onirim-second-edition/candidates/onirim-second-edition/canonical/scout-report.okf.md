---
okf_version: 0.2
type: scout_report
game:
  title: "Onirim (Second Edition)"
  slug: "onirim-second-edition"
  bgg_id: 156336
  publisher: "Z-Man Games"
  year: 2014
  weight: null
  edition: "2014 Z-Man Games second edition (ZM4900), basic game only"
scope: "base game"
mechanics: [cooperative-game, hand-management, set-collection, solo-solitaire-game]
sources:
  - id: "src-001"
    title: "Z-Man Games — Onirim Rules (ZM4900)"
    url: "https://d3sr78rmtg4mfy.cloudfront.net/filer_public/fd/0e/fd0ef6a2-c019-47a2-910a-a556f03a3d02/zm4900_onirim_rules.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-01"
    notes: "Complete exact-edition basic-game authority."
  - id: "src-002"
    title: "Co-op Board Games — Onirim (Second Edition) Review"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/onirim-second-edition-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-01"
    notes: "Independent review outside official and BGG domains."
  - id: "src-003"
    title: "Co-op Board Games — Onirim second-edition box photograph"
    url: "https://coopboardgames.com/wp-content/uploads/2016/05/onirim-review-300x300.png"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-01"
    notes: "Exact Z-Man box image."
  - id: "src-004"
    title: "Co-op Board Games — Onirim completed base-game tableau photograph"
    url: "https://coopboardgames.com/wp-content/uploads/2017/10/Onirim-review-completed-game.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-01"
    notes: "Completed basic-game tableau."
confidence: high
status: verified
---

# Bathcat scout report

## Scope decision

- Claim: Operative coverage is restricted to the 76 cards without expansion symbols; all seven included expansions are excluded.
  Source: src-001
  Evidence: Official rules printed page 6 instructs setup with 76 basic-game cards and distinguishes expansion cards by symbols.
  Confidence: high
- Claim: The bounded governing inventory is one acquired official core-rules document, giving rules coverage of 1/1 (100%).
  Source: src-001
  Evidence: The complete exact-edition PDF supplies every setup, action, exception, two-player, and endgame claim in the staged rule records.
  Confidence: high

## FAQ and errata boundary

No FAQ or errata content is published in this staged tree. The bounded search outcome remains in `evidence.json`; it is not promoted into a publisher-wide absence claim. No staged rule claim depends on an inaccessible authority.

## Reception boundary

- Claim: The independent review explicitly distinguishes base-game observations from comments about the seven included expansions.
  Source: src-002
  Evidence: Its Gameplay and Pros and Cons sections separately discuss the basic game, cooperative mode, shuffling, and optional expansion additions.
  Confidence: high

## Visual verification

- Claim: The contact sheet contains two distinct labeled panels: the Z-Man second-edition box and a completed basic-game tableau.
  Source: src-003, src-004
  Evidence: Visual inspection on 2026-08-01 confirmed both panels are uncropped, recognizable, and correctly labeled; local WebP hashes are recorded in the visual manifest.
  Confidence: high
