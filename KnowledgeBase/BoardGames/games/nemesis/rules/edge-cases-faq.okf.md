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

# Edge cases and FAQ

## Movement, noise and encounters

- Claim: When escaping a room with multiple Intruders, draw one attack per Intruder in order Queen, Breeder, Adult, Larva.
  Source: src-002
  Evidence: FAQ Rules item 5.
  Confidence: high
- Claim: If Danger has no eligible nearby Intruder and every corridor is already noisy, nothing happens.
  Source: src-002
  Evidence: FAQ Rules item 4.
  Confidence: high
- Claim: Intruders may enter unexplored rooms. Fire may be placed there, but malfunction may not.
  Source: src-002
  Evidence: FAQ Rules items 10 and 22.
  Confidence: high
- Claim: Adult/Breeder bag-development tokens return immediately before resulting Noise rolls, so the same token may be drawn in an Encounter.
  Source: src-002
  Evidence: FAQ Rules item 7.
  Confidence: high

## Combat, wounds and infection

- Claim: Shoot is a Basic action, so a Hand Serious Wound does not add an Item-action surcharge to it.
  Source: src-002
  Evidence: FAQ Rules item 9.
  Confidence: high
- Claim: Light wounds escalate in pairs to a Serious Wound; a character with three Serious Wounds dies on any further wound. Dressing suppresses a Serious Wound effect but it still counts toward three.
  Source: src-003
  Evidence: Character Wounds and Death; Dressing and Healing.
  Confidence: high
- Claim: Scanning an infected contamination card places one Larva regardless of how many scanned cards are infected; scanning can kill only if a Larva was already present.
  Source: src-002, src-003
  Evidence: FAQ Actions item 19 and base scanning procedure.
  Confidence: high

## Escape pods, rooms and state

- Claim: Waiting in a pod passes the current turn; at the first round next turn the character may wait/pass, launch immediately, or leave into the evacuation room without spending an action and take a normal two-action round.
  Source: src-002
  Evidence: FAQ Rules item 2.
  Confidence: high
- Claim: A malfunction in the evacuation room blocks entering pods but does not stop an already boarded character from waiting, launching or leaving.
  Source: src-002
  Evidence: FAQ Rules item 3.
  Confidence: high
- Claim: Engine and coordinates room malfunctions block checking/changing those states, but do not themselves make an engine damaged or alter destination at endgame.
  Source: src-002
  Evidence: FAQ Rooms item 5.
  Confidence: high
- Claim: When pods auto-unlock at the first yellow Self-Destruct space, later relocking means the next yellow space does not auto-unlock them again.
  Source: src-002
  Evidence: FAQ Rules item 25.
  Confidence: high

## Elimination

In standard play, a dead, escaped or hibernated character stops acting and spectates. The first dead player may use the optional Intruder-player rules. Cooperative mode instead permits a corpse delivered to a functioning Emergency Room to revive at next turn start; official FAQ clarifies normal items remain with a cooperative corpse while heavy objects drop.
