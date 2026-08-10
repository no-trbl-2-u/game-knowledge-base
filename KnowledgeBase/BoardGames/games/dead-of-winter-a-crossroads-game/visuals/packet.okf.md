---
okf_version: 0.2
type: visual_reference
game:
  title: "Dead of Winter: A Crossroads Game"
  slug: "dead-of-winter-a-crossroads-game"
  bgg_id: null
  publisher: "Plaid Hat Games"
  year: 2014
  weight: null
  edition: "English 2014 first/release printing"
scope: "four reduced, noncontiguous 2014 official-rulebook page overviews for private analytical reference"
mechanics: ["action-points", "area-movement", "cooperative-game", "dice-rolling", "hand-management", "hidden-information", "semi-cooperative-game", "variable-player-powers"]
sources:
  - id: "src-001"
    title: "Dead of Winter rulebook (English 2014 release printing)"
    url: "https://media.plaidhatgames.com/old_images/games/dead-of-winter/rules.pdf"
    asset_url: "https://media.plaidhatgames.com/old_images/games/dead-of-winter/rules.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Target authority; HTTP 200 application/pdf; 24,044,267 bytes; 20 pages; SHA-256 41f37d18f07bf04303c364916dcc0bab62d379b85373661650b0118be5812ca7; Adobe InDesign CS6/PDF Library 10.0.1; created 2014-01-29T04:54:29Z, modified 2014-01-29T04:55:24Z; PDF 1.7; 576×756 pt. Byte-identical to the 2014-04-24 Wayback witness."
visual_references:
  - id: "vis-001"
    source_id: "src-001"
    file: "visuals/references/01-setup.webp"
    subject: components
    capture_type: "deterministic reduced editorial-excerpt derivative, source PDF p. 2"
    creator: "Plaid Hat Games"
    rights_holder: "Unknown / respective rights holders"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no license asserted"
    attribution: "Dead of Winter 2014 release rulebook p. 2, Plaid Hat Games."
    demonstrates: "The target component inventory, including 30 zombie tokens, and objective-card anatomy at reduced overview scale."
    rationale: "Supports target-print category/count and hierarchy analysis without retaining replacement-quality card or rule text."
    sha256: "84f1c46c097621d0d5c27250e97e237aae394967ea0dd07236100b234dd3b1b5"
  - id: "vis-002"
    source_id: "src-001"
    file: "visuals/references/02-loop.webp"
    subject: cards
    capture_type: "deterministic reduced editorial-excerpt derivative, source PDF p. 4"
    creator: "Plaid Hat Games"
    rights_holder: "Unknown / respective rights holders"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no license asserted"
    attribution: "Dead of Winter 2014 release rulebook p. 4, Plaid Hat Games."
    demonstrates: "Crisis and Crossroads anatomy plus component iconography."
    rationale: "Shows why card-local triggers and consequences remain in the open governing denominator."
    sha256: "69b4dd9560316f7b8f1407c2a7460d632b26aaf0979cc3818fdb94bb9ef27bc7"
  - id: "vis-003"
    source_id: "src-001"
    file: "visuals/references/03-tension.webp"
    subject: setup
    capture_type: "deterministic reduced editorial-excerpt derivative, source PDF p. 6"
    creator: "Plaid Hat Games"
    rights_holder: "Unknown / respective rights holders"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no license asserted"
    attribution: "Dead of Winter 2014 release rulebook p. 6, Plaid Hat Games."
    demonstrates: "Standard setup sequence, objective-driven setup branch, and survivor placement."
    rationale: "Grounds setup architecture while remaining materially reduced."
    sha256: "6e3e6958678613ef3ac5c08d6356ece8f2499d6f5382e47222f3a0d8f94a0c74"
  - id: "vis-004"
    source_id: "src-001"
    file: "visuals/references/04-endgame.webp"
    subject: player-aid
    capture_type: "deterministic reduced editorial-excerpt derivative, source PDF p. 12"
    creator: "Plaid Hat Games"
    rights_holder: "Unknown / respective rights holders"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no license asserted"
    attribution: "Dead of Winter 2014 release rulebook p. 12, Plaid Hat Games."
    demonstrates: "Target crisis-resolution example and ordered colony-phase upkeep."
    rationale: "Supports flow and target crisis arithmetic analysis without reproducing a usable player aid."
    sha256: "b35ee3dc64664b6be1556a7b393e1b10088f7dad7d8e322d3f19066874aaff08"
contact_sheet: "visuals/contact-sheet.webp"
contact_sheet_sha256: "ae160ead7e260fa935d20a70ff7911834dba9edd99fbe9bc6ae56ef27c578d92"
confidence: high
status: needs_followup
---

# Visual reference packet

## Deterministic transform receipt

Source representation: the exact `src-001` bytes (`41f37d18…12ca7`). Tools: Poppler `pdftoppm 25.03.0`; FFmpeg `7.1.5-0+deb13u1` with `libwebp`.

For each page in `2→01-setup`, `4→02-loop`, `6→03-tension`, `12→04-endgame`:

1. `pdftoppm -f PAGE -l PAGE -singlefile -r 72 -png rules-2014-live.pdf NAME`
2. `ffmpeg -i NAME.png -vf scale=458:600:flags=lanczos -frames:v 1 -c:v libwebp -lossless 0 -quality 55 -compression_level 6 -map_metadata -1 NAME.webp`

Retained outputs are all 458×600, yuv420p:

| File | Bytes | SHA-256 |
|---|---:|---|
| `01-setup.webp` | 40,546 | `84f1c46c097621d0d5c27250e97e237aae394967ea0dd07236100b234dd3b1b5` |
| `02-loop.webp` | 42,694 | `69b4dd9560316f7b8f1407c2a7460d632b26aaf0979cc3818fdb94bb9ef27bc7` |
| `03-tension.webp` | 41,324 | `6e3e6958678613ef3ac5c08d6356ece8f2499d6f5382e47222f3a0d8f94a0c74` |
| `04-endgame.webp` | 49,464 | `b35ee3dc64664b6be1556a7b393e1b10088f7dad7d8e322d3f19066874aaff08` |

The contact sheet is built only from those retained WebPs: each is Lanczos-scaled to 229×300 and placed with FFmpeg `xstack` at `0_0|229_0|0_300|229_300`, then encoded with the same WebP settings and metadata removal. Output: 458×600 yuv420p, 44,654 bytes, SHA-256 `ae160ead7e260fa935d20a70ff7911834dba9edd99fbe9bc6ae56ef27c578d92`.

## Inspection and use boundary

Same-turn inspection of all four panels and the contact sheet confirmed distinct, coherent, uncorrupted page overviews corresponding to pp. 2, 4, 6, and 12. Page 2 visibly lists **30 zombie tokens**. No PH1000, expansion, promo, translation, or synthetic-diagram leakage was observed. Four materially reduced noncontiguous pages cannot substitute for the rulebook or components; they are retained solely for private visual analysis and should be removed on rights-holder request.
