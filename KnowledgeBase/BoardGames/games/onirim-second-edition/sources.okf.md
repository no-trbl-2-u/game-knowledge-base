---
okf_version: 0.2
type: sources
game:
  title: "Onirim (Second Edition)"
  slug: "onirim-second-edition"
  bgg_id: 156336
  publisher: "Z-Man Games"
  year: 2014
  weight: null
  edition: "2014 Z-Man Games second edition (ZM4900), basic game only"
scope: "base game"
mechanics: [cooperative-game, hand-management, set-collection, solo-solitaire-game]
sources:
  - id: "src-001"
    title: "Z-Man Games — Onirim Rules (ZM4900)"
    url: "https://d3sr78rmtg4mfy.cloudfront.net/filer_public/fd/0e/fd0ef6a2-c019-47a2-910a-a556f03a3d02/zm4900_onirim_rules.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-01"
    notes: "HTTP 200; application/pdf; 3,667,165 bytes; 7 pages; SHA-256 f146783bc8f5e39b97382a04f610615b05aab4306303cca8312d235c64638579."
  - id: "src-002"
    title: "Co-op Board Games — Onirim (Second Edition) Review"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/onirim-second-edition-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-01"
    notes: "HTTP 200; full independent review; SHA-256 b1ebeeaaee9de184f45cbddfb4bd4ba8b53475b058d8190ab612f22180d9c520."
  - id: "src-003"
    title: "Co-op Board Games — Onirim second-edition box photograph"
    url: "https://coopboardgames.com/wp-content/uploads/2016/05/onirim-review-300x300.png"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-01"
    notes: "HTTP 200 PNG; 44,087 bytes; source SHA-256 6e5613621b86b0ebf4e38960c8ebc18f63ff3ca74356d6dcc9c79a093d3c9568."
  - id: "src-004"
    title: "Co-op Board Games — Onirim completed base-game tableau photograph"
    url: "https://coopboardgames.com/wp-content/uploads/2017/10/Onirim-review-completed-game.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-01"
    notes: "HTTP 200 JPEG; 44,306 bytes; source SHA-256 7bfe18f88ce32dc1f462bd3105f8b6eab8dfd8c71cc369191bd966dc93a08d0a."
confidence: high
status: verified
---

# Source ledger

## Retrieval facts

- Claim: The complete official basic-game authority was retrieved as a seven-page PDF and inspected through extracted text and page metadata.
  Source: src-001
  Evidence: The receipt records HTTP 200, 3,667,165 bytes, SHA-256 f146783bc8f5e39b97382a04f610615b05aab4306303cca8312d235c64638579, and printed pages 4-12.
  Confidence: high
- Claim: Independent reception evidence was retrieved from a domain separate from the official-rules distribution.
  Source: src-002
  Evidence: The full Co-op Board Games review returned HTTP 200 and contains gameplay, Pros and Cons, and Final Thoughts sections.
  Confidence: high
- Claim: Two distinct source-linked visual assets were retrieved for reduced editorial analysis.
  Source: src-003, src-004
  Evidence: The receipts record distinct PNG and JPEG asset URLs, distinct byte hashes, and HTTP 200 responses.
  Confidence: high

## Authority inventory boundary

- Claim: The one-document governing denominator is complete for every rule claim published here.
  Source: src-001
  Evidence: The exact-edition PDF contains the complete setup, turn, action, endgame, two-player, and basic-game exception material used by the six rule records.
  Confidence: high
