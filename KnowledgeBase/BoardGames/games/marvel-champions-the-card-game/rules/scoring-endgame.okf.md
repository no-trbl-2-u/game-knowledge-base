---
okf_version: 0.2
type: rule_category
game:
  title: "Marvel Champions: The Card Game"
  slug: "marvel-champions-the-card-game"
  bgg_id: 285774
  publisher: "Fantasy Flight Games"
  year: 2019
  weight: null
  edition: "core game"
scope: "base game"
mechanics: [cooperative-game, deck-building, hand-management, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-003"
    title: "Marvel Champions Rules Reference v1.5"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/b6/30/b630ddfe-e745-435b-a284-572dd510e15d/mc_rulesreference_v15-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Audit 2026-07-15: extraction retried with pypdf (56 pages), succeeded. Winning the Game and Player Elimination glossary entries are the cited sections."
confidence: high
status: verified
---

## Summary

There is no point score: the players win as a team by defeating the villain's final stage, and lose as a team if the villain's main scheme deck completes its final stage. Individual players can be eliminated mid-game without ending the game for the rest of the group.

## Source-backed facts

- Claim: Players win by defeating the villain's final stage; the villain wins if the main scheme deck's final stage completes. Some scenarios add alternate win/loss conditions.
  Source: src-003
  Evidence: "If the players defeat the final villain stage, they win the game. If the final stage of the main scheme deck is completed, the villain wins the game. Some scenarios may have alternate win or loss conditions. If these conditions are met, the players win or lose accordingly." (p.40)
  Confidence: high
- Claim: A player is eliminated when their identity is defeated (hit points at zero); eliminated players stop participating but still share the group's eventual win or loss, and if every player is eliminated the group loses.
  Source: src-003
  Evidence: "A player is eliminated from the game if their identity is defeated... the remaining players continue to play the game. Eliminated players no longer participate in the game but are considered to win or lose along with the rest of the group... If all players are eliminated, the game ends and the players lose." (p.28)
  Confidence: high
- Claim: On elimination, the player's first-player token, engaged minions, and any cards they held that belong to other players are handed off before their play area is removed from the game.
  Source: src-003
  Evidence: "1. If the eliminated player has the first player token, they pass it to the next clockwise player. 2. If there are minions engaged with the eliminated player, each of those minions engages the next clockwise player... 3. If there are cards in the eliminated player's play area that are not owned by that player, place each of those cards in its owner's discard pile... 4. Remove the eliminated player's play area and each other game element within... from the game." (p.28)
  Confidence: high

## Open questions

- None outstanding for the base win/loss/elimination rules; scenario-specific alternate conditions are scenario-card text, out of scope for the base glossary.