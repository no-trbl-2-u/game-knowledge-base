---
okf_version: 0.2
type: pattern
mechanics: [force-commitment, dice-rolling, card-play-conflict-resolution]
better_if_labels: [combat-resolution]
confidence: low
status: draft
---

## Summary

Evidence was thin (two games) and remains thin-to-moderate (six games), but a clearer
shape emerges: combat resolution mechanics that are core to a game's appeal are also
the primary source of "better if" requests about that same mechanic. Dune: Imperium's
hidden simultaneous-commitment combat draws praise for tension but a matching complaint
about swinginess; Scythe and Arydia both show a variant of the same split — combat
mechanics marketed or designed as central turn out either rarer in play than advertised
(Scythe) or praised for AI-driven unpredictability while also being the main source of
difficulty complaints (Arydia). The one clean counter-example is Unmatched, where
light bluffing over when to commit cards is praised without a matching complaint,
possibly because the system is small enough (sub-five-minute teach) to carry no
competing promise to under-deliver on. Kingdom Death: Monster's dice-based combat
resolution is only lightly sourced so far (needs_followup) but points at the same
tension: risk/randomness that defines the game's identity is also the axis reviewers
flag as needing clearer at-the-table communication.

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
- arydia-the-paths-we-dare-tread (src-005): foe behavior depends on Threat levels and
  AI cards, with the same mechanism described as both the source of unpredictable
  challenge and a driver of combat-related difficulty complaints, confidence: medium
- cthulhu-death-may-die (src-003): the reviewer says "the monsters in Cthulhu: Death
  May Die aren't as interesting as I had hoped," a direct complaint about the
  resolution system's variety rather than its fairness, confidence: high
- scythe (src-003): combat is prominent in the game's marketing and presentation but
  reported rare during a typical session, with factions usually building engines and
  holding territory instead of fighting, confidence: medium
- unmatched-battle-of-legends-volume-one (src-003): attacks are described as a mix of
  brute force and light bluffing, with players deciding when to invest cards into an
  attack and when to hold them back, confidence: medium

## Where it works

- dune-imperium (src-008): Hidden combat power that keeps opponents guessing
  is explicitly named as a source of the game's tension and impactful
  decision-making, not just a complaint.
- arydia-the-paths-we-dare-tread (src-005): AI-card-driven foe behavior keyed to rising
  Threat is praised as an unpredictable, non-repetitive challenge generator.
- unmatched-battle-of-legends-volume-one (src-003): deciding when to commit or withhold
  cards in an attack is praised as light bluffing that adds a tactical layer without
  adding rules overhead — the corpus's cleanest combat-resolution design praised
  without a matching complaint.
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
- cthulhu-death-may-die (src-003): the monster roster itself is called less interesting
  than hoped, a content-variety complaint distinct from randomness/fairness.
- scythe (src-003): a game marketed around conflict delivers combat rarely in
  practice, a mismatch between presentation and table experience.
- arydia-the-paths-we-dare-tread (src-005): the same Threat/AI-card system praised for
  unpredictability is also implicated in difficulty-related combat complaints.

## Coverage gaps

Current support for this label has grown from two games to six. The previous
pass's request for a dedicated combat-heavy skirmish/wargame with a `verified`
reception doc is now met by Unmatched: Battle of Legends, Volume One (added
above), whose light-bluffing attack resolution is this pattern's cleanest
praised-without-complaint case. Kingdom Death: Monster's reception docs are
still `needs_followup` with low-confidence, inference-heavy claims, and most
other evidence remains single-review, so conclusions here should still be
read as provisional.
