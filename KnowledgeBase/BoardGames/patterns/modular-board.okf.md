---
okf_version: 0.2
type: pattern
mechanics: [modular-board]
better_if_labels: [setup-teardown]
confidence: low
status: draft
---

## Summary

`modular-board` crosses the 5-game corpus threshold this pass (8 tagged
games), but evidence that engages the mechanic itself — rather than campaign
progression, randomness, or general setup labor — is thin: 1 game (Descent:
Journeys in the Dark, Second Edition) has a claim squarely about what a
modular/tile-revealed board does to play, and a second (Nemesis) has a
related but more general claim about the physical handling cost of modular
room setup. Descent's evidence is the more interesting of the two: the
publisher's own marketing sells modular setup as fast and low-downtime, but
an independent reviewer reports that the same full-board-visible-at-setup
approach undercuts the dungeon-exploration mystery the modular-tile system
is presumably meant to create. This is a genuine tension, not a contradiction
between two complaints — a design goal (fast setup) and a design goal
(gradual discovery) pulling against each other through the same mechanic.

## Evidence by game

- betrayal-legacy (frontmatter only): carries `modular-board` but its
  better-if claims (randomness, haunt pacing, trackers, formatting) never
  engage the modular room-tile system directly, confidence: n/a (excluded)
- cthulhu-death-may-die (frontmatter only): carries `modular-board` but its
  claims are about turn sequencing and progression tracking, not the board
  itself, confidence: n/a (excluded)
- descent-journeys-in-the-dark-second-edition (src-006): a reviewer reports
  that full-board setup — the modular tiles laid out before play begins —
  weakens the dungeon's intended exploration mystery, confidence: medium
- descent-journeys-in-the-dark-second-edition (src-003): the publisher's own
  product page explicitly markets "faster setup" as a feature of the same
  modular-tile system, confidence: high
- mage-knight / spirit-island / star-wars-imperial-assault (frontmatter
  only): all three carry `modular-board` but none has a claim in the docs
  read for this pass that is specifically about the modular board system
  rather than downtime, onboarding, or campaign structure generally,
  confidence: n/a (excluded)
- nemesis (src-005): the review describes nested setup work and a very
  large table footprint for the modular room-board, supporting labeled
  trays or bagged modules keyed to the official setup sequence, confidence:
  medium
- nemesis-lockdown (frontmatter only): carries `modular-board` but its
  cited claims are about elimination downtime, rulebook navigation, and
  randomness, confidence: n/a (excluded)

## Where it works

- descent-journeys-in-the-dark-second-edition (src-003): the publisher
  frames fast modular setup as a selling point, and no independent review
  in this corpus contradicts the *speed* claim — the contradiction found is
  about discovery pacing, not setup time itself.

## Where it fails

- descent-journeys-in-the-dark-second-edition (src-006): laying out the
  full modular board at setup reveals more of the dungeon than the
  exploration premise implies, undercutting mystery for the sake of setup
  speed — a case where a modular board's two possible virtues (fast to
  build, slow to reveal) are in tension with each other.
- nemesis (src-005): a modular room-board built from enough individual
  pieces to require "nested setup work" and a large table footprint is a
  handling cost distinct from, but compounding, a long overall setup
  procedure.

## Coverage gaps

This pattern rests on the thinnest evidence base of the three new mechanic
docs created this pass: one direct claim (Descent 2E) and one adjacent claim
(Nemesis, more about physical component handling than the modular-reveal
mechanic itself) out of eight tagged games. Betrayal Legacy, Cthulhu: Death
May Die, Mage Knight, Nemesis: Lockdown, Spirit Island, and Star Wars:
Imperial Assault all carry the tag without a body claim that engages the
modular-board system directly — their evidence instead serves
`campaign-progression.okf.md`, `randomness.okf.md`, `downtime.okf.md`, and
`onboarding.okf.md`. The corpus would benefit from a review that explicitly
discusses a modular board's tile-reveal pacing (rooms/regions uncovered
progressively during play, not laid out at setup) as a point of comparison
against Descent's full-reveal-at-setup approach, and from re-reading Mage
Knight's and Spirit Island's sources specifically for modular-board
commentary, since both are known to use tile-based or modular boards
mechanically but neither yielded a citable claim in this pass.
