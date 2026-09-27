---
okf_version: 0.2
type: pattern
mechanics: [simultaneous-action-selection]
better_if_labels: [downtime]
confidence: medium
status: draft
---

## Summary

Downtime friction traces to four related mechanisms across the corpus: turn or
round length that scales badly with player count (Ark Nova, Mage Knight,
Spirit Island, and Unmatched all slow down at higher counts); scripted or
narrative content that pads runtime without proportional payoff (Forgotten
Waters' minute-long voiceovers resolving into small boosts); player
elimination that strands people as spectators rather than participants
(Nemesis: Lockdown); and per-turn decision complexity that isn't legible
enough to resolve quickly (Tainted Grail's want for a compact decision
summary). The structural fixes reviewers actually praise are solo/small-group
play that sidesteps waiting entirely, free/simultaneous action order that
lets players act without a rigid queue, and — where elimination is
unavoidable — giving removed players a bounded continuing role rather than
pure spectating. Only a subset of the games in scope surfaced usable
downtime-specific evidence; several games carry the `downtime` label in
their frontmatter without a substantiated claim in the body text, so this
pattern's coverage is thinner than the label distribution alone would
suggest.

## Evidence by game

- ark-nova (src-007): Board Game Quest explicitly declines to play Ark Nova at four players "because it would take too long," tying the downtime complaint directly to player count rather than turn structure, confidence: high
- mage-knight (src-009): There Will Be Games notes "every round has the potential to take a while, since every move invites analysis," but adds that the solo version largely escapes this "without a lot of the downtime" other players create, confidence: high
- slay-the-spire-the-board-game (src-008, src-003): coopgestalt praises the rulebook's free-order play (cards/potions/abilities in any order) as reducing waiting, while the BGG rulebook-file source notes v2.30 removed the optional sequential-turn variant, reinforcing free order as the intended design, confidence: medium
- spirit-island (src-008): Punchboard calls Spirit Island "fantastic for solo players and small groups" but flags that "higher player counts can slow the game down due to extensive discussion and coordination," confidence: high
- forgotten-waters (src-012): scripted "minute-long voiceovers end in small boosts," disproportionate to their runtime cost, and the reviewer suggests cutting 30-90 minutes of overall runtime, confidence: high (source doc status: needs_followup)
- nemesis-lockdown (src-008): eliminated players are left with "nothing but spectating," with a better-if request for "a bounded continuing role" instead of pure elimination, confidence: medium (source doc status: needs_followup)
- tainted-grail-the-fall-of-avalon (src-003): better-if suggests "a compact decision summary could reduce table delay," confidence: medium (source doc status: needs_followup)
- unmatched-battle-of-legends-volume-one (src-003): "at four players the game tends to bog down, with fighters muddying into and around each other," confidence: medium

## Where it works

- mage-knight (src-009): solo/single-player mode is called out as avoiding "a lot of the downtime" that multiplayer rounds generate, an explicit praised mitigation via mode choice rather than turn-structure redesign.
- slay-the-spire-the-board-game (src-008): free/simultaneous action order (any player may play cards, use potions, or activate abilities in any sequence) is praised as a design choice, and the publisher's own rules history (src-003) shows the sequential-turn alternative was cut in a later rulebook revision — a signal the free-order approach was the better-received one.

## Where it fails

- ark-nova (src-007): four-player games are called out as too long to be worth playing, a direct downtime-driven player-count ceiling.
- mage-knight (src-009): round length "invites analysis" from every player, producing downtime even outside the four-player extreme.
- spirit-island (src-008): discussion and coordination overhead at higher player counts is named as the specific slowdown mechanism, distinct from raw turn length.
- nemesis-lockdown (src-008): elimination leaves players with "nothing but spectating," a downtime mechanism distinct from turn length or analysis paralysis.
- forgotten-waters (src-012): scripted voiceover content pads runtime by 30-90 minutes for "small boosts," a narrative-pacing source of downtime rather than a turn-structure one.
- unmatched-battle-of-legends-volume-one (src-003): at four players, fighters "muddying into and around each other" slows the game, echoing the player-count scaling seen in Ark Nova and Spirit Island in a head-to-head skirmish design.
- tainted-grail-the-fall-of-avalon (src-003): the better-if request for "a compact decision summary" implies current per-turn decisions aren't legible enough to resolve quickly, a complexity-driven table delay.

## Coverage gaps

Gloomhaven, Root, and Oathsworn: Into the Deepwood all carry `downtime` in
their frontmatter `better_if_labels` but their current better-if/reviews
docs contain no substantiated downtime-specific claim (Oathsworn's doc
explicitly flags this: sources don't establish measured downtime, so it
should not be treated as confirmed). The newest and most severe failure
modes — Nemesis: Lockdown's elimination-driven spectating and Forgotten
Waters' voiceover-driven runtime bloat — are both sourced from
needs_followup docs, and neither game's better-if request (a bounded
continuing role; a compact decision summary, from Tainted Grail) has a
matching praised, shipped fix elsewhere in the corpus. The pattern still
lacks a verified-status example of an implemented (not merely requested)
downtime fix for elimination or high-complexity turns.
