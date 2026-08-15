# SomberSoft release automation GitHub Actions

Use this reference when T asks to add or assess GitHub Actions for package publishing, Expo/EAS preview builds, or other release/deploy automation across SomberSoft repos.

## Authority boundary

Release automation is infrastructure work. Manual preview/internal actions are acceptable under T's standing autonomy when he says yes, but keep these separate unless explicitly approved:

- live npm package publication
- production deploys
- public releases
- app-store submission
- credential/secret mutation
- billing/resource-affecting cloud builds

Default to `workflow_dispatch` first. Add push/tag/PR automatic triggers only after the manual action has proved safe.

## Mechanics npm publish workflow pattern

For `axiomancer-mechanics`, a safe npm publish workflow should be manual and boring:

- file: `.github/workflows/publish.yml`
- trigger: `workflow_dispatch` only
- inputs:
  - `dry_run` boolean, default `true`
  - optional dist-tag string, default empty
- permissions:
  - `contents: read`
  - `id-token: write` for npm provenance
- steps:
  1. `actions/checkout@v4`
  2. `actions/setup-node@v4` with Node 22, `registry-url: https://registry.npmjs.org`, npm cache
  3. `npm ci`
  4. `npm run verify`
  5. `npm run deploy:check`
  6. dry run: `npm publish --dry-run --provenance --access public`
  7. live run: require `secrets.NPM_TOKEN` as `NODE_AUTH_TOKEN`, then `npm publish --provenance --access public`

Do not bump versions or push tags inside this action. Let the repo version commit/tag carry release intent. The action publishes the named artifact and verifies registry truth after a live publish when requested.

## Mobile Expo/EAS preview build workflow pattern

For `axiomancer-mobile`, a safe preview workflow should be manual and internal:

- file: `.github/workflows/preview-build.yml`
- trigger: `workflow_dispatch` only
- inputs:
  - `platform`: choice `android`, `ios`, `all`, default `android`
  - `profile`: string, default `preview`
  - `run_visual_verify`: boolean, default `false`
- permissions: `contents: read`
- steps:
  1. checkout
  2. setup Node 22 with npm cache
  3. `npm ci`
  4. `npm run verify`
  5. optionally `npm run verify:visual` only when asked; do not make visual smoke default for cloud build dispatch
  6. run `npx eas-cli@latest build --platform <input> --profile <input> --non-interactive`
  7. pass `EXPO_TOKEN` from GitHub secrets only to the EAS step

Set concurrency to avoid overlapping workflow runners, but do not cancel in-progress EAS cloud builds.

## Verification pattern

After adding workflows:

1. Run `git diff --check`.
2. Run a lightweight structural sanity check for required keys and commands.
3. Run local gates that the workflow will enforce (`npm run verify`, `npm run deploy:check` where relevant).
4. Commit and push.
5. Verify GitHub sees the workflow, e.g. `gh workflow view publish.yml --yaml` or `gh workflow view preview-build.yml --yaml`.
6. Do not trigger live publish/build unless T explicitly asks.

## Pitfalls

- `gh workflow view --json` may not exist on older `gh`; use plain `gh workflow view <file>` and `--yaml`.
- A local secret/env var being present is not proof that the GitHub repository secret exists. Roundtable or release prep should verify repo secret readiness without printing values.
- Mobile `deploy:check` may remain a stub even after adding EAS workflow. Treat it as a local contract gate, not as proof that a cloud build ran.
- Keep `verify:visual` opt-in for EAS preview builds because visual smoke can be slow/noisy and is not always required before internal cloud builds.
