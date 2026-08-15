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
type: scout_report
sources:
  - id: "src-001"
    title: "Ravensburger Horrified: Universal Monsters product page (archived publisher page)"
    url: "https://web.archive.org/web/20251104082036id_/https://www.ravensburger.us/en-US/products/games/board-games/horrified-universal-monsters-60001836"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-15"
    notes: "Archived publisher replay 2025-11-04 `id_` raw response retrieved HTTP 200; 601,935 bytes; SHA-256 6cf94bf639a38137b4ae1b64a85d30156732f0f6e9b49e4d5aca1237c06233c8; repeated three times with matching payload; body inspection found the title, article 60001836, EAN 810558018361, and Universal Monsters licence. Direct current page returned HTTP 403."
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
confidence: high
status: verified
---

# Bathcat scout report

## Selection and bounded scope

Horrified: Universal Monsters was selected as the cooperative cohort candidate after the unchecked wishlist entries were checked for eligibility. Quarriors was excluded by standing directive; Elder Sign is already canonical; generic pattern requests and expansion-only leads were not eligible candidates. This run carries one game only.

## Gate result

- Claim: The packet has a complete bounded governing-document inventory for the claims it publishes.
  Source: src-002
  Evidence: One complete official 16-page ES01 instructions PDF was retrieved HTTP 200 and inspected across components, setup, hero phase, monster phase, end conditions, monster procedures, clarifications, and solo rules.
  Confidence: high
- Claim: The packet spans two distinct non-BGG organizational domains: Ravensburger for identity/rules and Lee Leonardo’s independent site for reception.
  Source: src-001, src-002, src-003
  Evidence: The three machine receipts resolve to archived Ravensburger content, the Ravensburger-hosted PDF, and a separate independent review domain.
  Confidence: high
- Claim: The packet’s visual evidence is meaningful and nonreplacement.
  Source: src-002
  Evidence: The contact sheet was inspected in the foreground before individual panels; it shows distinct reduced base-game components, setup, and monster-phase/item subjects. Spanish text is visible but reduced and cannot substitute for the 16-page authority.
  Confidence: high

## Evidence classes

- Witnessed fact: product identifiers, official PDF length/hash/page count, source status, and visible panel subjects.
- Hearsay/testimony: the independent review’s praise and criticisms.
- Interpretation: normalized mechanics tags and the Better-if analysis.
- Unknown: complete card-local text, full component identity denominators, BGG rating/weight, and whether this ES01 file is the English insert for every 60001836 printing.

## Open questions

The packet deliberately keeps the language/printing boundary visible. A later audit may bind an English-language 60001836 insert or narrow the edition statement further; that is a document test, not permission to infer.
