# SomberSoft GitHub branch and PR policy

## Trigger

Use this reference for SomberSoft/Axiomancer repository work involving commits, branches, pull requests, or repository templates.

## Standing law from T

- Default path: push directly to `main` only when T has not asked for a branch and the work is safe for direct mainline delivery.
- If T says anything like "make a branch", create the branch, push it, and open a PR yourself.
- If work is sensitive or needs T's sign-off, use a branch and PR even if T did not explicitly ask.
- Ask before destructive, costly, secret-bearing, public-production, or major-direction actions.
- Do not stop at "branch pushed" when a PR was implied. The deliverable includes an opened PR.

## PR description standard

Every branch PR should include:

- Summary: concise purpose and scope.
- What changed: bullet list of material edits.
- Why: source of request, doctrine, issue, audit, or design need.
- Important code/doc blocks: include relevant snippets when they help review.
- Verification: exact commands run and outcomes, or state when no automated checks apply.
- Callouts: risk, blockers, open questions, future work, screenshots/media when relevant.
- Safety/secrets: state that no secrets or production side effects were introduced when applicable.

## Pull request templates across repos

For SomberSoft repos, prefer `.github/PULL_REQUEST_TEMPLATE.md` and tailor it to the repo's role:

- Mobile: UI/presenter/state wiring, visual evidence, screenshots, typecheck/Jest/Expo export gates, accessibility/copy callouts.
- Mechanics: deterministic engine tests, CLI evidence, RNG/seed notes, package export/public API checks, balance/tuning evidence.
- SomberSoft Memory: doctrine/source-of-truth impact, affected repos/profiles, CDR/ADR links, secret hygiene.

## Pitfall

If a commit was already pushed directly to `main`, there may be no remaining branch diff to PR. Say so plainly, then apply the branch+PR rule going forward rather than inventing a retroactive PR.