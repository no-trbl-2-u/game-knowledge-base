---
okf_version: 0.2
type: rule_category
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  edition: "English base game / rules updated March 2012"
scope: "base game"
mechanics: [deck-building, hand-management, card-play-conflict-resolution, modular-board, grid-movement, dice-rolling, cooperative-game, solo-solitaire-game, variable-player-powers, campaign-game]
sources:
  - id: "src-002"
    title: "Mage Knight — WizKids product page"
    url: "https://wizkids.com/mage-knight"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official mode/objective description."
  - id: "src-003"
    title: "MK_rulebook_ENG_searchable-mar2012.pdf"
    url: "https://web.archive.org/web/20201118050857/http://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Official rulebook; WizKids host 500s, text extracted from Wayback Machine snapshot 2026-07-08. Audit 2026-07-15: wizkidsgames.com host confirmed dead (ERR_TLS_CERT_ALTNAME_INVALID); url switched to the confirmed-live Wayback Machine snapshot (HTTP 200). See sources.okf.md src block for full remediation detail."
  - id: "src-004"
    title: "MK_walkthrough_ENG_searchable-mar2012.pdf"
    url: "https://web.archive.org/web/20201118050902/http://wizkidsgames.com/wp-content/uploads/mage/MK_walkthrough_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Official walkthrough; WizKids host 500s, text extracted from Wayback Machine snapshot 2026-07-08. Covers 'The First Reconnaissance' starting scenario and its Final Scoring achievements. Audit 2026-07-15: wizkidsgames.com host confirmed dead (ERR_TLS_CERT_ALTNAME_INVALID); url switched to the confirmed-live Wayback Machine snapshot (HTTP 200). See sources.okf.md src block for full remediation detail."
  - id: "src-006"
    title: "How to play Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary round-end and fame references."
  - id: "src-007"
    title: "Movement in Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/movement.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary fame-reward reference for first-scenario exploration."
confidence: high
status: verified
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
- Claim: The first scenario ("The First Reconnaissance") is limited to three Rounds, and ends when any player reveals a city tile — each player (including the revealer) then gets one final turn before the game concludes.
  Source: src-004
  Evidence: Walkthrough p.2: "The first scenario is limited to three Rounds, i.e. Day, Night and then Day. You should fulfill its goal (to find the City) before the end of the third Round."; walkthrough p.18: "The first scenario is almost over when the city tile is revealed. Each player (including the one who revealed the city) plays one more turn, and then the game is finished."
  Confidence: high
- Claim: In the first scenario only, players gain 1 Fame for each map tile they reveal; this reveal-Fame rule does not apply in other scenarios.
  Source: src-004
  Evidence: Walkthrough p.19, "No Fame for Revealing": "Note that the rule for receiving 1 Fame whenever you explore a new map tile is for the first scenario only. In the other scenarios, you have to really fight to get the Fame."
  Confidence: high
- Claim: At game end, players score extra Fame across five achievement categories (Greatest Knowledge, Greatest Loot, Greatest Leader, Greatest Conqueror, Greatest Adventurer) plus a Fame penalty for the Greatest Beating (most Wounds); the highest scorer in each category gets a bonus (ties reduce the bonus).
  Source: src-004
  Evidence: Walkthrough p.18-19: "The Greatest Knowledge... gets 3 extra Fame"; "The Greatest Loot... 3 extra Fame... (1 if tied)"; "The Greatest Leader... 3 extra Fame... (1 if tied)"; "The Greatest Conqueror... 3 extra Fame... (1 if tied)"; "The Greatest Adventurer... 3 extra Fame... (1 if tied)"; "The Greatest Beating... loses an additional 3 Fame... (-1 if tied...)".
  Confidence: high

## Rules / Mechanics

Endgame is not one universal VP race in the Dune/Ark Nova sense. It is a scenario verdict. The design separates ongoing advancement currency (fame, reputation, deck/skill/unit growth) from mission success.

## Player friction

Scenario-dependent scoring can create lookup friction and misplayed sessions if the goal and round limit are not reiterated on a scenario card/player aid.

## Open questions

- Extract the official Scenario Book text for the remaining base scenarios (beyond "The First Reconnaissance") and build a full scenario matrix.

## Retry notes
- 2026-07-08: Resolved for the starting scenario. Official rulebook/walkthrough text retrieved via Wayback Machine snapshot (WizKids' own host still returns HTTP 500); page references added above.
