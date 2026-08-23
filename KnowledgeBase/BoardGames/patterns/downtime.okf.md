---
okf_version: 0.2
type: pattern
mechanics: [simultaneous-action-selection]
better_if_labels: [downtime]
confidence: medium
status: verified
---

## Summary

Downtime friction shows up in three flavors across the corpus: (1) turn/round
length that scales badly with player count (Ark Nova, Mage Knight, Spirit
Island, and now Elder Sign all get noticeably slower at higher counts —
Elder Sign's two reviewers independently call its printed 1-8 player range
unrealistic), (2) elimination-driven downtime, where a removed player has
nothing to do for the rest of the session (Nemesis, Nemesis: Lockdown), and
(3) structural fixes reviewers actually praise — solo/small-group play that
sidesteps waiting entirely, and free/simultaneous action order that lets
players act without a rigid queue (Mage Knight's solo mode, Slay the Spire's
any-order card/potion/ability play). Only a subset of the games in scope surfaced
usable downtime-specific evidence; several games carry the `downtime` label
in their frontmatter without a substantiated claim in the body text, so
this pattern's coverage is thinner than the label distribution alone would
suggest.

## Evidence by game

- ark-nova (src-007): Board Game Quest explicitly declines to play Ark Nova at four players "because it would take too long," tying the downtime complaint directly to player count rather than turn structure, confidence: high
- elder-sign (src-002, src-004): both reviewers treat the rulebook's printed 1-8 player range as unrealistic because non-active players have "almost nothing... to do," with one calling it "a particular problem when there are seven other players," confidence: high
- forgotten-waters (src-012): reviewer says some narrated passages run a minute or more for a small payoff and suggests the campaign could be cut by 30-90 minutes, confidence: high
- mage-knight (src-009): There Will Be Games notes "every round has the potential to take a while, since every move invites analysis," but adds that the solo version largely escapes this "without a lot of the downtime" other players create, confidence: high
- nemesis (src-006, src-007): reviews pair frequent, punishing character death with long sessions and downtime concerns, supporting a pre-selected elimination-mitigation approach (optional Intruder controller, cooperative revive, or an explicit spectating agreement), confidence: medium
- nemesis-lockdown (src-008): reviewer reports ejected/eliminated players "can only spectate," with no bounded continuing role to shorten their wait, confidence: medium
- slay-the-spire-the-board-game (src-008, src-003): coopgestalt praises the rulebook's free-order play (cards/potions/abilities in any order) as reducing waiting, while the BGG rulebook-file source notes v2.30 removed the optional sequential-turn variant, reinforcing free order as the intended design, confidence: medium
- spirit-island (src-008): Punchboard calls Spirit Island "fantastic for solo players and small groups" but flags that "higher player counts can slow the game down due to extensive discussion and coordination," confidence: high
- tainted-grail-the-fall-of-avalon (src-003): community review metadata labels downtime high, supporting a compact decision summary to reduce table delay; single community-thread evidence only, confidence: medium

## Where it works

- mage-knight (src-009): solo/single-player mode is called out as avoiding "a lot of the downtime" that multiplayer rounds generate, an explicit praised mitigation via mode choice rather than turn-structure redesign.
- slay-the-spire-the-board-game (src-008): free/simultaneous action order (any player may play cards, use potions, or activate abilities in any sequence) is praised as a design choice, and the publisher's own rules history (src-003) shows the sequential-turn alternative was cut in a later rulebook revision — a signal the free-order approach was the better-received one.

## Where it fails

- ark-nova (src-007): four-player games are called out as too long to be worth playing, a direct downtime-driven player-count ceiling.
- elder-sign (src-002, src-004): downtime is the single most consistently reported friction point across both reviewers, and both independently reject the box's stated upper player count as unworkable in practice.
- mage-knight (src-009): round length "invites analysis" from every player, producing downtime even outside the four-player extreme.
- nemesis (src-006, src-007) / nemesis-lockdown (src-008): both games in the Nemesis line draw the same specific complaint — a player removed from the game (dead in Nemesis, ejected in Lockdown) has no bounded role and simply spectates for the remainder of the session, a harsher downtime failure mode than slow turns because it removes the player from play entirely.
- spirit-island (src-008): discussion and coordination overhead at higher player counts is named as the specific slowdown mechanism, distinct from raw turn length.
- forgotten-waters (src-012): app-narrated passages are reported as running long relative to their mechanical payoff.

## Coverage gaps

Gloomhaven, Root, and Oathsworn: Into the Deepwood all carry `downtime` in
their frontmatter `better_if_labels` but their current better-if/reviews
docs contain no substantiated downtime-specific claim (Oathsworn's doc
explicitly flags this: sources don't establish measured downtime, so it
should not be treated as confirmed). Star Wars: Imperial Assault and Nemesis:
Lockdown's own randomness claim also carry the `downtime` label in frontmatter
without a distinct downtime-specific claim in the body text this pass. The
elimination-downtime pairing (Nemesis / Nemesis: Lockdown) is new and thin —
two games from the same publisher and shared design lineage — so it should
not yet be read as a claim about semi-cooperative elimination games generally;
a third, unrelated elimination-capable design with reviewer commentary on
downtime would substantially strengthen that half of this pattern.
