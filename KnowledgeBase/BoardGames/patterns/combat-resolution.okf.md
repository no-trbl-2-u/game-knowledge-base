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
axis reviewers flag as needing clearer at-the-table communication. Arydia adds
a third, related shape this pass: combat resolution driven by a hidden-ish
system state (Threat levels and AI cards) that a reviewer wants kept visible
and auditable rather than tracked only by the game. All three games suggest
the same shape of problem — resolution mechanics that are core to the game's
appeal are also the primary source of "better if" requests, and the fix is
consistently visibility/legibility rather than removing the risk.

## Evidence by game

- arydia-the-paths-we-dare-tread (src-005): foe behavior depends on Threat levels and AI cards, supporting a call to keep threat changes visible and auditable at the table rather than tracked opaquely, confidence: medium
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

- arydia-the-paths-we-dare-tread (src-005): Threat-driven foe behavior is only lightly sourced (single review, medium confidence) but names visibility of that state as the specific gap, not the threat system itself.
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

Current support for this label remains narrow, and both Kingdom Death: Monster's
and Arydia's reception docs are still `needs_followup` with low-to-medium-confidence,
partly inference-heavy claims. Cthulhu: Death May Die carries the `combat-resolution`
label in frontmatter this pass but its body claims are about turn sequencing and
progression tracking, not combat resolution specifically, so it was excluded. A
dedicated combat-heavy game (e.g., a wargame or skirmish title) with a
`verified` reception doc would substantially strengthen this pattern; until
then, conclusions here should be read as provisional.
