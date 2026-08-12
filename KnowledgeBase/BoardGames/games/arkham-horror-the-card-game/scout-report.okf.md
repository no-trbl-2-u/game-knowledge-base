---
okf_version: 0.2
type: scout_report
game:
  title: "Arkham Horror: The Card Game"
  slug: "arkham-horror-the-card-game"
  bgg_id: 205637
  publisher: "Fantasy Flight Games"
  year: 2016
  weight: null
  edition: "core set / revised product line referenced"
scope: "base game"
mechanics: [action-points, campaign-game, cooperative-game, deck-bag-and-pool-building, deck-building, hand-management, solo-solitaire-game, variable-player-powers]
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/xmlapi2/thing?id=205637&stats=1"
    failure: blocked
    fallback: "BGG page URL plus search snippets and a secondary review page quoting BGG Geek Rating 8.57922."
    retry_needs: manual_review
    notes: "HTTP 401 from XML API during 2026-07-10 scout."
  - source_id: "src-002"
    url: "https://www.fantasyflightgames.com/en/products/arkham-horror-the-card-game/"
    failure: blocked
    fallback: "Official Learn to Play PDF URL from search result; product page retained as official source target."
    retry_needs: browser_fetch
    notes: "HTTP 403 from direct product-page fetch during 2026-07-10 scout. Retried 2026-08-12 (librarian pass) via WebFetch: still HTTP 403."
  - source_id: "src-009"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/2f/b8/2fb895a5-07cb-4784-8a18-b92b3c91e6c9/ahc_rules_reference_v19-compressed.pdf"
    failure: blocked
    fallback: "Official Learn to Play PDF plus ArkhamDB Rules Reference mirror for edge-case leads."
    retry_needs: alternate_source
    notes: "HTTP 403 from direct Rules Reference PDF URL attempted during 2026-07-10 scout. Retried 2026-08-12 (librarian pass) via WebFetch: still HTTP 403."
sources:
  - id: "src-001"
    title: "BoardGameGeek — Arkham Horror: The Card Game"
    url: "https://boardgamegeek.com/boardgame/205637/arkham-horror-the-card-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-10"
    notes: "Primary discovery target; direct API/page fetch blocked."
  - id: "src-002"
    title: "Fantasy Flight Games — Arkham Horror: The Card Game product page"
    url: "https://www.fantasyflightgames.com/en/products/arkham-horror-the-card-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-10"
    notes: "Product page direct fetch blocked; search result identified official downloads."
  - id: "src-003"
    title: "Arkham Horror: The Card Game — Learn to Play PDF"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/dd/78/dd7818fe-0c9a-4a6c-b685-e32ab55b1702/ahc60_learn_to_play_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-10"
    notes: "Official Learn to Play PDF fetched and extracted."
  - id: "src-004"
    title: "ArkhamDB — Rules"
    url: "https://arkhamdb.com/rules"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-10"
    notes: "Rules Reference mirror used only for edge-case leads."
  - id: "src-005"
    title: "Board Game Quest — Arkham Horror: The Card Game – Chapter Two Review"
    url: "https://www.boardgamequest.com/arkham-horror-the-card-game-chapter-two-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-10"
    notes: "Review text fetched."
  - id: "src-006"
    title: "There Will Be Games — Arkham Horror The Card Game: the greatest deck construction introduction of all time... if you can get there"
    url: "https://therewillbe.games/articles-boardgame-reviews/8708-arkham-horror-living-card-game-the-greatest-deck-construction-introduction-of-all-time-if-you-can-get-there"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-10"
    notes: "Review text fetched."
  - id: "src-007"
    title: "Co-op Board Games — Arkham Horror: The Card Game Review"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/arkham-horror-the-card-game-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-10"
    notes: "Review text fetched."
  - id: "src-008"
    title: "Meeple Mountain — Arkham Horror: The Card Game Revised Edition review"
    url: "https://www.meeplemountain.com/reviews/arkham-horror-the-card-game-revised-edition/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-10"
    notes: "Search result quoted BGG Geek Rating 8.57922."
  - id: "src-009"
    title: "Arkham Horror: The Card Game — Rules Reference PDF attempted URL"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/2f/b8/2fb895a5-07cb-4784-8a18-b92b3c91e6c9/ahc_rules_reference_v19-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-10"
    notes: "Attempted official Rules Reference PDF URL returned HTTP 403."
confidence: medium
status: needs_followup
---

## Scout objective

Study a high-scoring cooperative deck/deck-construction game with strong campaign play and deckbuilding relevance.

## Why this game

- Wishlist entry consumed: n/a — `WISHLIST.md` has no unchecked entry.
- BGG signal: BGG item 205637 was the discovery target; direct BGG access was blocked, but a secondary review search result quoted "BGG Geek Rating: 8.57922" for Arkham Horror: The Card Game.
- Mechanics relevance: official Learn to Play calls it cooperative and says each investigator builds a deck around investigator abilities.
- Review/reception signal: review sources repeatedly discuss deck construction, campaign progression, onboarding barriers, and product-line access.

## Source search path

- BoardGameGeek: target page and XML API attempted; both blocked.
- Publisher page: FFG product page found by search; direct fetch blocked.
- Official rulebook: Learn to Play PDF fetched and extracted; Rules Reference PDF attempted and blocked.
- FAQ/errata: ArkhamDB rules mirror found; used only as follow-up lead.
- Review sources: Board Game Quest, There Will Be Games, Co-op Board Games, and Meeple Mountain search result.

## Rulebook extraction status

- Official rulebook found: yes, Learn to Play.
- File inspected: yes, PDF fetched and text extracted.
- Page count/version/date if known: PDF size about 4.4 MB; exact page count not recorded.
- Text extraction quality: good for overview and Learn to Play claims.

## Documents written

This run wrote the standard Arkham Horror: The Card Game doc set: `index.okf.md`, `sources.okf.md`, `rules/overview.okf.md`, `rules/setup.okf.md`, `rules/turn-structure.okf.md`, `rules/actions.okf.md`, `rules/scoring-endgame.okf.md`, `rules/edge-cases-faq.okf.md`, `reception/reviews.okf.md`, and `reception/better-if.okf.md`.

## Run validation

- `WISHLIST.md` entry checked off: n/a — no unchecked entry.
- `node scripts/generate-index.mjs` run after writing docs: yes.
- `node scripts/validate-okf.mjs` exit 0 before push: yes.

## Strongest design lessons

Campaign deck construction works when card upgrades, investigator identity, and scenario demands are intertwined.

## Strongest player complaints

The admired engine is guarded by onboarding load, product-line cost, card-pool dependency, and setup/bookkeeping overhead.

## This game would be better if...

The first-box path gave stronger deck examples, clearer upgrade routes, and better collection/campaign organization without diluting strategic depth.

## Open questions

- Recheck BGG current average/rank/weight/mechanisms when direct BGG access is available.
- Retrieve the official Rules Reference PDF through a browser or alternate official URL.
