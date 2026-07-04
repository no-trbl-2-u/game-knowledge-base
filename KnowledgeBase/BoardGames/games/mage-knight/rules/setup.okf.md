---
okf_version: 0.1
type: rule_category
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  edition: "English base game / rules updated March 2012"
scope: "base game"
sources:
  - id: "src-002"
    title: "Mage Knight — WizKids product page"
    url: "https://wizkids.com/mage-knight"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official component and mode source."
  - id: "src-003"
    title: "MK_rulebook_ENG_searchable-mar2012.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official rulebook link; setup text not directly extracted."
  - id: "src-006"
    title: "How to play Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary setup/round summary."
confidence: medium
status: needs_followup
---

## Summary

Setup is scenario-led. Players choose a scenario, build the appropriate map tile stack/layout, prepare offers and decks, choose Mage Knights, set fame/reputation/player boards, roll the mana source, and begin the first round, usually Day.

## Source-backed facts

- Claim: Components include two rulebooks, 20 map tiles, 240 cards, 54 mana crystals, 7 mana dice, tokens, miniatures, and game mats.
  Source: src-002
  Evidence: WizKids Features list: "240 Cards", "20 Map Tiles", "54 Mana Crystals", "7 Mana Dice", "2 Rulebooks".
  Confidence: high
- Claim: A scenario determines setup and goals.
  Source: src-003
  Evidence: Scribd/search extract of the rulebook says players "choose a scenario from the Scenario Book and set up the game board by laying out map tiles...".
  Confidence: medium
- Claim: At the start of a round, each player shuffles the Deed deck, draws five cards, and chooses a tactic.
  Source: src-006
  Evidence: UltraBoardGames extract: "At the start of each Round, each player shuffles his Deed deck and draws five cards... Then, they choose their Tactic".
  Confidence: medium

## Rules / Mechanics

Setup has two distinct burdens:

1. Physical assembly: map tiles, decks/offers, hero area, dice source, tokens.
2. Scenario interpretation: board shape, round limit, target city/objective, player count scaling, solo/co-op dummy-player rules when applicable.

## Player friction

The setup is not merely long; it is condition-heavy. Players must know which decks/offers/tile stacks are scenario dependent and which are global defaults.

## Design implications for SomberSoft

- Scenario-based setup should be printed as an executable checklist, not prose.
- Any solo/co-op dummy system should sit in its own panel and never be implied by ordinary multiplayer setup.

## Open questions

- Verify exact base-game setup sequence against official rulebook pages.
