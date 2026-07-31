---
okf_version: 0.2
type: sources
game:
  title: "Shadows over Camelot"
  slug: "shadows-over-camelot"
  bgg_id: 15062
  publisher: "Days of Wonder"
  year: 2005
  weight: null
  edition: "English 2005 first/release retail base game; release rulebook bytes not recovered"
scope: "English 2005 first/release retail base game only; 2015/reprint rules are later comparison; Merlin's Company, Sir Bedivere/promos, translations, variants, replacements, and digital implementations excluded"
mechanics: ["cooperative-game", "dice-rolling", "hand-management", "hidden-information", "semi-cooperative-game", "set-collection", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "Shadows over Camelot Book of Quests"
    url: "https://ncdn0.daysofwonder.com/shadowsovercamelot/en/img/sc_quests_en.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200 application/pdf; 2,306,806 bytes; 16 pages; 595.276 x 807.874 pt; SHA-256 2e96d255acd1ed17f0a345608531aa45e9f4aa0d180625b9ab0f7e17d0c0cde9; Title SOC book of quest EN; Author Cyrille Daujean; created/modified 2005-05-26; Acrobat Distiller 6.0.0."
  - id: "src-002"
    title: "Shadows over Camelot FAQ 1.0"
    url: "https://cdn.svc.asmodee.net/production-daysofwonder/uploads/2024/07/sc_faq_en.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200 application/pdf; 309,029 bytes; 6 A4 pages; SHA-256 2f4ab8d1756e5743dd7cf12802bebb371dcf08141b448d9867adce5ca7a90709; cover dated 2005-10-12; metadata created 2005-10-24; OpenOffice 1.1.3."
  - id: "src-003"
    title: "Shadows over Camelot English rulebook, later reprint file"
    url: "https://ncdn0.daysofwonder.com/shadowsovercamelot/en/img/sc_rules_2015_en.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200 application/pdf; 10,567,489 bytes; 20 pages; 595.275 x 807.876 pt; SHA-256 1e3f5abb3938be9c7ede217405f96b750a92234c2e2ad962d9fff77408a3d950; metadata title identifies reprint 2012, created 2012-04-23, modified 2015-05-18; footer 7202-P07 and copyright 2005-2015. Later comparison, not release proof."
  - id: "src-004"
    title: "Retired original English rulebook locator"
    url: "https://ncdn0.daysofwonder.com/shadowsovercamelot/en/img/sc_rules_en.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Direct request returned HTTP 403; equivalent www host also 403; exact-url CDX query returned an empty JSON array. This is a failed lead, not proof of absence."
  - id: "src-005"
    title: "Retired Days of Wonder FAQ portal"
    url: "https://www.daysofwonder.com/shadowsovercamelot/en/content/faq"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Direct/browser returned Access Denied; Jina retrieval aid reported the current target as 404. Historical FAQ inventory remains open."
  - id: "src-006"
    title: "Review of Shadows over Camelot"
    url: "https://www.rpg.net/reviews/archive/11/11335.phtml"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Tom Vasel; 2005-06-15; HTTP 200 text/html; 29,990 bytes; SHA-256 347b23a68671e56ce71e0ccb139b31cf23aad01c506d5513cc4a2d839d3aa4e6."
  - id: "src-007"
    title: "Review: Shadows over Camelot"
    url: "https://www.shutupandsitdown.com/review-shadows-over-camelot/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Quinns; 2012-11-26; origin returned HTTP 403; bounded text retrieved through r.jina.ai, 9,979 bytes, SHA-256 45784d93836c0407c2b1e99a7194d610be11878b328af3f3e02bb6ca6d470402. Review expressly says expansion was not played."
  - id: "src-008"
    title: "BoardGameGeek Shadows over Camelot"
    url: "https://boardgamegeek.com/boardgame/15062"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-31"
    notes: "Identity locator for BGG 15062 only; no weight/rating snapshot retained."
confidence: medium
status: needs_followup
---

# Source and version matrix

- Claim: The acquired release-era official corpus is the 2005 Book of Quests plus FAQ 1.0; the complete original Rules booklet and any separate release aid are not acquired.
  Source: src-001, src-002, src-004
  Evidence: Two dated 2005 PDFs are retrievable; `sc_rules_en.pdf` failed with 403 and its exact CDX query returned no rows.
  Confidence: high

- Claim: The 2015-served rulebook is explicitly later authority and may illuminate framework or comparison but cannot silently establish 2005 printing law.
  Source: src-003
  Evidence: PDF metadata says reprint 2012 and modified 2015; footer says 7202-P07 and copyright 2005-2015.
  Confidence: high

- Claim: FAQ 1.0 clarifies named cases rather than declaring a universal precedence hierarchy; its Sir Bedivere paragraph is excluded as promo-local material.
  Source: src-002
  Evidence: FAQ introduction calls its contents repetitions, clarifications, and definitive interpretations; section IV contains a separate Sir Bedivere question not present among the seven base Knights in Book of Quests Appendix I.
  Confidence: high

- Claim: SKU lead DOW7201, UPC, first-print lot/version marker, and exact 2005 publication boundary remain unverified; 7202-P07 belongs only to the later comparison file.
  Source: src-003, src-004
  Evidence: No acquired 2005 physical/official inventory receipt exposes SKU or UPC; later footer cannot be backdated.
  Confidence: high
