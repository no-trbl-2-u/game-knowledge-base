---
okf_version: 0.2
type: design_reference
topic: "Shared-loss / grand-winner semi-cooperation — mechanic overview"
mechanics: [cooperative-game, negotiation, catch-up-mechanism, hidden-information]
better_if_labels: [kingmaking, player-interaction, scoring-endgame, runaway-leader, onboarding]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Semi-Cooperative Game mechanism"
    url: "https://boardgamegeek.com/boardgamemechanic/2820/semi-cooperative-game"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-23"
    notes: "Taxonomy evidence came from indexed excerpts because the live page was Cloudflare-blocked."
  - id: "src-002"
    title: "Opinionated Gamers — Ben McJunkin review of Archipelago"
    url: "https://opinionatedgamers.com/2013/03/08/ben-mcjunkin-review-of-archipelago/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-23"
    notes: "Directly inspected reception evidence about rebellion, hidden scoring, and contribution pressure."
  - id: "src-003"
    title: "Big Boss Battle — Cutthroat Caverns review"
    url: "https://bigbossbattle.com/cutthroat-caverns-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-23"
    notes: "Reception evidence about timed betrayal and expected backstabbing."
  - id: "src-004"
    title: "GMT Games — Churchill, 3rd Printing"
    url: "https://www.gmtgames.com/p-719-churchill-3rd-printing.aspx"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-23"
    notes: "Official framing of winning the war and determining the victor of the peace."
confidence: high
status: verified
---

## Summary

**Shared-loss / grand-winner semi-cooperation** imposes two victory gates:

1. Players face a common threat, crisis, enemy, or failure system.
2. They must cooperate enough to prevent collective defeat.
3. If the common threat wins, everyone—or everyone except a qualifying hybrid role—loses.
4. If the group survives, personal scores or achievements are compared.
5. One player becomes the sole formal winner.

In plain terms: **we must survive together, but only one of us can prevail.**

## Source-backed facts

- Claim: BGG classifies the sole-winner form within the broader Semi-Cooperative Game mechanism as a “Grand Winner” format.
  Source: src-001
  Evidence: indexed mechanism-page description consulted during the research pass.
  Confidence: medium

- Claim: The structure makes contribution to the common good an act of self-preservation rather than unconditional teamwork.
  Source: src-002
  Evidence: the *Archipelago* review describes managing rebellion as a “tax” on continuing the game, with leaders having more to lose from collapse.
  Confidence: high

- Claim: Competitive betrayal gains a timing constraint because undermining rivals too early can cause the betrayer to share the group’s defeat.
  Source: src-003
  Evidence: the review centers the game on knowing when to turn on the party while still surviving the monsters.
  Confidence: high

- Claim: The structure can separate shared mission success from individual supremacy.
  Source: src-004
  Evidence: official *Churchill* framing distinguishes defeating the Axis from determining the “victor of the peace.”
  Confidence: high

## Core incentive problem

Every contribution protects the contributor’s chance of winning **and** every rival’s chance. Every refusal preserves personal resources **and** risks erasing the entire contest. The mechanic therefore converts cooperation into a priced, negotiable, and potentially weaponized resource.

## Research organization

- Implementation subtypes are split into four records in this directory.
- Positive reception dynamics are consolidated in `praised-dynamics.okf.md`.
- Negative reception and failure states are consolidated in `failure-modes-and-friction.okf.md`.
- Design synthesis is isolated in `design-conditions.okf.md`, rather than being mixed into the source records.
