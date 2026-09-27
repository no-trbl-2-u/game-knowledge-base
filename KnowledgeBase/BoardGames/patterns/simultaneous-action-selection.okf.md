---
okf_version: 0.2
type: pattern
mechanics: [simultaneous-action-selection]
better_if_labels: [downtime]
confidence: medium
status: draft
---

## Summary

`simultaneous-action-selection` carries five tags in the corpus, but only
three games have reviewer commentary that substantively engages the
mechanism itself rather than mentioning it in passing — evidence is thin
relative to tag prevalence. Where it's discussed, the throughline is that
simultaneous selection is valued specifically for what it removes: heat:
pedal to the metal's simultaneous card selection is credited with
eliminating downtime, and bloodborne-the-card-game's simultaneous play is
credited with keeping five-player games brisk while pushing rules complexity
onto reading opponents rather than tracking overhead. The one failure case
cuts the other way: the-quacks-of-quedlinburg's private, simultaneous
brewing is largely solitaire and hard for other players to audit, which
reviewers say creates "many opportunities to cheat." So the same mechanism
that removes downtime by letting players act in parallel also removes the
shared visibility that would otherwise keep players honest — the
pace benefit and the auditability cost appear to be two sides of the same
design choice. One cited game, bloodborne-the-card-game, is
`needs_followup`, so this doc is `draft` rather than `verified` pending its
audit.

## Evidence by game

- heat-pedal-to-the-metal (src-006): "Simultaneous card selection eliminates downtime," confidence: medium
- bloodborne-the-card-game (src-004): "almost all complexity comes from playing opponents rather than the rules overhead," confidence: high (source doc status: needs_followup)
- bloodborne-the-card-game (src-004, src-006): "simultaneous play keeps five-player games brisk," confidence: high (source doc status: needs_followup)
- the-quacks-of-quedlinburg (src-005): private simultaneous brewing creates "many opportunities to cheat" since play is "largely solitaire" and hard to audit, confidence: medium

## Where it works

- heat-pedal-to-the-metal (src-006): simultaneous card selection is credited directly with eliminating downtime between turns.
- bloodborne-the-card-game (src-004, src-006): simultaneous play is credited with keeping five-player games brisk, and with shifting the game's complexity onto reading opponents rather than onto rules overhead (source doc status: needs_followup).

## Where it fails

- the-quacks-of-quedlinburg (src-005): because brewing happens privately and simultaneously, play is "largely solitaire" and difficult for other players to audit, which reviewers say creates "many opportunities to cheat."

## Coverage gaps

Two of the five tagged games have no reviewer commentary that engages the
simultaneous-selection mechanism directly. Bloodborne-the-card-game's claims
carry the pattern's strongest "works" evidence but come from a
needs_followup doc; resolving that status would let this pattern move to
verified. The corpus would also benefit from a game whose reviewers discuss
mitigations for the private-information auditability problem the-quacks-of-quedlinburg
raises (e.g. a reveal-and-verify step), to test whether that cheating risk is
inherent to simultaneous selection or specific to fully private brewing.
