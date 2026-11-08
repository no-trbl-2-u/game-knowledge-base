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
- 2026-11-08: no `/synthesize-patterns` pass had run since 2026-07-19 (16
  weeks of backlog), so this pass scoped the log to `git log --since=2026-07-19`
  instead of the usual 8-day window per the procedure's "cross-check against
  RUNLOG" step. 37 games changed since the last pass: aeon-trespass-odyssey*,
  arydia-the-paths-we-dare-tread, battlestar-galactica-the-board-game*,
  betrayal-legacy, bloodborne-the-card-game, brass-birmingham,
  cthulhu-death-may-die, dark-pact, dead-of-winter-a-crossroads-game,
  dead-of-winter-the-long-night, descent-journeys-in-the-dark-second-edition,
  dominion, dune-imperium-uprising, earthborne-rangers, elder-sign,
  food-chain-magnate, forgotten-waters, gaia-project, gloomhaven-jaws-of-the-lion,
  horrified, nemesis, nemesis-lockdown, onirim-second-edition,
  pandemic-legacy-season-1, scythe, seti-search-for-extraterrestrial-intelligence,
  shadows-over-camelot, star-wars-imperial-assault, star-wars-rebellion,
  tainted-grail-the-fall-of-avalon, terra-mystica, terraforming-mars, the-crew,
  the-thing-the-boardgame*, twilight-imperium-fourth-edition, unfathomable*,
  unmatched-battle-of-legends-volume-one, war-of-the-ring (*no reception doc
  exists yet for these three — rules-only entries, nothing to synthesize);
  plus kingdom-death-monster, slay-the-spire-the-board-game, and too-many-bones
  had their reception docs re-touched by other passes but yielded no new
  citable claims beyond what the 2026-07-19 pass already captured. 0 pattern
  doc(s) created, 25 updated (all 17 better-if-label docs, and 8 of the 9
  existing major-mechanic docs — deck-bag-and-pool-building had no new
  tagged games this pass), 3 wishlist append(s). component-clarity,
  randomness, rules-ambiguity, player-interaction, turn-pacing, downtime,
  cooperative-game, and hand-management dropped from status: verified to
  status: draft because this pass's new citations include several
  needs_followup reception docs (arydia, betrayal-legacy,
  bloodborne-the-card-game, dead-of-winter-a-crossroads-game,
  dead-of-winter-the-long-night, forgotten-waters, nemesis-lockdown,
  shadows-over-camelot, tainted-grail-the-fall-of-avalon); no doc was
  flipped the other way, since confirming every existing citation is
  verified was out of scope for this pass. Deliberately deferred: 14
  mechanics now cross the 5-game major-mechanic threshold but have no
  dedicated doc yet (hidden-information 15 games, resource-management 12,
  modular-board 12, semi-cooperative-game 10, grid-movement 8,
  area-movement 8, action-points 7, action-selection 7, set-collection 7,
  simultaneous-action-selection 6, tile-placement 6, income 6,
  card-play-conflict-resolution 6, area-majority-influence 6) — the
  per-game evidence needed already exists in each game's
  reception/better-if.okf.md, so the next pass should create these docs
  without needing new source reading, prioritizing hidden-information and
  modular-board first given their game counts.
