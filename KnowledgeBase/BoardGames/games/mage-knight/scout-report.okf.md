---
okf_version: 0.2
type: scout_report
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  edition: "English base game / rules updated March 2012"
scope: "base game"
mechanics: [deck-building, hand-management, card-play-conflict-resolution, modular-board, grid-movement, dice-rolling, cooperative-game, solo-solitaire-game, variable-player-powers, campaign-game]
sources:
  - id: "src-001"
    title: "Mage Knight Board Game — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/96848/mage-knight-board-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Discovery source."
  - id: "src-002"
    title: "Mage Knight — WizKids product page"
    url: "https://wizkids.com/mage-knight"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official product source and official rules/FAQ link source."
  - id: "src-003"
    title: "MK_rulebook_ENG_searchable-mar2012.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official rules link; direct extraction failed."
  - id: "src-006"
    title: "How to play Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary rules corroboration."
  - id: "src-009"
    title: "A Very Great Adventure — Mage Knight Review"
    url: "https://therewillbe.games/articles-boardgame-reviews/3341-a-very-great-adventure-mage-knight-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Reception source."
  - id: "src-010"
    title: "Mage Knight Review — The Thoughtful Gamer"
    url: "https://thethoughtfulgamer.com/2017/07/23/mage-knight-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Reception source."
  - id: "src-011"
    title: "Mage Knight — negative review from a fan — BoardGameGeek thread"
    url: "https://boardgamegeek.com/thread/2427702/mage-knight-a-negative-review-from-a-guy-that-rate"
    kind: bgg_forum
    provenance: community
    retrieved_at: "2026-07-03"
    notes: "Complaint source."
confidence: high
status: verified
---

## Summary

Selected game: Mage Knight Board Game. Reason: not already present; official WizKids rules/FAQ links exist; BGG shows high complexity and mechanics aligned with SomberSoft interests: card play, deckbuilding, solo/co-op, combat, campaign-like progression, asymmetric powers, dice/mana economy, and status/reputation systems.

## Source-backed facts

- Claim: The game was absent before this run.
  Source: local filesystem verification
  Evidence: Existing `games/` entries found before writing were `spirit-island`, `ark-nova`, and `dune-imperium`.
  Confidence: high
- Claim: Official rulebook status is available but not fully extracted.
  Source: src-002, src-003
  Evidence: WizKids links "Download Rules" to `MK_rulebook_ENG_searchable-mar2012.pdf`; extraction timed out and direct terminal fetch failed due certificate/HTTP errors.
  Confidence: high
- Claim: BGG/reception sources reveal strong praise and strong complaints.
  Source: src-001, src-009, src-010, src-011
  Evidence: BGG complexity 4.38/5; reviews praise integrated complexity and slow-motion deckbuilding; BGG thread complains about rules dispersion and weak competitive/co-op modes.
  Confidence: medium

## Rules / Mechanics

Strongest rule lesson: a hand-management engine can power an entire adventure game if every card can be converted into multiple tactical currencies. Mage Knight turns cards into movement, influence, attack, block, healing, and tempo; the map then judges whether those conversions were wise.

## Player friction

Strongest complaint: rule retrieval and multiplayer pacing. Players repeatedly flag fiddliness, rules checking, long turns, downtime, and modes that feel best solo despite nominal co-op/competitive support.

## Praised design

- Dense deterministic puzzle.
- Powerful within-session character growth.
- High replayability.
- Solo mode that keeps the crunch and removes much waiting.

## Better-if opportunities

Top three:

1. rules ambiguity — consolidate rulebook, walkthrough, card exceptions, FAQ, and site rules into a canonical searchable reference.
2. downtime / turn pacing — add simultaneous planning scaffolds, shorter multiplayer scenarios, and firm recommended player-count framing.
3. solo/co-op automation / player interaction — make co-op require stronger shared dependencies so it does not collapse into parallel solo.

## Open questions

- Build a full scenario matrix from the Scenario Book/Walkthrough beyond "The First Reconnaissance".
- Compare base game with Ultimate Edition for component/rule remediation.

## Retry notes
- 2026-07-08 (librarian pass): Resolved. WizKids' own hosts (`wizkidsgames.com`, `wizkids.com`) still return HTTP 500 for the rulebook/walkthrough/FAQ PDFs, but Wayback Machine snapshots of all three (captured 2020-11-18) were fetched via `curl -L` and text-extracted with pypdf. Rule claims across `rules/*.okf.md` and `sources.okf.md` were re-verified against the official text and upgraded to high confidence with page references; this doc's followups are cleared.
