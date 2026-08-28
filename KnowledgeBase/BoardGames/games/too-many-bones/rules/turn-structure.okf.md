---
okf_version: 0.2
type: rule_category
game:
  title: "Too Many Bones"
  slug: "too-many-bones"
  bgg_id: 192135
  publisher: "Chip Theory Games"
  year: 2017
  weight: null
  edition: "English base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, hand-management, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-003"
    title: "UltraBoardGames — Too Many Bones rules"
    url: "https://www.ultraboardgames.com/too-many-bones/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-19"
    notes: "Turn and battle summary; cross-checked against the official rulebook."
  - id: "src-006"
    title: "Too Many Bones Rulebook (v2.2)"
    url: "https://www.dropbox.com/scl/fi/mwe9nv6bb68gtkkhgx04o/TMB-Rulebook.pdf?rlkey=1y2zxkqw7mpi98aljmaoipjzq&e=1&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Official rulebook, retrieved and text-extracted in the 2026-08-19 librarian pass."
confidence: high
status: verified
last_verified: "2026-08-19"
---

## Turn structure

- Claim: The adventure alternates between encounter days (New Day / Encounter / Reward / Recovery phases) and, when an Encounter choice is a battle, a tactical Battle Sequence on the Battle Mat.
  Source: src-003, src-006
  Evidence: Rulebook Battle Sequence diagram (steps A–I) sits alongside the four-phase day cycle described in Gameplay Overview.
  Confidence: high
- Claim: Each Gearloc's turn follows a fixed sequence: Start of Turn, Move, Determine Target, Select and Roll Dice, Resolve the Roll (Target Dmg & Effects, Non-Target Dmg & Effects, Allocate Active/Locked/BP Dice, Use Backup Plan), Baddies React, End of Turn.
  Source: src-006
  Evidence: Rulebook, Battle Sequence — "Gearloc Turn Sequence: 1. Start of Turn 2. Move Gearloc 3. Determine Target 4. Select and Roll Dice 5. Resolve the Roll ... 6. Baddies React 7. End of Turn."
  Confidence: high
- Claim: A Baddie's turn follows its own sequence: Start of Turn, Determine Target(s), Move, Skills, Roll Dice, Resolve the Roll (Place Def on Baddie, Apply Dmg to Target(s), Resolve Skills, Resolve Tyrant Die), Gearlocs React, End of Turn.
  Source: src-006
  Evidence: Rulebook, Battle Sequence — "Baddie Turn Sequence: 1. Start of Turn 2. Determine Target(s) 3. Move 4. Skills 5. Roll Dice 6. Resolve the Roll ... 7. Gearlocs React 8. End of Turn."
  Confidence: high
- Claim: Initiative order is set on the Initiative Meter: each Baddie's Ini Die is placed using its printed Initiative value (highest first), and each player rolls their Gearloc's unique Ini Die to determine their own Meter spot; once battle begins, the original Initiative number no longer matters, only the current Meter position, which Skills can shift.
  Source: src-003, src-006
  Evidence: Rulebook — "Place the Ini Die of each Baddie in the Ini Meter (highest ...)"; "Each player rolls their unique Gearloc Ini Die to determine their spot on the Ini Meter ... longer matters. During battle, certain Skills can modify the Ini Meter."
  Confidence: high

## Rules / Mechanics

The day track supplies the campaign rhythm; the battle mat supplies the local rhythm. Units act in Initiative Meter order each round; after a full pass, defeated Baddies return from the Baddie Queue (20-point Baddies and Tyrants to the top, others to the bottom) before the next round begins.