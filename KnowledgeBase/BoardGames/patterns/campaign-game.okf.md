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
Two games added this pass strengthen the structure/logistics side specifically rather
than the state/persistence side (already covered in `campaign-progression.okf.md`):
Arydia's single-save-slot physical storage is a structural constraint on running more
than one campaign at a time, and Star Wars: Imperial Assault's between-mission
administration is asked to preserve narrative continuity without assuming a stable
recurring group every session — both are logistics complaints about *running* a
campaign across sessions, not about what state persists within one. Gloomhaven
remains the one source with hard numbers (setup, teardown, and total campaign hours);
Kingdom Death: Monster's publisher framing ("a story unfolding over many nights") is
high-confidence but drawn from a needs_followup doc; GI JOE's mission-count claim is
an author-flagged low-confidence inference; and Slay the Spire's complaint is about
the reset procedure between campaign acts rather than a measured time cost. Where
structure is legible up front (a stated session count, a scripted reset ritual, a
storage format that supports concurrent play) reviewers treat the commitment as a
selling point; where it's opaque, requires re-assembling state each sitting, or
assumes a level of group stability the design doesn't guarantee, reviewers name it as
friction.

## Evidence by game

- arydia-the-paths-we-dare-tread (src-004): the physical save/storage state permits only one ongoing campaign at a time, a structural (not merely administrative) constraint on running the campaign with more than one group in parallel, confidence: medium
- gloomhaven (src-007): the campaign totals an estimated 150-200 hours, with each session bracketed by roughly 15-20 minutes of setup and 10-15 minutes of teardown, confidence: medium
- kingdom-death-monster (src-002): publisher framing describes a 21-pound game whose "story unfolding over many nights" is central to the pitch, confidence: high (source doc status: needs_followup)
- gi-joe-deck-building-game (src-002): the campaign's "36 unique missions" plus two Story Mission packs imply repeated scenario assembly, prompting an (author-flagged inference) better-if request for an easier reset between missions, confidence: low
- slay-the-spire-the-board-game (src-008): a reviewer unfamiliar with the source video game found moving from one campaign act to the next "very unclear" without a scripted procedure for what persists, resets, unlocks, or gets boxed, confidence: high
- star-wars-imperial-assault (src-003, src-004): between-mission administration is asked to preserve narrative continuity without demanding a full recurring group, alongside a reviewer-stated five-person ideal that campaign scaling is measured against, confidence: medium

## Where it works

- kingdom-death-monster (src-002): the publisher pitches the campaign's multi-night unfolding narrative as the game's core identity rather than a bolted-on mode — "survivors eking out an existence" across "many nights" is presented as the draw, not the cost (source doc status: needs_followup).
- gloomhaven (src-006): despite the heavy time commitment documented elsewhere, reception is unusually strong — an 8.8 BGG rating and 200,000+ copies sold reported at review time — suggesting the campaign's scale is a draw for its committed audience even where session logistics are demanding.

## Where it fails

- arydia-the-paths-we-dare-tread (src-004): a single-save-slot design blocks concurrent campaigns outright, a harder structural failure than administrative overhead.
- gloomhaven (src-007): the campaign "demands considerable time and physical administration" — 15-20 minutes setup and 10-15 minutes teardown per session on top of a 150-200 hour total campaign.
- slay-the-spire-the-board-game (src-008): the post-Act-III transition was "very unclear," with the reviewer relying on outside video-game knowledge to know what carries forward between sessions; the recommended fix is "a ritualized reset procedure: what persists, what resets, what unlocks, what gets boxed."
- gi-joe-deck-building-game (src-002): a 36-mission campaign plus two Story Mission packs implies repeated scenario assembly that the better-if doc flags (low confidence) as needing an easier between-mission reset.
- star-wars-imperial-assault (src-003, src-004): campaign structure is measured against a specific ideal player count, so the same design can read as smoothly paced for one table and administratively strained for another.

## Coverage gaps

arkham-horror-the-card-game, mage-knight, oathsworn-into-the-deepwood, and
too-many-bones carry `campaign-game` but their reception docs only yielded claims
about deck/card-pool cost, general downtime, or persistent-state bookkeeping (already
captured in `campaign-progression.okf.md`) rather than genuine session-count/length/
pacing evidence; oathsworn's own better-if doc explicitly warns that "sources do not
establish measured setup time or downtime." Betrayal Legacy, Cthulhu: Death May Die,
Descent: Journeys in the Dark (Second Edition), Earthborne Rangers, and Tainted Grail
all carry `campaign-game` this pass but their strongest claims are about persistent
state, subsystem overlap, or onboarding cost rather than session-structure/logistics
specifically, and are cited in `campaign-progression.okf.md`, `rules-ambiguity.okf.md`,
or `onboarding.okf.md` instead. The corpus would benefit from a campaign-game title
with clear publisher-stated session-count or session-length guidance (a scenario-book
or legacy-style campaign) to anchor this pattern in more than inference-heavy or
needs_followup sourcing.
