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
    retrieved_at: "2026-08-05"
    notes: "Publisher-linked FAQ; downloaded via curl and text-extracted with pypdf on the retry pass. 3 pages, covers core set plus Shadow of the Serpent and Raise the Flagg expansions."
confidence: high
status: verified
---

## Summary

The rulebook establishes the general timing hierarchy, and the publisher FAQ resolves card-specific and mission-timing edge cases across the core set and its expansions.

## Source-backed facts

- Claim: Start-of-turn effects resolve before the Action Phase, and no cards may be played during Start Phase.
  Source: src-003
  Evidence: Rulebook p. 7, Start Phase.
  Confidence: high
- Claim: End-of-round effects occur after all players complete one turn.
  Source: src-003
  Evidence: Rulebook p. 7 and End of Round token reference.
  Confidence: high
- Claim: A Story Mission that enters play via a card effect (e.g. Major Bludd) does not trigger its own Start of Turn effect that same turn.
  Source: src-006
  Evidence: "the moment for Start of Turn effects has passed after the Story Mission enters play, so the effect will not happen until the next turn"
  Confidence: high
- Claim: If a Story Mission fails by an attached-card effect (e.g. a Precision Strike), attached Complications carry over to the next Story Mission; if it fails by a failed mission attempt, the Complications are discarded even though the mission itself stays in play as a failure penalty.
  Source: src-006
  Evidence: "If the Story Mission was failed by a card effect... any attached Complications stay in play and attach to the next Story Mission. If it fails by attempting the mission, they are discarded"
  Confidence: high
- Claim: On an "and" mission (two skills joined by "&"), both listed skills count toward the roll, plus any Wild skill.
  Source: src-006
  Evidence: "'and' missions count both applicable skills, as well as any Wild skill"
  Confidence: high
- Claim: A mission attempt locks in once the Transport and Joes are chosen; after that point the mission's Joe roster can't change (barring an explicit exception like Halo Jump), Complications are revealed and resolved, and only then is the skill total rolled.
  Source: src-006
  Evidence: "you no longer can change the makeup of the Joes on your mission (unless another card explicitly allows you to do so, such as Halo Jump). You then reveal Complications... After Complications are resolved, you total your skill and roll"
  Confidence: high
- Claim: In solo play there are two turns per round; Start/End of Turn effects trigger on each of the solo player's turns, but End of Round effects trigger only every other turn.
  Source: src-006
  Evidence: "There are two turns in a round. The Start of Turn and End of Turn effects happen on each of your turns, but End of Round effects only happen every other turn"
  Confidence: high
- Claim: The colored squares on some cards reference the threat meter; the following ability activates on play only if the threat meter is currently in the indicated color.
  Source: src-006
  Evidence: "They refer to the threat meter. The ability following the colored square will activate when played if the threat meter is in the indicated color"
  Confidence: high
- Claim: The `[M]` symbol is a timing restriction only on non-active players; the active player may play any applicable Gear or Utility card at any point during a mission regardless of the `[M]` symbol.
  Source: src-006
  Evidence: "The [M] symbol is only a timing restriction on the non-active players. The active player can play any of their applicable Gear or Utility cards at any point during a mission"
  Confidence: high
- Claim: A drawn Complication resolves immediately unless its effect specifies it is drawn face-down; a Complication text-flagged "Story Mission:" attaches to the current Story Mission (or the next one to enter play if none is active).
  Source: src-006
  Evidence: "Unless the effect indicates the Complication is drawn face down, you immediately resolve it. If it says 'Story Mission:' it is attached to the current Story Mission, or the next one to enter play if there currently is not one active"
  Confidence: high
- Claim: A Cobra Operative is any Cobra mission that is not a Precision Strike or Story Mission (Cobra Troopers, Cobra Battalion, Cobra Trooper (Ninja), Snow Serpents, the Elites from Raise the Flagg, all Cobra Officers, and all Decepticons from New Alliances).
  Source: src-006
  Evidence: "All Cobra missions that are not Precision Strikes or Story Missions are Cobra Operatives"
  Confidence: high
- Claim: Service Rifles (omitted from the original rulebook) are always available face-up near the lineup during setup.
  Source: src-006
  Evidence: "This was omitted from the original rulebook. They are always available in a face-up stack near the lineup"
  Confidence: high
- Claim: Dice rolled by Muskrat's ability cannot be affected by rerolls, whether player effects (e.g. Second Effort) or Cobra effects (e.g. Destro).
  Source: src-006
  Evidence: "they are not a part of your normal roll, so they cannot be rerolled by the players... or by Cobra effects (such as Destro)"
  Confidence: high
- Claim: In Shadow of the Serpent, when more than one Command Center tile is active, the highest-cost uncovered tile is always the one destroyed.
  Source: src-006
  Evidence: "The highest-cost uncovered tile is always the one that is destroyed, just like when placing Cobra Trooper (Ninja)"
  Confidence: high
- Claim: In Raise the Flagg, if playing without the Flagg, commandeered Cobra Transports go directly to the Hangar and are discarded to the Cobra Transports discard pile after being used on a mission; the VAMP is never placed on the Flagg, only ever in the Hangar or on a mission.
  Source: src-006
  Evidence: "They go directly to the Hangar. After being used on a Mission, they are immediately discarded to the Cobra Transports discard pile... It is only ever in the Hangar or on a mission"
  Confidence: high

## Open questions

None outstanding; the official FAQ (src-006) has been fully extracted and indexed as of 2026-08-05.
