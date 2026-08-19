---
okf_version: 0.2
type: sources
game:
  title: "The Crew: The Quest For Planet Nine"
  slug: "the-crew"
  bgg_id: null
  publisher: "Thames & Kosmos"
  year: 2020
  weight: null
  edition: "North American Thames & Kosmos SKU 691868; retained English base-game manual"
scope: "base game"
mechanics: [cooperative-game, campaign-game, hand-management, hidden-information, trick-taking]
sources:
  - id: "src-002"
    title: "Thames & Kosmos official English manual — The Crew"
    url: "https://cdn.shopify.com/s/files/1/0104/6331/3977/files/691868_Crew_Manual.pdf?v=1780593954"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-12"
    notes: "PDF pages 1-22; contents and Game Materials on printed page 2; The Crew is a cooperative, mission-based trick-taking game."
  - id: "src-003"
    title: "Board Game Quest REST post — The Crew review"
    url: "https://www.boardgamequest.com/wp-json/wp/v2/posts/39838"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-19"
    notes: "WordPress REST post 39838 content.rendered: review title, gameplay overview, communication, and final thoughts; The Crew is a unique trick-taking game."
  - id: "src-004"
    title: "The Family Gamers REST post — The Crew review"
    url: "https://www.thefamilygamers.com/wp-json/wp/v2/posts/13761"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-19"
    notes: "WordPress REST post 13761 content.rendered: review title, How to Play, Communication, and reception sections; The Crew: The Quest for Planet Nine."
  - id: "src-005"
    title: "Thames & Kosmos official product box image"
    url: "https://www.thamesandkosmos.com/cdn/shop/products/TheCrew_3DBox_1000x.jpg?v=1667421243"
    kind: image
    provenance: official
    retrieved_at: "2026-08-12"
    notes: "Product image asset; Official product box image showing The Crew product identity and physical packaging."
  - id: "src-006"
    title: "Tabletop Bellhop — The Crew gameplay photograph"
    url: "https://tabletopbellhop.com/wp-content/uploads/2021/03/Playing-The-Crew-scaled.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-19"
    notes: "Current JPEG image asset: 43,411 bytes, SHA-256 ba465c59fe928529b59b108bb3b8a402316702643f45d9e20d5dbf5ab6d654d0; independent review photograph showing a tabletop play state with The Crew cards and tokens."
  - id: "src-007"
    title: "The Family Gamers — The Crew card-hand photograph"
    url: "https://www.thefamilygamers.com/wp-content/uploads/Crew_hand_of_cards-min.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-12"
    notes: "Review image asset: Crew_hand_of_cards-min.jpg; Independent review photograph showing a hand of The Crew cards as a game component state."
confidence: high
status: verified
---
# Source ledger

## Retrieval facts

- Claim: The bounded official English manual is a stable governing receipt for the 691868 base-game scope.
  Source: src-002
  Evidence: The retained receipt is HTTP 200 application/pdf, 3,333,181 bytes, 22 pages after inspection, SHA-256 12aded82732014978dfd8a744c6775e75ba9e719b7241e2bab7de42680a8db2f; its URL filename is 691868_Crew_Manual.pdf and its title material identifies The Crew.
  Confidence: high
- Claim: Independent reception is available from two non-publisher review domains.
  Source: src-003, src-004
  Evidence: Board Game Quest and The Family Gamers each returned HTTP 200 WordPress REST post responses with distinct organizational domains and game-specific rules/reception passages.
  Confidence: high
- Claim: Three distinct image assets were retrieved for visual analysis.
  Source: src-005, src-006, src-007
  Evidence: The receipts record an official product-box JPEG, a current Tabletop Bellhop gameplay JPEG, and a Family Gamers card-hand JPEG with distinct final URLs, content types, byte lengths, and SHA-256 values.
  Confidence: high

## Authority boundary

- Claim: The bounded governing-document inventory for this packet is the current official English manual; no published claim depends on a separate FAQ or erratum.
  Source: src-002
  Evidence: The retained official PDF is the manual used here, while the packet does not assert a publisher-wide absence of other support documents.
  Confidence: high
- Claim: The packet excludes the optional helper app, Mission Deep Sea, translations, and complete mission/card-text history.
  Source: src-002
  Evidence: The manual itself labels the helper app as optional and identifies the bounded base-game material; no source retrieved here is used to publish expansion or digital rules.
  Confidence: high
