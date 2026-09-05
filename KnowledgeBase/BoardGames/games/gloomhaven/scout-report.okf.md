---
okf_version: 0.2
type: scout_report
game:
  title: "Gloomhaven"
  slug: "gloomhaven"
  bgg_id: 174430
  publisher: "Cephalofair Games"
  year: 2017
  weight: 3.90
  edition: "base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, hand-management, point-to-point-movement, variable-player-powers]
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/174430/gloomhaven"
    failure: blocked
    fallback: "Used BGG search result and BGG Data mirror for score and identity."
    retry_needs: alternate_source
    notes: "Direct BGG page returned HTTP 403 from this environment. Retried 2026-09-04 (librarian): still HTTP 403, and a real headless Chromium session (Playwright) was also held at the Cloudflare 'Performing security verification' interstitial. The block is systemic to boardgamegeek.com from this environment, not game-specific. alternate_source remains correct: a BGG-derived mirror is the retrievable document a future pass should name."
sources:
  - id: "src-001"
    title: "Gloomhaven — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/174430/gloomhaven"
    kind: bgg_page
    provenance: official
    retrieved_at: "2026-07-16"
    notes: "Discovery lead; direct page blocked."
  - id: "src-002"
    title: "Gloomhaven — BGG Data"
    url: "https://www.bggdata.co.za/game/174430/gloomhaven/"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Rating 8.6, rank 3, weight 3.9 at retrieval."
  - id: "src-003"
    title: "Gloomhaven — Dized Rules introduction"
    url: "https://rules.dized.com/game/I7lEsCGOS2-zgol-ZRNf3g/gloomhaven"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "RPG identity, campaign, and progression summary."
  - id: "src-004"
    title: "Gloomhaven — Dized Rules: Initiative"
    url: "https://rules.dized.com/game/I7lEsCGOS2-zgol-ZRNf3g/2YT9FnMvSECu2zu2WSJ08Q/cISGWuPnSiG6Yz9yWeG9Fg/initiative"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Initiative summary."
  - id: "src-005"
    title: "Gloomhaven — Dized Rules: Exhaustion"
    url: "https://rules.dized.com/game/I7lEsCGOS2-zgol-ZRNf3g/JCOXDscCS3a2rgiHrt6_Eg/exhaustion"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Exhaustion summary."
  - id: "src-006"
    title: "Gloomhaven: Does it live up to the hype? — The Opinionated Gamers"
    url: "https://opinionatedgamers.com/2020/11/28/gloomhaven-does-it-live-up-to-the-hype-review-by-rj-garrison/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Reception evidence."
  - id: "src-007"
    title: "Gloomhaven — Co-op Board Games review"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/gloomhaven/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Time and campaign scale evidence."
  - id: "src-008"
    title: "Cephalofair Games — Gloomhaven support and resources"
    url: "https://cephalofair.com/pages/gloomhaven"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-31"
    notes: "Official publisher support hub, confirmed in the 2026-08-31 librarian pass; the 2026-07-16 not_found followup is resolved. Links the Gloomhaven Rulebook, the Gloomhaven FAQ at cephalofairgames.github.io, a puzzle-book hint guide, how-to-play videos, First Printing (2025) errata, and crossover character sheets."
  - id: "src-009"
    title: "Gloomhaven Rulebook (2017 English edition) — mirrored PDF"
    url: "https://cdn.1j1ju.com/medias/8d/c5/21-gloomhaven-rulebook.pdf"
    kind: rulebook_pdf
    provenance: secondary
    retrieved_at: "2026-09-03"
    notes: "Static 52-page PDF receipt: 13,154,428 bytes, SHA-256 9965c76dfc747c82a4013d645e95f5ffc64692865617527734199b064a2117fe."
  - id: "src-010"
    title: "Gloomhaven review: 2017’s biggest board game is astoundingly good — Ars Technica"
    url: "https://arstechnica.com/gaming/2017/04/gloomhaven-review-2017s-biggest-board-game-is-astoundingly-good/2/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-09-03"
    notes: "HTTP 200 dynamic HTML receipt; final URL redirected to the article root; cited monster-AI passage remained present."
  - id: "src-011"
    title: "Official FAQ for Gloomhaven (2025) / Second Edition"
    url: "https://cephalofairgames.github.io/gloomhaven2e-faq/"
    kind: faq
    provenance: official
    retrieved_at: "2026-09-03"
    notes: "Current Second Edition FAQ, retained as an edition-bound authority and not backdated into the 2017 rules scope."
  - id: "src-012"
    title: "Gloomhaven (2025) Rulebook — Cephalofair-linked Google Drive PDF"
    url: "https://drive.google.com/file/d/16TmmCKa6zVVObj2qM-vIj9RcEAC3nfMT/view?usp=sharing"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-09-03"
    notes: "Official Cephalofair-linked static 74-page PDF; HTTP 200, 51,013,512 bytes, SHA-256 a8bb3b2e3d875f325d12da48ca4c6fd7807876b3b0353bf4052a74678d339f27. OCR inspection found the card-driven and shuffle-icon architecture, but the 2025/Second Edition artifact is not backdated into this 2017 scope."
confidence: medium
status: needs_followup
---

## Scout objective

Existing-game maintenance pass for the wishlist request: document Gloomhaven's monster ability-card rules, shuffle-icon reshuffle rule, and reception of its card-driven enemy AI within the 2017 base-game scope.

## Why this game

- Wishlist entry consumed: the physical-tabletop request for "Gloomhaven monster ability decks"; Quarriors / Dice Masters remains excluded by standing order.
- BGG signal: BGG Data reported rating 8.6, overall rank #3, and weight 3.9 at retrieval.
- Mechanics relevance: persistent campaign, distinct mercenary roles, tactical cardplay, cooperative scenarios, and progression.
- RPG fit: BGG pitches strategic monster combat and legacy quests; Dized describes players as wandering mercenaries with distinct skills, experience, loot, new locations, and branching story decisions.
- Deckbuilder exclusion: no deck-building, deckbuilder, or deck-construction mechanism was identified in the retrieved metadata or descriptions. The card hand is a tactical action system, not a deck-construction core loop.

## Source search path

- BoardGameGeek: identified through search; direct page blocked.
- BGG-facing score mirror: retrieved successfully.
- Publisher page: confirmed and retrieved as src-008; it links the official Gloomhaven resources and edition-bound materials.
- 2017 English base-game rulebook: located and inspected as the static PDF receipt src-009; the retrieved artifact is secondary provenance.
- Structured rules: Dized retrieved.
- Review sources: The Opinionated Gamers, Co-op Board Games, and Ars Technica (src-010).

## Rulebook extraction status

- 2017 base-game rulebook found: yes, as a static 52-page third-party mirror; exact bytes were verified and the PDF text layer was inspected.
- File inspected: yes; PDF pages 10 and 32 support the monster ability-card and end-of-round claims.
- Page count/version/date if known: 52 pages; 2017 English edition boundary from the mirror record.
- Text extraction quality: machine-readable PDF text; the mirror is secondary provenance, while the current Cephalofair support page and its separately identified 2025/Second Edition rulebook remain edition-bound authorities.

## Documents written

- `games/gloomhaven/index.okf.md`
- `games/gloomhaven/sources.okf.md`
- `games/gloomhaven/rules/overview.okf.md`
- `games/gloomhaven/rules/setup.okf.md`
- `games/gloomhaven/rules/turn-structure.okf.md`
- `games/gloomhaven/rules/actions.okf.md`
- `games/gloomhaven/rules/scoring-endgame.okf.md`
- `games/gloomhaven/rules/edge-cases-faq.okf.md`
- `games/gloomhaven/reception/reviews.okf.md`
- `games/gloomhaven/reception/better-if.okf.md`

## Run validation

- `WISHLIST.md` entry checked off: yes — the Gloomhaven monster ability-decks request was consumed by this maintenance pass.
- `node scripts/generate-index.mjs` run after writing docs: passed; index fresh.
- `node scripts/validate-okf.mjs` exit 0 before push: passed; 2,798 files clean.
- 2026-08-31 (librarian): the earlier scout-state observations were superseded; this game is promoted canonical corpus, and `node scripts/generate-index.mjs` plus `node scripts/validate-okf.mjs` both ran green in the 2026-08-31 librarian pass.

## Monster ability-deck findings

- Claim: At the start of each round, one card is played for each monster type currently on the map from its respective monster ability deck; all monsters in that type use the same card.
  Source: src-009
  Evidence: 2017 rulebook PDF page 10, "Monster Ability Cards," says one card is played for each monster type from its respective deck and that the card determines the abilities for every monster of that type.
  Confidence: high

- Claim: A card's shuffle icon returns that monster type's discarded ability cards to its deck at end of round, while abilities absent from the card are not performed.
  Source: src-009
  Evidence: 2017 rulebook PDF pages 10 and 32, monster ability-card explanation and End of Round procedure.
  Confidence: high

- Claim: A reviewer found the card-driven monster AI quick to administer but unpredictable enough to demand plan changes.
  Source: src-010
  Evidence: Ars Technica's monster-AI passage calls it "quick and painless" and describes new plans on the fly.
  Confidence: high

The per-set ability-card count remains unknown in this record: the retrieved 2017 rulebook pages used here do not state it. The 2025/Second Edition official FAQ and rulebook were retrieved as current authorities but are not silently merged into this 2017 base-game scope. Their existence resolves the earlier source-location uncertainty, not the edition boundary.

## Strongest design lessons

Persistent campaign state becomes meaningful when role identity, tactical decisions, rewards, and branching consequences all point toward the same long arc.

## Strongest player complaints

The sourced friction is physical and temporal: setup, teardown, long scenarios, and a campaign measured in roughly 150–200 hours.

## This game would be better if...

It reduced state-restoration and setup burden without weakening the campaign's sense of consequence.

## Open questions

Verify exact BGG metadata directly and, if a future pass needs publisher-hosted first-edition bytes rather than the retrieved mirror, locate an edition-matched Cephalofair-hosted or authorized archive copy. The 2017 source is secondary provenance; its cited pages support the card-driven and shuffle-icon rules but do not establish an exact per-set card count.