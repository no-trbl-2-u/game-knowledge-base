---
okf_version: 0.2
type: pattern
mechanics: [cooperative-game]
better_if_labels: [player-interaction]
confidence: medium
status: verified
---

## Summary

Player-interaction friction clusters into three shapes: (1) euro-style games bolt on confrontation as a discrete subsystem (attack cards, denial effects) that reviewers read as tacked-on rather than integrated; (2) cooperative/simultaneous games get their interaction "for free" from shared mechanisms (aid tokens, enemy handoffs, free-order actions), but that same lack of turn-by-turn structure opens quarterbacking or cheating-adjacent private-information risk; and (3) — newly evidenced this pass, closing a gap flagged in the prior version of this doc — semi-cooperative and hidden-traitor games make imperfect trust the core loop itself, and reviewers treat that as the strongest, not weakest, part of the design (Shadows over Camelot's costly accusations and imperfect communication; Bloodborne's nonbinding promises and intentional take-that betrayal). The lesson: interaction works best either as a structural byproduct of shared stakes (co-op handoffs, shared defeat conditions) or as an explicitly load-bearing trust mechanic that onboarding must warn players about up front — bolted-on interaction modules and interaction that never actually fires (Dead of Winter: The Long Night's rarely-triggered Crossroads cards) are the two failure modes to avoid.

## Evidence by game

- ark-nova (src-007): Reviewer says the game's attack cards "seem like a tacked on solution for more player interaction" in an otherwise largely parallel euro; confidence: high
- bloodborne-the-card-game (src-004): Ars Technica praises the bluffing and betrayal core but warns that take-that play will not suit groups uncomfortable attacking friends' plans, and that onboarding should state plainly that in-game promises are nonbinding; confidence: high
- dead-of-winter-the-long-night (src-004): the reviewer reports Crossroads-card triggers "only had one or two of the cards come into play" across sessions, narrowing the interaction the base design promises; confidence: medium
- dominion (src-003): Board Game Quest lists lower player interaction as a minor flaw against otherwise-praised quick, accessible turns; confidence: medium
- heroes-of-terrinoth (src-005): Reviewer flags open information in the co-op as a quarterbacking/alpha-player risk; confidence: medium
- mage-knight (src-011): Fan critique argues the competitive mode's interaction is denial-driven — other players taking dice/actions/spells/units or killing targets injects unwanted luck — and calls co-op "not cooperative enough," i.e. "multiplayer solitaire"; confidence: medium
- nemesis (src-006, src-008, src-009): reviews repeatedly identify hidden individual goals, rather than a conventional revealed-traitor structure, as the tension source; direct attacks are prohibited by the rules while indirect harm is legal, and cooperation often remains self-preserving even for hostile agendas, confidence: high
- onirim-second-edition (src-002): the reviewer says the two-player mode has little real cooperation, characterizing it as essentially two-player solitaire played in parallel; confidence: medium
- shadows-over-camelot (src-006, src-007): both reviewers identify imperfect communication, uncertain Traitor presence, and the cost of a wrong accusation as the base game's strongest source of fun — suspicion around ordinary moves, not the quest mechanics, carries the design; confidence: high
- slay-the-spire-the-board-game (src-008): Reviewer praises the rulebook's free-order rule (players may play cards/use potions/activate abilities in any order) as the mechanism enabling tactical co-op collaboration, but flags that this strength needs explicit teaching; confidence: medium
- the-quacks-of-quedlinburg (src-005): Reviewer notes the simultaneous, largely private bag-drawing phase creates "many opportunities to cheat" in what is otherwise "largely solitaire" play; confidence: medium

## Where it works

- heroes-of-terrinoth (src-005): Aid tokens and enemy handoffs give players concrete, repeated reasons to coordinate rather than merely play in parallel.
- ark-nova (src-004): The official FAQ lets groups that dislike interactive Poison/Pilfering-style abilities swap in alternate solo-game effects, formalizing interaction as an optional mode instead of a fixed tax on every table.
- bloodborne-the-card-game (src-004): bluffing and betrayal are praised as the game's central appeal, not tolerated as friction — provided the group opts in knowingly.
- nemesis (src-006, src-008, src-009): rules-level calibration (no direct attacks, legal indirect harm, hidden individual goals) is exactly what reviewers credit for sustained tension without the design collapsing into open conflict.
- shadows-over-camelot (src-006, src-007): imperfect communication and the real cost of a false accusation are named as the base game's single strongest design element by both independent reviewers.
- slay-the-spire-the-board-game (src-008): The rulebook's explicit any-order action rule is called out as the feature that makes cooperative play read as genuine collaboration rather than turn-taking.

## Where it fails

- ark-nova (src-007): Attack/interaction cards feel like a bolted-on answer to "the game needs more interaction," not a system-native one.
- dead-of-winter-the-long-night (src-004): a card-driven interaction subsystem that rarely triggers in play reads as promised interaction the design doesn't reliably deliver.
- dominion (src-003): even a widely-praised base game can draw a lower-interaction complaint when turns stay short and mostly parallel.
- heroes-of-terrinoth (src-005): Fully open information invites one player to dictate the group's choices.
- mage-knight (src-011): Competitive-mode interaction is experienced as denial and added variance from other players' actions rather than meaningful engagement; the co-op mode is described as "multiplayer solitaire."
- onirim-second-edition (src-002): a nominally cooperative two-player mode can still read as parallel solitaire when shared decisions are thin.
- the-quacks-of-quedlinburg (src-005): Private simultaneous resolution trades away auditability — the same design that avoids downtime also removes the ability to verify others aren't cheating.

## Coverage gaps

The prior version of this doc lacked any game whose central mechanic was negotiation, trading, or direct player-vs-player conflict; Bloodborne's semi-cooperative bluffing and Shadows over Camelot's hidden-traitor structure now fill that gap and should be read alongside `hidden-information.okf.md` and `semi-cooperative-game.okf.md`, which cover the same two games from the mechanic-design side. Dead-of-winter-a-crossroads-game, descent-journeys-in-the-dark-second-edition, and star-wars-imperial-assault carry `player-interaction` in frontmatter this pass without a body claim distinct from other labels, and were excluded.
