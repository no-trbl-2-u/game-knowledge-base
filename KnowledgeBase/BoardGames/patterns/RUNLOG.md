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
- 2026-08-30: no pass ran between 2026-07-19 and this date (six-week gap;
  see this line as the catch-up for that missed cadence). Scoped log run
  from 2026-07-19 to now: arydia-the-paths-we-dare-tread,
  battlestar-galactica-the-board-game, betrayal-legacy,
  bloodborne-the-card-game, cthulhu-death-may-die, dark-pact,
  dead-of-winter-a-crossroads-game, dead-of-winter-the-long-night,
  descent-journeys-in-the-dark-second-edition, dominion,
  earthborne-rangers, elder-sign, forgotten-waters, horrified,
  nemesis-lockdown, nemesis, onirim-second-edition, scythe,
  shadows-over-camelot, star-wars-imperial-assault,
  tainted-grail-the-fall-of-avalon, the-crew, the-thing-the-boardgame,
  unfathomable changed; ark-nova, gi-joe-deck-building-game, mage-knight,
  slay-the-spire-the-board-game, spirit-island, and too-many-bones also
  had commits in the window but on inspection carried only punctuation,
  schema, or rules-doc fixes with no new reception content, so they
  contributed nothing new here. Battlestar Galactica, The Thing: The
  Boardgame, and Unfathomable are scout dossiers with `better_if_labels: []`
  and no reception doc yet, so they contributed nothing either. 21 pattern
  doc(s) updated (onboarding, strategic-depth, turn-pacing,
  player-interaction, randomness, solo-coop-automation, accessibility,
  campaign-progression, expansion-bloat, rules-ambiguity, setup-teardown,
  balance-faction-asymmetry, combat-resolution, downtime, component-clarity,
  cooperative-game, solo-solitaire-game, variable-player-powers,
  campaign-game, dice-rolling, deck-building — deck-building's Dominion row
  closes the market-deckbuilder coverage gap flagged 2026-07-19, and
  cooperative-game's The Crew row closes that pass's restricted-communication
  co-op gap), 2 pattern doc(s) created (semi-cooperative-game,
  hidden-information — both newly cross the 5-game evidence threshold this
  pass; action-points, grid-movement, modular-board, resource-management,
  set-collection, and simultaneous-action-selection also now have 5+ tagged
  games but were deliberately deferred again because the tagged games' own
  better-if docs still don't discuss those mechanics distinctly, only
  co-occurring themes), 3 wishlist append(s). Betrayal Legacy, Bloodborne,
  Dead of Winter (both editions), Forgotten Waters, Nemesis: Lockdown, and
  Shadows over Camelot all remain `needs_followup` on their reception docs;
  every pattern-doc row citing any of them is flagged accordingly, and eight
  previously-verified pattern docs (turn-pacing, randomness, player-interaction,
  expansion-bloat, component-clarity, cooperative-game, rules-ambiguity, downtime)
  moved to status: draft this pass because they picked up at least one
  needs_followup-sourced row.
