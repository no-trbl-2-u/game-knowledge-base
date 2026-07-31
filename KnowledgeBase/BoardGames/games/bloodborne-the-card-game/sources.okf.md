---
okf_version: 0.2
type: sources
game:
  title: "Bloodborne: The Card Game"
  slug: "bloodborne-the-card-game"
  bgg_id: 195856
  publisher: "CMON"
  year: 2016
  weight: 2.04
  edition: "English 2016 standalone base game"
scope: "English 2016 standalone base game; The Hunter's Nightmare expansion and promotional or translated material excluded"
mechanics: ["hand-management", "push-your-luck", "semi-cooperative-game", "set-collection", "simultaneous-action-selection"]
sources:
  - id: "src-001"
    title: "CMON — Bloodborne: The Card Game"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Direct page request returned HTTP 403; original-URL text proxy returned HTTP 200. Four declared official image assets returned HTTP 200 directly."
  - id: "src-002"
    title: "Bloodborne: The Card Game Rulebook — verified third-party copy"
    url: "https://cdn.1j1ju.com/medias/66/14/bb-bloodborne-the-card-game-rulebook.pdf"
    kind: rulebook_pdf
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/pdf; 1,947,755 bytes; 16 pages; SHA-256 64f9096fcd45bded2576fc3aaa275e460c24e125b0eddc42f60977b86cfdcf88."
  - id: "src-003"
    title: "BoardGameGeek live item and rating data — BGG ID 195856"
    url: "https://api.geekdo.com/api/dynamicinfo?objecttype=thing&objectid=195856"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/json; 1,304 bytes; SHA-256 f3f6f88051fb0f7318ecf543c92ffadb147923a4f2ee45af51cd5319f1a7358d."
  - id: "src-004"
    title: "Ars Technica — Bloodborne: The Card Game is actually pretty great"
    url: "https://arstechnica.com/gaming/2016/09/bloodborne-the-card-game-is-actually-pretty-great/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 188,398 bytes; SHA-256 6dc3c0cca001484f52efed5cc9328660acceba17215fc36e97e3ca401e70a0ab."
  - id: "src-005"
    title: "RPGFan — Bloodborne: The Card Game Review"
    url: "https://www.rpgfan.com/feature/bloodborne-the-card-game-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 215,728 bytes; SHA-256 a5c6d8e646cb890c03b1382c524fce82cf242ce5c081d8229e9879da6a246ad7."
  - id: "src-006"
    title: "Meeple Mountain — Bloodborne the Card Game Review"
    url: "https://www.meeplemountain.com/reviews/bloodborne-the-card-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; review distinguishes the standalone game from The Hunter's Nightmare expansion."
  - id: "src-007"
    title: "CMON historical Bloodborne product-line page (archived copy)"
    url: "https://web.archive.org/web/20190813030312id_/https://cmon.com/product/bloodborne-the-card-game"
    kind: publisher_page
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; 4,349-byte archived HTML. It lists the standalone game under Core Sets and The Hunter's Nightmare under Expansions."
confidence: high
status: needs_followup
---

# Sources and retrieval ledger

## Retrieval receipts

| ID | Role | Retrieval result |
|---|---|---|
| src-001 | current publisher identity, manifest, visuals | Direct HTML: HTTP 403. `r.jina.ai/https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game`: HTTP 200, 3,259 bytes, text/plain. Exact official image assets: HTTP 200; see visual packet. |
| src-002 | rules inspection copy | HTTP 200; final URL unchanged; application/pdf; 1,947,755 bytes; 16 pages; SHA-256 `64f9096fcd45bded2576fc3aaa275e460c24e125b0eddc42f60977b86cfdcf88`. |
| src-003 | community telemetry | HTTP 200; final URL unchanged; application/json; 1,304 bytes; SHA-256 `f3f6f88051fb0f7318ecf543c92ffadb147923a4f2ee45af51cd5319f1a7358d`. |
| src-004 | independent review | HTTP 200; final URL unchanged; text/html; 188,398 bytes; SHA-256 `6dc3c0cca001484f52efed5cc9328660acceba17215fc36e97e3ca401e70a0ab`. |
| src-005 | independent review | HTTP 200; final URL unchanged; text/html; 215,728 bytes; SHA-256 `a5c6d8e646cb890c03b1382c524fce82cf242ce5c081d8229e9879da6a246ad7`. |
| src-006 | independent review and expansion boundary | HTTP 200; final URL unchanged; text/html; 222,203 bytes; SHA-256 `71a5f17f0ff61f5625f32e2874d20a1b25f7169d49d3ad63973548216be6ff2a`. |
| src-007 | historical product-family boundary | HTTP 200; final URL unchanged; text/html; 4,349 bytes. |

All receipts were observed at `2026-07-31T08:08:10Z` or earlier in the same research pass.

## Governing-source ledger

| Denominator item or class | Acquired state | Applicability and authority | Inclusion decision |
|---|---|---|---|
| English 2016 standalone rulebook | Complete 16-page copy acquired from src-002, but no CMON-hosted final file acquired | Applies to the target base game; content bears CMON credits, but the mirror rewrote PDF metadata | Included for provisional rules extraction; blocks verification as official authority is unproven |
| Current CMON product/support page | Live product text and direct official images acquired from src-001 | Official current publisher source | Included for identity, physical manifest, and visuals; its Rules & More area exposes no document link |
| Official FAQ/errata/card clarification index | Not verified | Would govern corrections if it exists | Denominator remains open; no closed official support index was retrieved |
| Five Hunter Starter card identities/text | Class and physical quantity represented in rulebook; complete text library not acquired | Rule-bearing Action cards | Included as a mandatory governed class; identity/text coverage remains incomplete |
| Thirty-two Hunter Upgrade cards | Class and physical quantity represented; complete identities/text not acquired | Rule-bearing Action cards that alter timing, attacks, damage, or state | Included as a mandatory governed class; identity/text coverage remains incomplete |
| Eighteen Chalice Dungeon Monster cards | Class and quantity represented; card-local abilities not fully acquired | Rule-bearing encounters | Included as a mandatory governed class; text coverage remains incomplete |
| Seven Chalice Dungeon Boss cards | Class and quantity represented; card-local abilities not fully acquired | Rule-bearing persistent encounters | Included as a mandatory governed class; text coverage remains incomplete |
| Five Final Boss cards | Class and quantity represented; complete global abilities not acquired | Rule-bearing whole-game modifiers | Included as a mandatory governed class; text coverage remains incomplete |
| The Hunter's Nightmare expansion, Runes, Death Tokens | Official historical product line and review identify these as expansion content | Not applicable to the standalone base game | Explicitly excluded; no expansion rule was merged into base rules |

The governing denominator is **open**, so no honest rules percentage is asserted. Acquired groups are known, but the total number of required official support documents and card-local authority records is not.

## Factual/component arithmetic

- Claim: All seven physical product-manifest categories and their quantities are transcribed: 87 cards, 5 Hunter Boards, 5 Hunter Health Dials, 75 Blood Echo plastic tokens, 16 cardboard tokens, 3 custom Monster dice, and 1 rulebook; category coverage is `7 / 7 = 100%`.
  Source: src-001
  Evidence: "CMON's live product page lists exactly those seven categories and quantities."
  Confidence: high

- Claim: The 87-card physical total is decomposed at source level as `25 + 32 + 5 + 18 + 7 = 87`, so physical-card class allocation coverage is `87 / 87 = 100%`.
  Source: src-002
  Evidence: "Rulebook p. 4 lists 25 Hunter Starter, 32 Hunter Upgrade, 5 Final Boss, 18 Chalice Dungeon Monster, and 7 Chalice Dungeon Boss cards."
  Confidence: high

- Claim: Distinct card-identity and card-text coverage is unknown and is not used as a percentage.
  Source: src-002
  Evidence: "The component page supplies physical quantities and class examples, not a complete distinct identity/text inventory for every rule-bearing card."
  Confidence: high

Because the broader factual denominator includes unresolved rule-bearing card identities/text and official support, this draft does not claim the non-deckbuilder 60% promotion threshold despite complete source-level physical inventory transcription.
