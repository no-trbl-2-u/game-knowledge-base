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

- Claim: On the alternate board, underground movement remains standard, while Surface setup uses Surface Exploration tokens and the Mars Surface deck. Crossroads connect by Paths, Areas act as Building-specific Technical Corridors but reject Technical-Corridor effects, surface Noise uses the D12, and on-foot movement reveals/resolves Surface Exploration before Noise; the Rover instead moves a non-combat Character between Exit Rooms without Noise and can carry that Character to the Bunker.
  Source: src-001
  Evidence: Rulebook pp. 30-32, Alternative side, Crossroads & Areas, Mars Surface, Rover, Buildings, and Mars Surface die & deck.
  Confidence: high

- Claim: Elevator use requires elevator Power and no combat. A Character may call the Elevator token to their Section's Elevator Room, or—when the token is already there—move it and their Character to another Section's Elevator Room, optionally carrying consenting Characters from the same Room; this movement makes no Noise roll. A Malfunction disables the Elevator Room action under the normal Room rule.
  Source: src-001, src-002
  Evidence: Rulebook pp. 19 and 24; Room Sheet p. 4, Elevator Rooms S-01 through S-03.
  Confidence: high

- Claim: Computer Actions require a powered Section and a working computer; Room Actions require the matching Room, no combat, and no Malfunction unless local text says otherwise. Hidden card effects and Room/component-local instructions are not reconstructed beyond the acquired framework.
  Source: src-001, src-002
  Evidence: Rulebook pp. 15 and 27-31; Room Sheet pp. 1-4.
  Confidence: high

- Claim: An Encounter clears connected Noise, draws one bag token, places its matching miniature, and compares hand size with the powered/unpowered token number; a short hand causes a Surprise Attack against the triggering Character. A normal Intruder Attack targets the same-Room Character with the fewest Action cards (turn-order tie-break), then draws an Attack card: matching Intruder symbol resolves its effect plus any applicable Darkness effect, while no match misses; exact Attack-card text remains UNKNOWN.
  Source: src-001
  Evidence: Rulebook pp. 20 and 22, Encounter, Surprise Attack, Night Stalker tokens, and Intruder Attack.
  Confidence: high

- Claim: Shooting spends Ammo and uses the Advantage die only in powered Sections; melee adds Contamination and risks a Serious Wound on a miss. Injury checks kill Larvae/Eggs at one Injury, test Creepers/Adults against one Attack-card blood value and Breeders/Queen against two summed values, or retreat on a drawn retreat symbol by Event-card direction; Character death occurs upon any further Wound while holding three Serious Wounds.
  Source: src-001
  Evidence: Rulebook pp. 20-23, Character Attacks, Intruder Injuries and Death, Intruder Retreat, and Character Wounds and Death.
  Confidence: high
