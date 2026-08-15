# Axiomancer Mobile repo-local skills

Use this reference when T names an Axiomancer Mobile slash/skill command that is not a global Hermes skill, e.g. `jot`, `iterate`, `march`, `oversight`, `critique`, or `triage`.

## Rule

Repo-local skill files are authoritative for that repository. Do not assume the global Hermes skill library contains them. Inspect the file under:

`/root/Workspace/axiomancer-both/axiomancer-mobile/skills/<skill>.md`

Then follow its contract exactly.

## `/jot` pattern

Source file: `/root/Workspace/axiomancer-both/axiomancer-mobile/skills/jot.md`

Purpose: quick user-source capture into `plan/CRITIQUE.md` so `/iterate` or `/march` can drain it later.

Procedure:

1. In the mobile repo, run `git pull --ff-only` before appending.
2. Parse any jot flags if present; if T gives plain text, use defaults:
   - severity: `med` unless impact is plainly high
   - url: `general` or a reasonable route such as `/march`
   - auth_state: `anonymous`
   - category: infer loosely, usually `observation`
3. Append one row to the `## Pending` block of `plan/CRITIQUE.md` before `## Done`.
4. Row shape:

```markdown
### [<SEVERITY>] <url> — <summary>
- pass: user-jot (commit `<pre-append HEAD>`)
- viewport: unspecified
- auth_state: anonymous
- category: <category>
- observation: <T's text verbatim>
- evidence: user-spotted at <UTC ISO timestamp>
- suggested_fix: [user has not specified — iterate to determine]
- source: user
```

5. Commit only `plan/CRITIQUE.md`:

```bash
git add plan/CRITIQUE.md
git commit -m "jot: <summary>"
git push
```

6. Do not run verify gates, deploy gates, code edits, or implementation work. `/jot` records the finding; it does not fix it.

## Pitfalls

- If the user says "use the jot skill," do not merely summarize the issue. Actually append the row and commit/push.
- Do not ask follow-up questions; `/jot` is decide-and-ship.
- Do not use `Co-Authored-By:` or emojis.
- If operating from a feature branch, push that current branch unless the repo-local skill explicitly says otherwise; preserve the active worktree's branch context.
