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
  - id: "src-002"
    title: "Fantasy Flight Games — Marvel Champions product page"
    url: "https://www.fantasyflightgames.com/en/products/marvel-champions-the-card-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-12"
    notes: "Official rules download hub."
  - id: "src-003"
    title: "Marvel Champions Rules Reference v1.5"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/b6/30/b630ddfe-e745-435b-a284-572dd510e15d/mc_rulesreference_v15-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Audit 2026-07-15: extraction retried with pypdf (56 pages), succeeded. Page numbers below refer to this PDF's own printed page numbers."
confidence: high
status: verified
---

## Summary

Marvel Champions is a cooperative living card game in which each player controls a hero (with an alter-ego side) working with the group against a shared villain and main scheme. The Rules Reference is a glossary, not a teaching document; the publisher directs new players to the separate Learn to Play book first.

## Source-backed facts

- Claim: The Rules Reference is a glossary intended for lookup during play, not for teaching the game; the Learn to Play book should be read first.
  Source: src-003
  Evidence: "This document is intended as the definitive source for rules information, but does not teach players how to play the game. Players should first read the Learn to Play book in its entirety and use this Rules Reference as needed while playing the game." (p.4)
  Confidence: high
- Claim: Two "golden rules" set precedence: Rules Reference text beats Learn to Play text; card text beats both.
  Source: src-003
  Evidence: "If the text of this Rules Reference directly contradicts the text of the Learn to Play book, the text of the Rules Reference takes precedence. If the text of a card directly contradicts the text of either the Rules Reference or the Learn to Play book, the text of the card takes precedence." (p.4)
  Confidence: high
- Claim: A round has ten steps: player phase begins, each player takes a turn, player phase ends, villain phase begins, threat placed on main scheme, villain/minions activate, encounter cards dealt, encounter cards revealed and resolved, first player token passed, round ends.
  Source: src-003
  Evidence: "ROUND OVERVIEW ... 1. Player phase begins ... 10. End the round. Proceed to step one of the next game round." (p.4)
  Confidence: high

## Open questions

- Player-count scaling and villain difficulty modes are not covered by the Rules Reference glossary; would need the Learn to Play book or a scenario insert to verify.