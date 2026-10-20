---
okf_version: 0.2
type: sources
game:
  title: "Gaia Project"
  slug: "gaia-project"
  bgg_id: 220308
  publisher: "Feuerland Spiele"
  year: 2017
  weight: null
  edition: "German first edition, 2017"
scope: "base game"
mechanics: [area-movement, modular-board, tile-placement, variable-player-powers, engine-building, income, resource-management, solo-solitaire-game, tech-trees-tech-tracks, variable-setup, tableau-building]
sources:
  - id: "src-001"
    title: "Gaia Project — Feuerland Spiele product page"
    url: "https://www.feuerland-spiele.de/spiele/gaia-project/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-10-20"
    notes: "Official identity and product metadata receipt."
  - id: "src-002"
    title: "Gaia Project Spielanleitung — Feuerland Spiele"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Gaia_Project/Regelbuch.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-20"
    notes: "Official German first-edition rulebook; static bytes hash-checked."
  - id: "src-003"
    title: "Gaia Project review — Brettspielbox"
    url: "https://brettspielbox.de/gaia-project/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-20"
    notes: "Independent German review; dynamic HTML receipt."
  - id: "src-004"
    title: "Gaia Project review — H@LL9000"
    url: "https://www.hall9000.de/html/spiel/gaia_project"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-20"
    notes: "Independent German review; dynamic HTML receipt."
  - id: "src-005"
    title: "Gaia Project banner image — Feuerland Spiele"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Gaia_Project/gaia_project_banner.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-10-20"
    notes: "Official visual source; reduced WebP derivative stored in the private packet."
  - id: "src-006"
    title: "Gaia Project 3D product image — Feuerland Spiele"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Gaia_Project/3D_GaiaProject_24_DE.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-10-20"
    notes: "Official visual source; reduced WebP derivative stored in the private packet."
  - id: "src-007"
    title: "Gaia Project box-back image — Feuerland Spiele"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Gaia_Project/Gaia-Project_24_BoxBack_DE.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-10-20"
    notes: "Official visual source; reduced WebP derivative stored in the private packet."
confidence: high
status: verified
---

## Summary

This registry records the seven retrieved sources used by the Gaia Project intake packet. `evidence.json` preserves the retrieval receipt, transport metadata, exact static hashes, and short witnesses. Dynamic HTML sources are retained as observed-at semantic receipts rather than treated as byte-immutable artifacts.

## Source-backed facts

- Claim: Rules authority is the official Feuerland PDF, while reception authority is supplied by two distinct non-publisher review domains.
  Source: src-002, src-003, src-004
  Evidence: The rulebook is an official PDF; Brettspielbox and H@LL9000 are separate independent review domains.
  Confidence: high

- Claim: Visual analysis uses three official product assets and reduced WebP derivatives rather than source-resolution promotional files.
  Source: src-005, src-006, src-007
  Evidence: The three image receipts identify distinct Feuerland assets; local derivatives and contact-sheet hashes are recorded in the visual manifest.
  Confidence: high

## Open questions

- No BGG rating or complexity weight is published because BGG retrieval was blocked during this run.
- The German rulebook is authoritative for the declared edition; English-edition equivalence has not been replayed.
