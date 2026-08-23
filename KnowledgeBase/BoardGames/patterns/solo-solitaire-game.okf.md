---
okf_version: 0.2
type: pattern
mechanics: [solo-solitaire-game]
better_if_labels: [solo-coop-automation]
confidence: medium
status: verified
---

## Summary

Across games tagged `solo-solitaire-game`, only a minority carry reception evidence that actually discusses the dedicated solo mode as its own experience (as opposed to the mechanic simply being listed). This pass answers part of the prior version's coverage gap — Elder Sign is a Fantasy Flight-style cooperative title with genuine solo-specific reviewer commentary — and adds a second data point (Onirim) for a different failure shape: a solo mode that "just works" mechanically but plateaus in difficulty faster than repeat play demands. Where reviewers do address solo play directly, the same tension recurs: a strong ruleset "just works" alone because it removes multiplayer downtime and negotiation overhead, but the solo variant itself is judged on whether it introduces its own new problems — swinginess from running a single hand, brain burn from multi-handing, an anticlimactic/procedural endgame, oversized physical footprint for one player, difficulty that doesn't scale with repeat plays, or (for a video-game adaptation) simply feeling like a slower manual reenactment of software logic. Evidence is genuinely thin for most co-op titles in this set; several carry the tag with no solo-specific reviewer commentary at all.

## Evidence by game

- ark-nova (src-008): A dedicated solo reviewer (Stidjen Plays Solo) says the large card-stack output randomness makes it hard to plan ahead in solo play, and separately flags the board as "just too big for solo play (or in general, arguably)." confidence: high
- elder-sign (src-002, src-004): solo play works without a separate bot/automation system, instead relying on lenient death penalties that let a solo player "simply burn through several characters in a single game"; player-count balance is separately reported to skew easier with more investigators rather than harder, confidence: high
- mage-knight (src-009): There Will Be Games credits the solo variant with sidestepping the downtime that afflicts multiplayer turns: "solo version... without a lot of the downtime." confidence: high
- onirim-second-edition (src-002): the base solo game is reported as not very challenging after several plays, with difficulty scaling currently reliant on expansion modules rather than the base rules, confidence: medium
- slay-the-spire-the-board-game (src-007, src-008): Rolling In The Meep judges solo play "admirable but less successful" because it feels too much like a physical substitute for the original video game; coopgestalt's own scoring shows solo (8.5/10) trailing co-op (9/10). confidence: medium
- spirit-island (src-009, src-008): Stidjen Plays Solo reports true solo is swingy, multi-handing causes brain burn, and the endgame feels procedural; Punchboard separately calls the game "fantastic... for solo players and small groups." confidence: high

## Where it works

- mage-knight (src-009): the solo mode is praised specifically because it removes the downtime problem that dogs the multiplayer table — the same brain-burning card-efficiency puzzle without waiting on other players.
- spirit-island (src-008): reviewer calls it a fantastic fit for solo players and small groups, treating low player count (including solo) as the format where the design shines brightest.
- elder-sign (src-002): a lenient, low-punishment death penalty lets a solo player keep experimenting across a single session without a bot opponent — a cheap but functional solo identity.

## Where it fails

- ark-nova (src-008): output randomness from the large card deck undermines forward planning in solo play, and the board's physical footprint is called out as oversized specifically for a single player.
- elder-sign (src-004): more investigators is reported as making the game easier, the inverse of the difficulty curve a scaled solo/multiplayer design would produce.
- onirim-second-edition (src-002): the base solo game's difficulty plateaus after a handful of plays, with no in-box mechanism to raise the challenge beyond that point.
- slay-the-spire-the-board-game (src-007): solo play is the weaker mode in an otherwise praised adaptation, criticized for feeling like a slower manual version of the source video game rather than offering its own tabletop-specific value.
- spirit-island (src-009): true solo (one hand) is swingy, and the multi-handed solo alternative causes brain burn; the same reviewer separately flags a procedural, anticlimactic solo endgame.

## Coverage gaps

Most of the corpus's cooperative/campaign titles carry `solo-solitaire-game` in their mechanics list but have no reviewer commentary specifically about the solo mode: aeons-end, arkham-horror-the-card-game, gi-joe-deck-building-game, heat-pedal-to-the-metal, heroes-of-terrinoth, hoplomachus-remastered, legendary-encounters-an-alien-deck-building-game, and marvel-champions-the-card-game all lack a source that discusses solo scaling, solo scoring, or solo bot/variant logic in the docs read for this pass. too-many-bones is excluded here because its reception docs are still `needs_followup`. Dark Pact, Earthborne Rangers, Horrified, Nemesis, and Nemesis: Lockdown carry `solo-solitaire-game` this pass but their strongest claims land in other patterns (turn-pacing, rules-ambiguity, solo-coop-automation, downtime) rather than the solo-mode-specific angle this doc tracks. A future pass would still benefit from a dedicated solo-focused review for at least one Fantasy Flight LCG-style title (Arkham Horror or Marvel Champions), since both explicitly ship solo rules but the current sources only cover multiplayer/co-op reception.
