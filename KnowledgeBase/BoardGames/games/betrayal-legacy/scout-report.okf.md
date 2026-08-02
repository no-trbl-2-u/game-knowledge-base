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
  - id: "src-007"
    title: "Official 2018 Wizards Betrayal Legacy rulebook"
    url: "https://media.wizards.com/2018/downloads/rules/BLY-Rulebook-web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/pdf; 5,358,358 bytes; 23 pages; SHA-256 ab30782170e8e8d6c794486385422517aad54e0b2ae2781126bfae30bc11ad5e; 2018 Wizards footer; code 300C4595000001 EN."
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
    notes: "An official component scan/readout inventory is required; do not spoil campaign content publicly. Physical-copy acquisition is out of scope for this corpus; absent an official readout this denominator stays permanently UNKNOWN."
confidence: high
status: needs_followup
last_verified: "2026-07-31"
summary: "Draft-gap ledger: four acquired listed source groups out of a provisional ten-row checklist; governing coverage percentage and exact-first-print concealed-content applicability remain unknown; 22/22 printed starting-inventory lines are transcribed."
---

# Scout Report — Betrayal Legacy

## Verdict

**BLOCKED — draft gap PR.** The official 2018 rulebook supports the release-era general rules and starting inventory, while the F3147 bundle supports a strong general/haunt rules summary and four genuine source-linked visual excerpts. Neither source set proves 100% of a closed governing campaign corpus for a particular English 2018 first printing.

## Governing-rules coverage ledger

This is a **provisional ten-row source-group checklist**, not a closed governing-rules denominator. Legacy parts 1 and 2 may be one ordered authority split physically; the sealed box and envelope are containers until inventoried; and rule-bearing Item/Event/Omen cards, tiles, reference cards, and Monster/Traitor/component text may belong in a future denominator because component text can override the rulebook and direct state or victory. A closed denominator requires a spoiler-controlled authority inventory and a T/Judge decision about component-local text.

| # | Governing authority | Acquired/inspected | Authority/applicability | Counted |
|---:|---|---|---|---:|
| 1 | General rulebook | Yes, official 2018 PDF and F3147 PDF pp.1-13 | Release-era general rules independently supported | 1 |
| 2 | Secrets of Survival | Yes, PDF pp.14-45 | Official; hero-side haunt authority | 1 |
| 3 | Traitor's Tome | Yes, PDF pp.46-67 | Official; traitor-side haunt authority | 1 |
| 4 | Bleak Journal | Yes, PDF pp.68-84 | Official; campaign ending/transitions | 1 |
| 5 | Legacy deck part 1 | No complete readout | Official component; orders campaign/rules changes | 0 |
| 6 | Legacy deck part 2 | No complete readout | Official component; orders campaign/rules changes | 0 |
| 7 | Purgatory deck | No complete readout | Official component; introduces cards into play | 0 |
| 8 | Folium Infernum | No complete readout of 13 concealed rule stickers | Official component; changes the rulebook | 0 |
| 9 | Sealed box | Contents/instructions not enumerated | Official concealed campaign component | 0 |
| 10 | Sealed envelope | Contents/instructions not enumerated | Official concealed campaign component | 0 |

Acquired: **four listed source groups out of this provisional ten-row checklist**. The closed governing denominator and any coverage percentage are **unknown** pending a spoiler-controlled authority inventory. The 100% gate fails regardless because at least six listed concealed groups are absent, and exact-first-print applicability of the F3147 haunt books, Bleak Journal, and concealed materials is unverified.

- Claim: The Legacy decks are governing authorities rather than optional flavor because the rulebook directs players to read them in order and perform their instructions until PAUSE or STOP.
  Source: src-003
  Evidence: PDF physical rule pages 3 and 5, "guided by the Legacy deck" and "read it aloud, and do what they say."
  Confidence: high

- Claim: Folium Infernum stickers can introduce rules that take effect immediately and persist.
  Source: src-003
  Evidence: PDF physical rule page 4, "place it on the matching labeled space in this rulebook. That rule is in effect immediately and for all future games."
  Confidence: high

## Factual/component coverage ledger

Declared transcription convention: **22 printed starting-inventory lines**, preserving the paired haunt books and paired Legacy decks exactly as the official inventory prints them, counting the sealed box and sealed envelope separately, and keeping `12 tiles` and `20 tile planks` separate. The 122-token total and its printed breakdown remain one inventory line. This measures source-level inventory transcription, not hidden text readouts, distinct semantic identities, or proof about every physical printing.

| Category group | Categories recorded / denominator | Quantity evidence state |
|---|---:|---|
| Concealed containers | 2/2 | one sealed box; one sealed envelope |
| Books and campaign media | 6/6 | rulebook; paired haunt-books line; Bleak Journal; sticker sheet; Folium Infernum; numbered track |
| Figures and family tracking | 4/4 | five figures; five bases; five Family cards; twenty clips |
| Randomizers and initial cards | 5/5 | eight dice; seven Item; eleven Event; one Traitor; one Monster card |
| Ordered campaign decks | 2/2 | paired Legacy-decks line; one Purgatory deck |
| Map/content stock | 3/3 | twelve tiles; twenty tile planks; 122-token line and printed breakdown |

Starting-inventory transcription: **22 / 22 printed lines**, independently recorded by both the official 2018 rulebook and F3147 rulebook. Applicability to every component and rule-bearing text in a particular English first printing is **unverified/unknown**, not zero. No composite factual score is reported because hidden card/tile identities and readout denominators remain unknown.

- Claim: Hasbro's current page provides a finite component manifest, while the PDF supplies a more detailed starting inventory.
  Source: src-002, src-003, src-007
  Evidence: Hasbro lists the books, decks, cards, figures, 71 tiles, and 122 tokens; both rulebooks' physical page 2 records the same starting inventory and token breakdown.
  Confidence: high

## Spoiler and leakage boundary

The corpus summarizes general procedures and the authority structure. It does not reproduce haunt solutions, Bleak Journal entries, ordered Legacy/Purgatory cards, concealed stickers, sealed contents, or card-by-card scenario text. F3147 facts are never asserted as proven first-print 2018 facts.

## Visual disposition

The four synthetic SomberSoft diagrams and their synthetic contact sheet were deleted. They were replaced with four materially reduced, noncontiguous, source-linked page-overview derivatives from the official PDF, plus a deterministic 2×2 contact sheet. The packet records creator, rights holder, all-rights-reserved status, editorial-excerpt rationale, page locators, source URL, and hashes.

## Exact help requested from T

1. Provide lawful access or an official mapping for a particular English first printing's haunt books, Bleak Journal, and concealed materials; the official 2018 web rulebook already covers release-era general rules and starting inventory.
2. Authorize a spoiler-controlled physical audit of both Legacy decks, the Purgatory deck, all 13 Folium Infernum doors, and the sealed box/envelope contents.
3. T/Judge must decide whether every rule-bearing component-local card, tile, and reference card must be atomized or may be represented by a closed source-level ledger.
