---
okf_version: 0.2
type: rule_category
game:
  title: "Battlestar Galactica: The Board Game"
  slug: "battlestar-galactica-the-board-game"
  bgg_id: 37111
  publisher: "Fantasy Flight Games"
  year: 2008
  edition: "English 2008 base game; corrected online rulebook"
scope: "base game; expansions excluded"
mechanics: ["cooperative-game", "hand-management", "hidden-information", "negotiation", "semi-cooperative-game", "variable-player-powers"]
sources:
  - id: "src-003"
    title: "Battlestar Galactica: The Board Game rulebook"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/0c/0c/0c0cc32c-6394-448c-b5c0-9307f85dfc74/bsg_rulebook_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Corrected 32-page English base-game rulebook."
  - id: "src-008"
    title: "Lines of Succession and Rules for Combat reference sheet"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/3e/d6/3ed67a6d-8067-41b4-870c-8c14bb72440a/reference_sheet_succession_and_combat_reference_sheet_eng.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Four-page official reference; base-game combat rules separated from expansion bullets; SHA-256 f64546490b8bb196733173c19cff653866467a2556404e7bfd4e80468ce2a4f5."
confidence: high
status: verified
---

# Actions

## Action menu

- Claim: A human's single normal action may activate the current location, use an Action on a Skill card or character sheet, activate the viper they pilot, use an Action on a title or Quorum card, reveal a Cylon Loyalty card, or do nothing.
  Source: src-003
  Evidence: Rulebook p. 10, "Action Step," complete action list.
  Confidence: high

- Claim: Text prefixed "Action:" consumes the Action step; other abilities are used at their stated timing, and the current player orders simultaneous abilities.
  Source: src-003
  Evidence: Rulebook p. 13 sidebar, "Using Abilities."
  Confidence: high

- Claim: Activating a viper allows one launch, adjacent move, or attack; an unmanned viper can be activated repeatedly in a turn.
  Source: src-003
  Evidence: Rulebook p. 25, "Activating Vipers"; FAQ-backed point is also stated in the official FAQ p. 3.
  Confidence: high

## Skill checks

- Claim: Resolve a base-game skill check by reading it, adding two Destiny cards, taking facedown contributions clockwise beginning left of the current player, shuffling, separating matching from nonmatching skills, subtracting totals, applying pass/partial/fail, and discarding contributions.
  Source: src-003
  Evidence: Rulebook pp. 16-17, "Skill Checks," steps 1-6 and "Partial Passes."
  Confidence: high

- Claim: Skill-card text is ignored when cards are contributed to a base-game skill check; only strength and skill type matter.
  Source: src-003
  Evidence: Rulebook p. 16, "Play Skills," states contributed card text is ignored.
  Confidence: high

## Crisis and jump decisions

- Claim: Cylon-attack crises activate existing ships left-to-right, place the illustrated new ships, then apply special rules; event crises execute their instructions immediately.
  Source: src-003
  Evidence: Rulebook pp. 10-11 and 22, "Crisis Step" and "Cylon Attack Cards."
  Confidence: high

- Claim: On a fleet jump, ships are removed, the Admiral draws two Destinations and chooses one, its instructions resolve, Kobol threshold instructions resolve, and the jump track resets.
  Source: src-003
  Evidence: Rulebook p. 13, "Jumping the Fleet," steps 1-5.
  Confidence: high

- Claim: Activating FTL Control is allowed from a blue jump-track space; on a result of 6 or less, population loss equals the printed risk before the normal jump procedure.
  Source: src-003
  Evidence: Rulebook p. 13, "FTL Control Jump."
  Confidence: high

## Combat resolution

- Claim: Raider priority is unmanned viper, piloted viper, civilian ship, movement toward the nearest civilian ship, then Galactica; each raider performs only its first available option once per activation.
  Source: src-008
  Evidence: Reference sheet p. 2, "Activate Raiders," numbered priorities 1-5.
  Confidence: high

- Claim: Heavy-raider activation first advances all centurions, then each heavy raider boards at a launch icon or moves toward the nearest launch icon.
  Source: src-008
  Evidence: Reference sheet p. 2, "Activate Heavy Raiders and Centurions."
  Confidence: high

- Claim: Attacks use the target-specific d8 table; base-game examples include raider destroyed on 3-8, unmanned viper destroyed on 7-8, piloted viper damaged on 5-7 and destroyed on 8, and Galactica damaged by a basestar on 4-8.
  Source: src-003
  Evidence: Rulebook p. 24 and p. 32, "Attack Table."
  Confidence: high

- Claim: A base-game nuke targets a basestar: 1-2 damages it twice, 3-6 destroys it, and 7-8 destroys it plus three normal raiders in its area.
  Source: src-008
  Evidence: Reference sheet p. 4, "Launching a Nuke," branch for not using the Exodus Cylon Fleet option.
  Confidence: high
