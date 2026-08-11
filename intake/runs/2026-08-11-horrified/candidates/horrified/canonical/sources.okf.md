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
    url: "https://web.archive.org/web/20260306043202id_/https://www.ravensburger.us/en-US/products/games/board-games/horrified-universal-monsters-60001836"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-11"
    notes: "Archived publisher page; direct current page returned HTTP 403. Article 60001836, EAN 810558018361, Universal Monsters licence, 1–5 players, and product description were inspected."
  - id: "src-002"
    title: "Ravensburger Horrified: Universal Monsters official instructions (Spanish ES01)"
    url: "https://www.ravensburger.org/spielanleitungen/ecm/Spielanleitungen/22682_UMH_Instructions_ES.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-11"
    notes: "HTTP 200 application/pdf; 16 pages; 4,796,393 bytes; SHA-256 66ac020f322f4ff1c24b715df13508301effc64f463226e6e6210d5da646b461; copyright page identifies 2024 Ravensburger North America, Inc. and ES01."
  - id: "src-003"
    title: "Lee Leonardo — Horrified (First Impressions)"
    url: "https://lee-leonardo.github.io/blog/horrified-impressions/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-11"
    notes: "Independent review dated 2019-10-29; HTTP 200; full HTML retrieved and read; SHA-256 a20ebd6ed3361e96a11fdae74627fa62353705369c895806b0e1952e3452e5fc."
  - id: "src-004"
    title: "Ravensburger Horrified: Universal Monsters product image — box/board presentation"
    url: "https://ravensburger.cloud/images/produktseiten/820x600/60001836.webp"
    asset_url: "https://ravensburger.cloud/images/produktseiten/820x600/60001836.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-08-11"
    notes: "HTTP 200 official product image; source receipt SHA-256 f01279e0e89eb403606a48d76950d8685644da296083633708ebc456f746651c."
  - id: "src-005"
    title: "Ravensburger Horrified: Universal Monsters product image — components"
    url: "https://ravensburger.cloud/images/produktseiten/820x600/60001836_1.webp"
    asset_url: "https://ravensburger.cloud/images/produktseiten/820x600/60001836_1.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-08-11"
    notes: "HTTP 200 official product image; source receipt SHA-256 b33f40cc252532a0a81b79286a67145b3c9ba823b993eff839a39da599659973."
  - id: "src-006"
    title: "Ravensburger Horrified: Universal Monsters product image — gameplay state"
    url: "https://ravensburger.cloud/images/produktseiten/820x600/60001836_2.webp"
    asset_url: "https://ravensburger.cloud/images/produktseiten/820x600/60001836_2.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-08-11"
    notes: "HTTP 200 official product image; source receipt SHA-256 4a8ae5d45955ae286187adb6bf38db2b439e46d1077e4fc77393ff37173b502c."
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
