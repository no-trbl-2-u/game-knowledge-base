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
    retrieved_at: "2026-08-12"
    notes: "Retrieved and extracted successfully with `curl -L` plus `pdftotext -layout`; prior run only had raw PDF bytes with no readable text."
confidence: high
status: verified
---

## Summary

The rulebook establishes the general timing hierarchy, and the publisher-linked FAQ supplies card-specific clarifications across the core set and the Shadow of the Serpent, Coldsnap, and Raise the Flagg expansions.

## Source-backed facts

- Claim: Start-of-turn effects resolve before the Action Phase, and no cards may be played during Start Phase.
  Source: src-003
  Evidence: Rulebook p. 7, Start Phase.
  Confidence: high
- Claim: End-of-round effects occur after all players complete one turn.
  Source: src-003
  Evidence: Rulebook p. 7 and End of Round token reference.
  Confidence: high

## FAQ answers — general timing and Complications

- Claim: A card that enters play with a Start of Turn effect (e.g. Major Bludd) does not trigger that effect the same turn it enters, because the Start of Turn moment for that turn has already passed.
  Source: src-006
  Evidence: "No. The moment for Start of Turn effects has passed after the Story Mission enters play, so the effect will not happen until the next turn."
  Confidence: high
- Claim: Complications attached to a Story Mission that fails via a card effect (e.g. a Precision Strike) stay in play and attach to the next Story Mission; Complications on a mission that fails by being attempted are discarded even though the mission itself stays in play as a failure penalty.
  Source: src-006
  Evidence: "If the Story Mission was failed by a card effect... any attached Complications stay in play and attach to the next Story Mission. If it fails by attempting the mission, they are discarded, even if the mission itself stays in play as part of its failure penalty."
  Confidence: high
- Claim: A mission with an "&" between two listed skills counts dice from both applicable skills, plus any Wild skill, toward the roll.
  Source: src-006
  Evidence: "Yes, \"and\" missions count both applicable skills, as well as any Wild skill."
  Confidence: high
- Claim: A mission starts once Transport and Joes are locked in; after that point the mission's Joe lineup is locked (absent an explicit exception like Halo Jump), Complications are revealed and resolved, and only then is the skill total rolled.
  Source: src-006
  Evidence: "A mission is not started until the choice of Transport and Joes are locked in... you no longer can change the makeup of the Joes on your mission (unless another card explicitly allows you to do so, such as Halo Jump). You then reveal Complications (if any), and resolve them. After Complications are resolved, you total your skill and roll."
  Confidence: high
- Claim: In solo play there are two turns per round; Start of Turn and End of Turn effects happen on each of the solo player's turns, but End of Round effects happen only every other turn.
  Source: src-006
  Evidence: "Yes. There are two turns in a round. The Start of Turn and End of Turn effects happen on each of your turns, but End of Round effects only happen every other turn."
  Confidence: high
- Claim: Colored squares on cards refer to the threat meter; the ability following a colored square activates when played only if the threat meter is currently in that indicated color.
  Source: src-006
  Evidence: "They refer to the threat meter. The ability following the colored square will activate when played if the threat meter is in the indicated color."
  Confidence: high
- Claim: The [M] symbol is a timing restriction on non-active players only; the active player may play any applicable Gear or Utility card at any point during a mission even without the [M] symbol.
  Source: src-006
  Evidence: "The [M] symbol is only a timing restriction on the non-active players. The active player can play any of their applicable Gear or Utility cards at any point during a mission, even if they do not have the [M] symbol."
  Confidence: high
- Claim: A drawn Complication resolves immediately unless the source effect specifies it is drawn face-down; a Complication whose text says "Story Mission:" attaches to the current Story Mission (or the next one to enter play if none is active), while all other Complications take effect immediately.
  Source: src-006
  Evidence: "Unless the effect indicates the Complication is drawn facedown, you immediately resolve it. If it says \"Story Mission:\" it is attached to the current Story Mission, or the next one to enter play if there currently is not one active. All other Complications take effect immediately when drawn."
  Confidence: high
- Claim: "Cobra Operative" covers every Cobra mission that is not a Precision Strike or Story Mission, including Cobra Troopers, Cobra Battalion, Cobra Trooper (Ninja), Snow Serpents, the Elites from Raise the Flagg, all Cobra Officers, and all Decepticons from New Alliances.
  Source: src-006
  Evidence: "All Cobra missions that are not Precision Strikes or Story Missions are Cobra Operatives. So far this includes: Cobra Troopers, Cobra Battalion, Cobra Trooper (Ninja), Snow Serpents, the Elites from Raise the Flagg, all Cobra Officers, and all Decepticons from New Alliances."
  Confidence: high

## FAQ answers — Core Set

- Claim: If Disrupt the Drone Strike (or a similar Precision Strike) triggers while no Story Mission is in play, the player completes as much of the effect as possible and the Precision Strike is discarded with no further effect, since there is no Story Mission to fail.
  Source: src-006
  Evidence: "You complete as much of the effect as you can. There is no Story Mission to fail, so the Precision Strike is discarded and nothing else happens."
  Confidence: high
- Claim: Destro's forced reroll of double hits applies only to the initial roll; if a reroll (whether from Destro or another reroll effect) produces more double hits, Destro does not force another reroll.
  Source: src-006
  Evidence: "Destro's effect only forces you to reroll double hits on the initial roll. If the reroll is more double hits, or later reroll effects provide double hits, Destro does not activate again."
  Confidence: high
- Claim: Service Rifles, omitted from the original rulebook's setup text, are always available in a face-up stack near the lineup during setup.
  Source: src-006
  Evidence: "This was omitted from the original rulebook. They are always available in a face-up stack near the line up."
  Confidence: high
- Claim: Flint's ability only triggers if there are 2 Transports in the Hangar after a mission starts; it does not count the Transport currently used for the active mission, since even the VAMP is temporarily out of the Hangar while on a mission.
  Source: src-006
  Evidence: "No, his ability would only trigger if there were 2 Transports in the Hangar after starting the mission. Remember, even the VAMP is temporarily out of the Hangar when sent on a mission."
  Confidence: high
- Claim: Rocket Launcher's "this mission" wording means it can only discard Complications from the Story Mission itself, not from a side mission being attempted.
  Source: src-006
  Evidence: "Rocket Launcher says \"this\" mission, so you must attempt the Story Mission to remove Complications from it."
  Confidence: high
- Claim: Dice rolled by Muskrat are not part of the normal roll and cannot be rerolled by players (e.g. via Second Effort) or by Cobra effects (e.g. Destro).
  Source: src-006
  Evidence: "No, they are not a part of your normal roll, so they cannot be rerolled by the players (for example, with Second Effort) or by Cobra effects (such as Destro)."
  Confidence: high

## FAQ answers — Shadow of the Serpent, Coldsnap, Raise the Flagg

- Claim: When multiple Command Center tiles are active and one is destroyed, the highest-cost uncovered tile is always the one destroyed, matching the Cobra Trooper (Ninja) placement rule.
  Source: src-006
  Evidence: "The highest-cost uncovered tile is always the one that is destroyed, just like when placing Cobra Trooper (Ninja)."
  Confidence: high
- Claim: Transports in the Repair Bay do not count as covering a tile for the Command Room's ability.
  Source: src-006
  Evidence: "No, the Transports don't do Cobra's work for them!"
  Confidence: high
- Claim: If a Complication puts Dr. Venom into play after a mission has started, his ability does not affect Leaders already on that mission, but it would prevent assigning Leaders if Joes are added to the mission later (e.g. via Halo Jump).
  Source: src-006
  Evidence: "When the Complication is revealed, the mission has already started so Dr. Venom's ability would not have any effect on Joe's currently on the mission. However, if you have a way to add Joes to the mission later (such as HALO Jump), his ability would prevent you from assigning Leaders to the mission at that point."
  Confidence: high
- Claim: Storm Shadow the playable Leader and Storm Shadow the Cobra Operative may both be in the same game.
  Source: src-006
  Evidence: "Yes. Don't think about it too hard!"
  Confidence: high
- Claim: Cards left underneath Cobra Arena of Sport after the mission is defeated are placed back on top of the main deck in an order of the player's choice.
  Source: src-006
  Evidence: "Place them back on top of the main deck in the order of your choice."
  Confidence: high
- Claim: When playing without the Flagg, commandeered Cobra Transports go directly to the Hangar, and after being used on a mission are immediately discarded to the Cobra Transports discard pile.
  Source: src-006
  Evidence: "They go directly to the Hangar. After being used on a Mission, they are immediately discarded to the Cobra Transports discard pile."
  Confidence: high
- Claim: A Transport currently on the Flagg cannot be taken on a mission on its own; it must first go on a mission with the Flagg, after which it moves to the Hangar and can be used normally from there.
  Source: src-006
  Evidence: "No. You have to first go on a mission with the Flagg, after which the Transport goes to your Hangar, and may be used from there as normal."
  Confidence: high
- Claim: The VAMP is never placed on the Flagg; it is only ever in the Hangar or on a mission.
  Source: src-006
  Evidence: "No. It is only ever in the Hangar or on a mission."
  Confidence: high

## Retry notes

- 2026-08-12 (librarian pass): `src-006` resolved. WebFetch's own extraction still returned garbled, space-stripped text; `curl -L` followed by `pdftotext -layout` produced clean text across all 3 pages. All FAQ questions were indexed above by section (General/Core Set, Shadow of the Serpent, Coldsnap, Raise the Flagg) with direct quotes.
