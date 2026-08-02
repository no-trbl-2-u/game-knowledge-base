---
okf_version: 0.2
type: pattern
mechanics: [dice-rolling, deck-bag-and-pool-building, push-your-luck]
better_if_labels: [randomness]
confidence: medium
status: draft
---

## Summary

Randomness friction splits into two failure modes and one recurring fix. Too much
uncontrolled variance (an oversized card pool, an artificial catch-up bump) reads as
the game overriding player skill; too little variance (a thin card pool that repeats)
reads as predictable and stale. The recurring mitigation reviewers reward is giving
players a lever over the randomness — deterministic ordering, a dice-or-card choice,
or a catch-up tool framed as earned rather than free — so a bad outcome still traces
back to a legible decision. Nemesis and Betrayal Legacy sharpen the "too much variance"
side: both are praised for the same randomness that produces memorable emergent stories,
while the same reviewers flag it as domino-effect swinginess or a run of card draws that
can sideline a player entirely — the same variance is both the appeal and the complaint.

## Evidence by game

- aeons-end (src-004): no-shuffle deck ordering is praised because it turns deck-out
  losses into accountable planning failures rather than bad draws ("it wasn't a bad
  draw, it was a bad choice"), though onboarding into that discipline is itself a
  friction point, confidence: high
- ark-nova (src-008): the 212-card zoo deck produces "output randomness [that] is so
  large" that laid strategic plans can fail to pan out; the reviewer wanted fewer
  cards or more deck-churn tools, confidence: high
- betrayal-legacy (src-005): pre-haunt card draws can leave a player "unable to even
  meaningfully participate" despite reasonable play, and the same review separately
  calls the dice "the most dickheaded" (source doc status: needs_followup), confidence: high
- dune-imperium (src-008): hidden combat inputs (Intrigue cards, troop commitments)
  are praised for making decisions "hard, impactful, and constant" because no one is
  ever fully sure of an opponent's combat strength, confidence: medium
- heat-pedal-to-the-metal (src-007): the slipstream/adrenaline catch-up tool is
  called unpredictable and something that "doesn't feel earned or satisfying,"
  read as imposed variance rather than skill, confidence: medium
- heroes-of-terrinoth (src-005): randomized enemy sets and dice-driven encounter
  adjustment are named as explicit Pros contributing to replay value,
  confidence: high
- oathsworn-into-the-deepwood (src-005): letting players choose between dice-roll and
  card-draw combat resolution is called an "impressively thoughtful twist" that gives
  risk-tolerant vs. risk-averse players a mitigation choice, confidence: medium
- spirit-island (src-005): the base game's thin fear/blight card pool "repeat[s]
  often," making rounds predictable enough to solve in advance — a variance-too-low
  complaint that is the mirror image of the more common variance-too-high friction,
  confidence: high
- the-quacks-of-quedlinburg (src-005): the reviewer flags bag-pull variance as a
  strong taste filter, warning that luck-averse players should try the game before
  buying it, confidence: high
- nemesis (src-006, src-007): reviewers describe random room/intruder/event chains as
  the source of the game's most-praised emergent stories, while the same randomness
  produces escape/noise "domino effects" that one reviewer calls overwhelming,
  confidence: high

## Where it works

- aeons-end (src-004): deterministic no-shuffle deck ordering converts randomness
  into a planning puzzle — the reviewer calls it one of the best cooperative
  deckbuilders specifically because "you never shuffle."
- dune-imperium (src-008): hidden combat strength is praised for producing dramatic,
  legible uncertainty rather than arbitrary noise ("never 100% sure how much combat
  power someone has").
- heroes-of-terrinoth (src-005): dice-driven quest/enemy variability is credited as a
  Pro for replay value, not a complaint.
- oathsworn-into-the-deepwood (src-005): offering dice vs. card resolution as a
  player choice is singled out as a thoughtful risk-mitigation mechanism.
- the-quacks-of-quedlinburg (src-006): the rat-tail catch-up rule is praised for
  keeping players who busted badly competitive, softening the sting of a bad bag pull.
- nemesis (src-006, src-007, src-009): randomized room/intruder/event chains and
  variable objectives are credited with producing memorable, replayable stories even
  when plans fail — the same variance the "where it fails" section flags is the
  corpus's clearest case of praised-and-punished randomness at once.

## Where it fails

- ark-nova (src-008, src-009): an oversized card deck produces variance large enough
  that reviewers say players "can't really plan ahead" and end up "waiting for cards
  to come that never do."
- heat-pedal-to-the-metal (src-005, src-006, src-007): the adrenaline/slipstream
  catch-up mechanics are repeatedly flagged as feeling "too forgiving or artificial"
  and unearned rather than skill-driven.
- spirit-island (src-005, src-009): the base box under-supplies fear/blight card
  variety, making late rounds solvable in advance, while the true-solo mode swings
  the other way and is called explicitly "swingy."
- the-quacks-of-quedlinburg (src-005): the reviewer's blunt warning — don't buy
  sight-unseen "if you don't like luck" — shows bag-pull variance as a hard filter
  on the audience, not just a texture note.
- betrayal-legacy (src-005): pre-haunt card draws are described as capable of leaving
  a player unable to meaningfully participate before the finale even plays out
  (source doc status: needs_followup), confidence: high.
- nemesis (src-006, src-007): escape/noise domino effects and generally "overwhelming"
  randomness are named as a friction point distinct from the praised storytelling
  variance, confidence: high.

## Coverage gaps

Two listed games carried the `randomness` label but didn't yield citable
variance-specific evidence: legendary-encounters-an-alien-deck-building-game's
sourced complaints are about hive-deck *timing* and per-player-count *difficulty*
rather than variance itself, and kingdom-death-monster's only randomness claim is
explicitly flagged by its own doc as an unconfirmed inference (status:
needs_followup). betrayal-legacy's contribution is also from a `needs_followup`
reception doc, which is why this pattern's `status` stays `draft` rather than
`verified`. The corpus would benefit from a follow-up pass on kingdom-death-monster
once its needs_followup backlog clears, specifically targeting how reviewers discuss
its critical-hit/wound-table dice system.
