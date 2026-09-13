---
okf_version: 0.2
type: pattern
mechanics: [cooperative-game]
better_if_labels: [player-interaction]
confidence: medium
status: draft
---

## Summary

"Player interaction" friction clusters into three shapes now that direct-conflict and semi-cooperative designs have joined the sample: (1) euro-style games bolt on confrontation as a discrete subsystem (attack cards, denial effects) that reviewers read as tacked-on rather than integrated; (2) cooperative/simultaneous games get their interaction "for free" from shared mechanisms (aid tokens, enemy handoffs, free-order actions), but that same lack of turn-by-turn structure opens quarterbacking or cheating-adjacent private-information risk; and (3) semi-cooperative and direct-conflict designs treat imperfect trust itself as the interaction — reviewers explicitly protect suspicion, bluffing, and costly accusation as the "real" fun and warn against smoothing it into fully transparent cooperation. A design-strength counter-thread also appears: restrictive communication (The Crew's one-token limit) and explicit interference warnings (Bloodborne's onboarding disclosure) are praised for making trust itself the resource, rather than removing friction outright. The lesson holds: interaction works best when it is a structural byproduct of shared stakes or acknowledged distrust, not an add-on module, and any mechanism (simultaneous resolution, private information, take-that combat) needs explicit framing so players opt in with the right expectations.

## Evidence by game

- ark-nova (src-007): Reviewer says the game's attack cards "seem like a tacked on solution for more player interaction" in an otherwise largely parallel euro; confidence: high
- bloodborne-the-card-game (src-004): Ars Technica praises bluffing and betrayal but warns that take-that play will not suit groups uncomfortable with attacking friends' plans, supporting onboarding that states plainly that promises are nonbinding and interference is intentional; confidence: high
- dead-of-winter-the-long-night (src-004): the reviewer reports Crossroads cards "only had one or two... come into play" across sessions, so the triggered-interaction mechanism underdelivered in practice; confidence: medium
- dominion (src-003): Board Game Quest lists lower player interaction as a minor flaw while praising quick turns and accessibility, supporting one more consequential interaction channel without slowing short turns; confidence: medium
- food-chain-magnate (src-004): the independent article praises the game's telegraphed threats and says opponent moves provide clues about the market, supporting preserving visible counterplay rather than opaque catch-up bonuses; confidence: medium
- heroes-of-terrinoth (src-005): Reviewer flags open information in the co-op as a quarterbacking/alpha-player risk; confidence: medium
- mage-knight (src-011): Fan critique argues the competitive mode's interaction is denial-driven — other players taking dice/actions/spells/units or killing targets injects unwanted luck — and calls co-op "not cooperative enough," i.e. "multiplayer solitaire"; confidence: medium
- onirim-second-edition (src-002): the reviewer says the two-player mode has little cooperation and reads as essentially two-player solitaire, supporting one more consequential shared decision; confidence: medium
- scythe (src-001, src-003): the publisher describes direct conflict without elimination, while the reviewer reports factions usually build engines and hold territory rather than fight constantly, supporting explicit framing of what "interaction" means at the table; confidence: medium
- shadows-over-camelot (src-006, src-007): both reviewers identify suspicion around ordinary moves — imperfect communication, uncertain Traitor presence, costly accusation — as the base game's strongest fun; confidence: high
- slay-the-spire-the-board-game (src-008): Reviewer praises the rulebook's free-order rule (players may play cards/use potions/activate abilities in any order) as the mechanism enabling tactical co-op collaboration, but flags that this strength needs explicit teaching; confidence: medium
- the-crew (src-002, src-003): the manual limits normal communication to one token per player per mission, and Board Game Quest identifies the constrained communication as part of the game's tension, not a defect to remove; confidence: high
- the-quacks-of-quedlinburg (src-005): Reviewer notes the simultaneous, largely private bag-drawing phase creates "many opportunities to cheat" in what is otherwise "largely solitaire" play; confidence: medium
- unmatched-battle-of-legends-volume-one (src-003): the independent review reports that four-player play tends to bog down as fighters muddy into and around each other on a shared battlefield; confidence: medium

## Where it works

- heroes-of-terrinoth (src-005): Aid tokens and enemy handoffs give players concrete, repeated reasons to coordinate rather than merely play in parallel.
- ark-nova (src-004): The official FAQ lets groups that dislike interactive Poison/Pilfering-style abilities swap in alternate solo-game effects, formalizing interaction as an optional mode instead of a fixed tax on every table.
- slay-the-spire-the-board-game (src-008): The rulebook's explicit any-order action rule is called out as the feature that makes cooperative play read as genuine collaboration rather than turn-taking.
- shadows-over-camelot (src-006, src-007): imperfect communication and the ever-present possibility of a hidden Traitor are named as the base game's strongest fun, not a flaw to be resolved.
- the-crew (src-002, src-003): a hard one-token-per-mission communication limit is praised for keeping the scarce-information pressure that makes cooperative trick-taking tense.
- food-chain-magnate (src-004): opponent moves are telegraphed enough to read as clues, giving trailing players legible counterplay instead of opaque catch-up.

## Where it fails

- ark-nova (src-007): Attack/interaction cards feel like a bolted-on answer to "the game needs more interaction," not a system-native one.
- heroes-of-terrinoth (src-005): Fully open information invites one player to dictate the group's choices.
- mage-knight (src-011): Competitive-mode interaction is experienced as denial and added variance from other players' actions rather than meaningful engagement; the co-op mode is described as "multiplayer solitaire."
- the-quacks-of-quedlinburg (src-005): Private simultaneous resolution trades away auditability — the same design that avoids downtime also removes the ability to verify others aren't cheating.
- dead-of-winter-the-long-night (src-004): a triggered-interaction mechanism (Crossroads cards) can simply fail to fire often enough to matter across a typical session.
- onirim-second-edition (src-002): a two-player mode built on shared resources and limited communication can still read as parallel solitaire rather than genuine cooperation.
- unmatched-battle-of-legends-volume-one (src-003): shared-battlefield spatial crowding at four players undercuts legibility of who is interacting with whom.
- dominion (src-003): a design praised for quick, accessible turns is explicitly marked down for offering only a thin interaction channel.

## Coverage gaps

The sample now spans cooperative, semi-cooperative, direct-conflict, and largely-parallel euro designs, but three of the newest contributions (bloodborne-the-card-game, dead-of-winter-the-long-night, shadows-over-camelot) come from `needs_followup` source docs, which is why this pattern's status has stepped back to draft pending re-verification. The corpus would benefit from a dedicated negotiation or trading game (as opposed to semi-cooperative suspicion or direct combat) to test whether explicit deal-making produces a different reviewer vocabulary than the trust/interference framing seen here.
