---
okf_version: 0.2
type: sources
game:
  title: "Betrayal Legacy"
  slug: "betrayal-legacy"
  bgg_id: 240196
  publisher: "Avalon Hill"
  year: 2018
  weight: 2.92
  edition: "English 2018 standalone campaign; compared against Hasbro F3147 support files (2021 footer)"
scope: "retrieval and authority ledger"
mechanics: ["campaign-game", "cooperative-game", "dice-rolling", "hidden-information", "legacy-game", "modular-board", "semi-cooperative-game", "tile-placement", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "BoardGameGeek item 240196 metadata"
    url: "https://api.geekdo.com/api/geekitems?objectid=240196&objecttype=thing"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/json; 22,212 bytes; SHA-256 6a04adef1a5c313490f216a54509775872be8f973d3dd64283c0d4b19e2462d7."
  - id: "src-002"
    title: "Hasbro F3147 product and instructions page"
    url: "https://instructions.hasbro.com/en-us/instruction/avalon-hill-betrayal-legacy-role-playing-haunted-narrative-board-game"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 1,376,834 bytes; SHA-256 a10d44315499200a6be82486510e7c5d88f469c72f58c10daf39575bcf14ac4a."
  - id: "src-003"
    title: "Hasbro F3147 English rules bundle"
    url: "https://instructions.hasbro.com/api/download/F3147_en-us_avalon-hill-betrayal-legacy-role-playing-haunted-narrative-board-game.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/pdf; 11,278,257 bytes; 84 pages; SHA-256 5c558dacdc495c13ff5ae7d36db4a2dc8ced0e02e39b156d0075c9de4b4a60c9."
  - id: "src-004"
    title: "BGG current rating and weight endpoint"
    url: "https://api.geekdo.com/api/dynamicinfo?objecttype=thing&objectid=240196"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/json; 1,320 bytes; SHA-256 2de95578dab17719c1afebc8cfab65868f443eea9877f170411bccfdec9f1694."
  - id: "src-005"
    title: "Shut Up & Sit Down review: Betrayal Legacy"
    url: "https://www.shutupandsitdown.com/review-betrayal-legacy/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Original page was Cloudflare-blocked in browser (Error 1005). Copy inspected through https://r.jina.ai/https://www.shutupandsitdown.com/review-betrayal-legacy/ : HTTP 200; text/plain; 12,498 bytes; SHA-256 bc4d2e47f8497773bda02b82defbaa5801ace73746342f08591af05e60af7957. Published 2018-10-31."
  - id: "src-006"
    title: "Polygon review: Betrayal Legacy puts the focus back on narrative"
    url: "https://www.polygon.com/2018/11/15/18096721/betrayal-legacy-board-game-review-rob-daviau/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Copy inspected through https://r.jina.ai/https://www.polygon.com/2018/11/15/18096721/betrayal-legacy-board-game-review-rob-daviau/ : HTTP 200; text/plain; 8,704 bytes; SHA-256 6d21e28c3c6faddb7705f793f49332ca7eda4b4fe29be528d54e982a1b993a97. Published 2018-11-15."
confidence: high
status: needs_followup
last_verified: "2026-07-31"
summary: "Exact retrieval receipts for official support, BGG identity telemetry, and two independent reviews."
---

# Sources — Betrayal Legacy

## Retrieval ledger

| ID | Authority role | Final URL / inspected copy | Result |
|---|---|---|---|
| src-001 | 2018 identity | BGG API exact URL | 200 JSON, 22,212 bytes, hash recorded |
| src-002 | official product/component support | Hasbro exact detail URL | 200 HTML, 1,376,834 bytes, hash recorded |
| src-003 | official available book corpus | Hasbro exact PDF URL | 200 PDF, 11,278,257 bytes, 84 pages, hash recorded |
| src-004 | dated rating/weight snapshot | BGG API exact URL | 200 JSON, 1,320 bytes, hash recorded |
| src-005 | independent reception | original SUSD URL; Jina retrieval aid | original browser Error 1005; proxy 200 text, 12,498 bytes, hash recorded |
| src-006 | independent reception | original Polygon URL; Jina retrieval aid | proxy 200 text, 8,704 bytes, hash recorded |

- Claim: The Hasbro PDF is not merely a generic landing page: it is a directly downloadable official 84-page bundle containing four titled book sections.
  Source: src-003
  Evidence: "Rules" (PDF pp.1-13), "Secrets of Survival" (14-45), "Traitor's Tome" (46-67), and numbered Bleak Journal entries (68-84).
  Confidence: high

- Claim: The exact 2018-English-edition relationship remains unresolved because BGG says 3-5 players while Hasbro F3147 says 3-6 and the served PDF carries a 2021 Hasbro footer.
  Source: src-001, src-002, src-003
  Evidence: "minplayers: 3; maxplayers: 5" versus "For 3 to 6 Players" and "© 2021 Hasbro."
  Confidence: high

## Authority boundary

BGG supplies identity and community telemetry only. Reviews supply reception only. Rule claims in this tree rely on the Hasbro-hosted PDF, and all such claims remain provisionally applicable to the target until printing equivalence is independently established.
