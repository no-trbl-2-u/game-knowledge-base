---
okf_version: 0.2
type: pattern
mechanics: [hidden-information]
better_if_labels: [player-interaction]
confidence: medium
status: draft
---

## Summary

`hidden-information` crosses the 5-game corpus threshold this pass (9 tagged
games), but only two — Nemesis and Shadows over Camelot — carry reviewer
commentary that engages the mechanic directly rather than treating it as
background metadata. Both point the same direction: hidden information reads
as the strongest part of the design specifically when it produces sustained,
costly uncertainty about *other players*, not just about the board state.
Shadows over Camelot's uncertain Traitor presence and Nemesis's hidden
individual objectives are both credited by their reviewers as the game's
emotional and strategic center — suspicion, not the surface quest/objective
mechanics, is what players remember. The design lesson both games share is
that hidden information needs a cost attached to acting on it wrongly (a
false accusation in Shadows over Camelot, a legal-but-suspicious indirect
harm in Nemesis) or it collapses into either paranoia with no stakes or
information that never actually matters at the table.

## Evidence by game

- betrayal-legacy (frontmatter only): carries `hidden-information` but its
  better-if doc's claims (pre-haunt randomness, haunt pacing, trackers,
  formatting) never engage the haunt's traitor-reveal mechanic directly, so
  it contributed nothing citable here, confidence: n/a (excluded)
- dead-of-winter-a-crossroads-game / dead-of-winter-the-long-night
  (frontmatter only): both carry `hidden-information` (secret objective
  cards) but their cited claims are about randomness, onboarding, and
  purchase value, not the hidden-objective dynamic itself, confidence: n/a
  (excluded)
- nemesis (src-006, src-008, src-009): reviews repeatedly identify hidden
  individual goals — not a conventional revealed-traitor structure — as the
  tension source; the rules make direct attacks illegal while indirect harm
  stays legal, and cooperation often remains self-preserving even for
  players with hostile agendas, confidence: high
- nemesis-lockdown (frontmatter only): carries `hidden-information` but its
  cited claims are about elimination downtime, rulebook navigation, and
  randomness, not the hidden-information dynamic specifically, confidence:
  n/a (excluded)
- shadows-over-camelot (src-006, src-007): both independent reviewers name
  imperfect communication, uncertain Traitor presence, and the cost of a
  wrong accusation as the base game's strongest source of fun — suspicion
  around ordinary moves, not the quest mechanics, carries the design,
  confidence: high

## Where it works

- nemesis (src-006, src-008, src-009): rules-level calibration — no direct
  attacks, legal indirect harm, hidden individual goals — is exactly what
  reviewers credit for sustained tension without the game collapsing into
  open conflict or, at the other extreme, becoming fully transparent
  co-op play.
- shadows-over-camelot (src-006, src-007): both reviewers, independently,
  name the same single element (imperfect communication plus a costly
  accusation) as the base game's strongest design choice — a rare case of
  two unrelated sources converging on identical praise.

## Where it fails

No praised-design evidence for this pattern doubled as a complaint in the
two contributing games — both reviewed sets treat their game's hidden
information as an unqualified strength. That should not be read as "hidden
information never fails" in this corpus; it means the two games with usable
evidence happen to be the ones where reviewers judged the implementation to
have worked.

## Coverage gaps

This pattern currently rests on exactly two games out of nine carrying the
mechanic tag; the other seven (Battlestar Galactica, Betrayal Legacy, both
Dead of Winter titles, Nemesis: Lockdown, The Thing: The Board Game,
Unfathomable) either lack a reception doc entirely (Battlestar Galactica,
The Thing, Unfathomable) or carry the tag without a body claim that
engages the hidden-information dynamic directly. Both contributing games
also carry `semi-cooperative-game` alongside `hidden-information` (Nemesis
is the exception — it is tagged cooperative, not semi-cooperative), so this
pattern should be read alongside `semi-cooperative-game.okf.md`, which draws
on an overlapping but not identical evidence set. The corpus would benefit
from a traditional revealed-traitor design (rather than a hidden-objective
one) to test whether the "cost of accusation" lesson holds when the hidden
role is binary (traitor/not) rather than a spectrum of individual secret
goals.
