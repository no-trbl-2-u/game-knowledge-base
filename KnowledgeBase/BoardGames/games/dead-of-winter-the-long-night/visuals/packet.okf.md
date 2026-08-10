---
okf_version: 0.2
type: visual_reference
game:
  title: "Dead of Winter: The Long Night"
  slug: "dead-of-winter-the-long-night"
  bgg_id: 193037
  publisher: "Plaid Hat Games"
  year: 2016
  weight: null
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
    rationale: "300x394, 18,464-byte private analytical excerpt; hierarchy remains visible while ordinary body text is not practically readable."
    sha256: "400db1ce0942b9696100635a2920025e767d89747fad1b389ade5a7a0c8d2c59"
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
    rationale: "300x394, 19,978-byte private analytical excerpt; setup structure remains visible while ordinary body text is not practically readable."
    sha256: "c42ab3cd8e5259e32dc1ac8f210ba77d4486d0927400ce97a3eea7294a1aff29"
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
    rationale: "300x394, 22,444-byte private analytical excerpt; section hierarchy remains visible while ordinary body text is not practically readable."
    sha256: "16b0a70ece02040fee8cdd5a8d8b1e221d9fe3f3f70f836c537f75713621e6e6"
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
    rationale: "300x394, 22,174-byte private analytical excerpt; module layout remains visible while ordinary body text is not practically readable."
    sha256: "e72d903d803fc5cd61524a8351de73760d6f6fb7d95700f7c15d2383a48e64d6"
contact_sheet: "visuals/contact-sheet.webp"
contact_sheet_sha256: "0a3fcb28ac5eeaf815651bfbc071a842d375a04826ed77ae2bc266431e844e0f"
confidence: high
status: needs_followup
---

# Visual provenance

Deterministic recipe from the verified `dc900254...0190e6` PDF: for pages 2, 6, 16, and 18, Poppler 25.03.0 `pdftoppm -f PAGE -l PAGE -singlefile -r 72 -scale-to-x 300 -scale-to-y -1 -png`; then FFmpeg 7.1.5 `-map_metadata -1 -frames:v 1 -c:v libwebp -lossless 0 -quality 45 -compression_level 6 -preset picture`. Contact sheet: feed the four installed WebPs in manifest order to FFmpeg `xstack=inputs=4:layout=0_0|w0_0|0_h0|w0_h0:fill=black`, then `-map_metadata -1 -frames:v 1 -c:v libwebp -lossless 0 -quality 50 -compression_level 6 -preset picture`. Panels are 300x394; the 2x2 sheet is 600x788 and 83,696 bytes. `ffprobe` reports no format tags on any derivative.

- Claim: All four panels derive from the byte-verified 2016 target rulebook and show distinct analytical subjects without other-product, promo, or adult-content leakage; no panel is corrupted or cropped, and ordinary body text is not practically readable at installed size.
  Source: src-001
  Evidence: Independent inspection of all four 300x394 panels and the 600x788 contact sheet on 2026-07-31 found inventory/objectives, setup, Long Night core rules, and Raxxon module pages; hierarchy remains analytically useful but body copy is nonreplacement quality.
  Confidence: high
