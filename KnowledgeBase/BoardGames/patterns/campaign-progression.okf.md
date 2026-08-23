---
okf_version: 0.2
type: pattern
mechanics: [campaign-game]
better_if_labels: [campaign-progression]
confidence: medium
status: draft
---

## Summary

Persistent state is admired when it is legible — a scar, an unlocked location, a
branching story flag, a slightly better deck — and resented when it becomes either
bookkeeping burden or an unkept promise. The sharpest complaints are not "add a
campaign" but "tell me clearly what persists, what resets, and what unlocks between
sessions": quest-based games that never link sessions leave players feeling growth
was wasted, while heavier campaign games draw complaints about the labor of carrying
state forward rather than about having state at all. This pass adds two new failure
shapes to that picture: single-save-slot physical storage that blocks a group from
running more than one campaign at a time (Arydia), and administrative continuity
between missions competing with the need for a stable recurring group (Star Wars:
Imperial Assault). Evidence here is moderate: Heroes of Terrinoth and Slay the Spire
supply high-confidence, quote-backed claims; the rest supply real but thinner
medium-confidence signal, and kingdom-death-monster's contribution rests on a doc
still marked `needs_followup`.

## Evidence by game

- arkham-horror-the-card-game (src-007): completing a scenario "enables you to purchase better cards for your deck" while scars/consequences also persist, so campaign state is expressed as tangible deck improvement, confidence: medium
- arydia-the-paths-we-dare-tread (src-004): the review reports that the physical save/storage state permits only one ongoing campaign at a time, blocking a group from running concurrent parties, confidence: medium
- betrayal-legacy (src-005): the reviewer praises the edition's clearer haunt implementation and formatting in its strongest chapters while still describing the campaign overall as rough and inconsistent, supporting bringing every haunt up to that same clarity bar, confidence: medium
- cthulhu-death-may-die (src-002): the official rules keep investigator progression (sanity-threshold skill advances) and Elder One progression (Mythos summoning symbols, Stage reveals) as separate tracks that the game would benefit from reinforcing distinctly at the table, confidence: medium
- gloomhaven (src-003): the campaign layer is described as persistent play with new unlocked locations and branching story decisions carried across sessions, confidence: medium
- heroes-of-terrinoth (src-005, src-006): both reviews explicitly regret the lack of quest-to-quest continuity — upgrades reset after each quest and character growth "lacks earned power" because there is no campaign layer, confidence: high
- kingdom-death-monster (src-004): the reviewer's mechanism list treats campaign progression as integrated with tactical combat, role-playing, and storytelling rather than a bolt-on system, confidence: medium (source doc status: needs_followup)
- mage-knight (src-012): a BGG ratings comment wants more connective tissue, stating "narration as campaign or events are missing" from the otherwise-praised optimization puzzle, confidence: medium
- oathsworn-into-the-deepwood (src-005): the campaign's world-state "changes and develops from player actions," but this persistence is flagged as a bookkeeping-burden risk rather than pure upside, confidence: medium
- slay-the-spire-the-board-game (src-008): a reviewer unfamiliar with the source video game found moving forward after Act III "very unclear," having to lean on outside video-game knowledge to know what persists, resets, or unlocks, confidence: high
- star-wars-imperial-assault (src-003, src-004): campaign balance and the reviewer's stated five-person ideal are named as pressure points, and between-mission administration is asked to preserve narrative continuity without demanding a full recurring group every session, confidence: medium
- tainted-grail-the-fall-of-avalon (src-003): community review metadata labels the campaign's complexity high, supporting a staged sequence for reducing the cost of entering it; single community-thread evidence only, confidence: medium

## Where it works

- gloomhaven (src-003): persistent play, newly unlocked locations, and branching story decisions are presented as the campaign's core draw rather than overhead.
- arkham-horror-the-card-game (src-007): scenario completion translating directly into better cards (with scars as a persistent cost) gives campaign state a clear, felt payoff each session.
- kingdom-death-monster (src-004): reviewer praise groups campaign progression together with combat, role-playing, and storytelling as one integrated identity rather than a separate system layered on top (source doc status: needs_followup).
- betrayal-legacy (src-005): the edition's own strongest haunts are held up by the reviewer as proof clearer implementation is achievable within the same campaign structure, not a separate design.

## Where it fails

- heroes-of-terrinoth (src-005, src-006): no campaign layer means upgrades reset each quest; both reviewers independently name this as the game's clearest missed opportunity despite otherwise strong praise.
- slay-the-spire-the-board-game (src-008): post-Act-III progression (what persists, what resets, what unlocks) was "very unclear" without prior video-game familiarity — a ritualized reset procedure is the implied fix.
- oathsworn-into-the-deepwood (src-005): persistent world-state across chapters is flagged as a likely bookkeeping burden even where reviewers admire the design intent.
- mage-knight (src-012): players who want the strong solo/co-op puzzle to feel more like an adventure specifically miss campaign or event narration connecting sessions.
- arydia-the-paths-we-dare-tread (src-004): a single-save-slot physical state is a structural, not merely administrative, campaign-continuity failure — it blocks concurrent play outright rather than just adding labor.
- betrayal-legacy (src-005): inconsistent haunt quality/formatting across the campaign undercuts trust that later chapters will match the best-implemented ones.
- star-wars-imperial-assault (src-003, src-004): campaign balance and player-count scaling are reported as pressure points that between-session administration must manage without assuming a stable five-player group every time.

## Coverage gaps

kingdom-death-monster is the game whose identity is most centrally about persistent
campaign state, but both of its reception docs are still `status: needs_followup`
with only publisher-page and single-review sourcing — its contribution here should be
treated as provisional until a librarian/audit pass strengthens it. gi-joe-deck-building-game
carries the `campaign-progression` label in the index but its own better-if doc only
offers a low-confidence inference about resetting between missions, not a real
reviewer claim, so it contributed nothing usable to this synthesis. Descent: Journeys
in the Dark (Second Edition) carries `campaign-progression` in frontmatter this pass
but its body claims map to balance-faction-asymmetry and setup-teardown instead, and
are cited there. Arydia's and Tainted Grail's contributions rest on doc-status
`needs_followup` and a single community-forum source respectively — treat both as
provisional.
