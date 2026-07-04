---
okf_version: 0.1
type: rule_category
game:
  title: "Slay the Spire: The Board Game"
  slug: "slay-the-spire-the-board-game"
  bgg_id: 338960
  publisher: "Contention Games"
  year: 2024
  edition: "base game"
scope: "base game"
sources:
  - id: "src-002"
    title: "Rulebook - Contention Games"
    url: "https://contentiongames.com/_images/STS_KS_Rulebook.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-04"
    notes: "Table of contents / FAQ page locations."
  - id: "src-003"
    title: "Slay the Spire - Official Rulebook"
    url: "https://boardgamegeek.com/filepage/276680/slay-the-spire-official-rulebook"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-04"
    notes: "v2.27/v2.30 change notes, A7 sticker fix."
  - id: "src-004"
    title: "Contention Games Kickstarter FAQ (Downfall/reprint)"
    url: "https://www.kickstarter.com/projects/contentiongames/sts-downfall/faqs?category_id=34&total_hits=670267"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-04"
    notes: "Reprint reset-game and Gremlin Leader clarifications."
  - id: "src-007"
    title: "REVIEW: Slay the Spire: The Board Game"
    url: "https://rollinginthemeep.com/2025/05/22/review-slay-the-spire-the-board-game"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-04"
    notes: "Solo play weakness relative to the video game."
  - id: "src-008"
    title: "A Review of Slay The Spire (The Board Game) From Someone Who Doesn't Like Rogue-like Games And Has Never Played The Video Game!"
    url: "https://coopgestalt.com/2024/06/13/a-review-of-slay-the-spire-the-board-game-from-someone-who-doesnt-like-rogue-like-games-and-has-never-played-the-video-game"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-04"
    notes: "Rulebook ambiguity assuming video-game knowledge."
confidence: medium
status: needs_followup
---

# Edge cases and FAQ

## Official FAQ locations
- **Source-backed fact [high][src-002]:** The rulebook table of contents includes FAQ pages 18-19, Triggered Abilities page 19, Unlocks & Ascension page 20, Achievements & Daily Climb page 21, Act IV & Quick Start Rules page 22, Optional Rules page 23, and Abilities & Keywords page 24.
- **Source-backed fact [high][src-003]:** BGG file entry lists official rulebook v2.30 and v2.27; v2.27 is said to include the A7 sticker fix.

## Known clarifications / errata leads
- **Source-backed fact [medium][src-003]:** A BGG comment identifies the A7 sticker fix as a misprint in the rules for Ascension 7; a designer/publisher comment says if a player lacks the sticker fix then they likely have wave 2 or later edition.
- **Source-backed fact [medium][src-003]:** The v2.30 change note says teardown rules were added to page 23 and optional rules for sequential turns were cut.
- **Source-backed fact [medium][src-004]:** Downfall/reprint FAQ says later reprints added a rulebook section on how to reset the game and clarification to Gremlin Leader that Gremlins are in Act 1 summon deck.

## Player-discovered ambiguity
- **Player friction [rules ambiguity][high][src-008]:** Rulebook may assume video-game knowledge, especially around how to continue after Act III and how to handle summon deck organization.
- **Player friction [solo/co-op automation][medium][src-007]:** Solo play is considered weaker by Rolling In The Meep because it feels too close to the video game; cooperative play provides the tabletop justification.

## Open questions
- [high] Obtain direct v2.30 PDF text if possible and record exact FAQ answers by page.
- [medium] Track whether Downfall/reprint reset-game clarification supersedes base retail rulebook language.
- [medium] Check official Discord/FAQ for living errata, if accessible.

## Retry notes
- 2026-07-04: Retried `src-004` (Kickstarter FAQ) via WebFetch and `curl -L`; both returned HTTP 403 (Kickstarter's bot/verification wall blocks non-browser fetches). A future attempt needs either an authenticated/browser-based fetch or an archived mirror (e.g. Wayback Machine snapshot) of the FAQ page to confirm whether the reset-game clarification supersedes the base retail rulebook.
