---
okf_version: 0.2
type: rule_category
game:
  title: "Nemesis: Lockdown"
  slug: "nemesis-lockdown"
  bgg_id: 310100
  publisher: "Awaken Realms"
  year: 2022
  weight: null
  edition: "English 2022 first-release retail core box; 2021-dated base rulebook bytes plus 2022-03-25 FAQ"
scope: "English first-release retail core box only; crowdfunding bundles, Stretch Goals, expansions, add-ons, compatibility content, translations, reprints, and digital adaptation excluded"
mechanics: ["action-points", "cooperative-game", "dice-rolling", "hand-management", "hidden-information", "modular-board", "semi-cooperative-game", "solo-solitaire-game", "variable-player-powers"]
sources:
  - id: "src-001"
    title: "Nemesis: Lockdown Corebox Rulebook"
    url: "https://awakenrealms.com/images/download/Nemesis_Lockdown/ENG/Nemesis_LD_Rulebook_280x280mm_bleed3mm-32-pages.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "32 pages; 6,075,325 bytes; SHA-256 d8a939c54552e640b1d0efa1b7552a81e8b4205f04029634eb7f58d10ff2ef43; 810.709 x 810.709 pt; created 2021-08-06; modified 2021-11-18; producer iLovePDF."
  - id: "src-002"
    title: "Nemesis: Lockdown Room Sheet"
    url: "https://awakenrealms.com/images/download/Nemesis_Lockdown/ENG/Nemesis_LD_Room_Sheet_280x280mm_bleed3mm-4-pages.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "4 pages; 8,062,167 bytes; SHA-256 6a88875bf52a04c681e373a8cceb8c676130ede505e1710ea5901494753294d4; 810.709 x 810.709 pt; created/modified 2021-08-06."
  - id: "src-003"
    title: "Nemesis: Lockdown Official Game FAQ"
    url: "https://awakenrealms.com/images/download/Nemesis_Lockdown/ENG/LOCKDOWN_FAQ_297x214mm_bleed3mm_3-pages.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Dated 2022-03-25; 3 pages; 678,267 bytes; SHA-256 c5b9bf1297bb68bc2107d0591af3c2b81a24b75a816f42a889b1d467aff6648f; 612.283 x 858.898 pt."
confidence: medium
status: needs_followup
---

# Actions, Movement, Exploration, and Combat

- Claim: Action costs discard the stated number of Action cards; Contamination cannot pay costs. Basic actions include movement, careful movement, pickup, trade, crafting, shooting, and melee, constrained by combat symbols.
  Source: src-001
  Evidence: Rulebook pp. 14-15.
  Confidence: high

- Claim: Movement enters a neighboring Room through an unblocked Corridor; an unexplored Room is revealed with its Exploration token, the Item Counter is set except for the Nest, and its one-time Silence, Danger, Slime, Fire, Malfunction, or Door effect is resolved before any remaining Noise step. An empty destination then rolls Noise; 1-4 places Noise in the numbered Corridor, an occupied Corridor triggers an Encounter, Danger moves eligible neighboring Intruders or fills empty connected Corridors, and Silence does nothing unless Slime converts it to Danger.
  Source: src-001
  Evidence: Rulebook pp. 16-17, Movement Action, Exploration Tokens, and Noise Roll.
  Confidence: high

- Claim: The FAQ controls the apparent Careful Movement contradiction: revealing Danger through Careful Movement still resolves Danger.
  Source: src-003
  Evidence: FAQ p. 2, Errata question 3.
  Confidence: high

- Claim: Technical Corridor Entrances and the shared Corridor space are normally inaccessible to Characters; numbered Noise is placed in the shared space, encounters can trigger there, Doors cannot be placed there, and an Intruder entering returns its token to the bag while its miniature and injuries leave the board. Only the expressly named Vents card, Cave Entrance Room Action, and Cave Plans item permit Character use; Cave Entrance moves to an explored Entrance Room and resolves an Adult-in-Darkness Attack card.
  Source: src-001, src-002
  Evidence: Rulebook p. 18, Technical Corridors; Room Sheet p. 1, Cave Entrance.
  Confidence: high

- Claim: On the alternate board, Paths connect neighboring Crossroads (or a Crossroads and Exit Room), never hold Noise, and allow Character and eligible Intruder movement; every Crossroads is also connected to every numbered Area.
  Source: src-001
  Evidence: Rulebook p. 31, Crossroads & Areas.
  Confidence: high

- Claim: Each Area is Technical-Corridor-like only for its particular surrounding Building, except Area 3 is connected to no Building. Effects that name Technical Corridors do not apply to Areas.
  Source: src-001
  Evidence: Rulebook p. 31, Crossroads & Areas.
  Confidence: high

- Claim: Buildings are Room clusters entered through Exit Rooms. On-foot surface movement follows the normal Movement sequence: enter a connected Crossroads, reveal and resolve any Surface Exploration token, then roll Noise unless another Character or Intruder is there.
  Source: src-001
  Evidence: Rulebook pp. 30-32, Surface Exploration tokens, Moving on the Mars Surface, and Buildings.
  Confidence: high

- Claim: Mars Surface D12 results 1-4 and Silence use their normal branches. Danger in a Building uses its surrounding Area under normal rules; Danger at a Crossroads moves every eligible surface Intruder there, or, if none can move, fills every empty Area with Noise. The Mars symbol draws and resolves one Mars Surface card; exact card-local effects remain UNKNOWN.
  Source: src-001
  Evidence: Rulebook pp. 30 and 32, Mars Surface and Mars Surface die & deck.
  Confidence: high

- Claim: Escape to the Bunker is impossible while the Main Gate is closed. It opens upon the first Character death, red Autodestruction, or an explicit qualifying effect and cannot close again; ordinary Door-opening effects do not affect it.
  Source: src-001
  Evidence: Rulebook pp. 10-11, First Dead Character, Autodestruction sequence, and The Main Gate.
  Confidence: high

- Claim: On the alternate side, the on-foot Bunker route requires a Crossroads connected to the Bunker, an Enviro-Suit, and a Noise roll that produces no Intruder. Rover use is a separate route: a non-combat Character with the Rover in an Exit Room may move it between Exit Rooms without Noise or use it to escape under the stated Main Gate rules.
  Source: src-001
  Evidence: Rulebook pp. 11 and 31-32, Escape the Facility Action, The Main Gate, Rover, and Buildings.
  Confidence: high

- Claim: Elevator use requires elevator Power and no combat. A Character may call the Elevator token to their Section's Elevator Room, or—when the token is already there—move it and their Character to another Section's Elevator Room, optionally carrying consenting Characters from the same Room; this movement makes no Noise roll. A Malfunction disables the Elevator Room action under the normal Room rule.
  Source: src-001, src-002
  Evidence: Rulebook pp. 19 and 24; Room Sheet p. 4, Elevator Rooms S-01 through S-03.
  Confidence: high

- Claim: Computer Actions require a powered Section and a working computer; Room Actions require the matching Room, no combat, and no Malfunction unless local text says otherwise. Hidden card effects and Room/component-local instructions are not reconstructed beyond the acquired framework.
  Source: src-001, src-002
  Evidence: Rulebook pp. 15 and 27-31; Room Sheet pp. 1-4.
  Confidence: high

- Claim: An Encounter first clears Noise from every connected Corridor, including a connected Technical Corridor, then draws one bag token. If it is an Intruder token, place the matching miniature and compare the triggering Character's hand with the token's lower number when that Character is not in Darkness or higher number when in Darkness; a short hand causes a Surprise Attack against that Character.
  Source: src-001
  Evidence: Rulebook p. 20, Encounter, Surprise Attack, and Night Stalker tokens.
  Confidence: high

- Claim: If the Encounter draws the Blank token, place Noise in every Corridor connected to the triggering Room; if Blank was the bag's last token, add one Adult token when available; return Blank to the bag and end the Encounter. This branch places no miniature and makes no Surprise comparison.
  Source: src-001
  Evidence: Rulebook p. 20, Blank Token.
  Confidence: high

- Claim: A normal Intruder Attack targets the same-Room Character with the fewest Action cards (turn-order tie-break), then draws an Attack card: a matching Intruder symbol resolves its effect plus any applicable Darkness effect, while no match misses; exact Attack-card text remains UNKNOWN.
  Source: src-001
  Evidence: Rulebook p. 22, Intruder Attack.
  Confidence: high

- Claim: Shooting spends Ammo and uses the Advantage die only in powered Sections; melee adds Contamination and risks a Serious Wound on a miss. Injury checks kill Larvae/Eggs at one Injury, test Creepers/Adults against one Attack-card blood value and Breeders/Queen against two summed values, or retreat on a drawn retreat symbol by Event-card direction; Character death occurs upon any further Wound while holding three Serious Wounds.
  Source: src-001
  Evidence: Rulebook pp. 20-23, Character Attacks, Intruder Injuries and Death, Intruder Retreat, and Character Wounds and Death.
  Confidence: high
