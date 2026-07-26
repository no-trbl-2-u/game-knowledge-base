---
okf_version: 0.2
type: sources
game:
  title: "Bloodborne: The Card Game"
  slug: "bloodborne-the-card-game"
  bgg_id: 195856
  publisher: "CMON"
  year: 2016
  players:
    min: 3
    max: 5
  complexity: moderate
  weight: 2.06
  edition: "base/standalone release"
scope: "selection dossier provenance"
mechanics: ["hand-management", "push-your-luck", "semi-cooperative-game", "set-collection", "simultaneous-action-selection", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "BoardGameGeek \u2014 Bloodborne: The Card Game"
    url: "https://boardgamegeek.com/boardgame/195856"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-26"
    notes: "Identity and mechanic evidence."
  - id: "src-002"
    title: "CMON \u2014 official product or rules page"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-26"
    notes: "Identity and mechanic evidence."
  - id: "src-003"
    title: "BGG ranking snapshot mirror"
    url: "https://raw.githubusercontent.com/andyphuawc114/boardgamewhiz-streamlit/e4b8c97d29893a8d0f1cedc02753f10d5dc6130d/dataset/df_weights.csv"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-26"
    notes: "Rating snapshot used for this batch ordering."
confidence: high
status: verified
last_verified: "2026-07-26"
summary: "Primary identity, publisher, and ranking sources for Bloodborne: The Card Game."
---

# Sources — Bloodborne: The Card Game

| ID | Kind | Source | Retrieved |
|---|---|---|---|
| src-001 | community_database | [BoardGameGeek — Bloodborne: The Card Game](https://boardgamegeek.com/boardgame/195856) | 2026-07-26 |
| src-002 | publisher | [CMON — official product or rules page](https://www.cmon.com/product/bloodborne-the-card-game/) | 2026-07-26 |
| src-003 | dataset | [BGG ranking snapshot mirror](https://raw.githubusercontent.com/andyphuawc114/boardgamewhiz-streamlit/e4b8c97d29893a8d0f1cedc02753f10d5dc6130d/dataset/df_weights.csv) | 2026-07-26 |

## Provenance judgment

- **Source:** src-001, src-002
- **Evidence:** Publisher and BGG identity agree on the title, release family, and core premise.
- **Confidence:** high

- **Source:** src-003
- **Evidence:** Rating figures are volatile community telemetry. This dossier records the snapshot signal used for selection, not an eternal score.
- **Confidence:** high for the cited snapshot; medium for present-day ordering
