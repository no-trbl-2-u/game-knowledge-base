---
okf_version: 0.2
type: visual_reference
game:
  title: "Dead of Winter: The Long Night"
  slug: "dead-of-winter-the-long-night"
  bgg_id: 193037
  publisher: "Plaid Hat Games"
  year: 2016
  weight: 3.33
  edition: "English 2016 first/release printing"
scope: "edition-specific source-derived visual evidence"
mechanics: ["action-points", "area-movement", "cooperative-game", "dice-rolling", "hand-management", "hidden-information", "semi-cooperative-game", "variable-player-powers"]
sources:
  - id: "src-001"
    title: "Dead of Winter: The Long Night rulebook"
    url: "https://media.plaidhatgames.com/old_images/games/dead-of-winter/rules-tln.pdf"
    asset_url: "https://web.archive.org/web/20160910053934id_/http://www.plaidhatgames.com/images/games/dead-of-winter/rules-tln.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "24-page release rulebook; SHA-256 dc9002541e8cd7e7273a7ae2d00320fa9b021fd9e77e7e9a0d482999360190e6."
visual_references:
  - id: "vis-001"
    source_id: "src-001"
    file: "visuals/references/01-setup.webp"
    subject: components
    capture_type: "materially reduced page overview, rulebook p.2"
    creator: "Plaid Hat Games; illustrations credited to Fernanda Suarez and Joshua Panelo"
    rights_holder: "Plaid Hat Games / respective rights holders"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no reuse license identified"
    attribution: "Reduced excerpt from official 2016 rulebook p.2."
    demonstrates: "official inventory and objective-card visual hierarchy"
    rationale: "600x788 private analytical excerpt; one noncontiguous page cannot substitute for the source or components."
    sha256: "73d91c02b632bad82aafd2035a90328b645e5a366a1eba3b709345453023948b"
  - id: "vis-002"
    source_id: "src-001"
    file: "visuals/references/02-loop.webp"
    subject: setup
    capture_type: "materially reduced page overview, rulebook p.6"
    creator: "Plaid Hat Games; illustrations credited to Fernanda Suarez and Joshua Panelo"
    rights_holder: "Plaid Hat Games / respective rights holders"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no reuse license identified"
    attribution: "Reduced excerpt from official 2016 rulebook p.6."
    demonstrates: "standalone setup sequence and board/survivor placement"
    rationale: "600x788 private analytical excerpt; text is reduced and the image cannot substitute for the rulebook."
    sha256: "8768ef7518b9f7c7381aaabbc0db90220254f1fa52a52af684e282c121cdfb73"
  - id: "vis-003"
    source_id: "src-001"
    file: "visuals/references/03-tension.webp"
    subject: player-aid
    capture_type: "materially reduced page overview, rulebook p.16"
    creator: "Plaid Hat Games; illustrations credited to Fernanda Suarez and Joshua Panelo"
    rights_holder: "Plaid Hat Games / respective rights holders"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no reuse license identified"
    attribution: "Reduced excerpt from official 2016 rulebook p.16."
    demonstrates: "core Long Night/module selection boundary and always-on rules"
    rationale: "600x788 private analytical excerpt selected for edition/module analysis, not decoration."
    sha256: "66615732d0b9dd45147c40ab1a2729730c1c6cf95d7b1bb523bc46e451cfb26e"
  - id: "vis-004"
    source_id: "src-001"
    file: "visuals/references/04-endgame.webp"
    subject: decision-state
    capture_type: "materially reduced page overview, rulebook p.18"
    creator: "Plaid Hat Games; illustrations credited to Fernanda Suarez and Joshua Panelo"
    rights_holder: "Plaid Hat Games / respective rights holders"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no reuse license identified"
    attribution: "Reduced excerpt from official 2016 rulebook p.18."
    demonstrates: "Raxxon setup, containment vote, search risk, and special-zombie resolution"
    rationale: "600x788 private analytical excerpt; one module page cannot replace cards, location, or rulebook."
    sha256: "c38550df38654ada034b7557a1f9789724d666d38fcc52b414c5f6457d32c2aa"
contact_sheet: "visuals/contact-sheet.webp"
contact_sheet_sha256: "030ebed2cfa6b1d0f51d0a434ae7457e764e0416b3f25429be78e717f70d6087"
confidence: high
status: needs_followup
---

# Visual provenance

Deterministic recipe: Poppler `pdftoppm` at 72 DPI with width 600, then FFmpeg `libwebp` quality 55 and metadata stripping; pages 2, 6, 16, and 18. Contact sheet scales each panel to width 450 and uses FFmpeg `xstack` in a 2x2 layout, WebP quality 60, metadata stripped. Derivatives are 600x788; contact sheet is 900x1184.

- Claim: All four panels derive from the byte-verified 2016 target rulebook and show distinct analytical subjects without other-product leakage.
  Source: src-001
  Evidence: Visual inspection of the contact sheet on 2026-07-31 found inventory/objectives, setup, Long Night core rules, and Raxxon module pages; no corruption or cropping.
  Confidence: high
