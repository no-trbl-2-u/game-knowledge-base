---
okf_version: 0.2
type: game_index
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
summary: "Complete standard-base-game rules map and 34-category official component inventory for the English 2008 release."
---

# Battlestar Galactica: The Board Game

Crew roles cooperate to keep Galactica alive while hidden Cylons sabotage crises and may reveal themselves. This remediation covers the English 2008 base game under the corrected online rulebook; it does not import expansion modules or optional variants.

## Browse this record

- [Canonical sources and denominator definitions](sources.okf.md)
- Rules
  - [Overview](rules/overview.okf.md)
  - [Setup and complete components](rules/setup.okf.md)
  - [Turn structure](rules/turn-structure.okf.md)
  - [Actions](rules/actions.okf.md)
  - [Scoring and endgame](rules/scoring-endgame.okf.md)
  - [Edge cases, FAQ, and errata](rules/edge-cases-faq.okf.md)
- [Scout report and coverage ledger](scout-report.okf.md)
- [Visual reference packet](visuals/packet.okf.md)

## Coverage at a glance

| Measure | Denominator | Acquired and recorded | Coverage |
|---|---|---:|---:|
| Governing standard-base-game documents | Corrected rulebook + latest FAQ/errata + three consolidated official reference sheets | 5/5 | 100% |
| Official component categories | 34 rulebook component-list leaf categories; four parent rollups are checksums, not rows | 34/34 | 100% |

- Claim: The six rule-category records semantically represent all five governing documents in the declared standard-base-game corpus.
  Source: src-003, src-004, src-006, src-007, src-008
  Evidence: The acquired corpus is one 32-page corrected rulebook, one 10-page FAQ, and three 4-page consolidated references; each source ID appears in at least one rule record.
  Confidence: high

- Claim: The setup record inventories every official component-list leaf category and records exact quantity plus gameplay purpose for all 34 categories.
  Source: src-003
  Evidence: Rulebook p. 2 lists the stand-alone items and disclosed subtypes; pp. 2-4 explain component roles. The parent totals of 52 tokens, 110 large cards, 128 small cards, and 32 ships reconcile the leaf quantities.
  Confidence: high

## Preserved selection provenance

- Claim: This game ranked #3 in the 2026-07-26 semi-cooperative RPG/adventure intake after the fit screen; its selection snapshot reported average 7.72918 and overall BGG rank 120 for BGG ID 37111 and classified it as a semi-cooperative game.
  Source: src-001, src-005
  Evidence: The preserved CSV row for the exact title and BGG ID contains `avg_rating=7.72918`, `overall_rank=120`, and `Semi-Cooperative Game` in its mechanics field.
  Confidence: medium

## Scope exclusions and limit

Pegasus, Exodus, Daybreak, all expansion modules/components, the separate Optional Rules variant sheet, corrected-card image artifacts, promotional material, translations, and replacement parts are outside both denominators. Consolidated references and the FAQ contain expansion material, but this record extracts only their base-game branches and generally applicable rulings. The publisher product page challenged the latest automated recheck; all five direct official documents remained retrievable and hash-verifiable, so this is a follow-up limit rather than a coverage gap.
