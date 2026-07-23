---
okf_version: 0.2
type: design_reference
topic: "Semi-cooperative games — research track index and type map"
mechanics: [cooperative-game, negotiation, hidden-information]
better_if_labels: [kingmaking, player-interaction, scoring-endgame, balance-faction-asymmetry, onboarding]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Semi-Cooperative Game mechanism"
    url: "https://boardgamegeek.com/boardgamemechanic/2820/semi-cooperative-game"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-23"
    notes: "BGG mechanism taxonomy; live page was Cloudflare-blocked during the research pass, so classification details came from indexed excerpts."
  - id: "src-002"
    title: "Fireside Games — Castle Panic Second Edition"
    url: "https://firesidegames.com/products/castle-panic-second-edition"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-23"
    notes: "Used to distinguish a cooperative game with an MVP accolade from a strict sole-winner game."
confidence: medium
status: verified
---

## Summary

This directory preserves the semi-cooperative research track by **victory-structure type**. The completed track concerns **shared-loss / grand-winner semi-cooperation**: the group must avert a common defeat, but if it survives, one player alone wins.

The narrower label matters. “Semi-cooperative” also covers independent personal victories and traitor structures, but those were adjacent boundaries in this pass rather than fully researched tracks.

## Type map

- [`shared-loss-grand-winner/index.okf.md`](shared-loss-grand-winner/index.okf.md) — completed research track.
  - [`shared-catastrophe-track.okf.md`](shared-loss-grand-winner/shared-catastrophe-track.okf.md) — a global meter or system can defeat nearly everyone.
  - [`shared-mission-personal-ranking.okf.md`](shared-loss-grand-winner/shared-mission-personal-ranking.okf.md) — complete the common mission, then rank players.
  - [`competitive-combat-rewards.okf.md`](shared-loss-grand-winner/competitive-combat-rewards.okf.md) — survive a shared fight while competing for rewards or prestige.
  - [`failure-beneficiary-hybrid.okf.md`](shared-loss-grand-winner/failure-beneficiary-hybrid.okf.md) — a hidden or conditional role may profit from collapse.
  - [`praised-dynamics.okf.md`](shared-loss-grand-winner/praised-dynamics.okf.md) — all recorded reasons players enjoyed the structure.
  - [`failure-modes-and-friction.okf.md`](shared-loss-grand-winner/failure-modes-and-friction.okf.md) — all recorded reasons players disliked it.
  - [`design-conditions.okf.md`](shared-loss-grand-winner/design-conditions.okf.md) — success conditions and terminal failure states distilled from the evidence.

## Source-backed boundaries

- Claim: BGG treats “Semi-Cooperative Game” as a broad mechanism and identifies the one-formal-winner variant as a “Grand Winner” format.
  Source: src-001
  Evidence: indexed mechanism-page excerpts used during the sweep; the live BGG page was blocked.
  Confidence: medium

- Claim: A cooperative game can name a top performer without making that player the sole formal winner.
  Source: src-002
  Evidence: *Castle Panic* says players “win or lose together” while the top scorer is declared Master Slayer.
  Confidence: high

## Exclusions and adjacent forms

The completed track is not:

- pure cooperation, where all players formally win or lose together;
- team competition, where a whole team shares victory;
- a standard hidden-traitor game, where a role ordinarily wants collective failure;
- independent personal objectives that permit several simultaneous winners;
- a cooperative victory with only an MVP or top-performer accolade.

*Dead of Winter* and *New Angeles* were reviewed as adjacent evidence but not treated as strict sole-winner implementations because they can permit multiple winners. *Nemesis* supplied adjacent evidence about hidden-objective readability and hostility, not a claim that every session instantiates the strict grand-winner form.

## Evidence scope

The source sweep covered roughly twenty useful BGG thread leads and roughly twenty external reviews, discussions, publisher pages, and rules sources across *Archipelago*, *CO₂*, *Cutthroat Caverns*, *Churchill*, *The Republic of Rome*, *Legendary: Marvel*, *Nemesis*, *Dead of Winter*, and *New Angeles*.

BGG live pages were Cloudflare-blocked during final verification. BGG quotations and taxonomy details derived from indexed excerpts are therefore medium confidence. External pages inspected directly during the pass are high confidence unless a record says otherwise.
