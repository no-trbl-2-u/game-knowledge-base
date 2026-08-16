---
okf_version: 0.2
type: pattern
mechanics: [simultaneous-action-selection]
better_if_labels: [downtime]
confidence: medium
status: verified
---

## Summary

Downtime friction shows up in three distinct flavors across the corpus: (1)
turn/round length that scales badly with player count (Ark Nova, Mage
Knight, Spirit Island all get noticeably slower at 4 players), (2)
structural fixes reviewers actually praise — solo/small-group play that
sidesteps waiting entirely, and free/simultaneous action order that lets
players act without a rigid queue (Mage Knight's solo mode, Slay the Spire's
any-order card/potion/ability play), and (3) player-elimination downtime — games
where dying mid-session leaves a player spectating rather than waiting through
normal turn order (Nemesis, Nemesis: Lockdown). Only a subset of the games in scope
surfaced usable downtime-specific evidence; several games carry the `downtime` label
in their frontmatter without a substantiated claim in the body text, so
this pattern's coverage is thinner than the label distribution alone would
suggest.

## Evidence by game

- ark-nova (src-007): Board Game Quest explicitly declines to play Ark Nova at four players "because it would take too long," tying the downtime complaint directly to player count rather than turn structure, confidence: high
- mage-knight (src-009): There Will Be Games notes "every round has the potential to take a while, since every move invites analysis," but adds that the solo version largely escapes this "without a lot of the downtime" other players create, confidence: high
- nemesis (src-006, src-007): frequent, punishing character death is paired with long sessions, supporting a call to select elimination mitigation before play (optional Intruder controller, cooperative revive, or explicit agreement that spectating is acceptable), confidence: medium
- nemesis-lockdown (src-008): ejected players can only spectate, supporting a call for eliminated players to have a bounded continuing role, confidence: medium
- slay-the-spire-the-board-game (src-008, src-003): coopgestalt praises the rulebook's free-order play (cards/potions/abilities in any order) as reducing waiting, while the BGG rulebook-file source notes v2.30 removed the optional sequential-turn variant, reinforcing free order as the intended design, confidence: medium
- spirit-island (src-008): Punchboard calls Spirit Island "fantastic for solo players and small groups" but flags that "higher player counts can slow the game down due to extensive discussion and coordination," confidence: high
- tainted-grail-the-fall-of-avalon (src-003): a community quick-review's metadata labels downtime high, supporting (thinly) a call for a compact decision summary to reduce table delay, confidence: medium

## Where it works

- mage-knight (src-009): solo/single-player mode is called out as avoiding "a lot of the downtime" that multiplayer rounds generate, an explicit praised mitigation via mode choice rather than turn-structure redesign.
- slay-the-spire-the-board-game (src-008): free/simultaneous action order (any player may play cards, use potions, or activate abilities in any sequence) is praised as a design choice, and the publisher's own rules history (src-003) shows the sequential-turn alternative was cut in a later rulebook revision — a signal the free-order approach was the better-received one.

## Where it fails

- ark-nova (src-007): four-player games are called out as too long to be worth playing, a direct downtime-driven player-count ceiling.
- mage-knight (src-009): round length "invites analysis" from every player, producing downtime even outside the four-player extreme.
- spirit-island (src-008): discussion and coordination overhead at higher player counts is named as the specific slowdown mechanism, distinct from raw turn length.
- nemesis (src-006, src-007): punishing, frequent death paired with long sessions creates a distinct elimination-driven downtime risk not present in the corpus's earlier turn-length or player-count evidence.
- nemesis-lockdown (src-008): elimination currently means pure spectating with no bounded continuing role.
- tainted-grail-the-fall-of-avalon (src-003): downtime is flagged as high in review metadata, though without quoted reviewer prose to characterize its specific cause.

## Coverage gaps

Gloomhaven, Root, and Oathsworn: Into the Deepwood all carry `downtime` in
their frontmatter `better_if_labels` but their current better-if/reviews
docs contain no substantiated downtime-specific claim (Oathsworn's doc
explicitly flags this: sources don't establish measured downtime, so it
should not be treated as confirmed). The corpus would benefit from a
high-player-count, AP-heavy Eurogame or wargame review with an explicit
downtime complaint to round out the "turn length at scale" side of this
pattern beyond the currently cited cases. Nemesis and Nemesis: Lockdown add a
genuinely new sub-pattern — elimination-driven downtime — that the earlier
evidence set didn't cover at all; Tainted Grail's contribution is the weakest
citation in this table (review metadata only, doc still `needs_followup`) and
should be revisited once a fuller source pass lands.
