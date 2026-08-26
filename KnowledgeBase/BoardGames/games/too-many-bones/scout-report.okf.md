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
    retry_needs: manual_review
    notes: "Direct HTML returned HTTP 403 and XML API returned HTTP 401; recheck current average, Geek Rating, rank, weight, and mechanism metadata. Retried 2026-08-19 (librarian): still HTTP 403, matching the systemic BGG block documented in marvel-champions-the-card-game/scout-report.okf.md — not a game-specific issue. Downgrading to manual_review since automated fetch has failed twice. Retried 2026-08-26 (librarian): still HTTP 403 (HTML) and HTTP 401 (XML API v1/v2); WebSearch turned up no third-party mirror quoting current rating/rank/weight. Systemic BGG block persists; no automated remediation path this pass."
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
    notes: "Secondary rules summary; cross-checked against the official rulebook (src-006) in the 2026-08-19 librarian pass — setup and phase claims matched with no contradictions found."
  - id: "src-006"
    title: "Too Many Bones Rulebook (v2.2)"
    url: "https://www.dropbox.com/scl/fi/mwe9nv6bb68gtkkhgx04o/TMB-Rulebook.pdf?rlkey=1y2zxkqw7mpi98aljmaoipjzq&e=1&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Recovered via the publisher support page and text-extracted with curl + pypdf in the 2026-08-19 librarian pass. Followup resolved."
  - id: "src-007"
    title: "Chip Theory Games — Too Many Bones FAQs (support solutions index)"
    url: "https://tmbsupport.chiptheorygames.com/support/solutions/33000133540"
    kind: faq
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Solutions index confirms FAQ topic coverage; individual article bodies not yet retrieved."
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
confidence: high
status: needs_followup
last_verified: "2026-08-19"
---

## Scout objective

From the eligible high-scoring BGG RPG / role-playing board games not yet in the corpus, choose one (excluding deckbuilders) and capture its rules, reception, and improvement signals.

## Why this game

- Wishlist entry: skipped. The topmost unchecked item is card-costing benchmarks, not an RPG / role-playing board game.
- Free choice: selected *Too Many Bones* as the strongest eligible RPG candidate located through BGG discovery, subject to direct-score verification.
- BGG signal: BGG page 192135 was identified; exact current rating/rank was blocked and is recorded as an open follow-up rather than invented.
- RPG fit: publisher calls it a dice-builder RPG; Gearloc characters, skill/stat growth, encounters, loot, and a Tyrant finale form a role-playing progression loop.
- Deckbuilder exclusion: no deck-building, deckbuilder, or deck-construction mechanism was used in the selection; cards support encounters, loot, and Tyrants while character progression is dice-based.

## Source search path

- BoardGameGeek: page identified; direct HTML/API blocked.
- Publisher page: product page found; direct support retrieval rate-limited.
- Official rulebook: recovered and text-extracted in the 2026-08-19 librarian pass (v2.2, 32 pages) via the publisher support page.
- Rules fallback: UltraBoardGames summary, audited against the official rulebook in the 2026-08-19 pass with no contradictions found.
- Reviews: Brawling Brothers and Polyhedron Collider.

## Documents written for the Too Many Bones intake

This run produced the standard canonical set for Too Many Bones: `index.okf.md`,
`sources.okf.md`, the six `rules/*.okf.md` category files, both
`reception/*.okf.md` files, and this scout report.

## Run validation

- Wishlist entry checked off: no; the RPG-focus wishlist had no matching unchecked entry at scout time.
- `node scripts/generate-index.mjs`: run as part of the 2026-08-19 librarian pass; INDEX.okf.md regenerated.
- `node scripts/validate-okf.mjs`: exit 0 confirmed as part of the 2026-08-19 librarian pass.

## Strongest design lesson

Dice can be authored as persistent character equipment: the randomizer is not merely a resolution device but the visible progression surface.

## Strongest player complaint

The learning cliff is the toll demanded by the game's depth; reviewers recommend a walkthrough before the system becomes legible.

## This game would be better if...

The first session taught one complete Gearloc through a staged encounter while preserving the full build system for later play.

## Open questions

- Current BGG score signal and complexity weight (BGG remains blocked corpus-wide as of 2026-08-19).
- FAQ article-level rulings beyond the solutions-index topic list (src-007).