---
okf_version: 0.2
type: sources
game:
  title: "Twilight Imperium Fourth Edition"
  slug: "twilight-imperium-fourth-edition"
  bgg_id: 233078
  publisher: "Fantasy Flight Games"
  year: 2017
  weight: null
  edition: "Fourth Edition core game; English retail rules scope"
scope: "base game"
mechanics: [area-majority-influence, area-movement, card-play-conflict-resolution, dice-rolling, drafting, hand-management, hidden-information, modular-board, negotiation, race, resource-management, tech-trees-tech-tracks, variable-player-powers, variable-setup]
sources:
  - id: "src-001"
    title: "Twilight Imperium Fourth Edition — Fantasy Flight Games product page"
    url: "https://www.fantasyflightgames.com/product/twilight-imperium-fourth-edition/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-10-16"
    notes: "Retrieved HTTP 200; observed receipt SHA-256 9860aea8f3995cb303d1ede522ae24479b07890e3d2014053cd7fde3560ba817."
  - id: "src-002"
    title: "Twilight Imperium Fourth Edition Learn to Play"
    url: "https://cdn.svc.asmodee.net/production-fantasyflightgames/uploads/2026/08/ti-k0289_learn_to_play_2020_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-16"
    notes: "Retrieved HTTP 200; 15,694,502 bytes; SHA-256 ac91632f142898db6c784be2bb4287875b31b7a3b4d6836bcef95f5e070d647d."
  - id: "src-003"
    title: "Five Beginner’s Notes on Twilight Imperium — SPACE-BIFF!"
    url: "https://spacebiff.com/2017/12/01/twilight-imperium/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-16"
    notes: "Retrieved HTTP 200; independent review; observed receipt SHA-256 ac10dcae4004ccde600df2d9e5c56785264db982dc9bf8ef5d781305a106e8b9."
  - id: "src-004"
    title: "Twilight Imperium Fourth Edition hero image"
    url: "https://cdn.svc.asmodee.net/production-fantasyflightgames/uploads/image-converter/2026/09/FFG_TI07_Hero-Slider.webp"
    kind: image
    provenance: official
    retrieved_at: "2026-10-16"
    notes: "Visual receipt; source bytes SHA-256 efd4cca8aa6a9a3a441882fe210ddd8b5caacd94336a6c347e12e5e831377185."
  - id: "src-005"
    title: "Twilight Imperium Fourth Edition product image"
    url: "https://cdn.svc.asmodee.net/production-fantasyflightgames/uploads/image-converter/2026/08/FFG_TI07_Product-Image-1.webp"
    kind: image
    provenance: official
    retrieved_at: "2026-10-16"
    notes: "Visual receipt; source bytes SHA-256 e7efb9748814ccd8ace2c2892a81f78b94928cebc8312d540ccf3f80489f1b9c."
confidence: high
status: verified
---

## Summary

The packet uses Fantasy Flight Games for edition identity and the official Learn to Play PDF for governing rules. SPACE-BIFF! supplies independent reception testimony. The two official image assets are reduced into private analytical WebP derivatives; no rulebook or source-resolution asset is retained.

## Source-backed facts

- Claim: The packet spans two non-BGG organizational domains and separates official rules from independent reception.
  Source: src-001, src-002, src-003
  Evidence: Fantasy Flight Games/Asmodee infrastructure supplies identity and rules; SPACE-BIFF! is an independent secondary source.
  Confidence: high

- Claim: Static PDF and image custody is recorded with exact observed byte lengths and SHA-256 values.
  Source: src-002, src-004, src-005
  Evidence: The retrieval receipts record HTTP 200, content type, byte length, and SHA-256 for each static artifact.
  Confidence: high

## Open questions

- Dynamic HTML receipts are observed-at records. A later audit should verify final URL, source identity, cited excerpts, and load-bearing semantics rather than demand wrapper-byte identity.
- No BGG rating or complexity weight is asserted because BGG was blocked by Cloudflare during retrieval.
