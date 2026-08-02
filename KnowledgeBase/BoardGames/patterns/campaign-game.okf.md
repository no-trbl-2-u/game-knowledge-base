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
the logistics of moving from one session to the next) is thin across this mechanic's
tag list — most reception docs discuss campaign-game titles through onboarding cost or
persistent-state framing rather than quantifying sessions or transition logistics.
Eight of the fourteen tagged games now supply claims that are genuinely about
structure rather than state: Gloomhaven is the one source with hard numbers (setup,
teardown, and total campaign hours); Kingdom Death: Monster's publisher framing
("a story unfolding over many nights") is high-confidence but drawn from a
needs_followup doc; GI JOE's mission-count claim is an author-flagged low-confidence
inference; and Slay the Spire's complaint is about the reset procedure between
campaign acts rather than a measured time cost. Arydia's single-save physical state,
Star Wars: Imperial Assault's group-stability requirement between missions, and
Cthulhu: Death May Die's Episode-to-Episode setup reference all add
session-to-session logistics complaints, while Betrayal Legacy shows the same
structural concern at the level of a single haunt's pacing. Where structure is
legible up front (a stated session count, a scripted reset ritual) reviewers treat
the commitment as a selling point; where it's opaque, single-slot, or requires
re-assembling state each sitting, reviewers name it as friction.

## Evidence by game

- arydia-the-paths-we-dare-tread (src-004): the campaign's physical state permits only one ongoing game — a single-save-slot structural constraint on how the campaign can be run across sessions (source doc status: needs_followup), confidence: medium
- betrayal-legacy (src-005): individual haunt sessions — the game's per-sitting scenario unit — run inconsistently, "thirty minutes beyond what it should" in some cases and resolved "before a single full round passes" in others (source doc status: needs_followup), confidence: medium
- cthulhu-death-may-die (src-002): each Episode defines its own ritual-disruption objective and two special actions, and the better-if doc calls for a single setup reference per Episode rather than scattering that structure across the rulebook, confidence: medium
- gloomhaven (src-007): the campaign totals an estimated 150-200 hours, with each session bracketed by roughly 15-20 minutes of setup and 10-15 minutes of teardown, confidence: medium
- kingdom-death-monster (src-002): publisher framing describes a 21-pound game whose "story unfolding over many nights" is central to the pitch, confidence: high (source doc status: needs_followup)
- gi-joe-deck-building-game (src-002): the campaign's "36 unique missions" plus two Story Mission packs imply repeated scenario assembly, prompting an (author-flagged inference) better-if request for an easier reset between missions, confidence: low
- slay-the-spire-the-board-game (src-008): a reviewer unfamiliar with the source video game found moving from one campaign act to the next "very unclear" without a scripted procedure for what persists, resets, unlocks, or gets boxed, confidence: high
- star-wars-imperial-assault (src-003, src-004): reviews report the campaign's best experience needs a stable five-participant group sustained across sessions, a session-to-session recurrence requirement rather than a per-session time cost, confidence: medium

## Where it works

- kingdom-death-monster (src-002): the publisher pitches the campaign's multi-night unfolding narrative as the game's core identity rather than a bolted-on mode — "survivors eking out an existence" across "many nights" is presented as the draw, not the cost (source doc status: needs_followup).
- gloomhaven (src-006): despite the heavy time commitment documented elsewhere, reception is unusually strong — an 8.8 BGG rating and 200,000+ copies sold reported at review time — suggesting the campaign's scale is a draw for its committed audience even where session logistics are demanding.
- star-wars-imperial-assault (src-004): the scenario-by-scenario mission structure is praised as a cinematic campaign arc, a positive read on the same session-to-session structure that separately draws a group-stability complaint.

## Where it fails

- gloomhaven (src-007): the campaign "demands considerable time and physical administration" — 15-20 minutes setup and 10-15 minutes teardown per session on top of a 150-200 hour total campaign.
- slay-the-spire-the-board-game (src-008): the post-Act-III transition was "very unclear," with the reviewer relying on outside video-game knowledge to know what carries forward between sessions; the recommended fix is "a ritualized reset procedure: what persists, what resets, what unlocks, what gets boxed."
- gi-joe-deck-building-game (src-002): a 36-mission campaign plus two Story Mission packs implies repeated scenario assembly that the better-if doc flags (low confidence) as needing an easier between-mission reset.
- arydia-the-paths-we-dare-tread (src-004): a single-save physical state means only one campaign can be underway at a time, a structural limit on how many groups or replays a copy can support concurrently.
- betrayal-legacy (src-005): individual haunt sessions run inconsistently long or short, so the per-sitting scenario structure itself is the source of the pacing complaint, not the overarching legacy campaign.
- cthulhu-death-may-die (src-002): Episode-specific rituals and special actions are scattered across separate cards rather than consolidated into one setup reference, adding friction at the start of each session.
- star-wars-imperial-assault (src-003): the campaign's best-balanced configuration is reported to require a stable five-person group across sessions — a recurring-attendance demand distinct from any single session's time cost.

## Coverage gaps

Four of the original eight tagged games — arkham-horror-the-card-game, mage-knight,
oathsworn-into-the-deepwood, and too-many-bones — carry `campaign-game` but their
reception docs only yielded claims about deck/card-pool cost, general downtime, or
persistent-state bookkeeping (already captured in `campaign-progression.okf.md`)
rather than genuine session-count/length/pacing evidence; oathsworn's own better-if
doc explicitly warns that "sources do not establish measured setup time or downtime."
descent-journeys-in-the-dark-second-edition and tainted-grail-the-fall-of-avalon also
carry the tag but their reception docs discuss persistent state and general
complexity/downtime rather than session-structure logistics specifically, so they were
left to `campaign-progression.okf.md` instead. arydia's and betrayal-legacy's
contributions are from `needs_followup` reception docs, which is why this pattern's
`status` stays `draft`. The corpus would benefit from a campaign-game title with clear
publisher-stated session-count or session-length guidance (a scenario-book or
legacy-style campaign) to anchor this pattern in more than inference-heavy or
needs_followup sourcing.
