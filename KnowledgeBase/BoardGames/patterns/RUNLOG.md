# patterns — run log

One line per weekly `/synthesize-patterns` pass, appended by the pass
itself (see `.claude/commands/synthesize-patterns.md` §Procedure 5).
No-ops log too — a missing line means the job never engaged; a "no-op"
line in a week where `games/` changed is a bug.

Format:
`- <YYYY-MM-DD>: <changed-game-slugs or "no game dirs changed">; <N> pattern doc(s) created, <M> updated, <K> wishlist append(s)`

- 2026-07-05: (retroactive note, written 2026-07-09 during harness setup)
  the first scheduled pass ran 18 turns and committed nothing despite
  game-dir changes that week (quacks scout landed 06:07 that morning) —
  likely the unscoped `git log --stat` was drowned by the 1,692-file
  Dawncaster import. The procedure now scopes the log to
  `KnowledgeBase/BoardGames/games` and requires this RUNLOG line every
  pass. No pattern docs exist yet; next pass should treat the whole
  corpus as changed.
- 2026-07-19: whole corpus treated as changed (first real pass — no prior
  pattern docs existed); all 18 games surveyed. 26 pattern doc(s) created
  (17 better-if-label docs covering every label with corpus evidence,
  kingmaking excluded for zero evidence; 9 major-mechanic docs for
  mechanics appearing in 5+ games — hand-management, variable-player-powers,
  cooperative-game, solo-solitaire-game, deck-building, campaign-game,
  dice-rolling, deck-bag-and-pool-building, variable-setup), 0 updated,
  3 wishlist append(s). Ten thinner mechanics (2-3 game occurrences:
  point-to-point-movement, simultaneous-action-selection, action-points,
  multi-use-cards, race, push-your-luck, catch-up-mechanism,
  action-retrieval, grid-movement, modular-board) were deliberately
  deferred rather than forced into wafer-thin docs — revisit once more
  games accumulate mechanic-specific reception evidence. kingdom-death-monster
  and too-many-bones are still needs_followup on their reception docs;
  every pattern doc citing either is status: draft, not verified.
- 2026-08-23: no pattern pass ran between 2026-07-19 and this one (a five-week
  gap — the prior RUNLOG line is dated 2026-07-19, and the next commit
  touching `patterns/` is this one); scoped the changed-game survey to
  `git log --since=3f57cf5` (the last pass's commit) rather than the usual
  8-day window, since 8 days would have missed the backlog. Corpus grew from
  18 to 41 promoted games in the gap (a "5-5-5 intake" reset plus new
  promotions); of the ~100+ games touched by intermediate scout/remediation
  branches, only 19 currently-promoted games had genuine new reception-doc
  content versus the 2026-07-19 baseline: arydia-the-paths-we-dare-tread,
  betrayal-legacy, bloodborne-the-card-game, cthulhu-death-may-die, dark-pact,
  dead-of-winter-a-crossroads-game, dead-of-winter-the-long-night,
  descent-journeys-in-the-dark-second-edition, dominion, earthborne-rangers,
  elder-sign, forgotten-waters, horrified, nemesis, nemesis-lockdown,
  onirim-second-edition, shadows-over-camelot, star-wars-imperial-assault,
  tainted-grail-the-fall-of-avalon (slay-the-spire-the-board-game and
  too-many-bones also changed but only by punctuation/source-verification
  edits with no new pattern-relevant claims). 3 pattern doc(s) created
  (hidden-information, semi-cooperative-game, modular-board — all three
  mechanics crossed the 5-game corpus threshold this pass; set-collection and
  grid-movement also crossed the threshold but yielded zero mechanic-specific
  reviewer claims among tagged games and were deliberately deferred rather
  than forced into an empty doc), 21 updated (onboarding, downtime,
  randomness, strategic-depth, player-interaction, rules-ambiguity,
  turn-pacing, setup-teardown, campaign-progression, combat-resolution,
  balance-faction-asymmetry, expansion-bloat, accessibility,
  solo-coop-automation, component-clarity, scoring-endgame, campaign-game,
  dice-rolling, variable-setup, deck-building, solo-solitaire-game), 3
  wishlist append(s) (accessibility for visual/motor impairments, a
  progressive-reveal modular board for contrast with Descent 2E's
  full-reveal-at-setup, a traditional binary revealed-traitor game). Battlestar
  Galactica, The Thing: The Board Game, and Unfathomable were promoted this
  window but carry no reception docs yet, so they contributed mechanics-tag
  membership only, not evidence.
