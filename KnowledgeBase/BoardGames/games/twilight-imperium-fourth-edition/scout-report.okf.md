---
okf_version: 0.2
type: scout_report
game:
  title: "Twilight Imperium Fourth Edition"
  slug: "twilight-imperium-fourth-edition"
  bgg_id: 233078
  publisher: "Fantasy Flight Games"
  year: 2017
  weight: null
  edition: "Fourth Edition core game; English retail rules scope"
scope: "base game"
mechanics: [area-majority-influence, area-movement, card-play-conflict-resolution, dice-rolling, drafting, hand-management, hidden-information, modular-board, negotiation, race, resource-management, tech-trees-tech-tracks, variable-player-powers, variable-setup]
sources:
  - id: "src-001"
    title: "Twilight Imperium Fourth Edition — Fantasy Flight Games product page"
    url: "https://www.fantasyflightgames.com/product/twilight-imperium-fourth-edition/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-10-16"
    notes: "Official identity receipt."
  - id: "src-002"
    title: "Twilight Imperium Fourth Edition Learn to Play"
    url: "https://cdn.svc.asmodee.net/production-fantasyflightgames/uploads/2026/08/ti-k0289_learn_to_play_2020_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-16"
    notes: "Governing rules receipt."
  - id: "src-003"
    title: "Five Beginner’s Notes on Twilight Imperium — SPACE-BIFF!"
    url: "https://spacebiff.com/2017/12/01/twilight-imperium/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-16"
    notes: "Independent reception receipt."
  - id: "src-004"
    title: "Twilight Imperium Fourth Edition hero image"
    url: "https://cdn.svc.asmodee.net/production-fantasyflightgames/uploads/image-converter/2026/09/FFG_TI07_Hero-Slider.webp"
    kind: image
    provenance: official
    retrieved_at: "2026-10-16"
    notes: "Visual receipt."
  - id: "src-005"
    title: "Twilight Imperium Fourth Edition product image"
    url: "https://cdn.svc.asmodee.net/production-fantasyflightgames/uploads/image-converter/2026/08/FFG_TI07_Product-Image-1.webp"
    kind: image
    provenance: official
    retrieved_at: "2026-10-16"
    notes: "Visual receipt."
confidence: high
status: verified
---

## Summary

The wishlist-first scout selected **Twilight Imperium Fourth Edition** after checking current canonical games, intake runs, branches, open PRs, and intake-gap issues. The official product page, official English Learn to Play PDF, one independent review, and two official visual assets were retrieved successfully. The candidate is staged as `ready_for_audit`; it is not approved, promoted, or merged.

## Source-backed facts

- Claim: The candidate is a released physical tabletop game with a current publisher page and an official English rules document.
  Source: src-001, src-002
  Evidence: Fantasy Flight Games identifies the core game and publishes the Learn to Play PDF through its official support surface; both returned HTTP 200.
  Confidence: high

- Claim: The packet publishes one bounded governing-rules denominator and leaves exhaustive component/card denominators unknown.
  Source: src-002
  Evidence: The manifest counts the retrieved Learn to Play document as one governing document; no unretrieved component or card total is manufactured.
  Confidence: high

## Retrieval path

1. Inspected live open PRs and found none; no current-head Mennonite REVISE existed, so scout mode applied.
2. Read the unchecked wishlist top-down. Quarriors/Dice Masters remained excluded under the standing directive; Dune: Imperium — Uprising was already canonical, so Twilight Imperium: Fourth Edition was selected.
3. Checked the canonical game tree, intake runs, branches, open PRs, and open intake-gap issues for slug/ID duplication; no duplicate was found.
4. Retrieved the Fantasy Flight Games product page, its official Learn to Play PDF, SPACE-BIFF!'s independent notes, and two official product image assets.
5. Extracted the PDF text with `pdftotext`; retained only short quotations and page/section locators.
6. Rendered two reduced WebP derivatives and a WebP contact sheet for private analytical use; exact source and derivative hashes are preserved.

## Coverage ledger

The rules denominator is deliberately bounded to the one retrieved official Learn to Play document: recorded 1, known_total 1, percent 100. The factual denominator is not known: recorded 12 source-backed entries, known_total null, percent null. No card, component, or rating count is inferred.

## Strongest rules lesson

Strategy-card drafting and command-pool allocation turn diplomacy into a timing system: each round's chosen strategy sets initiative and a primary ability, while its secondary ability gives opponents a reason to remain engaged.

## Strongest reception signal

The independent reviewer describes the rules as fairly straightforward while still emphasizing that a session runs about five hours and that the strategy/command layer carries much of the game's breadth.

## Top better-if opportunities

1. onboarding — teach strategy cards, command pools, and the first tactical action as separate concepts.
2. turn-pacing — provide a visible phase and initiative aid for a game whose normal session is long.
3. player-interaction — make the secondary effects and negotiation windows explicit so new players can see why opponents' strategy picks matter.

## Open questions

- BGG was blocked by Cloudflare; no BGG rating or complexity weight is claimed.
- The packet does not establish current FAQ/Codex applicability beyond the core Learn to Play scope.
- The visual packet is official promotional material reduced for private editorial analysis; rights remain with Fantasy Flight Games and respective rights holders.
