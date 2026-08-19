# SomberSoft cron prompt and toolset updates

Use when changing a scheduled SomberSoft worker's prompt, skills, model, or enabled toolsets.

## Live-state rule

Cron jobs are scheduler state, not just files. Editing `~/.hermes/cron/jobs.json` or a profile mirror can leave the live scheduler running an in-memory copy of the old job.

Preferred path:

1. Inspect the job with `cronjob(action="list")` or `hermes cron list`.
2. Update the job through `cronjob(action="update", job_id=..., prompt=..., skills=..., enabled_toolsets=...)` or the Hermes cron CLI.
3. Re-list the job and verify the expected skills/toolsets/schedule are present. Do not trust `prompt_preview` alone when exact wording matters.
4. Trigger a test run only after the live job state is updated.
5. Inspect the delivered cron output/report and verify the new behavior actually occurred.

## Toolset dependency rule

If the new protocol asks the scheduled worker to spawn subagents, the job must include the `delegation` toolset. Without it, a conscientious worker may substitute repeated local/browser runs and report a limitation. That is evidence-bearing but not the requested protocol.

## Script-wrapper timeout pitfall

Do not make a `no_agent=true` script-only cron job launch `hermes chat` for substantial doctrine/research work. The scheduler treats the shell script as the whole job and applies the script timeout; the nested Hermes agent can time out even while behaving correctly. Convert these to normal agent-driven cron jobs instead: clear `script`, set `no_agent=false`, put the full prompt on the job, attach the needed skills/toolsets, then queue a run and verify `last_status: ok` plus a delivered output/report.

Common toolsets for Kid playthrough jobs:

- `file`
- `terminal`
- `browser`
- `skills`
- `delegation` when encounter-learning ladders require subagents

## Verification language

Report the truth in three layers:

- **configured:** prompt/toolsets updated in scheduler state;
- **triggered:** a run was queued/executed;
- **observed:** output/report proves the new protocol ran.

Do not call the change successful at the configured or triggered layer if the user is asking about observed behavior.

## Kid encounter-learning pitfall

For the Kid's encounter-learning ladder, verify the output mentions actual sequential subagents or a justified limitation. If it says it substituted five fresh browser processes, the protocol was only partially exercised; enable `delegation` and rerun.