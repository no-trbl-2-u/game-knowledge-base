---
okf_version: 0.2
type: visual_reference
game:
  title: "Quarriors!"
  slug: "quarriors"
  bgg_id: 91536
  publisher: "WizKids"
  year: 2011
  weight: null
  edition: "WizKids Quarriors! base game, product 70939; English core rules"
scope: "base game"
mechanics: [deck-bag-and-pool-building, dice-rolling, variable-player-powers, card-play-conflict-resolution]
sources:
  - id: "src-002"
    title: "WizKids — Quarriors! English Rulebook, product 70939"
    url: "https://wizkidsgames.com/wp-content/uploads/2013/05/Quarriors-Rulebook-70939.pdf"
    asset_url: "https://web.archive.org/web/20130812130122id_/http://wizkidsgames.com/wp-content/uploads/2013/05/Quarriors-Rulebook-70939.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-06"
    notes: "Pages 1 and 2 reduced for private editorial analysis; source SHA-256 5181762950c73054e614e3512712d9a8157fb79ccf29358c7e8d4563269c37e9."
  - id: "src-005"
    title: "WizKids — Quarriors base-set box image"
    url: "https://wizkids.com/quarriors/"
    asset_url: "https://eadn-wc03-13179282.nxedge.io/wp-content/uploads/2014/12/70939-Quarriors-Base-Set-Box.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-08-06"
    notes: "Official product media; source derivative hash recorded below."
  - id: "src-006"
    title: "WizKids — Quarriors base-set component image"
    url: "https://wizkids.com/quarriors/"
    asset_url: "https://eadn-wc03-13179282.nxedge.io/wp-content/uploads/2014/12/70939_Quarriors_01a.jpg"
    kind: other
    provenance: official
    retrieved_at: "2026-08-06"
    notes: "Official product media; source derivative hash recorded below."
visual_references:
  - id: "vis-001"
    source_id: "src-002"
    file: "visuals/references/01-overview.webp"
    subject: table-presence
    capture_type: "reduced PDF page overview"
    creator: "WizKids"
    rights_holder: "WizKids"
    usage_basis: editorial-excerpt
    license: "No reuse license stated; private analytical excerpt"
    attribution: "WizKids, Quarriors! English Rulebook, page 1"
    demonstrates: "The game's premise, player count, and creature/spell dice vocabulary."
    rationale: "Reduced page overview supports information hierarchy analysis without retaining a substitute-quality rulebook."
    sha256: "06f0b80dbc9e2c8bb478c40ff68a813054b5f7a25e041a93c6984c3e24a3027d"
  - id: "vis-002"
    source_id: "src-002"
    file: "visuals/references/02-setup.webp"
    subject: components
    capture_type: "reduced PDF page overview"
    creator: "WizKids"
    rights_holder: "WizKids"
    usage_basis: editorial-excerpt
    license: "No reuse license stated; private analytical excerpt"
    attribution: "WizKids, Quarriors! English Rulebook, page 2"
    demonstrates: "The initial Wilds arrangement and component organization."
    rationale: "Reduced page overview retains analytical layout cues without functioning as a rulebook substitute."
    sha256: "2ec419ed463bf5ec54dcfe3cbc8090f7609bc333732d9c2d857c7a4c6cb1a980"
  - id: "vis-003"
    source_id: "src-005"
    file: "visuals/references/03-box.webp"
    subject: box-cover
    capture_type: "reduced official product image"
    creator: "WizKids"
    rights_holder: "WizKids"
    usage_basis: editorial-excerpt
    license: "No reuse license stated; private analytical excerpt"
    attribution: "WizKids Quarriors! base-set box image"
    demonstrates: "Base-game product identity and visual language."
    rationale: "A reduced product-image excerpt anchors the exact base-game edition without retaining a high-resolution promotional asset."
    sha256: "acbe843559cebe9d2a40d8cfd0fd5bda8e641ad1f1b0d20c3f09a51d9639b971"
  - id: "vis-004"
    source_id: "src-006"
    file: "visuals/references/04-components.webp"
    subject: components
    capture_type: "reduced official product image"
    creator: "WizKids"
    rights_holder: "WizKids"
    usage_basis: editorial-excerpt
    license: "No reuse license stated; private analytical excerpt"
    attribution: "WizKids Quarriors! base-set component image"
    demonstrates: "The physical relationship between custom dice, cards, and storage components."
    rationale: "A reduced official image supports component-context analysis and edition identity."
    sha256: "98de2950973b2e36b98c30cce59b966d144ce1dbd17270987ad8bde5d49b3c4b"
contact_sheet: "visuals/contact-sheet.webp"
contact_sheet_sha256: "61e6b42246b284de7ec80bfb01b95f5c0636a9a766848ff4cf93f7af5fc9892e"
confidence: high
status: verified
---

# Visual packet

- Claim: Four source-linked visual references show the official rulebook's premise/setup and the publisher's base-box/component presentation.
  Source: src-002, src-005, src-006
  Evidence: The manifest above records each file, source, subject, usage basis, and SHA-256.
  Confidence: high
- Claim: The contact sheet is a deterministic composition of the four retained derivatives.
  Source: src-002, src-005, src-006
  Evidence: `contact-sheet.webp` hash is recorded above; all panels are WebP derivatives generated from the cited sources.
  Confidence: high

## Deterministic transform

```txt
pdftoppm -r 110 -f 1 -l 1 -png -singlefile Quarriors-Rulebook-70939.pdf page1
pdftoppm -r 110 -f 2 -l 2 -png -singlefile Quarriors-Rulebook-70939.pdf page2
ffmpeg -i page1.png -vf "scale=900:-2" -c:v libwebp -quality 65 -compression_level 6 -map_metadata -1 01-overview.webp
ffmpeg -i page2.png -vf "scale=900:-2" -c:v libwebp -quality 65 -compression_level 6 -map_metadata -1 02-setup.webp
ffmpeg -i official-box.jpg -vf "scale=700:-2" -c:v libwebp -quality 70 -compression_level 6 -map_metadata -1 03-box.webp
ffmpeg -i official-components.jpg -vf "scale=700:-2" -c:v libwebp -quality 70 -compression_level 6 -map_metadata -1 04-components.webp
```
