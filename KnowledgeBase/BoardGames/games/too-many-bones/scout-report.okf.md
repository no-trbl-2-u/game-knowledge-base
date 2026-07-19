---
okf_version: 0.2
type: scout_report
game:
  title: "Too Many Bones"
  slug: "too-many-bones"
  bgg_id: 192135
  publisher: "Chip Theory Games"
  year: 2017
  weight: null
  edition: "English base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, hand-management, solo-solitaire-game, variable-player-powers]
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/192135/too-many-bones"
    failure: blocked
    fallback: "BGG search result plus official product description and secondary review leads"
    retry_needs: browser_fetch
    notes: "Direct HTML returned HTTP 403 and XML API returned HTTP 401; recheck current average, Geek Rating, rank, weight, and mechanism metadata."
  - source_id: "src-002"
    url: "https://chiptheorygames.com/pages/support/too-many-bones"
    failure: http_error
    fallback: "Official product page search result"
    retry_needs: browser_fetch
    notes: "Support page direct retrieval returned HTTP 429; recover the official rulebook and FAQ URL."
  - source_id: "src-003"
    url: "https://www.ultraboardgames.com/too-many-bones/game-rules.php"
    failure: other
    fallback: "Search result and accessible rules summary used provisionally"
    retry_needs: manual_review
    notes: "Secondary rules source should be audited against the official rulebook before detailed rules reuse."
sources:
  - id: "src-001"
    title: "BoardGameGeek — Too Many Bones"
    url: "https://boardgamegeek.com/boardgame/192135/too-many-bones"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-19"
    notes: "Discovery source; score statistics blocked."
  - id: "src-002"
    title: "Chip Theory Games — Too Many Bones"
    url: "https://chiptheorygames.com/products/too-many-bones"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-19"
    notes: "Official product source; search result exposed component and RPG description."
  - id: "src-003"
    title: "UltraBoardGames — Too Many Bones rules"
    url: "https://www.ultraboardgames.com/too-many-bones/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-19"
    notes: "Secondary rules summary."
  - id: "src-004"
    title: "Brawling Brothers — Too Many Bones review"
    url: "https://brawlingbrothers.com/too-many-bones-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-19"
    notes: "Review source."
  - id: "src-005"
    title: "Polyhedron Collider — Too Many Bones review"
    url: "https://www.polyhedroncollider.com/2019/07/too-many-bones-review.html"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-19"
    notes: "Review source."
confidence: medium
status: needs_followup
---

## Scout objective

Select one high-scoring BGG RPG / role-playing board game not already present in the corpus, excluding deckbuilders, and capture rules, reception, and improvement signals.

## Why this game

- Wishlist entry: skipped. The topmost unchecked item is card-costing benchmarks, not an RPG / role-playing board game.
- Free choice: selected *Too Many Bones* as the strongest eligible RPG candidate located through BGG discovery, subject to direct-score verification.
- BGG signal: BGG page 192135 was identified; exact current rating/rank was blocked and is recorded as an open follow-up rather than invented.
- RPG fit: publisher calls it a dice-builder RPG; Gearloc characters, skill/stat growth, encounters, loot, and a Tyrant finale form a role-playing progression loop.
- Deckbuilder exclusion: no deck-building, deckbuilder, or deck-construction mechanism was used in the selection; cards support encounters, loot, and Tyrants while character progression is dice-based.

## Source search path

- BoardGameGeek: page identified; direct HTML/API blocked.
- Publisher page: product page found; direct support retrieval rate-limited.
- Official rulebook: not recovered.
- Rules fallback: UltraBoardGames summary.
- Reviews: Brawling Brothers and Polyhedron Collider.

## Documents written

- `index.okf.md`, `sources.okf.md`, six `rules/*.okf.md`, `reception/reviews.okf.md`, `reception/better-if.okf.md`, and this report.

## Run validation

- Wishlist entry checked off: no; skipped because it does not match the RPG focus.
- `node scripts/generate-index.mjs`: pending until writing completes.
- `node scripts/validate-okf.mjs`: pending until writing completes.

## Strongest design lesson

Dice can be authored as persistent character equipment: the randomizer is not merely a resolution device but the visible progression surface.

## Strongest player complaint

The learning cliff is the toll demanded by the game's depth; reviewers recommend a walkthrough before the system becomes legible.

## This game would be better if...

The first session taught one complete Gearloc through a staged encounter while preserving the full build system for later play.

## Open questions

- Current BGG score signal and complexity weight.
- Official rulebook, FAQ, and errata.
- Exact encounter-day and Tyrant timing details.