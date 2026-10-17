---
okf_version: 0.2
type: scout_report
game:
  title: "Terraforming Mars"
  slug: "terraforming-mars"
  bgg_id: null
  publisher: "FryxGames"
  year: 2016
  weight: null
  edition: "English base game, 2016 release"
scope: "base game"
mechanics: [deck-building, hand-management, tile-placement, tableau-building, resource-management, set-collection, engine-building, area-majority-influence, drafting, end-game-bonuses, solo-solitaire-game]
sources:
  - id: "src-001"
    title: "Terraforming Mars — FryxGames product page"
    url: "https://fryxgames.se/games/terraforming-mars/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-10-17"
    notes: "Identity receipt."
  - id: "src-002"
    title: "Terraforming Mars Official Rules — FryxGames"
    url: "https://fryxgames.se/wp-content/uploads/2023/04/TMRULESFINAL.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-17"
    notes: "Governing rules receipt."
  - id: "src-003"
    title: "Two Minds about Terraforming Mars — SPACE-BIFF!"
    url: "https://spacebiff.com/2017/04/07/terraforming-mars/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-17"
    notes: "Independent reception receipt."
  - id: "src-004"
    title: "Terraforming Mars Review — The Dice Tower"
    url: "https://www.dicetower.com/board-game-review/6702"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-17"
    notes: "Independent reception receipt."
  - id: "src-005"
    title: "Terraforming Mars product image — FryxGames"
    url: "https://fryxgames.se/wp-content/uploads/2023/08/TM.png"
    kind: other
    provenance: official
    retrieved_at: "2026-10-17"
    notes: "Visual receipt."
  - id: "src-006"
    title: "Terraforming Mars gameplay image — FryxGames"
    url: "https://fryxgames.se/wp-content/uploads/2023/11/TM-scaled.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-10-17"
    notes: "Visual receipt."
  - id: "src-007"
    title: "Terraforming Mars board image — FryxGames"
    url: "https://fryxgames.se/wp-content/uploads/2023/11/TM2-scaled.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-10-17"
    notes: "Visual receipt."
  - id: "src-008"
    title: "Terraforming Mars components image — FryxGames"
    url: "https://fryxgames.se/wp-content/uploads/2023/11/TM3-scaled.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-10-17"
    notes: "Visual receipt."
confidence: high
status: verified
---

## Summary

The wishlist-first scout selected **Terraforming Mars** after skipping the explicitly excluded Quarriors entry and deduplicating the already canonical Dune: Imperium — Uprising plus the existing War of the Ring branch. The official FryxGames rules PDF and product page were retrieved, two independent reviews supplied reception evidence, and four distinct official images supplied visual evidence. The candidate is staged as `ready_for_audit`; it is not approved or canonical.

## Source-backed facts

- Claim: The candidate is a released physical tabletop base game with official publisher identity and a static English rulebook.
  Source: src-001, src-002
  Evidence: FryxGames product metadata identifies the 2016 base game; the official PDF was retrieved with HTTP 200 and exact bytes.
  Confidence: high

- Claim: The packet carries two independent review receipts outside the official publisher domain.
  Source: src-003, src-004
  Evidence: SPACE-BIFF! and The Dice Tower pages were each fetched successfully and retain cited excerpts in the receipts.
  Confidence: high

- Claim: Four distinct official visual assets were retrieved and reduced to WebP derivatives for private analysis.
  Source: src-005, src-006, src-007, src-008
  Evidence: The visual receipts preserve four different source URLs; the contact sheet was inspected and shows a box identity image, a component spread, a board close-up, and a full table state.
  Confidence: high

## Retrieval path

1. Inspected current open PRs and Mennonite correction-loop issues; no open PR and no current-head REVISE existed, so scout mode applied.
2. Read the unchecked wishlist top-down. Quarriors was skipped under standing order; Dune: Imperium — Uprising was deduplicated against canonical content; War of the Ring was deduplicated against an existing local branch; Terraforming Mars was the next eligible physical candidate.
3. Checked canonical records, intake runs, branches, open PRs, and issues for slug/ID duplication; no Terraforming Mars duplicate was found.
4. Retrieved the FryxGames product page, official English base-game rules PDF, SPACE-BIFF! review, The Dice Tower review, and four official product assets.
5. Preserved exact source receipts, extracted only short rulebook references, rendered reduced WebP derivatives, and inspected the contact sheet.

## Coverage ledger

The rules denominator is deliberately bounded to the one retrieved official base-game rulebook: recorded 1, known_total 1, percent 100. The factual denominator is unknown: recorded 20 source-backed entries, known_total null, percent null. No card or component count is inferred.

## Strongest rules lesson

The rulebook makes shared planetary progress the game clock while card drafting, project payment, tableau effects, tile placement, and resource production let corporations pursue different engines. The shared objective does not erase competition: milestones, awards, and endgame points remain contested.

## Strongest reception signal

SPACE-BIFF! treats the project cards as the source of much of the game's variety and engine-building identity, while also warning that a full five-player game can drag. The Dice Tower page records the game's critical reception and 1–5 player base-game metadata.

## Top better-if opportunities

1. onboarding — teach global parameters, card retention, and the two-action turn in separate passes.
2. downtime — provide a planning aid for tableau-heavy turns and larger player counts.

## Open questions

- BGG was used as a wishlist identity lead but no usable rating or BGG complexity receipt was retrieved; `game.weight` remains null.
- The packet does not establish whether any particular corporation or project archetype is dominant across a broad contemporary sample.
- The product-page request redirected from `/games/terraforming-mars/` to `/product/terraforming-mars/`; semantic identity remained stable, but the dynamic transport drift is recorded for audit.
