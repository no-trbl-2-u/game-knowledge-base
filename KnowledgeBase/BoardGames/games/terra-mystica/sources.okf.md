---
okf_version: 0.2
type: sources
game:
  title: "Terra Mystica"
  slug: "terra-mystica"
  bgg_id: 120677
  publisher: "Feuerland Spiele / Z-Man Games"
  year: 2012
  weight: null
  edition: "Base game; claims bounded to Feuerland Spiele German rulebook v1.2 and official product page"
scope: "base game"
mechanics: [area-majority-influence, engine-building, income, modular-board, resource-management, tile-placement, variable-player-powers, variable-setup]
sources:
  - id: "src-001"
    title: "Feuerland Spiele — Terra Mystica product page"
    url: "https://www.feuerland-spiele.de/spiele/terra-mystica/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-09-02"
    notes: "HTTP 200; 41,203 bytes; SHA-256 1853bec778122bcbb937e6bfdf0d6edc188c60d7b6f70c1bcd7f375c7ebd9bf2. Repair recapture at 2026-09-02T21:49:24.885Z supersedes the prior dynamic-HTML observation; cited excerpt and source identity remain stable."
  - id: "src-002"
    title: "Feuerland Spiele — Terra Mystica Spielregel PDF"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Terra_Mystica/Regel-Deutsch.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-09-02"
    notes: "HTTP 200; 10,876,886 bytes; SHA-256 6d2d1ed08d28aac034d034b35a3fd9a43b59a1d0168d1c2412ce7cd653229b62; 20 pages; footer v1.2."
  - id: "src-003"
    title: "Board Game Quest — Terra Mystica Review"
    url: "https://www.boardgamequest.com/wp-json/wp/v2/posts/5905"
    kind: review
    provenance: secondary
    retrieved_at: "2026-09-02"
    notes: "HTTP 200 JSON; 25,288 bytes; SHA-256 b9efaa0f1a7c297b04f2e7ec9befe6a6248510bc61a76497c94cd2fdf1714b07."
  - id: "src-004"
    title: "SPACE-BIFF! — Terra Terrifica"
    url: "https://spacebiff.com/2014/08/04/terra-mystica/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-09-02"
    notes: "HTTP 200 HTML; 117,022 bytes; SHA-256 7ee0009a4973a3f0fec9a2a5a58a64d7d748ec130d0e3a06152c1373638e5bf2. Repair recapture at 2026-09-02T21:49:26.250Z confirms the cited excerpt and source identity."
  - id: "src-005"
    title: "Feuerland Spiele — Terra Mystica box image"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Terra_Mystica/TerraMystica_Schachtel_druck.jpg"
    kind: image
    provenance: official
    retrieved_at: "2026-09-02"
    notes: "HTTP 200 JPEG; 4,244,651 bytes; SHA-256 ed631776d3dcc36a71f4f9653f391eab0817d3ea568457b71fcbb9d11a82db49."
  - id: "src-006"
    title: "Feuerland Spiele — Terra Mystica play scene image"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Terra_Mystica/terra_mystica_spielszene.jpg"
    kind: image
    provenance: official
    retrieved_at: "2026-09-02"
    notes: "HTTP 200 JPEG; 3,882,497 bytes; SHA-256 03402ae27f9c19c96523b26ed3015135c6a78166062e0473874aaedf17263b5c."
confidence: high
status: verified
---

## Source-backed facts

- Claim: Six machine-recorded receipts support the bounded packet.
  Source: src-001, src-002, src-003, src-004, src-005, src-006
  Evidence: The candidate evidence.json preserves final URL, status, content type, retrieval time, byte length, SHA-256, locator, and evidence for each receipt.
  Confidence: high

- Claim: The rules authority and reception authorities are distinct organizational domains.
  Source: src-002, src-003, src-004
  Evidence: The core PDF is hosted by Feuerland Spiele; the independent reviews are hosted by Board Game Quest and SPACE-BIFF!.
  Confidence: high

## Authority boundary

The packet uses the official German base-game rulebook v1.2 as its governing rules document. It stores receipts and summaries, not the source PDF or source-resolution art. Expansion rules, the Automa Solo Box, Big Box changes, and a complete FAQ/errata inventory are outside scope.
