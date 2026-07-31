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
confidence: high
status: verified
---

# Scoring and Endgame

## No point scoring

- Claim: Victory is team-based rather than point-scored: all humans win together if they complete Kobol, while all Cylons win together if they stop them.
  Source: src-003
  Evidence: Rulebook pp. 2 and 6, "Game Overview" and "Object of the Game."
  Confidence: high

## Human victory

- Claim: Destination cards accumulate distance; at the first total of at least four, the Sleeper Agent instructions resolve, and at the first total of at least eight, humans become one jump from victory.
  Source: src-003
  Evidence: Rulebook pp. 13-14, "Jumping the Fleet" step 4 and "Kobol Objective Card."
  Confidence: high

- Claim: After reaching at least eight distance, the next fleet jump wins immediately without drawing a Destination, provided every resource remains above zero.
  Source: src-003
  Evidence: Rulebook p. 14, "Reach Kobol."
  Confidence: high

- Claim: An FTL Control jump can still lose population before the victory jump resolves, so a fleet at one population does not win if that activation reduces population to zero.
  Source: src-003
  Evidence: Rulebook p. 14, "Reach Kobol" example.
  Confidence: high

## Cylon victory

- Claim: Cylons win if any fuel, food, morale, or population resource is zero or lower at the end of a player's turn.
  Source: src-003
  Evidence: Rulebook p. 18, "Run Out a Resource."
  Confidence: high

- Claim: Reaching zero during a turn is not immediately terminal if the same turn restores the resource above zero before its end.
  Source: src-003
  Evidence: Rulebook p. 18 notes that a resource may reach zero and then be increased during the same turn without losing.
  Confidence: high

- Claim: Cylons also win immediately when a centurion reaches the end of the Boarding Party track or when six Galactica locations simultaneously carry damage tokens.
  Source: src-003
  Evidence: Rulebook pp. 18, 24, and 25, "Centurion Invasion," "Activate Heavy Raiders and Centurions," and "Damage Tokens."
  Confidence: high

## Team identity at resolution

- Claim: Possessing at least one "You Are a Cylon" Loyalty card makes that player a Cylon regardless of any "You Are Not a Cylon" cards.
  Source: src-003
  Evidence: Rulebook p. 18, "Loyalty Cards," Important paragraph.
  Confidence: high

- Claim: The four- or six-player Sympathizer resolves as human in the Brig when any resource is in red, otherwise as a restricted revealed Cylon.
  Source: src-003
  Evidence: Rulebook p. 19, "Sympathizer."
  Confidence: high
