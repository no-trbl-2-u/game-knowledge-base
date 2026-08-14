# SomberSoft production ritual bootstrap

Use this reference when SomberSoft has doctrine and scheduled rituals but the production evidence rails are not yet proven.

## Trigger

- T says to move from persona/doctrine/scaffold into production.
- A numbered campaign item refers to standing up operating machinery, recurring reports, cron rituals, or evidence flow.
- Cron jobs exist, but report directories or first artifacts do not.

## Pattern

1. Confirm current repo worktrees are clean before opening a new front.
2. Inspect the central ledger for named recurring rituals and expected report paths.
3. Create durable report rails before trusting scheduled jobs:
   - `~/Workspace/reports/README.md`
   - `~/Workspace/reports/axiomancer-playthrough/`
   - `~/Workspace/reports/roundtable/`
   - `~/Workspace/reports/alignment/`
   - `~/Workspace/reports/doctrine-sweeper/`
   - `~/Workspace/reports/strategy-court/`
4. Write the README as an evidence standard, not mere ceremony. Each report should state date/ritual, inputs inspected, findings, actions, artifacts/commands, and known gaps.
5. If no natural scheduled report has landed yet, write a bootstrap report in the appropriate lane documenting the state and the gap honestly.
6. Update `SOMBERSOFT_COMMAND_LEDGER.md` when it has empty operational sections such as `Next Shippable Artifacts`; name concrete next artifacts, not vague aspirations.
7. Verify cron registry state. If manually triggering a job, distinguish `queued` from `completed`; do not claim autonomous production until `last_run_at` or delivered output proves it.
8. If `~/Workspace` is not versioned, state plainly that central doctrine/report changes are saved on disk but not committed.

## Pitfalls

- Do not mistake scheduled rituals for production evidence. A job scheduled but never run is an armed weapon, not a wound.
- Do not bury uncertainty after context compaction. If a numbered item is missing, recover from quoted user context and act on the now-clear target.
- Do not create more persona law when T asks for production. The output should be files, directories, cron verification, reports, and ledger updates.
