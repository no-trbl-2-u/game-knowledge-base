---
okf_version: 0.2
type: rule_category
game:
  title: "The Quacks of Quedlinburg"
  slug: "the-quacks-of-quedlinburg"
  bgg_id: 244521
  publisher: "Schmidt Spiele / North Star Games"
  year: 2018
  weight: 1.94
  edition: "English base game / Quacks current listing"
scope: "base game"
mechanics: [deck-bag-and-pool-building, push-your-luck, catch-up-mechanism, simultaneous-action-selection, dice-rolling, variable-setup]
sources:
  - id: "src-003"
    title: "The Quacks of Quedlinburg Rulebook PDF"
    url: "https://cdn.1j1ju.com/medias/ba/73/db-the-quacks-of-quedlinburg-rulebook.pdf"
    kind: rulebook_pdf
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Accessible English rulebook mirror."
  - id: "src-006"
    title: "The Quacks of Quedlinburg Review: Risky Bag Building"
    url: "https://whatsericplaying.com/2019/09/16/the-quacks-of-quedlinburg"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Review restates setup and warns to keep books in matching sets."
confidence: high
status: verified
---

## Summary

Setup gives each player identical starting risk and then varies the shared ingredient powers through books. Orange and black are always present; other colors come from numbered sets.

## Source-backed facts

- Claim: Each player begins with a personal pot, bag, flask, markers, and a fixed starting bag.
  Source: src-003
  Evidence: Components include "4 pots", "4 flasks", "4 bags", and the rulebook lists starting chips; review summary gives the starting bag as white 3, two white 2s, four white 1s, one green 1, and one orange 1.
  Confidence: high
- Claim: Orange and black ingredient books are used in every game.
  Source: src-003
  Evidence: "From the ingredient books, lay out the orange and the black books to start off. You will need these books in every game."
  Confidence: high
- Claim: The remaining ingredient books are organized into sets, with Set 1 recommended for the first game.
  Source: src-003
  Evidence: "For the first game, use Set 1"; "Once you are familiar with the set, we recommend trying Set 2, then Set 3, and finally Set 4."
  Confidence: high
- Claim: A reviewer warns that mixing book sets can be unbalanced.
  Source: src-006
  Evidence: "Choose a set and make sure all the books are from that set; if you don’t, the game could potentially be wildly unbalanced."
  Confidence: medium

## Rules / Mechanics

Setup creates constrained variability: players do not draft powers individually, but the table's economy changes from game to game.

## Design implications for SomberSoft

Variable setup should be modular but curated. If mixed modules can break balance, label them with visible tiers or sets and teach the safe default first.
