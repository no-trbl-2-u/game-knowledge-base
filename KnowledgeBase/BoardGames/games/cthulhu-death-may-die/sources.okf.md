---
okf_version: 0.2
type: sources
game:
  title: "Cthulhu: Death May Die"
  slug: "cthulhu-death-may-die"
  bgg_id: 253344
  publisher: "CMON"
  year: 2019
  weight: null
  edition: "English core game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, grid-movement, modular-board, variable-player-powers]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Cthulhu: Death May Die"
    url: "https://boardgamegeek.com/boardgame/253344/cthulhu-death-may-die"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-28"
    notes: "Discovery and rating-source lead. The page describes the game as a cooperative dice-driven Elder God hunt; direct numeric rating retrieval returned HTTP 403, so no exact rating is asserted."
  - id: "src-002"
    title: "Cthulhu: Death May Die — Rules of the Game"
    url: "https://resources.cmon.com/DMD_Rulebook_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-28"
    notes: "CMON official 20-page PDF; downloaded and text-extracted successfully. SHA-256: 2a9d7f3b8f4380de3c45f3a0f9a2ca7a1d74eea9f6af0ebf3d67fd4e8f4a9ac1."
  - id: "src-003"
    title: "Cthulhu: Death May Die Review — Co-op Board Games"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/cthulhu-death-may-die-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-31"
    notes: "Independent cooperative-game review; full text retrieved and extracted in the 2026-08-31 librarian pass (the 2026-07-28 extraction backend failure is resolved)."
  - id: "src-004"
    title: "Dized Rules — Cthulhu: Death May Die — Sanity"
    url: "https://rules.dized.com/game/kp6yXekcT6agDFGangIB1Q/XXNB96tBSqWBcLGQXdDfYA/sanity"
    kind: faq
    provenance: secondary
    retrieved_at: "2026-07-28"
    notes: "Structured rules reference used as a secondary lead for sanity terminology."
confidence: high
status: verified
---

## Summary

The CMON rulebook is the primary rules authority. BoardGameGeek supplied discovery and RPG-fit context. The review source is reserved for reception; because extraction was unavailable, this run does not present unsupported review-specific quotations.

## Source-backed facts

- Claim: The official rulebook was retrieved and text-extracted successfully.
  Source: src-002
  Evidence: 20-page PDF; `pdfinfo` and `pdftotext -layout` completed without error.
  Confidence: high

## Open questions

- Verify current BGG rating/rank and locate an accessible independent review extraction in a later audit.
