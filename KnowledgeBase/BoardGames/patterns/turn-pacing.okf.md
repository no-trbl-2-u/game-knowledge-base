---
okf_version: 0.2
type: pattern
mechanics: [simultaneous-action-selection]
better_if_labels: [turn-pacing]
confidence: medium
status: draft
---

## Summary

Turn-pacing friction in this corpus splits into two distinct failure modes. The first is individual-turn slowness: a single player's turn drags because it demands open-ended analysis (Mage Knight), because bookkeeping (Action counting in Dark Pact) piles up across a long turn, or because it is procedurally required but low-agency (Heroes of Terrinoth's Rest action). The second is aggregate pace-of-play decay: the whole session lengthens as player count rises, through more turns to wait through (Ark Nova, Spirit Island), a flat stretch before a late climax (Heat), or an inconsistently-paced climax phase (Betrayal Legacy's haunt). Onirim shows the positive extreme: a short, quick-teach ruleset that reviewers credit specifically for its 10-15 minute solo sessions. The recurring fix reviewers credit is removing sequential waiting altogether — simultaneous or free-order action resolution (Heat, Slay the Spire) — or offering a solo/lighter mode that strips the downtime without cutting the decision space (Mage Knight). Evidence is real but thin per game; most claims are single-review observations rather than corroborated across sources.

## Evidence by game

- ark-nova (src-007): Board Game Quest says they "won't touch a four player game" because it "would take too long" — pace-of-play degrades as player count rises, confidence: high
- betrayal-legacy (src-005): haunt phases are reported to run "thirty minutes beyond what it should" or resolve "before a single full round passes," an inconsistent-pacing complaint at the climax rather than mid-game (source doc status: needs_followup), confidence: medium
- dark-pact (src-007, src-008, src-010): reviews describe long turns from Action counting and effect-chain sequencing, with some elaborate combinations feeling less rewarding than their execution time, confidence: medium
- onirim-second-edition (src-002): the reviewer credits quick 10-15 minute solo sessions and an easy teach as the game's clearest strength, praising fast turn-to-turn pace directly, confidence: high
- heat-pedal-to-the-metal (src-006): Co-op Board Games credits simultaneous card selection with eliminating downtime, confidence: medium
- heat-pedal-to-the-metal (src-007): Shelf Gamer found the race "relatively flat until the climactic final round," a mid-game pacing complaint, confidence: medium
- heroes-of-terrinoth (src-005): a four-player Rest round is described as a turn players would rather not spend their activation on — a low-agency, maintenance-feeling individual turn, confidence: high
- mage-knight (src-009): "Every round has the potential to take a while, since every move invites analysis" — direct analysis-paralysis turn-length complaint; the same source notes the solo variant avoids "a lot of the downtime," confidence: high
- slay-the-spire-the-board-game (src-008, src-003): coopgestalt praises the rulebook's free-order action resolution (play cards/potions/abilities in any order) as a pacing strength, though the BGG rulebook file (src-003) confirms a later version (v2.30) cut the optional sequential-turn alternative, confidence: medium
- spirit-island (src-006, src-008): "at 4 player it can take a very long time to play" (src-006), and "higher player counts can slow the game down due to extensive discussion and coordination" (src-008) — pace-of-play degrades with table size, confidence: high

## Where it works

- heat-pedal-to-the-metal (src-006): simultaneous card selection is explicitly credited with eliminating downtime between turns.
- slay-the-spire-the-board-game (src-008): free-order action resolution (no fixed turn sequence) is praised as a rulebook strength for cooperative pacing.
- mage-knight (src-009): the dedicated solo variant is called out as preserving the game's decision crunch "without a lot of the downtime" that the multiplayer round-based structure creates.
- onirim-second-edition (src-002): a quick 10-15 minute solo session and an easy teach are named as the game's standout strengths, the corpus's clearest example of turn-pacing praised as a positive design goal rather than a problem avoided.

## Where it fails

- mage-knight (src-009): open-ended analysis on every move makes individual rounds slow — the sharpest single-turn-length complaint in the corpus.
- heroes-of-terrinoth (src-005): the Rest action is a mechanically necessary but low-agency turn, felt most acutely at four players.
- ark-nova (src-007): length at four players is severe enough that the reviewer refuses that player count outright.
- spirit-island (src-006, src-008): four-player sessions run long, driven by both raw turn count and extended discussion/coordination time.
- heat-pedal-to-the-metal (src-007): pacing can go flat mid-race, with tension concentrated only at the finish.
- dark-pact (src-007, src-008, src-010): Action counting and long effect chains create sequencing overhead within a single turn, and some combinations are described as taking longer to execute than they're worth.
- betrayal-legacy (src-005): the haunt (the game's climax phase) runs inconsistently — sometimes far too long, sometimes resolved before a full round completes (source doc status: needs_followup).

## Coverage gaps

Most cited evidence describes aggregate session-length pacing (more players, more turns) rather than pure single-turn duration; Mage Knight, Heroes of Terrinoth, and Dark Pact give the clearest individual-turn-length complaints, while Onirim is the clearest positive counter-example. betrayal-legacy's contribution is from a `needs_followup` reception doc, which is why this pattern's `status` stays `draft` rather than `verified`. A lighter, faster-playing game with turn-pacing commentary beyond Onirim would help separate "this turn itself is slow" from "this game has too many turns" as distinct design problems.
