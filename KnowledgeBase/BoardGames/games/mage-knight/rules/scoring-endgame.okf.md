---
okf_version: 0.1
type: rule_category
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  edition: "English base game / rules updated March 2012"
scope: "base game"
sources:
  - id: "src-002"
    title: "Mage Knight — WizKids product page"
    url: "https://wizkids.com/mage-knight"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official mode/objective description."
  - id: "src-006"
    title: "How to play Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary round-end and fame references."
confidence: medium
status: needs_followup
---

## Summary

Scoring and endgame are scenario-dependent. Across scenarios, players accumulate fame/reputation and pursue scenario objectives such as finding or conquering cities. Rounds end through Deed-deck exhaustion pressure; scenarios may also impose a round limit.

## Source-backed facts

- Claim: WizKids describes victory-relevant objectives as building armies, defeating enemies, and conquering cities.
  Source: src-002
  Evidence: "Build your armies, defeat bands of marauding enemies, and eventually conquer cities".
  Confidence: high
- Claim: The game supports both group win/loss and competitive claims depending on scenario mode.
  Source: src-002
  Evidence: "play both competitively or cooperatively"; BGG extract: "In cooperative scenarios, the players win or lose as a group."
  Confidence: high
- Claim: The first scenario is limited to three rounds and has the goal of finding the city.
  Source: src-006
  Evidence: Extract: "The first scenario is limited to three Rounds... fulfill its goal (to find the City) before the end of the third Round."
  Confidence: medium
- Claim: Fame increases when specific scenario/rules rewards occur, including first-scenario exploration.
  Source: src-007
  Evidence: Extract: first scenario special rule gives "1 Fame" for each revealed tile.
  Confidence: medium

## Rules / Mechanics

Endgame is not one universal VP race in the Dune/Ark Nova sense. It is a scenario verdict. The design separates ongoing advancement currency (fame, reputation, deck/skill/unit growth) from mission success.

## Player friction

Scenario-dependent scoring can create lookup friction and misplayed sessions if the goal and round limit are not reiterated on a scenario card/player aid.

## Design implications for SomberSoft

- Scenario success should be summarized in one invariant panel: objective, round limit, loss condition, scoring/tiebreak.
- Advancement and victory can be separate if the advancement itself makes the final assault emotionally legible.

## Open questions

- Extract the official Scenario Book text for base scenarios and build a scenario matrix.
