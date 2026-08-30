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
state forward rather than about having state at all. A newer cluster (The Crew,
Cthulhu: Death May Die, Star Wars: Imperial Assault, Betrayal Legacy, Arydia) adds a
storage/administration angle distinct from bookkeeping labor: physical save-state that
only supports one party at a time, and between-session or between-phase progress that
needs a single reference surface rather than scattered rulebook pages. Evidence here is
moderate: two games (Heroes of Terrinoth, Slay the Spire) supply high-confidence,
quote-backed claims; the rest supply real but thinner medium-confidence signal, and
kingdom-death-monster's, Betrayal Legacy's, and Arydia's contributions rest on docs
still marked `needs_followup`.

## Evidence by game

- arkham-horror-the-card-game (src-007): completing a scenario "enables you to purchase better cards for your deck" while scars/consequences also persist, so campaign state is expressed as tangible deck improvement, confidence: medium
- gloomhaven (src-003): the campaign layer is described as persistent play with new unlocked locations and branching story decisions carried across sessions, confidence: medium
- heroes-of-terrinoth (src-005, src-006): both reviews explicitly regret the lack of quest-to-quest continuity — upgrades reset after each quest and character growth "lacks earned power" because there is no campaign layer, confidence: high
- kingdom-death-monster (src-004): the reviewer's mechanism list treats campaign progression as integrated with tactical combat, role-playing, and storytelling rather than a bolt-on system, confidence: medium (source doc status: needs_followup)
- mage-knight (src-012): a BGG ratings comment wants more connective tissue, stating "narration as campaign or events are missing" from the otherwise-praised optimization puzzle, confidence: medium
- oathsworn-into-the-deepwood (src-005): the campaign's world-state "changes and develops from player actions," but this persistence is flagged as a bookkeeping-burden risk rather than pure upside, confidence: medium
- slay-the-spire-the-board-game (src-008): a reviewer unfamiliar with the source video game found moving forward after Act III "very unclear," having to lean on outside video-game knowledge to know what persists, resets, or unlocks, confidence: high
- the-crew (src-002, src-004): the manual organizes 50 missions with a difficulty section while The Family Gamers describes increasing complexity across scenarios, supporting visible difficulty/completion signaling that doesn't expose the hidden decision problem itself, confidence: medium
- cthulhu-death-may-die (src-002): Episode cards define the ritual-disruption objective and each Episode's two special actions across pp. 5, 14, and 18, supporting a single setup reference that surfaces them together rather than scattered across the rulebook, confidence: medium
- cthulhu-death-may-die (src-002): investigator skill progression (sanity thresholds) and Elder One progression (Mythos summoning symbols, Stage reveals) run on separate tracks across pp. 8 and 17-18, supporting reinforcement of that distinction at the table, confidence: medium
- star-wars-imperial-assault (src-003, src-004): between-mission administration should preserve narrative continuity without requiring a full recurring group, given both the review's group-size concerns and the campaign's role-based structure, confidence: medium
- betrayal-legacy (src-005): the review praises clearer haunt implementation in the edition's strongest examples while still describing the game overall as rough and inconsistent, supporting bringing every haunt up to that same clarity bar, confidence: medium (source doc status: needs_followup)
- arydia-the-paths-we-dare-tread (src-004): the review reports the physical campaign state permits only one ongoing game, supporting a storage/save procedure that accommodates multiple concurrent parties, confidence: medium (source doc status: needs_followup)

## Where it works

- gloomhaven (src-003): persistent play, newly unlocked locations, and branching story decisions are presented as the campaign's core draw rather than overhead.
- arkham-horror-the-card-game (src-007): scenario completion translating directly into better cards (with scars as a persistent cost) gives campaign state a clear, felt payoff each session.
- kingdom-death-monster (src-004): reviewer praise groups campaign progression together with combat, role-playing, and storytelling as one integrated identity rather than a separate system layered on top (source doc status: needs_followup).
- cthulhu-death-may-die (src-002): investigator progression and Elder One progression run on visibly separate, clearly triggered tracks (sanity thresholds vs. Mythos/Stage reveals), giving campaign-style advancement a legible dual structure even within a single scenario.
- the-crew (src-002, src-004): 50 missions organized with an explicit difficulty section gives players a visible progression signal without exposing the specific hidden decision problem each mission poses.

## Where it fails

- heroes-of-terrinoth (src-005, src-006): no campaign layer means upgrades reset each quest; both reviewers independently name this as the game's clearest missed opportunity despite otherwise strong praise.
- slay-the-spire-the-board-game (src-008): post-Act-III progression (what persists, what resets, what unlocks) was "very unclear" without prior video-game familiarity — a ritualized reset procedure is the implied fix.
- oathsworn-into-the-deepwood (src-005): persistent world-state across chapters is flagged as a likely bookkeeping burden even where reviewers admire the design intent.
- mage-knight (src-012): players who want the strong solo/co-op puzzle to feel more like an adventure specifically miss campaign or event narration connecting sessions.
- arydia-the-paths-we-dare-tread (src-004): the save/storage system's single-party limit is the sharpest "administration, not bookkeeping" complaint in this set — the campaign can't run more than one active game at a time (source doc status: needs_followup).
- betrayal-legacy (src-005): haunt-to-haunt implementation quality is uneven, so how well a session's persistent content lands depends on which haunt gets drawn (source doc status: needs_followup).

## Coverage gaps

kingdom-death-monster is the game whose identity is most centrally about persistent
campaign state, but both of its reception docs are still `status: needs_followup`
with only publisher-page and single-review sourcing — its contribution here should be
treated as provisional until a librarian/audit pass strengthens it. gi-joe-deck-building-game
carries the `campaign-progression` label in the index but its own better-if doc only
offers a low-confidence inference about resetting between missions, not a real
reviewer claim, so it contributed nothing usable to this synthesis. Descent: Journeys in
the Dark (Second Edition) and Tainted Grail: The Fall of Avalon also carry this label in
their frontmatter, but their better-if docs' body claims land on balance, setup/downtime,
or onboarding rather than a distinct campaign-progression statement, so they were left
out rather than stretched to fit.
