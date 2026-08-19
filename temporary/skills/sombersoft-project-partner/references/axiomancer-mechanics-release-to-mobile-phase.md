# Axiomancer mechanics release → mobile phase handoff

Use this reference when a mechanics release has been published and T asks Mobile to "pick it up", "create a phase", or "account for the changes" rather than immediately execute the dependency bump.

## Durable pattern

1. Confirm registry truth for the published mechanics version:
   - `npm view axiomancer-mechanics version --json`
   - `npm view axiomancer-mechanics@<version> version --json`
2. Check Mobile's current dependency range. For pre-1.0 packages, `^0.20.0` will not float to `0.21.0`; it needs an explicit bump.
3. Create a mobile upgrade guide under `docs/engine-upgrade-<from>-to-<to>.md` with:
   - status: published / prepared / blocked;
   - exact upstream and prior versions;
   - engine-owned doctrine mobile must preserve;
   - concrete payload/type drift to drain;
   - focused verification commands and visual/dev-menu evidence requirements.
4. Create a phase brief under `plan/phases/phase_<N>_<slug>.md` with implementation units, out-of-scope guardrails, verify gate, commit template, and Definition of Done.
5. Add a pending row to `plan/steps/01_build_plan.md` near the current queue head.
6. Link the new upgrade guide from the README AI workflow / upgrade section so workers find it cold.
7. Run `git diff --check` and, for docs/planning-only changes in Mobile, `npm run verify` before commit.
8. Commit and immediately push to `origin main`; run `npm run deploy:check` after push per Mobile repo doctrine.

## Encounter-release wording to preserve

For mechanics `0.21.0`, the mobile handoff should name:

- Quest Board / The Boy's Almanac as engine-owned story-board encounter.
- Quest Board micro-game verbs: GATHER, DUEL, SNAG, MARKET, PARLEY, HEARTH, CACHE, OMEN.
- Rest / The Night Watch as an engine-owned rest procedure; include `healFraction` payload drift.
- Loot-cache / The Reliquary as an engine-owned layered cache procedure.
- `kind: 'quest'` MapEvent handling.
- SELF/dev-menu smoke evidence for triggering selected encounters.

Do not let Mobile locally simulate Quest Board, Rest, Loot-cache, reward, affordability, or outcome rules. Mobile presents engine state and legal choices; Mechanics adjudicates.