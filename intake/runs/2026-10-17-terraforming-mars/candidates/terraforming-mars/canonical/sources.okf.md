---
okf_version: 0.2
type: sources
game:
  title: "Terraforming Mars"
  slug: "terraforming-mars"
  bgg_id: 167791
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
    notes: "Identity receipt; observed final URL is https://fryxgames.se/product/terraforming-mars/."
  - id: "src-002"
    title: "Terraforming Mars Official Rules — FryxGames"
    url: "https://fryxgames.se/wp-content/uploads/2023/04/TMRULESFINAL.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-17"
    notes: "Official English base-game rules PDF; static bytes are hashed in evidence.json."
  - id: "src-003"
    title: "Two Minds about Terraforming Mars — SPACE-BIFF!"
    url: "https://spacebiff.com/2017/04/07/terraforming-mars/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-17"
    notes: "Independent reception review."
  - id: "src-004"
    title: "Terraforming Mars Review — The Dice Tower"
    url: "https://www.dicetower.com/board-game-review/6702"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-17"
    notes: "Independent reception review."
  - id: "src-005"
    title: "Terraforming Mars product image — FryxGames"
    url: "https://fryxgames.se/wp-content/uploads/2023/08/TM.png"
    kind: other
    provenance: official
    retrieved_at: "2026-10-17"
    notes: "Official source-resolution image; local asset is a reduced WebP derivative."
  - id: "src-006"
    title: "Terraforming Mars gameplay image — FryxGames"
    url: "https://fryxgames.se/wp-content/uploads/2023/11/TM-scaled.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-10-17"
    notes: "Official source-resolution image; local asset is a reduced WebP derivative."
  - id: "src-007"
    title: "Terraforming Mars board image — FryxGames"
    url: "https://fryxgames.se/wp-content/uploads/2023/11/TM2-scaled.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-10-17"
    notes: "Official source-resolution image; local asset is a reduced WebP derivative."
  - id: "src-008"
    title: "Terraforming Mars components image — FryxGames"
    url: "https://fryxgames.se/wp-content/uploads/2023/11/TM3-scaled.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-10-17"
    notes: "Official source-resolution image; local asset is a reduced WebP derivative."
confidence: high
status: verified
---

## Retrieval ledger

| ID | Role | Source kind | Retrieval witness |
|---|---|---|---|
| src-001 | identity | official dynamic HTML | HTTP 200; final URL redirected to `/product/terraforming-mars/`; SHA-256 and byte length preserved in `evidence.json` |
| src-002 | official_rules | official static PDF | HTTP 200; 11,099,776 bytes; SHA-256 `87b27f8741ed4e77ca6d029c224c8113e1d2227dc7541eb487f2a46ba12c5255` |
| src-003 | independent_review | secondary HTML | HTTP 200; cited card/tableau and player-count passages present in fetched body |
| src-004 | independent_review | secondary HTML | HTTP 200; cited review description and game metadata present in fetched body |
| src-005 | visual | official PNG | HTTP 200; source bytes and SHA-256 preserved in `evidence.json` |
| src-006 | visual | official JPEG | HTTP 200; source bytes and SHA-256 preserved in `evidence.json` |
| src-007 | visual | official JPEG | HTTP 200; source bytes and SHA-256 preserved in `evidence.json` |
| src-008 | visual | official JPEG | HTTP 200; source bytes and SHA-256 preserved in `evidence.json` |

## Source-backed facts

- Claim: The official source set spans two non-BGG organizational domains: FryxGames for identity, rules, and visuals, plus SPACE-BIFF! and The Dice Tower for independent reception.
  Source: src-001, src-002, src-003, src-004
  Evidence: The receipts preserve the official publisher domain and two separate independent review domains.
  Confidence: high

- Claim: The packet's static rulebook and image custody is reproducible from exact byte lengths and SHA-256 hashes.
  Source: src-002, src-005, src-006, src-007, src-008
  Evidence: `evidence.json` records HTTP status, content type, byte length, retrieval time, and hash for each static artifact.
  Confidence: high

## Open questions

- No rating source is published because BGG returned no usable rating receipt in this run; the manifest leaves the complexity denominator and `game.weight` null.
