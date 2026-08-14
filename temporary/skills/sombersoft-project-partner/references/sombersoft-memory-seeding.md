# SomberSoft memory seeding

Use when T asks to "get the ball rolling" on Hermes memory systems, seed project memory, reconcile memory/ledger state, or make built-in memory, Holographic memory, session search, and MCP memory graph useful for SomberSoft.

## Autonomy rule

If T asks whether to seed or initialize memory from known SomberSoft doctrine, treat the answer as yes and act. Do not ask for permission when the sources are already explicit SomberSoft doctrine files and the write is non-destructive. Still ask before deleting memory, exposing secrets, changing auth, publishing, production deploys, or major direction changes.

## Source priority

Seed from durable doctrine, not chat scraps:

1. `~/Workspace/VISION.md`
2. `~/Workspace/SOMBERSOFT_COMMAND_LEDGER.md`
3. `~/Workspace/decisions/*.md` CDRs
4. Repo-local `docs/adr/*.md` when the question is repo-specific
5. Recent sessions only for continuity questions or to find the origin of a decision

## Holographic memory pattern

Add compact, class-level durable facts. Good categories:

- `project` for SomberSoft/Axiomancer doctrine, repo layout, decision hierarchy, evidence standards
- `user_pref` for T's operating preferences and authority boundaries

Avoid transient facts: PRs, commits, one-day phase progress, temporary bugs, today's report status.

After seeding, probe likely entities (`SomberSoft`, `Axiomancer`, `T`, `Hermes`, doctrine names) and run contradiction checks when available. Remove duplicates and consolidate overlapping facts rather than letting memory become a junk drawer.

## MCP memory graph pattern

Use the graph for structured relationships, not every small fact. Good initial entities:

- `T` — person
- `SomberSoft` — company
- `Hermes/The Judge` — agent/operator
- `Axiomancer` — project
- doctrine nodes such as `Axiomancer Combat Doctrine`, `Befriend Doctrine`, `SomberSoft Source of Truth`
- workflow nodes such as `SomberSoft Phase Forge`
- organization nodes such as `SomberSoft Specialist Gang`

Good relations:

- `T` founded/commands `SomberSoft`
- `Hermes/The Judge` answers_to `T`
- `Hermes/The Judge` operates_for `SomberSoft`
- `Axiomancer` flagship_project_of `SomberSoft`
- doctrine nodes govern/specialize project or combat doctrine
- workflow nodes structure_work_for `SomberSoft`

Keep graph observations concise and canonical. It should answer entity and relationship questions quickly, not mirror the full ledger.

## Verification

Report what was actually verified:

- memory provider/status
- MCP memory connection/tool discovery if touched
- number of graph entities and relations written or observed
- contradiction probe result, if available
- duplicate cleanup or consolidation performed

## Reporting shape

Keep the final report compact:

- what sources were read
- what durable facts/entities were added
- what was verified
- any blocked or skipped memory layer

Do not produce a long philosophy lecture. Memory work is court record, not sermon.
