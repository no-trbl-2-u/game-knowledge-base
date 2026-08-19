# SomberSoft doctrine sweeper

Use when T asks The Judge to run the doctrine sweeper over recent SomberSoft reports.

## Procedure

1. Read the actual central ledger first. If `/root/Workspace/SOMBERSOFT_COMMAND_LEDGER.md` is requested but absent, use `/root/Workspace/SomberSoft/SOMBERSOFT_COMMAND_LEDGER.md` and record the path mismatch in the report.
2. Inspect the prior 7 days of:
   - `/root/Workspace/reports/roundtable/YYYY-MM-DD.md`
   - `/root/Workspace/reports/axiomancer-playthrough/YYYY-MM-DD.md`
   - `/root/Workspace/reports/alignment/YYYY-MM-DD.md` where present
   - the prior doctrine sweeper report if present.
3. Extract only repeated judgments, recurring failures, settled decisions, and workflow rules. Do not promote one-off observations into law.
4. Patch the central ledger only for clearly settled doctrine. Label unresolved items as proposed doctrine or open questions.
5. For repo-local doctrine, inspect the obvious entrypoints first (`AGENTS.md`, `agents.md`, README, relevant docs). Make small safe doc changes only when the target is obvious and the rule is settled.
6. Write `/root/Workspace/reports/doctrine-sweeper/$(date -u +%F).md` with:
   - sources read
   - repeated judgments/failures
   - settled doctrine added
   - proposed doctrine / uncertain items
   - repo-local followups
   - one highest-priority question for T.
7. Verify with `git diff --check`; commit and push safe documentation changes on clean current main. Do not create, modify, or schedule cron jobs. Do not deploy or publish.

## Pitfalls

- Current scheduled reports live under `/root/Workspace/reports/*`; older/central artifacts may live under `/root/Workspace/SomberSoft/reports/*`. State which lane was inspected.
- The root ledger path `/root/Workspace/SOMBERSOFT_COMMAND_LEDGER.md` may be absent; the actual central ledger has lived at `/root/Workspace/SomberSoft/SOMBERSOFT_COMMAND_LEDGER.md`.
- A green command gate is not necessarily design-green. Promote doctrine only when reports repeat the same judgment across days.
