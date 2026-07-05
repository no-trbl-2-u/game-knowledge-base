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
    notes: "Action pages 9-18."
  - id: "src-006"
    title: "Ark Nova Icon Overview PDF"
    url: "https://cdn.shopify.com/s/files/1/0947/3907/1278/files/Ark-Nova-Icon-Overview.pdf?v=1754428545"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Icon meanings used by actions and cards."
confidence: high
status: verified
---

## Summary

The five core actions are Cards, Build, Animals, Association, and Sponsors. Any action card can also be used as the fallback X-token action.

## Source-backed facts

- Claim: Cards action advances the Break token two spaces, then draws cards from the deck or snaps; upgraded Cards can draw within reputation range.
  Source: src-003
  Evidence: Rulebook p. 9: "Advance the Break token 2 spaces. Then draw cards from the deck OR snap"; upgraded text: "draw cards from the deck or within reputation range OR snap".
  Confidence: high
- Claim: Build action constructs exactly one building up to action strength on side I; upgraded Build constructs multiple different buildings up to total size and unlocks Large Bird Aviary and Reptile House.
  Source: src-003
  Evidence: Rulebook p. 10: "Build exactly 1 building"; upgraded: "Build as many different buildings as you like" and "Newly available: Large Bird Aviary and Reptile House."
  Confidence: high
- Claim: Animals action plays Animal cards from hand; upgraded Animals may play within reputation range from the display and may increase reputation by 1 at strength at least 5.
  Source: src-003
  Evidence: Rulebook pp. 11, 13: "Play Animal cards from your hand"; "may play animal cards directly from the display"; "increase the reputation... by 1".
  Confidence: high
- Claim: Association action uses active workers to perform association tasks; upgraded Association can perform multiple different tasks and make one donation.
  Source: src-003
  Evidence: Rulebook pp. 14, 16: "Perform exactly one association task"; upgraded: "Perform one or more different association tasks. You may make one donation."
  Confidence: high
- Claim: Sponsors action plays Sponsor cards or advances Break and takes money; upgraded Sponsors can play multiple Sponsor cards.
  Source: src-003
  Evidence: Rulebook p. 17: "Play exactly 1 Sponsor card OR advance the Break token and take money"; upgraded: "Play one or more Sponsor cards".
  Confidence: high
- Claim: X-token fallback action takes one X-token and still cycles the chosen action card to slot 1.
  Source: src-003
  Evidence: Rulebook p. 18: "If you cannot or do not want to perform any of the 5 actions... take 1 X-token"; "select an Action card, move it to slot 1".
  Confidence: high

## Rules / Mechanics

Action lessons:
- Cards controls hand quality and market access, but also pressures the Break clock.
- Build creates spatial capacity and income infrastructure.
- Animals converts card prerequisites and money into appeal, icons, effects, and sometimes conservation/reputation.
- Association gates partnerships, universities, conservation support, and donations through worker placement.
- Sponsors provides unique buildings, passive/triggered effects, and money via Break movement.

## Player friction

The same card changes after upgrade. Players must remember which action side is active and how display costs/reputation range interact.

## Praised design

Each action is a subsystem but all share one timing chassis. Upgrades widen decisions without changing the row ritual.

## Better-if opportunities

- component clarity: upgraded/unupgraded action effects should be highly distinguishable.
- rules ambiguity: display refill timing should be marked on Cards/Animals/Association references.
- strategic depth: action upgrades are an elegant progression lever worth stealing.

## Design implications for SomberSoft

Design action cards as living UI panels: base action, upgraded action, strength table, and exceptions all in the player's hand of sight.

## Open questions

- Which action has the highest mistake frequency for first-time players?
