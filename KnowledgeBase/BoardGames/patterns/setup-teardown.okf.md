---
okf_version: 0.2
type: pattern
mechanics: [campaign-game, variable-setup]
better_if_labels: [setup-teardown]
confidence: medium
status: draft
---

## Summary

Setup/teardown friction in this corpus splits into two flavors: raw physical
footprint (board/box size, card/chip volume) and administrative labor
(re-sorting cards to owners, matching module sets, timed setup/teardown
windows, or — newly evidenced this pass — frequent in-session reshuffling in
a game sold on short sessions). Heavier campaign or highly-produced games
(Gloomhaven, Kingdom Death: Monster, Slay the Spire, Nemesis) pay the
steepest physical-scale tax; lighter co-op deckbuilders (Aeon's End, Marvel
Champions, Legendary Encounters) pay it in between-session sorting labor
instead. This pass adds the corpus's first genuine "where it works" anchor
beyond a partial case: Fantasy Flight's own product copy for Descent (2nd
Edition) explicitly sells "faster setup" and "minimal player downtime" as
features, giving reviewers a public commitment to hold the design against —
though a separate review complains that fully revealing the board at setup
undercuts the game's dungeon-exploration mystery, showing that a setup-speed
fix and a discovery-pacing goal can pull in opposite directions. The clearest
positive pattern remains that *in-session* administration and *between-session*
teardown are separable problems — a streamlined turn structure can coexist
with a tedious box-closing ritual.

## Evidence by game

- aeons-end (src-005): A BGG community comment calls the physical setup "muy tedioso" (very tedious), a recurring complaint despite the no-shuffle deck's tactical virtues, confidence: medium
- ark-nova (src-008): The solo review says the game board itself is "just too big for solo play (or in general, arguably)" — footprint that outstrips even multiplayer table need, confidence: high
- descent-journeys-in-the-dark-second-edition (src-003): the publisher's own product page explicitly markets "faster setup" and "minimal player downtime" as features, confidence: high
- descent-journeys-in-the-dark-second-edition (src-006): a reviewer separately reports that full-board setup weakens the intended dungeon-exploration mystery, a tension between fast setup and discovery pacing, confidence: medium
- gloomhaven (src-007): A cooperative-games review clocks 15–20 minutes of setup and 10–15 minutes of teardown per session, on top of a 150–200 hour campaign, confidence: medium
- heat-pedal-to-the-metal (src-007): Shelf Gamer calls the game a "table hog," citing large map boards, player mats, and module mats as physical-footprint friction, confidence: medium
- kingdom-death-monster (src-002): The publisher's own product page frames the game as a 21-pound box played across "many nights," making physical scale part of the pitch rather than a hidden cost, confidence: medium
- legendary-encounters-an-alien-deck-building-game (src-005): Product/component summaries describe a roughly 600-card set with inserts, implying a substantial pre-game sorting burden, confidence: medium
- marvel-champions-the-card-game (src-004): The reviewer flags manual post-game teardown — character-specific cards must be re-sorted by hand or players risk hunting for one hero's Obligations mixed into another's deck, confidence: high
- nemesis (src-005): the review describes nested setup work and a very large table footprint, supporting labeled trays or bagged modules keyed to the official setup sequence, confidence: medium
- onirim-second-edition (src-002): the reviewer names extensive shuffling as a primary con and expects the cards to wear prematurely, in tension with the same review's praise of the game's 10-15 minute filler-length sessions, confidence: medium
- slay-the-spire-the-board-game (src-007, src-010): Rolling in the Meep dislikes fiddly cube/effect tracking and a "massive box/table footprint"; Miniature Market snippets independently call setup "a little lengthy" and "a bit heavy", confidence: high
- the-quacks-of-quedlinburg (src-006): A reviewer warns that ingredient books must be matched to the correct box set at setup or the game becomes "wildly unbalanced," turning module selection into a setup-accuracy risk, confidence: medium

## Where it works

- marvel-champions-the-card-game (src-004): Reviewer praises the turn structure as having "little fiddly management of components or resetting things each turn besides readying and drawing cards" — in-session administration stays low even though the same source flags post-game teardown sorting as a chore. This is the corpus's clearest example that per-turn upkeep and end-of-session teardown are separable design problems, and solving the first doesn't require solving the second.
- descent-journeys-in-the-dark-second-edition (src-003): the publisher markets fast setup and low downtime as explicit design goals — the corpus's first case where a setup-speed commitment appears in the product's own pitch rather than being inferred from reviewer complaint.

## Where it fails

- gloomhaven (src-007): concrete 25–35 minute combined setup+teardown tax per session, on top of a very long campaign, confidence: medium
- slay-the-spire-the-board-game (src-007, src-010): fiddly cube/effect tracking plus a "massive box/table footprint" and setup described as "lengthy" and "heavy", confidence: high
- heat-pedal-to-the-metal (src-007): large map boards, player mats, and module mats earn the label "table hog", confidence: medium
- ark-nova (src-008): the board is called too big even outside solo play, confidence: high
- descent-journeys-in-the-dark-second-edition (src-006): setup that reveals the full board ahead of play undercuts the exploration mystery the design otherwise relies on — fast setup and slow-reveal discovery are in tension here.
- kingdom-death-monster (src-002): a 21-pound box is foregrounded as part of the campaign commitment, confidence: medium
- aeons-end (src-005): setup itself is called tedious in community comments, confidence: medium
- legendary-encounters-an-alien-deck-building-game (src-005): a ~600-card set with inserts implies heavy sorting overhead, confidence: medium
- marvel-champions-the-card-game (src-004): post-game teardown requires manually re-sorting character-specific cards back to their owners, confidence: high
- nemesis (src-005): large modular room-board setup with nested prep work is reported as a table-footprint and handling burden, confidence: medium
- onirim-second-edition (src-002): frequent reshuffling is named as the primary complaint in an otherwise praised short-session filler game, confidence: medium
- the-quacks-of-quedlinburg (src-006): mismatched ingredient-book sets at setup can silently unbalance the game, confidence: medium

## Coverage gaps

Most evidence here is still complaint-only, and Descent's product-page commitment to fast setup is marketing copy, not an independent reviewer's assessment that the goal was actually met — the same game's own review evidence (src-006) suggests the fast-setup goal can conflict with other design intentions. The corpus would still benefit from an independent review explicitly praising a game's setup/teardown design as solved (app-guided setup, snap-in trays, pre-bagged campaign packaging) to give this pattern a "where it works" anchor grounded in player testimony rather than publisher copy.
