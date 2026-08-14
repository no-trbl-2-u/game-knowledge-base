# SomberSoft memory/Nexus HTML review pattern

Use when T asks for a broad retrospective over memory files, Nexus files, doctrine, reports, or "what have we learned / what works / what doesn't / what do we need" and wants a durable artifact.

## Pattern

1. Treat the request as evidence synthesis, not chat summary.
2. Inspect three layers separately:
   - Hermes layer: `~/.hermes/memories/`, relevant SomberSoft skills/references, cron jobs, recent cron outputs.
   - Central SomberSoft layer: `~/Workspace/SomberSoft/SOMBERSOFT_COMMAND_LEDGER.md`, `VISION.md`, `decisions/`, `HERMES_UPGRADES.md`, `reports/`, `sombersoft-phases/`.
   - Repo-local Nexus layer: Axiomancer `plan/`, `NEEDS_ATTENTION.md`, `AGENTS.md`, `CLAUDE.md`, ADRs, docs/design files in mechanics and mobile.
3. For large corpora, parallelize read-only audits by layer. Require each worker to return concise findings with source paths and no edits.
4. Synthesize into class-level verdicts:
   - What we learned.
   - What works.
   - What does not work.
   - What has not been tried/proven.
   - What could be better.
   - What is needed next.
5. Produce a linked HTML artifact under `~/Workspace/SomberSoft/artifacts/<slug-date>/` with at least:
   - `index.html` — executive verdict.
   - `findings.html` — detailed findings.
   - `sources.html` — source map and audit limits.
   - `styles.css` — self-contained styling.
6. Verify links programmatically with an HTML parser and visually inspect the rendered `index.html` in browser when browser tools are available.
7. Package the folder as a `.zip` using Python `zipfile` if the system `zip` binary is absent. Report the archive path and SHA256.

## Judgment rules

- Do not claim fresh product runtime truth from a docs/memory audit. Label it as synthesis unless gates were actually run.
- Prefer source paths over exhaustive quotations.
- Highlight contradictions between memory, central ledger, CDRs/ADRs, cron prompts, and repo-local Nexus state.
- When the result identifies durable doctrine drift or a reusable workflow, patch this skill or a reference rather than leaving it only in the artifact.
