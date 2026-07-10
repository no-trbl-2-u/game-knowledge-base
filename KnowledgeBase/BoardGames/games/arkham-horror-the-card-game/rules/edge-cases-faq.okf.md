---
okf_version: 0.2
type: rule_category
game:
  title: "Arkham Horror: The Card Game"
  slug: "arkham-horror-the-card-game"
  bgg_id: 205637
  publisher: "Fantasy Flight Games"
  year: 2016
  weight: null
  edition: "core set / revised product line referenced"
scope: "base game"
mechanics: [action-points, campaign-game, cooperative-game, deck-bag-and-pool-building, deck-building, hand-management, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-003"
    title: "Arkham Horror: The Card Game — Learn to Play PDF"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/dd/78/dd7818fe-0c9a-4a6c-b685-e32ab55b1702/ahc60_learn_to_play_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-10"
    notes: "Official Learn to Play PDF."
  - id: "src-004"
    title: "ArkhamDB — Rules"
    url: "https://arkhamdb.com/rules"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-10"
    notes: "Community rules reference mirror used for edge-case leads only."
confidence: medium
status: needs_followup
---

## Summary

The edge-case surface is large: timing conflicts, card text interpretation, deckbuilding options, campaign transfer, and FAQ updates are explicitly pushed into the Rules Reference layer rather than the Learn to Play layer.

## Source-backed facts

- Claim: The official Learn to Play defers advanced topics to the Rules Reference.
  Source: src-003
  Evidence: The Rules Reference addresses "more advanced topics such as the interpretation of card text, the resolution of timing conflicts, and a detailed phase sequence."
  Confidence: high
- Claim: ArkhamDB presents its rules page as a Rules Reference replica with FAQ/expansion updates.
  Source: src-004
  Evidence: "This page contains a replica of the Rules Reference" and includes "updates to the Rules Reference" from expansions and official FAQ.
  Confidence: medium
- Claim: ArkhamDB's table of contents exposes many edge-case domains.
  Source: src-004
  Evidence: Table of contents includes "Appendix I: Initiation Sequence," "Appendix II: Timing and Gameplay Phase Sequence," "Deckbuilding Options," and "Campaign Play."
  Confidence: medium

## Rules / Mechanics

- Treat timing and card-text disputes as Rules Reference problems, not Learn to Play problems.
- Because the game is expandable, FAQ drift and expansion rules require periodic audit.

## Open questions

- Retrieve the official Rules Reference PDF directly and replace ArkhamDB edge-case dependence where possible.
