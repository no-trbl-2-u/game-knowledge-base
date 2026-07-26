---
okf_version: 0.2
type: sources
game:
  title: "Battlestar Galactica: The Board Game"
  slug: "battlestar-galactica-the-board-game"
  bgg_id: 37111
  publisher: "Fantasy Flight Games"
  year: 2008
  players:
    min: 3
    max: 6
  complexity: expert
  weight: 3.25
  edition: "base/standalone release"
scope: "selection dossier provenance"
mechanics: ["cooperative-game", "hand-management", "hidden-information", "negotiation", "semi-cooperative-game", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "BoardGameGeek \u2014 Battlestar Galactica: The Board Game"
    url: "https://boardgamegeek.com/boardgame/37111"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-26"
    notes: "Identity and mechanic evidence."
  - id: "src-002"
    title: "Fantasy Flight Games \u2014 official product or rules page"
    url: "https://www.fantasyflightgames.com/en/products/battlestar-galactica/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-26"
    notes: "Identity and mechanic evidence."
  - id: "src-003"
    title: "BGG ranking snapshot mirror"
    url: "https://raw.githubusercontent.com/mweuro/bgg/main/PowerBI/bgg.csv"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-26"
    notes: "Rating snapshot used for this batch ordering."
confidence: high
status: verified
last_verified: "2026-07-26"
summary: "Primary identity, publisher, and ranking sources for Battlestar Galactica: The Board Game."
---

# Sources — Battlestar Galactica: The Board Game

| ID | Kind | Source | Retrieved |
|---|---|---|---|
| src-001 | community_database | [BoardGameGeek — Battlestar Galactica: The Board Game](https://boardgamegeek.com/boardgame/37111) | 2026-07-26 |
| src-002 | publisher | [Fantasy Flight Games — official product or rules page](https://www.fantasyflightgames.com/en/products/battlestar-galactica/) | 2026-07-26 |
| src-003 | dataset | [BGG ranking snapshot mirror](https://raw.githubusercontent.com/mweuro/bgg/main/PowerBI/bgg.csv) | 2026-07-26 |

## Provenance judgment

- **Source:** src-001, src-002
- **Evidence:** Publisher and BGG identity agree on the title, release family, and core premise.
- **Confidence:** high

- **Source:** src-003
- **Evidence:** Rating figures are volatile community telemetry. This dossier records the snapshot signal used for selection, not an eternal score.
- **Confidence:** high for the cited snapshot; medium for present-day ordering
