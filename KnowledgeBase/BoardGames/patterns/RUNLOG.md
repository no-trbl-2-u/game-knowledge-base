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
- 2026-08-16: no pass ran between 2026-07-19 and this one (a ~4-week gap);
  scope widened past the standard 8-day window to cover the full gap, back
  to the 2026-07-19 RUNLOG line. 26 games under KnowledgeBase/BoardGames/games
  changed in that window. 18 carried new, evidenced better-if claims —
  arydia-the-paths-we-dare-tread, betrayal-legacy, bloodborne-the-card-game,
  cthulhu-death-may-die, dark-pact, dead-of-winter-a-crossroads-game,
  dead-of-winter-the-long-night, descent-journeys-in-the-dark-second-edition,
  dominion, earthborne-rangers, elder-sign, forgotten-waters, nemesis,
  nemesis-lockdown, onirim-second-edition, shadows-over-camelot,
  star-wars-imperial-assault, tainted-grail-the-fall-of-avalon. 5
  (ark-nova, mage-knight, slay-the-spire-the-board-game, spirit-island,
  too-many-bones) had file changes but their claims were already fully
  reflected in existing pattern docs from the 2026-07-19 pass, so nothing
  further was added. 3 (battlestar-galactica-the-board-game,
  the-thing-the-boardgame, unfathomable) have no reception/better-if doc
  yet and contributed nothing. 0 pattern doc(s) created, 19 updated
  (accessibility, balance-faction-asymmetry, campaign-progression,
  combat-resolution, component-clarity, cooperative-game, deck-building,
  dice-rolling, downtime, expansion-bloat, onboarding, player-interaction,
  randomness, rules-ambiguity, setup-teardown, solo-coop-automation,
  solo-solitaire-game, strategic-depth, turn-pacing), 3 wishlist append(s)
  (restricted-communication co-op game; a semi-cooperative-game source pass
  targeting the hidden-role/traitor dynamic on 4 existing games; a Dominion
  market-diversity source pass), plus the existing Elder Sign wishlist line
  checked off as now covered. Evaluated the 7 mechanics that newly crossed
  the 5-game corpus threshold this pass (semi-cooperative-game,
  hidden-information, modular-board, simultaneous-action-selection,
  set-collection, grid-movement, action-points) for new mechanic-keyed
  pattern docs; deferred all seven — none had 5+ games whose reception docs
  carried a claim distinctly about that mechanic rather than just the
  frontmatter tag (semi-cooperative-game came closest at 2 of 10 tagged
  games with clean evidence, logged to WISHLIST for a future source pass).
  Re-checked kingmaking for new evidence across all 18 newly-evidenced
  games: still zero, no change from the 2026-07-19 exclusion.
