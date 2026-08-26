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
    notes: "HTTP 401 from XML API during 2026-07-10 scout. Retried 2026-08-26 (librarian): XML API still 401, direct page and BGG wiki path both 403 — whole BGG domain blocked from this tool, not just the API. Found a working secondary source (src-010, The Dice Drop, 2026-06-11) quoting a BGG raw average rating of 8.12 — this conflicts with src-008's Geek Rating figure of 8.57922. These are two different BGG metrics (raw average vs. Bayesian Geek Rating), and a Geek Rating normally sits below the raw average, so having Geek Rating (8.57922) exceed the raw average (8.12) is numerically odd; flagged as an open discrepancy rather than reconciled, since neither figure could be independently re-verified against BGG directly."
  - source_id: "src-002"
    url: "https://www.fantasyflightgames.com/en/products/arkham-horror-the-card-game/"
    failure: blocked
    fallback: "Official Learn to Play PDF URL from search result; product page retained as official source target."
    retry_needs: manual_review
    notes: "HTTP 403 from direct product-page fetch during 2026-07-10 scout. Retried 2026-08-26 (librarian): still 403, along with an alternate FFG product path and arkhamhorror.com — the whole fantasyflightgames.com/arkhamhorror.com domain family is blocked from this tool. No retailer/distributor mirror of the product description was located. Downgraded to manual_review; the Learn to Play PDF (src-003) remains the reliable primary source regardless."
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
    notes: "Attempted official Rules Reference PDF URL returned HTTP 403. Retried 2026-08-26 (librarian): still 403. FFG appears to have never republished this PDF post-launch (see edge-cases-faq.okf.md); ArkhamDB (src-004) is now the durable substitute and this followup entry is dropped in favor of that resolution."
  - id: "src-010"
    title: "The Dice Drop — Solo Spotlight: Arkham Horror: The Card Game"
    url: "https://thedicedrop.com/posts/solo-spotlight-arkham-horror-card-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-26"
    notes: "Found in the 2026-08-26 librarian pass as a substitute BGG-stats source (direct BGG remains blocked). States rank #33 overall, raw average rating 8.12/10 from ~48,000 users, weight 3.57/5, 370,000+ logged plays, 83,000+ owners, 'verified via BGG' as of June 2026. Its 8.12 raw average conflicts with src-008's quoted Geek Rating of 8.57922 — flagged, not reconciled; see src-001 followup note."
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

This Arkham Horror: The Card Game scout run wrote the standard document set: `index.okf.md`, `sources.okf.md`, the six `rules/*.okf.md` records (overview, setup, turn-structure, actions, scoring-endgame, edge-cases-faq), and both `reception/*.okf.md` records (reviews, better-if).

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
