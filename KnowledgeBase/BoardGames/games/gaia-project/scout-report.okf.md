---
okf_version: 0.2
type: scout_report
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
    notes: "Identity and product metadata."
  - id: "src-002"
    title: "Gaia Project Spielanleitung — Feuerland Spiele"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Gaia_Project/Regelbuch.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-20"
    notes: "Governing rules receipt."
  - id: "src-003"
    title: "Gaia Project review — Brettspielbox"
    url: "https://brettspielbox.de/gaia-project/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-20"
    notes: "Independent reception receipt."
  - id: "src-004"
    title: "Gaia Project review — H@LL9000"
    url: "https://www.hall9000.de/html/spiel/gaia_project"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-20"
    notes: "Independent reception receipt."
  - id: "src-005"
    title: "Gaia Project banner image — Feuerland Spiele"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Gaia_Project/gaia_project_banner.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-10-20"
    notes: "Visual receipt."
  - id: "src-006"
    title: "Gaia Project 3D product image — Feuerland Spiele"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Gaia_Project/3D_GaiaProject_24_DE.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-10-20"
    notes: "Visual receipt."
  - id: "src-007"
    title: "Gaia Project box-back image — Feuerland Spiele"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Gaia_Project/Gaia-Project_24_BoxBack_DE.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-10-20"
    notes: "Visual receipt."
confidence: high
status: verified
---

## Summary

The wishlist-first scout selected **Gaia Project** after skipping the explicitly excluded Quarriors entry and deduplicating the already-promoted Dune: Imperium — Uprising entry. The official German first-edition rulebook was retrieved with exact static bytes, and two independent reviews supplied reception evidence. The candidate is staged as `ready_for_audit`; it is not approved or canonical.

## Source-backed facts

- Claim: The candidate is a released physical tabletop game with an official publisher page and governing rulebook.
  Source: src-001, src-002
  Evidence: Feuerland's product page identifies Gaia Project and links the rulebook; the PDF retrieved with HTTP 200 and a recorded SHA-256.
  Confidence: high

- Claim: The packet records one bounded governing document and fifteen source-backed factual entries without manufacturing an exhaustive component, card, or rating denominator.
  Source: src-002, src-003, src-004
  Evidence: The manifest counts the retrieved rulebook as one known rules document, leaves the factual denominator null, and the canonical docs publish only cited claims.
  Confidence: high

## Retrieval path

1. Inspected current open PRs and found none; no current-head Mennonite REVISE existed, so scout mode applied.
2. Read the unchecked wishlist top-down. Quarriors was skipped under the standing exclusion; Dune: Imperium — Uprising was skipped because its canonical game is already present despite a stale unchecked wishlist line; Gaia Project was the next eligible physical candidate.
3. Checked canonical games, intake runs, local branches, open PRs, and intake-gap issues for slug/ID duplication; no Gaia Project duplicate was found.
4. Retrieved the Feuerland product page, static German first-edition rulebook, two independent reviews, and three official visual assets.
5. Extracted rulebook text with `pdftotext`; retained only short quotations and page/section locators. Dynamic review receipts preserve final URL, identity, cited excerpts, and observed transport metadata.
6. Rendered three reduced WebP visual derivatives and a contact sheet for private analytical use; exact source and derivative hashes are preserved.

## Coverage ledger

The rules denominator is deliberately bounded to the one retrieved official rulebook: recorded 1, known_total 1, percent 100. The factual denominator is not known: recorded 15 source-backed entries, known_total null, percent null. No component, card, rating, or complexity denominator is inferred.

## Strongest rules lesson

The game turns spatial reach, planet habitability, building upgrades, power circulation, research, and scoring into one coupled economy. Expansion is not just movement; it is the route by which future income and research options are unlocked.

## Strongest reception signal

Both independent reviews present Gaia Project as a highly variable, strategic development game that rewards players willing to learn its interlocking systems; H@LL9000 explicitly notes that Terra Mystica familiarity shortens the rules learning curve.

## Top better-if opportunities

1. onboarding — teach the linked research, upgrade, reach, and scoring systems in a staged first-game aid.
2. accessibility — map every research track and building upgrade to its immediate and future resource effects.
3. strategic-depth — expose the changing endgame objectives and variable-board consequences earlier in teaching materials.

## Open questions

- BGG was blocked by Cloudflare and its XML API returned HTTP 401 in this environment; no BGG rating or complexity weight is claimed.
- The packet is bounded to a German rulebook; English-edition wording and regional component differences remain unverified.
- The packet does not establish whether the reception signals generalize beyond the retrieved reviews.

## Retrieval failures

- BGG HTML retrieval returned HTTP 403/Cloudflare block and the XML API returned HTTP 401; this was used only as a discovery lead and no rating or weight claim was published.
