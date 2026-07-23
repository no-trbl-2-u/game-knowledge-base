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
  - id: "src-003"
    title: "UltraBoardGames — Nemesis game rules"
    url: "https://www.ultraboardgames.com/nemesis/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-23"
    notes: "Detailed rulebook transcription used as a searchable secondary cross-check."
  - id: "src-002"
    title: "Nemesis official game FAQ v2.2"
    url: "https://awakenrealms.com/images/download/Nemesis/ENG/Nemesis_FAQ_v2.1.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-23"
    notes: "Official file currently headed v2.2, dated 2025-04-16; includes a base-rules section plus clearly separated expansion sections."
confidence: high
status: verified
---

# Turn structure

## Player phase

- Claim: Everyone draws to five cards, then the first-player token passes left (except on turn one).
  Source: src-003
  Evidence: Player Phase steps 1–2.
  Confidence: high
- Claim: In clockwise rounds, each unpassed player performs two actions; rounds repeat until everyone has passed. Taking only one action forces that player to pass, and a passed player takes no further actions that phase.
  Source: src-003
  Evidence: Player Phase — Player Rounds.
  Confidence: high
- Claim: Pass itself is an action; reaching zero cards does not automatically pass, and a player may need to wait until their next round to do so.
  Source: src-002
  Evidence: FAQ Rules/Actions item 18: “Pass is an Action in Nemesis.”
  Confidence: high

## Event phase

- Claim: Resolve in order: advance Time and active Self-Destruct; Intruders in combat attack; fire injures Intruders; draw an Event for movement then effect; develop the Intruder bag; finish every resulting encounter before a new turn.
  Source: src-003
  Evidence: Event Phase steps 4–9.
  Confidence: high
- Claim: Event movement affects only printed Intruder types not sharing a room with a character; movement into Technical Corridors removes the miniature and returns its token to the bag.
  Source: src-003
  Evidence: Resolve Event Card — Intruder Movement.
  Confidence: high

## Passed-player timing

A passed player cannot take actions, but may still use a legal Interruption card after passing.

- Claim: Interruption remains playable after passing.
  Source: src-002
  Evidence: FAQ Rules item 21 answers “Yes.”
  Confidence: high
