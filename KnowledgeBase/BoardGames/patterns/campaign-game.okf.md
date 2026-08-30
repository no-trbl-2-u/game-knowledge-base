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
Gloomhaven is the one source with hard numbers (setup, teardown, and total campaign
hours); Kingdom Death: Monster's publisher framing ("a story unfolding over many
nights") is high-confidence but drawn from a needs_followup doc; GI JOE's
mission-count claim is an author-flagged low-confidence inference; and Slay the
Spire's complaint is about the reset procedure between campaign acts rather than a
measured time cost. Two newer entries sharpen the "moving between sessions" side
specifically: Star Wars: Imperial Assault's between-mission administration burden
(preserving narrative continuity without demanding a full recurring group) and
Arydia's save-state architecture (physical storage limited to one active party at a
time). The Crew's 50-mission, difficulty-labeled structure adds a lighter-weight
session-count data point at the opposite end of the campaign-weight spectrum. Where
structure is legible up front (a stated session count, a scripted reset ritual)
reviewers treat the commitment as a selling point; where it's opaque, single-party-only,
or requires re-assembling state each sitting, reviewers name it as friction.

## Evidence by game

- gloomhaven (src-007): the campaign totals an estimated 150-200 hours, with each session bracketed by roughly 15-20 minutes of setup and 10-15 minutes of teardown, confidence: medium
- kingdom-death-monster (src-002): publisher framing describes a 21-pound game whose "story unfolding over many nights" is central to the pitch, confidence: high (source doc status: needs_followup)
- gi-joe-deck-building-game (src-002): the campaign's "36 unique missions" plus two Story Mission packs imply repeated scenario assembly, prompting an (author-flagged inference) better-if request for an easier reset between missions, confidence: low
- slay-the-spire-the-board-game (src-008): a reviewer unfamiliar with the source video game found moving from one campaign act to the next "very unclear" without a scripted procedure for what persists, resets, unlocks, or gets boxed, confidence: high
- the-crew (src-002, src-004): the manual organizes 50 missions with an explicit difficulty section, and The Family Gamers describes increasing complexity across scenarios, giving this pattern its first light-campaign (single-box, no persistent character state) session-count data point, confidence: medium
- star-wars-imperial-assault (src-003, src-004): between-mission administration should preserve narrative continuity without requiring a full recurring group, given both the review's group-size concerns and the game's role-based campaign structure, confidence: medium
- arydia-the-paths-we-dare-tread (src-004): the review reports the physical campaign state permits only one ongoing game at a time, a save-architecture constraint on moving between sessions distinct from time-per-session cost, confidence: medium (source doc status: needs_followup)

## Where it works

- kingdom-death-monster (src-002): the publisher pitches the campaign's multi-night unfolding narrative as the game's core identity rather than a bolted-on mode — "survivors eking out an existence" across "many nights" is presented as the draw, not the cost (source doc status: needs_followup).
- gloomhaven (src-006): despite the heavy time commitment documented elsewhere, reception is unusually strong — an 8.8 BGG rating and 200,000+ copies sold reported at review time — suggesting the campaign's scale is a draw for its committed audience even where session logistics are demanding.
- the-crew (src-002, src-004): a stated 50-mission structure with a built-in difficulty section gives players legible session-to-session progression without the heavy persistent-state bookkeeping of box-scale campaign games.

## Where it fails

- gloomhaven (src-007): the campaign "demands considerable time and physical administration" — 15-20 minutes setup and 10-15 minutes teardown per session on top of a 150-200 hour total campaign.
- slay-the-spire-the-board-game (src-008): the post-Act-III transition was "very unclear," with the reviewer relying on outside video-game knowledge to know what carries forward between sessions; the recommended fix is "a ritualized reset procedure: what persists, what resets, what unlocks, what gets boxed."
- gi-joe-deck-building-game (src-002): a 36-mission campaign plus two Story Mission packs implies repeated scenario assembly that the better-if doc flags (low confidence) as needing an easier between-mission reset.
- star-wars-imperial-assault (src-003, src-004): a role-based campaign that pits one Imperial player against Rebel heroes creates group-size and continuity administration pressure between sessions, independent of any single session's length.
- arydia-the-paths-we-dare-tread (src-004): the physical save-state system supports only one active party, so a group can't run a second concurrent campaign without reassigning the same physical state (source doc status: needs_followup).

## Coverage gaps

Four of the eight originally-tagged games — arkham-horror-the-card-game, mage-knight,
oathsworn-into-the-deepwood, and too-many-bones — carry `campaign-game` but their
reception docs only yielded claims about deck/card-pool cost, general downtime, or
persistent-state bookkeeping (already captured in `campaign-progression.okf.md`)
rather than genuine session-count/length/pacing evidence; oathsworn's own better-if
doc explicitly warns that "sources do not establish measured setup time or downtime."
Earthborne Rangers, Cthulhu: Death May Die, Descent, and Tainted Grail also carry the
tag but their better-if docs' body claims land on subsystem friction, campaign
progression, balance, or onboarding rather than a distinct session-structure
statement, so they were left out. Arydia's contribution rests on a needs_followup
doc. The corpus would still benefit from a campaign-game title with clear
publisher-stated session-count or session-length guidance (a scenario-book or
legacy-style campaign) to further anchor this pattern beyond Gloomhaven and The Crew.
