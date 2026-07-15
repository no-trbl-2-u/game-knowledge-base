---
okf_version: 0.2
type: sources
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
    notes: "Discovery and eligibility source; direct page returned HTTP 403 to this runner."
  - id: "src-002"
    title: "Fantasy Flight Games — Marvel Champions product page"
    url: "https://www.fantasyflightgames.com/en/products/marvel-champions-the-card-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-12"
    notes: "Official download hub."
  - id: "src-003"
    title: "Marvel Champions Rules Reference v1.5"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/b6/30/b630ddfe-e745-435b-a284-572dd510e15d/mc_rulesreference_v15-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Audit 2026-07-15: extraction retried and succeeded (WebFetch download + pypdf text extraction, 56 pages). The 2026-07-12 scout run's `pdf_extraction` failure was an environment/tooling gap, not a dead or broken source — the PDF itself was fine."
  - id: "src-004"
    title: "Meeple Mountain — Marvel Champions review"
    url: "https://www.meeplemountain.com/reviews/marvel-champions-the-card-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Audit 2026-07-15: full review retrieved via WebFetch, replacing the 2026-07-12 search-snippet fallback."
confidence: medium
status: verified
---

## Summary

The official publisher hub, Rules Reference PDF, and lead review are now all retrieved and cited. BGG direct metadata (src-001) remains blocked by a systemic anti-bot 403 that affects most `boardgamegeek.com` pages across this corpus, not something specific to this game's sourcing.

## Source-backed facts

- Claim: The publisher provides official rules downloads.
  Source: src-002
  Evidence: Product page download listings.
  Confidence: high
- Claim: The official Rules Reference PDF (src-003) is retrievable and its text extractable; the 2026-07-12 scout run's failure was due to missing PDF tooling in that run's environment, not a broken or paywalled file.
  Source: src-003
  Evidence: `curl`-equivalent fetch via WebFetch returned the full 2.2MB PDF (56 pages); `pypdf` extracted readable text from every sampled page (pp.4-5, 8, 13, 28, 36, 39-40, 43, 48-49).
  Confidence: high

## Open questions

- Retrieve and diff the current v1.7 Rules Reference advertised by the publisher page against the v1.5 text cited here.
- Capture live BGG rating, rank, weight, and mechanism fields — needs a genuine browser-session fetch, not another automated retry (confirmed still 403 via WebFetch 2026-07-15).