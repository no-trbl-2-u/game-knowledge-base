---
okf_version: 0.2
type: pattern
mechanics: [dice-rolling]
better_if_labels: [randomness, combat-resolution]
confidence: low
status: draft
---

## Summary

Evidence is thin but improving: of the dice-rolling games checked, only five have a
claim that is actually about dice specifically rather than randomness in general
(hoplomachus-remastered, root, and the-quacks-of-quedlinburg carry the
dice-rolling tag but their reception docs never single out dice mechanics by
name; mage-knight's reviews praise "deterministic combat" with no sourced
detail tying it to the dice mechanism). Where dice are discussed directly, the
same lever recurs: giving players a way to choose or convert around a roll
(dice-or-card resolution, character-specific dice pools) reads as thoughtful,
while unmediated crit/fail swings read as an accessibility and communication
risk. Elder Sign is the corpus's first game where dice ARE the entire resolution
system rather than one input among several — its evidence sharpens the "unmediated
swings" failure mode into something concrete: a roll can fail and simultaneously
consume the resources needed to recover from that failure. Two of the five
contributing games (kingdom-death-monster, too-many-bones) are still
`needs_followup`, so this pattern should be treated as a working hypothesis, not a
settled consensus.

## Evidence by game

- elder-sign (src-001, src-002): task resolution is fully dice-gated — the official
  rules resolve adventures by matching rolled symbols to printed tasks with dice
  removed as tasks complete — and the standing reviewer criticism reads this as
  "glorified Yahtzee with custom dice," confidence: high
- elder-sign (src-004): "a few bad rolls of the dice can cause a failure while
  simultaneously using up all of one's resources," compounding a failed roll with
  the loss of the tools that would let a player recover from it, confidence: high
- heroes-of-terrinoth (src-005): review's Pros section names "randomized enemy
  sets, and dice-driven adjustment" alongside upgrades and hero variety as
  contributors to replay value, confidence: high
- oathsworn-into-the-deepwood (src-005): the combat system's choice between
  dice-rolling and card-drawing resolution is called an "impressively
  thoughtful twist," read as giving risk-tolerant vs. risk-averse players a
  mitigation choice, confidence: medium
- too-many-bones (src-004, src-005): both reviews frame the dice system and
  character development as the game's central appeal, describing dice as
  character-specific tactical tools rather than a shared random resolution
  mechanic, confidence: medium
- kingdom-death-monster (src-004): the review identifies dice rolling and
  critical hits/failures as core mechanisms, but the doc explicitly flags
  that consensus strength on this axis is not established from the material
  fetched, confidence: low

## Where it works

- oathsworn-into-the-deepwood (src-005): offering dice vs. card resolution as
  a player-chosen path is singled out as a thoughtful risk-mitigation
  mechanism rather than a forced roll.
- heroes-of-terrinoth (src-005): dice-driven enemy/quest variability is
  credited as a Pro for replay value, not filed as a complaint.
- too-many-bones (src-004, src-005): tying dice pools to individual character
  ("Gearloc") identity is framed as the source of tactical distinctiveness,
  turning a shared randomizer into a build-specific tool.
- elder-sign (src-002, src-004): reviewers report enjoying dice-only resolution "both
  in solo efforts and with others" specifically because the lenient death penalty
  keeps a bad roll sequence from ending a session outright.

## Where it fails

- kingdom-death-monster (src-002, src-004): the better-if doc's own
  hypothesis — "clear point-of-decision communication for combat randomness
  would improve accessibility" — is explicitly marked as an inference from a
  mechanism list, not a reported player complaint, confidence: low.
- too-many-bones (src-004): the better-if doc frames "tactical dice systems"
  as a barrier to onboarding for players who don't already understand them,
  i.e., dice-pool literacy itself is a friction point for new players,
  confidence: medium.
- elder-sign (src-001, src-002): fully dice-gated resolution offers players who want
  deterministic planning "limited recourse beyond consumable rerolls" — the
  criticism that the system reduces to "glorified Yahtzee."
- elder-sign (src-004): a bad roll sequence can strip the resources a player needs to
  recover, compounding one dice failure into a cascading one.

## Coverage gaps

Three of the tagged games (hoplomachus-remastered, root,
the-quacks-of-quedlinburg) have verified reception docs that never discuss
dice mechanics by name despite carrying the dice-rolling tag, and
mage-knight's "deterministic combat" praise has no source-linked claim to
cite. The corpus would benefit from re-reading hoplomachus-remastered and
root's reception sources specifically for dice-combat commentary (their dice
subsystems — Chip Theory's chip-and-die combat, Root's dice-based Woodland
skirmishes — are known to exist mechanically but are undocumented here), and
from resolving the needs_followup status on kingdom-death-monster and
too-many-bones so this pattern's confidence can move past low. Several other
newly-added dice-rolling games (betrayal-legacy, cthulhu-death-may-die,
descent-journeys-in-the-dark-second-edition, nemesis, nemesis-lockdown,
star-wars-imperial-assault) carry the tag but their sourced claims are about
randomness/rules/pacing in general rather than the dice mechanism specifically,
so they were left for `patterns/randomness.okf.md` rather than cited here.
