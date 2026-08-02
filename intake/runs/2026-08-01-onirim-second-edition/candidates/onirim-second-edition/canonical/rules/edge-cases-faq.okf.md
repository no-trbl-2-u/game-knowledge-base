---
okf_version: 0.2
type: rule_category
game:
  title: "Onirim (Second Edition)"
  slug: "onirim-second-edition"
  bgg_id: 156336
  publisher: "Z-Man Games"
  year: 2014
  weight: null
  edition: "2014 Z-Man Games second edition (ZM4900), basic game only"
scope: "base game"
mechanics: [cooperative-game, hand-management, set-collection, solo-solitaire-game]
sources:
  - id: "src-001"
    title: "Z-Man Games — Onirim Rules (ZM4900)"
    url: "https://d3sr78rmtg4mfy.cloudfront.net/filer_public/fd/0e/fd0ef6a2-c019-47a2-910a-a556f03a3d02/zm4900_onirim_rules.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-01"
    notes: "Printed pages 7-12, explicit exceptions and two-player differences."
confidence: high
status: verified
---

# Edge cases and FAQ boundary

## Core-rule edge cases

- Claim: A fourth consecutive Location of one color starts a new same-color series rather than extending the completed set.
  Source: src-001
  Evidence: Official rules printed page 7 marks this as Important and illustrates the sequence reset.
  Confidence: high
- Claim: If fewer than five cards remain during Prophecy, every remaining card is revealed, one is discarded, and the rest are reordered.
  Source: src-001
  Evidence: Official rules printed page 8 gives this explicit short-deck exception.
  Confidence: high
- Claim: During the Nightmare option that reveals five deck cards, Door and Dream cards enter Limbo instead of being discarded.
  Source: src-001
  Evidence: Official rules printed page 9, Nightmare option III, names both protected card types.
  Confidence: high
- Claim: In two-player play, playing a card into the other player's labyrinth row is prohibited, while discarding permits an immediate Personal/Shared resource swap.
  Source: src-001
  Evidence: Official rules printed page 11 states separate rows and the discard-phase swap exception.
  Confidence: high

## Inventory boundary

This record intentionally publishes no separate FAQ, errata, expansion rule, or expansion-specific edge case. The bounded search outcome remains in `evidence.json` and is not treated as a publisher-wide absence claim.
