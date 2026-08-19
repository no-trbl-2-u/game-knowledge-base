---
okf_version: 0.2
type: rule_category
game:
  title: "G.I. JOE Deck-Building Game"
  slug: "gi-joe-deck-building-game"
  bgg_id: 343526
  publisher: "Renegade Game Studios"
  year: 2021
  weight: 2.50
  edition: "core set"
scope: "base game"
mechanics: [cooperative-game, deck-building, hand-management, variable-player-powers, solo-solitaire-game, campaign-game]
sources:
  - id: "src-003"
    title: "G.I. JOE Deck-Building Game Rulebook"
    url: "https://renegadegamestudios.com/content/File%20Storage%20for%20site/Rulebooks/GI%20JOE%20Deck-Builder/GIJ_SKU1_Deck_Builder_Rulebook_LowRez_P2%202021.12.14.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-14"
    notes: "Publisher-hosted rulebook."
  - id: "src-006"
    title: "Renegade Game Studios — G.I. JOE FAQ"
    url: "https://renegadegamestudios.com/content/File%20Storage%20for%20site/GI%20JOE%20DBG/Joe%20DBG%20FAQ.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-14"
    notes: "Publisher-linked FAQ; direct extraction was not completed in this run."
confidence: high
status: verified
last_verified: "2026-08-19"
---

## Summary

The rulebook establishes the general timing hierarchy, and the publisher FAQ (retrieved and extracted in the 2026-08-19 librarian pass) resolves timing edge cases and a component omission for the core set.

## Source-backed facts

- Claim: Start-of-turn effects resolve before the Action Phase, and no cards may be played during Start Phase.
  Source: src-003
  Evidence: Rulebook p. 7, Start Phase.
  Confidence: high
- Claim: End-of-round effects occur after all players complete one turn.
  Source: src-003
  Evidence: Rulebook p. 7 and End of Round token reference.
  Confidence: high
- Claim: If a mission brings a card with a Start of Turn effect into play (e.g. Major Bludd), that effect does not trigger the same turn it enters play.
  Source: src-006
  Evidence: "No. The moment for Start of Turn effects has passed after the Story Mission enters play, so the effect will not happen until the next turn."
  Confidence: high
- Claim: When a Story Mission fails by a card effect (e.g. Precision Strike), attached Complications stay in play and transfer to the next Story Mission; when it fails by a failed mission attempt, the Complications are discarded even though the mission stays in play as its failure penalty.
  Source: src-006
  Evidence: FAQ General section, Story Mission failure ruling.
  Confidence: high
- Claim: On missions requiring two skills joined by "&", cards providing either listed skill (or a Wild skill) count toward the dice total rolled against the mission.
  Source: src-006
  Evidence: "'and' missions count both applicable skills, as well as any Wild skill."
  Confidence: high
- Claim: A mission does not start until the Transport and Joe lineup are locked in; after that point the mission's Joes cannot change (barring an explicit exception such as Halo Jump), Complications are then revealed and resolved, and only after that is the skill total rolled.
  Source: src-006
  Evidence: FAQ General section, "How does attempting a Mission work?"
  Confidence: high
- Claim: In solo play, Start of Turn and End of Turn effects occur on each of a player's two turns per round, but End of Round effects occur only every other turn.
  Source: src-006
  Evidence: FAQ General section, solo timing ruling.
  Confidence: high
- Claim: The active player may play Gear and Utility cards without the [M] symbol at any point during a mission once it has begun; the [M] symbol is only a timing restriction on non-active players.
  Source: src-006
  Evidence: "The [M] symbol is only a timing restriction on the non-active players."
  Confidence: high
- Claim: Service Rifles were omitted from the original core-set rulebook; they are always available in a face-up stack near the lineup during setup.
  Source: src-006
  Evidence: "This was omitted from the original rulebook. They are always available in a face-up stack near the lineup."
  Confidence: high
- Claim: Any Cobra mission that is not a Precision Strike or a Story Mission is a Cobra Operative (e.g. Cobra Troopers, Cobra Battalion, Snow Serpents, Cobra Officers, and the New Alliances Decepticons).
  Source: src-006
  Evidence: FAQ Core Set section, "What is a Cobra Operative?"
  Confidence: high

## Open questions

None remaining from the publisher FAQ extraction; expansion-specific FAQ sections (Shadow of the Serpent, Coldsnap, Raise the Flagg) contain additional card-specific rulings not yet transcribed here.
