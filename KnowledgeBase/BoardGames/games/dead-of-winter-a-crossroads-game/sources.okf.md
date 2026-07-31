---
okf_version: 0.2
type: sources
game:
  title: "Dead of Winter: A Crossroads Game"
  slug: "dead-of-winter-a-crossroads-game"
  bgg_id: 150376
  publisher: "Plaid Hat Games"
  year: 2014
  weight: 3.01
  edition: "English 2014 standalone/base game; exact printing mapping unresolved"
scope: "official rules/support, independent reception, and bounded failed-source inventory"
mechanics: ["action-points", "area-movement", "cooperative-game", "dice-rolling", "hand-management", "hidden-information", "semi-cooperative-game", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "Dead of Winter rulebook (PH1000)"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/c0/81/c081efff-c39d-40f1-8261-55570a7002dc/ph1000-rulebook-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/pdf; 9,006,551 bytes; 20 pages; SHA-256 0d7389eb286e454ff3fc431efc68fd87f5aceaba939e02bab55664e6183af9b9."
  - id: "src-002"
    title: "Dead of Winter FAQ version 1.1"
    url: "https://media.plaidhatgames.com/old_images/games/dead-of-winter/dow-faq.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/pdf; 2,684,037 bytes; 4 pages; SHA-256 331e65dc07240857405d595592e8320e61ac6649def735b3cb8c7659ba13bcee."
  - id: "src-003"
    title: "Dead of Winter FAQ Available"
    url: "https://www.plaidhatgames.com/news/463/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Archived official announcement dated 2015-02-05 linking FAQ as support material."
  - id: "src-004"
    title: "Plaid Hat Games — Can't find a game?"
    url: "https://www.plaidhatgames.com/cant-find-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Final redirect target from legacy /games/dead-of-winter; identifies Fantasy Flight Games as current manager."
  - id: "src-005"
    title: "Dead of Winter Review — Board Game Reviews by Josh"
    url: "https://www.boardgamereviewsbyjosh.com/2014/09/dead-of-winter-review.html"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 114,724 bytes; SHA-256 5b5cf232779f576a064fe4017c9b6f06f25539784258226ef2cb7f9d2aba61c3."
  - id: "src-006"
    title: "BoardGameGeek — Dead of Winter: A Crossroads Game"
    url: "https://boardgamegeek.com/boardgame/150376"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-26"
    notes: "Identity and historical selection metadata only; not rules or reception authority."
confidence: high
status: needs_followup
last_verified: "2026-07-31"
summary: "Receipted official rules/FAQ and independent reception; support and printing inventory remain open."
---

# Source and retrieval ledger

| ID | Retrieval UTC | Final URL / outcome | Type | Bytes | Pages | SHA-256 |
|---|---|---|---|---:|---:|---|
| src-001 | 2026-07-31T08:57:54Z | exact URL above; HTTP 200 | application/pdf | 9,006,551 | 20 | `0d7389eb286e454ff3fc431efc68fd87f5aceaba939e02bab55664e6183af9b9` |
| src-002 | 2026-07-31T08:59:00Z | exact URL above; HTTP 200 | application/pdf | 2,684,037 | 4 | `331e65dc07240857405d595592e8320e61ac6649def735b3cb8c7659ba13bcee` |
| src-003 | 2026-07-31T08:59:00Z | exact URL above; HTTP 200 in browser | text/html | not retained | — | — |
| src-004 | 2026-07-31T08:58:45Z | legacy URL redirected twice to exact URL above; HTTP 200 | text/html | 24,189 | — | `a3fd3527ba9ae7e1c220c5ac30df295013fa91e1f14820e692073ae451366eeb` |
| src-005 | 2026-07-31T08:58:22Z | exact URL above; HTTP 200 | text/html | 114,724 | — | `5b5cf232779f576a064fe4017c9b6f06f25539784258226ef2cb7f9d2aba61c3` |

## Document identity

- Claim: The downloaded PH1000 rulebook is a 20-page official CDN document, but its PDF was created and modified on 2020-03-10 rather than in 2014.
  Source: src-001
  Evidence: `pdfinfo` reports creator Adobe InDesign 15.0, creation 2020-03-10 19:51:43 UTC, modification 19:55:37 UTC, PDF 1.4, 20 pages.
  Confidence: high

- Claim: FAQ v1.1 is an official four-page support document published after the base game's release.
  Source: src-002, src-003
  Evidence: PDF metadata reports creation 2015-02-04; Plaid Hat's archived 2015-02-05 news post announces the download in the game's support section.
  Confidence: high

## Bounded failed and incomplete searches

| Attempt | Outcome | Evidentiary meaning |
|---|---|---|
| `https://www.plaidhatgames.com/games/dead-of-winter` | 301 → `/games/dead-of-winter/` → 301 → `/cant-find-game/` → 200 | Current Plaid Hat support page retired; not proof that no other support files exist. |
| `https://www.plaidhatgames.com/board-games/dead-of-winter/` | 404 page in browser | Exact attempted modern-style product URL absent. |
| `https://www.fantasyflightgames.com/en/products/dead-of-winter/` | Cloudflare verification challenge | Current manager's product/support inventory could not be bounded automatically. |
| Plaid Hat/FFG web searches for Dead of Winter FAQ/errata | Located FAQ v1.1 and official announcement; no dated official index enumerating all support files | Search is bounded reconnaissance, not proof of absence of later FAQ/errata. |
| Official component/card gallery search | No complete official source located for all 10 main-objective faces, 44 secret-objective faces, 30 survivor faces, 170 item faces, 20 crisis faces, 80 Crossroads faces, 5 reference sheets, and board/location surfaces | Card-local governing denominator remains open. |

- Claim: Plaid Hat currently directs Dead of Winter support to Fantasy Flight Games.
  Source: src-004
  Evidence: The page says Dead of Winter and its expansions are now published and managed by Fantasy Flight Games.
  Confidence: high
