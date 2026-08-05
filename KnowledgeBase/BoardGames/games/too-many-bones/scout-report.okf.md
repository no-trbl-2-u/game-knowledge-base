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
    notes: "Direct HTML returned HTTP 403 and XML API returned HTTP 401; recheck current average, Geek Rating, rank, weight, and mechanism metadata. 2026-08-05 librarian retry: unchanged, still HTTP 403 / HTTP 401."
  - source_id: "src-006"
    url: "https://www.dropbox.com/scl/fi/mwe9nv6bb68gtkkhgx04o/TMB-Rulebook.pdf"
    failure: pdf_extraction
    fallback: "2026-08-05 librarian pass: the support page (previously HTTP 429) now loads; found and downloaded the official rulebook v2.2 PDF linked from it, and extracted it with pypdf. Objective/Setup prose (pp. 6-7) and the table of contents (p. 3) are clean and now cited in rules/overview.okf.md and rules/setup.okf.md, but Baddie-chip/dice-icon component pages interleave icon glyphs with numbers and are not reliable for precise numeric claims yet."
    retry_needs: manual_review
    notes: "2026-08-05: needs a layout-aware re-extraction or manual page review of the Gearloc Mat, Baddie Chip, Tyrants, and Battle Mat sections (pp. 10-17) before turn-structure/actions/scoring-endgame can cite exact stat or dice values from this source."
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
  - id: "src-006"
    title: "Too Many Bones Rulebook v2.2 (Chip Theory Games support, Dropbox-hosted)"
    url: "https://www.dropbox.com/scl/fi/mwe9nv6bb68gtkkhgx04o/TMB-Rulebook.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-05"
    notes: "Official base-game rulebook, retrieved and extracted on the 2026-08-05 librarian pass."
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

For *Too Many Bones*: select one high-scoring BGG RPG / role-playing board game not already present in the corpus, excluding deckbuilders, and capture rules, reception, and improvement signals.

## Why this game

- Wishlist entry: skipped. The topmost unchecked item is card-costing benchmarks, not an RPG / role-playing board game.
- Free choice: selected *Too Many Bones* as the strongest eligible RPG candidate located through BGG discovery, subject to direct-score verification.
- BGG signal: BGG page 192135 was identified; exact current rating/rank was blocked and is recorded as an open follow-up rather than invented.
- RPG fit: publisher calls it a dice-builder RPG; Gearloc characters, skill/stat growth, encounters, loot, and a Tyrant finale form a role-playing progression loop.
- Deckbuilder exclusion: no deck-building, deckbuilder, or deck-construction mechanism was used in the selection; cards support encounters, loot, and Tyrants while character progression is dice-based.

## Source search path

- BoardGameGeek: page identified; direct HTML/API blocked.
- Publisher page: product page found; direct support retrieval rate-limited on the 2026-07-19 scout, resolved on the 2026-08-05 retry.
- Official rulebook: recovered and extracted on the 2026-08-05 retry (src-006).
- Rules fallback: UltraBoardGames summary.
- Reviews: Brawling Brothers and Polyhedron Collider.

## Documents written

This run for *Too Many Bones* wrote `index.okf.md`, `sources.okf.md`, six `rules/*.okf.md`, `reception/reviews.okf.md`, `reception/better-if.okf.md`, and this report.

## Run validation

For *Too Many Bones*:
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

- Current BGG score signal and complexity weight (still blocked as of 2026-08-05).
- FAQ and errata.
- A layout-aware re-extraction of the rulebook's Gearloc Mat, Baddie Chip, Tyrants, and Battle Mat sections (pp. 10-17) for exact stat/dice values.