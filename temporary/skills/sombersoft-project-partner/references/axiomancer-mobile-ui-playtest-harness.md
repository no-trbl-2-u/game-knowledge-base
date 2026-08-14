# Axiomancer Mobile UI playtest harness notes

Use when auditing or adapting automated UI playthrough workflows in `~/Workspace/axiomancer-both/axiomancer-mobile`.

## Existing harnesses

- `skills/playtest.md` — narrow live-drive regression sentinel. Canonical route: WILDS exploration → travel to encounter → encounter modal → FIGHT → stance → ATTACK → NEXT ROUND → console check. Findings go to `plan/AUDIT.md`.
- `skills/deep-playtest.md` — broad first-time-player experience audit. Uses `.claude/agents/playtester.md`, walks golden/failure/tab/edge paths, writes `plan/PLAYTEST_REPORT.md`, then `/resolve-playtest` triages.
- `scripts/smoke-screens.mjs` / `npm run verify:visual` — visual route screenshot baseline diff gate. Adjacent to playthrough, not a gameplay walk. It now injects deterministic minigame seeds through `scripts/minigame-seed-injector.mjs` before capture; do not add random minigame routes without using that injector or an equivalent explicit seed path.
- `scripts/minigame-seed-injector.mjs` — browser harness seed contract for Hazard, Gathering, Rest, Cache, and Quest. It sets unified `globalThis.__AXM_MINIGAME_SEEDS__` plus legacy globals for compatibility.
- `scripts/smoke-bundler.mjs` / `npm run smoke:bundler` — Expo web export smoke, useful prerequisite before browser driving.
- `references/kid-encounter-playtest-learning.md` — The Kid's iterative encounter/minigame learning protocol: five sequential subagent runs per encounter type or named node, notes chained forward, stable doctrine written under `references/kid-encounter-agents/`.

## Hermes adaptation pattern

Claude Code harness docs assume `mcp__playwright__*` tools. In Hermes, adapt the same procedure to native browser tools instead of treating the MCP dependency as a blocker:

1. Start Expo web as a tracked background process, preferably with PTY so Metro output appears:
   ```bash
   CI=1 EXPO_NO_TELEMETRY=1 npx expo start --web --port 18081 --host localhost
   ```
2. Wait for output like `Waiting on http://localhost:18081`.
3. Navigate Hermes browser to `http://127.0.0.1:18081/`.
4. Use `browser_snapshot`, `browser_click`, `browser_console`, and screenshots/vision as the equivalents of Claude Playwright MCP calls.
5. Kill only the server process the agent started; leave user-started servers alone.

## SELF/dev-menu encounter selection

For encounter/minigame playthroughs, prefer the in-app developer trigger before hand-walking the map when the dev menu is available:

1. Open the app and go to `SELF`.
2. Expand `DEV MENU`.
3. Use `DEBUG · TRIGGER ENCOUNTER` to fire the selected encounter category: `COMBAT`, `BOSS`, `HAZARD`, `REST`, `GATHER`, `TREASURE`, or `QUEST`.
4. For a named node rather than a broad category, use WILDS navigation to the exact node if the dev menu only triggers by type.
5. Record the exact route, button, console state, and screenshots.

If a file already exists under `references/kid-encounter-agents/` for the selected encounter, use that file as the subagent's base play doctrine before the run-specific lens and accumulated notes.

## Pitfalls found

- Expo rejects `--host 0.0.0.0`; valid host values are `lan`, `tunnel`, or `localhost`.
- Starting Expo without PTY may leave useful Metro readiness output buffered/invisible. Prefer PTY for long-lived Metro sessions.
- `npm run verify:visual` may exit `2` on a repo without committed baseline PNGs; this is a missing-baseline signal, not necessarily app failure.
- A static-export smoke server must handle directory routes like `/character` by serving `character/index.html`; otherwise route screenshots can show `EISDIR: illegal operation on a directory, read`.
- Visual-smoke screenshots in `screenshots/current` and exports in `.smoke-dist` are generated artifacts; clean them unless intentionally approving baselines.

## Verification targets

Useful quick gates before claiming the harness works:

```bash
npm test -- --runTestsByPath \
  scripts/__tests__/playtest-skill.test.ts \
  scripts/__tests__/smoke-screens.test.ts \
  scripts/__tests__/smoke-bundler.test.ts \
  --runInBand

npm run smoke:bundler
```

Then perform at least one live browser navigation and console check against the running Expo web app.