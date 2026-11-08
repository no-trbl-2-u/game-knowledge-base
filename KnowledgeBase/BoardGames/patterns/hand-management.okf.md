---
okf_version: 0.2
type: pattern
mechanics: [hand-management]
better_if_labels: [randomness, turn-pacing]
confidence: medium
status: draft
---

## Summary

Most games carrying `hand-management` in this corpus have reception docs, but
most sourced claims are actually about deck-building/construction (already covered by
`patterns/deck-building.okf.md`) or general onboarding/setup complaints rather than
hand-of-cards friction as such. A handful of games now produce citable evidence
squarely about the moment-to-moment experience of holding, tracking, retaining, or
cycling a hand: a large personal card pool that resists filtering (Ark Nova), many
simultaneous per-character state areas to track across sessions (Gloomhaven: Jaws of
the Lion), card-use modes that are hard to compare at a glance (SETI), cross-round
card retention that needs explicit teaching (Terraforming Mars), and allocating a
genuinely limited hand across competing pressures as the core of play (Shadows over
Camelot). Evidence is still thin overall — this pattern rests on a handful of games
and should be treated as a working sketch, not a settled synthesis.

## Evidence by game

- ark-nova (src-008): A solo reviewer says the large 212-card personal pool produces "output randomness" that undermines planning ahead, and wished for "either less cards, or more ways to churn through the deck," confidence: high
- ark-nova (src-009): A second reviewer reports the same complaint pattern — the 212-card zoo deck can mean "waiting for cards to come that never do," though the reviewer frames adapting to whatever is in hand as the intended antidote, confidence: high
- gloomhaven-jaws-of-the-lion (src-003): characters are praised as interesting, but each has many simultaneous state areas (hand/discard/lost/active/items) to track, raising cognitive burden, confidence: medium
- heat-pedal-to-the-metal (src-006): Co-op Board Games lists "Simultaneous card selection eliminates downtime" as a pro, describing all players choosing and revealing a hand card at once rather than waiting through sequential turns, confidence: medium
- seti-search-for-extraterrestrial-intelligence (src-002, src-004): card-use modes (main-action, free-action, mission, income) and recurring-income consequences are hard to compare at a glance; better if player aids addressed this, confidence: medium
- shadows-over-camelot (src-006, src-007): choosing the least damaging evil progression and allocating limited hands across pressures is the functional core of play, confidence: medium
- terraforming-mars (src-003, src-004): first-generation play should teach card retention, production, and the three global parameters in a more staged order, confidence: medium

## Where it works

- heat-pedal-to-the-metal (src-006): Simultaneous hand-card selection is praised specifically because it removes the downtime of watching other players deliberate over their hand, one of the sharpest positive claims about hand-management mechanics found in this corpus.
- shadows-over-camelot (src-006, src-007): allocating a scarce hand across multiple threats is identified as the game's functional strategic core, not an administrative burden.

## Where it fails

- ark-nova (src-008): A large, un-thinned personal card pool feeding the hand can make plans fall apart when needed cards simply don't come up — the reviewer's explicit fix request was more hand/deck cycling tools, not a smaller pool.
- ark-nova (src-009): The same "waiting for cards that never arrive" friction is corroborated by a second reviewer, though that source treats forced adaptation to your current hand as a feature rather than a flaw.
- gloomhaven-jaws-of-the-lion (src-003): tracking several simultaneous card-state areas per character raises real cognitive overhead even when the characters themselves are well-liked.
- seti-search-for-extraterrestrial-intelligence (src-002, src-004): several distinct ways to play a card from hand, without an at-a-glance comparison aid, slows decision-making.
- terraforming-mars (src-003, src-004): deciding what to retain in hand across generations is reported as a teaching gap, not a design flaw, but it is still a concrete hand-management friction point for new players.

## Coverage gaps

Canonical hand-management-heavy designs in this list — Mage Knight, Spirit Island,
Marvel Champions, Arkham Horror, Slay the Spire, Nemesis, and the Dune Imperium
titles — all carry the mechanic tag, but their reception docs mostly discuss
onboarding, setup/teardown, deck construction, or campaign scale rather than hand
size, hand limits, or in-hand planning specifically. Shadows over Camelot's
contribution comes from a `needs_followup` reception doc, which is why this pattern's
status drops to `draft` this pass. The corpus would still benefit from reviewer
commentary that targets hand-limit/hand-cycling friction directly — e.g. "too many
cards to track in hand," "forced discards," or "hand planning under a limit."
