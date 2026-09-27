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
- 2026-09-27: no pass logged here between 2026-07-19 and today despite the
  weekly cadence — a ~10-week gap during which the corpus was reset (`kb:
  reset scout corpus and adopt 5-5-5 intake`, 2026-07-30) and rebuilt from 18
  games to 46 through the new scout/promote pipeline; flagging the gap itself
  per the "missing line means the job never engaged" rule, though the cause
  looks like the pass simply not having been invoked rather than a run that
  produced nothing. Treated as a large catch-up: 27 newly-promoted games had
  no pattern-doc citations at all (arydia-the-paths-we-dare-tread,
  battlestar-galactica-the-board-game, betrayal-legacy, bloodborne-the-card-game,
  cthulhu-death-may-die, dark-pact, dead-of-winter-a-crossroads-game,
  dead-of-winter-the-long-night, descent-journeys-in-the-dark-second-edition,
  dominion, earthborne-rangers, elder-sign, food-chain-magnate,
  forgotten-waters, horrified, nemesis, nemesis-lockdown, onirim-second-edition,
  scythe, shadows-over-camelot, star-wars-imperial-assault,
  tainted-grail-the-fall-of-avalon, terra-mystica, the-crew,
  the-thing-the-boardgame, unfathomable, unmatched-battle-of-legends-volume-one),
  plus 7 older games (arkham-horror-the-card-game, root, mage-knight,
  spirit-island, kingdom-death-monster, heat-pedal-to-the-metal,
  the-quacks-of-quedlinburg) re-checked for mechanics that only just crossed
  the 5-game tag-prevalence threshold. 4 pattern doc(s) created
  (hidden-information, modular-board, semi-cooperative-game,
  simultaneous-action-selection — all explicitly flagged thin-relative-to-tag-
  prevalence in their own Summaries), 25 updated (every existing doc except
  deck-bag-and-pool-building, which had no new evidence), 3 wishlist
  append(s). All 18 better-if labels now have at least one game's evidence
  except kingmaking, still excluded for zero evidence. Deliberately deferred
  (real reviewer commentary too thin even though the tag-prevalence threshold
  is met or close): action-points (2 games with substantive commentary out of
  6 tagged), grid-movement (0 games with substantive commentary despite 7
  tagged — every citation found was background metadata only), and
  resource-management (1 game, weak). the-thing-the-boardgame, unfathomable,
  and battlestar-galactica-the-board-game have no reception docs yet and
  contributed nothing. `node scripts/validate-okf.mjs` green before commit.
