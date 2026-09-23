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
  - id: "src-005"
    title: "Arkham Horror: The Card Game — Notes, Errata, and Frequently Asked Questions (V.2.5, February 2026, The Legacy Edition)"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/c1/d0/c1d0fab6-7fa6-4ce2-af6a-16416381a19b/ahc_faq_v25_february_2026-web.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-09-23"
    notes: "30-page official FAQ/errata PDF; SHA-256 35c82dc070332acd7863eb6d464641ea79e4657b68ff4f1873538e0bcac6b2e7. Card-clarification and rulebook-errata entries carry a version tag (v1.0-v2.5) marking when each change was made."
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
- Claim: The official FAQ/errata document is a living, versioned supplement to the Rules Reference: each entry records the version (v1.0-v2.5) in which it first appeared, and errata overrides the originally printed card text unless a later entry supersedes it.
  Source: src-005
  Evidence: "The document version number in which an entry first appeared is listed with that entry in order to establish a history of when each change was made."; "Errata overrides the originally printed information on the card it applies to."
  Confidence: high
- Claim: The FAQ carries both Rulebook Errata (keyed to Rules Reference page/column, e.g. "Permanent," "Weakness," "Slots") and separate Campaign Guide Errata (keyed to named campaigns and scenarios), plus a "List of Taboos, Ultimatums and Boons" section governing optional Campaign Mode restrictions.
  Source: src-005
  Evidence: Section headers "Rulebook Errata," "Campaign Guide Errata," and "The List of Taboos, Ultimatums and Boons" (new in v2.5); example ultimatum text: "Ultimatum of Survival — Campaign Mode only. If an investigator is killed or driven insane, their player is eliminated from the campaign and cannot continue playing as a new investigator."
  Confidence: high

## Rules / Mechanics

- Treat timing and card-text disputes as Rules Reference problems, not Learn to Play problems.
- Because the game is expandable, FAQ drift and expansion rules require periodic audit; src-005 is the living errata/FAQ document and should be re-checked for a newer version number on future passes.

## Open questions

- The official errata/FAQ PDF (src-005) is now acquired; a direct copy of the Rules Reference PDF itself (distinct from the FAQ that supplements it) is still not acquired and remains the next retrieval target.
