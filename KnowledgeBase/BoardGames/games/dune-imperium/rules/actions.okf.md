---
okf_version: 0.1
type: rule_category
game:
  title: "Dune: Imperium"
  slug: "dune-imperium"
  bgg_id: 316554
  publisher: "Dire Wolf"
  year: 2020
  edition: "English base game"
scope: "base game"
sources:
  - id: "src-003"
    title: "DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official English rulebook."
  - id: "src-005"
    title: "BG_Dune_Imperium_Board_Spaces_Sheet.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/BG_Dune_Imperium_Board_Spaces_Sheet.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official board-space guide/player aid."
confidence: high
status: verified
---

## Summary

Actions are gated by matching card icons to board-space icons, paying costs, and meeting requirements. Reveal turns convert remaining hand cards into persuasion, swords, and card effects.

## Source-backed facts

- Claim: On an Agent turn, a player plays one card to send an Agent to an unoccupied board space with a matching icon.
  Source: src-003
  Evidence: Rulebook p.9 / lines 552-561.
  Confidence: high
- Claim: The player must pay any costs or meet requirements before resolving the space or card.
  Source: src-003
  Evidence: Rulebook p.9 / lines 562-575.
  Confidence: high
- Claim: When sending to a Faction space, the player gains that Faction's influence and may resolve space/card effects in any order.
  Source: src-003
  Evidence: Rulebook p.9 / lines 601-606.
  Confidence: high
- Claim: In a Reveal turn, remaining hand cards are revealed, their Reveal effects may resolve in any order, and Persuasion can acquire cards before/between/after effects.
  Source: src-003
  Evidence: Rulebook p.11 / lines 717-735.
  Confidence: high
- Claim: Persuasion cannot be saved; unused Persuasion is lost.
  Source: src-003
  Evidence: Rulebook p.11 / lines 760-776.
  Confidence: high

## Rules / Mechanics

Action categories include: board placement, resource production/conversion, faction influence, card acquisition, troop recruitment/deployment, intrigue draw/play, trashing, high-council/swordmaster upgrades, and temporary Mentat use.

## Player friction

Icon gating creates sharp tactical choices but also a teach burden: a strong card is useless for a desired space if it lacks the needed icon.

## Praised design

The card/board coupling prevents static worker-placement optimization. Deck composition becomes board access, not merely income generation.

## Better-if opportunities

- component clarity: board spaces and cards should use redundant icon plus color/faction labeling.
- strategic depth: card market evaluation should foreground both current reveal economy and future board access.

## Design implications for SomberSoft

For digital card-worker hybrids, show "future access map" on card acquisition: buying a card should preview what spaces/actions it opens later.

## Open questions

- Which Agent icons are most commonly underdrafted by new players.
