---
okf_version: 0.2
type: sources
game:
  title: "Dead of Winter: The Long Night"
  slug: "dead-of-winter-the-long-night"
  bgg_id: 193037
  publisher: "Plaid Hat Games"
  year: 2016
  weight: null
  edition: "English 2016 first/release printing"
scope: "edition-specific source and receipt ledger"
mechanics: ["action-points", "area-movement", "cooperative-game", "dice-rolling", "hand-management", "hidden-information", "semi-cooperative-game", "variable-player-powers"]
sources:
  - id: "src-001"
    title: "Plaid Hat rules-tln.pdf (live and 2016 archive)"
    url: "https://media.plaidhatgames.com/old_images/games/dead-of-winter/rules-tln.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Archive: https://web.archive.org/web/20160910053934id_/http://www.plaidhatgames.com/images/games/dead-of-winter/rules-tln.pdf"
  - id: "src-002"
    title: "Plaid Hat release announcement (2016 archive)"
    url: "https://web.archive.org/web/20160320090013id_/http://www.plaidhatgames.com/news/652"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Archived 2016-03-20 from a 2016-03-16 article."
  - id: "src-003"
    title: "Plaid Hat archived news article (current rendering)"
    url: "https://www.plaidhatgames.com/news/652/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Current archived-news rendering; links warned as likely out of date."
  - id: "src-004"
    title: "TheGamingReview: Dead of Winter: The Long Night"
    url: "https://www.thegamingreview.com/9912/2016/11/12/board-game-review-dead-of-winter-the-long-night/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Contemporaneous independent review dated 2016-11-12."
  - id: "src-005"
    title: "RPGnet review of Dead Of Winter: The Long Night"
    url: "https://www.rpg.net/reviews/archive/17/17172.phtml"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Independent review and component-list corroboration."
  - id: "src-006"
    title: "BoardGameGeek item 193037"
    url: "https://boardgamegeek.com/boardgame/193037/dead-of-winter-the-long-night"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-31"
    notes: "Identity lead only; XML API returned HTTP 401 in this run."
  - id: "src-007"
    title: "Plaid Hat Dead of Winter FAQ"
    url: "https://media.plaidhatgames.com/old_images/games/dead-of-winter/dow-faq.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Created 2015-02-04, before The Long Night; no target terms found; excluded from target law."
  - id: "src-008"
    title: "Fantasy Flight product route probe"
    url: "https://www.fantasyflightgames.com/en/products/dead-of-winter-the-long-night/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 403 Cloudflare; not negative proof."
confidence: high
status: needs_followup
---

# Source and receipt ledger

Retrieved UTC: `2026-07-31T10:17:55Z`.

| ID | Role | Result | Bytes / pages | SHA-256 |
|---|---|---|---:|---|
| src-001 live | governing rules | HTTP 200 `application/pdf` | 9,026,851 / 24 | `dc9002541e8cd7e7273a7ae2d00320fa9b021fd9e77e7e9a0d482999360190e6` |
| src-001 archive | immutable release-era rules, capture `20160910053934` | HTTP 200 `application/pdf` | 9,026,851 / 24 | `dc9002541e8cd7e7273a7ae2d00320fa9b021fd9e77e7e9a0d482999360190e6` |
| src-002 | release boundary/product scope | HTTP 200 `text/html` | 24,217 | `2f93151ec046efa4574c02211928a268fde3af9ff2577a2b8a48d98cef17ec31` |
| src-003 | current Plaid Hat archived rendering | HTTP 200 `text/html` | 20,895 | `353933d2a2dc57f6cbdf9859661a8ee01a47b47033dd50164705b094ce902687` |
| src-004 | contemporaneous reception | HTTP 200 `text/html` | 59,920 | `d37a8426e43a5c78ded76362253c6cc3bdb37e644d531cbaf9752646356e3953` |
| src-005 | independent reception/component corroboration | HTTP 200 `text/html` | 48,093 | `952004a30ff7be59d564c4435f94d3ab9e45df32a9560118321ec28c5d0bf729` |
| src-006 | identity/community lead | HTTP 401 from XML API | 61 | `348accefe0931609b0f93ea36c3184b84f13d4bd6cfc23c79cd2cd539051eded` |
| src-007 | FAQ applicability check | HTTP 200 `application/pdf` | 2,684,037 / 4 | `331e65dc07240857405d595592e8320e61ac6649def735b3cb8c7659ba13bcee` |
| src-008 | current FFG route | HTTP 403 `text/html` | 5,628 | `af2209b9dcd50046a1c7e8c3ecc18dd1c57d8d25d9a801e91b7583956af6c07b` |

- Claim: The live official rulebook and release-era archive are byte-identical.
  Source: src-001
  Evidence: Both retrieved files have 9,026,851 bytes and the same SHA-256 shown above.
  Confidence: high

- Claim: PDF metadata is consistent with release production but is not used alone as release proof.
  Source: src-001
  Evidence: Adobe InDesign CC 2015; creation 2016-07-07 16:45:52 UTC; modification 2016-07-07 16:46:44 UTC; 24 pages; PDF 1.7.
  Confidence: high

## Governing-source denominator

Acquired: one target rulebook, one release announcement/product boundary, and two independent reviews. The official rules PDF itself includes base law, all three optional modules, and two instructional scenarios. The only discovered official FAQ is pre-target and inapplicable.

Open: full target-printing card/board/reference text and identities; physical token/die faces; survivor, experiment, and improvement identity mappings; authoritative proof that no target-specific FAQ/errata/module sheet exists outside the bounded Plaid Hat CDX inventory; and current FFG support content hidden behind HTTP 403. The target rulebook closes shared semantic frameworks for these classes only where itemized in `scout-report.okf.md`. Therefore the governing denominator is `UNKNOWN`; no percentage or composite is claimed.
