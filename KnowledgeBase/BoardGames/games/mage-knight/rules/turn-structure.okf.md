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
  - id: "src-003"
    title: "MK_rulebook_ENG_searchable-mar2012.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Official rulebook; WizKids host 500s, text extracted from Wayback Machine snapshot 2026-07-08."
  - id: "src-006"
    title: "How to play Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary turn/round summary."
confidence: high
status: verified
---

## Summary

Rounds alternate Day/Night. At round start, players prepare and choose tactics, which set turn order. On a turn a player either takes a regular turn or rests. A regular turn consists chiefly of movement first, then one action at the destination or no action. Verified against the official rulebook (via 2026-07-08 Wayback Machine retrieval).

## Source-backed facts

- Claim: Tactic cards determine player order for the round.
  Source: src-003
  Evidence: Rulebook p.4: "Players choose Tactic cards for this Round... The player with the lowest Fame picks first... Rearrange the Round Order tokens according to the Tactic number of each player, such that the lowest Tactic number is on top (first)."
  Confidence: high
- Claim: A regular turn has two voluntary parts: movement, then at most one action depending on the final space.
  Source: src-003
  Evidence: Rulebook p.5: "Playing a Regular turn has two voluntary parts: movement, and action... You may do only one action each turn (mandatory or voluntary). If you want to move and/or reveal new tiles, you must do it before taking an action."
  Confidence: high
- Claim: A player may announce end of round when the Deed deck is empty; other players get one last turn.
  Source: src-003
  Evidence: Rulebook p.4: "If a player's Deed deck is empty at the start of his turn, that player may announce the End of the Round instead of playing his turn. If he does, each other player takes one last turn and then the Round ends."
  Confidence: high
- Claim: At turn end, played cards are discarded, mana tokens return, and the player draws to hand limit.
  Source: src-003
  Evidence: Rulebook p.9, "End of the Turn": reroll/return mana dice to the Source; "Put all cards played this turn into your discard pile"; "Draw cards from your Deed deck, up to your Hand limit."
  Confidence: high
- Claim: If a player forfeits their turn (empty deck, empty hand, or round already ending), the turn ends immediately with no benefits, and resting is a distinct alternative to a regular turn (Standard Rest or Slow Recovery).
  Source: src-003
  Evidence: Rulebook p.5: "If you forfeit your turn, your turn ends immediately; you cannot even use the benefits of a map space you occupy"; "If you do not forfeit your turn, you have two options: playing a Regular turn, or Resting."
  Confidence: high

## Rules / Mechanics

Turn timing creates a knife-edge:

- Movement before action prevents perfect tactical shopping after combat.
- End-round announcement pressures deck pacing.
- Tactics compress initiative selection and special benefit selection into one choice.
- Draw-up at end gives future-turn planning, not full-round scripting.

## Player friction

Players may stall because the turn is a puzzle of current hand, mana source, terrain costs, site opportunities, enemy risk, and future deck exhaustion.

## Rules / Mechanics (confirmed)

Simultaneous cleanup/handoff (rulebook p.5): after finishing all voluntary actions, a player first returns/rerolls used mana dice to the Source, then may inform the next player to start their turn immediately while finalizing their own end-of-turn steps — "This speeds up the play of the game. However, if the next player insists, he may wait." Day/Night tactic replacement (rulebook p.4): at the start of each round, all Tactic cards from the previous round are collected and the appropriate Day or Night set is displayed fresh, since the Day/Night board flips each round.

## Retry notes
- 2026-07-08: Resolved. Official rulebook text retrieved via Wayback Machine snapshot (WizKids' own host still returns HTTP 500); page references added above.
