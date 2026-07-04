---
okf_version: 0.1
type: rule_category
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  edition: "English base game / rules updated March 2012"
scope: "base game"
sources:
  - id: "src-005"
    title: "MK_FAQ_1.0v2.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_FAQ_1.0v2.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official FAQ link; direct extraction failed."
  - id: "src-008"
    title: "Mage Knight FAQ — BoardGameGeek Wiki"
    url: "https://boardgamegeek.com/wiki/page/Mage_Knight_FAQ"
    kind: faq
    provenance: community
    retrieved_at: "2026-07-03"
    notes: "Community FAQ corresponding to official thread plus extras."
  - id: "src-011"
    title: "Mage Knight — negative review from a fan — BoardGameGeek thread"
    url: "https://boardgamegeek.com/thread/2427702/mage-knight-a-negative-review-from-a-guy-that-rate"
    kind: bgg_forum
    provenance: community
    retrieved_at: "2026-07-03"
    notes: "Rules-dispersion complaint."
confidence: medium
status: needs_followup
---

## Summary

Known edge-case zones include setup scaling, dummy-player solo/co-op rules, mana source usage, card timing, combat keywords/resistances, PvP, resting/wounds, and site-specific exceptions. The official FAQ exists but was not text-extracted this run.

## Source-backed facts

- Claim: WizKids links an Official FAQ for Mage Knight.
  Source: src-005
  Evidence: WizKids product page link named "Official FAQ".
  Confidence: high
- Claim: BGG FAQ organizes common questions under setup, mana, cards, combat, resting, skills, PvP, and other.
  Source: src-008
  Evidence: BGG FAQ extract table of contents lists "Game setup", "Mana", "Cards", "Combat", "Resting", "Skills", "Player vs Player", "Other".
  Confidence: medium
- Claim: Mana-source terminology has generated repeated community clarification.
  Source: src-008
  Evidence: Extract includes Q/A on whether "taking a mana die from the source" counts as the one die from source per turn.
  Confidence: medium
- Claim: Players report rules are dispersed across rulebook, walkthrough, cards, and other locations.
  Source: src-011
  Evidence: BGG thread extract: "Some rules are in the rule book, some in the Walkthrough, some on the cards..."
  Confidence: medium

## Player friction

Mage Knight’s edge-case cost is architectural: the game splits learning between walkthrough, rulebook, site cards, card text, FAQ, and community practice. That is tolerable for devotees and lethal to casual onboarding.

## Better-if opportunities

- rules ambiguity: one consolidated rules encyclopedia with official status.
- component clarity: icon appendix and site-card cross references.
- onboarding: rulebook should not rely on walkthrough memory for critical exceptions.

## Design implications for SomberSoft

- If rules are intentionally modular, ship a searchable glossary/index from day one.
- Every keyword that changes combat math needs one canonical example.
- Community FAQ volume is a warning beacon: players will become your documentation department if you abdicate.

## Open questions

- Reconcile official FAQ 1.0v2 with BGG wiki FAQ and identify any contradictions.
