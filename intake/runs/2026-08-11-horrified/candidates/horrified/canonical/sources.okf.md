---
okf_version: 0.2
game:
  title: "Horrified: Universal Monsters"
  slug: "horrified"
  bgg_id: null
  publisher: "Ravensburger"
  year: null
  weight: null
  edition: "Universal Monsters base game; Ravensburger article 60001836 / EAN 810558018361; official governing instructions retrieved as Spanish ES01, product file 22682"
scope: "base game"
mechanics: [action-points, cooperative-game, dice-rolling, hand-management, resource-management, solo-solitaire-game, variable-player-powers, variable-setup]
type: sources
sources:
  - id: "src-001"
    title: "Ravensburger Horrified: Universal Monsters product page (archived publisher page)"
    url: "https://web.archive.org/web/20251104082036if_/https://www.ravensburger.us/en-US/products/games/board-games/horrified-universal-monsters-60001836"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-13"
    notes: "Archived publisher replay 2025-11-04 retrieved HTTP 200; 627,928 bytes; SHA-256 48228deae6e537d377f9ae04827dc9ef3345f12b31845dd9d3a4a5dc55f87442. Direct current page returned HTTP 403. Article 60001836, EAN 810558018361, Universal Monsters licence, 1–5 players, and product description were inspected."
  - id: "src-002"
    title: "Ravensburger Horrified: Universal Monsters official instructions (Spanish ES01)"
    url: "https://www.ravensburger.org/spielanleitungen/ecm/Spielanleitungen/22682_UMH_Instructions_ES.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-13"
    notes: "HTTP 200 application/pdf; 16 pages; 4,796,393 bytes; SHA-256 66ac020f322f4ff1c24b715df13508301effc64f463226e6e6210d5da646b461; copyright page identifies 2024 Ravensburger North America, Inc. and ES01."
  - id: "src-003"
    title: "Lee Leonardo — Horrified (First Impressions)"
    url: "https://lee-leonardo.github.io/blog/horrified-impressions/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-13"
    notes: "Independent review dated 2019-10-29; HTTP 200; full HTML retrieved and read; SHA-256 a20ebd6ed3361e96a11fdae74627fa62353705369c895806b0e1952e3452e5fc."
  - id: "src-004"
    title: "Ravensburger Horrified: Universal Monsters product image — box/board presentation"
    url: "https://web.archive.org/web/20250525002319if_/https://ravensburger.cloud/images/produktseiten/820x600/60001836.webp"
    asset_url: "https://web.archive.org/web/20250525002319if_/https://ravensburger.cloud/images/produktseiten/820x600/60001836.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-08-13"
    notes: "Archived HTTP 200 official product image replay; source receipt SHA-256 58df1aff424d5c9614df08fb1061172b163ee7328d5a453d7060ddfed7941f5d."
  - id: "src-005"
    title: "Ravensburger Horrified: Universal Monsters product image — components"
    url: "https://web.archive.org/web/20250525002318if_/https://ravensburger.cloud/images/produktseiten/820x600/60001836_1.webp"
    asset_url: "https://web.archive.org/web/20250525002318if_/https://ravensburger.cloud/images/produktseiten/820x600/60001836_1.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-08-13"
    notes: "Archived HTTP 200 official product image replay; source receipt SHA-256 a8d574d0d9d68b0218e5a77c965b595855dfc409c259e333c9973cc3aa1e579c."
  - id: "src-006"
    title: "Ravensburger Horrified: Universal Monsters product image — gameplay state"
    url: "https://web.archive.org/web/20250525002317if_/https://ravensburger.cloud/images/produktseiten/820x600/60001836_2.webp"
    asset_url: "https://web.archive.org/web/20250525002317if_/https://ravensburger.cloud/images/produktseiten/820x600/60001836_2.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-08-13"
    notes: "Archived HTTP 200 official product image replay; source receipt SHA-256 b2339506a9f857ce5a13796b25e5414c588c3fa9e72765267de7d39ffde4d8eb."
confidence: high
status: verified
---

# Source registry

## Retrieval and boundary

- Claim: The official publisher product page was available as an archived HTTP 200 retrieval, while the direct current publisher page was a retrieval block rather than evidence of absence.
  Source: src-001
  Evidence: Archive receipt HTTP 200; current direct URL separately returned HTTP 403 during retrieval.
  Confidence: high
- Claim: The governing rules authority is a publisher-hosted 16-page PDF whose copyright page identifies 2024 Ravensburger North America, Inc. and ES01.
  Source: src-002
  Evidence: Receipt metadata and official instructions printed p. 16.
  Confidence: high
- Claim: Independent reception is supplied by a separate non-publisher domain and was read as full article text rather than inferred from a search snippet.
  Source: src-003
  Evidence: HTTP 200 HTML receipt for Lee Leonardo’s review, dated 2019-10-29.
  Confidence: high

## Retrieval ladder record

The scout checked the official product URL, archive/CDX captures, publisher-hosted instructions, page-source asset URLs, targeted exact-title discovery, and browser fallback. The direct publisher page’s HTTP 403 is retained as a retrieval state; the archived page and direct official PDF supply the packet’s evidence. No guessed filename or search snippet is used as a rules claim.
