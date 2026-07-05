---
okf_version: 0.2
type: rule_category
game:
  title: "Dune: Imperium"
  slug: "dune-imperium"
  bgg_id: 316554
  publisher: "Dire Wolf"
  year: 2020
  edition: "English base game"
scope: "base game"
mechanics: [deck-building, worker-placement, hand-management, multi-use-cards, force-commitment, race, variable-player-powers]
sources:
  - id: "src-003"
    title: "DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official English rulebook."
confidence: high
status: verified
---

## Summary

Setup constructs three hidden engines before play: a staged Conflict Deck, public card market/reserve, and individual starting decks/leaders. First-game onboarding is partially handled by recommending simpler leaders.

## Source-backed facts

- Claim: Players choose or randomly select Leaders; first game recommends one-icon leaders: Paul Atreides, Glossu Rabban, Earl Memnon Thorvald, or Count Ilban Richese.
  Source: src-003
  Evidence: Rulebook p.4 / lines 201-209.
  Confidence: high
- Claim: The Conflict Deck is built as 10 cards: one Conflict I, five Conflict II, and four Conflict III, with unused cards returned unseen.
  Source: src-003
  Evidence: Rulebook p.4 / lines 231-257.
  Confidence: high
- Claim: The Imperium Row begins with five face-up cards, with Reserve stacks for Arrakis Liaison, The Spice Must Flow, and Foldspace.
  Source: src-003
  Evidence: Rulebook p.4 / lines 264-283.
  Confidence: high
- Claim: Each player starts with 1 water, a shuffled 10-card starting deck, two Agents on their Leader, and a third Swordmaster Agent beside the board.
  Source: src-003
  Evidence: Rulebook pp.5 / lines 295-314.
  Confidence: high

## Rules / Mechanics

Setup seeds pacing: early conflicts are smaller, midgame expands rewards, and late-game Conflict III pushes closure. The market is public, but the deck order and conflict sequence remain uncertain.

## Player friction

Setup touches many zones: factions, conflict deck, multiple decks, reserve stacks, personal agents/cubes/discs, garrisons, and solo/two-player extra sheets.

## Better-if opportunities

- setup/teardown: provide a tray/insertion layout mapped to setup order.
- onboarding: keep first-game leader recommendations on a separate teach card, not buried in setup text.

## Design implications for SomberSoft

Stage hidden objective/reward decks by era to control escalation without scripting the exact game. This gives designers a pacing hand while preserving uncertainty.

## Open questions

- How often first-time groups miss solo/two-player additional setup because it is delegated to a separate sheet.
