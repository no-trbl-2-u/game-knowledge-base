---
okf_version: 0.2
type: scout_report
game:
  title: "Heroes of Terrinoth"
  slug: "heroes-of-terrinoth"
  bgg_id: 254591
  publisher: "Fantasy Flight Games"
  year: 2018
  weight: 2.50
  edition: "English base game"
scope: "base game"
mechanics: [action-retrieval, cooperative-game, dice-rolling, solo-solitaire-game, variable-player-powers]
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/254591/heroes-of-terrinoth"
    failure: blocked
    fallback: "DuckDuckGo discovery snippets plus BoardGameMatcher BGG-derived metadata"
    retry_needs: browser_fetch
    notes: "Direct page returned HTTP 403 and XML API returned HTTP 401; recheck current BGG statistics and comments later."
  - source_id: "src-003"
    url: "https://www.fantasyflightgames.com/en/products/heroes-of-terrinoth/"
    failure: blocked
    fallback: "Official Fantasy Flight CDN rulebook and product-page search snippet"
    retry_needs: browser_fetch
    notes: "Publisher landing page returned HTTP 403; rulebook remained fully accessible."
sources:
  - id: "src-001"
    title: "BoardGameGeek — Heroes of Terrinoth"
    url: "https://boardgamegeek.com/boardgame/254591/heroes-of-terrinoth"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-18"
    notes: "Discovery source; blocked directly."
  - id: "src-002"
    title: "BoardGameMatcher — Heroes of Terrinoth"
    url: "https://boardgamematcher.com/game/heroes-of-terrinoth"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-18"
    notes: "BGG-derived metadata fallback."
  - id: "src-003"
    title: "Fantasy Flight Games — Heroes of Terrinoth"
    url: "https://www.fantasyflightgames.com/en/products/heroes-of-terrinoth/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-18"
    notes: "Official landing page; blocked directly."
  - id: "src-004"
    title: "Heroes of Terrinoth Rulebook"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/8d/47/8d47fe13-7308-4950-9cb1-eaae3c361223/ter01_rulebook.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-18"
    notes: "Retrieved and text-extracted successfully."
  - id: "src-005"
    title: "Co-op Board Games — Heroes of Terrinoth Review"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/heroes-of-terrinoth-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-18"
    notes: "Full review retrieved."
  - id: "src-006"
    title: "iSlaytheDragon — Review: Heroes of Terrinoth"
    url: "https://islaythedragon.com/game-reviews/review-heroes-of-terrinoth/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-18"
    notes: "Full review retrieved."
  - id: "src-007"
    title: "Board Game Quest — Heroes of Terrinoth Review"
    url: "https://www.boardgamequest.com/heroes-of-terrinoth-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-31"
    notes: "Retrieved and extracted in the 2026-08-31 librarian pass; the 2026-07-18 bot-verification interstitial is resolved. Reviewer score 4 stars."
confidence: high
status: needs_followup
---

## Scout objective

Cover *Heroes of Terrinoth* at T's direct request, overriding the normal topmost-wishlist selection for this run.

## Why this game

- Direct owner request: Heroes of Terrinoth specifically.
- RPG focus: compressed cooperative dungeon-crawl structure with hero classes, equipment, conditions, upgrades, quest clocks, and mixed friendly/hostile dice.
- BGG-derived signal: 3.6/5 from 2,521 ratings, rank 1731, weight 2.5 via BoardGameMatcher.

## Source search path

- BGG: identified, direct page/API blocked.
- Publisher page: identified, direct page blocked.
- Official rulebook: publisher CDN PDF retrieved; 16 pages; 2,129 extracted text lines.
- Reviews: two full independent reviews retrieved; a third blocked by bot verification.
- Visuals: four noncontiguous reduced rulebook-page excerpts generated and inspected.

## Documents written

- `index.okf.md`, `sources.okf.md`, six `rules/*.okf.md`, two `reception/*.okf.md`, `visuals/packet.okf.md`, and this report.

## Run validation

- Direct-request override recorded: yes.
- `node scripts/generate-index.mjs`: exit 0; index regenerated.
- `node scripts/validate-okf.mjs`: exit 0; 2,432 files clean and index fresh.

## Strongest design lessons

A four-verb action row can carry an entire RPG encounter if enemy pressure shares the same resolution event and recovery itself remains a choice. Here the first half succeeds; the second becomes friction.

## Strongest player complaints

Rest turns can feel inert; play becomes formulaic; upgrades do not persist; quests lack campaign linkage; easy quests may collapse tension; open information permits quarterbacking.

## This game would be better if...

Recovery generated an active tactical commitment and standalone quests optionally chained into short persistent arcs.

## Open questions

- How broad are these complaints in direct BGG comments?
- Did Fantasy Flight publish later FAQ/errata or planned campaign material?