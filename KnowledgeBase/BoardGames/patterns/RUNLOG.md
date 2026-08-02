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
- 2026-08-02: ark-nova, arydia-the-paths-we-dare-tread,
  battlestar-galactica-the-board-game, betrayal-legacy, bloodborne-the-card-game,
  cthulhu-death-may-die, dark-pact, dead-of-winter-a-crossroads-game,
  dead-of-winter-the-long-night, descent-journeys-in-the-dark-second-edition,
  forgotten-waters, mage-knight, nemesis, nemesis-lockdown, onirim-second-edition,
  shadows-over-camelot, slay-the-spire-the-board-game, spirit-island,
  star-wars-imperial-assault, tainted-grail-the-fall-of-avalon,
  the-thing-the-boardgame, unfathomable (22 games with commits since the last
  pass; ark-nova/mage-knight/slay-the-spire-the-board-game/spirit-island were
  only touched by cosmetic source-formatting fixes with no claim changes, so
  they contributed nothing new). 18 of the 22 are new to the corpus since the
  2026-07-19 pass (added after the 2026-07-30 "reset scout corpus and adopt
  5-5-5 intake" restructuring); 9 of those 18 have no reception docs yet
  (rules-only records: battlestar-galactica-the-board-game,
  bloodborne-the-card-game, dead-of-winter-a-crossroads-game,
  dead-of-winter-the-long-night, forgotten-waters, nemesis-lockdown,
  shadows-over-camelot, the-thing-the-boardgame, unfathomable) and were folded
  in only as coverage-gap tag-only entries, never as evidence. 0 pattern doc(s)
  created, 21 updated (onboarding, setup-teardown, campaign-progression,
  combat-resolution, component-clarity, randomness, rules-ambiguity,
  scoring-endgame, turn-pacing, strategic-depth, balance-faction-asymmetry,
  player-interaction, downtime, cooperative-game, campaign-game, dice-rolling,
  solo-solitaire-game, deck-building, variable-setup, hand-management,
  variable-player-powers), 3 wishlist append(s) (restricted-communication co-op
  design, a documented overpowered-faction controversy, a hand-limit/cycling
  focused review). component-clarity, randomness, rules-ambiguity,
  scoring-endgame, turn-pacing, and downtime were downgraded from
  status: verified to status: draft because they now cite claims from
  arydia-the-paths-we-dare-tread, betrayal-legacy, and/or
  tainted-grail-the-fall-of-avalon, all still status: needs_followup on their
  reception docs; balance-faction-asymmetry's confidence moved low -> medium
  on genuinely stronger cross-game corroboration (Root, Descent 2E, Star Wars:
  Imperial Assault, Dark Pact). No pattern doc citing a deleted pre-reset game
  was found — the 91 games removed in the 2026-07-30 reset were never cited by
  any existing pattern doc, so no dangling-citation cleanup was needed.
