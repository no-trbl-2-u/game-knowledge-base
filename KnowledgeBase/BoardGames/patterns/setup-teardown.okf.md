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
windows). Heavier campaign or highly-produced games (Gloomhaven, Kingdom
Death: Monster, Slay the Spire) pay the steepest physical-scale tax; lighter
co-op deckbuilders (Aeon's End, Marvel Champions, Legendary Encounters) pay
it in between-session sorting labor instead. The clearest positive pattern is
that *in-session* administration and *between-session* teardown are separable
problems — a streamlined turn structure can coexist with a tedious
box-closing ritual. A third flavor now appears in campaign/dungeon designs: setup itself can leak
information the theme depends on (Descent 2E's full-board layout spoiling
dungeon mystery), while a publisher explicitly selling "faster setup" as a
second-edition feature (also Descent 2E) shows setup speed can be a deliberate
design target rather than an incidental cost. Evidence spans several surveyed
games but remains shallow per game — mostly single-line review complaints
rather than a design reviewers praised as having solved the problem outright.

## Evidence by game

- aeons-end (src-005): A BGG community comment calls the physical setup "muy tedioso" (very tedious), a recurring complaint despite the no-shuffle deck's tactical virtues, confidence: medium
- ark-nova (src-008): The solo review says the game board itself is "just too big for solo play (or in general, arguably)" — footprint that outstrips even multiplayer table need, confidence: high
- gloomhaven (src-007): A cooperative-games review clocks 15–20 minutes of setup and 10–15 minutes of teardown per session, on top of a 150–200 hour campaign, confidence: medium
- heat-pedal-to-the-metal (src-007): Shelf Gamer calls the game a "table hog," citing large map boards, player mats, and module mats as physical-footprint friction, confidence: medium
- kingdom-death-monster (src-002): The publisher's own product page frames the game as a 21-pound box played across "many nights," making physical scale part of the pitch rather than a hidden cost, confidence: medium
- legendary-encounters-an-alien-deck-building-game (src-005): Product/component summaries describe a roughly 600-card set with inserts, implying a substantial pre-game sorting burden, confidence: medium
- marvel-champions-the-card-game (src-004): The reviewer flags manual post-game teardown — character-specific cards must be re-sorted by hand or players risk hunting for one hero's Obligations mixed into another's deck, confidence: high
- slay-the-spire-the-board-game (src-007, src-010): Rolling in the Meep dislikes fiddly cube/effect tracking and a "massive box/table footprint"; Miniature Market snippets independently call setup "a little lengthy" and "a bit heavy", confidence: high
- the-quacks-of-quedlinburg (src-006): A reviewer warns that ingredient books must be matched to the correct box set at setup or the game becomes "wildly unbalanced," turning module selection into a setup-accuracy risk, confidence: medium
- descent-journeys-in-the-dark-second-edition (src-006): a review reports that full-board setup weakens dungeon mystery by revealing unexplored areas ahead of time, confidence: medium
- nemesis (src-005): a review describes nested setup work and a very large table footprint, supporting labeled trays or bagged modules keyed to the official sequence, confidence: medium
- onirim-second-edition (src-002): the reviewer names extensive shuffling as a primary con and expects premature card wear, while separately praising the game's 10-15 minute session length, confidence: medium

## Where it works

- marvel-champions-the-card-game (src-004): Reviewer praises the turn structure as having "little fiddly management of components or resetting things each turn besides readying and drawing cards" — in-session administration stays low even though the same source flags post-game teardown sorting as a chore. This is the corpus's clearest example that per-turn upkeep and end-of-session teardown are separable design problems, and solving the first doesn't require solving the second.
- descent-journeys-in-the-dark-second-edition (src-003): the publisher's own product page explicitly sells "faster setup" and "minimal player downtime" as second-edition selling points, treating setup speed as a design goal rather than an afterthought, confidence: high

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
- descent-journeys-in-the-dark-second-edition (src-006): laying out the full board up front trades away the dungeon-crawl mystery the theme promises, confidence: medium
- nemesis (src-005): a large table footprint and nested module setup demand real pre-game organization, confidence: medium
- onirim-second-edition (src-002): frequent full-deck reshuffling creates handling overhead and expected card wear, even in an otherwise short session, confidence: medium

## Coverage gaps

Nearly all evidence here is complaint-only — reviewers name the friction (time, weight, sorting) but rarely credit a design with actually solving it; Marvel Champions and Descent 2E's publisher page are the only counter-examples, and only for in-session upkeep or explicit design intent rather than a reviewer-verified solved problem. The corpus would benefit from an independent review (not just a publisher page) that praises a specific setup/teardown design as solved to give this pattern a genuine reviewer-sourced "where it works" anchor.
