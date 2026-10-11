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
- 2026-10-11: aeons-end, ark-nova, arkham-horror-the-card-game,
  arydia-the-paths-we-dare-tread, betrayal-legacy, bloodborne-the-card-game,
  cthulhu-death-may-die, dark-pact, dead-of-winter-a-crossroads-game,
  dead-of-winter-the-long-night, descent-journeys-in-the-dark-second-edition,
  dominion, dune-imperium, earthborne-rangers, elder-sign, food-chain-magnate,
  forgotten-waters, gi-joe-deck-building-game, gloomhaven,
  heat-pedal-to-the-metal, heroes-of-terrinoth, hoplomachus-remastered,
  horrified, kingdom-death-monster, legendary-encounters-an-alien-deck-building-game,
  mage-knight, marvel-champions-the-card-game, nemesis, nemesis-lockdown,
  oathsworn-into-the-deepwood, onirim-second-edition, root, scythe,
  shadows-over-camelot, slay-the-spire-the-board-game, spirit-island,
  star-wars-imperial-assault, tainted-grail-the-fall-of-avalon, terra-mystica,
  the-crew, the-quacks-of-quedlinburg, too-many-bones, unmatched-battle-of-legends-volume-one
  (all 46 games currently in `games/` — every weekly pass since 2026-07-19 was
  apparently skipped or silently no-op'd without a RUNLOG line, and a
  2026-07-30 corpus reset ("kb: reset scout corpus and adopt 5-5-5 intake")
  replaced the prior 130-game sample with the current 46; 24 of those 46 had
  reception evidence never yet folded into any pattern doc). 1 pattern doc
  created (hidden-information, crossing the 5-games-with-genuine-evidence bar
  for the first time), 26 updated, 3 wishlist append(s). battlestar-galactica-the-board-game,
  the-thing-the-boardgame, and unfathomable have no reception docs yet and
  contributed nothing. modular-board, semi-cooperative-game, grid-movement,
  resource-management, action-points, and set-collection all cross 5+ games by
  frontmatter tag count but still have only 1-4 games of genuine body evidence
  each; deliberately deferred again pending more reception coverage. No stale
  citations to the pre-reset 130-game corpus were found in any existing pattern
  doc. Flagging for whoever reads this next: the missing weekly cadence between
  2026-07-19 and this pass is itself worth investigating — the schedule/trigger
  for this job should be checked, not just the output.
