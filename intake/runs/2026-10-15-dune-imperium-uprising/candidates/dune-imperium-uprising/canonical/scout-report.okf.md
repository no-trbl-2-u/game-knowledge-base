---
okf_version: 0.2
type: scout_report
game:
  title: "Dune: Imperium — Uprising"
  slug: "dune-imperium-uprising"
  bgg_id: 397598
  publisher: "Dire Wolf"
  year: 2023
  weight: null
  edition: "English standalone game, 2023 first printing"
scope: "base game"
mechanics: [deck-building, worker-placement, hand-management, multi-use-cards, force-commitment, race, variable-player-powers, hidden-information]
sources:
  - id: "src-001"
    title: "Dune: Imperium - Uprising — Dire Wolf Digital product page"
    url: "https://www.direwolfdigital.com/dune-imperium-uprising/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Identity and product description."
  - id: "src-002"
    title: "DUNE_IMPERIUM_UPRISING Main Rulebook"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_UPRISING_Main_Rulebook_23-10-12.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Governing rules receipt."
  - id: "src-003"
    title: "Review – ‘Dune: Imperium – Uprising’ — Dune News Net"
    url: "https://dunenewsnet.com/2024/03/review-dune-imperium-uprising-board-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-15"
    notes: "Independent reception receipt."
  - id: "src-004"
    title: "Dune: Imperium Uprising Review: Spies, Sandworms, and More Complexity — Ryan Board Games"
    url: "https://ryanboardgames.com/reviews/dune-imperium-uprising-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-15"
    notes: "Independent reception receipt."
  - id: "src-005"
    title: "Dune: Imperium - Uprising box image — Dire Wolf Digital"
    url: "https://d19y2ttatozxjp.cloudfront.net/assets/dune/uprising_box.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Visual receipt."
  - id: "src-006"
    title: "Dune: Imperium - Uprising board image — Dire Wolf Digital"
    url: "https://d19y2ttatozxjp.cloudfront.net/assets/dune/uprising_board.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Visual receipt."
  - id: "src-007"
    title: "Dune: Imperium - Uprising card spread — Dire Wolf Digital"
    url: "https://d19y2ttatozxjp.cloudfront.net/assets/dune/uprising_cardspread_3.png"
    kind: other
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Visual receipt."
  - id: "src-008"
    title: "Dune: Imperium - Uprising six-player mode image — Dire Wolf Digital"
    url: "https://d19y2ttatozxjp.cloudfront.net/assets/dune/uprising_6player.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Visual receipt."
confidence: high
status: verified
---

## Summary

The wishlist-first scout selected **Dune: Imperium — Uprising** after skipping the explicitly excluded Quarriors entry. The official rules PDF was retrieved successfully, and two independent reviews supplied reception evidence. The candidate is staged as `ready_for_audit`; it is not approved or canonical.

## Source-backed facts

- Claim: The candidate is a released physical tabletop game with an official publisher page and official English rulebook.
  Source: src-001, src-002
  Evidence: Dire Wolf's product page identifies Uprising; its support resource exposes the English main rulebook PDF, retrieved with HTTP 200.
  Confidence: high

- Claim: The packet records one governing rules document and seven additional source-backed factual/visual receipts without manufacturing an exhaustive denominator.
  Source: src-002, src-005, src-006, src-007, src-008
  Evidence: The manifest ledger counts the retrieved rulebook as one known governing document and leaves factual denominator null; the evidence ledger preserves four visual asset receipts.
  Confidence: high

## Retrieval path

1. Inspected current open PRs and found none; no current-head Mennonite REVISE existed, so scout mode applied.
2. Read the unchecked wishlist top-down. Quarriors was skipped under the standing exclusion; Dune: Imperium — Uprising was the next physical candidate.
3. Checked canonical games, intake runs, local branches, open PRs, and intake-gap issues for slug/ID duplication; no duplicate was found.
4. Retrieved the publisher product page, official support listing, static English rulebook PDF, two independent reviews, and four official product assets.
5. Extracted rulebook text with `pdftotext`; retained only short quotations and page/section locators.
6. Rendered reduced WebP visual derivatives and a contact sheet for private analytical use; exact source and derivative hashes are preserved.

## Coverage ledger

The rules denominator is deliberately bounded to the one retrieved official main rulebook: recorded 1, known_total 1, percent 100. The factual denominator is not known: recorded 18 source-backed entries, known_total null, percent null. No card or component count is inferred.

## Strongest rules lesson

Dual-use cards bind action access to later Reveal value. Spies then let a player trade future flexibility for infiltration or card draw, while sandworms convert Fremen investment into unusually large Conflict rewards.

## Strongest reception signal

Both independent reviews praise the spy system; Ryan Board Games also reports that sandworm reward doubling can feel balance-narrowing and that six-player turns can create downtime.

## Top better-if opportunities

1. onboarding — stage a first round that teaches Agent, Reveal, Conflict, and card acquisition separately.
2. combat-resolution — surface sandworm prerequisites and reward doubling before the first Conflict.
3. downtime — provide a clear six-player team-mode turn aid and simultaneous planning prompt.

## Open questions

- BGG was blocked by Cloudflare and its XML API returned HTTP 401 in this environment; no BGG rating or complexity weight is claimed.
- The packet does not establish whether reported sandworm dominance persists across a broad sample.
