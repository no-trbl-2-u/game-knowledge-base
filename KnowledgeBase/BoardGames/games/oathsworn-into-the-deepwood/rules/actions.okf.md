---
okf_version: 0.2
type: rule_category
game:
  title: "Oathsworn: Into the Deepwood"
  slug: "oathsworn-into-the-deepwood"
  bgg_id: 251661
  publisher: "Shadowborne Games"
  year: 2022
  weight: 3.70
  edition: "base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, hand-management, point-to-point-movement, variable-player-powers]
sources:
  - id: "src-004"
    title: "Oathsworn Review — Meeple Mountain"
    url: "https://www.meeplemountain.com/reviews/oathsworn-into-the-deepwood/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Combat system summary."
  - id: "src-005"
    title: "Oathsworn Review — Tabletop Gaming"
    url: "https://www.tabletopgaming.co.uk/reviews/oathsworn-into-the-deepwood-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Dice/card combat choice summary."
  - id: "src-008"
    title: "Oathsworn: Into the Deepwood — Story Rule Book"
    url: "https://drive.google.com/open?id=1eUmHux5TOpkzpGDTyn1epZWFoK2jM-8m"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-25"
    notes: "Official rulebook; Checks, Criticals, Round of Combat, Appendix I tokens. See sources.okf.md for the full technical receipt."
  - id: "src-009"
    title: "Oathsworn: Into the Deepwood — Encounter Rule Book"
    url: "https://drive.google.com/open?id=1C20PYk17Mh_cAAQxgKNl1JjcsmTmZBlQ"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-25"
    notes: "Official rulebook; Making an Attack, Criticals, the Determination Rule, Empowering Cards. See sources.okf.md for the full technical receipt."
confidence: high
status: verified
---

## Source-backed facts

- Claim: An attack draws one Might Card (or die) per color cube on the attacker's Might Track, plus any number of additional white cards; drawing two or more blanks causes the whole attack to miss with no damage or secondary effects, otherwise damage equals the sum of all drawn values.
  Source: src-009
  Evidence: "If you draw two or more blanks the entire attack misses and no damage is done... If the attack does not miss, the sum of the values on all Might Cards drawn is the damage dealt." (Encounter Rule Book p.13).
  Confidence: high

- Claim: A card or die result showing a "Critical" symbol triggers drawing one more card/die of the same color, adding its value to the attack total; a critical on that extra card chains into another draw, and a blank drawn only via a critical chain does not cause a miss. This is the primary-source mechanism behind src-004's "exploding dice" description.
  Source: src-008, src-009
  Evidence: "For each card you draw with a critical symbol, draw another card of the same color and add its value to your total... Any blanks drawn when drawing extra cards from criticals do not cause an attack to miss." (Encounter Rule Book p.13; equivalent text for the Story-part Round of Combat in Story Rule Book p.14).
  Confidence: high

- Claim: Every Might Card draw in the game (checks, attacks, Rounds of Combat) can instead be resolved with the equivalent Might Dice, chosen per-draw before drawing and freely mixable with cards in the same draw. This confirms src-005's dice-vs-cards description with an exact rule.
  Source: src-008
  Evidence: "Included in the game is a set of Might Dice that can, at any time, be used instead of drawing cards from the Might Decks... You can even combine the use of cards and dice at the same time" (Story Rule Book p.3).
  Confidence: high

- Claim: Before drawing Might Cards for an attack, a character may spend Empowered x3 tokens (or use an Empowered-keyword ability) to upgrade individual drawn cards one color step per use (white→yellow→red→black, capped at black); upgrades may be spread across multiple cards or stacked on one.
  Source: src-009
  Evidence: Empowering Cards rule and worked example (Encounter Rule Book p.14).
  Confidence: high

- Claim: If an attack misses outright (2+ blanks after redraws), the attacker gains one Combat Token of their choice (the "Determination Rule") and regains any Redraw/Empowered x3/Lethality tokens they spent on that attack.
  Source: src-009
  Evidence: "If, after redraws, one of your attacks misses... you gain any one Combat Token of your choice... In addition, you regain all Redraw, Empowered x3 and Lethality Tokens you spent during the attack" (Encounter Rule Book p.13).
  Confidence: high

## Actions

Checks, attacks, and Rounds of Combat all share the same card/die-draw resolution core described above; the differentiation reviews described (push-your-luck risk, dice-vs-cards choice) is now backed by the exact Critical/Determination/Empowering rules rather than high-level description alone. Enemy-side action selection (targeting, movement, minion activation) is covered in rules/edge-cases-faq.okf.md and rules/turn-structure.okf.md.
