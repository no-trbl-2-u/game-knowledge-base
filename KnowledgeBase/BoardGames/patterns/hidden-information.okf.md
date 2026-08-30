---
okf_version: 0.2
type: pattern
mechanics: [hidden-information]
better_if_labels: [player-interaction]
confidence: medium
status: draft
---

## Summary

`hidden-information` entered the corpus this pass across nine games, mostly the same
horror/survival and semi-cooperative dossiers that introduced `semi-cooperative-game`.
Five games yield a genuine, sourced claim about what stays hidden and why it matters:
a communication token (The Crew), a possible Traitor (Shadows over Camelot), secret
individual goals (Nemesis, Nemesis: Lockdown), or secret objective cards layered onto
shared crisis decks (Dead of Winter: A Crossroads Game). Across all five, reviewers
treat withheld information as the source of the game's best moments, not friction to
be designed away — the recurring design lesson is to protect the uncertainty rather
than resolve it, and to calibrate expectations so hidden goals read as narrative
tension rather than unfair surprise. This is the inverse lesson from
`cooperative-game.okf.md`'s open-information quarterbacking risk: full information
sharing and no information sharing both have failure modes, and this pattern's
evidence sits at the "some information withheld, on purpose" end of that spectrum.
Three of the five contributing reception docs (Shadows over Camelot, Nemesis:
Lockdown, Dead of Winter: A Crossroads Game) are still `status: needs_followup`.

## Evidence by game

- the-crew (src-002, src-003): the official manual limits normal communication to one
  token per player per mission, and Board Game Quest identifies that constrained
  communication (about players' otherwise-hidden hands) as part of the game's
  tension, confidence: high
- shadows-over-camelot (src-006, src-007): both reviewers identify suspicion around
  ordinary moves — driven by uncertain Traitor presence and imperfect communication —
  as the base game's strongest fun; Vasel and Quinns independently name this over the
  game's functional quest mechanics, confidence: high (source doc status:
  needs_followup)
- nemesis (src-006, src-008, src-009): reviews repeatedly identify hidden individual
  goals, not a conventional revealed-traitor team split, as the actual tension source;
  cooperation often remains rational even under a hostile hidden agenda, confidence:
  high
- nemesis-lockdown (src-001): standard play retains secret individual Personal and
  Corporate objectives alongside shared threats, with a separate fully-cooperative
  mode available for tables that want to remove the hidden-goal layer, confidence:
  high (source doc status: needs_followup)
- dead-of-winter-a-crossroads-game (src-001): the base game is governed by main and
  secret objectives alongside shared survivor, item, crisis, and Crossroads cards,
  confidence: high (source doc status: needs_followup)

## Where it works

- the-crew (src-002, src-003): a hard-limited communication token, rather than open
  table talk or fully open hands, is credited as the source of the game's tension —
  the clearest "withheld information as designed feature" case in the corpus.
- shadows-over-camelot (src-006, src-007): two independent reviewers, years apart,
  converge on uncertain Traitor presence as the base game's strongest draw, ahead of
  its quest mechanics.
- nemesis (src-006, src-008, src-009): hidden individual goals are credited with
  producing the game's best emergent stories, the same variance that also produces
  criticized "domino" outcomes elsewhere in this corpus's `randomness.okf.md`.

## Where it fails

- nemesis (src-006, src-008, src-009): the corpus's own randomness pattern shows the
  flip side — the same hidden-information-driven chaos that produces good stories is
  also criticized as "overwhelming" when a table isn't told to expect narrative risk
  rather than tactical control.
- nemesis-lockdown (src-008, via rules-ambiguity.okf.md): a dense, information-heavy
  table (partly a byproduct of tracking secret objectives alongside shared state) is
  reported as slow to navigate at the rulebook level, an indirect administrative cost
  of the hidden-information layer.

## Coverage gaps

Battlestar Galactica, Betrayal Legacy, Bloodborne: The Card Game, Dead of Winter: The
Long Night, The Thing: The Boardgame, and Unfathomable all carry the
`hidden-information` tag but did not yield a distinct, sourced claim about what stays
hidden or why in the docs read for this pass — three of them (Battlestar Galactica,
The Thing, Unfathomable) have no better-if content at all yet. Three of the five
contributing docs here are still `needs_followup`, so this pattern's status is `draft`
pending review. The corpus would benefit from a game whose reviewers discuss hidden
information within a *fully* cooperative structure (no secret individual victory
condition at all) to test whether this pattern's "protect the uncertainty" lesson
holds outside semi-cooperative and restricted-communication designs specifically.
