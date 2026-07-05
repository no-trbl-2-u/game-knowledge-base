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
    retrieved_at: "2026-07-03"
    notes: "Official rulebook link; text extraction failed this run."
  - id: "src-006"
    title: "How to play Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary procedural summary."
confidence: medium
status: needs_followup
---

## Summary

Mage Knight is scenario-driven adventure optimization. Players use a personal Deed deck and mana to traverse a modular hex map, reveal new terrain, interact with sites, recruit units, fight enemies, and pursue scenario objectives. Official rules exist, but this overview remains medium-confidence until direct PDF page references are extracted.

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

## Open questions

- Add exact official rulebook page references for deck, mana, fame, reputation, wounds, and scenario setup.

## Retry notes
- 2026-07-04: Retried the official rulebook PDF at both `wizkidsgames.com` and `wizkids.com` hosts; both now return HTTP 500 Internal Server Error (previously only a TLS hostname mismatch). This looks like a server-side outage/misconfiguration at WizKids, not a fetch-tool issue. A future attempt needs a Wayback Machine snapshot of the PDF, or to re-check `wizkids.com/mage-knight` for relocated download links once the WizKids site is healthy again.
