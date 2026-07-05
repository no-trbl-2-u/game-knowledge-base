---
okf_version: 0.2
type: rule_category
game:
  title: "Spirit Island"
  slug: "spirit-island"
  bgg_id: 162886
  publisher: "Greater Than Games"
  year: 2017
  edition: "core game"
scope: "base game"
mechanics: [cooperative-game, hand-management, simultaneous-action-selection, modular-board, variable-player-powers, solo-solitaire-game, variable-setup]
sources:
  - id: "src-003"
    title: "Spirit Island CORE Rulebook"
    url: "https://www.dropbox.com/scl/fi/5wzghwnbsi39msyy6vvox/Spirit-Island-CORE-Rulebook.pdf?rlkey=86i7aofqbzhulezjr7z0ssyff&st=iqv6wpml&dl=1"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-02"
    notes: "Primary rules authority."
  - id: "src-002"
    title: "Greater Than Games — Spirit Island product page"
    url: "https://shop.greaterthangames.com/products/spirit-island"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-02"
    notes: "Official product summary."
confidence: high
status: verified
---

## Summary

*Spirit Island* is a cooperative 1–4 player strategy game. Each player controls a spirit defending an island from automated invaders. The system is a pressure machine: spirits grow, play powers, generate fear, prevent blight, and exploit the visible invader pipeline before it matures into ravage.

## Source-backed facts

- Claim: The rulebook describes players as spirits defending the island and acting simultaneously.
  Source: src-003
  Evidence: "Each player is a Spirit of nature"; "Every turn, all Spirits act simultaneously".
  Confidence: high
- Claim: The game is won by driving away invaders and lost through excess blight, spirit destruction, or time running out.
  Source: src-003
  Evidence: "Win by driving away the Invaders"; "Too Much Blight"; "A Spirit is Destroyed"; "Time Runs Out".
  Confidence: high
- Claim: The publisher frames the game as deep, complex area-control with unique spirits, Dahan, blight, and invaders.
  Source: src-002
  Evidence: "deep and complex area-control game"; "each with their own unique elemental powers".
  Confidence: high

## Rules / Mechanics

- Core loop: Spirit Phase, Fast Powers, Invader Phase, Slow Powers, Time Passes.
- Player agency is front-loaded: growth and card commitment occur before enemy action fully resolves.
- Enemy automation is legible: the invader deck advances lands through explore/build/ravage pressure.
- Power timing creates a forecast puzzle: fast powers prevent immediate harm; slow powers reposition and set future traps.
- Fear softens victory conditions and provides interim fear-card effects.

## Player friction

- The rules load is high because the game interlocks timing, targeting, range, elements, invader behavior, fear, blight, and spirit exceptions.

## Praised design

- The system makes cooperation concrete: spirits solve separate threats but must combine range, defense, movement, damage, and fear.

## Better-if opportunities

- Onboarding: preserve low-complexity spirits and preset first games.
- Component clarity: surface invader pipeline state as a visual threat queue.

## Design implications for SomberSoft

Use enemy intent tracks. Let players see doom forming, then make them decide which doom they can afford.

## Open questions

- Which rulebook concepts cause the most early failures: targeting/range, fast-vs-slow timing, or invader explore adjacency?
