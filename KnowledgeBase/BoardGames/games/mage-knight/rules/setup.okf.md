---
okf_version: 0.2
type: rule_category
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  edition: "English base game / rules updated March 2012"
scope: "base game"
mechanics: [deck-building, hand-management, card-play-conflict-resolution, modular-board, grid-movement, dice-rolling, cooperative-game, solo-solitaire-game, variable-player-powers, campaign-game]
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
    url: "https://web.archive.org/web/20201118050857/http://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Official rulebook; WizKids host 500s, text extracted from Wayback Machine snapshot 2026-07-08. Audit 2026-07-15: wizkidsgames.com host confirmed dead (ERR_TLS_CERT_ALTNAME_INVALID); url switched to the confirmed-live Wayback Machine snapshot (HTTP 200). See sources.okf.md src block for full remediation detail."
  - id: "src-006"
    title: "How to play Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary setup/round summary."
confidence: high
status: verified
---

## Summary

Setup is scenario-led. Players choose a scenario, build the appropriate map tile stack/layout, prepare offers and decks, choose Mage Knights, set fame/reputation/player boards, roll the mana source, and begin the first round, usually Day. Verified against the official rulebook's "Game Setup for the Full Game" section (via 2026-07-08 Wayback Machine retrieval).

## Source-backed facts

- Claim: Components include two rulebooks, 20 map tiles, 240 cards, 54 mana crystals, 7 mana dice, tokens, miniatures, and game mats.
  Source: src-002
  Evidence: WizKids Features list: "240 Cards", "20 Map Tiles", "54 Mana Crystals", "7 Mana Dice", "2 Rulebooks".
  Confidence: high
- Claim: A scenario determines setup and goals.
  Source: src-003
  Evidence: Rulebook p.1, Game Flow step 1: "Choose a scenario – Pick a scenario from the Scenario Book to play"; step 3: "Setup the Game – Follow the directions in the 'Game Setup' section... Check the scenario description for any exceptions or special rules that may modify the game setup."
  Confidence: high
- Claim: At the start of a round, each player shuffles the Deed deck, draws five cards (per Hand limit), and chooses a tactic.
  Source: src-003
  Evidence: Rulebook p.4, "Prepare the Round" step 2g: each player "Shuffles all his Deed cards to create a new Deed deck" and "Draws cards up to his Hand limit"; step 3: "Players choose Tactic cards for this Round."
  Confidence: high
- Claim: At setup, the Source is filled by rolling one mana die per player plus 2, at least half of which must show a basic color (rerolling black/gold dice otherwise); the Day/Night board starts Day side up.
  Source: src-003
  Evidence: Rulebook p.2: "Roll as many mana dice as there are actual players plus 2, and place them there. At least half of the dice have to show basic colors... If not, keep rerolling all the black and gold dice until this is true."; "At the start of the game, put it day side up."
  Confidence: high
- Claim: Each player's Deed deck starts as the 16 Basic Action cards of their Hero, and they draw 5 cards to their starting hand.
  Source: src-003
  Evidence: Rulebook p.3, player setup: "Each player shuffles the 16 Basic Action cards of his Hero... to create his Deed deck"; "At the start of the game, draw 5 cards from your Deed deck (according to your Hand limit depicted on your topmost Level token)."
  Confidence: high

## Rules / Mechanics

Setup has two distinct burdens:

1. Physical assembly: map tiles, decks/offers, hero area, dice source, tokens.
2. Scenario interpretation: board shape, round limit, target city/objective, player count scaling, solo/co-op dummy-player rules when applicable.

## Player friction

The setup is not merely long; it is condition-heavy. Players must know which decks/offers/tile stacks are scenario dependent and which are global defaults.

## Retry notes
- 2026-07-08: Resolved. Official rulebook setup sequence verified via Wayback Machine snapshot (WizKids' own host still returns HTTP 500); page references added above.
