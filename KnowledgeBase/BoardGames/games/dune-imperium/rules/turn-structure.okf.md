---
okf_version: 0.2
type: rule_category
game:
  title: "Dune: Imperium"
  slug: "dune-imperium"
  bgg_id: 316554
  publisher: "Dire Wolf"
  year: 2020
  edition: "English base game"
scope: "base game"
mechanics: [deck-building, worker-placement, hand-management, multi-use-cards, force-commitment, race, variable-player-powers]
sources:
  - id: "src-003"
    title: "DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official English rulebook."
confidence: high
status: verified
---

## Summary

Each round has five phases: Round Start, Player Turns, Combat, Makers, Recall. The Player Turns phase alternates between Agent turns and a once-per-round Reveal turn.

## Source-backed facts

- Claim: Round phases are, in order: Round Start, Player Turns, Combat, Makers, Recall.
  Source: src-003
  Evidence: Rulebook p.8 / lines 460-471.
  Confidence: high
- Claim: At Round Start, reveal a Conflict card and each player draws five cards.
  Source: src-003
  Evidence: Rulebook p.8 / lines 476-480.
  Confidence: high
- Claim: During Player Turns, players take one turn at a time clockwise and choose Agent turn or Reveal turn.
  Source: src-003
  Evidence: Rulebook p.8 / lines 482-497.
  Confidence: high
- Claim: After a Reveal turn, that player's turns are skipped for the rest of the phase.
  Source: src-003
  Evidence: Rulebook p.8 / lines 494-497.
  Confidence: high

## Rules / Mechanics

The round creates staggered exit timing. A player may reveal early, preserving remaining Agents unused, but then exits the turn sequence. Others continue Agent placement, gaining information and spaces but exposing themselves to later reveal/combat consequences.

## Player friction

Players accustomed to playing all cards at once must learn the alternating cadence: one Agent card now, reveal leftovers later.

## Praised design

The turn structure controls downtime by making turns small and frequent while still allowing reveal-phase payoff turns.

## Better-if opportunities

- turn pacing: provide visible player-state markers for "still placing Agents" vs "revealed/done".
- onboarding: teach that Agent turns are optional; early Reveal is legal but costly.

## Open questions

- Whether digital implementations should auto-highlight players already revealed to reduce combat/reveal confusion.
