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
    notes: "Official product overview."
  - id: "src-003"
    title: "MK_rulebook_ENG_searchable-mar2012.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Official rulebook; WizKids host 500s, text extracted from Wayback Machine snapshot 2026-07-08."
  - id: "src-006"
    title: "How to play Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary procedural summary."
confidence: high
status: verified
---

## Summary

Mage Knight is scenario-driven adventure optimization. Players use a personal Deed deck and mana to traverse a modular hex map, reveal new terrain, interact with sites, recruit units, fight enemies, and pursue scenario objectives. Verified against the official rulebook (via 2026-07-08 Wayback Machine retrieval).

## Source-backed facts

- Claim: The publisher frames the game around building armies, defeating enemies, conquering cities, and character development.
  Source: src-002
  Evidence: WizKids: "Build your armies, defeat bands of marauding enemies, and eventually conquer cities" and "mixes character development".
  Confidence: high
- Claim: The game supports competitive, cooperative, and solo play.
  Source: src-002
  Evidence: WizKids: "campaign options, allowing you to play both competitively or cooperatively"; BGG extract: "Solo rules are also included."
  Confidence: high
- Claim: During turns players use cards to move/explore, interact, or fight.
  Source: src-006
  Evidence: UltraBoardGames extract: players play cards "to move around the map and explore it... to interact with the local inhabitants, or to combat enemies".
  Confidence: medium
- Claim: Deed cards can be played for a basic effect, powered with mana for a stronger effect, or played sideways for a generic Move/Influence/Attack/Block 1; Units are recruited separately from the deck and activated via Command tokens.
  Source: src-003
  Evidence: Rulebook p.4, "DEED CARDS" and "USING UNITS": "An Action card... can be played to provide its basic effect, or it can be powered by one mana of the depicted color to provide its strong effect"; "Any non-Wound card can be played sideways into the Play area to provide either Move 1, Influence 1, Attack 1 or Block 1."
  Confidence: high
- Claim: Mana exists as pure mana (dice/tokens, lost if unused by end of turn) or crystals (stored in the Hero's Inventory, up to three per basic color); gold mana substitutes for any basic color by Day only, black mana powers Night effects only.
  Source: src-003
  Evidence: Rulebook p.5, "USING MANA": "During Day Rounds, gold mana can be used as mana of any basic color... Black mana can never be used during the Day"; "During Night Rounds, black mana can be used to power some effects. Gold mana can never be used at Night."
  Confidence: high

## Rules / Mechanics

Core systems:

- Deck/hand economy: cards fuel movement, influence, combat, block, and special effects.
- Mana economy: colored mana dice/tokens/crystals strengthen card effects.
- Spatial pressure: terrain, enemies, sites, and exploration create route puzzles.
- Character growth: fame increases level and improves capability; cards/skills/units broaden future turns.
- Reputation: violent or noble conduct modifies local interaction.
- Scenario frame: win condition and map setup come from scenario instructions.

## Player friction

The same density that makes the game durable also raises lookup burden. New players must understand card use, terrain, site effects, monster powers, wounds, mana, unit activation, fame, reputation, day/night rules, and scenario exceptions.

## Praised design

The praised design is the conversion of adventure theme into deterministic resource algebra. The player is not waiting for a die to tell a story; the player is manufacturing the story from constraints.

## Retry notes
- 2026-07-08: Resolved. Official rulebook text retrieved via Wayback Machine snapshot (WizKids' own host still returns HTTP 500); page references added above.
