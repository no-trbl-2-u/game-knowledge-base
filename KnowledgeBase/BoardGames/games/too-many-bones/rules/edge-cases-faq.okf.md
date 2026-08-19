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
  - id: "src-002"
    title: "Chip Theory Games — Too Many Bones"
    url: "https://chiptheorygames.com/products/too-many-bones"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-19"
    notes: "Official support lead; FAQ was not directly fetched."
  - id: "src-003"
    title: "UltraBoardGames — Too Many Bones rules"
    url: "https://www.ultraboardgames.com/too-many-bones/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-19"
    notes: "Secondary rules summary."
  - id: "src-006"
    title: "Too Many Bones Rulebook (v2.2)"
    url: "https://www.dropbox.com/scl/fi/mwe9nv6bb68gtkkhgx04o/TMB-Rulebook.pdf?rlkey=1y2zxkqw7mpi98aljmaoipjzq&e=1&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Official rulebook, retrieved and text-extracted in the 2026-08-19 librarian pass."
  - id: "src-007"
    title: "Chip Theory Games — Too Many Bones FAQs (support solutions index)"
    url: "https://tmbsupport.chiptheorygames.com/support/solutions/33000133540"
    kind: faq
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Solutions index confirms FAQ topic coverage; individual article bodies not yet retrieved."
confidence: high
status: needs_followup
last_verified: "2026-08-19"
---

## Source-backed facts

- Claim: Dice sitting in Active or Locked slots may be removed at any time during a Gearloc's turn (or at End of Battle) to free space; Skill dice are always Exhausted when removed this way, while Defense dice are simply returned to the supply.
  Source: src-006
  Evidence: "a player may remove dice from Active or Locked slots at any time during their turn or at the End of Battle ... Skill dice are always Exhausted when removed, while Def Dice are simply returned to the supply."
  Confidence: high
- Claim: Dice in Active slots (Defense dice and Active/Ally-Active Skill dice) must be removed at the end of battle or if the Gearloc is KO'd; Locked-slot Skill dice instead persist from battle to battle until used, and are removed only if the Gearloc is KO'd (unless playing in Adventurer mode).
  Source: src-006
  Evidence: "Active Dice remain here until used and must be removed at the end of battle or if Gearloc is KO'd"; "Locked Dice remain here from battle to battle until used. These dice must be removed if Gearloc is KO'd (unless playing in Adventurer mode)."
  Confidence: high
- Claim: A Multi-Bones Skill die occupies multiple Backup Plan slots; if a Backup Plan skill only consumes part of a Multi-Bones die's value, the entire die is used and any unspent Bones are lost.
  Source: src-006
  Evidence: "These take up multiple slots on the BP (skip slots to show this). If the BP Skill uses up only part of a Multi-Bones Die, the entire die is used and any unspent [Bones] are lost."
  Confidence: high
- Claim: The publisher maintains a categorized FAQ/support-solutions index covering battle timing, Baddie skills and encounter terms, Tyrant-specific rulings, and character-specific rulings for every base-game Gearloc, plus expansion sections (Shadow of the Serpent, Coldsnap, Raise the Flagg).
  Source: src-007
  Evidence: Support-solutions index lists categorized article titles under Battle, Baddie Skills and Encounter Terms, Tyrants, Specific Encounters, Loot, and per-Gearloc headings.
  Confidence: medium

## Open questions

- Individual FAQ article bodies (src-007 lists titles only) remain unretrieved; a future pass should fetch each article URL directly for exact rulings text.
- Tyrant-specific edge cases beyond the general Battle Sequence should be checked against those FAQ articles before operational use.