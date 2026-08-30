---
okf_version: 0.2
type: pattern
mechanics: [force-commitment, dice-rolling]
better_if_labels: [combat-resolution]
confidence: low
status: draft
---

## Summary

Evidence is thin. Dune: Imperium's hidden simultaneous-commitment combat
draws praise for tension but a matching complaint that the same hiddenness
reads as swinginess/imbalance when a leader's combat strength outpaces
opponents' visibility into it. Kingdom Death: Monster's dice-based combat
resolution is only lightly sourced so far (needs_followup) but points at the
same tension: risk/randomness that defines the game's identity is also the
axis reviewers flag as needing clearer at-the-table communication. Arydia's
threat-driven AI combat adds a similar auditability angle from a different
mechanism — foe behavior keyed to a Threat track needs those changes to stay
visible, or the same "why did that happen" opacity results. Both games
suggest the same shape of problem — resolution mechanics that are core to the
game's appeal are also the primary source of "better if" requests.

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
- arydia-the-paths-we-dare-tread (src-005): foe behavior depends on Threat levels
  and AI cards; combat resolution should keep those threat changes visible and
  auditable at the table. confidence: medium (source doc status: needs_followup)

## Where it works

- dune-imperium (src-008): Hidden combat power that keeps opponents guessing
  is explicitly named as a source of the game's tension and impactful
  decision-making, not just a complaint.
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

## Coverage gaps

Current support for this label remains narrow, and both Kingdom Death: Monster's and
Arydia's reception docs are still `needs_followup`, the latter with a low-confidence,
single-source claim. Scythe and Cthulhu: Death May Die also carry the
combat-resolution label but their better-if docs' body claims land on
onboarding/session-pacing or campaign-progression rather than a distinct
resolution-mechanics statement, so they were left out. A dedicated combat-heavy game
(e.g., a wargame or skirmish title) with a `verified` reception doc would
substantially strengthen this pattern; until then, conclusions here should be read as
provisional.
