---
okf_version: 0.2
type: rule_category
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
sources:
  - id: "src-008"
    title: "Oathsworn: Into the Deepwood — Story Rule Book"
    url: "https://drive.google.com/open?id=1eUmHux5TOpkzpGDTyn1epZWFoK2jM-8m"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-25"
    notes: "Official rulebook; Story-part FAQ (p.17). See sources.okf.md for the full technical receipt."
  - id: "src-009"
    title: "Oathsworn: Into the Deepwood — Encounter Rule Book"
    url: "https://drive.google.com/open?id=1C20PYk17Mh_cAAQxgKNl1JjcsmTmZBlQ"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-25"
    notes: "Official rulebook; Choosing a Target, Golden Rule, Breaking a Location, and the Encounter-part FAQ (p.33). See sources.okf.md for the full technical receipt."
confidence: high
status: verified
---

## Open questions

2026-11-25 (librarian): the official rulebooks' own printed FAQ sections and edge-case rules are now retrieved and summarized below, resolving every item this doc previously left open (exploding-dice/critical limits, card-versus-dice resolution, defeated-character handling, enemy activation edge cases). No further followup remains open for this doc; the BGG-access gap tracked on scout-report.okf.md is unrelated to rules content and does not block this doc's `verified` status.

## Source-backed facts

- Claim: There is no fixed cap on a critical chain — each critical symbol drawn triggers one more same-color card/die, and that process repeats for as long as criticals keep appearing; a player may decline to draw further on a critical if they choose not to.
  Source: src-009
  Evidence: "If you draw another critical symbol with the extra card, repeat this process... You do not have to draw new cards on a critical if you do not wish to." (Encounter Rule Book p.13).
  Confidence: high

- Claim: Cards and dice resolve identically everywhere in the rules; a player chooses cards, dice, or a mix for any given draw before drawing, and is not locked into that choice for the rest of the game.
  Source: src-008
  Evidence: "It is up to each player to decide whether they want to use cards or dice, and they are not tied to that choice for the whole game." (Story Rule Book p.3).
  Confidence: high

- Claim: Defeated-character handling differs by mode: in standard play an Oathsworn reduced to 0 HP is merely "unconscious" (removed from the board for that Encounter, replaced at the controlling player's next turn by a combat Ally if one is available, and recovers fully at the next chapter); under the Hardcore variant, an Oathsworn reduced to 0 HP is killed outright, can never be played again, and must be replaced via Quick Leveling, with the lost class recorded on the Free Company Sheet's Hardcore track.
  Source: src-008, src-009
  Evidence: "Oathsworn who have been killed may not be played again in this campaign." (Story Rule Book p.9); unconscious-Oathsworn effects and Ally swap-in procedure (Encounter Rule Book pp.17, 24).
  Confidence: high

- Claim: Enemies choose their target by a fixed priority: (1) a location-breaker reaction target if the Stage Card was drawn as a reaction, (2) a target named on the Stage Card/Special Rules Board, (3) otherwise the closest Oathsworn in line of sight by movement distance, with ties broken first by the Mob keyword (prefer an Oathsworn already adjacent to another Mob enemy) and then by the "North then West" rule; if no valid target exists, the enemy instead moves as far as possible toward the closest Oathsworn.
  Source: src-009
  Evidence: Choosing a Target, six-step procedure (Encounter Rule Book p.19).
  Confidence: high

- Claim: On a conflict, a Stage Card's instructions always override the Special Rules Board; reaction rules (triggered when any non-final HP die is removed from a boss) apply regardless of the Stage Card or Special Rules Board unless one explicitly states otherwise; removing a boss's final HP die ends the Encounter immediately without a reaction and without requiring minions to be cleared.
  Source: src-009
  Evidence: official FAQ, "Does a Stage Card supercede any special rules on the special rules board...? A. Yes."; "When I break the last HP Die...does it draw a reaction...? A. No, the encounter ends immediately and you do not have to kill all minions either." (Encounter Rule Book p.33).
  Confidence: high
