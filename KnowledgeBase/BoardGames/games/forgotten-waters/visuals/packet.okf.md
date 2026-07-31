---
okf_version: 0.2
type: visual_reference
game:
  title: "Forgotten Waters"
  slug: "forgotten-waters"
  bgg_id: 302723
  publisher: "Plaid Hat Games"
  year: 2020
  weight: null
  edition: "English 2020 first/release base game (PH2900); release-era app build unresolved"
scope: "English 2020 first/release base game (PH2900); release-era app build unresolved"
mechanics: [cooperative-game, dice-rolling, push-your-luck, variable-player-powers, worker-placement]
sources:
  - id: "src-001"
    title: "Forgotten Waters Rulebook"
    url: "https://media.plaidhatgames.com/old_images/games/forgotten-waters/rules.pdf"
    asset_url: "https://media.plaidhatgames.com/old_images/games/forgotten-waters/rules.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "6,942,206 bytes; 8 pages, 612x792 pt; SHA-256 9bcbd1cbe32ebde0ce326cb17a5a3dd767b5c40b5dfd15c647ef9803d93c410a; copyright 2020 Plaid Hat Games."
visual_references:
  - id: "vis-001"
    source_id: "src-001"
    file: "visuals/references/01-setup.webp"
    subject: components
    capture_type: "reduced rulebook crop, page 2"
    creator: "Plaid Hat Games; reduced by SomberSoft"
    rights_holder: "Plaid Hat Games / respective creators"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no reuse license asserted"
    attribution: "Forgotten Waters Rulebook p.2, Plaid Hat Games (2020)."
    demonstrates: "printed component inventory and component anatomy"
    rationale: "Private edition/component audit; 300x184 crop is below replacement quality and omits narrative content."
    sha256: "cd031f930756839c00ab77eeb2d6f314a1893ea680be8f4d8d8c0f6b2c316d4c"
  - id: "vis-002"
    source_id: "src-001"
    file: "visuals/references/02-loop.webp"
    subject: setup
    capture_type: "reduced rulebook crop, page 4"
    creator: "Plaid Hat Games; reduced by SomberSoft"
    rights_holder: "Plaid Hat Games / respective creators"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no reuse license asserted"
    attribution: "Forgotten Waters Rulebook p.4, Plaid Hat Games (2020)."
    demonstrates: "numbered setup and role allocation"
    rationale: "Private setup-architecture audit; reduced crop cannot substitute for rules or components."
    sha256: "908ad630563001537999a0481d3ea398bc42772ea6974691c6b9a90125941155"
  - id: "vis-003"
    source_id: "src-001"
    file: "visuals/references/03-tension.webp"
    subject: player-aid
    capture_type: "reduced rulebook crop, page 5"
    creator: "Plaid Hat Games; reduced by SomberSoft"
    rights_holder: "Plaid Hat Games / respective creators"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no reuse license asserted"
    attribution: "Forgotten Waters Rulebook p.5, Plaid Hat Games (2020)."
    demonstrates: "planning phase, action types, and shared loss panel"
    rationale: "Private flow audit; ordinary text is reduced below practical replacement quality."
    sha256: "7a4db1267e6ea8bd9827258c5d3b46652b951dd344d54231920fe9553c829072"
  - id: "vis-004"
    source_id: "src-001"
    file: "visuals/references/04-endgame.webp"
    subject: board-state
    capture_type: "reduced rulebook crop, page 7"
    creator: "Plaid Hat Games; reduced by SomberSoft"
    rights_holder: "Plaid Hat Games / respective creators"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no reuse license asserted"
    attribution: "Forgotten Waters Rulebook p.7, Plaid Hat Games (2020)."
    demonstrates: "ship-stat, movement, tie, objective, and card framework"
    rationale: "Private systems audit; noncontiguous reduced excerpt contains no story scripts or hidden endings."
    sha256: "12074114a5601fb8665719f1d190115172ad5aa67843cb40180b94249c2b8cf9"
contact_sheet: "visuals/contact-sheet.webp"
contact_sheet_sha256: "5c4c888ebd701ff9d96a3ef020ed257bf7da4bc87524ba18f0f2e7249b293fd9"
confidence: high
status: needs_followup
---

# Visual packet
- Claim: Four distinct noncontiguous crops were rendered from verified rulebook pages 2, 4, 5, and 7; no entry-book, ending, story-script, or audio content was used.
  Source: src-001
  Evidence: Deterministic recipe: Poppler `pdftoppm -png -r 100`; FFmpeg crop 850x520 at y=80/500, Lanczos scale to 300 px width, `libwebp -quality 72 -compression_level 6 -map_metadata -1`; contact sheet 600x408 at quality 75.
  Confidence: high
- Claim: Visual inspection found four distinct, uncorrupted edition-fit panels; text is reduced below practical replacement quality and no excluded-content leakage is visible.
  Source: src-001
  Evidence: Contact sheet inspected after generation; panels show components, setup, round structure/loss, and system frameworks.
  Confidence: high
