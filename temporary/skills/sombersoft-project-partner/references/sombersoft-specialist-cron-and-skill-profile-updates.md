# SomberSoft specialist cron and skill profile updates

Use when T asks to update a SomberSoft specialist's playtest logic, scheduled ritual, skill references, or backend profile behavior under time pressure.

## Active cron vs profile mirror

Hermes specialist profile files and the currently active scheduler files may both exist. Do not assume editing `/root/.hermes/profiles/<specialist>/cron/jobs.json` changes the job that will fire next in the current Judge session.

When the next scheduled run matters:

1. Patch the active/default scheduler path first when the current session owns the job:
   - `/root/.hermes/cron/jobs.json`
   - active skill library under `/root/.hermes/skills/...`
2. Mirror the same durable logic into the specialist profile when that profile exists:
   - `/root/.hermes/profiles/<specialist>/cron/jobs.json`
   - `/root/.hermes/profiles/<specialist>/skills/...`
   - `/root/.hermes/profiles/<specialist>/SOUL.md` when the behavior is core to the role.
3. Validate every edited cron JSON file with `python3 -m json.tool <path>` or equivalent.
4. Verify the live schedule with `cronjob(action='list')`; the listed `job_id`, prompt preview, next run time, and enabled state are the scheduler truth.
5. Read back or search the active prompt for the new sentinel phrases before declaring the job armed.

## Encounter-learning profile update pattern

For Kid playtest learning, the durable shape is:

- class protocol reference: `references/kid-encounter-playtest-learning.md`
- encounter doctrine directory: `references/kid-encounter-agents/`
- template/index inside that directory (`_TEMPLATE.md`, `README.md`)
- daily playthrough cron reference links to the protocol
- mobile UI harness reference documents SELF → DEV MENU → encounter trigger route
- cron prompt explicitly tells the Kid to use the protocol before or alongside deeper mobile encounter evidence

## Partial Claude handoff pitfall

If Claude Code times out or reaches max turns while making profile/skill updates, treat it as partial implementation, not failure. Inspect created files, finish the missing links yourself, then validate the scheduler and read back the final state. The verdict is the live scheduled artifact, not Claude's last message.

## Report back

A good final report names:

- active files changed,
- specialist mirror files changed,
- JSON validation result,
- cron schedule verification result,
- whether the next run will see the new logic.
