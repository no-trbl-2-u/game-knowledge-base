---
okf_version: 0.2
type: rule_category
game:
  title: "Betrayal Legacy"
  slug: "betrayal-legacy"
  bgg_id: 240196
  publisher: "Avalon Hill"
  year: 2018
  weight: 2.92
  edition: "Hasbro F3147 support bundle; exact 2018 equivalence unproven"
scope: "official rule-resolution guidance and edge cases"
mechanics: ["campaign-game", "cooperative-game", "dice-rolling", "hidden-information", "legacy-game", "modular-board", "semi-cooperative-game", "tile-placement", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-003"
    title: "Hasbro F3147 English rules bundle"
    url: "https://instructions.hasbro.com/api/download/F3147_en-us_avalon-hill-betrayal-legacy-role-playing-haunted-narrative-board-game.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; 84 pages; SHA-256 5c558dacdc495c13ff5ae7d36db4a2dc8ced0e02e39b156d0075c9de4b4a60c9. No separate FAQ/errata file was exposed on the Hasbro detail page."
confidence: medium
status: needs_followup
---

# FAQ and Edge Cases

- Claim: When several effects conflict, the rules direct players to prioritize haunt text over cards or tiles, cards or tiles over the rulebook, and effects that say something cannot happen over effects that permit it.
  Source: src-003
  Evidence: "What If We Can't Figure Out a Rule?", printed Rules p.21 (PDF p.12).
  Confidence: high

- Claim: If no rule resolves a dispute, the official fallback is a group decision, with the active player deciding ties.
  Source: src-003
  Evidence: "If a single card, rule, or effect has multiple valid outcomes, the active player decides," printed Rules p.21 (PDF p.12).
  Confidence: high

- Claim: Monsters use haunt-defined movement and actions, generally take their turns via the Monster card, and cannot be killed unless a rule specifically permits it.
  Source: src-003
  Evidence: "Monsters," printed Rules p.20 (PDF p.12).
  Confidence: high

- Claim: A character normally dies when a trait reaches the skull after the haunt begins; if the traitor dies, their monsters can continue and their side may still win.
  Source: src-003
  Evidence: "Dying," printed Rules p.20 (PDF p.12).
  Confidence: high

- Claim: The acquired Hasbro support page exposes no separate FAQ or errata attachment, so this record does not claim that no such historical document ever existed.
  Source: src-003
  Evidence: The F3147 page's only download is the 84-page bundle; the page's FAQ region contains no product-specific entries in the retrieved response.
  Confidence: medium
