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
footprint (board/box size, card/chip volume, miniature count) and
administrative labor (re-sorting cards to owners, matching module sets, timed
setup/teardown windows). Heavier campaign or highly-produced games
(Gloomhaven, Kingdom Death: Monster, Slay the Spire, Star Wars: Rebellion, War
of the Ring) pay the steepest physical-scale tax; lighter co-op deckbuilders
(Aeon's End, Marvel Champions, Legendary Encounters, Onirim) pay it in
between-session sorting/shuffling labor instead. A third, subtler failure mode
appears in dungeon-crawl games with physical modular boards: laying out the
*entire* board before play (Descent 2E) can leak information the design wants
hidden, so "faster setup" and "preserved mystery" pull in different
directions unless the module itself is revealed incrementally. The clearest
positive counter-examples are campaign games that fold setup into the
teaching structure itself — Gloomhaven: Jaws of the Lion's scenario book and
Descent 2E's publisher-cited "faster setup" claim — rather than solving
physical footprint. Evidence spans several surveyed games but remains shallow
per game — mostly single-line review complaints rather than dense
multi-source consensus.

## Evidence by game

- aeons-end (src-005): A BGG community comment calls the physical setup "muy tedioso" (very tedious), a recurring complaint despite the no-shuffle deck's tactical virtues, confidence: medium
- ark-nova (src-008): The solo review says the game board itself is "just too big for solo play (or in general, arguably)" — footprint that outstrips even multiplayer table need, confidence: high
- descent-journeys-in-the-dark-second-edition (src-006): full-board setup "weakens dungeon mystery" by revealing unexplored areas upfront, confidence: medium
- descent-journeys-in-the-dark-second-edition (src-003): the publisher page explicitly sells "faster setup" and "minimal player downtime" as 2nd-edition improvements over the original, confidence: high
- gloomhaven (src-007): A cooperative-games review clocks 15–20 minutes of setup and 10–15 minutes of teardown per session, on top of a 150–200 hour campaign, confidence: medium
- gloomhaven-jaws-of-the-lion (src-001, src-003): the publisher's scenario-book setup shortcut is called a concrete strength by both the publisher and an independent reviewer, confidence: high
- heat-pedal-to-the-metal (src-007): Shelf Gamer calls the game a "table hog," citing large map boards, player mats, and module mats as physical-footprint friction, confidence: medium
- kingdom-death-monster (src-002): The publisher's own product page frames the game as a 21-pound box played across "many nights," making physical scale part of the pitch rather than a hidden cost, confidence: medium
- legendary-encounters-an-alien-deck-building-game (src-005): Product/component summaries describe a roughly 600-card set with inserts, implying a substantial pre-game sorting burden, confidence: medium
- marvel-champions-the-card-game (src-004): The reviewer flags manual post-game teardown — character-specific cards must be re-sorted by hand or players risk hunting for one hero's Obligations mixed into another's deck, confidence: high
- nemesis (src-005, src-008): nested setup work and a very large table footprint — twenty official setup steps counted, confidence: high
- onirim-second-edition (src-002): extensive shuffling is named as a primary con, with expected premature card wear; better if deck recombination were easier while preserving the short-session advantage, confidence: medium
- slay-the-spire-the-board-game (src-007, src-010): Rolling in the Meep dislikes fiddly cube/effect tracking and a "massive box/table footprint"; Miniature Market snippets independently call setup "a little lengthy" and "a bit heavy", confidence: high
- star-wars-rebellion (src-005, src-006): two boards, 153 miniatures, and an afternoon-scale session demand a large table and heavy component handling, confidence: high
- the-quacks-of-quedlinburg (src-006): A reviewer warns that ingredient books must be matched to the correct box set at setup or the game becomes "wildly unbalanced," turning module selection into a setup-accuracy risk, confidence: medium
- war-of-the-ring (src-002, src-003): intensive setup/teardown; games commonly run longer than two hours, confidence: high

## Where it works

- marvel-champions-the-card-game (src-004): Reviewer praises the turn structure as having "little fiddly management of components or resetting things each turn besides readying and drawing cards" — in-session administration stays low even though the same source flags post-game teardown sorting as a chore. This is the corpus's clearest example that per-turn upkeep and end-of-session teardown are separable design problems, and solving the first doesn't require solving the second.
- gloomhaven-jaws-of-the-lion (src-001, src-003): the scenario book's built-in setup shortcut shows a campaign game solving setup friction through its teaching structure, not through lighter components.
- descent-journeys-in-the-dark-second-edition (src-003): the publisher explicitly markets "faster setup" and "minimal player downtime" as a named 2nd-edition design goal — a rare case where setup speed itself is the pitch, though src-006 shows the same full-board layout trades mystery for that speed.

## Where it fails

- gloomhaven (src-007): concrete 25–35 minute combined setup+teardown tax per session, on top of a very long campaign, confidence: medium
- slay-the-spire-the-board-game (src-007, src-010): fiddly cube/effect tracking plus a "massive box/table footprint" and setup described as "lengthy" and "heavy", confidence: high
- heat-pedal-to-the-metal (src-007): large map boards, player mats, and module mats earn the label "table hog", confidence: medium
- ark-nova (src-008): the board is called too big even outside solo play, confidence: high
- kingdom-death-monster (src-002): a 21-pound box is foregrounded as part of the campaign commitment, confidence: medium
- aeons-end (src-005): setup itself is called tedious in community comments, confidence: medium
- legendary-encounters-an-alien-deck-building-game (src-005): a ~600-card set with inserts implies heavy sorting overhead, confidence: medium
- marvel-champions-the-card-game (src-004): post-game teardown requires manually re-sorting character-specific cards back to their owners, confidence: high
- the-quacks-of-quedlinburg (src-006): mismatched ingredient-book sets at setup can silently unbalance the game, confidence: medium
- nemesis (src-005, src-008): twenty setup steps before the first decision point, confidence: high
- onirim-second-edition (src-002): extensive shuffling drives both session friction and premature card wear, confidence: medium
- star-wars-rebellion (src-005, src-006): two full boards and 153 miniatures push setup into true table-hog territory, confidence: high
- war-of-the-ring (src-002, src-003): setup/teardown overhead is a named reason sessions commonly exceed two hours, confidence: high
- descent-journeys-in-the-dark-second-edition (src-006): laying out the full board before play reveals unexplored dungeon areas, undercutting the mystery the scenario design otherwise builds, confidence: medium

## Coverage gaps

Evidence is no longer complaint-only: Gloomhaven: Jaws of the Lion and Descent 2E both supply publisher-backed, reviewer-corroborated examples of setup friction being designed down rather than just named. The open question those two raise — whether a faster physical setup can coexist with preserved board/scenario mystery — is itself a good WISHLIST candidate: a dungeon-crawl game whose reviewers specifically praise *incremental* board reveal (rather than full pre-layout) as solving both problems at once.
