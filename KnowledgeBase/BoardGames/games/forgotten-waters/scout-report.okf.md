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
mechanics: [cooperative-game, dice-rolling, push-your-luck, variable-player-powers, worker-placement]
followups:
  - source_id: "src-005"
    url: "https://fwcrossroads.plaidhatgames.com/"
    failure: other
    fallback: "Current v1.12.0 build and 2020 functional FAQ bound the app, but no immutable release-era build/manifest was retrieved."
    retry_needs: wayback_snapshot
    notes: "Wayback CDX timed out; do not treat timeout as absence. Need release-era app build, scenario/data manifest, and byte comparison."
  - source_id: null
    url: "https://www.plaidhatgames.com/forgotten-waters-app-latest-updates/"
    failure: not_found
    fallback: "Current app UI/version and publisher product page."
    retry_needs: wayback_snapshot
    notes: "Product-page App Update Log target returned HTTP 404; no negative inference about historical logs."
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
    notes: "HTTP 200; text/html; 7,753 bytes; SHA-256 31849e100bb1bc1e387e10530bf68e37d6e4fc488aae469db3b2c63df0169eea; UI reports Version 1.12.0. Current main JS is 25,763,159 bytes, SHA-256 4ba98cb8c67d8bd0bafd482ed3963a6b6a9052c0172a5243486040c2634ed884; service worker is 1,181 bytes, SHA-256 ee4177fb2d378652555cf7b369bd3d0be7c53dde46f8f7fca460edc544082e1b. Current bytes are not release proof."
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
    notes: "HTTP 200; text/html; 111,272 bytes; SHA-256 17364997dcc94b4ef552cfcd2a99b1dbab4fb8720caefef26e04a46c101eeaf4; Mark Wilson."
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
- Claim: The rulebook inventory totals 384 fixed countable items plus two pads of unknown sheet multiplicity.
  Source: src-001
  Evidence: Line-by-line sum of all numeric rows other than “1 Pad” contents: 204 cards + 7 dice + 9 books/boards + 164 dials/tokens/markers/standees/stands = 384. Pad sheet counts remain unknown.
  Confidence: medium

  Preserved printed rows (left/right order normalized, names unchanged):
  `1 Rulebook; 7 12-Sided Dice; 1 Location Book; 1 Map Board; 1 Boatswain Board; 1 First Mate Board; 1 Cooper Board; 1 Gunner Board; 1 Quartermaster Board; 1 Lookout Board; 1 Pad of Ship Scribe Sheets; 1 Pad of Player Sheets; 89 Treasure Cards; 10 Objective Cards; 96 Story Cards; 7 Player Treasure Chest Cards; 5 Location Dials; 2 Special Rules Cards; 8 Cannon Tokens; 25 Re-roll Tokens; 20 Misfortune Tokens; 9 Lock Tokens; 15 Constellation Event Tokens; 20 Special Location Tokens; 30 Navigation Tokens; 5 Threat Tokens; 1 Hull Marker; 1 Supplies Marker; 1 Crew Marker; 1 Discontent Marker; 7 Player Infamy Markers; 7 Pirate Standees; 1 Ship Standee; 8 Standee Stands.`

- Claim: Card rows are 89 treasure + 10 objective + 96 story + 7 treasure-chest + 2 special-rules = 204 cards.
  Source: src-001
  Evidence: Rulebook p.2 Components.
  Confidence: high
- Claim: A complete governing face/side/surface identity denominator is UNKNOWN.
  Source: src-001, src-002, src-005
  Evidence: Inventory counts objects but not unique card faces, location-book pages/surfaces, token sides, pad multiplicities, scenario entries/branches/audio, or release app data semantics.
  Confidence: high

## Printed + digital governing-class ledger
- Claim: The ledger below distinguishes authoritative framework/count from unresolved identity, text, mapping, or build semantics.
  Source: src-001, src-002, src-003, src-004, src-005
  Evidence: Cross-check of printed inventory, replacement sheets, product description, release-era FAQ, and current app receipt.
  Confidence: high

  - Rulebook: 1, 8 pages; general procedure KNOWN; edition-specific errata state UNKNOWN.
  - Location book: 1, product says over 30 locations; page/action/warning/end-round surface identities and text UNKNOWN.
  - Map/ship/location surfaces: 1 map, 1 ship standee, 30 navigation tokens, 20 special-location tokens; side identity and scenario mapping UNKNOWN.
  - Role boards/tracks: six named boards; framework KNOWN; every printed face/track value and revision identity UNKNOWN.
  - Cards: 89 treasure, 10 objective, 96 story, 7 treasure-chest, 2 special-rules; class counts KNOWN; distinct fronts/backs, text, set allocation, and first-print collation UNKNOWN.
  - Player sheets: replacement PDF has 42 pages and exposes constellations/events/backstories/endings; retail-pad multiplicity, release collation, and face identity UNKNOWN.
  - Ship-scribe sheets: one pad; save/log framework KNOWN; pad multiplicity and sheet revisions UNKNOWN.
  - Dice: seven d12; standard numerical framework presumed from rules, but physical face inspection UNKNOWN.
  - Tokens/markers/dials/standees/stands: printed object counts KNOWN; face/side/surface identity, artwork, and scenario mapping UNKNOWN.
  - App scenarios: release rules recommend one named tutorial then allow others; release-era total/title/build manifest UNKNOWN. Current v1.12.0 and 2024 book cannot backfill that denominator.
  - App entries/choices/branches: framework and history-sensitive variation KNOWN; release entry IDs, alternative counts, branch graph, and text UNKNOWN.
  - App timing/audio/ambience: function KNOWN; release timer semantics, audio file denominator, actor/file mapping, and checksums UNKNOWN.
  - Save/resume: physical log state and app View Setup procedure KNOWN; release scenario-specific resume instructions/mappings UNKNOWN.
  - Scenario sheets/special setup: app-governed setup exists; any separate release scenario-sheet class and complete setup identity denominator UNKNOWN.

- Claim: Player-sheet authority exposes 42 pages of constellations, events, backstories, and endings, but retail-pad sheet count and first-print collation are UNKNOWN.
  Source: src-002
  Evidence: 42-page official replacement PDF versus nonspecific “1 Pad” inventory.
  Confidence: high
- Claim: Digital governing classes include scenario setup, timer, keyed entries/choices/branches, entry-history variation, ambience, voiceover, and resume instructions; release quantities, IDs, mappings, and build semantics are UNKNOWN.
  Source: src-001, src-004
  Evidence: Rulebook pp.2,4-5 and 2020 App FAQ.
  Confidence: high
- Claim: Save/resume state is recorded on physical ship logs; the release-era FAQ says the app does not track scenario begin/completion or save state.
  Source: src-001, src-004
  Evidence: Rulebook p.5 Saving Your Game and FAQ “WHY AN APP?”
  Confidence: high

## Coverage disposition
No percentage is lawful: the digital denominator and physical identity/surface denominator remain open. All target records therefore remain `needs_followup`.

## Required help
1. Confirmed English 2020 first-print physical inspection with SKU/lot/printing markers and nonreplacement face/side/identity evidence.
2. Immutable release-era app build/scenario/data manifest and comparison to current v1.12.0 and Entry Book v0.1.0.
3. Authoritative FAQ/errata/support inventory.
4. Licensed narrative/audio denominator that can be audited without mirroring replacement-quality content.
