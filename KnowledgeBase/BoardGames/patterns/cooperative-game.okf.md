---
okf_version: 0.2
type: pattern
mechanics: [cooperative-game]
better_if_labels: [player-interaction, downtime]
confidence: medium
status: draft
---

## Summary

Most games tagged `cooperative-game` in this corpus carry the tag as background metadata; their reception docs discuss deckbuilding, campaigns, or onboarding without ever reviewing the co-op dynamic itself. Where reviewers do engage with cooperation directly, several distinct shapes now emerge: shared handoffs and free-order actions (Heroes of Terrinoth, Slay the Spire) make players feel like a team rather than parallel solitaires; open information and rigid turn structure let one player start dictating everyone else's moves (Heroes of Terrinoth's quarterbacking risk, Mage Knight's "multiplayer solitaire" complaint); deliberately *scarce* communication (The Crew's one-token-per-mission limit) can be the praised design rather than a workaround, directly answering this pattern's earlier call for restricted-communication co-op evidence; and semi-cooperative/hidden-role games (Nemesis, Shadows over Camelot) get their cooperation specifically from mutual suspicion rather than open teamwork — players watch each other's ordinary moves for signs of hidden allegiance. Discussion itself becomes a cost at higher player counts (Spirit Island), and a Crossroads-style "social moment" mechanism can simply under-fire in practice (Dead of Winter: The Long Night). Evidence is thin overall because many tagged records still lack co-op-specific commentary.

## Evidence by game

- dead-of-winter-the-long-night (src-004): Crossroads triggers rarely fired; reviewer "only had one or two of the cards come into play", confidence: medium
- heroes-of-terrinoth (src-005): Reviewer states open information in the co-op permits one player to take over decisions — an alpha-player/quarterbacking risk flagged as a potential issue, confidence: medium
- mage-knight (src-011): Fan critique argues the co-op mode is "not cooperative enough," describing it as "multiplayer solitaire" where players solve parallel puzzles rather than truly interdepend, confidence: medium
- nemesis (src-006, src-008, src-009): hidden objectives create suspicion while survival pressure preserves a reason to cooperate rather than reveal sabotage immediately, confidence: high
- nemesis-lockdown (src-008): eliminated players can only spectate; better if they had a bounded continuing role, confidence: medium
- onirim-second-edition (src-002): two-player cooperation is limited, described as close to two-player solitaire, confidence: high
- shadows-over-camelot (src-006, src-007): both reviewers identify suspicion around ordinary moves, uncertain Traitor presence, and costly accusation as the base game's strongest fun, confidence: high
- slay-the-spire-the-board-game (src-007): Reviewer calls cooperative play "a revelation" and the central reason the physical adaptation justifies itself alongside the video game original, confidence: high
- spirit-island (src-008): Reviewer notes higher player counts slow the game down "due to extensive discussion and coordination," making communication overhead a direct cost of cooperating, confidence: high
- the-crew (src-002, src-003): manual limits communication to one token/player/mission; Board Game Quest identifies this constrained communication as part of the game's tension, confidence: high

## Where it works

- heroes-of-terrinoth (src-005): Cooperation is "materially supported by Aid tokens, enemy handoffs, and complementary hero abilities," giving players concrete, repeated reasons to coordinate rather than merely play in parallel.
- slay-the-spire-the-board-game (src-007): "Cooperative play is a revelation" — reviewer treats the multiplayer co-op mode as the strongest justification for the board-game adaptation existing at all.
- slay-the-spire-the-board-game (src-008, src-003): The rulebook's free-order rule — players may play cards, use potions, or activate abilities in any order — is praised as the mechanism that turns cooperative play into genuine tactical collaboration rather than rigid turn-taking.
- the-crew (src-002, src-003): deliberately scarce communication tokens are credited with producing tension rather than frustration — the restricted-communication case this pattern's earlier coverage gap specifically asked for.
- nemesis (src-006, src-008, src-009) and shadows-over-camelot (src-006, src-007): both hidden-role games get their strongest praised fun from suspicion over ordinary moves — a form of cooperation built on not knowing who to trust rather than open teamwork.

## Where it fails

- heroes-of-terrinoth (src-005): Fully open information invites a single player to dictate the group's choices (alpha-player takeover).
- mage-knight (src-011): The co-op mode is experienced as parallel puzzle-solving rather than true interdependence — "multiplayer solitaire."
- spirit-island (src-008): Extensive discussion and coordination at higher player counts becomes a pacing tax on the group.
- dead-of-winter-the-long-night (src-004): a social-moment mechanism (Crossroads cards) meant to generate interaction simply under-fired in actual play.
- onirim-second-edition (src-002): two-player "cooperative" play reads to the reviewer as closer to parallel solitaire than genuine collaboration.
- nemesis-lockdown (src-008): pure spectating after elimination removes a player from the cooperative experience entirely, with no in-game role to fall back on.

## Coverage gaps

The restricted-communication gap this pattern previously flagged is now filled by The Crew, and the hidden-role/suspicion shape (Nemesis, Shadows over Camelot) is a genuinely new cooperation mechanism distinct from open teamwork or quarterbacking risk. Shadows over Camelot, Dead of Winter: The Long Night, and Nemesis: Lockdown all draw on `needs_followup` reception docs, which is why this doc's status drops to `draft` this pass. The remaining gap is a cooperative game whose reviewers discuss a *solved* quarterbacking problem (a specific rule or role restriction credited with preventing one player from dictating the group), to contrast against Heroes of Terrinoth's and Mage Knight's unresolved versions of that complaint.
