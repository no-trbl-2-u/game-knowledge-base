---
okf_version: 0.2
type: rule_category
game:
  title: "Betrayal Legacy"
  slug: "betrayal-legacy"
  bgg_id: 240196
  publisher: "Avalon Hill"
  year: 2018
  weight: 2.92
  edition: "Hasbro F3147 support bundle; exact 2018 equivalence unproven"
scope: "actions, checks, damage, and combat"
mechanics: ["campaign-game", "cooperative-game", "dice-rolling", "hidden-information", "legacy-game", "modular-board", "semi-cooperative-game", "tile-placement", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-003"
    title: "Hasbro F3147 English rules bundle"
    url: "https://instructions.hasbro.com/api/download/F3147_en-us_avalon-hill-betrayal-legacy-role-playing-haunted-narrative-board-game.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; 84 pages; SHA-256 5c558dacdc495c13ff5ae7d36db4a2dc8ced0e02e39b156d0075c9de4b4a60c9."
  - id: "src-007"
    title: "Official 2018 Wizards Betrayal Legacy rulebook"
    url: "https://media.wizards.com/2018/downloads/rules/BLY-Rulebook-web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; 5,358,358 bytes; 23 pages; SHA-256 ab30782170e8e8d6c794486385422517aad54e0b2ae2781126bfae30bc11ad5e."
confidence: medium
status: needs_followup
---

# Actions, Checks, and Combat

- Claim: The rules define reusable action keywords including ATTACK, CHALLENGE, DRINK, DROP, EAT, GIVE, INVOKE, OPERATE, PICK UP, PREPARE, SEARCH, STUDY, TAKE, TALK, and WEAR; component or haunt text supplies eligibility and resolution.
  Source: src-003, src-007
  Evidence: "Actions," printed Rules p.14 (PDF p.9).
  Confidence: high

- Claim: Trait rolls use a number of dice equal to the relevant trait unless modified; results are the sum of rolled pips, and many effects compare that sum with a threshold or opponent.
  Source: src-003, src-007
  Evidence: "Dice and Dice Rolls," printed Rules p.8 (PDF p.6).
  Confidence: high

- Claim: In a standard attack, the attacker and target roll the named trait and the lower result takes damage equal to the difference; ties do no damage unless a specific effect says otherwise.
  Source: src-003, src-007
  Evidence: "Attack" and combat example, printed Rules p.15 (PDF p.9).
  Confidence: high

- Claim: Physical damage reduces Might and/or Speed, mental damage reduces Knowledge and/or Sanity, and general damage may be split among any traits.
  Source: src-003, src-007
  Evidence: "Damage, Gaining, Losing, and Healing," printed Rules p.7 (PDF p.5).
  Confidence: high

- Claim: An attack can use Might or another trait when a card or haunt permits; STEAL can substitute for dealing two or more damage when its conditions are met.
  Source: src-003, src-007
  Evidence: "Other Attacks" and "Steal," printed Rules p.15 (PDF p.9).
  Confidence: high
