# SomberSoft release automation GitHub Actions

Use when T asks whether GitHub Actions can publish an Axiomancer mechanics package or produce an Expo/EAS preview build, or approves building those workflows.

## Authority boundary

- Manual preview/internal build workflows are acceptable under T's aggressive autonomy once approved.
- Live npm publishing and Expo/EAS cloud builds consume external authority/quota. Create the workflow, but do not trigger live publish/build unless T explicitly asks.
- Production/store/public release/submission remains separate approval even if preview/internal automation exists.
- Never print or store secret values. Name required secrets only.

## Mechanics npm publish workflow shape

Target repo: `~/Workspace/axiomancer-both/axiomancer-mechanics`.

Recommended file: `.github/workflows/publish.yml`.

Class-level pattern:

- `workflow_dispatch` only.
- Inputs:
  - `dry_run` boolean default `true`.
  - optional dist-tag string, default empty.
- Permissions:
  - `contents: read`
  - `id-token: write` for npm provenance.
- Steps:
  - checkout
  - setup Node 22, `registry-url: https://registry.npmjs.org`, npm cache
  - `npm ci`
  - `npm run verify`
  - `npm run deploy:check`
  - dry-run branch: `npm publish --dry-run --provenance --access public` plus optional `--tag`
  - live branch: require `NPM_TOKEN` via `NODE_AUTH_TOKEN`, then `npm publish --provenance --access public` plus optional `--tag`
- Do not bump version in the workflow.
- Do not push tags in the workflow.
- Concurrency should not cancel in-progress publishes.

## Mobile Expo/EAS preview workflow shape

Target repo: `~/Workspace/axiomancer-both/axiomancer-mobile`.

Recommended file: `.github/workflows/preview-build.yml`.

Class-level pattern:

- `workflow_dispatch` only.
- Inputs:
  - `platform`: choice `android`, `ios`, `all`; default `android`.
  - `profile`: string default `preview`.
  - `run_visual_verify`: boolean default `false`.
- Permissions: `contents: read` only.
- Steps:
  - checkout
  - setup Node 22 with npm cache
  - `npm ci`
  - `npm run verify`
  - optionally `npm run verify:visual` only when requested
  - `npx eas-cli@latest build --platform <input> --profile <input> --non-interactive`
- Required secret: `EXPO_TOKEN`.
- Concurrency should not cancel in-flight EAS cloud builds.
- Do not submit to stores or production.

## Verification pattern

After committing and pushing each workflow:

```bash
git diff --check
npm run verify
npm run deploy:check
gh workflow view publish.yml --yaml      # mechanics
gh workflow view preview-build.yml --yaml # mobile
```

If the local `gh workflow view` variant lacks JSON flags, use the plain view plus `--yaml` instead of treating that as a workflow failure.

## Ledger / roundtable note

If the action is only being discussed, record it in the SomberSoft command ledger for roundtable. If the workflows are actually shipped, update the ledger entry from "decide whether" to "shipped" and leave the next roundtable item as secret-readiness / authority-boundary verification.
