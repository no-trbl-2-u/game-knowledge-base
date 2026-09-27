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
footprint (board/box size, card/chip volume, module counts) and
administrative labor (re-sorting cards to owners, matching module sets,
stepping through a long official setup sequence, timed setup/teardown
windows). Heavier campaign or highly-produced games (Gloomhaven, Kingdom
Death: Monster, Slay the Spire, Nemesis) pay the steepest physical-scale and
step-count tax — Nemesis's reviewer counts twenty official setup steps across
a large table footprint — while lighter co-op deckbuilders and solo card
games (Aeon's End, Marvel Champions, Legendary Encounters, Onirim) pay it in
between-session sorting or reshuffling labor instead. Some designs trade one
friction for another rather than eliminating it: Descent's second edition
markets faster physical setup and less downtime, but laying out the full
board from the start sacrifices the setup-preserved mystery older dungeon
crawlers use. The clearest positive pattern remains that *in-session*
administration and *between-session* teardown are separable problems — a
streamlined turn structure can coexist with a tedious box-closing ritual.
Evidence spans several surveyed games but remains shallow per game — mostly
single-line review complaints rather than a design reviewers independently
praised as having solved the problem outright.

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
- descent-journeys-in-the-dark-second-edition (src-003, src-006): the publisher markets "faster setup" and "minimal player downtime," though full board setup from the start gives "no real feeling of mystery" — a setup-preserved-information trade-off, confidence: medium
- nemesis (src-005, src-008): a reviewer counts "twenty official setup steps" across a large table footprint, with better-if asking for "labeled trays or bagged modules keyed to the official sequence", confidence: medium
- onirim-second-edition (src-002): "So. Much. Shuffling!" predicts premature card wear, with better-if asking that reshuffling create "less handling and card wear", confidence: medium
- shadows-over-camelot (src-006, src-007): reviewers explicitly note there's "no bounded measurement" given for setup/teardown time, confidence: high
- star-wars-imperial-assault (src-003, src-004): between-mission administration friction "should preserve narrative continuity" without needing setup overhead each session, confidence: medium

## Where it works

- marvel-champions-the-card-game (src-004): Reviewer praises the turn structure as having "little fiddly management of components or resetting things each turn besides readying and drawing cards" — in-session administration stays low even though the same source flags post-game teardown sorting as a chore. This is the corpus's clearest example that per-turn upkeep and end-of-session teardown are separable design problems, and solving the first doesn't require solving the second.
- descent-journeys-in-the-dark-second-edition (src-003): the publisher markets "faster setup" and "minimal player downtime" as design goals for this edition, though this is a design-intent claim rather than independent reviewer testimony, and the same game trades it against lost setup-preserved mystery (see Where it fails).

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
- descent-journeys-in-the-dark-second-edition (src-006): despite the faster physical setup, laying out the full board from the start gives "no real feeling of mystery" — speed was bought by giving up setup-preserved information, confidence: medium
- nemesis (src-005, src-008): a reviewer counts "twenty official setup steps" across a large table footprint, with better-if asking for "labeled trays or bagged modules keyed to the official sequence", confidence: medium
- onirim-second-edition (src-002): "So. Much. Shuffling!" — repeated reshuffling is expected to accelerate card wear, with better-if asking for a process that produces "less handling and card wear", confidence: medium

## Coverage gaps

Most evidence remains complaint-only. The strongest "works" claim now on record — Descent's marketed "faster setup, minimal downtime" — is a publisher framing rather than independent reviewer testimony, and the same game trades it against lost setup-preserved mystery; Marvel Champions still stands alone as an independent reviewer crediting low in-session upkeep, and only for upkeep, not teardown. Shadows over Camelot's reviewers flag the inverse problem: no bounded time measurement exists at all for its setup/teardown, so the pattern can't even quantify that game's friction. Star Wars: Imperial Assault's between-mission administration is only described in a hypothetical better-if framing, not a direct complaint quote. The corpus still needs a game whose setup/teardown reviewers independently praise as solved, and a standard bounded time figure (minutes) for games like Shadows over Camelot that currently lack one.
