# Axiomancer playtest evidence pattern

Use this reference when Axiomancer work involves automated gameplay testing, combat balance, friendship routes, or Tobin-readable design judgment.

## Durable technique

- Prefer engine-level deterministic playtest runs before UI automation when judging mechanics.
- Run scenarios with seeded policies so failures are reproducible and policy-specific behavior is visible.
- Reports should expose both outcome rates and design-relevant intermediate evidence, not just pass/fail.

## Useful report metrics

For combat/friendship scenarios, include:

- runs and seeds
- victory / defeat / friendship / timeout rates
- per-policy end-state summaries
- average final player/enemy HP
- damage dealt to player and enemy
- max friendship counter reached
- stance or skill history that gates friendship eligibility

## Resolver/logging pitfall

If friendship eligibility depends on prior stance/skill events, direct playtest runs must preserve the same combat log evidence used by normal resolution. Missing resolver-side log capture can make a route appear impossible even when player-facing combat would satisfy the historical condition.

## Tobin-readable judgment shape

End reports with a design conclusion, not only statistics. Example shape:

- `mixed` and `random` can befriend the enemy, but pure `friendship` cannot.
- Therefore the current peaceful route is `wound, then spare`, not nonviolent patience.
- The next decision is design intent: preserve that theology or alter mechanics so patience is viable.
