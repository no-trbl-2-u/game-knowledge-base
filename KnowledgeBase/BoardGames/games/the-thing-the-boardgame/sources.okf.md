---
okf_version: 0.2
type: sources
game:
  title: "The Thing: The Boardgame"
  slug: "the-thing-the-boardgame"
  bgg_id: 295293
  publisher: "Pendragon Game Studio"
  year: 2022
  players:
    min: 1
    max: 8
  complexity: expert
  weight: 2.96
  edition: "base/standalone release"
scope: "selection dossier provenance"
mechanics: ["action-selection", "cooperative-game", "hidden-information", "resource-management", "semi-cooperative-game", "simultaneous-action-selection", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "BoardGameGeek \u2014 The Thing: The Boardgame"
    url: "https://boardgamegeek.com/boardgame/295293"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-26"
    notes: "Identity and mechanic evidence."
  - id: "src-002"
    title: "Pendragon Game Studio \u2014 official product or rules page"
    url: "https://www.pendragongamestudio.com/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-26"
    notes: "Identity and mechanic evidence."
  - id: "src-003"
    title: "BGG ranking snapshot mirror"
    url: "https://raw.githubusercontent.com/RobertSteane/SQLBoardGameQueries/d78f0d782fc7530b4359e56d397c05980d2edf2d/BoardGameCollection.csv"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-26"
    notes: "Rating snapshot used for this batch ordering."
confidence: high
status: verified
last_verified: "2026-07-26"
summary: "Primary identity, publisher, and ranking sources for The Thing: The Boardgame."
---

# Sources — The Thing: The Boardgame

| ID | Kind | Source | Retrieved |
|---|---|---|---|
| src-001 | community_database | [BoardGameGeek — The Thing: The Boardgame](https://boardgamegeek.com/boardgame/295293) | 2026-07-26 |
| src-002 | publisher | [Pendragon Game Studio — official product or rules page](https://www.pendragongamestudio.com/) | 2026-07-26 |
| src-003 | dataset | [BGG ranking snapshot mirror](https://raw.githubusercontent.com/RobertSteane/SQLBoardGameQueries/d78f0d782fc7530b4359e56d397c05980d2edf2d/BoardGameCollection.csv) | 2026-07-26 |

## Provenance judgment

- **Source:** src-001, src-002
- **Evidence:** Publisher and BGG identity agree on the The Thing: The Boardgame title, release family, and core premise.
- **Confidence:** high

- **Source:** src-003
- **Evidence:** Rating figures are volatile community telemetry. This The Thing: The Boardgame dossier records the snapshot signal used for selection, not an eternal score.
- **Confidence:** high for the cited snapshot; medium for present-day ordering
