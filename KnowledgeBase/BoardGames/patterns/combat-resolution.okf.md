---
okf_version: 0.2
type: pattern
mechanics: [force-commitment, dice-rolling]
better_if_labels: [combat-resolution]
confidence: low
status: draft
---

## Summary

Across six games, combat-resolution friction clusters around two related but
distinct complaints. First, hidden or randomized combat power is praised when
it stays readable and punished when the underlying math goes opaque: Dune:
Imperium's simultaneous hidden commitment earns praise for tension but also a
balance complaint when one leader's strength becomes illegible to opponents,
and Arydia's AI-card-driven Mob/Boss behavior draws the same pairing — readable
tactical pressure from Threat-keyed AI cards, but a matching request to keep
those Threat changes "visible and auditable at the table." Second, several
heavier, combat-forward games underdeliver relative to their own presentation:
Cthulhu: Death May Die's monsters "aren't as interesting as I had hoped," and
Scythe makes it "rare to find a hefty amount of combat during a session"
despite combat's prominence in how the game presents itself — a disappointment
of expectation rather than a balance or legibility failure. Unmatched is the
counterexample: its brute-force-plus-bluffing attacks are praised as an
"intelligent part" of play, giving combat resolution itself strategic texture
instead of leaving it a pure randomizer. Kingdom Death: Monster's dice-based
resolution remains only lightly sourced. The actionable throughline: players
reward combat systems that let them read incoming threat (visible thresholds,
legible AI patterns, bluffable-but-inferable attacks) and punish ones that
either hide the math or under-deliver on the amount/intensity of combat the
game promised.

## Evidence by game

- dune-imperium (src-008): Reviewer (There Will Be Games) praised hidden combat
  inputs, saying a player is "never 100% sure how much combat power someone
  has," calling resulting decisions "hard, impactful, and constant." confidence: medium
- dune-imperium (src-010): A separate reviewer flagged a possible balance issue
  where one leader (Glossu Rabban) can become "close to unstoppable in the
  conflict phase" by recruiting soldiers easily, suggesting hidden-commitment
  combat can tip into perceived faction imbalance. confidence: low
- kingdom-death-monster (src-004): Review identifies dice rolling and critical
  hits/failures as core combat mechanisms; the better-if doc infers (not a
  reported reviewer request) that clearer point-of-decision communication for
  combat randomness would help accessibility without removing the game's risk
  identity. confidence: low
- arydia-the-paths-we-dare-tread (src-005): Reviewer credits Mobs and Bosses
  using AI cards keyed to rising Threat with giving readable tactical
  pressure in combat, confidence: medium (note: source doc status is
  needs_followup)
- arydia-the-paths-we-dare-tread (src-005): The same source's better-if angle
  asks designers to "keep threat changes visible and auditable at the table,"
  i.e. don't let the AI-card threat math go opaque even as it stays readable
  moment-to-moment, confidence: medium (note: source doc status is
  needs_followup)
- cthulhu-death-may-die (src-003): Reviewer reports "the monsters ... aren't
  as interesting as I had hoped," a combat-content disappointment relative to
  the game's horror-combat premise, confidence: high
- scythe (src-003): Reviewer finds it "rare to find a hefty amount of combat
  during a session" despite combat's prominence in the game's presentation,
  confidence: high
- unmatched-battle-of-legends-volume-one (src-003): Reviewer calls attacks "a
  mix of brute force and light bluffing," naming this blend an "intelligent
  part of attacks" rather than pure randomization, confidence: medium

## Where it works

- dune-imperium (src-008): Hidden combat power that keeps opponents guessing
  is explicitly named as a source of the game's tension and impactful
  decision-making, not just a complaint.
- arydia-the-paths-we-dare-tread (src-005): AI cards keyed to rising Threat
  give Mobs and Bosses readable tactical pressure — the hidden/scaling
  element still resolves into legible combat decisions.
- unmatched-battle-of-legends-volume-one (src-003): Attacks blending brute
  force with light bluffing are called an "intelligent part" of the game
  rather than a randomizer bolted onto combat.
- kingdom-death-monster: No praised-design evidence tying specifically to
  combat resolution was found in the docs read (the game's praised-design
  claims center on tactical combat as a broad mechanism blend, not on the
  resolution system itself); treat as "no praised-design evidence found for
  this pattern" for KDM specifically.

## Where it fails

- dune-imperium (src-010): Possible leader-specific combat dominance
  (Glossu Rabban) reported as a low-confidence balance complaint tied to the
  combat/conflict phase.
- dune-imperium (src-006, via better-if.okf.md proposal): Hidden combat
  surprise was flagged as needing clearer public risk indicators (Intrigue
  card counts, sword ranges, commitment reminders) so uncertainty doesn't
  read as unfairness — this is the better-if doc's own synthesis of the
  praised-uncertainty tension, confidence: medium.
- kingdom-death-monster (src-004): Combat randomness (dice rolling, critical
  hits/failures) is flagged as needing clearer point-of-decision
  communication, though this is an inference in the source doc rather than a
  directly reported reviewer complaint, confidence: low.
- arydia-the-paths-we-dare-tread (src-005): Even where AI-card combat reads
  well moment-to-moment, the better-if ask is to keep rising-Threat changes
  visible and auditable rather than tracked only by the AI cards themselves,
  confidence: medium (needs_followup source doc).
- cthulhu-death-may-die (src-003): Monsters are reported as "not as
  interesting as I had hoped," an under-delivery complaint against the
  game's horror-combat premise, confidence: high.
- scythe (src-003): Combat is "rare" in actual play despite being prominent
  in the game's presentation, a mismatch between marketed and experienced
  combat frequency, confidence: high.

## Coverage gaps

Support for this label has broadened from two games to six but remains
mixed in strength: Kingdom Death: Monster's reception docs and Arydia's
source are both still `needs_followup`, so their claims stay low/medium
confidence and inference-heavy. The new evidence also splits into two
different failure shapes (hidden-math legibility vs. under-delivered
combat volume) that haven't yet been tested against each other across more
games — a dedicated combat-heavy wargame or skirmish title with a
`verified` reception doc, and a case where a game's combat frequency is
explicitly praised rather than found lacking, would help separate these
threads.
