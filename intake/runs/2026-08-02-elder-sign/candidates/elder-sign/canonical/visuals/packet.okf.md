---
okf_version: 0.2
type: visual_reference
game:
  title: "Elder Sign"
  slug: "elder-sign"
  bgg_id: 100423
  publisher: "Fantasy Flight Games"
  year: 2011
  weight: null
  edition: "Fantasy Flight Games base game; core box only"
scope: "base game"
mechanics: [cooperative-game, dice-rolling, hand-management, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-001"
    title: "Fantasy Flight Games — Elder Sign Rules of Play"
    url: "https://images-cdn.fantasyflightgames.com/ffg_content/Elder%20Sign/support/Eldersign-rules-of-play.pdf"
    asset_url: "https://images-cdn.fantasyflightgames.com/ffg_content/Elder%20Sign/support/Eldersign-rules-of-play.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-02"
    notes: "Pages 1 and 3 reduced editorial excerpts; PDF SHA-256 a030b0eb9154e96d8364ac58e2db512bc518f6dab01bd86e34b1dd500885128b."
  - id: "src-005"
    title: "Wikimedia Commons — Elder Sign Game Setting"
    url: "https://commons.wikimedia.org/wiki/File:Elder_Sign_Game_Setting.jpg"
    asset_url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Elder_Sign_Game_Setting.jpg"
    kind: other
    provenance: community
    retrieved_at: "2026-08-02"
    notes: "CC BY-SA 4.0 own-work photograph by Commons user Professorinc, dated 2018-06-21. HTTP 200; image/jpeg; 7,681,302 bytes; 4032x3024; SHA-256 8bc6f836cd8bb66a346f46c092fbd48d5277f526f4a69972e1a367045f921414."
visual_references:
  - id: "vis-001"
    source_id: "src-001"
    file: "visuals/references/01-official-overview.webp"
    subject: table-presence
    capture_type: "reduced PDF page overview"
    creator: "Fantasy Flight Games"
    rights_holder: "Fantasy Flight Games"
    usage_basis: editorial-excerpt
    license: "No reuse license stated; private analytical excerpt"
    attribution: "Fantasy Flight Games, Elder Sign Rules of Play, page 1"
    demonstrates: "The game's one-to-eight investigator premise and core objective framing."
    rationale: "Reduced page overview supports layout and component-context analysis without retaining a substitute-quality rulebook."
    sha256: "dba0bf27d0d37df72220d787ba795498e8ea41dc21880c79992ccb71ac640e48"
  - id: "vis-002"
    source_id: "src-001"
    file: "visuals/references/02-box-components.webp"
    subject: components
    capture_type: "reduced PDF page overview"
    creator: "Fantasy Flight Games"
    rights_holder: "Fantasy Flight Games"
    usage_basis: editorial-excerpt
    license: "No reuse license stated; private analytical excerpt"
    attribution: "Fantasy Flight Games, Elder Sign Rules of Play, page 3"
    demonstrates: "The base-game component classes — Entrance Reference Sheet, dice, Ancient One/Investigator/Adventure/Other World/item/Ally/Mythos cards, and the Sanity, Stamina, Clue, Monster, Doom, and Elder Sign token families."
    rationale: "Reduced page overview supports component-class identification without retaining substitute-quality rulebook text; at 460px ordinary body prose falls below practical replacement quality while class headings stay analytically useful."
    sha256: "a65d61b2a99899dc817c2f880d9cc8e36d5766a940d5e3b9dfbf7be5858dddf8"
  - id: "vis-003"
    source_id: "src-005"
    file: "visuals/references/03-decision-state.webp"
    subject: decision-state
    capture_type: "reduced openly licensed photograph"
    creator: "Wikimedia Commons user Professorinc"
    rights_holder: "Professorinc"
    usage_basis: open-license
    license: "CC BY-SA 4.0. Attribution required; this reduced derivative is redistributed under the same license."
    attribution: "Elder Sign Game Setting by Professorinc, via Wikimedia Commons, CC BY-SA 4.0"
    demonstrates: "A mid-adventure decision state: Other World Adventure cards in play with green dice committed against printed task lines, alongside the Entrance Reference Sheet and the green/yellow/red die trio."
    rationale: "The rulebook pages cannot show live task resolution. This openly licensed photograph supplies the dice-on-task-line loop that the reception claims describe, with a clean license basis rather than an asserted fair-use excerpt."
    sha256: "e5b43608a82570a89c57d1f7b3d9d9aa4011b44ff0da34d2b12780efaf5f777d"
contact_sheet: "visuals/contact-sheet.webp"
contact_sheet_sha256: "6fc49d02cac9f39313d50c59e815af1898c147b6bfe3f93fd4a5198dd87705be"
confidence: high
status: verified
---

# Visual packet

- Claim: The packet contains three source-linked reduced visual references showing official overview framing, base-game component classes, and a live adventure decision state.
  Source: src-001, src-005
  Evidence: The three manifest panels and their SHA-256 hashes are recorded above.
  Confidence: high

- Claim: Every retained visual rests on a stated rights basis — official-publisher editorial excerpt or an open license — and none relies on an all-rights-reserved third-party asset.
  Source: src-001, src-005
  Evidence: `vis-001` and `vis-002` are reduced excerpts of the official Rules of Play PDF (SHA-256 a030b0eb9154e96d8364ac58e2db512bc518f6dab01bd86e34b1dd500885128b); `vis-003` derives from a CC BY-SA 4.0 own-work Commons photograph and is redistributed under that same license with attribution.
  Confidence: high

- Claim: The photographed copy is the English base game and shows no expansion content.
  Source: src-005
  Evidence: Visible cards are English-language base-game Other World Adventures ("Another Dimension", "The Dreamlands", "City of the Great Race") plus the Entrance Reference Sheet and the base green/yellow/red dice, all of which the official rulebook page 3 lists as core-box classes.
  Confidence: medium

## Deterministic transform

All three panels and the contact sheet are reproducible from their sources with
Poppler 24.02.0 and FFmpeg 6.1.1. The `02-box-components.webp` filename is
retained from the pre-repair packet so the protected intake path is replaced in
place rather than deleted and re-added; its content is now the official
rulebook's component spread.

```txt
# vis-001 — page 1
pdftoppm -r 133 -f 1 -l 1 -png -singlefile <pdf> p1
ffmpeg -i p1.png -vf "scale=900:-2:flags=lanczos" \
  -c:v libwebp -quality 70 -compression_level 6 -map_metadata -1 01-official-overview.webp

# vis-002 — page 3
pdftoppm -r 133 -f 3 -l 3 -png -singlefile <pdf> p3
ffmpeg -i p3.png -vf "scale=460:-2:flags=lanczos" \
  -c:v libwebp -quality 60 -compression_level 6 -map_metadata -1 02-box-components.webp

# vis-003 — CC BY-SA 4.0 Commons photograph
ffmpeg -i <commons.jpg> -vf "scale=700:-2:flags=lanczos" \
  -c:v libwebp -quality 70 -compression_level 6 -map_metadata -1 03-decision-state.webp

# contact sheet — 3x1 from the retained derivatives, padded on #181818
ffmpeg -i 01-official-overview.webp -i 02-box-components.webp -i 03-decision-state.webp \
  -filter_complex \
  "[0:v]scale=450:450:force_original_aspect_ratio=decrease,pad=450:450:(ow-iw)/2:(oh-ih)/2:color=#181818[a];\
   [1:v]scale=450:450:force_original_aspect_ratio=decrease,pad=450:450:(ow-iw)/2:(oh-ih)/2:color=#181818[b];\
   [2:v]scale=450:450:force_original_aspect_ratio=decrease,pad=450:450:(ow-iw)/2:(oh-ih)/2:color=#181818[c];\
   [a][b][c]hstack=inputs=3[o]" -map "[o]" \
  -c:v libwebp -quality 72 -compression_level 6 -map_metadata -1 contact-sheet.webp
```

Panel dimensions are 901x900 (`vis-001`), 460x460 (`vis-002`), and 700x526
(`vis-003`); the contact sheet is 1350x450. Same-turn inspection confirmed
three distinct uncorrupted panels with no expansion, promo, or
digital-adaptation leakage.
