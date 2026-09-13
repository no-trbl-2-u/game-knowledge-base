---
okf_version: 0.2
type: pattern
mechanics: [simultaneous-action-selection]
better_if_labels: [downtime]
confidence: medium
status: draft
---

## Summary

Downtime friction shows up in three flavors across the corpus: (1)
turn/round length that scales badly with player count (Ark Nova, Mage
Knight, Spirit Island all get noticeably slower at 4 players), (2)
structural fixes reviewers actually praise — solo/small-group play that
sidesteps waiting entirely, and free/simultaneous action order that lets
players act without a rigid queue (Mage Knight's solo mode, Slay the Spire's
any-order card/potion/ability play), and (3) elimination-driven downtime — a
player knocked out or exposed early is left watching rather than playing,
raised independently by two Nemesis-family reviews and one shared-battlefield
crowding complaint (Unmatched). Only a subset of the games in scope surfaced
usable downtime-specific evidence; several games carry the `downtime` label
in their frontmatter without a substantiated claim in the body text, so
this pattern's coverage is thinner than the label distribution alone would
suggest.

## Evidence by game

- ark-nova (src-007): Board Game Quest explicitly declines to play Ark Nova at four players "because it would take too long," tying the downtime complaint directly to player count rather than turn structure, confidence: high
- mage-knight (src-009): There Will Be Games notes "every round has the potential to take a while, since every move invites analysis," but adds that the solo version largely escapes this "without a lot of the downtime" other players create, confidence: high
- nemesis (src-006, src-007): reviews pair frequent, punishing death with long-session and downtime concerns, supporting selecting elimination mitigation (optional Intruder controller, cooperative revive, or agreed spectating) before play, confidence: medium
- nemesis-lockdown (src-008): Jolin reports that ejected players can only spectate, supporting a bounded continuing role for eliminated players, confidence: medium
- slay-the-spire-the-board-game (src-008, src-003): coopgestalt praises the rulebook's free-order play (cards/potions/abilities in any order) as reducing waiting, while the BGG rulebook-file source notes v2.30 removed the optional sequential-turn variant, reinforcing free order as the intended design, confidence: medium
- spirit-island (src-008): Punchboard calls Spirit Island "fantastic for solo players and small groups" but flags that "higher player counts can slow the game down due to extensive discussion and coordination," confidence: high
- tainted-grail-the-fall-of-avalon (src-003): review metadata labels downtime high for the campaign's complexity, supporting a compact decision summary to reduce table delay, confidence: medium
- unmatched-battle-of-legends-volume-one (src-003): the independent review reports that four-player play tends to bog down as fighters muddy into and around each other on a shared battlefield, confidence: medium

## Where it works

- mage-knight (src-009): solo/single-player mode is called out as avoiding "a lot of the downtime" that multiplayer rounds generate, an explicit praised mitigation via mode choice rather than turn-structure redesign.
- slay-the-spire-the-board-game (src-008): free/simultaneous action order (any player may play cards, use potions, or activate abilities in any sequence) is praised as a design choice, and the publisher's own rules history (src-003) shows the sequential-turn alternative was cut in a later rulebook revision — a signal the free-order approach was the better-received one.

## Where it fails

- ark-nova (src-007): four-player games are called out as too long to be worth playing, a direct downtime-driven player-count ceiling.
- mage-knight (src-009): round length "invites analysis" from every player, producing downtime even outside the four-player extreme.
- spirit-island (src-008): discussion and coordination overhead at higher player counts is named as the specific slowdown mechanism, distinct from raw turn length.
- nemesis (src-006, src-007): frequent, punishing elimination compounds with already-long sessions, leaving eliminated players idle for extended stretches.
- nemesis-lockdown (src-008): ejected players have no role beyond spectating for the remainder of the game.
- unmatched-battle-of-legends-volume-one (src-003): shared-battlefield crowding at higher player counts slows down individual turns as fighters interfere with each other's positioning.

## Coverage gaps

Gloomhaven, Root, and Oathsworn: Into the Deepwood all carry `downtime` in
their frontmatter `better_if_labels` but their current better-if/reviews
docs contain no substantiated downtime-specific claim (Oathsworn's doc
explicitly flags this: sources don't establish measured downtime, so it
should not be treated as confirmed). nemesis-lockdown and tainted-grail-the-fall-of-avalon
contribute from `needs_followup` source docs, which is why this pattern's status has
stepped back to draft pending re-verification. The corpus would benefit from a
high-player-count, AP-heavy Eurogame or wargame review with an explicit
downtime complaint to round out the "turn length at scale" side of this
pattern beyond the currently cited cases.
