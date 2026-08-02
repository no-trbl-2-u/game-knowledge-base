---
okf_version: 0.2
type: pattern
mechanics: [force-commitment, dice-rolling]
better_if_labels: [combat-resolution]
confidence: low
status: draft
---

## Summary

Thin evidence (3 games). Dune: Imperium's hidden simultaneous-commitment combat
draws praise for tension but a matching complaint that the same hiddenness
reads as swinginess/imbalance when a leader's combat strength outpaces
opponents' visibility into it. Kingdom Death: Monster's dice-based combat
resolution is only lightly sourced so far (needs_followup) but points at the
same tension: risk/randomness that defines the game's identity is also the
axis reviewers flag as needing clearer at-the-table communication. Arydia's
threat-driven foe AI adds a third variant of the same shape: a resolution
system praised for readable tactical pressure, with the matching better-if
request being to keep the threat state that drives it visible and auditable.
All three suggest the same pattern — resolution mechanics that are core to
the game's appeal are also the primary source of "better if" requests.

## Evidence by game

- arydia-the-paths-we-dare-tread (src-005): Foe (Mobs and Bosses) behavior is driven by Threat levels and AI cards; the review praises this as readable tactical pressure, while the better-if doc asks that threat changes stay visible and auditable at the table (source doc status: needs_followup), confidence: medium
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

- arydia-the-paths-we-dare-tread (src-005): Threat-driven foe AI cards are explicitly praised as providing readable tactical pressure — the resolution system itself, not just the theme, is credited.
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
- arydia-the-paths-we-dare-tread (src-005): the same Threat/AI-card system that earns praise for readable pressure is flagged as needing better visibility so changes remain auditable at the table (source doc status: needs_followup), confidence: medium.

## Coverage gaps

Only 3 games carry citable evidence for this label, and Kingdom Death: Monster's
reception docs are still `needs_followup` with low-confidence, inference-heavy
claims (arydia's contribution is also from a `needs_followup` doc). cthulhu-death-may-die
carries the `combat-resolution` label in its better-if frontmatter but its body claims
address turn-order teaching and investigator/Elder-One progression tracking rather than
combat resolution specifically, so it was excluded rather than forced in. A dedicated
combat-heavy game (e.g., a wargame or skirmish title) with a `verified` reception doc
would substantially strengthen this pattern; until then, conclusions here should be
read as provisional.
