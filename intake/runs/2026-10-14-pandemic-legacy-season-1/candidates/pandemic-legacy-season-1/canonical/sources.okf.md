---
okf_version: 0.2
type: sources
game:
  title: "Pandemic Legacy: Season 1"
  slug: "pandemic-legacy-season-1"
  bgg_id: 161936
  publisher: "Z-Man Games"
  year: 2015
  weight: null
  edition: "English retail edition; blue/red rulebooks; source PDF ©2015, 2018"
scope: "base game"
mechanics: [action-points, campaign-game, cooperative-game, hand-management, hidden-information, legacy-game, set-collection, variable-player-powers]
sources:
  - id: "src-001"
    title: "BoardGameGeek API identity — Pandemic Legacy: Season 1"
    url: "https://api.geekdo.com/api/geekitems?objectid=161936&objecttype=thing"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-10-15"
    notes: "HTTP 200, application/json, 53,047 bytes, SHA-256 8a02a7dd873a9d9c1f52055b5b3238391cf8e70e6bf75130f63076d8c8fdcea3; item objectid/id 161936 and canonical_link identify the game."
  - id: "src-002"
    title: "Pandemic Legacy: Season 1 English rulebook — Z-Man Games"
    url: "https://cdn.svc.asmodee.net/production-zman/uploads/2024/09/zm7170_zm7171_rules_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-14"
    notes: "HTTP 200, application/pdf, 8,559,108 bytes, SHA-256 409b7121d6a7c6afcf307d6aaf7d081271a4d2bb1b0325db5c72d00fdffab3a6."
  - id: "src-003"
    title: "Pandemic Legacy: Season 1 review — Geeks Under Grace"
    url: "https://www.geeksundergrace.com/tabletop/review-pandemic-legacy-season-1/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-14"
    notes: "Independent review outside the publisher domain; dynamic HTML receipt preserves final URL and cited excerpt."
  - id: "src-004"
    title: "Pandemic Legacy: Season 1 Blue edition cover art — Z-Man Games"
    url: "https://cdn.svc.asmodee.net/production-zman/uploads/image-converter/2024/08/ZM7170_coverarts.webp"
    asset_url: "https://cdn.svc.asmodee.net/production-zman/uploads/image-converter/2024/08/ZM7170_coverarts.webp"
    kind: image
    provenance: official
    retrieved_at: "2026-10-14"
    notes: "Official static cover-art receipt; SHA-256 db517e2518484154e2c90590e1f55553c9c10e4e94413414561831f2558ead75."
confidence: high
status: verified
---

## Source registry

- Claim: The packet has one official governing-rules source and one independent reception source across two non-BGG organizational domains.
  Source: src-002, src-003, src-004
  Evidence: The rulebook and cover asset resolve on the Z-Man/Asmodee CDN, while the review resolves on geeksundergrace.com; all receipts record HTTP 200 and exact retrieval metadata.
  Confidence: high

- Claim: The rulebook is treated as byte-stable and the review as dynamic HTML.
  Source: src-002, src-003, src-004
  Evidence: The receipts record application/pdf for the 8,559,108-byte PDF, text/html for the review, and image/webp for the cover asset, each with observed transport metadata and SHA-256.
  Confidence: high

## Retrieval limits

- Claim: The packet does not claim a current BGG rating, complexity weight, complete legacy-deck inventory, or edition-specific errata beyond the retrieved rulebook.
  Source: src-002, src-003
  Evidence: Those documents were not used as evidence in this bounded pass, so their values remain null or absent rather than inferred.
  Confidence: high
