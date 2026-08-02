---
okf_version: 0.2
type: pattern
mechanics: []
better_if_labels: [rules-ambiguity]
confidence: medium
status: draft
---

## Summary

Rules-ambiguity friction rarely shows up as "the rules are wrong." It shows up as scattered authority: a ruling lives in the rulebook, a card, a walkthrough, and an FAQ, and none of those four agree on precedence at the table. The recurring fixes reviewers ask for are not simpler rules but a single, searchable place to resolve a dispute — a living FAQ, an explicit timing-window reference, or an in-line reason for any instruction that breaks genre habit (e.g. "don't shuffle this deck"). Nemesis adds a variant: rules load itself (exception density across a large rulebook plus two reference cards) can feel fiddly even without a specific unresolved dispute. Evidence is real but thin-to-moderate per game: most complaints come from single secondary reviews rather than aggregated player consensus, so treat this synthesis as directional, not exhaustive.

## Evidence by game

- ark-nova (src-007): Board Game Quest reports that endgame scoring "is not elegant" and forces players to "pull out the rule book" to resolve it, confidence: high
- betrayal-legacy (src-005): a review praises the revised haunt implementation as clearer than the original Betrayal but still describes the overall experience as rough and inconsistent, implying implementation quality varies haunt to haunt (source doc status: needs_followup), confidence: medium
- dune-imperium (src-004): The official FAQ carries repeated timing/definition clarifications (Intrigue cards, optional effects, Reveal turn, troop counts, Alliance, "when you win a Conflict"), indicating a real edge-case load behind the base rulebook, confidence: high
- legendary-encounters-an-alien-deck-building-game (src-003): A reviewer flags that timing between completing an objective and the hive deck spawning "can be an issue," i.e. an unresolved sequencing question at the table, confidence: medium
- mage-knight (src-011): A BGG fan critique complains rules are split across the rulebook, the Walkthrough booklet, individual cards, and the FAQ/site, with no single point of authority, confidence: medium
- nemesis (src-006, src-007, src-010): reviewers describe escape/noise interactions as fiddly, the game overall as fiddly, and the experience as theatrically elaborate — rules load and exception density read as friction even without a single named dispute, confidence: medium
- root (src-003): Leder's official Rules Library exists specifically to adjudicate disputes such as whether "cannot" is absolute and who resolves ambiguous simultaneous-turn order, confidence: high
- slay-the-spire-the-board-game (src-008): A reviewer accidentally shuffled the Summon deck (which must stay ordered/searchable) because the rulebook didn't flag the exception, and separately found post-Act-III progression "very unclear" without prior video-game knowledge, confidence: high

## Where it works

No praised-design evidence found for this pattern. None of the sampled reviews singled out a rulebook or FAQ as a clarity strength in its own right — where an official FAQ or rules library appears in this evidence set (dune-imperium src-004, root src-003), it is cited as documentation of ambiguity that needed resolving, not as praised design.

## Where it fails

- ark-nova (src-007): elegant-looking endgame scoring collapses into a rulebook lookup at the table.
- dune-imperium (src-004): the density of official FAQ timing rulings signals the base rules under-specify several key windows.
- legendary-encounters-an-alien-deck-building-game (src-003): objective-completion vs. hive-spawn timing is ambiguous enough to be called out as "an issue."
- mage-knight (src-011): authoritative rulings are fragmented across four different physical/official sources with no single index.
- root (src-003): even with an official living rules library, base concepts like "cannot" and simultaneous-turn precedence needed explicit adjudication.
- slay-the-spire-the-board-game (src-008): genre-breaking instructions (don't shuffle this deck) and post-campaign progression steps go unexplained for players without outside (video-game) context.
- betrayal-legacy (src-005): the review's own praise for clearer haunt implementation coexists with a "rough and inconsistent" overall verdict, implying the clarity gain is uneven across the game's many haunts (source doc status: needs_followup).
- nemesis (src-006, src-007, src-010): exception-dense rules load is named as fiddly/disjointed even by reviewers who otherwise praise the game's thematic payoff.

## Coverage gaps

hoplomachus-remastered and spirit-island carry the rules-ambiguity label in the corpus but did not yield citable evidence here: hoplomachus's better-if doc only infers ambiguity risk from rulebook structure and FAQ existence (no reviewer complaint sighted), and spirit-island's rules-ambiguity bullet in its better-if doc lacks an attached source/evidence pair. cthulhu-death-may-die carries the label in its better-if frontmatter but its body claims are about turn-order teaching and progression-track clarity rather than an unresolved rules dispute, so it was excluded. betrayal-legacy's contribution is from a `needs_followup` reception doc, which is why this pattern's `status` stays `draft` rather than `verified`. The corpus would benefit from a game with heavier, well-documented errata history (e.g. a wargame or living-rules title with an active BGG rules-forum trail) to strengthen this pattern with primary-source ruling disputes rather than reviewer paraphrase.
