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
    retrieved_at: "2026-08-26"
    notes: "Re-fetched in the 2026-08-26 librarian pass to substitute for the still-blocked official Rules Reference PDF (src-009 in scout-report.okf.md). FFG never released an updated official Rules Reference PDF post-launch (corroborated by an FFG forum-archive thread, https://ffg-forum-archive.entropicdreams.com/topic/306788-revised-rules-reference-pdf/, which explicitly recommends ArkhamDB's page as the substitute); promoted from edge-case-lead-only to a primary citation for the claims below."
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
- Claim: When a card's printed text directly contradicts the Rules Reference or the Learn to Play book, the card text takes precedence; when player perception of the "correct" outcome is disputed mid-game, the game defaults to resolving in whichever way the players agree is the worst possible outcome at that moment (the "Grim Rule").
  Source: src-004
  Evidence: "If the text of a card directly contradicts either the Rules Reference or the Learn to Play book, the text of the card takes precedence."; "resolve the conflict in the manner that the players perceive as the worst possible outcome at that moment."
  Confidence: medium

## Rules / Mechanics

- Treat timing and card-text disputes as Rules Reference problems, not Learn to Play problems.
- Because the game is expandable, FAQ drift and expansion rules require periodic audit.
- Card text overrides both core rules documents; unresolved disputes default to the worst-case outcome ("Grim Rule").

## Open questions

- The official Rules Reference PDF itself remains unretrievable (HTTP 403 as of 2026-08-26; see scout-report.okf.md followups). FFG appears to have never republished it post-launch, so ArkhamDB (src-004) is treated as the durable substitute going forward rather than a temporary edge-case lead.
