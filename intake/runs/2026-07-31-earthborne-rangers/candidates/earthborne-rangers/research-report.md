# Earthborne Rangers — blocked intake research report

## Exact product and edition boundary

- Claim: This packet scopes the **current corrected English digital core plus Lure of the Valley**, represented by the official 48-page 2024 `EBR001_Rulebook_web.pdf` and the current Living Valley campaign guide.
  Source: src-001, src-002, src-012
  Evidence: The rulebook footer says “©2024 Earthborne Games LLC,” and the official campaign-guide landing page calls the guide a living document with integrated errata.
  Confidence: high

- Claim: First-print material is comparison evidence only; the official box code is `LFCACD30`, and the current 2024 rulebook already incorporates the listed Rest, Travel, Refresh, Injury, Manifestation, Conduit, and reward-swap corrections.
  Source: src-001, src-014
  Evidence: The rulebook update identifies the affected first printing by box code `LFCACD30`; comparison against the current PDF finds the corrected procedures in the current text.
  Confidence: high

This boundary excludes Legacy of the Ancestors, Stewards of the Valley, Moments on the Path, Moments in the Valley, Spire in Bloom, and Shadow of the Storm except where a live mixed glossary/FAQ row also governs core/Lure play. Historical corrections already integrated into the current rulebook or living guide are inventoried but not counted twice.

## Item-level acquisition and classification

`source-inventory.json` is the machine ledger. A scripted crawl enumerated each public category, fetched every listed item with a browser user agent, and retained final URL, retrieval time, HTTP status, media type, byte length, SHA-256, title, classification, and a concise basis. It does not mirror full copyrighted source text.

- Claim: All 96 immediate Lure of the Valley guide items were acquired and classified `core_lure`.
  Source: src-002
  Evidence: The official category reports 96 items; the machine ledger contains 96 unique immediate child rows, including nested-category landing pages, each with a successful receipt.
  Confidence: high

- Claim: The live glossary has 22 alphabetical categories and 148 unique leaf URLs; all 148 leaves are classified.
  Source: src-011
  Evidence: Direct leaf enumeration yields `A14 B2 C15 D9 E8 F6 G4 H2 I4 K1 L4 M9 N1 O2 P19 R12 S19 T10 U3 V1 W2 Y1`, totaling 148.
  Confidence: high

The audit-supplied navigation sequence `A14 B3 C16 D10 E9 F7 G5 H3 I5 K2 L5 M10 N2 O3 P20 R13 S20 T11 U4 V2 W3 Y2` is also preserved in the machine summary. That sequence totals 169, not 148; the packet therefore distinguishes navigation/category-inclusive counts from the 148 directly fetched unique leaf URLs rather than silently forcing contradictory arithmetic.

Glossary leaf classification:

| Classification | Rows | Target treatment |
|---|---:|---|
| core/Lure | 126 | included |
| mixed core/Lure plus later product | 5 | included because the row also governs target play |
| Legacy of the Ancestors | 6 | excluded |
| Moments products | 3 | excluded |
| Stewards of the Valley | 3 | excluded |
| other later Valley expansions | 5 | excluded |
| **Total** | **148** | **131 included / 17 excluded** |

The 22 non-core-only or mixed leaves are named row by row in `source-inventory.json`; no glossary leaf remains unclassified. The official dated changelog (`src-017`) distinguishes the original glossary/core concepts from the 2025–2026 expansion-rule additions; each leaf's own body supplies the second classification signal.

- Claim: The FAQ source is completely acquired and all 33 Q&As are classified across 11 section headings.
  Source: src-003
  Evidence: The page has the Delightful Rule plus ten Q&A headings; the ten Q&A sections contain 33 question/answer pairs.
  Confidence: high

FAQ classification is 31 target-applicable, one target-applicable mixed row (the general response rule also mentions Moments), and one excluded Moments-specific row about where moment cards are while resolving. Thus 32 Q&As apply to the target. Acquisition is complete; classification is a separate semantic transformation and is also complete.

- Claim: All 16 card-update pages were retrieved; 14 are core/Lure and two are excluded Legacy cards.
  Source: src-015
  Evidence: The two excluded titles explicitly say `LoA Mission Set Card 10 of 42` and `LoA Mission Set Card 17 of 42`; the other 14 item titles identify core/Lure sets.
  Confidence: high

- Claim: The official printable card-errata PDF is two pages, 1,328,433 bytes, and SHA-256 `395142fb44dc5ff6daffe3541effea96bedb30d5cbd61ce7d94ac5f00b9f7036`.
  Source: src-013
  Evidence: The independently retrieved `Card_Errata_eng_web.pdf` receipt records the exact bytes and hash and represents the same 16 corrected card identities as the item pages.
  Confidence: high

The PDF is acquisition evidence, not 16 additional governing rows: the two LoA cards remain excluded and the 14 target card identities are counted once.

- Claim: All 35 Lure guide update pages were acquired but are historical duplicates for this edition boundary.
  Source: src-002, src-016
  Evidence: The update category exposes 35 pages, while the campaign-guide landing page states that the living guide has integrated errata.
  Confidence: high

The first-print rulebook update and all 35 Lure update pages remain classified comparison rows. They do not enlarge the current corrected denominator.

## Deduplicated governing denominator

The bounded, current, publicly retrievable target ledger is:

| Operative row class | Acquired / applicable rows | Counting treatment |
|---|---:|---|
| Current 2024 rulebook | 1 | included once as the complete 48-page document |
| Current Lure living-guide items | 96 | included |
| Glossary leaves | 131 | 126 core/Lure + 5 mixed; 17 later-only excluded |
| FAQ Q&As | 32 | 31 target + 1 mixed; 1 Moments-only excluded |
| Core/Lure card updates | 14 | included by corrected card identity |
| **Bounded public governing rows** | **274** | **all acquired and classified** |
| Historical Lure update pages | 35 | acquired, integrated duplicate, excluded |
| First-print rulebook update | 1 | acquired comparison for `LFCACD30`, integrated duplicate, excluded |
| Printable corrected-card forms | 16 | duplicate form of update identities; 14 target + 2 LoA excluded |

- Claim: The bounded public ledger closes at 274 deduplicated target-applicable rows, but total governing-rules coverage remains `UNKNOWN` and unscored.
  Source: src-001, src-002, src-003, src-011, src-013, src-014, src-015, src-016, src-017
  Evidence: Every public item row above is classified, but rulebook page 8 gives contradictory card rules precedence and no authoritative complete distinct-card identity/rules-text denominator was acquired.
  Confidence: high

Accordingly, the manifest records `rules.recorded: 274`, `rules.known_total: null`, and `rules.percent: null`. It does **not** publish a misleading `274/274` or percentage. The packet remains blocked.

## Physical-card arithmetic and factual coverage

- Claim: The core rulebook exposes 438 physical cards inside Ranger and Path card sets, plus 102 separately listed gameplay cards, for 540 physical gameplay cards under this counting convention.
  Source: src-001
  Evidence: Rulebook page 6 lists `278 + 160 = 438` Ranger/Path cards and `37 + 24 + 4 + 17 + 4 + 4 + 12 = 102` separately listed gameplay cards; `438 + 102 = 540`.
  Confidence: high

- Claim: The 540 physical-card total does not establish an authoritative distinct identity or rules-text denominator.
  Source: src-001
  Evidence: Rulebook pages 32–33 require two copies of selected personality, background, specialty, and outside-interest cards.
  Confidence: high

Distinct factual-record coverage remains `UNKNOWN` and unscored. Canonical coverage remains 0% because this blocked packet contains no `canonical/` staging tree.

## Independent reception and visuals

- Claim: Space-Biff praises the game as a major contextual advance over earlier adventure card games.
  Source: src-004
  Evidence: The review calls it “a gigantic leap forward for a particular niche of card game” and emphasizes emergent card ecosystems and setting.
  Confidence: high

- Claim: Gideon's Gaming reports both strong system ideas and substantial friction in presentation, card quality, and subsystem interaction.
  Source: src-005
  Evidence: The review says the tabletop-RPG, prewritten-story, and dynamic-storytelling subsystems “tend to step on each other’s toes,” while praising prologue teaching.
  Confidence: high

Four source-linked table-state receipts remain: card ecosystem (`src-006`), Valley map (`src-007`), ranger card area (`src-008`), and populated play state (`src-009`). No files are copied into canonical storage. Rights remain with the source/photographer; these are locators for private analysis, not license claims.

## Rating evidence and residual request

No rating, rank, weight, or numerical complexity claim is made. The attempted unauthenticated BGG XML API request returned HTTP 401.

The only residual request to T is an authoritative complete current corrected English core-plus-Lure distinct-card identity and rules-text inventory, if one exists outside the public resources surface. No product-scope ruling is requested because this repair fixes the edition boundary exactly. This PR must remain `OPEN + DRAFT + blocked`; Bathcat must not approve, promote, mark ready, or merge it. A wholly fresh Mennonite context must audit the repaired immutable head.
