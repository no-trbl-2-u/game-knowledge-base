# Axiomancer manual playthrough triage notes

Use when T pauses agenda work to report a manual Axiomancer Mobile playthrough, screenshots, or field findings.

## Operating rule

Manual playthrough evidence outranks the standing agenda while it is live. Pause agenda sequencing, capture findings as evidence, and re-rank engineering targets by what corrupted the playthrough.

Screenshots can serve two roles:

- **reference screenshots** for approved visual baselines under `axiomancer-mobile/test-artifacts/reference-screenshots/`, named by route/state in canonical order;
- **manual evidence screenshots** attached to findings, balance concerns, and reproduction notes.

Do not block mechanics fixes on screenshot baseline work. Combat recurrence, token, skill, and balance defects can proceed in parallel.

## Findings pattern from first manual playthrough

When similar evidence appears, treat it as a cluster rather than isolated nits:

1. **Combat recurrence is victory-path-specific**
   - Losing a fight and restarting can permit another fight.
   - Friendship victory and regular victory can suppress later combat.
   - Investigate victory resolution, aftermath, encounter-completion state, active combat/prelude/event gates, and any global exhausted flags.

2. **Difficulty must be tested at both ends**
   - Add deterministic start-game lane: level 1, easy enemies, beginning-of-game balance.
   - Add deterministic endgame lane: max level, max stats, all items and skills unlocked.
   - Scaling may be mathematically valid but experientially cruel; prove onboarding separately from endgame stress.

3. **Skill availability should be learned-first**
   - Once a skill is learned, it should be available to the player.
   - Combat UI should filter by currently usable skills/resources, not by whether a learned skill is manually equipped, unless a deliberate loadout/deck system is being designed.

4. **Token resource accumulation is core evidence**
   - If skill-casting tokens do not accumulate, combat-skill evidence is invalid.
   - Treat token accumulation as a blocking mechanics bug for combat readability.

5. **Combat action UI must preserve grid rhythm**
   - Disabled or unavailable `ITEM` must remain a normal action card or disappear.
   - It must not render as a tall skinny column that breaks the modal layout.

6. **SELF/level-up evidence to watch**
   - Derived stat displays like `5515` suggest missing separators/column layout failure.
   - Save/test labels wrapping into fragments (e.g. `He/art/Save`) are visual defects.
   - Level-up cross-stat effects must be reflected clearly in committed character-sheet state.

## Reporting shape

Keep the field report compact:

- **Observed:** what T saw, preferably path-specific.
- **Likely class:** mechanics, balance, UI layout, progression, or evidence harness.
- **Priority:** whether it corrupts future playtest evidence.
- **Next action:** repo/area to inspect or jot/phase to file.

## Pitfalls

- Do not continue a stale agenda while T is actively supplying playthrough evidence.
- Do not demote balance complaints to taste when screenshots/numbers show impossible onboarding.
- Do not treat visual baseline placement as prerequisite for mechanics debugging.
- Do not overclaim root cause from screenshots alone; use them to prioritize inspection and regression tests.
