---
okf_version: 0.2
type: scout_report
game:
  title: "Battlestar Galactica: The Board Game"
  slug: "battlestar-galactica-the-board-game"
  bgg_id: 37111
  publisher: "Fantasy Flight Games"
  year: 2008
  players:
    min: 3
    max: 6
  complexity: expert
  weight: 3.25
  edition: "English 2008 base game; corrected online rulebook"
scope: "standard base game rules and components; expansions and optional variants excluded"
mechanics: ["cooperative-game", "hand-management", "hidden-information", "negotiation", "semi-cooperative-game", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "BoardGameGeek — Battlestar Galactica: The Board Game"
    url: "https://boardgamegeek.com/boardgame/37111"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-26"
    notes: "Identity, player count, community weight, and semi-cooperative selection evidence."
  - id: "src-002"
    title: "Fantasy Flight Games — Battlestar Galactica product and support page"
    url: "https://www.fantasyflightgames.com/en/products/battlestar-galactica/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-26"
    notes: "Official product identity and download inventory; live automated recheck challenged by Cloudflare on 2026-07-31."
  - id: "src-003"
    title: "Battlestar Galactica: The Board Game rulebook"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/0c/0c/0c0cc32c-6394-448c-b5c0-9307f85dfc74/bsg_rulebook_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Corrected 32-page English base-game rulebook; SHA-256 e7c72996f122202546c61c3d36c99faca36c6a94bbcb8540b0a05669f300d214."
  - id: "src-004"
    title: "Battlestar Galactica FAQ and Errata, version 2.1"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/bd/e5/bde5f362-34dd-4f8b-a611-5d8d21765c83/bsg_faq_2-1_hi-res.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Ten pages; updated 2015-03-05; SHA-256 78c531eef0d64ab849b609f1848a1c7622e7d24796613a9ae20d9432f515ea85."
  - id: "src-005"
    title: "BGG ranking snapshot mirror"
    url: "https://raw.githubusercontent.com/mweuro/bgg/main/PowerBI/bgg.csv"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-26"
    notes: "Selection snapshot: BGG ID 37111, average 7.72918, rank 120, weight 3.2504."
  - id: "src-006"
    title: "Game Setup reference sheet"
    url: "https://images-cdn.fantasyflightgames.com/ffg_content/Battlestar_Galactica/Reference_Sheet_Game_Setup_Reference%20Sheet_eng.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Four-page consolidated official reference; SHA-256 ea7c05a0c4f13923dc407ca990179fe234bc09628bedd700f9aef18d5d7adb41."
  - id: "src-007"
    title: "Resolving Player Turns and Special Events reference sheet"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/47/f6/47f601ed-849a-4cbf-84ef-ad1a3e4420f2/reference_sheet_player_turns_eng.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Four-page consolidated official reference; SHA-256 344eb416bcc37452f6586d9805243c9d9c89f1c7f129939d8e97a5e03fb3348f."
  - id: "src-008"
    title: "Lines of Succession and Rules for Combat reference sheet"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/3e/d6/3ed67a6d-8067-41b4-870c-8c14bb72440a/reference_sheet_succession_and_combat_reference_sheet_eng.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Four-page consolidated official reference; SHA-256 f64546490b8bb196733173c19cff653866467a2556404e7bfd4e80468ce2a4f5."
confidence: high
status: verified
last_verified: "2026-07-31"
summary: "Verification and coverage ledger for the complete standard-base-game rules and component remediation."
---

# Scout Report — Battlestar Galactica: The Board Game

## Edition and bounded objective

This report remediates the **English 2008 base game using the corrected online rulebook**. It records the standard rules corpus and the official component inventory without importing expansion mechanics or optional variants.

## Reproducible coverage ledger

### Governing rules/documents — 5/5 = 100%

**Denominator definition:** five official documents govern or consolidate standard base-game play in the publisher support inventory:

1. corrected 32-page base-game rulebook (`src-003`);
2. latest 10-page FAQ and Errata v2.1 (`src-004`);
3. 4-page Game Setup reference (`src-006`);
4. 4-page Resolving Player Turns and Special Events reference (`src-007`);
5. 4-page Lines of Succession and Rules for Combat reference (`src-008`).

**Numerator definition:** a document counts as acquired and recorded only when its direct official PDF was retrieved, identity/page count/hash were checked, and its applicable standard-base-game content is represented by at least one of the six rule-category records. All five qualify: **5 acquired and recorded / 5 governing documents × 100 = 100%**.

- Claim: The six browseable rule records collectively cover overview, setup/components, turn structure, actions, endgame, and FAQ/errata using all five denominator documents.
  Source: src-003, src-004, src-006, src-007, src-008
  Evidence: Each official source ID is registered in `sources.okf.md` and appears in one or more rule records; all five direct PDFs were successfully downloaded and text-extracted on 2026-07-31.
  Confidence: high

### Components — 34/34 = 100%

**Denominator definition:** 34 official **leaf categories** printed in the corrected rulebook's component list: three standalone listed categories, eleven disclosed token subtypes, six large-card subtypes, seven small-card subtypes, one die, four plastic-ship subtypes, and two plastic accessory categories. The printed parent rollups—52 cardboard tokens, 110 large cards, 128 small cards, and 32 plastic ships—are arithmetic checksums of their children, not additional category rows.

**Numerator definition:** a leaf category counts as recorded only when `rules/setup.okf.md` gives its official quantity and gameplay purpose. The setup table does so for every leaf: **34 recorded categories / 34 official leaf categories × 100 = 100%**. The rollup checks are 52 = 4+10+4+2+12+2+4+4+8+1+1; 110 = 70+16+17+5+1+1; 128 = 21+21+21+21+21+22+1; and 32 = 8+4+16+4.

- Claim: The official component denominator and all category quantities are finite and reproducible from rulebook page 2, while gameplay purposes are supported by pages 2-4 and the cited rules sections.
  Source: src-003
  Evidence: Rulebook p. 2 prints every category and quantity; pp. 2-4 provide the component breakdown. The four parent totals reconcile exactly to the leaf rows above.
  Confidence: high

## Preserved semi-cooperative selection evidence

- Claim: This title was #3 in the 2026-07-26 rating-led semi-cooperative RPG/adventure intake after the fit screen; the preserved snapshot showed average 7.72918 and overall rank 120.
  Source: src-001, src-005
  Evidence: The snapshot's row for BGG ID 37111 and exact game title includes `Semi-Cooperative Game`, `avg_rating=7.72918`, and `overall_rank=120`, with source-row update timestamp 2025-12-04.
  Confidence: medium

## Verified critical rules

- Claim: A human turn normally resolves skills, movement, action, crisis, Cylon ship activation, and jump preparation in order; revealed Cylons use their separate turn structure.
  Source: src-003, src-007
  Evidence: Corrected rulebook pp. 9-11 and 20; turn reference pp. 2-3.
  Confidence: high

- Claim: Human victory requires at least eight accumulated distance and one further jump while all resources remain above zero; Cylon victory comes from resource exhaustion at turn end, completed centurion invasion, or six simultaneous Galactica damage tokens.
  Source: src-003
  Evidence: Corrected rulebook pp. 14, 18, 24-25.
  Confidence: high

- Claim: FAQ v2.1 supersedes early-printing errors including presidency order, Executive Order's once-per-turn limit, and the Admiral card's incorrect nuke values.
  Source: src-004
  Evidence: FAQ v2.1 p. 1, "Errata."
  Confidence: high

## Exclusions and unresolved limits

Excluded from both denominators: Pegasus, Exodus, and Daybreak rules/modules/components; the separate Optional Rules variant sheet; corrected-card image artifacts already captured by corrected rules/FAQ; older superseded FAQ versions; promotional material; translations; replacement parts; reviews and ratings as factual-coverage inputs. The consolidated references and FAQ contain expansion sections, but only their standard-base-game branches and generally applicable rulings are represented.

One retrieval limit remains: Fantasy Flight Games' product page challenged the 2026-07-31 automated browser/curl recheck with Cloudflare. The page was retrieved for the prior dossier on 2026-07-26, its support listing remains search-indexed, and every one of the five denominator PDFs was directly reacquired and hash-verified. A Mennonite audit should manually reopen the publisher page to check for later additions; no known standard-base-game document or component category is unresolved.

## Audit boundary

This record is ready for independent Mennonite factual audit, not self-approved. Mennonite owns source reopening, arithmetic review, and any merge decision.
