---
okf_version: 0.2
type: rule_category
game:
  title: "Nemesis"
  slug: "nemesis"
  bgg_id: 167355
  publisher: "Awaken Realms"
  year: 2018
  weight: null
  edition: "English original base game"
scope: "base game"
mechanics: [cooperative-game, dice-rolling, hand-management, hidden-information, modular-board, negotiation, solo-solitaire-game, variable-player-powers, variable-setup]
sources:
  - id: "src-002"
    title: "Nemesis official game FAQ v2.2"
    url: "https://awakenrealms.com/images/download/Nemesis/ENG/Nemesis_FAQ_v2.1.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-23"
    notes: "Official file currently headed v2.2, dated 2025-04-16; includes a base-rules section plus clearly separated expansion sections."
  - id: "src-003"
    title: "UltraBoardGames — Nemesis game rules"
    url: "https://www.ultraboardgames.com/nemesis/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-23"
    notes: "Detailed rulebook transcription used as a searchable secondary cross-check."
confidence: high
status: verified
---

# Scoring and endgame

## No score track

Standard victory is individual and binary: survive all applicable checks and complete the retained objective. Multiple players may win.

## End triggers

- Claim: Play ends when Time reaches its final red space; Self-Destruct reaches its skull; a ninth fire/malfunction would be placed; or the last active character dies, hibernates or escapes.
  Source: src-003
  Evidence: End of the Game.
  Confidence: high
- Claim: Hyperjump kills awake shipboard characters but not Intruders; ship destruction kills everyone and everything aboard, including hibernators and Intruders.
  Source: src-003
  Evidence: Time and destruction end-condition notes.
  Confidence: high

## Victory-check order

1. **Engines:** reveal top state for all three; two or three damaged engines explode the ship and kill hibernators.
2. **Coordinates/destination:** reveal Coordinates and read current destination; hibernators normally die unless headed to Earth (Quarantine/Mars is its stated exception).
3. **Contamination:** every surviving escapee/hibernator scans all contamination. If any is infected, shuffle the full action/contamination pool and draw four; any contamination among those four kills the character. A larva already on the board skips directly to this draw test.
4. **Objective:** only characters still alive reveal and test their retained objective.

- Claim: Escape-pod survivors bypass engine and destination death but still make contamination and objective checks.
  Source: src-003
  Evidence: Victory Check applies contamination to both hibernated and evacuated characters, while engine/destination text names hibernators.
  Confidence: high
- Claim: A hibernated character is out of play and ignores later room fire, but still dies if the ship is destroyed.
  Source: src-002
  Evidence: FAQ Rules item 13.
  Confidence: high
- Claim: Starting Self-Destruct late does not defer explosion beyond jump/end; if still active it resolves when the ship would jump or the final active character leaves.
  Source: src-002
  Evidence: FAQ Rules item 20.
  Confidence: high
