---
okf_version: 0.2
type: scout_report
game:
  title: "Forgotten Waters"
  slug: "forgotten-waters"
  bgg_id: 302723
  publisher: "Plaid Hat Games"
  year: 2020
  weight: null
  edition: "English 2020 first/release base game (PH2900); release-era app build unresolved"
scope: "English 2020 first/release base game (PH2900); release-era app build unresolved"
mechanics: [cooperative-game, dice-rolling, push-your-luck, semi-cooperative-game, variable-player-powers, worker-placement]
followups:
  - source_id: "src-005"
    url: "https://fwcrossroads.plaidhatgames.com/"
    failure: other
    fallback: "The recovered official update-log replay supplies dated version history and four titles; the 2020 publisher page closes the scenario count at five; current v1.12.0 supplies current-only structure."
    retry_needs: alternate_source
    notes: "Release app-root CDX search found no 2020 fwcrossroads.plaidhatgames.com objects; fwcrossroads.com root captures begin in August 2020, but the historical main bundle was unavailable. This is not absence. Need immutable release bundle, complete title/data/entry/check/branch/audio manifest, and byte comparison."
  - source_id: null
    url: "publisher support/FAQ/errata inventory"
    failure: other
    fallback: "Rulebook and dated app FAQ only."
    retry_needs: manual_review
    notes: "No authoritative complete FAQ/errata/support inventory was established."
sources:
  - id: "src-001"
    title: "Forgotten Waters Rulebook"
    url: "https://media.plaidhatgames.com/old_images/games/forgotten-waters/rules.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/pdf; 6,942,206 bytes; 8 letter pages; SHA-256 9bcbd1cbe32ebde0ce326cb17a5a3dd767b5c40b5dfd15c647ef9803d93c410a; PDF created 2019-11-14, modified 2020-02-26; copyright 2020; designers Isaac Vega, J. Arthur Ellis, Mr. Bistro. The product-page rules_1.pdf is byte-identical."
  - id: "src-002"
    title: "Replacement Player Sheets"
    url: "https://media.plaidhatgames.com/old_images/games/forgotten-waters/playersheets.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/pdf; 4,410,197 bytes; 42 pages at 648x468 pt; SHA-256 2f79f08f0345f397efc86749df5f0989722a83074dea638ce07264fad9fe48c8; created 2020-01-02, modified 2020-04-10."
  - id: "src-003"
    title: "Forgotten Waters product page"
    url: "https://www.plaidhatgames.com/board-games/forgotten-waters/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 62,640 bytes; SHA-256 309c142e00e1d88d7a6cc7dcfbb48790a1ae3521e36d5f000d23cc14ad9d08e5; SKU PH2900; support links and current-product context."
  - id: "src-004"
    title: "Forgotten Waters App FAQ"
    url: "https://www.plaidhatgames.com/news/2020/03/20/forgotten-waters-app-faq/"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 33,061 bytes; SHA-256 942595aee3ff06be02b4b01b6a17c6c52526f3bea664b66fc604d005db807c2e; dated 2020-03-20; release-era functional boundary, not a build receipt."
  - id: "src-005"
    title: "Current Forgotten Waters web app"
    url: "https://fwcrossroads.plaidhatgames.com/"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 7,753 bytes; SHA-256 31849e100bb1bc1e387e10530bf68e37d6e4fc488aae469db3b2c63df0169eea; UI reports Version 1.12.0. Current main JS is 25,763,159 bytes, SHA-256 4ba98cb8c67d8bd0bafd482ed3963a6b6a9052c0172a5243486040c2634ed884; service worker is 1,181 bytes, SHA-256 ee4177fb2d378652555cf7b369bd3d0be7c53dde46f8f7fca460edc544082e1b. Current-only code inspection found 13 locales, 69 locale/scenario rows, six English scenario roots (five base plus later Kraken's Eye), English scenario + generic2 + generic roots, and 7,941 literal audio paths (7,850 MP3 + 91 WAV). Current code-literal structure is not release proof."
  - id: "src-006"
    title: "Forgotten Waters Entry Book — printer friendly"
    url: "https://media.plaidhatgames.com/filer_public/61/98/6198ddb4-e191-4f57-b501-adb36728b46f/forgotten_waters_entry_book-printer_friendly_1.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/pdf; 9,695,283 bytes; 148 letter pages; SHA-256 7711e3b336cf2047c0e76111027d1206250398c376f00b306554916d9cede7e2; v.0.1.0; created 2024-02-14; copyright 2024; personal-use print permission."
  - id: "src-007"
    title: "Forgotten Waters Now Available"
    url: "https://www.plaidhatgames.com/news/2020/06/05/forgotten-waters-now-available/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 29,999 bytes; SHA-256 e819c901b7a6382f08ccb53e32d5f4f81a4774aeed4bf3b18237de922361f1ef; dated 2020-06-05; records April limited release and June retail release, first-print organizer promo, and later remote/solo variants."
  - id: "src-008"
    title: "Forgotten Waters Remote Assistant Launched"
    url: "https://www.plaidhatgames.com/news/2020/05/13/forgotten-waters-remote-assistant-launched/"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 31,727 bytes; SHA-256 634576a63ee3e39716b783e86fe32537b92b15fb6d425e3f3509c6132d98d5f5; remote supplement is additive and still requires the main app."
  - id: "src-009"
    title: "Forgotten Waters Entry Book store page"
    url: "https://www.plaidhatgames.com/product/forgotten-waters-entry-book/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 38,772 bytes; SHA-256 fe191992c06d45264da7e3d48fd41dc104a70ac4f05a87549b06d2345bf6188f; SKU PH2903; optional app substitute containing the first five scenarios."
  - id: "src-010"
    title: "Forgotten Waters DLC 1: Kraken's Eye"
    url: "https://www.plaidhatgames.com/product/forgotten-waters-dlc-1-krakens-eye/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 40,448 bytes; SHA-256 fddaaf1c23d6ddd31df4d841a1c9b78efea613b02518d1f82205ce896be0a6b8; SKU FWDLC01; later English-only scenario plus 100+ events, excluded."
  - id: "src-011"
    title: "Dicebreaker — Forgotten Waters review"
    url: "https://www.dicebreaker.com/games/forgotten-waters/review/forgotten-waters-board-game-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 241,792 bytes; SHA-256 3bcc4db17e51a3df33b27234d25829f96e1e90cb35a7bbf579f6311620d4ebdd; Charlie Theel, 2021-03-22."
  - id: "src-012"
    title: "Bumbling Through Dungeons — Forgotten Waters Review"
    url: "https://bumblingthroughdungeons.com/forgotten-waters-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 111,272 bytes; SHA-256 17364997dcc94b4ef552cfcd2a99b1dbab4fb8720caefef26e04a46c101eeaf4; Mark Wilson; published 2021-01-12, modified 2021-06-14."
  - id: "src-013"
    title: "Meet the Captains of Forgotten Waters!"
    url: "https://www.plaidhatgames.com/news/2020/06/10/meet-captains-forgotten-waters/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 28,743 bytes; SHA-256 754d8dd68cee421bf451cebf9689d276477e1d9b007e8abe8cde973345e04eae; dated 2020-06-10; establishes five narrated app scenarios at release."
  - id: "src-014"
    title: "Forgotten Waters App Latest Updates — retired official URL"
    url: "https://www.plaidhatgames.com/forgotten-waters-app-latest-updates/"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Current URL returns 404; retained as the original publisher locator, not as evidence of historical absence."
  - id: "src-015"
    title: "Wayback CDX captures for the retired app update log"
    url: "https://web.archive.org/cdx/search/cdx?url=www.plaidhatgames.com%2Fforgotten-waters-app-latest-updates%2F&output=json&filter=statuscode%3A200"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "HTTP 200 JSON; captures at 2020-08-03, 2020-10-20, and 2021-01-18."
  - id: "src-016"
    title: "Wayback replay — Forgotten Waters App Updates"
    url: "https://web.archive.org/web/20201020203128id_/https://www.plaidhatgames.com/forgotten-waters-app-latest-updates/"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Successful 2020-10-20 replay; text/html; 12,233 bytes; SHA-256 b84d5202ace004b9f2ee484ddc6cf78a79c948dfac86e9d51083600101b4ad12; dated version history through v1.6.1."
  - id: "src-017"
    title: "Forgotten Waters replacement Ship Log"
    url: "https://media.plaidhatgames.com/filer_public/2a/47/2a4788ef-b238-416e-be42-bcf2843fd3d0/shiplog.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/pdf; 326,362 bytes; 2 pages at 648x468 pt; SHA-256 0b1e7fc0d70c63689077a52bb1bbdcbcf46b09204d0a04121f8ad7004bce6244; created 2019-11-04, modified 2020-03-23."
  - id: "src-018"
    title: "Forgotten Waters Entry Book — current support revision"
    url: "https://media.plaidhatgames.com/filer_public/66/59/6659eeec-2b88-4e4a-a54d-ce9c77567782/forgotten_waters_entry_book.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/pdf; 34,031,011 bytes; 154 letter pages; SHA-256 7ce652179b4a58dc2d6addd665e647f887781c203a6c7dc1b2714bd10a66fe32; created 2025-09-19; later revision excluded from target authority."
confidence: medium
status: needs_followup
---

# Remediation report

## Edition and app boundary
- Claim: Physical release evidence closes SKU PH2900, 2020 rules, and the publisher's April/June release framing, but not lot/printing markers or every component face.
  Source: src-001, src-003, src-007
  Evidence: Product page supplies PH2900; release post identifies limited April and retail June availability; rulebook says actual components may vary.
  Confidence: high
- Claim: The app is governing content, not an adaptation: it replaces the sand timer/event books and supplies scenario entries, entry history variation, voiceover, ambience, and content updates.
  Source: src-004
  Evidence: App FAQ, “WHY AN APP?” and “WHAT ALL DOES THE APP DO?”
  Confidence: high

## Printed component arithmetic
- Claim: The rulebook inventory totals 384 fixed items excluding the two pad containers, or 386 rulebook-listed physical units when each pad is counted as one container; internal sheet multiplicities remain UNKNOWN.
  Source: src-001
  Evidence: Line-by-line sum excluding pad containers is 204 cards + 7 dice + 9 books/boards + 164 dials/tokens/markers/standees/stands = 384; adding the two listed pad containers gives 386 without claiming their internal sheet counts.
  Confidence: medium

  Preserved printed rows (left/right order normalized, names unchanged):
  `1 Rulebook; 7 12-Sided Dice; 1 Location Book; 1 Map Board; 1 Boatswain Board; 1 First Mate Board; 1 Cooper Board; 1 Gunner Board; 1 Quartermaster Board; 1 Lookout Board; 1 Pad of Ship Scribe Sheets; 1 Pad of Player Sheets; 89 Treasure Cards; 10 Objective Cards; 96 Story Cards; 7 Player Treasure Chest Cards; 5 Location Dials; 2 Special Rules Cards; 8 Cannon Tokens; 25 Re-roll Tokens; 20 Misfortune Tokens; 9 Lock Tokens; 15 Constellation Event Tokens; 20 Special Location Tokens; 30 Navigation Tokens; 5 Threat Tokens; 1 Hull Marker; 1 Supplies Marker; 1 Crew Marker; 1 Discontent Marker; 7 Player Infamy Markers; 7 Pirate Standees; 1 Ship Standee; 8 Standee Stands.`

- Claim: Card rows are 89 treasure + 10 objective + 96 story + 7 treasure-chest + 2 special-rules = 204 cards.
  Source: src-001
  Evidence: Rulebook p.2 Components.
  Confidence: high
- Claim: The first-print promotional treasure-chest organizer is a known bundled accessory outside the p.2 inventory and governing-content ledger; it is not added to the 386 p.2 unit total.
  Source: src-001, src-007
  Evidence: The 2020-06-05 release post says the organizer was available with all first-print-run copies, while the rulebook p.2 inventory omits it. Accessory identity, internal tray/piece multiplicity, and residual lot applicability remain UNKNOWN.
  Confidence: high
- Claim: A complete governing face/side/surface identity denominator is UNKNOWN.
  Source: src-001, src-002, src-005
  Evidence: Inventory counts objects but not unique card faces, location-book pages/surfaces, token sides, pad multiplicities, scenario entries/branches/audio, or release app data semantics.
  Confidence: high

## Printed + digital governing-class ledger
- Claim: The ledger below distinguishes authoritative framework/count from unresolved identity, text, mapping, or build semantics.
  Source: src-001, src-002, src-003, src-004, src-005, src-006, src-013, src-016, src-017
  Evidence: Cross-check of printed inventory, replacement sheets/logs, product description, release-era FAQ/scenario/update evidence, later Entry Book comparison, and current app receipt.
  Confidence: high

  - Rulebook: 1, 8 pages; general procedure KNOWN; edition-specific errata state UNKNOWN.
  - Location book: 1, product says over 30 locations; page/action/warning/end-round surface identities and text UNKNOWN.
  - Map/ship/location surfaces: 1 map, 1 ship standee, 30 navigation tokens, 20 special-location tokens; side identity and scenario mapping UNKNOWN.
  - Role boards/tracks: six named boards; framework KNOWN; every printed face/track value and revision identity UNKNOWN.
  - Cards: 89 treasure, 10 objective, 96 story, 7 treasure-chest, 2 special-rules; class counts KNOWN; distinct fronts/backs, text, set allocation, and first-print collation UNKNOWN.
  - Player sheets: replacement PDF has 42 pages and exposes constellations/events/backstories/endings; retail-pad multiplicity, release collation, and face identity UNKNOWN.
  - Ship-scribe sheets: one retail pad; save/log framework KNOWN; official replacement PDF exposes two faces/surfaces; retail sheet multiplicity, collation, and revision identity UNKNOWN.
  - Dice: seven d12; standard numerical framework presumed from rules, but physical face inspection UNKNOWN.
  - Tokens/markers/dials/standees/stands: printed object counts KNOWN; face/side/surface identity, artwork, and scenario mapping UNKNOWN.
  - App scenarios: release count KNOWN = 5. Release-era update evidence names Beyond the Ocean's Edge, Witch's Heart, Nature's Splendor, and Dead or Alive; the 2024 Entry Book later names those four plus Spoils of the Damned and structurally aligns with the five-count, but cannot backdate exact title/data/prose equality. Immutable complete release title/build/data/entry/check/branch/audio manifests remain UNKNOWN.
  - App entries/choices/branches: framework and history-sensitive variation KNOWN; release entry IDs, alternative counts, branch graph, and text UNKNOWN.
  - App check data/check instructions: framework KNOWN from release rules and app behavior; release check IDs, counts, mappings, instruction text, and build bytes UNKNOWN.
  - App timing/audio/ambience: function KNOWN; release timer semantics, audio file denominator, actor/file mapping, and checksums UNKNOWN.
  - Save/resume: physical log state and app View Setup procedure KNOWN; release scenario-specific resume instructions/mappings UNKNOWN.
  - Scenario sheets/special setup: app-governed setup exists; any separate release scenario-sheet class and complete setup identity denominator UNKNOWN.

- Claim: Player-sheet authority exposes 42 pages of constellations, events, backstories, and endings, but retail-pad sheet count and first-print collation are UNKNOWN.
  Source: src-002
  Evidence: 42-page official replacement PDF versus nonspecific “1 Pad” inventory.
  Confidence: high
- Claim: Digital governing classes include scenario setup, timer, keyed entries/choices/branches, app-local check data/instructions, entry-history variation, ambience, voiceover, and resume instructions; the scenario count is five, while release quantities for other classes, IDs, mappings, text, and build semantics are UNKNOWN.
  Source: src-001, src-004, src-013
  Evidence: Rulebook pp.2,4-6 and 2020 App FAQ establish framework and app-local resolution; src-013 separately closes only the scenario count.
  Confidence: high
- Claim: Save/resume state is recorded on physical ship logs; the release-era FAQ says the app does not track scenario begin/completion or save state.
  Source: src-001, src-004
  Evidence: Rulebook p.5 Saving Your Game and FAQ “WHY AN APP?”
  Confidence: high

## Release archive and later comparison
- Claim: The recovered 2020-10-20 update-log replay records v1.2 through v1.6.1 and four release-era scenario titles, replacing the old terminal timeout/404 account without supplying immutable release bundle bytes.
  Source: src-014, src-015, src-016
  Evidence: CDX returns captures on 2020-08-03, 2020-10-20, and 2021-01-18; the successful replay supplies dated structural summaries for Witch's Heart, Beyond the Ocean's Edge, Nature's Splendor, and Dead or Alive.
  Confidence: high
- Claim: Current v1.12.0 structure is current-only: six English scenario roots, 69 locale/scenario rows across 13 locales, English scenario + generic2 + generic roots, and 7,941 literal audio paths (7,850 MP3 + 91 WAV).
  Source: src-005
  Evidence: Counts independently reproduced from the exact current main-JS receipt; code literals and later Kraken's Eye cannot be converted into release facts.
  Confidence: high
- Claim: The live product-support Entry Book is a distinct 2025 revision excluded from target authority, not the 2024 v0.1.0 148-page printer-friendly object used only as later comparison.
  Source: src-006, src-018
  Evidence: 2024 object SHA-256 7711e3b3... / 148 pages versus 2025 object SHA-256 7ce65217... / 154 pages, created 2025-09-19.
  Confidence: high

## Coverage disposition
No percentage is lawful: the digital denominator and physical identity/surface denominator remain open. All target records therefore remain `needs_followup`.

## Required help

Document sources only. Physical-copy acquisition and box/SKU/lot inspection are **out of scope** for this corpus and must not be requested; where no lawful document source closes a denominator, it stays permanently `UNKNOWN` and the records stay `needs_followup` as an accepted terminal state.

1. A lawful immutable PH2900 English first-print face/side/identity document source, including organizer particulars, that can be audited without replacement-quality mirroring.
2. Immutable release app bundle/data/check/audio manifest and comparison to current v1.12.0.
3. Authoritative complete FAQ/errata/support inventory beyond the recovered update log.
4. Licensed narrative/audio denominator that can be audited without mirroring replacement-quality content.
