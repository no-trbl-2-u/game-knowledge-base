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
  - id: "src-007"
    title: "Oathsworn: Into the Deepwood — Encounter Rule Book (official, English)"
    url: "https://drive.google.com/file/d/1C20PYk17Mh_cAAQxgKNl1JjcsmTmZBlQ/view?usp=sharing"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-09-15"
    notes: "2026-09-15 audit pass, alternate_source retry: located via Shadowborne Games' official 'Printable Files' resources page (shadowborne-games.com/pages/resources). HTTP 200 via drive.usercontent.google.com; application/pdf; 125,239,772 bytes; 36 pages; SHA-256 1805c3d05a34a01b1d882524dab064c5c756a60754f81f6f25a713d5e0b7fddd. Includes an official 'Frequently Asked Questions' appendix on page 33."
confidence: high
status: verified
---

## Summary

The 2026-09-15 audit pass resolved this doc's `needs_followup` status: the official Encounter Rule Book (retrieved directly from Shadowborne Games' resources page) includes a page-33 "Frequently Asked Questions" appendix plus the core combat-resolution rules, replacing the earlier BGG-lead-only stub with page-cited official claims.

## Source-backed facts

- Claim: Combat is resolved by drawing Might Cards (or rolling equivalent Might Dice); drawing two or more blanks on an attack causes the entire attack to miss with no damage or secondary effects, otherwise damage equals the sum of drawn card values.
  Source: src-007
  Evidence: Encounter Rule Book page 13, "If you draw two or more blanks the entire attack misses and no damage is done and no additional effects of the attack take place (such as knockback or bleed). If the attack does not miss, the sum of the values on all Might Cards drawn is the damage dealt."
  Confidence: high
- Claim: Cards and dice are fully interchangeable resolution methods chosen per player, and can even be mixed by the same player, but the combination must be fixed before drawing/rolling for a given draw; the rulebook is written from the cards perspective throughout.
  Source: src-007
  Evidence: Encounter Rule Book page 3, "Included in the game is a set of Might Dice that can, at any time, be used instead of drawing cards from the Might Decks... You can even combine the use of cards and dice at the same time, but you must decide on the combination to use before you draw any cards or roll any dice."
  Confidence: high
- Claim: A "critical" symbol on a drawn Might Card triggers drawing another card of the same color and adding its value, and this chains if the new card is also a critical; a blank drawn as part of a critical chain does not cause the attack to miss.
  Source: src-007
  Evidence: Encounter Rule Book page 13, "For each card you draw with a critical symbol, draw another card of the same color and add its value to your total. If you draw another critical symbol with the extra card, repeat this process. Any blanks drawn when drawing extra cards from criticals do not cause an attack to miss."
  Confidence: high
- Claim: The Determination Rule grants a player who misses an attack (after redraws) one Combat Token of their choice and refunds all Redraw, Empowered x3, and Lethality Tokens spent on that attack.
  Source: src-007
  Evidence: Encounter Rule Book page 13, "If, after redraws, one of your attacks misses (draws 2 or more blanks), you gain any one Combat Token of your choice... In addition, you regain all Redraw, Empowered x3 and Lethality Tokens you spent during the attack (if any)."
  Confidence: high
- Claim: An Encounter ends when either all of the enemy's HP dice are removed from the Encounter Board (a win) or all Oathsworn are reduced to 0 HP and go unconscious (a loss); if both happen simultaneously, the Encounter counts as defeated.
  Source: src-007
  Evidence: Encounter Rule Book page 24, "An Encounter ends in one of two ways. Either the Encounter is defeated by removing all their HP dice from the Encounter Board or the Free Company is defeated when all Oathsworn go unconscious. If both events happen at the same time, the Encounter is defeated."
  Confidence: high
- Claim: A failed Encounter can be replayed rather than being a permanent loss; each unconscious Oathsworn marks Knockout Track ticks (modified by difficulty), grants an Injury Card, and costs 1-2 equipped items, while a replay restores full HP, refunds three Combat Tokens plus Permanent Tokens, and returns killed Allies to the deck instead of archiving them.
  Source: src-007
  Evidence: Encounter Rule Book page 24, "If you fail to defeat the Encounter (all Oathsworn go unconscious), you can either move on, or replay it... To replay an Encounter... Any Allies you started the Encounter with that were killed are returned to your Ally deck and not archived. All Oathsworn start with maximum Hit Points... gain any 3 Combat Tokens of their choice and also their Permanent Tokens."; "For each unconscious... Oathsworn, mark one tick on the Knockout Track... All unconscious Oathsworn gain an Injury Card... All Oathsworn lose 1 item they equipped in the Encounter (2 if they went unconscious)."
  Confidence: high
- Claim: Official FAQ: a card effect targeting "a friendly character" includes the character performing the ability itself.
  Source: src-007
  Evidence: Encounter Rule Book page 33, "Q: When a card states to target a friendly character, does that include the character performing the ability? A: Yes, this is covered under (p8 Encounter Rule Book 'Terminology')."
  Confidence: high
- Claim: Official FAQ: knocked-back characters resolve simultaneously and do not collide with each other unless one stops early and another catches up; "Move X" abilities allow moving up to X spaces (not exactly X, unless stated), and forced movement from enemy Stage Cards still moves the full distance even if the target is crippled.
  Source: src-007
  Evidence: Encounter Rule Book page 33, "When characters are knocked back they do so simultaneously. This means they will not collide with eachother unless one of them stops prematurely and the other catches up to them."; "Move X allows you to move up to X unless it says Move EXACTLY X. Enemy stage cards that cause the Oathsworn to move will cause the Oathsworn to move the full distance even if crippled."
  Confidence: high
- Claim: Official FAQ: a Stage Card always overrides a conflicting Special Rules Board entry, but does not override reaction rules unless it explicitly says so; only the specific boss that was damaged focuses on a die-breaker, and breaking an Encounter's last HP die ends the Encounter immediately without triggering that die's reaction or requiring remaining minions to be killed.
  Source: src-007
  Evidence: Encounter Rule Book page 33, "Q. Does a Stage Card supercede any special rules on the special rules board if there appears to be a conflict? A. Yes."; "Q. Does the Stage Card or Special Rules Board supercede the reaction rules? A. No, unless it states specifically otherwise."; "Q. When I break the last HP Die on an encounter, does it draw a reaction and do I have to kill all the minions? A. No, the encounter ends immediately and you do not have to kill all minions either."
  Confidence: high
- Claim: Official FAQ: Might Decks reset at the end of each Story or Encounter part, when a deck runs out mid-play, when a 0-cooldown card forces a reset, or when a companion spends a Combat Token specifically to reset it; all Combat Tokens are lost at the end of an Encounter (replaced next chapter via permanent tokens/choices).
  Source: src-007
  Evidence: Encounter Rule Book page 33, "Q: When do you reset the Might Decks? A. At the end of each Story or Encounter Part, when the cards run out, when the deck is forced to be reset by any 0 cooldown card, or when a companion spends a combat token specifically to do so."; "Q. When the Encounter ends, do I lose all combat tokens? A. Yes, then you will gain more from permanent token/choices in the next chapter."
  Confidence: high

## Open questions

- Confirm whether the Story Rule Book (also retrieved this pass as src-008 in `sources.okf.md`) contains additional edge-case rulings not covered by the Encounter Rule Book's FAQ appendix; only the Encounter book's page-33 FAQ was mined for this pass.
