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
Only four of the eight tagged games supplied claims that are genuinely about
structure rather than state: Gloomhaven is the one source with hard numbers (setup,
teardown, and total campaign hours); Kingdom Death: Monster's publisher framing
("a story unfolding over many nights") is high-confidence but drawn from a
needs_followup doc; GI JOE's mission-count claim is an author-flagged low-confidence
inference; and Slay the Spire's complaint is about the reset procedure between
campaign acts rather than a measured time cost. Where structure is legible up front
(a stated session count, a scripted reset ritual) reviewers treat the commitment as a
selling point; where it's opaque or requires re-assembling state each sitting,
reviewers name it as friction. Two new cases sharpen both sides: The Crew states its
50-mission structure and difficulty curve up front in the manual, and an independent
review confirms the stated structure holds in play — exactly the "legible up front"
case this pattern predicts should read as a selling point. Arydia, conversely, shows
the opaque-logistics failure mode in its most literal form: so much campaign state
lives in physical components that the group can only have one game ongoing at a time.

## Evidence by game

- gloomhaven (src-007): the campaign totals an estimated 150-200 hours, with each session bracketed by roughly 15-20 minutes of setup and 10-15 minutes of teardown, confidence: medium
- the-crew (src-002, src-004): the manual states a 50-mission structure with a stated difficulty progression, and an independent review confirms missions increase in complexity and difficulty as the campaign advances, confidence: high
- arydia-the-paths-we-dare-tread (src-004): review testimony says only one game can be ongoing at a time because so much campaign state lives in physical components — a session-to-session logistics cost rather than a persistence-state one, confidence: medium
- descent-journeys-in-the-dark-second-edition (src-003, src-006): the publisher markets "faster setup" and "minimal player downtime" between sessions, but an independent review says setting up the full board from the start undercuts that promise rather than speeding it, confidence: medium
- kingdom-death-monster (src-002): publisher framing describes a 21-pound game whose "story unfolding over many nights" is central to the pitch, confidence: high (source doc status: needs_followup)
- gi-joe-deck-building-game (src-002): the campaign's "36 unique missions" plus two Story Mission packs imply repeated scenario assembly, prompting an (author-flagged inference) better-if request for an easier reset between missions, confidence: low
- slay-the-spire-the-board-game (src-008): a reviewer unfamiliar with the source video game found moving from one campaign act to the next "very unclear" without a scripted procedure for what persists, resets, unlocks, or gets boxed, confidence: high

## Where it works

- kingdom-death-monster (src-002): the publisher pitches the campaign's multi-night unfolding narrative as the game's core identity rather than a bolted-on mode — "survivors eking out an existence" across "many nights" is presented as the draw, not the cost (source doc status: needs_followup).
- gloomhaven (src-006): despite the heavy time commitment documented elsewhere, reception is unusually strong — an 8.8 BGG rating and 200,000+ copies sold reported at review time — suggesting the campaign's scale is a draw for its committed audience even where session logistics are demanding.
- the-crew (src-002, src-004): a stated 50-mission structure with an explicit difficulty curve is confirmed in play, matching this pattern's prediction that legible-up-front structure reads as a selling point rather than a cost.

## Where it fails

- gloomhaven (src-007): the campaign "demands considerable time and physical administration" — 15-20 minutes setup and 10-15 minutes teardown per session on top of a 150-200 hour total campaign.
- slay-the-spire-the-board-game (src-008): the post-Act-III transition was "very unclear," with the reviewer relying on outside video-game knowledge to know what carries forward between sessions; the recommended fix is "a ritualized reset procedure: what persists, what resets, what unlocks, what gets boxed."
- gi-joe-deck-building-game (src-002): a 36-mission campaign plus two Story Mission packs implies repeated scenario assembly that the better-if doc flags (low confidence) as needing an easier between-mission reset.
- arydia-the-paths-we-dare-tread (src-004): the campaign's physical-component state limits the group to one ongoing game at a time, the clearest "opaque/non-portable logistics" failure in this pattern.
- descent-journeys-in-the-dark-second-edition (src-006): a reviewer reports that setting up the full board from the start removes dungeon mystery, despite the publisher's own "faster setup, minimal downtime" marketing for the same transition.

## Coverage gaps

Four of the eight tagged games — arkham-horror-the-card-game, mage-knight,
oathsworn-into-the-deepwood, and too-many-bones — carry `campaign-game` but their
reception docs only yielded claims about deck/card-pool cost, general downtime, or
persistent-state bookkeeping (already captured in `campaign-progression.okf.md`)
rather than genuine session-count/length/pacing evidence; oathsworn's own better-if
doc explicitly warns that "sources do not establish measured setup time or downtime."
The corpus would benefit from a campaign-game title with clear publisher-stated
session-count or session-length guidance (a scenario-book or legacy-style campaign)
to anchor this pattern in more than inference-heavy or needs_followup sourcing.
