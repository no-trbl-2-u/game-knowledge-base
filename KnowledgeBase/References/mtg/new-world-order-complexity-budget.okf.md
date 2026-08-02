---
okf_version: 0.2
type: design_reference
topic: "MTG — New World Order: the complexity budget at common"
mechanics: []
better_if_labels: [onboarding, accessibility, strategic-depth]
sources:
  - id: "src-001"
    title: "Mark Rosewater — New World Order (Making Magic)"
    url: "https://magic.wizards.com/en/news/making-magic/new-world-order-2011-12-05"
    kind: other
    provenance: official
    retrieved_at: "2026-08-01"
    notes: "2011-12-05 Making Magic column; the canonical statement of MTG's complexity policy at common."
confidence: medium
status: verified
---

## Summary

New World Order (NWO) is Wizards R&D's policy, articulated by head designer
Mark Rosewater in 2011, that caps how much complexity may appear on common
cards — the cards a beginning player is statistically most likely to hold.
It distinguishes three kinds of complexity (comprehension, board, strategic),
bans the first two at common while explicitly welcoming the third, and shifts
the removed complexity to higher rarities rather than deleting it from the
game. It is the closest thing card-game design has to a published, field-tested
"text budget" law.

## Source-backed facts

- Claim: NWO is a redrawn line for acceptable complexity at common
  specifically, not a game-wide simplification.
  Source: src-001
  Evidence: "We have to be very careful about what we put at common. We had to redraw the line for what level of complexity was acceptable."
  Confidence: high

- Claim: Common is the correct control point because beginners buy fewer
  boosters, so commons are a larger share of what they actually own and play.
  Source: src-001
  Evidence: "Beginning players buy fewer boosters. This means that the percentage of relevant cards they own that are common is simply much higher."
  Confidence: high

- Claim: R&D's complexity taxonomy has three categories: comprehension
  complexity, board complexity, and strategic complexity.
  Source: src-001
  Evidence: "There are three types of complexity in a game: Comprehension Complexity... Board Complexity... [and] Strategic Complexity."
  Confidence: high

- Claim: Strategic complexity is exempt from the cap because beginners
  cannot perceive it, so it costs them nothing while rewarding experts.
  Source: src-001
  Evidence: "Comprehension complexity and board complexity are a problem for beginners. Strategic complexity is not. Why? Because beginners can't see strategic complexity."
  Confidence: high

- Claim: NWO relocates complexity upward (especially to uncommon) rather
  than removing it from the game.
  Source: src-001
  Evidence: "New World Order allowed higher rarities, especially uncommon, to tick up in complexity. The goal wasn't to remove complexity, but to shift where it was positioned."
  Confidence: high

- Claim: Common retains a deliberate, managed complexity allowance — the
  policy is budgeting, not prohibition.
  Source: src-001
  Evidence: "Common is allowed some complexity. The big shift of New World Order is that R&D is much more conscious about where and how it is used."
  Confidence: high

## Implications for designers

- A complexity cap needs a *location*, not just a number: pick the tier of
  content a new player is most exposed to and budget there hardest.
- Classify complexity before cutting it. Text length (comprehension) and
  on-table state tracking (board) hurt novices; depth of correct play
  (strategic) does not, because novices literally cannot see it.
- The budget is a redistribution rule: complexity squeezed out of the entry
  tier should reappear at tiers that experienced players self-select into.
- This is the mature, 30-years-of-data version of any "how much text may a
  card carry" law: cap comprehension/board complexity where beginners live,
  spend strategic complexity freely everywhere.

## Open questions

- Quotes were machine-extracted from a fetched body; re-verify verbatim
  wording in the next audit pass.
- The follow-up "red flag" review process (percentage of flagged commons
  allowed per set) is documented in later Rosewater writing; fetch and add
  that source to complete the enforcement half of the policy.
