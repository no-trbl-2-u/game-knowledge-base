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
    notes: "Review supplies strategy and teaching observations."
confidence: high
status: verified
---

## Summary

Player actions are simple: draw, place, resolve color effects, stop or continue. Between rounds players spend coins on one or two new chips, with a color restriction when buying two.

## Source-backed facts

- Claim: A chip is placed forward according to its printed value.
  Source: src-003
  Evidence: "According to its value, place the first chip you draw on the space directly after the droplet".
  Confidence: high
- Claim: A player may use the flask to return the last drawn white chip only if that chip did not cause an explosion.
  Source: src-003
  Evidence: "If the last chip you drew was white, you may put it back in your bag by using your flask"; "If the last chip drawn causes the pot to explode, the flask cannot be used!"
  Confidence: high
- Claim: Players may buy one or two chips, but two purchased chips cannot be the same color.
  Source: src-003
  Evidence: "You may buy 1 or 2 chips. If buying 2 chips, they cannot be the same color."
  Confidence: high
- Claim: A reviewer emphasizes buying many ingredients as dilution against busting, while warning against unfocused buys.
  Source: src-006
  Evidence: "Dilute! You should be buying a lot of ingredients" and "you’ll end up having trouble getting a strategy together if you buy too random of a mix".
  Confidence: medium

## Rules / Mechanics

The market restriction prevents single-color tunneling and keeps bags mixed. The flask is a pressure valve, but its timing restriction preserves the punishment of overreach.

## Design implications for SomberSoft

Good mitigation does not erase consequence. Let players undo danger before catastrophe, not after the line is crossed.
