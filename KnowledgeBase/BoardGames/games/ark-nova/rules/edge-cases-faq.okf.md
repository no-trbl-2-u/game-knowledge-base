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
  - id: "src-004"
    title: "Ark Nova FAQ v2 PDF"
    url: "https://cdn.shopify.com/s/files/1/0947/3907/1278/files/Ark-Nova-FAQ-v2.pdf?v=1754428544"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official FAQ/errata."
  - id: "src-005"
    title: "Ark Nova Glossary PDF"
    url: "https://cdn.shopify.com/s/files/1/0947/3907/1278/files/Ark-Nova-Glossary.pdf?v=1754428544"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official glossary golden rules and card clarifications."
confidence: high
status: verified
---

## Summary

Ark Nova's edge cases concentrate around enclosure ownership, card-effect timing, icon counting, interactive effects, action-card tokens, and bonus sources that bypass normal actions.

## Source-backed facts

- Claim: The official FAQ/errata unifies the rule for flipping enclosures when releasing or moving animals: flip the smallest possible occupied enclosure meeting all animal requirements, then fallback by size if necessary.
  Source: src-004
  Evidence: "You must flip the smallest possible occupied enclosure that meets all of the enclosure requirements... In the rare case there is no such enclosure..."
  Confidence: high
- Claim: Groups that dislike interactive abilities such as Poison and Pilfering may use the alternate solo-game effects instead of removing cards.
  Source: src-004
  Evidence: "If your group dislikes interactive abilities... use the alternate solo-game effects."
  Confidence: high
- Claim: A multiplier token gained from a bonus tile must be immediately placed on an action card, not stored in supply.
  Source: src-004
  Evidence: "Do not place it in your supply. You must immediately place it on any of your Action cards."
  Confidence: high
- Claim: A player cannot gain a third partner zoo from a bonus tile unless Association is upgraded; the requirement is on the zoo plan and applies regardless of source.
  Source: src-004
  Evidence: "You cannot gain a third partner zoo... unless you have upgraded the Association Action card"; "applies regardless of how you gain".
  Confidence: high
- Claim: Golden rule: card text overrides rules.
  Source: src-005
  Evidence: "If the text on a card contradicts a rule, then the text on the card applies."
  Confidence: high
- Claim: Golden rule: icons on a card count for its own effect if the effect refers to that icon.
  Source: src-005
  Evidence: "If the effect refers to an icon and this icon appears on the card itself, this icon on the card already counts".
  Confidence: high
- Claim: Conservation Project cards can only be played if immediately supported.
  Source: src-005
  Evidence: "You can only play a Conservation Project card if you are going to immediately support it".
  Confidence: high

## Rules / Mechanics

Edge-case principles:
- Card text wins over base rules.
- Resolve immediate effects now unless marked "after finishing".
- Bonus-source shortcuts still obey board/zoo-map prerequisites unless the effect explicitly says otherwise.
- Track exact special-enclosure occupancy with player tokens, but standard enclosure ownership can be abstracted by smallest-valid-enclosure rules.

## Player friction

The system is elegant until effects cross subsystem borders: bonus tiles granting partner zoos, animals moving into special enclosures, and action-card tokens altering timing.

## Praised design

The FAQ's smallest-valid-enclosure rule avoids forcing players to remember which animal occupied which standard enclosure all game.

## Better-if opportunities

- rules ambiguity: codify source-independent restrictions in iconography.
- component clarity: special enclosure occupancy markers should be prominent.
- player interaction: optional alternate effects for take-that cards are a practical social valve.

## Design implications for SomberSoft

Every subsystem shortcut needs an explicit authority rule: does it bypass cost, prerequisites, timing, or only action selection? Ambiguity breeds forum law.

## Open questions

- Which FAQ rulings were absorbed into later printings versus still external?
