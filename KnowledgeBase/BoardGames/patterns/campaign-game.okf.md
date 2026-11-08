---
okf_version: 0.2
type: pattern
mechanics: [campaign-game]
better_if_labels: [campaign-progression, setup-teardown, onboarding]
confidence: low
status: draft
---

## Summary

Evidence for campaign STRUCTURE specifically (session count, per-session time, and
the logistics of moving from one session to the next) has grown substantially beyond
the original four games. The same divide holds and sharpens: where structure is
legible up front (a stated session/mission count, a scripted setup shortcut, a
reset ritual), reviewers treat the commitment as a selling point (Gloomhaven: Jaws of
the Lion's scenario-book setup, The Crew's 50-mission difficulty-labeled structure,
Pandemic Legacy Season 1's bounded 12-24 game arc); where it's opaque, requires
re-assembling heavy physical state each sitting, or demands a stable recurring group,
reviewers name it as friction (War of the Ring's >2-hour sessions, Star Wars:
Rebellion's 153-miniature afternoon-scale setup, Star Wars: Imperial Assault's
between-mission administration, Arydia's single-active-party save limit). Descent 2E
adds a specific tension within this: a publisher-cited "faster setup" claim can
coexist with a reviewer complaint that the same full-board setup reveals information
the scenario design wants kept hidden — speed and mystery pull in different
directions for physical modular-board campaigns specifically.

## Evidence by game

- arydia-the-paths-we-dare-tread (src-004): the campaign storage/save procedure permits only one ongoing party at a time, confidence: medium
- descent-journeys-in-the-dark-second-edition (src-003): the publisher page explicitly sells "faster setup" and "minimal player downtime" as 2nd-edition improvements over the original, confidence: high
- descent-journeys-in-the-dark-second-edition (src-006): full-board setup "weakens dungeon mystery" by revealing unexplored areas upfront, confidence: medium
- gi-joe-deck-building-game (src-002): the campaign's "36 unique missions" plus two Story Mission packs imply repeated scenario assembly, prompting an (author-flagged inference) better-if request for an easier reset between missions, confidence: low
- gloomhaven (src-007): the campaign totals an estimated 150-200 hours, with each session bracketed by roughly 15-20 minutes of setup and 10-15 minutes of teardown, confidence: medium
- gloomhaven-jaws-of-the-lion (src-001, src-003): the publisher's scenario-book setup shortcut is called a concrete strength by both the publisher and an independent reviewer, confidence: high
- gloomhaven-jaws-of-the-lion (src-003): a 90-minute loss followed by a required retry "is not usually enjoyable"; clearer recovery scaffolding is needed, confidence: medium
- kingdom-death-monster (src-002): publisher framing describes a 21-pound game whose "story unfolding over many nights" is central to the pitch, confidence: high (source doc status: needs_followup)
- pandemic-legacy-season-1 (src-003): the once-only campaign structure (12-24 games across 12 months) is a strength when the group wants a unique, consequential experience, but leaves limited replay value and requires commitment to permanent component changes, confidence: medium
- slay-the-spire-the-board-game (src-008): a reviewer unfamiliar with the source video game found moving from one campaign act to the next "very unclear" without a scripted procedure for what persists, resets, unlocks, or gets boxed, confidence: high
- star-wars-imperial-assault (src-003, src-004): between-mission administration should preserve narrative continuity without demanding a full recurring group; group-size concerns are central to both reviews, confidence: medium
- star-wars-rebellion (src-005, src-006): two boards, 153 miniatures, and an afternoon-scale session demand a large table and heavy component handling, confidence: high
- the-crew (src-002, src-004): the manual organizes 50 missions with a difficulty section, and a reviewer describes increasing complexity across scenarios, confidence: medium
- war-of-the-ring (src-002, src-003): intensive setup/teardown; games commonly run longer than two hours, confidence: high

## Where it works

- kingdom-death-monster (src-002): the publisher pitches the campaign's multi-night unfolding narrative as the game's core identity rather than a bolted-on mode — "survivors eking out an existence" across "many nights" is presented as the draw, not the cost (source doc status: needs_followup).
- gloomhaven (src-006): despite the heavy time commitment documented elsewhere, reception is unusually strong — an 8.8 BGG rating and 200,000+ copies sold reported at review time — suggesting the campaign's scale is a draw for its committed audience even where session logistics are demanding.
- gloomhaven-jaws-of-the-lion (src-001, src-003): the scenario book's built-in setup shortcut shows a campaign game solving session logistics through its teaching structure, the clearest "structure as selling point" case in this set.
- the-crew (src-002, src-004): a labeled 50-mission difficulty curve lets players and reviewers see session-to-session progress without needing a physical state carryover.
- pandemic-legacy-season-1 (src-003): a bounded, publicly-known session count (12-24 games) is itself legible structure — players know what they're committing to up front.
- descent-journeys-in-the-dark-second-edition (src-003): the publisher explicitly markets "faster setup" and "minimal player downtime" as a named 2nd-edition design goal.

## Where it fails

- gloomhaven (src-007): the campaign "demands considerable time and physical administration" — 15-20 minutes setup and 10-15 minutes teardown per session on top of a 150-200 hour total campaign.
- slay-the-spire-the-board-game (src-008): the post-Act-III transition was "very unclear," with the reviewer relying on outside video-game knowledge to know what carries forward between sessions; the recommended fix is "a ritualized reset procedure: what persists, what resets, what unlocks, what gets boxed."
- gi-joe-deck-building-game (src-002): a 36-mission campaign plus two Story Mission packs implies repeated scenario assembly that the better-if doc flags (low confidence) as needing an easier between-mission reset.
- gloomhaven-jaws-of-the-lion (src-003): a 90-minute loss with a mandatory retry is a structural pacing cost the scenario-book teaching doesn't solve.
- war-of-the-ring (src-002, src-003) and star-wars-rebellion (src-005, src-006): both named-IP epics require heavy physical setup/teardown and run well past two hours, a structural tax independent of rules complexity.
- star-wars-imperial-assault (src-003, src-004): between-mission bookkeeping assumes a stable recurring group, a real-world constraint both reviewers flag as a barrier to actually finishing the campaign.
- arydia-the-paths-we-dare-tread (src-004): restricting save state to a single ongoing party blocks groups who want to run more than one campaign at a time.
- descent-journeys-in-the-dark-second-edition (src-006): laying out the full board before play reveals unexplored dungeon areas, undercutting the mystery the scenario design otherwise builds — the same publisher-praised setup speed trades away board-state secrecy.

## Coverage gaps

arkham-horror-the-card-game, mage-knight, oathsworn-into-the-deepwood, and
too-many-bones all carry `campaign-game` but their reception docs still only yield
claims about deck/card-pool cost, general downtime, or persistent-state bookkeeping
(already captured in `campaign-progression.okf.md`) rather than genuine
session-count/length/pacing evidence; oathsworn's own better-if doc explicitly warns
that "sources do not establish measured setup time or downtime." The evidence base
is now much denser overall, but the "faster setup vs. preserved mystery" tension
Descent 2E raises is itself a good WISHLIST candidate: a dungeon-crawl campaign game
whose reviewers specifically credit *incremental* board/room reveal for solving both
problems at once.
