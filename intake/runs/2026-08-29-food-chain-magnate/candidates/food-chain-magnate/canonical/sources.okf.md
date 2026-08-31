---
okf_version: 0.2
type: sources
game:
  title: "Food Chain Magnate"
  slug: "food-chain-magnate"
  bgg_id: 175914
  publisher: "Splotter Spellen"
  year: 2015
  weight: null
  edition: "Splotter Spellen third printing with modifications; claims bounded to the hosted English rules v3 and retained source-linked reception and visual evidence"
scope: "base game"
mechanics: [action-selection, engine-building, income, market, resource-management, variable-setup]
sources:

  - id: "src-003"
    title: "Splotter Con — Food Chain Magnate Rules EN v3 PDF"
    url: "https://splottercon.com/wp-content/uploads/2023/07/FCM_Rules_EN_v3.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-29"
    notes: "HTTP 200 PDF; 6,337,651 bytes; SHA-256 95831b0165f4d0c6b9bd4187280dbeeded4df0d40973fd886b9c947aef4a2ddd."
  - id: "src-004"
    title: "Board Game Quest — Brutal But Not Mean: A Tasty Tidbit from Food Chain Magnate"
    url: "https://www.boardgamequest.com/wp-json/wp/v2/posts/57861"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-29"
    notes: "HTTP 200 JSON; independent reception article."
  - id: "src-005"
    title: "Splotter Shop — Food Chain Magnate product image"
    url: "https://cdn.shopify.com/s/files/1/0556/2476/1532/products/pic2649434.png?v=1617718800"
    kind: image
    provenance: official
    retrieved_at: "2026-08-29"
    notes: "HTTP 200 PNG; SHA-256 332800ba17cb0c4df42dfd15ba31a9be081182db81807601829fa58fe41cf22c."
  - id: "src-006"
    title: "Splotter Shop — Food Chain Magnate product photograph"
    url: "https://cdn.shopify.com/s/files/1/0556/2476/1532/products/IMG_0740.jpg?v=1624358926"
    kind: image
    provenance: official
    retrieved_at: "2026-08-29"
    notes: "HTTP 200 JPEG; SHA-256 c092f066d02c6e0832a037ded1d15c5c8526ed2435db11e2c3e35b46fbb79f87."
confidence: high
status: verified
---

## Source-backed facts

- Claim: Four machine-recorded retrieval receipts support this packet across the official rules PDF, an independent review, and two visual assets.
  Source: src-003, src-004, src-005, src-006
  Evidence: evidence.json preserves final URLs, status, content type, byte length, retrieval timestamps, SHA-256 values, locators, and extracted evidence for all four retained receipts.
  Confidence: high

- Claim: The official rules authority is separate from the independent reception source.
  Source: src-003, src-004
  Evidence: The rules PDF is hosted at splottercon.com, while the reception article is returned by boardgamequest.com.
  Confidence: high

## Authority boundary

The packet treats the hosted English FCM Rules EN v3 PDF as the governing document for the summarized base-game claims. It does not preserve the PDF or assert that the host page is a complete archive of all Splotter printings, FAQs, or errata.
