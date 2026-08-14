# SomberSoft DevLog Workday Maps

Use this pattern when T asks for a visual map, devlog, diagram, or durable recap of a big change day/week across SomberSoft and Axiomancer repos.

## Durable location

- Central repo: `~/Workspace/SomberSoft`
- DevLog corpus: `~/Workspace/SomberSoft/DevLog/`
- Each entry should normally include:
  - standalone HTML: `YYYY-MM-DD-workday-map.html`
  - rendered screenshot: `YYYY-MM-DD-workday-map.png`
  - source data sidecar: `YYYY-MM-DD-workday-map.json`
  - index link: `DevLog/index.html`
  - optional generator/probe script if useful for repeatability

## Evidence pattern

1. Load `github-workflows`, `creative-web-visual-design`, and `sombersoft-project-partner`.
2. Establish the date with a real date command; do not infer it from memory.
3. Fetch relevant repos before inspecting commits.
4. Inspect at least:
   - `~/Workspace/SomberSoft`
   - `~/Workspace/axiomancer-both/axiomancer-mechanics`
   - `~/Workspace/axiomancer-both/axiomancer-mobile`
5. Use `git log --all --since='<date> 00:00:00 +0000' --name-status --numstat` or equivalent so remote-only commits are included even if a local checkout is behind.
6. Preserve repo status in the sidecar data; if a repo is behind or has unrelated untracked files, report it plainly and do not disturb unrelated files.
7. Group commits by strategic meaning, not only by filename: planning/Nexus, docs/contracts, tests/evidence, API cleanup, mobile UX/comprehension, playtest repair, etc.
8. Generate a standalone HTML artifact with embedded CSS and no network dependencies.
9. Render the HTML and capture a PNG screenshot with Playwright/browser tooling before claiming success.
10. Commit and push only the DevLog artifacts on clean SomberSoft `main`, leaving unrelated untracked files untouched.

## Visual shape

A good DevLog page includes:

- header naming the date and scope
- top metric cards: commits, unique files, additions, deletions
- per-repo panels: status, commit count, file count, category pills
- strategic change map: hand-synthesized nodes that explain the campaign arc
- chronological commit trail with hashes, subjects, file preview, and category
- category pressure bars and most-touched files
- expandable raw commit ledger

## Pitfalls

- Do not use only the local branch log when a repo may be behind `origin/main`; use `--all` after fetch or explicitly inspect remote refs.
- Do not leave DevLog outputs in `/tmp`; this is a central SomberSoft corpus.
- Do not claim the HTML rendered until a screenshot exists.
- Do not commit unrelated artifact directories or existing untracked files discovered in `~/Workspace/SomberSoft`.
- Do not save the workday narrative as memory. Only the durable DevLog convention belongs in memory; the specific commit counts and hashes belong in the artifact.