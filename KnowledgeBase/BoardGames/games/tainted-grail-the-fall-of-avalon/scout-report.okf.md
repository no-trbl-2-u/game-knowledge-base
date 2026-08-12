---
okf_version: 0.2
type: scout_report
game:
  title: "Tainted Grail: The Fall of Avalon"
  slug: "tainted-grail-the-fall-of-avalon"
  bgg_id: 264220
  publisher: "Awaken Realms"
  year: 2019
  weight: 3.36
  edition: "English base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, hand-management, point-to-point-movement, resource-management, variable-player-powers]
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/264220/tainted-grail-the-fall-of-avalon"
    failure: blocked
    fallback: "BGG search result and indexed review metadata"
    retry_needs: browser_fetch
    notes: "Recover current average, Geek Rating, rank, and mechanism list. Matches the systemic BGG block seen across this corpus (see marvel-champions-the-card-game/scout-report.okf.md notes); not individually retried this pass."
  - source_id: "src-004"
    url: "https://awakenrealms.com/"
    failure: other
    fallback: "Official Kickstarter campaign page"
    retry_needs: alternate_source
    notes: "Recover the exact base-game rulebook, FAQ, and errata assets. Retried 2026-08-12 (librarian pass) via WebFetch: the root page now returns content (previously `other`/inaccessible) but renders only the site name with no navigable links to game-specific rulebook, FAQ, or errata assets in the fetched snapshot — likely a JS-rendered page not fully captured by this tool. Still needs an alternate source (e.g. a direct product/support subpage URL) naming the exact rulebook/FAQ asset."
sources:
  - id: "src-001"
    title: "BoardGameGeek — Tainted Grail: The Fall of Avalon"
    url: "https://boardgamegeek.com/boardgame/264220/tainted-grail-the-fall-of-avalon"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-20"
    notes: "Discovery source; direct page blocked."
  - id: "src-002"
    title: "Awaken Realms — Tainted Grail Kickstarter"
    url: "https://www.kickstarter.com/projects/awakenrealms/tainted-grail-the-fall-of-avalon"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-20"
    notes: "Official campaign framing."
  - id: "src-003"
    title: "Tainted Grail: The Fall of Avalon quick review"
    url: "https://boardgamegeek.com/thread/3556352/tainted-grail-the-fall-of-fo"
    kind: review
    provenance: community
    retrieved_at: "2026-07-20"
    notes: "Review result; URL is a search-result lead and requires audit."
  - id: "src-004"
    title: "Awaken Realms support / rulebook lead"
    url: "https://awakenrealms.com/"
    kind: other
    provenance: official
    retrieved_at: "2026-07-20"
    notes: "Official domain; exact asset not recovered."
confidence: medium
status: needs_followup
---

## Scout objective

Select one high-scoring BGG RPG / role-playing board game not already present in the corpus, excluding deckbuilders, and capture rules, reception, and improvement signals.

## Why this game

- Wishlist entry: skipped. The topmost unchecked item is card-costing benchmarks, not an RPG / role-playing board game.
- Free choice: selected *Tainted Grail: The Fall of Avalon* as a high-ranked BGG RPG/campaign candidate not already present.
- BGG signal: BGG page 264220 was identified; exact live score/rank was blocked. The available indexed review metadata reports weight 3.36/5.
- RPG fit: official framing identifies a dark Arthurian adventure and survival cooperative game; campaign exploration and character progression are role-playing structures.
- Deckbuilder exclusion: no deck-building, deckbuilder, or deck-construction mechanism was used in selection; the recorded mechanics are campaign, cooperation, movement, hand management, resources, and variable powers.

## Source search path

- BoardGameGeek: page identified; direct HTML/API blocked.
- Publisher: official Kickstarter campaign recovered.
- Official rulebook: not recovered.
- Review/reception: BGG review result exposed weight and downtime metadata.

## Documents written

- `index.okf.md`, `sources.okf.md`, six `rules/*.okf.md`, `reception/reviews.okf.md`, `reception/better-if.okf.md`, and this report.

## Run validation

- Wishlist entry checked off: no; skipped because it does not match the RPG focus.
- `node scripts/generate-index.mjs`: pending until writing completes.
- `node scripts/validate-okf.mjs`: pending until writing completes.

## Strongest design lesson

A persistent campaign can make exploration and resource pressure carry character identity across sessions.

## Strongest player complaint

The available review metadata marks downtime high, a warning that narrative breadth can become table delay.

## This game would be better if...

The first chapter taught the survival and campaign vocabulary in a staged sequence before exposing the full narrative burden.

## Open questions

Current BGG score/rank, official rulebook, FAQ, errata, exact turn sequence, and a broader review sample.
