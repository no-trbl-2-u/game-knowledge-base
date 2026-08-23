---
okf_version: 0.2
type: pattern
mechanics: [semi-cooperative-game]
better_if_labels: [player-interaction]
confidence: medium
status: draft
---

## Summary

`semi-cooperative-game` crosses the 5-game corpus threshold this pass (10
tagged games), but only two — Bloodborne: The Card Game and Shadows over
Camelot — carry reviewer commentary that engages the semi-cooperative
dynamic (players who must cooperate but are permitted, or required, to
betray each other) directly. Both agree on the design requirement that
makes semi-cooperation land rather than curdle: the game must tell players
up front, at onboarding, that betrayal is a legitimate and expected part of
play, not a violation of the cooperative spirit. Bloodborne's reviewer
explicitly warns that groups uncomfortable with attacking each other's plans
should know that going in; Shadows over Camelot's reviewers describe the
same premise — suspicion of teammates — as the base game's single strongest
element specifically because the rules make an accusation costly rather than
free, so betrayal-permission doesn't collapse into consequence-free chaos.

## Evidence by game

- battlestar-galactica-the-board-game (frontmatter only): carries
  `semi-cooperative-game` but has no reception doc in this corpus, so it
  contributed nothing citable, confidence: n/a (excluded)
- betrayal-legacy (frontmatter only): carries `semi-cooperative-game` but
  its better-if doc's claims (randomness, haunt pacing, trackers,
  formatting) never engage the haunt's cooperative-to-adversarial turn
  directly, confidence: n/a (excluded)
- bloodborne-the-card-game (src-004): Ars Technica praises the bluffing and
  betrayal core but warns that take-that play will not suit groups
  uncomfortable with attacking friends' plans, and that onboarding should
  state plainly that in-game promises are nonbinding, confidence: high
- dead-of-winter-a-crossroads-game / dead-of-winter-the-long-night
  (frontmatter only): both carry `semi-cooperative-game` (via secret
  Crossroads/betrayer objectives) but their cited claims are about
  randomness, onboarding, and purchase value, not the semi-cooperative
  dynamic itself, confidence: n/a (excluded)
- forgotten-waters (frontmatter only): carries `semi-cooperative-game` but
  its cited claims are about app-narration pacing, repetitive skill checks,
  and tech dependency, not the semi-cooperative dynamic, confidence: n/a
  (excluded)
- nemesis-lockdown (frontmatter only): carries `semi-cooperative-game` but
  its cited claims are about elimination downtime, rulebook navigation, and
  randomness, confidence: n/a (excluded)
- shadows-over-camelot (src-006, src-007): both independent reviewers name
  imperfect communication, uncertain Traitor presence, and the cost of a
  wrong accusation as the base game's strongest source of fun, confidence:
  high
- the-thing-the-boardgame / unfathomable (frontmatter only): both carry
  `semi-cooperative-game` but neither has a reception doc in this corpus,
  confidence: n/a (excluded)

## Where it works

- bloodborne-the-card-game (src-004): bluffing and betrayal are praised as
  the game's central appeal, not merely tolerated as friction, provided the
  group opts in with clear expectations set beforehand.
- shadows-over-camelot (src-006, src-007): a real cost attached to a wrong
  accusation is what keeps semi-cooperative suspicion from turning into
  either paralysis (nobody dares act) or chaos (everybody accuses everyone);
  both independent reviewers converge on this exact point.

## Where it fails

- bloodborne-the-card-game (src-004): without upfront framing, take-that
  play in a nominally cooperative-feeling box can read as a broken promise
  rather than the intended design, alienating groups who didn't expect
  direct interference.

## Coverage gaps

This pattern currently rests on exactly two games out of ten carrying the
mechanic tag — the same two-game evidence base as `hidden-information.okf.md`,
though the two patterns draw on different specific claims from those games
(betrayal-permission and onboarding framing here; information asymmetry and
accusation cost there) and should be read together rather than as
duplicates. Seven of the remaining eight tagged games either lack a
reception doc (Battlestar Galactica, The Thing, Unfathomable) or carry the
tag without a body claim that engages the semi-cooperative dynamic directly
(Betrayal Legacy, both Dead of Winter titles, Forgotten Waters, Nemesis:
Lockdown). The corpus would benefit from a semi-cooperative game whose
reviews report the dynamic *failing* — a group turned off by unexpected
betrayal, or a hidden-traitor structure that never created real suspicion —
to give this pattern a "where it fails" case grounded in a different game
than the one already carrying that side of the argument.
