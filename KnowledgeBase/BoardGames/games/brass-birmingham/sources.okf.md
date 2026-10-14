---
okf_version: 0.2
type: sources
game:
  title: "Brass: Birmingham"
  slug: "brass-birmingham"
  bgg_id: 224517
  publisher: "Roxley Games"
  year: 2018
  weight: null
  edition: "Retail edition; Rulebook v2018.11"
scope: "base game"
mechanics: [hand-management, income, market, resource-management, tile-placement, turn-order-claim-action, variable-setup]
sources:
  - id: "src-001"
    title: "Brass: Birmingham — Roxley product page"
    url: "https://roxley.com/products/brass-birmingham"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-10-14"
    notes: "Official product identity, player count, duration, mechanics description, and component listing."
  - id: "src-002"
    title: "Brass: Birmingham Rulebook — Roxley"
    url: "https://cdn.shopify.com/s/files/1/0246/2190/8043/files/Brass-Birmingham-Rulebook.pdf?v=1758826281"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-14"
    notes: "Official seven-page rules PDF; SHA-256 bb627a11c769957fbb5f26a210e3957ae27a2bad054ba9cb3b4fadc6c2ba73e."
  - id: "src-003"
    title: "Brass: Birmingham Review — What Board Game"
    url: "https://www.whatboardgame.com/post/brass-birmingham-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-14"
    notes: "Independent review outside the publisher domain; SHA-256 6e09cdbc2ebd871fbccf0c84434223cf06060bf0ca77c8e8ca55afd22c9b9928."
  - id: "src-004"
    title: "Brass: Birmingham product image — Roxley"
    url: "https://cdn.shopify.com/s/files/1/0246/2190/8043/t/5/assets/efe427c2dcbf--Brass-Birmingham.jpg?v=1781038939"
    asset_url: "https://cdn.shopify.com/s/files/1/0246/2190/8043/t/5/assets/efe427c2dcbf--Brass-Birmingham.jpg?v=1781038939"
    kind: image
    provenance: official
    retrieved_at: "2026-10-14"
    notes: "Static image receipt SHA-256 8d216686d063e5297d42d8be7b16b3cfe9b04f827b3e38a6e3002840c482e8ba; reduced private derivative is used locally."
  - id: "src-005"
    title: "Brass: Birmingham gameplay image — Roxley"
    url: "https://cdn.shopify.com/s/files/1/0246/2190/8043/t/5/assets/0f96a108ffe6--DS8-0619-ee8d74.jpg?v=1781038945"
    asset_url: "https://cdn.shopify.com/s/files/1/0246/2190/8043/t/5/assets/0f96a108ffe6--DS8-0619-ee8d74.jpg?v=1781038945"
    kind: image
    provenance: official
    retrieved_at: "2026-10-14"
    notes: "Static image receipt SHA-256 919b76979ccdd3bfa61fe51f0b88095be8f2756a12a4f63759e7f73f627b0f8a; reduced private derivative is used locally."
confidence: high
status: verified
---

## Source registry

- Claim: The rulebook receipt is a static PDF with exact bytes recorded, while the product page and review are dynamic HTML receipts with final URLs, cited evidence, and transport metadata.
  Source: src-001, src-002, src-003
  Evidence: The evidence ledger records content type, byte length, retrieval timestamp, and SHA-256 for each receipt; the PDF is seven pages and the two HTML sources returned HTTP 200.
  Confidence: high

- Claim: The packet uses two distinct non-BGG organizational domains: Roxley and What Board Game.
  Source: src-001, src-003
  Evidence: The official identity/rules/assets resolve under roxley.com or its Shopify CDN, while the independent review resolves under whatboardgame.com.
  Confidence: high
