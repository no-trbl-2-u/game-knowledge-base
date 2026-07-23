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

# Actions

## Action-card economy

- Claim: An action icon's number is paid by discarding exactly that many Action cards; Contamination cards occupy the hand but are not Action cards and cannot pay costs.
  Source: src-003
  Evidence: Actions — Action Cost.
  Confidence: high
- Claim: Playing an action printed on an Action card discards that card and then pays its additional printed cost; each character has a partially unique ten-card action deck.
  Source: src-003
  Evidence: Actions from Action Cards.
  Confidence: high
- Claim: Basic actions are Movement, Careful Movement, Shoot, Melee, Pick Up Heavy Object, Trade and Craft; cards, items and rooms add further actions with combat restrictions.
  Source: src-003
  Evidence: Actions taxonomy and Basic Actions list.
  Confidence: high

## Exploration and noise

- Claim: On entering a room, reveal its tile/token if unexplored, set its item counter and resolve its effect; if the room is empty, roll Noise unless the effect changes that procedure.
  Source: src-003
  Evidence: Movement Action and Exploration Tokens.
  Confidence: high
- Claim: A numbered Noise result puts a marker in that corridor; trying to mark an already noisy corridor triggers an Encounter. Danger moves eligible adjacent Intruders or fills empty adjacent corridors; Silence does nothing unless the character is slimed, when it becomes Danger.
  Source: src-003
  Evidence: Noise Roll and Slime Marker.
  Confidence: high
- Claim: Careful Movement chooses one adjacent corridor for Noise instead of rolling and is unavailable in combat or where every adjacent corridor is already noisy.
  Source: src-003
  Evidence: Basic Actions — Careful Movement.
  Confidence: high

## Search, items and rooms

Search consumes one room item and draws two cards from its matching color deck (white chooses one deck), keeping one and bottom-decking the other. Normal inventory is hidden; heavy items/objects occupy two visible hand slots. Malfunction disables a room action/computer but not Search; fire does not disable actions but wounds a character ending a round there.

- Claim: Empty actions intended only to waste tempo are disallowed, though a genuine trade discussion may end without exchange.
  Source: src-002
  Evidence: FAQ Actions item 2.
  Confidence: high
