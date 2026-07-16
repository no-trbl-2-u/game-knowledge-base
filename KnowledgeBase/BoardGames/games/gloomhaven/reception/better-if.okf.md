---
okf_version: 0.2
type: better_if
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
better_if_labels: [onboarding, setup-teardown, downtime, campaign-progression]
sources:
  - id: "src-003"
    title: "Gloomhaven — Dized Rules introduction"
    url: "https://rules.dized.com/game/I7lEsCGOS2-zgol-ZRNf3g/gloomhaven"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Persistent campaign and branching-story testimony."
  - id: "src-007"
    title: "Gloomhaven — Co-op Board Games review"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/gloomhaven/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Setup, teardown, playtime, and campaign-scale testimony."
confidence: medium
status: verified
---

## Better-if opportunities

- Claim: Setup-teardown could be improved with stronger storage and state-preservation support.
  Source: src-007
  Evidence: Review estimates 15–20 minutes setup and 10–15 minutes teardown.
  Confidence: medium
  Label: setup-teardown

- Claim: Onboarding could be improved by staging the game's heavy rules and campaign commitment.
  Source: src-007
  Evidence: The review's estimated 150–200 hour campaign and lengthy scenario sessions imply a substantial commitment.
  Confidence: low
  Label: onboarding

- Claim: Campaign progression benefits from tools that preserve state between sessions.
  Source: src-003
  Evidence: Dized describes persistent play, new locations, and branching story decisions.
  Confidence: medium
  Label: campaign-progression