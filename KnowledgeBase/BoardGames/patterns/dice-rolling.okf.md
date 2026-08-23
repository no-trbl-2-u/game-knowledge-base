---
okf_version: 0.2
type: pattern
mechanics: [dice-rolling]
better_if_labels: [randomness, combat-resolution]
confidence: medium
status: draft
---

## Summary

Evidence was thin through the last pass — most dice-rolling-tagged games discussed
randomness in general rather than the dice mechanism specifically. Elder Sign is the
first game in this corpus to draw direct, high-confidence reviewer commentary about
dice as the resolution mechanism itself: two independent reviews call fully
dice-gated task resolution "glorified Yahtzee with custom dice," and one adds that a
bad roll sequence can simultaneously fail a task and consume the resources needed to
recover from it — dice randomness compounding rather than staying isolated. Where
dice are discussed directly across the corpus, the same lever recurs: giving players
a way to choose or convert around a roll (dice-or-card resolution, character-specific
dice pools, consumable rerolls) reads as thoughtful, while unmediated crit/fail swings
read as an accessibility and communication risk. Two of the contributing games
(kingdom-death-monster, too-many-bones) are still `needs_followup`, so this pattern
should still be treated as a working hypothesis on the low-confidence claims, though
Elder Sign's high-confidence, dual-source evidence moves the overall pattern out of
purely thin territory.

## Evidence by game

- elder-sign (src-001, src-002): the official rules resolve adventures by matching rolled dice symbols to printed tasks, and both retrieved independent reviews record the standing criticism that this reads as "glorified Yahtzee with custom dice," confidence: high
- elder-sign (src-004): a bad roll sequence "can cause a failure while simultaneously using up all of one's resources," compounding dice randomness rather than isolating it to one task, confidence: high
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

## Where it fails

- elder-sign (src-001, src-002, src-004): fully dice-gated resolution with only consumable rerolls as recourse draws the corpus's sharpest, best-corroborated dice-specific complaint, and compounds when a bad sequence removes the resources needed to recover from it.
- kingdom-death-monster (src-002, src-004): the better-if doc's own
  hypothesis — "clear point-of-decision communication for combat randomness
  would improve accessibility" — is explicitly marked as an inference from a
  mechanism list, not a reported player complaint, confidence: low.
- too-many-bones (src-004): the better-if doc frames "tactical dice systems"
  as a barrier to onboarding for players who don't already understand them,
  i.e., dice-pool literacy itself is a friction point for new players,
  confidence: medium.

## Coverage gaps

hoplomachus-remastered, root, and the-quacks-of-quedlinburg have verified reception
docs that never discuss dice mechanics by name despite carrying the dice-rolling tag,
and mage-knight's "deterministic combat" praise has no source-linked claim to cite.
Several games promoted this pass (Betrayal Legacy, Cthulhu: Death May Die, Descent 2E,
the two Dead of Winter titles, Nemesis, Nemesis: Lockdown, Star Wars: Imperial Assault)
also carry `dice-rolling` in frontmatter without a body claim that names the dice
mechanism specifically — their evidence lands in `randomness.okf.md` instead, which
covers variance more broadly. The corpus would benefit from re-reading
hoplomachus-remastered and root's reception sources specifically for dice-combat
commentary (their dice subsystems — Chip Theory's chip-and-die combat, Root's
dice-based Woodland skirmishes — are known to exist mechanically but are undocumented
here), and from resolving the needs_followup status on kingdom-death-monster and
too-many-bones so this pattern's confidence can move further past its current medium.
