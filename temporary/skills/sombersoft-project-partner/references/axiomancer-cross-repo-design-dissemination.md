# Axiomancer cross-repo design dissemination

Use when T asks to take a design judgment, specialist finding, playtest report, or boardroom conclusion and "disseminate" it to Axiomancer repos.

## Pattern

0. If T explicitly asks for the exact plan before action, stop before repo writes: state the intended repository, branch discipline, files likely to change, verification, and commit/push behavior in a short numbered list, then wait for his go-ahead. After he approves, act without re-litigating the plan.
1. Treat dissemination as repo work, not a chat summary.
2. Refresh the loaded project context first when not already fresh: both repo READMEs and relevant domain docs/specs.
3. Choose one durable doc per repo:
   - Mechanics: system truth, formulas, enemy stats, resolver events, simulation evidence, balance doctrine.
   - Mobile: UX obligations, presenter/view-model expectations, screen copy, player comprehension, visual/log priorities.
4. Prefer new focused docs when the finding is a standing doctrine, then link them from:
   - the repo README documentation/workflow section
   - the relevant domain doc (`docs/combat.md`, `docs/enemy.md`, etc.)
   - quickstart docs when developers are likely to enter there
5. Do not hide the conclusion only in a plan, transcript, or transient report.
6. Verify with `git diff --check`, read back new docs, and note any pre-existing unrelated modified files.
7. Before finalizing, audit each affected repo's dirty state and either commit legitimate doc/doctrine changes or explicitly leave them with a reason. Prefer one clear commit per repo when dissemination spans mechanics and mobile.
8. If a cross-project doctrine file lives directly under `~/Workspace` and the workspace root is not a git repo, state that it is saved but unversioned. Do not pretend it was committed inside either child repo.

## Good shape

For an early-combat finding:

- `axiomancer-mechanics/docs/early-combat-balance.md`
  - stance math / combat doctrine / enemy tuning / proof requirements
  - linked from mechanics README, `docs/combat.md`, and quickstart combat docs
- `axiomancer-mobile/docs/early-combat-ux.md`
  - stance preview / resolve explanation / battle-log priority / enemy panel obligations
  - linked from mobile README and `docs/combat.md`

For a central CDR or SomberSoft decision copied into a repo:

- Preserve the full decision record in a focused repo-local doctrine file, usually `docs/<system>.md` for mechanics-owned rules truth.
- Add a short repo-local preamble that says this is the repository copy of the central decision and names the repo's ownership boundary.
- Link it from the README documentation list and the relevant domain doc (`docs/world.md` for MapEvents/Hazard doctrine, `docs/combat.md` for combat doctrine, etc.).
- Verify by searching for sentinel phrases from the decision, not merely by trusting that the file was written: core rule, lifecycle rule, scoring rule, named content endpoint, and a pitfall/cap.

## Pitfalls

- Do not only update one repo when the finding has both rules and UX consequences.
- Do not write broad implementation promises into specs unless T asked to implement; mark doctrine as guidance when it is not a completed feature.
- Do not overwrite unrelated user changes; report them separately.
