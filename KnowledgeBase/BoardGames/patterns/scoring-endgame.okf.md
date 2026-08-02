---
okf_version: 0.2
type: pattern
mechanics: [end-game-bonuses]
better_if_labels: [scoring-endgame]
confidence: medium
status: draft
---

## Summary

Evidence for this label is thin: only Ark Nova and Spirit Island carry direct, on-point
scoring/endgame complaints, and Slay the Spire's tagged instance is really about
post-run campaign-reset clarity rather than a scoring ceremony or trigger-design
problem. Betrayal Legacy adds a fourth flavor specific to legacy games: the "endgame"
is a per-session haunt trigger rather than a final score, and its complaint is about
pacing (running too long or resolving too fast) rather than either math or climax.
Where the pattern shows up cleanly, the complaint is not that the endgame
math is unfair — it's that closing the game requires either the rulebook (Ark Nova)
or feels anticlimactic/procedural rather than climactic (Spirit Island), or that the
trigger itself is inconsistently paced (Betrayal Legacy). Only 4 games carry this
label with citable evidence in the corpus, so conclusions here should be treated as
directional, not definitive.

## Evidence by game

- ark-nova (src-007): Board Game Quest's review says endgame scoring "is not elegant"
  and requires players to "pull out the rule book" to resolve it, confidence: high
- betrayal-legacy (src-005): haunt phases — the game's per-session climax trigger — are
  reported to run "thirty minutes beyond what it should" or resolve "before a single
  full round passes," an endgame-pacing complaint distinct from scoring math
  (source doc status: needs_followup), confidence: medium
- spirit-island (src-005): Gideon's Gaming notes the game "can potentially solve the
  game many rounds in advance," making the "last rounds feel stale" rather than
  climactic, confidence: high
- spirit-island (src-009): Stidjen Plays Solo separately flags the solo/multi-hand
  endgame as feeling procedural rather than dramatic ("end game feel procedural" /
  "end game is lacklustre"), confidence: high
- slay-the-spire-the-board-game (src-008): coopgestalt found the transition after
  finishing Act III "very unclear" without prior video-game familiarity — an
  endgame/reset-procedure complaint more than a scoring-ceremony one, confidence: medium

## Where it works

No praised-design evidence found for this pattern. None of the three games' reception
docs praise a specific scoring ritual or endgame-trigger design as a strength; praise
in these docs targets other systems (Ark Nova's action-card engine, Spirit Island's
asymmetric spirits and fear-based victory, Slay the Spire's cooperative adaptation).

## Where it fails

- ark-nova (src-007): final scoring is not self-executing from the board state alone;
  it drives players back to the rulebook at the exact moment the game should be
  landing its close.
- spirit-island (src-005, src-009): two independent reviewers, from different angles
  (predictability of the invader-deck timeout, and solo/multi-hand procedural feel),
  converge on the same symptom — the ending arrives without climax rather than as a
  designed crescendo.
- slay-the-spire-the-board-game (src-008): the "end" of a run/Act cycle is a reset and
  meta-progression event, and that transition was not self-explanatory for a player
  without outside (video-game) context.
- betrayal-legacy (src-005): haunt pacing runs both too long and too short depending on
  the specific haunt, so the climactic trigger is inconsistent rather than reliably
  earning its moment.

## Coverage gaps

Evidence clusters around "closing the game requires external reference" (Ark Nova),
"the ending doesn't feel earned" (Spirit Island), and "the trigger itself is
inconsistently paced" (Betrayal Legacy) — related but distinct failure modes under one
label. nemesis carries the scoring-endgame label (its onboarding claim mentions "four
endgame gates") but its reception docs never discuss scoring or the endgame trigger's
pacing/drama directly, so it was excluded rather than forced in. betrayal-legacy's
contribution is from a `needs_followup` reception doc, which is why this pattern's
`status` stays `draft` rather than `verified`. A heavier area-control or
engine-building title with an explicit, reviewer-discussed final-scoring phase
(tableau/board tally at game end) would help separate "scoring math is a chore" from
"the endgame trigger itself lacks drama."
