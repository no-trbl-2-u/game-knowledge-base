# Axiomancer roundtable: release provenance + browser harness drift

Use this when a daily roundtable, release check, or cross-repo contract review exposes disagreement between mechanics main, npm registry, mobile install truth, or browser e2e harness status.

## Release provenance witness

When mechanics/mobile package truth matters, record all four layers before verdict:

1. Local mechanics main truth:
   - `git status --short --branch`
   - `git rev-list --left-right --count HEAD...origin/main`
   - `node -p "require('./package.json').version"`
2. Registry truth:
   - `npm view axiomancer-mechanics version gitHead --json --silent`
3. Git containment of registry `gitHead`:
   - `git cat-file -t <gitHead>`
   - `git branch -a --contains <gitHead>`
4. Mobile consumed truth:
   - `npm ls axiomancer-mechanics --depth=0`
   - compare to `package.json` / lockfile.

Classify carefully:

- Registry version newer than local main, with `gitHead` only on a branch: **release-provenance drift**, not a product or affix/loot failure.
- Main package version behind registry while mobile still consumes main-era package: **release hygiene / catch-up decision**, not automatic mobile breakage.
- `deploy:check` red after `npm run build` due public-surface additions/removals: **contract decision** — either refresh intended public-surface snapshot/docs or restore accidental exports.
- Do not say "published" or "ready to publish" while these layers disagree.

## Browser harness drift witness

For Mobile Phase-137 minigame browser-depth audits:

- If export/static server succeeds but `npm run e2e:encounters` fails waiting for a dev navigation selector such as `self-dev-tools-link`, classify it as **browser harness/dev-link selector drift** unless product route evidence proves otherwise.
- Keep Jest minigame flow/screen tests as valid product witnesses for Quest/Rest/Cache entry/resolution while reporting browser-depth debt separately.
- Absence of sibling scripts (`quest-e2e.mjs`, `rest-e2e.mjs`, `cache-e2e.mjs`) is evidence-depth debt, not product absence.
- The next phase shape is usually: repair dev-link route entry, then add sibling browser scripts that play Quest/Rest/Cache through consequence/claim states.
