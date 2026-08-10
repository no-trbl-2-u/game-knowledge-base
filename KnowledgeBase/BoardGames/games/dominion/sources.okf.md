---
okf_version: 0.2
type: sources
game:
  title: "Dominion"
  slug: "dominion"
  bgg_id: 36218
  publisher: "Rio Grande Games"
  year: 2008
  weight: null
  edition: "Current Rio Grande Games English 2nd Edition base game (RIO531; current core rulebook dated in-file 2021)"
scope: "base game"
mechanics: [deck-building, hand-management, market, resource-management, variable-setup]
sources:
  - id: "src-001"
    title: "Rio Grande Games — Dominion product page"
    url: "https://www.riograndegames.com/games/dominion/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-08"
    notes: "Current product identity, stock RIO531, UPC, player count, deck-building description, and rules link."
  - id: "src-002"
    title: "Rio Grande Games — Dominion 2nd Edition rulebook"
    url: "https://www.riograndegames.com/wp-content/uploads/2016/09/Dominion2E.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-08"
    notes: "HTTP 200 application/pdf; 16 pages; SHA-256 ea9e3fbef0064e6773c8772bbb234ac7d06c71a478422b45143432a29aa64273; current 2E core authority."
  - id: "src-003"
    title: "Board Game Quest — Dominion Review"
    url: "https://www.boardgamequest.com/dominion-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-08"
    notes: "Independent review dated Feb 26, 2013; base-game reception and review score."
  - id: "src-004"
    title: "Board Game Quest — Dominion box photograph"
    url: "https://www.boardgamequest.com/wp-content/uploads/2012/11/Dominion.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-08"
    notes: "Review lead image; source asset hash 49bc71a3dc650eed0fb5435de999104ab5da5f410c21c4082473bd638ffcf359."
  - id: "src-005"
    title: "Board Game Quest — Dominion game overview photograph"
    url: "https://www.boardgamequest.com/wp-content/uploads/2013/02/IMG_2969-300x225.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-08"
    notes: "Review game-overview image; source asset hash 6b9bc5d02ef2a089b584e2c508ff7b627d617396e9e30191d2257e2dcf10dba6."
  - id: "src-006"
    title: "Board Game Quest — Dominion game-experience photograph"
    url: "https://www.boardgamequest.com/wp-content/uploads/2013/02/IMG_2961-600x450.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-08"
    notes: "Review gameplay image; source asset hash 68bc8b699bd0e2c59919899bfa4a0a752682dc094aea9898de388944ec60dce5."
  - id: "src-007"
    title: "Dominion Strategy — Dominion 2019 Errata and Rules Tweaks"
    url: "https://dominionstrategy.com/2019/09/25/dominion-2019-errata-and-rules-tweaks/"
    kind: other
    provenance: community
    retrieved_at: "2026-08-08"
    notes: "Community/designer-attributed errata discussion; not treated as official current-print authority."
confidence: high
status: verified
---

# Source ledger

## Retrieval facts

- Claim: The current Rio Grande Games Dominion product page was retrieved and identifies the bounded product as Dominion®, a 2–4 player deck-building game with stock number RIO531 and UPC 655132005319.
  Source: src-001
  Evidence: The rendered product page lists “Type: Deck Building,” “Players: 2-4 Players,” “Stock #: RIO531,” and the UPC, and links a Rules PDF.
  Confidence: high
- Claim: The linked official core rulebook was retrieved as a 16-page PDF and inspected through metadata and extracted text.
  Source: src-001, src-002
  Evidence: The product page’s RULES link resolves to Dominion2E.pdf; the receipt records HTTP 200, application/pdf, 4,965,016 bytes, and SHA-256 ea9e3fbef0064e6773c8772bbb234ac7d06c71a478422b45143432a29aa64273; pdfinfo reports 16 pages.
  Confidence: high
- Claim: Independent reception was retrieved from a domain separate from Rio Grande Games and BGG.
  Source: src-003
  Evidence: Board Game Quest returned HTTP 200 for a dated Dominion Review by Tony Mastrangeli, with Game Overview, How to Play, Final Thoughts, and a 4.5-star image/assessment.
  Confidence: high
- Claim: Three distinct source-linked visual assets were retrieved from the independent review domain.
  Source: src-004, src-005, src-006
  Evidence: The receipts record three different JPEG URLs, HTTP 200 responses, byte lengths, and distinct source hashes; reduced WebP derivatives are stored only in the quarantined packet.
  Confidence: high

## Authority boundary

- Claim: The bounded governing-document inventory for published claims is the current English 2nd Edition core rulebook; no published packet claim depends on a separate FAQ or erratum.
  Source: src-001, src-002, src-007
  Evidence: The official product page exposes the current core RULES document. A separate community article titled “Dominion 2019 Errata and Rules Tweaks” exists, but it is not an official Rio Grande Games endpoint and is explicitly excluded from operative current-print law.
  Confidence: high
- Claim: Exact card-text, expansion, promo, online, and digital-adaptation denominators remain outside this packet.
  Source: src-002, src-007
  Evidence: The official PDF supplies the current base-game framework and a bounded basic card inventory; the community errata article demonstrates that later card-specific changes exist, so this packet does not infer a complete card-text denominator from the core PDF.
  Confidence: high

## Retrieval ladder record

- Official product page: HTTP 200 in browser and capture receipt; direct RULES link exposed.
- Official support/download discovery: product page’s current Rules link retrieved; robots.txt returned HTTP 200 and points to https://riograndegames.com/sitemap.xml; that endpoint redirected to the current sitemap index at https://www.riograndegames.com/sitemap_index.xml, whose games sitemap was inspected.
- Official API/page-source discovery: direct WordPress JSON endpoints returned HTTP 403 under the command-line fetcher; the browser-rendered product page exposed the actual PDF URL, so the 403 is recorded as a retrieval state, not absence.
- Archive discovery: Wayback CDX returned historical Dominion product-page captures, including the product path; no archive claim is used as current rule authority.
- Targeted secondary discovery: Board Game Quest’s independent review and three embedded image assets were fetched directly; Dominion Strategy’s community errata article was fetched and kept separate from official law.

