---
okf_version: 0.2
type: rule_category
game:
  title: "Terra Mystica"
  slug: "terra-mystica"
  bgg_id: 120677
  publisher: "Feuerland Spiele / Z-Man Games"
  year: 2012
  weight: null
  edition: "Base game; claims bounded to Feuerland Spiele German rulebook v1.2 and official product page"
scope: "base game"
mechanics: [area-majority-influence, engine-building, income, modular-board, resource-management, tile-placement, variable-player-powers, variable-setup]
sources:
  - id: "src-002"
    title: "Feuerland Spiele — Terra Mystica Spielregel PDF"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Terra_Mystica/Regel-Deutsch.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-09-02"
    notes: "20-page German core rulebook, edge cases on printed pages 9–15 and faction appendix pages 20."
confidence: high
status: verified
---

## Summary

Several rules prevent development from becoming unconstrained: terrain cannot be converted after it is built, spades are immediate, power is paid through bowls, and proximity power costs points.

## Source-backed facts

- Claim: Players cannot convert an occupied field, and spades cannot be saved for a later action.
  Source: src-002
  Evidence: Printed page 10 says built landscapes cannot be converted and that spades must always be used immediately.
  Confidence: high

- Claim: Power from a neighbor's construction is optional but costs points according to the amount of power accepted.
  Source: src-002
  Evidence: Printed page 12 says neighboring players are offered power and lists point costs of 0, 1, 2, and 3 for one through four power.
  Confidence: high

- Claim: A town forms automatically when directly adjacent buildings total at least seven power across at least four buildings, with a sanctuary exception.
  Source: src-002
  Evidence: Printed page 14 states the two town conditions and the sanctuary's three-building exception.
  Confidence: high

- Claim: The rulebook describes faction-specific exceptions for tunneling, carpet flight, and other powers rather than treating all peoples identically.
  Source: src-002
  Evidence: Printed pages 11 and 20 describe indirect adjacency and faction appendix exceptions for Dwarves, Fakirs, Giants, Witches, and others.
  Confidence: high
