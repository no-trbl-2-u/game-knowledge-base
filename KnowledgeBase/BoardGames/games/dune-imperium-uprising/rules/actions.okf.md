---
okf_version: 0.2
type: rule_category
game:
  title: "Dune: Imperium — Uprising"
  slug: "dune-imperium-uprising"
  bgg_id: 397598
  publisher: "Dire Wolf"
  year: 2023
  weight: null
  edition: "English standalone game, 2023 first printing"
scope: "base game"
mechanics: [deck-building, worker-placement, hand-management, multi-use-cards, force-commitment, race, variable-player-powers, hidden-information]
sources:
  - id: "src-002"
    title: "DUNE_IMPERIUM_UPRISING Main Rulebook"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_UPRISING_Main_Rulebook_23-10-12.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Official English governing rules."
confidence: high
status: verified
---

## Summary

An Agent turn links a card's icon to an unoccupied board space; the card and space then resolve together.

## Source-backed facts

- Claim: A played card must show an Agent icon matching the chosen board space, and a player may use only one icon from that card.
  Source: src-002
  Evidence: Rulebook pp. 8–9 state the matching-icon and one-icon restrictions.
  Confidence: high

- Claim: Spies can be placed at observation posts and can support Infiltrate or Gather Intelligence effects.
  Source: src-002
  Evidence: Rulebook pp. 10–11 describe Spy placement, recalling a Spy, infiltration, and card draw.
  Confidence: high

- Claim: A card and board space can recruit troops or deploy units to the Conflict when the space is a Combat space.
  Source: src-002
  Evidence: Rulebook pp. 9–10 define troop recruitment and Combat-space deployment.
  Confidence: high

## Rules / Mechanics

The action grammar is constrained but combinatorial: card icon, occupied space, cost, influence requirement, Spy network, and optional effects all interact. Sandworm summoning additionally requires a Maker Hooks token and an unbroken Shield Wall condition.

## Player friction

Blocking is direct because ordinary Agents cannot enter occupied spaces; the Spy exception is powerful but introduces another timing and board-state layer.

## Open questions

- The full Board Space Guide is referenced by the rulebook but was not needed for the bounded core action summary.
