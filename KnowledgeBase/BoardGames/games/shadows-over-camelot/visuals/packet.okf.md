---
okf_version: 0.2
type: visual_reference
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
sources:
  - id: "src-001"
    title: "Shadows over Camelot Book of Quests"
    url: "https://ncdn0.daysofwonder.com/shadowsovercamelot/en/img/sc_quests_en.pdf"
    asset_url: "https://ncdn0.daysofwonder.com/shadowsovercamelot/en/img/sc_quests_en.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Official 2005 base-game companion; 2,306,806 bytes; 16 pages; SHA-256 2e96d255acd1ed17f0a345608531aa45e9f4aa0d180625b9ab0f7e17d0c0cde9; created/modified 2005-05-26."
visual_references:
  - id: "vis-001"
    source_id: "src-001"
    file: "visuals/references/01-setup.webp"
    subject: iconography
    capture_type: "editorial excerpt: Book of Quests p. 4 crop x20 y25 w785 h560 at 100 dpi"
    creator: "Days of Wonder / credited creators; derivative by SomberSoft"
    rights_holder: "Days of Wonder / respective rights holders"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no license inferred"
    attribution: "Reduced excerpt from official 2005 Shadows over Camelot Book of Quests, p. 4."
    demonstrates: "victory/defeat consequence icon hierarchy"
    rationale: "A 300 px reduced crop retains coarse visual grammar, omits most of the page, and cannot replace the source booklet."
    sha256: "6fa945d488ffb8ef960cf87d82aa932ea502e267553d1a82913508cab37e0fe9"
  - id: "vis-002"
    source_id: "src-001"
    file: "visuals/references/02-loop.webp"
    subject: cards
    capture_type: "editorial excerpt: Book of Quests p. 6 crop x20 y20 w785 h600 at 100 dpi"
    creator: "Days of Wonder / credited creators; derivative by SomberSoft"
    rights_holder: "Days of Wonder / respective rights holders"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no license inferred"
    attribution: "Reduced excerpt from official 2005 Shadows over Camelot Book of Quests, p. 6."
    demonstrates: "Lancelot combat-card set layout"
    rationale: "Noncontiguous 300 px overview preserves hierarchy and tiny examples, not replacement-quality card or rule text."
    sha256: "9e3d0940c8ffd2a29d086fc92994263214d5b8fc1baf2a5b9d5f256d50a0fadb"
  - id: "vis-003"
    source_id: "src-001"
    file: "visuals/references/03-tension.webp"
    subject: decision-state
    capture_type: "editorial excerpt: Book of Quests p. 9 crop x20 y20 w785 h620 at 100 dpi"
    creator: "Days of Wonder / credited creators; derivative by SomberSoft"
    rights_holder: "Days of Wonder / respective rights holders"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no license inferred"
    attribution: "Reduced excerpt from official 2005 Shadows over Camelot Book of Quests, p. 9."
    demonstrates: "Holy Grail progress and opposing card flow"
    rationale: "A 300 px reduced partial-page excerpt supports private layout analysis while remaining non-substitutive."
    sha256: "79ecd504353ac14a0c270a6964e618c67378e347430c81b2b6cef5a6be84cde8"
  - id: "vis-004"
    source_id: "src-001"
    file: "visuals/references/04-endgame.webp"
    subject: board-state
    capture_type: "editorial excerpt: Book of Quests p. 12 crop x20 y25 w785 h1000 at 100 dpi"
    creator: "Days of Wonder / credited creators; derivative by SomberSoft"
    rights_holder: "Days of Wonder / respective rights holders"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no license inferred"
    attribution: "Reduced excerpt from official 2005 Shadows over Camelot Book of Quests, p. 12."
    demonstrates: "Camelot victory/defeat visual framing"
    rationale: "The 300 px reduced crop emphasizes the Camelot illustration and cannot replace the booklet's rules."
    sha256: "436e6ef018d92e510d2f45a9c0067536cfbd42d8c7b77969bfc5e57bb8609519"
contact_sheet: "visuals/contact-sheet.webp"
contact_sheet_sha256: "47536d18b9c53d8d9bc20cc17733dfdae3286a11eec8529063e7c0a0e775fda9"
confidence: medium
status: needs_followup
---

# Visual Reference Packet

- Claim: Four in-place replacements derive only from noncontiguous pages 4, 6, 9, and 12 of the verified official 2005 base Book of Quests; no 2015/reprint, Merlin's Company, Sir Bedivere/promo, translation, replacement, or digital asset was used.
  Source: src-001
  Evidence: Source hash and page/crop locators above; visual inspection of the 560 x 500 contact sheet found only base victory icons, Lancelot, Holy Grail, and Camelot.
  Confidence: high

- Claim: Poppler 25.03.0 rasterized each selected page at 100 dpi; FFmpeg 7.1.5 cropped the declared rectangles, Lanczos-scaled to 300 px width, stripped metadata, and encoded libwebp quality 68/compression 6. Output dimensions/bytes are 300x214/11,436; 300x230/15,188; 300x236/14,986; and 300x382/16,484. Contact-sheet construction fit each derivative inside 280x240, padded to 280x250 white, xstacked 2x2, and encoded quality 72/compression 6 to 560x500/42,870 bytes.
  Source: src-001
  Evidence: Deterministic local command receipts and hashes declared in this manifest.
  Confidence: high

- Claim: Visual inspection found all four panels distinct and uncorrupted; headings and coarse iconography remain identifiable, while ordinary prose is below practical replacement quality. The excerpts are rights-restricted editorial derivatives, not licensed component substitutes.
  Source: src-001
  Evidence: Contact sheet inspected after generation; source credits/opening contain no open-content license.
  Confidence: high
