---
okf_version: 0.2
type: pattern
mechanics: [dice-rolling]
better_if_labels: [randomness, combat-resolution]
confidence: low
status: draft
---

## Summary

Evidence has grown substantially and now includes a clear, high-confidence anchor
case: Elder Sign's task resolution is fully dice-gated with limited deterministic
recourse, read by reviewers as "glorified Yahtzee with custom dice" where a bad roll
sequence can remove the resources needed to recover. The same lever as before
recurs: giving players a way to choose or convert around a roll (dice-or-card
resolution, character-specific dice pools, Horrified's bounded per-monster puzzle)
reads as thoughtful, while unmediated crit/fail swings read as an accessibility,
fairness, and communication risk (Betrayal Legacy's "most dickheaded dice",
Cthulhu: Death May Die's "completely ruined by dice", Nemesis: Lockdown's
"catastrophic outcomes... despite strategy", War of the Ring's frustration for
deterministic-strategy players). Nemesis shows the same split seen in the
`randomness` pattern: dice-driven variable setup is praised for replayability
in the same game whose outcome-determining randomness is criticized elsewhere.
Several contributing games (kingdom-death-monster, too-many-bones,
betrayal-legacy, nemesis-lockdown) are still `needs_followup`, so this pattern
should be treated as a working hypothesis with real but not fully settled
evidence.

## Evidence by game

- betrayal-legacy (src-005): dice are "the most dickheaded dice," confidence: high
- cthulhu-death-may-die (src-003): "you can get completely ruined by dice and card randomness in this game," confidence: medium
- elder-sign (src-001, src-002): task resolution is fully dice-gated with limited deterministic recourse beyond consumable rerolls, reading as "glorified Yahtzee with custom dice," confidence: high
- elder-sign (src-004): "a few bad rolls... can cause a failure while simultaneously using up all of one's resources," so a bad sequence removes the means to recover from it, confidence: high
- heroes-of-terrinoth (src-005): review's Pros section names "randomized enemy
  sets, and dice-driven adjustment" alongside upgrades and hero variety as
  contributors to replay value, confidence: high
- horrified (src-002): item bag and monster deck create uncertainty, but each selected monster supplies a bounded, legible objective puzzle, making the randomness a "productive but visible pressure point," confidence: medium
- kingdom-death-monster (src-004): the review identifies dice rolling and
  critical hits/failures as core mechanisms, but the doc explicitly flags
  that consensus strength on this axis is not established from the material
  fetched, confidence: low
- nemesis (src-007, src-008, src-009): variable objectives and randomized ship layout support replayability, confidence: high
- nemesis-lockdown (src-009): random catastrophic outcomes can "torpedo games despite strategy," obscuring meaningful choices, confidence: medium
- oathsworn-into-the-deepwood (src-005): the combat system's choice between
  dice-rolling and card-drawing resolution is called an "impressively
  thoughtful twist," read as giving risk-tolerant vs. risk-averse players a
  mitigation choice, confidence: medium
- too-many-bones (src-004, src-005): both reviews frame the dice system and
  character development as the game's central appeal, describing dice as
  character-specific tactical tools rather than a shared random resolution
  mechanic, confidence: medium
- war-of-the-ring (src-002): hunt draws, combat rolls, and card draws "can frustrate players who prefer deterministic strategy," confidence: medium

## Where it works

- oathsworn-into-the-deepwood (src-005): offering dice vs. card resolution as
  a player-chosen path is singled out as a thoughtful risk-mitigation
  mechanism rather than a forced roll.
- heroes-of-terrinoth (src-005): dice-driven enemy/quest variability is
  credited as a Pro for replay value, not filed as a complaint.
- too-many-bones (src-004, src-005): tying dice pools to individual character
  ("Gearloc") identity is framed as the source of tactical distinctiveness,
  turning a shared randomizer into a build-specific tool.
- horrified (src-002): bounding each monster's uncertainty to a legible, solvable puzzle keeps dice/bag randomness a feature rather than noise.
- nemesis (src-007, src-008, src-009): dice-influenced variable setup is credited with replayability, distinct from the same game's criticized outcome-determining randomness elsewhere.

## Where it fails

- kingdom-death-monster (src-002, src-004): the better-if doc's own
  hypothesis — "clear point-of-decision communication for combat randomness
  would improve accessibility" — is explicitly marked as an inference from a
  mechanism list, not a reported player complaint, confidence: low.
- too-many-bones (src-004): the better-if doc frames "tactical dice systems"
  as a barrier to onboarding for players who don't already understand them,
  i.e., dice-pool literacy itself is a friction point for new players,
  confidence: medium.
- elder-sign (src-001, src-002, src-004): fully dice-gated resolution with no deterministic recourse, and bad-roll sequences that consume the resources needed to recover, make this the corpus's starkest dice-driven "randomness overrides skill" case.
- betrayal-legacy (src-005) and cthulhu-death-may-die (src-003): both report dice outcomes severe enough to override sound play, with no named mitigation lever in either case.
- nemesis-lockdown (src-009): random catastrophic outcomes are named as able to defeat good strategy outright.
- war-of-the-ring (src-002): dice-resolved combat is specifically named as frustrating for players who prefer deterministic strategy, one of several dice-driven systems (alongside hunt and card draws) pulling the same direction.

## Coverage gaps

hoplomachus-remastered, root, and the-quacks-of-quedlinburg still carry the
dice-rolling tag with reception docs that never discuss dice mechanics by name, and
mage-knight's "deterministic combat" praise still has no source-linked claim to
cite. The corpus would benefit from re-reading hoplomachus-remastered and root's
reception sources specifically for dice-combat commentary (their dice subsystems —
Chip Theory's chip-and-die combat, Root's dice-based Woodland skirmishes — are known
to exist mechanically but are undocumented here). Elder Sign now anchors this
pattern with a genuinely high-confidence "dice override skill" case, and the
"where it works" side has grown (Oathsworn, Heroes of Terrinoth, Too Many Bones,
Horrified, Nemesis), so confidence could reasonably rise once kingdom-death-monster,
too-many-bones, betrayal-legacy, and nemesis-lockdown clear their needs_followup
backlog.
