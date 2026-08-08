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
    notes: "Direct page request returned HTTP 403. Dated dynamic proxy receipt returned HTTP 200, 4,979 bytes, SHA-256 fc29588d8a3474e2d817ef081bc84ba9d14b57b17cdbd38c288f644d1ba6e43c, and displayed Rules & More → Rulebook → 79.01 MB."
  - id: "src-002"
    title: "CMON — Bloodborne: The Card Game Rulebook"
    url: "https://cmon-files.s3.amazonaws.com/pdf/assets_item/resource/43/Bloodborne_Rulebook__2_.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/pdf; 92,484,273 bytes; 16 pages; SHA-256 e5010bc06faf0a4fc05b70228836401825a123c4dad0459233edcd318b664b38; S3 Last-Modified 2016-07-30 and ETag dd4ffdaca078e915ebcd10f0898ac11e."
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
    notes: "Dated observation: current text proxy HTTP 200; 12,115 bytes; SHA-256 6ad513136c240bf91fbe952e4a5fd22acc4011aaf8cbfe722734cc3bbf01dd4b. Live review bytes may drift."
  - id: "src-005"
    title: "RPGFan — Bloodborne: The Card Game Review"
    url: "https://www.rpgfan.com/feature/bloodborne-the-card-game-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Dated observation: current text proxy HTTP 200; 7,258 bytes; SHA-256 4f61500647ffd4f5df40dcfc575b992644ae8b52915e62007c176f8cae9879fd. Live review bytes may drift."
  - id: "src-006"
    title: "Meeple Mountain — Bloodborne the Card Game Review"
    url: "https://www.meeplemountain.com/reviews/bloodborne-the-card-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Dated observation: current text proxy HTTP 200; 10,382 bytes; SHA-256 08e7e6bd376c482a3e72056a60eb1836f187683a2eeeb3322292bdb28960f4f0. Review distinguishes the base game from The Hunter's Nightmare; live bytes may drift."
  - id: "src-007"
    title: "CMON historical Bloodborne product-line page (archived copy)"
    url: "https://web.archive.org/web/20190813030312id_/https://cmon.com/product/bloodborne-the-card-game"
    kind: publisher_page
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; 4,349-byte archived HTML. It lists the standalone game under Core Sets and The Hunter's Nightmare under Expansions."
  - id: "src-008"
    title: "Bloodborne: The Card Game Rulebook — 1jour-1jeu mirror"
    url: "https://cdn.1j1ju.com/medias/66/14/bb-bloodborne-the-card-game-rulebook.pdf"
    kind: rulebook_pdf
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Subordinate inspection mirror only; HTTP 200; 1,947,755 bytes; 16 pages; SHA-256 64f9096fcd45bded2576fc3aaa275e460c24e125b0eddc42f60977b86cfdcf88; rewritten 2019 metadata. Not primary rule authority."
confidence: high
status: needs_followup
---

# Sources and retrieval ledger

## Retrieval receipts

| ID | Role | Retrieval result |
|---|---|---|
| src-001 | current publisher identity, manifest, dynamic support surface | Direct HTML: HTTP 403. Dated dynamic proxy `r.jina.ai/https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game`: HTTP 200; 4,979 bytes; text/plain; SHA-256 `fc29588d8a3474e2d817ef081bc84ba9d14b57b17cdbd38c288f644d1ba6e43c`; displayed `Rules & More` → `Rulebook` → `79.01 MB`. This changing page receipt is not an exhaustive support index. |
| src-002 | official rules authority | HTTP 200; final URL unchanged; application/pdf; 92,484,273 bytes; 16 pages; SHA-256 `e5010bc06faf0a4fc05b70228836401825a123c4dad0459233edcd318b664b38`; S3 Last-Modified `Sat, 30 Jul 2016 00:05:00 GMT`; ETag `dd4ffdaca078e915ebcd10f0898ac11e`; PDF created `2016-07-19`, modified `2016-07-30`, creator Adobe InDesign CC 2015. |
| src-003 | community telemetry | HTTP 200; final URL unchanged; application/json; 1,304 bytes; SHA-256 `f3f6f88051fb0f7318ecf543c92ffadb147923a4f2ee45af51cd5319f1a7358d`. |
| src-004 | independent review | Dated text-proxy observation: HTTP 200; 12,115 bytes; SHA-256 `6ad513136c240bf91fbe952e4a5fd22acc4011aaf8cbfe722734cc3bbf01dd4b`; not an immutable live-content expectation. |
| src-005 | independent review | Dated text-proxy observation: HTTP 200; 7,258 bytes; SHA-256 `4f61500647ffd4f5df40dcfc575b992644ae8b52915e62007c176f8cae9879fd`; not an immutable live-content expectation. |
| src-006 | independent review and expansion boundary | Dated text-proxy observation: HTTP 200; 10,382 bytes; SHA-256 `08e7e6bd376c482a3e72056a60eb1836f187683a2eeeb3322292bdb28960f4f0`; not an immutable live-content expectation. |
| src-007 | historical product-family boundary | HTTP 200; final URL unchanged; text/html; 4,349 bytes. |
| src-008 | subordinate mirror / inspection derivative | HTTP 200; final URL unchanged; application/pdf; 1,947,755 bytes; 16 pages; SHA-256 `64f9096fcd45bded2576fc3aaa275e460c24e125b0eddc42f60977b86cfdcf88`; not primary authority. |

The repaired rulebook, dynamic page, review, and current visual receipts were observed no later than `2026-07-31T08:39:05Z`; older rows retain their original dated observations.

## Governing-source ledger

| Denominator item or class | Acquired state | Applicability and authority | Inclusion decision |
|---|---|---|---|
| English 2016 standalone rulebook | CLOSED / acquired from official CMON S3 as src-002 | Official 2016 base-game authority; exact receipt reproduced | Governs the general rules summarized across the seven rule records |
| Current CMON product/support page | Dynamic receipt acquired from src-001 | Official current publisher surface; presently lists `Rulebook 79.01 MB` | Supports identity, manifest, and the current link observation; does not close publisher-wide support inventory |
| Official FAQ/errata/clarification/support inventory | OPEN / UNKNOWN | Would govern corrections or card clarifications if such material exists | No exhaustive publisher-wide inventory or authoritative evidence of absence was acquired |
| Five Hunter Boards / player aids | CLOSED for printed general surfaces | Rule-bearing: round sequence, three Trophy/scoring tracks, and collected/banked Blood Echo zones and bonuses | Official rulebook pp. 4, 9, 12, and 14–15 sufficiently governs these printed surfaces; card-local interactions remain in their card classes |
| Three custom Monster dice | CLOSED for resolving faces | Rule-bearing resolving components: damage values and combo faces | Official rulebook p. 10 sufficiently governs damage and repeated combo resolution |
| Five Hunter Health Dials, Blood Echo tokens, Trophy tokens, First Player token | CLOSED as state/value markers | Track health, values, trophies, and turn priority; no independent resolving text was identified | Official rulebook sufficiently governs their state/value-marker functions |
| Five Hunter Starter card identities/text | Class and physical quantity represented in rulebook; complete text library not acquired | Rule-bearing Action cards | Included as a mandatory governed class; identity/text coverage remains incomplete |
| Thirty-two Hunter Upgrade cards | Class and physical quantity represented; complete identities/text not acquired | Rule-bearing Action cards that alter timing, attacks, damage, or state | Included as a mandatory governed class; identity/text coverage remains incomplete |
| Eighteen Chalice Dungeon Monster cards | Class and quantity represented; card-local abilities not fully acquired | Rule-bearing encounters | Included as a mandatory governed class; text coverage remains incomplete |
| Seven Chalice Dungeon Boss cards | Class and quantity represented; card-local abilities not fully acquired | Rule-bearing persistent encounters | Included as a mandatory governed class; text coverage remains incomplete |
| Five Final Boss cards | Class and quantity represented; complete global abilities not acquired | Rule-bearing whole-game modifiers | Included as a mandatory governed class; text coverage remains incomplete |
| The Hunter's Nightmare expansion, Runes, Death Tokens | Official historical product line and review identify these as expansion content | Not applicable to the standalone base game | Explicitly excluded; no expansion rule was merged into base rules |

The governing denominator is **open**, so no honest rules percentage is asserted. Acquired groups are known, but the total number of required official support documents and card-local authority records is not.

## Factual/component arithmetic

- Claim: All seven physical product-manifest categories and their quantities are transcribed: 87 cards, 5 Hunter Boards, 5 Hunter Health Dials, 75 Blood Echo plastic tokens, 16 cardboard tokens, 3 custom Monster dice, and 1 rulebook; `7 / 7` is a bounded inventory-transcription metric only.
  Source: src-001
  Evidence: "CMON's live product page lists exactly those seven categories and quantities."
  Confidence: high

- Claim: The 87-card physical total is decomposed at source level as `25 + 32 + 5 + 18 + 7 = 87`; `87 / 87` is a bounded physical-allocation metric only.
  Source: src-002
  Evidence: "Rulebook p. 4 lists 25 Hunter Starter, 32 Hunter Upgrade, 5 Final Boss, 18 Chalice Dungeon Monster, and 7 Chalice Dungeon Boss cards."
  Confidence: high

- Claim: Distinct card-identity and card-text coverage is unknown and is not used as a percentage.
  Source: src-002
  Evidence: "The component page supplies physical quantities and class examples, not a complete distinct identity/text inventory for every rule-bearing card."
  Confidence: high

Because the broader factual denominator includes unresolved rule-bearing card identities/text and official support, this draft does not claim the non-deckbuilder 60% promotion threshold despite complete source-level physical inventory transcription.
