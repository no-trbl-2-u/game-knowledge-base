---
okf_version: 0.2
type: scout_report
game:
  title: "SETI: Search for Extraterrestrial Intelligence"
  slug: "seti-search-for-extraterrestrial-intelligence"
  bgg_id: 418059
  publisher: "Czech Games Edition"
  year: 2024
  weight: null
  edition: "English first edition, 2024"
scope: "base game"
mechanics: [action-selection, area-movement, card-play-conflict-resolution, hand-management, income, modular-board, resource-management, solo-solitaire-game, tech-trees-tech-tracks, variable-setup]
sources:
  - id: "src-001"
    title: "SETI: Search for Extraterrestrial Intelligence — Czech Games Edition product page"
    url: "https://www.czechgames.com/games/seti-search-for-extraterrestrial-intelligence"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-10-21"
    notes: "Identity and product metadata."
  - id: "src-002"
    title: "SETI English rulebook — Czech Games Edition"
    url: "https://filemanager.czechgames.com/storage/files/seti-search-for-extraterrestrial-intelligence/rules/seti-rules-en.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-21"
    notes: "Governing rules receipt."
  - id: "src-003"
    title: "SETI review — What Board Game"
    url: "https://www.whatboardgame.com/post/seti-search-for-extraterrestrial-intelligence-board-game-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-21"
    notes: "Independent reception receipt."
  - id: "src-004"
    title: "SETI review — Tabletop Gaming"
    url: "https://www.tabletopgaming.co.uk/reviews/seti-search-for-extraterrestrial-intelligence-board-game-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-21"
    notes: "Independent reception receipt."
  - id: "src-005"
    title: "SETI official hero image — Czech Games Edition"
    url: "https://cdn.prod.website-files.com/67d17a45b4e1484b40ea8869/67d17a45b4e1484b40ea8b31_Hero%20image.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-10-21"
    notes: "Visual receipt."
  - id: "src-006"
    title: "SETI official box image — Czech Games Edition"
    url: "https://cdn.prod.website-files.com/67d17a45b4e1484b40ea8869/67d17a45b4e1484b40ea8b32_Box%20image.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-10-21"
    notes: "Visual receipt."
  - id: "src-007"
    title: "SETI official gameplay image 001 — Czech Games Edition"
    url: "https://cdn.prod.website-files.com/67d17a45b4e1484b40ea8869/67d17a45b4e1484b40ea8cbc_Seti%20-001.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-10-21"
    notes: "Visual receipt."
confidence: high
status: verified
---

## Summary

The wishlist-first scout selected **SETI: Search for Extraterrestrial Intelligence** after skipping the explicitly excluded Quarriors entry and deduplicating the already-staged Dune: Imperium — Uprising, Star Wars: Rebellion, Gloomhaven: Jaws of the Lion, and Gaia Project runs. The official English rulebook was retrieved with exact static bytes, and two independent reviews supplied reception evidence. The candidate is staged as `ready_for_audit`; it is not approved or canonical.

## Source-backed facts

- Claim: The candidate is a released physical tabletop game with an official publisher page and governing English rulebook.
  Source: src-001, src-002
  Evidence: CGE's product page identifies the game and links official downloads; the English PDF retrieved with HTTP 200 and a recorded SHA-256.
  Confidence: high

- Claim: The packet records one bounded governing document and seventeen source-backed factual entries without manufacturing an exhaustive component, card, rating, or complexity denominator.
  Source: src-001, src-002, src-003, src-004
  Evidence: The manifest counts the one retrieved official rulebook as the known rules inventory, leaves the factual denominator null, and the canonical docs publish only cited claims.
  Confidence: high

## Retrieval path

1. Inspected current open PRs and found none; no current-head Mennonite REVISE existed, so scout mode applied.
2. Read the unchecked wishlist top-down. Quarriors was skipped under the standing exclusion. Dune: Imperium — Uprising, Star Wars: Rebellion, Gloomhaven: Jaws of the Lion, and Gaia Project were skipped because matching intake/canonical records already exist despite unchecked wishlist lines. SETI was the next eligible physical candidate.
3. Checked canonical games, intake runs, local branches, all-state PR search, and issue search for slug/ID duplication; no SETI intake, canonical game, branch, or PR was found.
4. Retrieved the CGE product page, official English rulebook, two independent reviews, and three official visual assets.
5. Extracted rulebook text with `pdftotext`; retained only short quotations and page/section locators. Static PDF and image receipts preserve exact bytes and SHA-256. Dynamic review receipts preserve final URL, source identity, cited excerpts, and observed transport metadata.
6. Rendered three reduced WebP visual derivatives and a contact sheet for private analytical use; exact source and derivative hashes are preserved.

## Coverage ledger

The rules denominator is deliberately bounded to the one retrieved official rulebook: recorded 1, known_total 1, percent 100. The factual denominator is not known: recorded 17 source-backed entries, known_total null, percent null. No component, card, rating, or complexity denominator is inferred.

## Strongest rules lesson

The game's most distinctive rules coupling is the rotating solar system: research and the first pass rotate discs, probes move with those discs, and planning can turn board timing into movement economy.

## Strongest reception signal

Both independent reviews are favorable and emphasize choice density, thematic integration, and multiple routes to points; Tabletop Gaming also flags the complexity and analysis-paralysis risk that should shape onboarding.

## Top better-if opportunities

1. onboarding — stage the broad action menu and hidden alien layer instead of teaching every route at once.
2. accessibility — make card modes, resource conversion, and recurring income visible at a glance.
3. downtime — support planning around rotation and shared first-come rewards without flattening the choices.
4. strategic-depth — explain how rotation and endgame tiles alter the value of otherwise familiar actions.

## Open questions

- BGG HTML returned a Cloudflare block and no rating or weight is claimed.
- The packet excludes promo cards, upgraded components, and the SETI: Space Agencies expansion.
- The packet does not establish whether the two favorable reviews generalize to the wider player population.

## Retrieval failures

- BGG page retrieval returned HTTP 403/Cloudflare block; it was used only as a discovery and identity lead and no rating or complexity claim was published.
