---
okf_version: 0.2
type: pattern
mechanics: [simultaneous-action-selection]
better_if_labels: [downtime]
confidence: medium
status: draft
---

## Summary

Downtime friction shows up in three flavors across the corpus: (1) turn/round
length that scales badly with player count (Ark Nova, Mage Knight, Spirit
Island, Elder Sign, Dune: Imperium Uprising, Terraforming Mars all get
noticeably slower at higher counts — Elder Sign's reviewers go so far as to
call its printed 1-8 player range unrealistic beyond 4-5), (2) many
interconnected decision paths producing analysis-paralysis downtime even at
normal player counts (SETI, Tainted Grail), and (3) elimination or
spectator-mode downtime specific to cooperative/semi-cooperative survival
games, where an early death or defeat leaves a player with nothing to do but
wait (Nemesis, Nemesis: Lockdown, Forgotten Waters' idle narrated
voiceovers). Structural fixes reviewers actually praise remain the same
shape as before — solo/small-group play that sidesteps waiting entirely, and
free/simultaneous action order that lets players act without a rigid queue
(Mage Knight's solo mode, Slay the Spire's any-order card/potion/ability
play) — with the newer evidence suggesting a second fix for elimination
downtime specifically: an optional bounded continuing role (Nemesis's
Intruder) rather than pure spectating. Several games still carry the
`downtime` label in their frontmatter without a substantiated claim in the
body text, so this pattern's coverage is thinner than the label distribution
alone would suggest.

## Evidence by game

- ark-nova (src-007): Board Game Quest explicitly declines to play Ark Nova at four players "because it would take too long," tying the downtime complaint directly to player count rather than turn structure, confidence: high
- dune-imperium-uprising (src-004): review reports "six players create too much downtime", confidence: medium
- elder-sign (src-002, src-004): downtime is the most consistently reported friction; both reviewers treat the printed 1-8 player range as unrealistic ("any number of players beyond 4 or 5 will suffer significant downtime"), confidence: high
- elder-sign (src-002): the design would be better if non-active players had something to resolve during another investigator's adventure; the current mitigation is social, not mechanical, confidence: medium
- forgotten-waters (src-012): minute-long narrated voiceovers often resolve into only small boosts, functioning as idle time, confidence: high
- gaia-project (src-004): described as a strategy/economic title with a long 60-150 minute play window; no quantitative downtime claim is published, confidence: low
- mage-knight (src-009): There Will Be Games notes "every round has the potential to take a while, since every move invites analysis," but adds that the solo version largely escapes this "without a lot of the downtime" other players create, confidence: high
- nemesis (src-006, src-007): length and player elimination are a volatile combination; an early death can leave a long wait unless the optional Intruder role is used, confidence: medium
- nemesis-lockdown (src-008): eliminated players can only spectate; better if they had a bounded continuing role, confidence: medium
- seti-search-for-extraterrestrial-intelligence (src-003, src-004): many interconnected paths plus an explicit analysis-paralysis concern; better if turn-planning support reduced AP without removing meaningful choice, confidence: medium
- slay-the-spire-the-board-game (src-008, src-003): coopgestalt praises the rulebook's free-order play (cards/potions/abilities in any order) as reducing waiting, while the BGG rulebook-file source notes v2.30 removed the optional sequential-turn variant, reinforcing free order as the intended design, confidence: medium
- spirit-island (src-008): Punchboard calls Spirit Island "fantastic for solo players and small groups" but flags that "higher player counts can slow the game down due to extensive discussion and coordination," confidence: high
- tainted-grail-the-fall-of-avalon (src-003): a compact decision summary could reduce table delay, based on review metadata labeling downtime high, confidence: medium
- terraforming-mars (src-003): larger-player-count sessions (especially full five-player games) "can drag," and need stronger anti-downtime support such as a turn-planning aid, confidence: high
- unmatched-battle-of-legends-volume-one (src-003): four-player play "bogs down" as fighters muddy into each other on the battlefield, confidence: medium

## Where it works

- mage-knight (src-009): solo/single-player mode is called out as avoiding "a lot of the downtime" that multiplayer rounds generate, an explicit praised mitigation via mode choice rather than turn-structure redesign.
- slay-the-spire-the-board-game (src-008): free/simultaneous action order (any player may play cards, use potions, or activate abilities in any sequence) is praised as a design choice, and the publisher's own rules history (src-003) shows the sequential-turn alternative was cut in a later rulebook revision — a signal the free-order approach was the better-received one.
- nemesis (src-006, src-007): the optional Intruder role is the corpus's one cited example of a *designed* fix for elimination downtime, as opposed to pure spectating.

## Where it fails

- ark-nova (src-007): four-player games are called out as too long to be worth playing, a direct downtime-driven player-count ceiling.
- mage-knight (src-009): round length "invites analysis" from every player, producing downtime even outside the four-player extreme.
- spirit-island (src-008): discussion and coordination overhead at higher player counts is named as the specific slowdown mechanism, distinct from raw turn length.
- elder-sign (src-002, src-004): the corpus's sharpest player-count-scaling complaint — reviewers treat the box's own printed range as unrealistic past 4-5 players, with no mechanical fix offered for waiting investigators.
- dune-imperium-uprising (src-004) and terraforming-mars (src-003): both report downtime specifically emerging at the higher end of supported player counts (six and five respectively), the same shape as Ark Nova and Elder Sign one tier down in count.
- seti-search-for-extraterrestrial-intelligence (src-003, src-004) and tainted-grail-the-fall-of-avalon (src-003): downtime here comes from decision complexity (many interconnected paths) rather than raw turn count — a distinct mechanism from pure player-count scaling.
- nemesis-lockdown (src-008): pure spectating after elimination is a sharper failure than Nemesis's own optional Intruder-role mitigation.
- forgotten-waters (src-012): narrated content that resolves into only a small mechanical effect functions as idle time for everyone not driving the story beat.

## Coverage gaps

Gloomhaven, Root, and Oathsworn: Into the Deepwood all carry `downtime` in
their frontmatter `better_if_labels` but their current better-if/reviews
docs contain no substantiated downtime-specific claim (Oathsworn's doc
explicitly flags this: sources don't establish measured downtime, so it
should not be treated as confirmed). Several of this pass's new citations
(forgotten-waters, nemesis-lockdown, tainted-grail-the-fall-of-avalon) come
from `needs_followup` reception docs, which is why this doc's status drops
to `draft` this pass. The corpus would still benefit from a high-player-count,
AP-heavy Eurogame or wargame review with an explicit downtime complaint at
its *maximum rather than typical* player count, to test whether the pattern
holds at the extreme.
