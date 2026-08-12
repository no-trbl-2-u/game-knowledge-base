---
okf_version: 0.2
type: scout_report
game:
  title: "Hoplomachus: Remastered"
  slug: "hoplomachus-remastered"
  bgg_id: 338434
  publisher: "Chip Theory Games"
  year: 2022
  weight: null
  edition: "Remastered core game"
scope: "base game"
mechanics: [cooperative-game, deck-bag-and-pool-building, dice-rolling, hand-management, variable-player-powers, solo-solitaire-game]
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/338434/hoplomachus-remastered"
    failure: blocked
    fallback: "Search result snippets and a secondary BGG-rating report"
    retry_needs: browser_fetch
    notes: "Direct BGG page returned HTTP 403 and XML API returned HTTP 401 during this run; recheck later for current average, rank, weight, and comments. Retried 2026-08-12 (librarian pass) via WebFetch: still HTTP 403 — matches the systemic BGG block seen across this corpus (see marvel-champions-the-card-game/scout-report.okf.md notes); a genuine interactive/authenticated browser session is needed next."
sources:
  - id: "src-001"
    title: "BoardGameGeek — Hoplomachus: Remastered"
    url: "https://boardgamegeek.com/boardgame/338434/hoplomachus-remastered"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-11"
    notes: "Selection and mechanism signal; direct fetch blocked."
  - id: "src-002"
    title: "Chip Theory Games — Hoplomachus: Remastered"
    url: "https://chiptheorygames.com/products/hoplomachus-remastered"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-11"
    notes: "Official product page."
  - id: "src-003"
    title: "Chip Theory Games — Hoplomachus support and downloads"
    url: "https://chiptheorygames.com/pages/support/hoplomachus"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-11"
    notes: "Official rulebook and FAQ directory."
  - id: "src-004"
    title: "Hoplomachus: Remastered Rulebook"
    url: "https://www.dropbox.com/scl/fi/jr3vnbix2w3bjjpj7jojp/HRemastered-Rulebook.pdf?rlkey=5ogucfycaqggibhdkgfbt6529&e=1&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-11"
    notes: "Retrieved and extracted successfully."
  - id: "src-005"
    title: "Meeple Mountain — Hoplomachus: Remastered"
    url: "https://www.meeplemountain.com/boardgame/hoplomachus-remastered/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-11"
    notes: "Reports BGG Geek Rating 8.03885."
  - id: "src-006"
    title: "Chip Theory Games — Hoplomachus FAQs"
    url: "https://support.chiptheorygames.com/support/solutions/33000133541"
    kind: faq
    provenance: official
    retrieved_at: "2026-08-12"
    notes: "Resolved 2026-08-12: solutions page and its two Remastered-specific articles retrieved via curl; content indexed in rules/edge-cases-faq.okf.md."
confidence: high
status: needs_followup
---

## Scout objective

Study one board game matching the current Governor focus: cooperative plus deckbuilder/deck-building, prioritized by highest available BGG score signal.

## Why this game

- Wishlist entry consumed: none; `WISHLIST.md` had no unchecked entries.
- BGG signal: BGG search classified the game as Cooperative Game and Deck, Bag, and Pool Building; a secondary page reported BGG Geek Rating 8.03885.
- Mechanics relevance: cooperative/solo tactical combat, unit pools, hand-managed tactics, dice resolution, and asymmetric factions.
- Review/reception signal: available secondary score signal is strong, but detailed consensus remains incomplete.

## Source search path

- BoardGameGeek: search snippets obtained; direct page/API blocked.
- Publisher page: product page and support page retrieved.
- Official rulebook: publisher-linked Dropbox PDF retrieved and extracted.
- FAQ/errata: official link identified; detailed page not extracted.
- Review sources: Meeple Mountain score page located.

## Rulebook extraction status

- Official rulebook found: yes.
- File inspected: yes.
- Page count/version/date if known: PDF retrieved; edition is Remastered; page count not independently recorded.
- Text extraction quality: good; `pdftotext` produced 2,054 lines.

## Documents written

This run wrote the standard Hoplomachus: Remastered doc set: `index.okf.md`, `sources.okf.md`, `rules/overview.okf.md`, `rules/setup.okf.md`, `rules/turn-structure.okf.md`, `rules/actions.okf.md`, `rules/scoring-endgame.okf.md`, `rules/edge-cases-faq.okf.md`, `reception/reviews.okf.md`, and `reception/better-if.okf.md`.

## Run validation

- `WISHLIST.md` entry checked off: n-a; no unchecked entries existed.
- `node scripts/generate-index.mjs` run after writing docs: pending.
- `node scripts/validate-okf.mjs` exit 0 before push: pending.

## Strongest design lessons

A shared tactical core can support several distinct objectives, but every extra mode multiplies onboarding and setup burden.

## Strongest player complaints

No broad complaint consensus was asserted; direct BGG comments and FAQ extraction remain followups.

## This game would be better if...

Its first-game path compressed the mode tree into one guided scenario and its reference aids surfaced unit and status rules at the table.

## Open questions

- What current BGG average rating, rank, and complexity weight should be recorded after a browser-accessible recheck? (Still HTTP 403 as of 2026-08-12.)

## Retry notes

- 2026-08-12 (librarian pass): FAQ portal (src-006) resolved — see `rules/edge-cases-faq.okf.md` for indexed content. BGG (src-001) retried and still blocked.