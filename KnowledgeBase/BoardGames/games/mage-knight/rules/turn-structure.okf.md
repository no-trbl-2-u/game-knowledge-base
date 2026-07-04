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
  - id: "src-003"
    title: "MK_rulebook_ENG_searchable-mar2012.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official rulebook link; text not directly extracted."
  - id: "src-006"
    title: "How to play Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary turn/round summary."
confidence: medium
status: needs_followup
---

## Summary

Rounds alternate Day/Night. At round start, players prepare and choose tactics, which set turn order. On a turn a player either takes a regular turn or rests. A regular turn consists chiefly of movement first, then one action at the destination or no action.

## Source-backed facts

- Claim: Tactic cards determine player order for the round.
  Source: src-006
  Evidence: Extract: "Tactics determine the order of play during the Round" and "Each Tactic card has a large number... the lowest number going first."
  Confidence: medium
- Claim: A regular turn has two parts: movement, then one action depending on the final space.
  Source: src-006
  Evidence: Extract: "Each Regular turn has two parts. First, you may move... Then... you may perform one Action".
  Confidence: medium
- Claim: A player may announce end of round when the Deed deck is empty; other players get one last turn.
  Source: src-006
  Evidence: Extract: "If a player has no cards in his Deed deck... he may announce the End of the Round... Each other player then plays one last turn".
  Confidence: medium
- Claim: At turn end, played cards are discarded, mana tokens return, and the player draws to hand limit.
  Source: src-006
  Evidence: Extract lists discarding played cards, returning mana tokens, and drawing "up to his Hand limit".
  Confidence: medium

## Rules / Mechanics

Turn timing creates a knife-edge:

- Movement before action prevents perfect tactical shopping after combat.
- End-round announcement pressures deck pacing.
- Tactics compress initiative selection and special benefit selection into one choice.
- Draw-up at end gives future-turn planning, not full-round scripting.

## Player friction

Players may stall because the turn is a puzzle of current hand, mana source, terrain costs, site opportunities, enemy risk, and future deck exhaustion.

## Design implications for SomberSoft

- A strong turn can be simple in outline and monstrous in decision depth.
- End-of-round triggers tied to deck exhaustion are clean clocks for solo and multiplayer alike.
- Letting the next player begin while cleanup finishes is a practical downtime mitigation worth stealing.

## Open questions

- Confirm official text for simultaneous cleanup/next-player handoff and Day/Night tactic replacement.
