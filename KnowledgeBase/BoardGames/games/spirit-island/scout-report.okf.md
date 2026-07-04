---
okf_version: 0.1
type: scout_report
game:
  title: "Spirit Island"
  slug: "spirit-island"
  bgg_id: 162886
  publisher: "Greater Than Games"
  year: 2017
  edition: "core game"
scope: "base game"
sources:
  - id: "src-001"
    title: "BoardGameGeek — Spirit Island"
    url: "https://boardgamegeek.com/boardgame/162886/spirit-island"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-02"
    notes: "Primary discovery layer."
  - id: "src-002"
    title: "Greater Than Games — Spirit Island product page"
    url: "https://shop.greaterthangames.com/products/spirit-island"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-02"
    notes: "Official metadata and rules links."
  - id: "src-003"
    title: "Spirit Island CORE Rulebook"
    url: "https://www.dropbox.com/scl/fi/5wzghwnbsi39msyy6vvox/Spirit-Island-CORE-Rulebook.pdf?rlkey=86i7aofqbzhulezjr7z0ssyff&st=iqv6wpml&dl=1"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-02"
    notes: "Official publisher-linked rulebook."
  - id: "src-004"
    title: "Spirit Island Wiki — Main Page"
    url: "https://spiritislandwiki.com/index.php?title=Main_Page"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-02"
    notes: "Official FAQ/wiki landing page."
  - id: "src-005"
    title: "Gideon's Gaming — Spirit Island Board Game Review"
    url: "https://gideonsgaming.com/spirit-island-board-game-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-02"
    notes: "Review/reception source."
  - id: "src-006"
    title: "There Will Be Games — Spirit Island Board Game Review"
    url: "https://therewillbe.games/articles-boardgame-reviews/8204-spirit-island-coop-board-game-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-02"
    notes: "Review/reception source."
  - id: "src-007"
    title: "Co-op Board Games — Spirit Island Review"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/spirit-island-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-02"
    notes: "Review/reception source."
  - id: "src-008"
    title: "Punchboard — Spirit Island Review"
    url: "https://punchboard.co.uk/review-spirit-island"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-02"
    notes: "Review/reception source."
  - id: "src-009"
    title: "Stidjen Plays Solo — Spirit Island solo review"
    url: "https://stidjenplayssolo.wordpress.com/2023/10/19/spirit-island-a-solo-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-02"
    notes: "Solo review/reception source."
confidence: high
status: verified
---

## Summary

Daily scout selected *Spirit Island* because it was not already present in the local BoardGames KB, has strong BGG rank/reception signals, has accessible official rules through the publisher page, and offers SomberSoft-useful mechanisms: asymmetric powers, card play, cooperative/solo automation, enemy intent forecasting, escalation, status pressure, and dynamic win conditions.

## Source-backed facts

- Claim: The game was discovered through BGG as high-ranked, highly rated, and mechanically relevant.
  Source: src-001
  Evidence: "Overall Rank 11"; "BGG Rating 8.3"; "Cooperative Game"; "Campaign / Battle Card Driven".
  Confidence: high
- Claim: Official rules were accessible.
  Source: src-002
  Evidence: Publisher page states "Download here" for rulebook and "Browse FAQ".
  Confidence: high
- Claim: The core rulebook supports the extracted rules summaries.
  Source: src-003
  Evidence: "Spirit Island is a cooperative game for 1-4 players"; "all Spirits act simultaneously"; loss and setup sections extracted.
  Confidence: high
- Claim: Reception praise and complaints were gathered from multiple review sources.
  Source: src-005; src-006; src-007; src-008; src-009
  Evidence: Reviews cited in `reception/reviews.okf.md` and `reception/better-if.okf.md`.
  Confidence: high

## Rules / Mechanics

Strongest rule lesson: telegraphed enemy automation is more valuable than hidden randomness in a heavy co-op. The explore/build/ravage queue lets players see danger in stages, turning threat into responsibility.

## Player friction

Strongest reception complaint: cognitive load/pacing. Reviews point to brain burn, fiddliness, long 4-player sessions, and endgames that can become procedural once solved.

## Praised design

- Theme and mechanics are fused.
- Spirits are meaningfully asymmetric.
- Enemy actions are predictable enough to plan against but threatening enough to matter.
- Fear changes victory pressure rather than merely awarding points.

## Better-if opportunities

Top 3:
1. **onboarding** — scripted first play, clearer guidance, and stronger low-complexity path.
2. **turn pacing / downtime** — threat-priority aids and coordination tools for high player counts.
3. **scoring/endgame** — compress solved late states and make timer losses feel climactic.

## Design implications for SomberSoft

- Show enemy intent early.
- Make prevention feel as vivid as damage.
- Bind asymmetric powers to fiction.
- Treat tutorials, reference, and endgame compression as core systems in any heavy co-op design.

## Open questions

- Crawl official FAQ subpages for exact edge cases and errata.
- Compare *Horizons of Spirit Island* as an onboarding redesign case.
- Determine whether expansions are deliberate fixes for base-game predictability or mainly variety content.
