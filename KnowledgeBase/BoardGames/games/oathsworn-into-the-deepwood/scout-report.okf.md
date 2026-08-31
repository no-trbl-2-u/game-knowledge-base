---
okf_version: 0.2
type: scout_report
game:
  title: "Oathsworn: Into the Deepwood"
  slug: "oathsworn-into-the-deepwood"
  bgg_id: 251661
  publisher: "Shadowborne Games"
  year: 2022
  weight: 3.70
  edition: "base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, hand-management, point-to-point-movement, variable-player-powers]
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/251661/oathsworn-into-the-deepwood"
    failure: blocked
    fallback: "Used publisher page, review evidence, and BGG-facing statistics mirror."
    retry_needs: alternate_source
    notes: "Direct BGG page and XML endpoint were inaccessible during this run; retry BGG files/forums or a publisher rulebook download."
sources:
  - id: "src-001"
    title: "Oathsworn: Into the Deepwood — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/251661/oathsworn-into-the-deepwood"
    kind: bgg_page
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Discovery and follow-up lead."
  - id: "src-002"
    title: "Oathsworn — Shadowborne Games"
    url: "https://www.shadowborne-games.com/pages/oathsworn"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Official product identity and RPG/campaign fit."
  - id: "src-003"
    title: "Oathsworn: Into the Deepwood — BGG Data"
    url: "https://www.bggdata.co.za/game/251661/oathsworn-into-the-deepwood/"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Rating 8.8, BGG rank 62, weight 3.7 at retrieval."
  - id: "src-004"
    title: "Oathsworn Review — Meeple Mountain"
    url: "https://www.meeplemountain.com/reviews/oathsworn-into-the-deepwood/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Complexity, scale, and combat testimony."
  - id: "src-005"
    title: "Oathsworn Review — Tabletop Gaming"
    url: "https://www.tabletopgaming.co.uk/reviews/oathsworn-into-the-deepwood-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Campaign state and combat testimony."
confidence: medium
status: needs_followup
---

## Scout objective

Study one high-scoring RPG / role-playing board game for rules structure, reception, and better-if opportunities.

## Why this game

- Wishlist entry consumed: no — wishlist had no unchecked entries; free choice.
- BGG signal: BGG-facing data mirror reported rating 8.8, BGG rank #62, weight 3.7 at retrieval.
- Mechanics relevance: campaign progression, persistent party development, cooperative tactical combat, differentiated roles, and risk-managed resolution.
- Review/reception signal: reviewers praise scope and the dice/card combat choice while noting initial complexity.

## Focus-fit and exclusion check

- RPG identity evidence: publisher calls it an epic dark-fantasy campaign game; secondary descriptions identify narrative choices, a Free Company, and miniature combat encounters.
- Deckbuilder exclusion: no deck-building, deckbuilder, or deck-construction mechanism was identified in the retrieved BGG-facing metadata or source descriptions. Cards are described as one combat-resolution option, not as a deck-construction core loop.

## Source search path

- BoardGameGeek: page identified; direct retrieval blocked.
- Publisher page: retrieved successfully.
- Official rulebook: not located during this run.
- FAQ/errata: not located.
- Review sources: Meeple Mountain, Tabletop Gaming, Age of Miniatures.
- Forum/community sources: not used.

## Rulebook extraction status

- Official rulebook found: no.
- File inspected: no.
- Page count/version/date if known: unknown.
- Text extraction quality: not applicable; secondary summaries only.

## Documents written

- `games/oathsworn-into-the-deepwood/index.okf.md`
- `games/oathsworn-into-the-deepwood/sources.okf.md`
- `games/oathsworn-into-the-deepwood/rules/overview.okf.md`
- `games/oathsworn-into-the-deepwood/rules/setup.okf.md`
- `games/oathsworn-into-the-deepwood/rules/turn-structure.okf.md`
- `games/oathsworn-into-the-deepwood/rules/actions.okf.md`
- `games/oathsworn-into-the-deepwood/rules/scoring-endgame.okf.md`
- `games/oathsworn-into-the-deepwood/rules/edge-cases-faq.okf.md`
- `games/oathsworn-into-the-deepwood/reception/reviews.okf.md`
- `games/oathsworn-into-the-deepwood/reception/better-if.okf.md`

## Run validation

- `WISHLIST.md` entry checked off: n/a — wishlist empty.
- `node scripts/generate-index.mjs` run after writing docs: pending.
- `node scripts/validate-okf.mjs` exit 0 before push: pending.
- 2026-08-31 (librarian): the two `pending` lines above record the state at scout time only. Oathsworn: Into the Deepwood is promoted canonical corpus; `node scripts/generate-index.mjs` and `node scripts/validate-okf.mjs` both ran green in the 2026-08-31 librarian pass.

## Strongest design lessons

Persistent narrative state gains force when tactical combat and party identity reinforce the same campaign loop. A dual resolution system can let players choose between volatility and control.

## Strongest player complaints

The strongest sourced friction is initial complexity and the scale of the physical/narrative commitment. Setup time and downtime remain unmeasured here.

## This game would be better if...

The campaign introduced its rules and bookkeeping in guided layers, while making the dice-versus-card risk tradeoff explicit at the point of decision.

## Open questions

Recover the official rulebook, verify all BGG metadata directly, and replace secondary rule summaries with page/section citations.
