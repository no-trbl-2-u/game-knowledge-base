---
okf_version: 0.2
type: pattern
mechanics: [cooperative-game]
better_if_labels: [player-interaction, downtime]
confidence: medium
status: draft
---

## Summary

Most games tagged `cooperative-game` in this corpus carry the tag as background metadata; their reception docs discuss deckbuilding, campaigns, or onboarding without ever reviewing the co-op dynamic itself. Where reviewers do engage with cooperation directly, the pattern is consistent: shared handoffs and free-order actions (Heroes of Terrinoth, Slay the Spire) are what make players feel like a team rather than parallel solitaires, while open information and rigid turn structure are what let one player start dictating everyone else's moves (Heroes of Terrinoth's quarterbacking risk, Mage Knight's "multiplayer solitaire" complaint). Discussion itself becomes a cost at higher player counts (Spirit Island). The Crew now supplies the restricted-communication co-op evidence this pattern previously lacked: a hard-limited single communication token per player per mission is the design's stated source of tension, the inverse lesson from the open-information alpha-player risk seen elsewhere. Onirim's two-player mode and Forgotten Waters' bounded-personal-incentive structure both show a further failure mode — a "cooperative" label that reviewers say doesn't fully deliver shared decision-making in practice. Evidence is thin overall because many tagged records still lack co-op-specific commentary, and Forgotten Waters' contribution rests on a needs_followup-status doc.

## Evidence by game

- heroes-of-terrinoth (src-005): Reviewer states open information in the co-op permits one player to take over decisions — an alpha-player/quarterbacking risk flagged as a potential issue, confidence: medium
- mage-knight (src-011): Fan critique argues the co-op mode is "not cooperative enough," describing it as "multiplayer solitaire" where players solve parallel puzzles rather than truly interdepend, confidence: medium
- slay-the-spire-the-board-game (src-007): Reviewer calls cooperative play "a revelation" and the central reason the physical adaptation justifies itself alongside the video game original, confidence: high
- spirit-island (src-008): Reviewer notes higher player counts slow the game down "due to extensive discussion and coordination," making communication overhead a direct cost of cooperating, confidence: high
- the-crew (src-002, src-003): the official manual limits normal communication to one token per player per mission, and Board Game Quest identifies that constrained communication as part of the game's tension — the corpus's first restricted-communication co-op design, and the inverse of the open-information quarterbacking risk seen in Heroes of Terrinoth and Mage Knight, confidence: high
- onirim-second-edition (src-002): the reviewer says the two-player mode has "little cooperation" and characterizes it as essentially two-player solitaire, despite the game's cooperative-game tag, confidence: medium
- forgotten-waters (src-001, src-003, src-012): the rulebook combines shared catastrophic losses with individual constellation qualification and personal endings; a reviewer says the resulting selfish incentives "keep play from feeling fully cooperative," confidence: high (source doc status: needs_followup)

## Where it works

- heroes-of-terrinoth (src-005): Cooperation is "materially supported by Aid tokens, enemy handoffs, and complementary hero abilities," giving players concrete, repeated reasons to coordinate rather than merely play in parallel.
- slay-the-spire-the-board-game (src-007): "Cooperative play is a revelation" — reviewer treats the multiplayer co-op mode as the strongest justification for the board-game adaptation existing at all.
- slay-the-spire-the-board-game (src-008, src-003): The rulebook's free-order rule — players may play cards, use potions, or activate abilities in any order — is praised as the mechanism that turns cooperative play into genuine tactical collaboration rather than rigid turn-taking.
- the-crew (src-002, src-003): a hard-limited communication token, rather than open table talk or full information, is credited as the source of the game's tension — proof that restricting information can produce engaged cooperation just as effectively as sharing it fully.

## Where it fails

- heroes-of-terrinoth (src-005): Fully open information invites a single player to dictate the group's choices (alpha-player takeover).
- mage-knight (src-011): The co-op mode is experienced as parallel puzzle-solving rather than true interdependence — "multiplayer solitaire."
- spirit-island (src-008): Extensive discussion and coordination at higher player counts becomes a pacing tax on the group.
- onirim-second-edition (src-002): the two-player mode is functionally solitaire despite carrying the cooperative-game tag — the label promises more shared decision-making than the reviewer found in practice.
- forgotten-waters (src-012): individual endings and bounded personal incentives are reported to undercut the feeling of full cooperation even where the rules impose shared losses (source doc status: needs_followup).

## Coverage gaps

The reception docs with genuine co-op-dynamics commentary are heroes-of-terrinoth, mage-knight, slay-the-spire-the-board-game, spirit-island, the-crew, onirim-second-edition, and forgotten-waters. Other tagged records presently discuss deckbuilding, campaign structure, or onboarding rather than cooperation itself. The Crew resolves the restricted-communication gap flagged at last pass; the next-most-useful addition would be a game whose reviews discuss hidden-information co-op design specifically (distinct from restricted communication), since the corpus's hidden-information evidence currently sits in semi-cooperative or hidden-traitor designs rather than fully cooperative ones.
