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
- 2026-09-13: no pass ran between 2026-07-19 and today, so this pass scoped the
  full 8-week backlog under `KnowledgeBase/BoardGames/games` rather than the
  usual 8-day window. 24 games gained a promoted `reception/better-if.okf.md`
  since the last pass and had never been folded into any pattern doc:
  arydia-the-paths-we-dare-tread, betrayal-legacy, bloodborne-the-card-game,
  cthulhu-death-may-die, dark-pact, dead-of-winter-a-crossroads-game,
  dead-of-winter-the-long-night, descent-journeys-in-the-dark-second-edition,
  dominion, earthborne-rangers, elder-sign, food-chain-magnate,
  forgotten-waters, horrified, nemesis, nemesis-lockdown,
  onirim-second-edition, scythe, shadows-over-camelot,
  star-wars-imperial-assault, tainted-grail-the-fall-of-avalon, terra-mystica,
  the-crew, unmatched-battle-of-legends-volume-one. 0 pattern doc(s) created,
  16 updated (onboarding, player-interaction, strategic-depth, turn-pacing,
  randomness, setup-teardown, campaign-progression, downtime,
  rules-ambiguity, component-clarity, balance-faction-asymmetry,
  combat-resolution, solo-coop-automation, expansion-bloat, accessibility,
  runaway-leader), 3 wishlist append(s). Citing several `needs_followup`
  games (arydia, betrayal-legacy, bloodborne, dead-of-winter-a-crossroads-game,
  dead-of-winter-the-long-night, forgotten-waters, nemesis-lockdown,
  shadows-over-camelot, tainted-grail) stepped player-interaction,
  turn-pacing, randomness, rules-ambiguity, component-clarity, and
  expansion-bloat back from status: verified to draft; re-promote each once
  its needs_followup sources clear. Seven mechanics now cross the 5-game
  major-mechanic threshold (modular-board, semi-cooperative-game,
  hidden-information, grid-movement, resource-management, action-points,
  set-collection) but were deliberately left undocumented this pass: the
  claims tagged with those mechanics are almost all really about a
  better-if label (onboarding, randomness, setup-teardown, etc.) rather than
  the mechanic itself, and the few genuinely mechanic-specific claims found
  (e.g. semi-cooperative trust/betrayal in shadows-over-camelot and
  bloodborne-the-card-game) rest entirely on needs_followup sources — same
  "don't pad from a thin base" call as the 2026-07-19 pass's deferred
  thinner mechanics. dark-pact, descent-journeys-in-the-dark-second-edition,
  elder-sign, food-chain-magnate, horrified, nemesis, onirim-second-edition,
  scythe, star-wars-imperial-assault, terra-mystica, the-crew, and
  unmatched-battle-of-legends-volume-one are `verified`, so their claims did
  not force any doc's status down on their own.
