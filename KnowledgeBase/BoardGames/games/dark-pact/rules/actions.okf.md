---
okf_version: 0.2
type: rule_category
game:
  title: "Dark Pact"
  slug: "dark-pact"
  bgg_id: 448445
  publisher: "Trick or Treat Studios"
  year: 2025
  weight: null
  edition: "English base game; copyright 2025, retail 2026"
scope: "base game"
mechanics: [deck-building, hand-management, market, set-collection, solo-solitaire-game, variable-setup]
sources:
  - id: "src-002"
    title: "Dark Pact Rules — English"
    url: "https://boardgamegeek.com/filepage/314037/dark-pact-rules-english"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-22"
    notes: "Official card types and multiplier rules."
  - id: "src-004"
    title: "Designer Preview: Dark Pact"
    url: "https://boardgamegeek.com/blog/1/blogpost/180144/designer-preview-dark-pact"
    kind: other
    provenance: official
    retrieved_at: "2026-07-22"
    notes: "Designer examples."
confidence: high
status: verified
---

## Summary

Actions generate effects, Treasures fund purchases, Keepers persist, Instants test transient card states, and 2x/3x cards multiply printed numerals.

## Source-backed facts

- Claim: Keepers remain in play and commonly evaluate requirements against cards in play.
  Source: src-002, src-004
  Evidence: Official type rules and designer examples distinguish persistent Keepers.
  Confidence: high
- Claim: Instants are played as Actions and commonly inspect cards in hand or cards revealed by their effects.
  Source: src-002, src-004
  Evidence: Official type rules and designer examples describe Instant timing and tests.
  Confidence: high
- Claim: 2x and 3x multipliers multiply printed numerals.
  Source: src-002, src-004
  Evidence: Rules and designer preview define multiplier interaction with printed numbers.
  Confidence: high

## Rules / Mechanics

Card location matters: Keepers establish a persistent tableau, while Instants consume Action timing and inspect a temporary state. Multipliers are combinatorial operators, not generic wild resources, so apply them only to eligible printed numerals and preserve the chosen operation through resolution.
