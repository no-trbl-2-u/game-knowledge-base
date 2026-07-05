---
okf_version: 0.2
type: rule_category
game:
  title: "Ark Nova"
  slug: "ark-nova"
  bgg_id: 342942
  publisher: "Feuerland Spiele / Capstone Games"
  year: 2021
  edition: "English base game, Capstone current web resources"
scope: "base game"
mechanics: [action-selection, hand-management, tableau-building, grid-coverage, tile-placement, set-collection, end-game-bonuses, income, solo-solitaire-game, variable-setup]
sources:
  - id: "src-003"
    title: "Ark Nova Rulebook PDF"
    url: "https://cdn.shopify.com/s/files/1/0947/3907/1278/files/Ark-Nova-Rulebook.pdf?v=1754428544"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Gameplay, turn, action-card row, break pages."
confidence: high
status: verified
---

## Summary

Ark Nova has no formal rounds. Players take clockwise turns, one action per turn, until a break interrupts play or the endgame is triggered.

## Source-backed facts

- Claim: Ark Nova does not use formal rounds.
  Source: src-003
  Evidence: Rulebook p. 6: "Ark Nova does not play in formal rounds; instead, players simply take turns... one turn at a time".
  Confidence: high
- Claim: On a turn, choose one action card, use it at its slot strength, then move it to slot 1 and shift intervening cards.
  Source: src-003
  Evidence: Rulebook p. 8: "choose one of your Action cards"; "perform the action... with a strength"; "place the chosen Action card in the now-empty slot 1".
  Confidence: high
- Claim: X-tokens can increase action strength before the action is performed, and tokens gained during the action cannot be used for that same action.
  Source: src-003
  Evidence: Rulebook p. 8: "You may use X-tokens to increase the strength"; "You set the strength... before you perform it"; "can't use X-tokens gained while performing".
  Confidence: high
- Claim: Effects saying "after finishing" happen after completing the action and moving the action cards.
  Source: src-003
  Evidence: Rulebook p. 8: "complete your action, including moving the Action cards, before executing the effect."
  Confidence: high
- Claim: A break happens after the current turn when the Break token reaches the last space.
  Source: src-003
  Evidence: Rulebook p. 18: "If you trigger the break, complete your current turn... then all players perform" break steps.
  Confidence: high

## Rules / Mechanics

Turn ritual:
1. Select one of five action cards.
2. Optionally commit X-tokens to action strength before resolution.
3. Resolve the chosen action.
4. Move the used card to slot 1 and shift cards left of the gap rightward.
5. Resolve "after finishing" effects.
6. Check break/endgame conditions where applicable.

Break ritual includes hand-limit discard, clearing tokens from action cards, association board maintenance, worker return, income, and resetting the Break token.

## Player friction

Timing clauses matter. New players may mis-time X-tokens, after-finishing effects, display refill, and break-triggered endgame checks.

## Praised design

The action row turns time into geography. It makes delay, impatience, and opportunity cost visible.

## Better-if opportunities

- rules ambiguity: timing window reference card.
- turn pacing: action preview and auto-shift UI in digital adaptation.
- downtime: simultaneous planning aids during other players' turns.

## Design implications for SomberSoft

Use physical position to encode action cooldown. It creates tactics without adding upkeep counters.

## Open questions

- Does repeated access to low-strength actions create viable rapid-cycle strategies, or is waiting generally forced?
