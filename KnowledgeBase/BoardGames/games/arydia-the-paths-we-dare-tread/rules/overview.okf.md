---
okf_version: 0.2
type: rule_category
game:
  title: "Arydia: The Paths We Dare Tread"
  slug: "arydia-the-paths-we-dare-tread"
  bgg_id: 219650
  publisher: "Far Off Games"
  year: 2026
  weight: null
  edition: "base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, variable-player-powers]
sources:
  - id: "src-002"
    title: "Arydia — Far Off Games"
    url: "https://faroffgames.com/pages/arydia"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-23"
    notes: "Core product loop."
  - id: "src-004"
    title: "Arydia Board Game Review — Cooperative Board Games"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/arydia/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-23"
    notes: "Combat summary."
  - id: "src-007"
    title: "Arydia Rulebook (v35)"
    url: "https://www.dropbox.com/scl/fi/q9qpvu1uc1pea3lozj6i6/Rulebook_280x216mm_FlatFormat_v35_Cropped_OP.pdf?rlkey=fx2oqdenrwmbjcy32jpfsojh0&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Official rulebook, retrieved via the publisher rulebooks page and text-extracted with curl + pypdf in the 2026-08-19 librarian pass. 36 pages."
confidence: high
status: verified
last_verified: "2026-08-19"
---

## Summary

Arydia alternates between free-form Adventure mode (exploring a location, resolving pointers such as NPCs, chests, and events) and grid-based Combat mode, which begins the moment foes are revealed. One player at a time acts as the "Guide," narrating cards and NPCs for the others.

## Source-backed facts

- Claim: Combat is strategic, turn-based, and uses a Variable Threat System with enemy AI cards.
  Source: src-002, src-004, src-007
  Evidence: Rulebook — Threat is "a shared resource spent by foes to activate AI behaviors," starting each combat at 0 and rising as foes act.
  Confidence: high
- Claim: Outcomes throughout the game are resolved with a d20 System: roll a d20 and add the matching character attribute, with four check types (Success/Fail, Threshold, Tiered, Non-Attribute).
  Source: src-007
  Evidence: "Arydia uses a d20 (twenty-sided die) system to simulate things that happen in the game world ... There are four types of checks: Success/Fail, Threshold, Tiered and Non-Attribute."
  Confidence: high
- Claim: A natural 1 on any check automatically fails (absent a reroll ability), and a natural 20 automatically succeeds and grants an immediate bonus that differs by context (Combo gain in combat, a bonus card choice in Adventure mode, or an extra chest on a loot roll).
  Source: src-007
  Evidence: "If you roll a natural 1, the check automatically fails ... If you roll a natural 20, the check automatically succeeds, and you gain an immediate benefit."
  Confidence: high
- Claim: One player is the "active player" taking an action while the player to their left acts as the "Guide," reading cards/maps aloud; players rotate through the Guide role and can earn Roleplay Points for guiding, spendable for a +3 check bonus.
  Source: src-007
  Evidence: "The player currently taking an action is called the active player, the player to their left acts as the Guide ... Roleplay points can be spent (with a little roleplaying) to increase the result of an Attribute check by +3."
  Confidence: high