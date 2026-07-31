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
  - id: "src-007"
    title: "Resolving Player Turns and Special Events reference sheet"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/47/f6/47f601ed-849a-4cbf-84ef-ad1a3e4420f2/reference_sheet_player_turns_eng.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Four-page official reference; base-game instructions separated from expansion bullets; SHA-256 344eb416bcc37452f6586d9805243c9d9c89f1c7f129939d8e97a5e03fb3348f."
confidence: high
status: verified
---

# Turn Structure

## Human turn

- Claim: Play passes clockwise, and a human turn resolves Receive Skills, Movement, Action, Crisis, Activate Cylon Ships, and Prepare for Jump in that order.
  Source: src-003
  Evidence: Rulebook p. 9, "Game Turn," steps 1-6 and the closing handoff instruction.
  Confidence: high

- Claim: During Receive Skills, the player draws the exact skill set on the character sheet regardless of current hand size; a multiskill total may be divided between its listed types.
  Source: src-003
  Evidence: Rulebook p. 9, "Receive Skills Step."
  Confidence: high

- Claim: A human may move to a non-Cylon, nonhazard location, paying one Skill card when changing ships; a viper pilot may instead move to an adjacent space area or land by movement.
  Source: src-003
  Evidence: Rulebook p. 10, "Movement Step," and pp. 26-27, "Moving and Actions when Piloting" and "Moving from a Viper."
  Confidence: high

- Claim: A character in Sickbay draws only one Skill card, while a character in the Brig does not draw a Crisis card and is restricted in movement and skill-check contribution.
  Source: src-007
  Evidence: Reference sheet p. 2, "Human Player's Turn," steps 1 and 4; p. 1, "Skill Checks," step 3.
  Confidence: high

- Claim: Multiple Crisis cards resolved in one turn have their Cylon activation icons resolved in draw order and their jump icons each advance the fleet marker.
  Source: src-007
  Evidence: Reference sheet p. 2, "Human Player's Turn," steps 5-6.
  Confidence: high

## Revealed Cylon turn

- Claim: A revealed Cylon draws two Skill cards of different types, moves to any Cylon location, and activates that location; the normal Crisis and automatic Cylon-activation steps are absent.
  Source: src-007
  Evidence: Reference sheet p. 3, "Cylon Player Turn," steps 1-3; corrected rulebook p. 20, "Revealed Cylon Players' Turns."
  Confidence: high

- Claim: A revealed Cylon cannot use Skill-card printed abilities or character abilities and may contribute at most one Skill card to each check.
  Source: src-003
  Evidence: Rulebook p. 20, "Revealed Cylon Players' Skill Cards" and "Revealed Cylon Players' Turns."
  Confidence: high

## End-of-turn maintenance

- Claim: After Prepare for Jump, the current player discards resolved Crisis cards, passes the current-player token left, and every player above ten Skill cards discards to ten.
  Source: src-003
  Evidence: Rulebook pp. 11 and 15, end of "Prepare for Jump Step" and "Hand Limit and Discarding."
  Confidence: high
