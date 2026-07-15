---
okf_version: 0.2
type: rule_category
game:
  title: "Marvel Champions: The Card Game"
  slug: "marvel-champions-the-card-game"
  bgg_id: 285774
  publisher: "Fantasy Flight Games"
  year: 2019
  weight: null
  edition: "core game"
scope: "base game"
mechanics: [cooperative-game, deck-building, hand-management, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-003"
    title: "Marvel Champions Rules Reference v1.5"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/b6/30/b630ddfe-e745-435b-a284-572dd510e15d/mc_rulesreference_v15-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Audit 2026-07-15: extraction retried with pypdf (56 pages), succeeded. Attack (Player Action), Attack (Enemy Activation), Thwart, and Defend glossary entries are the cited sections."
confidence: high
status: verified
---

## Summary

Heroes/allies attack and thwart by exhausting to use their printed ATK/THW basic powers, or via triggered abilities explicitly labeled as an attack or thwart. Defense against an enemy attack is a single declared defender (hero or ally) whose DEF reduces incoming damage; an undefended attack hits the target player's identity directly.

## Source-backed facts

- Claim: A basic attack requires exhausting the character and deals damage equal to its printed ATK to an enemy; a character can only initiate one if there is an attackable enemy or the character is stunned.
  Source: src-003
  Evidence: "A hero or ally can use their basic attack power to attack an enemy. A character must exhaust to use this power. This deals damage equal to the character's ATK value to the enemy. A character can only initiate a basic attack if there is an enemy that can be attacked by that character or if that character is stunned." (p.8)
  Confidence: high
- Claim: A basic thwart requires exhausting the character and removes threat equal to its printed THW from a scheme; a character can only initiate one if there is threat to remove or the character is confused.
  Source: src-003
  Evidence: "A hero or ally can use their basic thwart power to thwart a scheme. A character must exhaust to use this power. This removes threat equal to the character's THW value from the scheme. A character can only initiate a basic thwart if there is a scheme with at least one threat for the character to remove or if that character is confused." (p.36)
  Confidence: high
- Claim: Only one character can defend a given enemy attack; a hero's basic defense exhausts the hero and reduces damage by its DEF before the remainder hits that hero, while an ally's defense absorbs all the attack's damage.
  Source: src-003
  Evidence: "Only one player at a time can defend against an enemy attack... A hero can use their basic defense power to defend against an enemy attack. A hero must exhaust to use this power. The amount of damage dealt by the attack is reduced by the hero's DEF value, and any remaining damage is dealt to that hero... An ally can exhaust to defend against an enemy attack. Damage from the attack is dealt to that ally." (p.13)
  Confidence: high
- Claim: An undefended enemy attack deals all its damage to the target player's identity, even if that identity is currently in alter-ego form.
  Source: src-003
  Evidence: "If no character defends against the attack, the attack is considered undefended. All damage from the attack is dealt to the target player's identity (even if that identity is in alter-ego form)." (p.8)
  Confidence: high
- Claim: "Action" is a triggered-ability type a player may use on their own turn, or offer to another player's turn, but only on cards they control or on encounter cards (never on another player's obligations).
  Source: src-003
  Evidence: "'Action' is a type of triggered ability. Players are permitted to trigger action abilities during their turn, or by request during other players' turns. Players can only trigger action abilities on cards they control or on encounter cards. Players cannot trigger action abilities on obligations in other players' play areas." (p.5)
  Confidence: high

## Open questions

- Form-change restrictions beyond "once per turn" (e.g. forced form changes from card effects) are covered under the "Form" glossary entry, not extracted this pass.