---
okf_version: 0.2
type: scout_report
game:
  title: "Aeon's End"
  slug: "aeons-end"
  bgg_id: 191189
  publisher: "Indie Boards & Cards"
  year: 2016
  weight: 2.80
  edition: "core game / second edition product page referenced"
scope: "base game"
mechanics: [cooperative-game, deck-bag-and-pool-building, deck-building, hand-management, variable-player-powers, solo-solitaire-game]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Aeon's End"
    url: "https://boardgamegeek.com/boardgame/191189/aeons-end"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-08"
    notes: "Primary discovery source for score, rank, weight, and mechanisms."
  - id: "src-002"
    title: "Indie Boards & Cards — Aeon's End"
    url: "https://indieboardsandcards.com/our-games/aeons-end/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Official publisher page."
  - id: "src-003"
    title: "UltraBoardGames — Aeons End Game Rules"
    url: "https://www.ultraboardgames.com/aeons-end/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-08"
    notes: "Secondary rules summary."
  - id: "src-004"
    title: "Meeple Mountain — Aeon’s End Game Review"
    url: "https://www.meeplemountain.com/reviews/aeons-end/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-08"
    notes: "Reception source."
  - id: "src-005"
    title: "BoardGameGeek — Aeon's End Ratings & Comments"
    url: "https://boardgamegeek.com/boardgame/191189/aeons-end/ratings?comment=1&rated=1"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-08"
    notes: "Community reception snippets."
  - id: "src-006"
    title: "BoardGameGeek filepage — Aeon's End Final Rulebook"
    url: "https://boardgamegeek.com/filepage/141295/aeons-end-final-rulebook"
    kind: rulebook_pdf
    provenance: community
    retrieved_at: "2026-07-08"
    notes: "Cloudflare-blocked (HTTP 403, challenge page) on retry; superseded by src-007, a mirror of the same official rulebook."
  - id: "src-007"
    title: "Aeon's End Rulebook (official, base game)"
    url: "https://cdn.1j1ju.com/medias/3f/5c/9e-aeons-end-rulebook.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Official base-game rulebook (c 2016 Lone Oak Games), 20 pages, mirrored on 1j1ju.com's rules library; retrieved via curl -L and text-extracted with pypdf."
confidence: high
status: verified
---

## Scout objective

Study one board game matching the current Governor focus: cooperative plus deckbuilder, prioritized by highest BGG score signal.

## Why this game

- Wishlist entry consumed: none; `WISHLIST.md` had no unchecked entries.
- BGG signal: *Aeon's End* showed a strong eligible signal: displayed BGG rating 7.9, about 24K ratings, overall rank about 108, weight 2.80, and mechanisms including Cooperative Game plus Deck, Bag, and Pool Building.
- Mechanics relevance: cooperative deckbuilding, no-shuffle deck order, variable turn order, boss automation, asymmetric mages.
- Review/reception signal: Meeple Mountain praised the game as best-in-class and emphasized difficulty, deterministic planning, and compounding tempo pressure.

## Source search path

- BoardGameGeek: BGG game page and ratings/comments page extracted.
- Publisher page: Indie Boards & Cards product page extracted.
- Official rulebook: direct official rulebook not found in extracted publisher page; BGG filepage located as a followup lead.
- FAQ/errata: BGG page exposed an errata lead; not fully extracted.
- Review sources: Meeple Mountain review extracted; Space-Biff extraction attempted but returned no content.
- Forum/community sources: BGG comment snippets used sparingly as community testimony.

## Rulebook extraction status

- Official rulebook found: not as a verified publisher-hosted PDF.
- File inspected: no direct PDF inspection.
- Page count/version/date if known: unknown.
- Text extraction quality: publisher page and secondary rules extraction were good; official rulebook remains a followup.

## Documents written

- `games/aeons-end/index.okf.md`
- `games/aeons-end/sources.okf.md`
- `games/aeons-end/rules/overview.okf.md`
- `games/aeons-end/rules/setup.okf.md`
- `games/aeons-end/rules/turn-structure.okf.md`
- `games/aeons-end/rules/actions.okf.md`
- `games/aeons-end/rules/scoring-endgame.okf.md`
- `games/aeons-end/rules/edge-cases-faq.okf.md`
- `games/aeons-end/reception/reviews.okf.md`
- `games/aeons-end/reception/better-if.okf.md`

## Run validation

- `WISHLIST.md` entry checked off: n-a; no unchecked entries existed.
- `node scripts/generate-index.mjs` run after writing docs: yes.
- `node scripts/validate-okf.mjs` exit 0 before push: yes.

## Strongest design lessons

No-shuffle deckbuilding turns discard order into a skill surface. It makes the player responsible for future luck.

## Strongest player complaints

Setup burden, punishing difficulty, extensive card text, and some perceived market limitation.

## This game would be better if...

It had faster setup support, a clearer first-game teaching path for deterministic deck order, and stronger accessibility aids for card-heavy play.

## Open questions

- What official second-edition errata should be added to edge-case coverage? (BGG mentions a lead; not yet located.)

## Retry notes
- 2026-07-08 (librarian pass): Resolved. The BGG filepage lead (src-006) is Cloudflare-blocked; a web search found an official-rulebook mirror on 1j1ju.com's rules library (src-007), retrieved and text-extracted successfully. `rules/edge-cases-faq.okf.md` and `sources.okf.md` were re-verified against the official text and upgraded to high confidence.
