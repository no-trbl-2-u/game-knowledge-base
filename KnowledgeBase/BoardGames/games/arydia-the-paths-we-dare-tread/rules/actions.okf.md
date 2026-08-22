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
    notes: "Weapons, skills, and cooperation."
  - id: "src-004"
    title: "Arydia Board Game Review — Cooperative Board Games"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/arydia/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-23"
    notes: "d20 resolution summary."
  - id: "src-007"
    title: "Arydia Rulebook (v35)"
    url: "https://www.dropbox.com/scl/fi/q9qpvu1uc1pea3lozj6i6/Rulebook_280x216mm_FlatFormat_v35_Cropped_OP.pdf?rlkey=fx2oqdenrwmbjcy32jpfsojh0&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Official rulebook, retrieved and text-extracted in the 2026-08-19 librarian pass."
confidence: high
status: verified
last_verified: "2026-08-19"
---

## Source-backed facts

- Claim: Character actions combine weapons and skills with dice-based attack resolution.
  Source: src-002, src-004, src-007
  Evidence: Publisher emphasizes weapons and skills; the rulebook's d20 System resolves checks (including attacks) by rolling a d20 and adding the matching attribute.
  Confidence: high
- Claim: Weapon attack patterns commonly use Threshold checks, where higher roll results cumulatively add lower-threshold effects rather than replacing them.
  Source: src-007
  Evidence: "these checks have multiple, cumulative thresholds. As your rolls reach higher thresholds, each lower threshold is also included in the result. These checks are most common in weapons with attack patterns."
  Confidence: high
- Claim: Movement, shifting, pushing, and pulling are distinct combat terms: a shift forcibly relocates a target a number of squares without counting as a move (and without the normal movement-point cost); push requires each square entered be further from the effect's origin, and pull requires each square entered be closer.
  Source: src-007
  Evidence: "Shift: Forcefully shift the target a number of squares in any direction (this is not a move, so ignore [movement] costs) ... Push: Same as shift, but each square entered must be further from the origin of the effect ... Pull: Same as shift, but each square entered must be closer to the origin of the effect."
  Confidence: high
- Claim: "Adjacent" in combat means sharing a square, sharing a traversable border with a square, or touching at a square's corner.
  Source: src-007
  Evidence: "Adjacent: You're adjacent to anything in your square, in a square that shares a traversable border with your square, or if it's in a corner of your square."
  Confidence: high

## Open questions

Exact per-Path action costs and skill lists are defined on Path-specific slipcase/tuckbox materials not included in the extracted rulebook or Quick Start Guide.