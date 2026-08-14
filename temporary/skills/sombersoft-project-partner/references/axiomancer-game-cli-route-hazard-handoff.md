# Axiomancer mechanics: `game.cli` route → Hazard combat handoff

Use this when T asks for mechanics CLI proof that the first map can walk into the new Hazard-pattern combat.

## Durable lesson

Do not treat standalone `npm run combat` as proof of map integration. It proves only the combat subcommand. The required witness is:

```txt
authored map route → resolveMapEvent(encounter) → Hazard combat runner → hazardCombat:* events
```

The current first-level Fishing Village encounter witness is:

```txt
fv-1 → fv-2 → fv-12
```

Expected evidence:

```txt
moveToNode fv-2
resolveMapEvent
moveToNode fv-12
resolveMapEvent kind=encounter enemy=Driftwood Husk
hazardCombat:start
hazardCombat:autoPhase
hazardCombat:end
```

`hazardCombat:mercy` may appear before `hazardCombat:end`; that is valid terminal combat evidence.

## Implementation pattern

1. Keep CLI parsing and I/O in `src/CLI/*`.
2. Export the reusable, mobile-consumable combat logic from mechanics engine/barrel surfaces, not only from a CLI file.
   - Good home: `src/Combat/combat.autoplay.ts` for deterministic non-interactive combat runner.
   - Export through `src/Combat/index.ts` and `src/index.ts`.
3. Add a CLI wrapper/handoff function for route encounters, e.g. `runHazardCombatCliEncounter(...)`, but do not make mobile import prompt/inquirer-heavy code unless explicitly intended.
4. In `src/CLI/game.cli.ts`, replace legacy encounter staging such as `startCombat(result.event.encounter)` / “run npm run combat” with a direct call into the Hazard combat handoff.
5. Add explicit route flags for hermetic CI/Kid evidence:

```bash
npx ts-node src/CLI/game.cli.ts \
  --route fv-2,fv-12 \
  --auto-combat \
  --combat-policy status \
  --combat-seed 42 \
  --combat-max-turns 12 \
  --json-events \
  --state-log /tmp/game-route-hazard.jsonl
```

6. Add/maintain a hermetic e2e test asserting the state-log actions include route movement plus `hazardCombat:start`, `hazardCombat:autoPhase`, and `hazardCombat:end`.
7. Update stale Kid/walkthrough fixtures that still claim `fv-11 → fv-14 → fv-15` is the combat proof route; that route is not sufficient for current Hazard combat integration evidence.

## Verification gates

Run at minimum:

```bash
npm run type-check
npm run type-check:tests
npm run lint
npm run build
npx vitest run src/CLI/e2e/combat.cli.engine.test.ts src/CLI/e2e/game.cli.route-hazard.engine.test.ts
```

Then run the actual route command and read both JSON events and state-log actions. Report exact observed events, not a paraphrase.

## Pitfalls

- Do not call old `GameStore.startCombat` for map encounters and then claim new combat works.
- Do not accept `combat:started`, `combatRound`, `resolveCombatRound`, or stance/defend loops as Hazard-pattern proof.
- Do not overfit the route if map truth changes. If `fv-12` changes, inspect the current map/event registry and update the witness route deliberately.
- If normal mechanics `type-check` is green but `npm run game` / `npm run combat` dies under `ts-node` with TypeScript errors, suspect CLI-only drift first: the mechanics `tsconfig.json` may exclude `src/CLI`, while runtime `ts-node` still typechecks it. Inspect the exact failing lines, compare imported function signatures, patch the stale CLI call site, then verify both the standalone combat command and the authored route handoff command.
- After repairing CLI command behavior, check `docs/cli.md` examples for stale enemy slugs or flags. A green CLI with dead documentation still misleads future Kid/worker evidence.
- If Claude Code CLI cannot authenticate, do not save that as durable tool failure; proceed directly only if the user has already authorized execution, then report the auth blocker plainly.
