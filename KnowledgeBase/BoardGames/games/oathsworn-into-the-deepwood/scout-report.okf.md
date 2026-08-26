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
    notes: "Direct BGG page and XML endpoint were inaccessible during this run; retry BGG files/forums or a publisher rulebook download. Retried 2026-08-26 (librarian): BGG page still HTTP 403, XML API still HTTP 401, and the BGG files-listing page also 403 — BGG itself remains unreachable. Partially resolved via alternate route instead: the publisher's resources page (src-006) links official Story/Encounter rulebook PDFs (Google Drive, sign-in gated so full text not yet extracted), and a third-party mirror (src-007) exposes readable rulebook text used for turn-structure claims below. Rulebook recovery is no longer fully open; BGG metadata verification itself remains blocked."
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
  - id: "src-006"
    title: "Oathsworn — Resources (Shadowborne Games)"
    url: "https://www.shadowborne-games.com/pages/resources"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-26"
    notes: "Found in the 2026-08-26 librarian pass. Lists official Story Rule Book and Encounter Rule Book downloads (English and German, Google Drive-hosted); Google Drive requires sign-in so full rulebook text was not extracted from this source directly."
  - id: "src-007"
    title: "Oathsworn: Into the Deepwood — rulebook mirror (Boardgamesbot)"
    url: "https://www.boardgamesbot.com/assets/games-library/oathsworn-into-the-deepwood/manual_eng.pdf"
    kind: rulebook_pdf
    provenance: community
    retrieved_at: "2026-08-26"
    notes: "Third-party mirror of the v1.3 (December 2023) English manual; used for turn-structure phase names/order below pending direct access to the official Google Drive copies (src-006)."
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

This Oathsworn: Into the Deepwood scout run wrote the standard document set: `index.okf.md`, `sources.okf.md`, the six `rules/*.okf.md` records (overview, setup, turn-structure, actions, scoring-endgame, edge-cases-faq), and both `reception/*.okf.md` records (reviews, better-if).

## Run validation

For this Oathsworn: Into the Deepwood scout run: no `WISHLIST.md` entry applied (wishlist was empty); `node scripts/generate-index.mjs` and `node scripts/validate-okf.mjs` status as of the original run is recorded as pending in this doc's history.

## Strongest design lessons

Persistent narrative state gains force when tactical combat and party identity reinforce the same campaign loop. A dual resolution system can let players choose between volatility and control.

## Strongest player complaints

The strongest sourced friction is initial complexity and the scale of the physical/narrative commitment. Setup time and downtime remain unmeasured here.

## This game would be better if...

The campaign introduced its rules and bookkeeping in guided layers, while making the dice-versus-card risk tradeoff explicit at the point of decision.

## Open questions

Recover the official rulebook, verify all BGG metadata directly, and replace secondary rule summaries with page/section citations.
