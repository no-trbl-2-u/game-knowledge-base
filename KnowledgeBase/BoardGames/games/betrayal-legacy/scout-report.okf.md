---
okf_version: 0.2
type: scout_report
game:
  title: "Betrayal Legacy"
  slug: "betrayal-legacy"
  bgg_id: 240196
  publisher: "Avalon Hill"
  year: 2018
  weight: 2.92
  edition: "English 2018 standalone campaign; compared against Hasbro F3147 support files (2021 footer)"
scope: "blocked existing-game remediation and coverage ledger"
mechanics: ["campaign-game", "cooperative-game", "dice-rolling", "hidden-information", "legacy-game", "modular-board", "semi-cooperative-game", "tile-placement", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "BoardGameGeek item 240196 metadata"
    url: "https://api.geekdo.com/api/geekitems?objectid=240196&objecttype=thing"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; 22,212 bytes; SHA-256 6a04adef1a5c313490f216a54509775872be8f973d3dd64283c0d4b19e2462d7."
  - id: "src-002"
    title: "Hasbro F3147 product and instructions page"
    url: "https://instructions.hasbro.com/en-us/instruction/avalon-hill-betrayal-legacy-role-playing-haunted-narrative-board-game"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; 1,376,834 bytes; SHA-256 a10d44315499200a6be82486510e7c5d88f469c72f58c10daf39575bcf14ac4a."
  - id: "src-003"
    title: "Hasbro F3147 English rules bundle"
    url: "https://instructions.hasbro.com/api/download/F3147_en-us_avalon-hill-betrayal-legacy-role-playing-haunted-narrative-board-game.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; 11,278,257 bytes; 84 pages; SHA-256 5c558dacdc495c13ff5ae7d36db4a2dc8ced0e02e39b156d0075c9de4b4a60c9."
  - id: "src-005"
    title: "Shut Up & Sit Down review"
    url: "https://www.shutupandsitdown.com/review-betrayal-legacy/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Original browser request blocked by Cloudflare Error 1005; Jina copy HTTP 200, 12,498 bytes, SHA-256 bc4d2e47f8497773bda02b82defbaa5801ace73746342f08591af05e60af7957."
followups:
  - source_id: "src-003"
    url: "https://instructions.hasbro.com/api/download/F3147_en-us_avalon-hill-betrayal-legacy-role-playing-haunted-narrative-board-game.pdf"
    failure: other
    fallback: "The four complete book sections were inspected and summarized, but their F3147/2021 printing relationship to BGG's 2018 3-5-player record is not proven."
    retry_needs: manual_review
    notes: "Obtain and compare a first-print 2018 English rulebook/component manifest or an official Avalon Hill statement that F3147 is rules-identical."
  - source_id: "src-002"
    url: "https://instructions.hasbro.com/en-us/instruction/avalon-hill-betrayal-legacy-role-playing-haunted-narrative-board-game"
    failure: other
    fallback: "Hasbro exposes titles/counts but not complete ordered readouts for the Legacy decks, Purgatory deck, Folium Infernum rules stickers, sealed box, or sealed envelope."
    retry_needs: manual_review
    notes: "A lawful physical-copy audit or official component scans/readout inventory is required; do not spoil campaign content publicly."
confidence: high
status: needs_followup
last_verified: "2026-07-31"
summary: "Draft-gap ledger: 4/10 governing authority classes acquired (40%); exact-2018 component coverage remains 0/23 despite a complete provisional F3147 category inventory."
---

# Scout Report — Betrayal Legacy

## Verdict

**BLOCKED — draft gap PR.** The available official bundle supports a strong general/haunt rules summary and four genuine source-linked visual excerpts, but it cannot prove 100% of the governing campaign corpus for the exact English 2018 printing.

## Governing-rules coverage ledger

Declared denominator: ten authority classes that can direct campaign state or victory. Ordinary Item/Event/Omen text, family boards, monster/traitor reference cards, tiles, and tokens are excluded from this rules-authority denominator as component-local content; they remain in the factual/component scope. Haunt-specific secret text is included through the two haunt books because it directly determines setup, objectives, and victory.

| # | Governing authority | Acquired/inspected | Authority/applicability | Counted |
|---:|---|---|---|---:|
| 1 | General rulebook | Yes, PDF pp.1-13 | Official Hasbro F3147; 2018 equivalence unproven | 1 |
| 2 | Secrets of Survival | Yes, PDF pp.14-45 | Official; hero-side haunt authority | 1 |
| 3 | Traitor's Tome | Yes, PDF pp.46-67 | Official; traitor-side haunt authority | 1 |
| 4 | Bleak Journal | Yes, PDF pp.68-84 | Official; campaign ending/transitions | 1 |
| 5 | Legacy deck part 1 | No complete readout | Official component; orders campaign/rules changes | 0 |
| 6 | Legacy deck part 2 | No complete readout | Official component; orders campaign/rules changes | 0 |
| 7 | Purgatory deck | No complete readout | Official component; introduces cards into play | 0 |
| 8 | Folium Infernum | No complete readout of 13 concealed rule stickers | Official component; changes the rulebook | 0 |
| 9 | Sealed box | Contents/instructions not enumerated | Official concealed campaign component | 0 |
| 10 | Sealed envelope | Contents/instructions not enumerated | Official concealed campaign component | 0 |

Acquired coverage: **4 / 10 = 40%**. Required: **10 / 10 = 100%**. The four acquired classes are not enough for readiness, and the edition discrepancy is an additional fail-closed blocker.

- Claim: The Legacy decks are governing authorities rather than optional flavor because the rulebook directs players to read them in order and perform their instructions until PAUSE or STOP.
  Source: src-003
  Evidence: PDF physical rule pages 3 and 5, "guided by the Legacy deck" and "read it aloud, and do what they say."
  Confidence: high

- Claim: Folium Infernum stickers can introduce rules that take effect immediately and persist.
  Source: src-003
  Evidence: PDF physical rule page 4, "place it on the matching labeled space in this rulebook. That rule is in effect immediately and for all future games."
  Confidence: high

## Factual/component coverage ledger

Declared denominator: the **23 named component categories** in the F3147 rulebook's starting-game inventory, treating the sealed box and sealed envelope as separate categories and treating the 122-token breakdown as one category because the official total is the stable manufactured denominator. This measures category-and-quantity transcription, not hidden text readouts or distinct semantic identities.

| Category group | Categories recorded / denominator | Quantity evidence state |
|---|---:|---|
| Concealed containers | 2/2 | one sealed box; one sealed envelope |
| Books and campaign media | 7/7 | rulebook; two haunt books; Bleak Journal; sticker sheet; Folium Infernum; numbered track |
| Figures and family tracking | 4/4 | five figures; five bases; five Family cards; twenty clips |
| Randomizers and initial cards | 5/5 | eight dice; seven Item; eleven Event; one Traitor; one Monster card |
| Ordered campaign decks | 3/3 | two Legacy decks; one Purgatory deck |
| Map/content stock | 2/2 | twenty tile planks; 122 tokens; the PDF separately identifies twelve starting tiles while Hasbro's page advertises 71 total tiles, so tiles are reconciled under the tile-plank category rather than double-counted |

Provisional F3147 category coverage: **23 / 23 = 100%**. Strict exact-2018 promotable component coverage: **0 / 23 = 0%**, because first-print equivalence is unproven. Required non-deckbuilder threshold: **at least 60%**. No composite score is reported: hidden card/tile identities and their text lack authoritative denominators.

- Claim: Hasbro's current page provides a finite component manifest, while the PDF supplies a more detailed starting inventory.
  Source: src-002, src-003
  Evidence: Hasbro lists the books, decks, cards, figures, 71 tiles, and 122 tokens; PDF physical rule page 2 expands the starting-game categories and token breakdown.
  Confidence: high

## Spoiler and leakage boundary

The corpus summarizes general procedures and the authority structure. It does not reproduce haunt solutions, Bleak Journal entries, ordered Legacy/Purgatory cards, concealed stickers, sealed contents, or card-by-card scenario text. F3147 facts are never asserted as proven first-print 2018 facts.

## Visual disposition

The four synthetic SomberSoft diagrams and their synthetic contact sheet were deleted. They were replaced with four materially reduced, noncontiguous, source-linked page-overview derivatives from the official PDF, plus a deterministic 2×2 contact sheet. The packet records creator, rights holder, all-rights-reserved status, editorial-excerpt rationale, page locators, source URL, and hashes.

## Exact help requested from T

1. Provide access to a lawful English first-print 2018 physical copy or an official Avalon Hill statement mapping it to F3147.
2. Authorize a spoiler-controlled physical audit of both Legacy decks, the Purgatory deck, all 13 Folium Infernum doors, and the sealed box/envelope contents.
3. Confirm whether hidden component-local card/tile text must be atomized or may remain excluded from the governing-authority denominator once campaign-control materials are audited.
