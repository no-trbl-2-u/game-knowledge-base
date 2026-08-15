# Axiomancer cross-repo mechanics release coordination

Use when T asks to publish a new `axiomancer-mechanics` version so `axiomancer-mobile` can catch up, or when engine contract changes must be made legible to mobile workers.

## Release doctrine

- Treat the release as a cross-repo contract event, not only an npm/package bump.
- Establish mainline truth first in both repos: fetch, checkout `main`, pull/rebase `origin/main`, inspect status and recent commits.
- Read mechanics `RELEASING.md`, package metadata, `CHANGELOG.md`, `RELEASES.md`, build-plan/phase logs, and mobile README/package/docs before acting.
- Run the mechanics release verification gates before publishing; do not report a release as published until registry state confirms it.
- If npm/auth is missing, record the fix path (`npm adduser` or token auth, then `npm publish`) but do not fossilize the current machine's auth state as a durable tool limitation.

## Safe publish sequence

1. Confirm the intended version and latest registry version (`npm view axiomancer-mechanics version --json`). If the registry is already ahead of the repo's `package.json`, do not republish an existing version or blindly bump one step from the repo value; choose the next unpublished semver and record the skipped/local gap in the release notes.
2. Bump mechanics `package.json` and lockfile if needed.
3. Update mechanics release logs with the version, phases since the prior release, exported/removed APIs, behavioral contract changes, and verification evidence.
4. Run mechanics verification (`npm run verify`, release/deploy check, package dry-run as supported by repo docs).
5. Commit the release files and create an annotated version tag locally. If the repo's deploy check compares the latest git tag to the top tagged changelog heading, rerun it after tag creation before publishing; otherwise the pre-tag check may not prove changelog/tag consistency.
6. Attempt `npm publish` only after verification passes and auth is available.
7. Confirm registry truth after publish with both `npm view axiomancer-mechanics version --json` and, when propagation may lag, `npm view axiomancer-mechanics@<version> version --json`. Retry briefly before declaring a block; npm may show the prior `latest` or E404 for the explicit new version immediately after successful publish.
8. Only push mechanics `main` and the release tag after the registry confirms the release, unless T explicitly wants a prepared-but-unpublished release commit pushed.
9. Create the GitHub release after `main` and the tag are pushed, then final-check npm dist-tags and remote tag truth.

## Documentation as package surface

When the release is driven by a new mechanic/minigame design, treat docs as part of the shipped engine contract, not as incidental repo notes. Before publishing:

- add or update the public mechanics docs under `docs/` and link them from `README.md` where consumers will find them;
- include API/contract docs when mobile must integrate the mechanic, not only PRD/TDD/BDD prose;
- run `npm pack --dry-run` or the repo's equivalent and confirm the new docs are actually included in the tarball;
- search release logs for the new mechanic name so `CHANGELOG.md` and `RELEASES.md` both tell downstream workers what changed.

## Mobile catch-up record

When T asks to publish mechanics so he can manually build mobile, or says to publish a new minor version and then bump mobile, do not stop at the npm release. After npm registry truth confirms the new version, bump `axiomancer-mobile` to the new `axiomancer-mechanics` range, update the lockfile, run mobile verification, and commit/push the mobile catch-up unless T only asked for a prepared handoff.

Create or update a mobile doc such as `docs/mechanics-upgrade-<version>.md` or `docs/engine-upgrade-<old>-to-<new>.md` and link it from the mobile README or AI workflow section. Include:

- status: published, prepared, or blocked;
- upstream version and prior version;
- major mechanics changes by phase/area;
- removed/replaced imports;
- new engine helpers mobile should use instead of local math;
- new UI consequences/payloads to surface;
- required typecheck, visual smoke, and playthrough evidence after the bump.

When T asks to “promote a phase for mobile to pick it up,” do not silently perform the mobile dependency migration unless the wording or prior context calls for actual implementation. The safe handoff shape is: create a worker-ready `plan/phases/phase_<N>_<slug>.md`, add the pending row to `plan/steps/01_build_plan.md`, link the upgrade guide from README, run `git diff --check`, then commit and push the queue/docs change. The actual `npm install axiomancer-mechanics@<version>` belongs inside the promoted phase unless T asked to both promote and execute it.

For mobile upgrade docs, preserve engine-owned doctrine explicitly and use T's current terminology. For current combat/resource release language, say **Stance and Vitae**: mobile displays mechanics-emitted stance/resource state, affordability, actions, and reports; mobile must not locally simulate stance/resource math, affordability, action resolution, or report outcomes. Do not reflexively frame a current release as “Befriend/mercy” unless the actual changed contract is specifically the Befriend/mercy surface.

If the mechanics release changes engine-sourced payload values, stale mobile presenter tests may fail even when UI code is correct. Fix the expectation to match the published mechanics payload only after confirming the value is an intentional engine contract change, not a local presentation bug.

For `verify:visual`, separate build/runtime truth from screenshot judgment: a successful export with **zero console errors** and pixel diffs is not the same as an app failure. Preserve diffs for T's manual inspection unless he has explicitly approved the new screenshots; do not run `baseline:approve` merely to make the gate green.

If T corrects release wording after publication, fix every durable surface that downstream workers read: mechanics `CHANGELOG.md`/`RELEASES.md`, mobile upgrade docs/phase briefs/build-plan rows/README pointers, and the already-published GitHub release body (`gh release edit <tag> --notes-file ...`). Verify with targeted searches for the wrong phrases and `git diff --check`, then commit/push the docs correction.

For Axiomancer `0.14.0`, the useful pattern was to distinguish learned/unlocked skills (`knownSkills` plus engine availability/affordability) from legacy `equippedSkills`, call out `previewStatAllocation`, and document new mercy/consequence surfaces such as region consequences and faction reputation shifts.

## Reporting pitfall

Do not say "published" merely because the release commit and tag exist locally. Use precise status language:

- **published**: npm registry confirms the new version;
- **prepared**: commit/tag/logs are ready but registry still shows the old version;
- **blocked**: publish failed, with the next auth/setup step named.

If publish blocks, update central ledger and mobile docs with prepared/blocked language so downstream workers do not chase a package version that npm cannot install yet.