---
okf_version: 0.2
type: scout_report
game:
  title: "Dead of Winter: A Crossroads Game"
  slug: "dead-of-winter-a-crossroads-game"
  bgg_id: 150376
  publisher: "Plaid Hat Games"
  year: 2014
  weight: 3.01
  edition: "English 2014 standalone/base game; exact printing mapping unresolved"
scope: "existing-corpus remediation and honest authority-gap ledger"
mechanics: ["action-points", "area-movement", "cooperative-game", "dice-rolling", "hand-management", "hidden-information", "semi-cooperative-game", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "Dead of Winter rulebook (PH1000)"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/c0/81/c081efff-c39d-40f1-8261-55570a7002dc/ph1000-rulebook-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Official CDN copy; 20 pages; 2020 PDF metadata."
  - id: "src-002"
    title: "Dead of Winter FAQ version 1.1"
    url: "https://media.plaidhatgames.com/old_images/games/dead-of-winter/dow-faq.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Official four-page FAQ."
  - id: "src-004"
    title: "Plaid Hat Games — Can't find a game?"
    url: "https://www.plaidhatgames.com/cant-find-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Current support ownership pointer."
  - id: "src-005"
    title: "Dead of Winter Review — Board Game Reviews by Josh"
    url: "https://www.boardgamereviewsbyjosh.com/2014/09/dead-of-winter-review.html"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Independent review."
followups:
  - source_id: "src-004"
    url: "https://www.fantasyflightgames.com/en/products/dead-of-winter/"
    failure: blocked
    fallback: "Official Plaid Hat transfer page plus directly retrieved FFG CDN rulebook."
    retry_needs: manual_review
    notes: "Cloudflare challenge prevented a bounded current support-file inventory on 2026-07-31."
  - source_id: null
    url: "https://www.plaidhatgames.com/board-games/dead-of-winter/"
    failure: not_found
    fallback: "Legacy /games/dead-of-winter redirect and archived FAQ announcement."
    retry_needs: wayback_snapshot
    notes: "Modern-style guessed product path returned Plaid Hat's 404 page."
  - source_id: "src-001"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/c0/81/c081efff-c39d-40f1-8261-55570a7002dc/ph1000-rulebook-compressed.pdf"
    failure: other
    fallback: "The document was acquired and used provisionally, but its 2020 PDF metadata is not conclusive proof of first-printing identity."
    retry_needs: alternate_source
    notes: "Need a 2014 box/printing identifier or immutable archived publisher witness mapping this file to the target printing."
  - source_id: null
    url: "official face-level component/card corpus for PH1000"
    failure: not_found
    fallback: "Rulebook class quantities and framework rules only; no card text inferred."
    retry_needs: manual_review
    notes: "Need authoritative coverage of every rule-bearing card/board/reference face or a provably complete immutable source-level ledger."
confidence: high
status: needs_followup
last_verified: "2026-07-31"
summary: "Blocked remediation: substantial rules/components/reception acquired, but governing, printing, and visual denominators remain open."
---

# Gap report — do not merge

## Governing-source ledger

| Source/component class | Acquired | Target applicability | Authority/disposition |
|---|---|---|---|
| PH1000 rulebook | yes | unresolved exact 2014 printing mapping | Official framework authority, inspected in full. |
| FAQ v1.1 | yes | base game; published 2015 | Official clarification/errata authority, inspected in full. |
| Current FFG support inventory / later FAQ or errata | no | unknown | Cloudflare blocked; absence not proved. |
| 10 dual-sided main objectives | quantity/framework only | base class confirmed | Setup, victory, timing, and hardcore overrides are governing; face corpus missing. |
| 24 ordinary + 10 betrayal + 10 exiled objectives | quantity/framework only | base classes confirmed | Individual victory conditions are governing; face corpus missing. |
| 30 survivor cards | quantity plus a few FAQ cases | base class confirmed | Unique abilities govern play; full face corpus missing. |
| 25 starting + 120 location item cards | quantity/framework only | base classes confirmed | Abilities and symbols govern actions/objectives/crises; full face corpus missing. |
| 20 crisis cards | quantity/framework only | base class confirmed | Prevention symbols and pass/fail effects govern each round; face corpus missing. |
| 80 Crossroads cards | quantity/framework plus three FAQ cases | base class confirmed | Private triggers, choices, votes, and persistent effects govern play; face corpus missing. |
| 5 player references, colony board, 6 location surfaces | diagrams in rulebook only | base classes confirmed | Rule-bearing surfaces not independently captured/verified. |
| Tokens, dice, standees | quantities and framework semantics acquired | base classes confirmed | Physical semantics covered at category level. |

**Governing completeness: UNKNOWN.** Two official documents and ten provisional component/source groups are identified, but a closed denominator cannot be asserted until the current support inventory, exact printing mapping, and all card/surface authorities are bounded. No percentage is reported.

## Factual/component arithmetic

- Physical inventory-line transcription: **32/32 = 100%**, using each printed component bullet as one category; mechanical quantity sum **627**.
- Card/sheet class allocation: **341/341 physical cards/sheets represented by category and quantity**, counting 5 references and 6 location cards; this is not face-text coverage.
- Distinct identity/text coverage: **UNKNOWN**; no authoritative unique-face denominator or complete readout was acquired.
- Governing source coverage: **UNKNOWN**; denominator open.
- Composite factual coverage: **not calculated** because material denominators are open. The game is treated as a non-deckbuilder: cards are drawn/searched/played from fixed scenario decks, but players do not conventionally construct or improve personal draw decks.

## Representative acquired rules

- Claim: Standard rounds resolve player turns before colony upkeep, with action dice based on survivors and a mix of die-spending and free actions.
  Source: src-001
  Evidence: Rulebook pp. 8–12.
  Confidence: high

- Claim: Crossroads triggers are read privately by the right-hand player and only revealed/resolved when their condition occurs.
  Source: src-001
  Evidence: Rulebook p. 12.
  Confidence: high

- Claim: Endgame can produce multiple winners, mixed winners/losers, or universal loss according to secret objectives.
  Source: src-001
  Evidence: Rulebook p. 14.
  Confidence: high

## Reception disposition

- Claim: A contemporaneous independent review praises Crossroads-driven narrative and private-goal tension while identifying abrupt exposure deaths and finite event novelty as group-fit pressures.
  Source: src-005
  Evidence: Review sections on Crossroads, exposure, and final assessment.
  Confidence: high

## Visual disposition

The four pre-existing WebPs and contact sheet were synthetic SomberSoft analytical diagrams, not source-linked visual evidence, and were replaced rather than retained. The replacement packet contains four noncontiguous, lossy 458×600 page-overview derivatives from official rulebook pp. 2, 4, 6, and 12 plus a deterministic 2×2 contact sheet. The manifest records the exact PDF locator/hash, page locators, creator/rights language, editorial-excerpt basis, derivative hashes, and analytical purpose. Visual inspection found four distinct, uncorrupted panels covering components/objectives, crisis/Crossroads anatomy, setup, and colony/crisis flow. These reduced excerpts do not close the missing official product-photography or complete card-face authority gaps.

## Exact help requested from T

1. Provide or authorize manual access to the current Fantasy Flight Games Dead of Winter support page/file inventory.
2. Provide a first-printing 2014 rulebook/box identifier or archived official witness mapping the acquired 2020-created PH1000 PDF to the target edition.
3. Provide a lawful, authoritative complete base-game card/board/reference face corpus, or a physical copy for independent inventory without publishing replacement-quality card text.
4. Provide rights-cleared official product/component photography or authorize narrowly reduced rulebook excerpts for a four-image analytical packet.

Disposition: **OPEN DRAFT / needs_followup / no readiness claim / do not merge.**
