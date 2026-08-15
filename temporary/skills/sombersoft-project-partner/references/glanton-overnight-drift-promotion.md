# Glanton overnight drift promotion

Use this when T signs off for the night and directs that SomberSoft/Axiomancer doctrine drift either be resolved or promoted so autonomous workers can act before morning.

## Pattern

1. Load SomberSoft/Glanton context and establish repo truth for mechanics + mobile.
2. Separate drift into:
   - **safe doc/Nexus cleanup** — patch immediately, verify, commit, push if within T's existing mainline autonomy;
   - **code-heavy doctrine breaks** — create/promote top-priority phases, not loose notes;
   - **public/release/cost/secret/production actions** — ask unless T explicitly authorizes.
3. Put code-heavy phases at the top of `plan/steps/01_build_plan.md` so `/march` dispatches them before lesser work.
4. Write real phase briefs under `plan/phases/` with:
   - source/audit pointer;
   - doctrine statement;
   - concrete scope;
   - verification commands;
   - blocker rule forbidding local simulation when engine truth is missing.
5. Drain or move stale `plan/PHASE_CANDIDATES.md` rows that the new phase owns.
6. Write a morning report under `~/Workspace/reports/audits/` summarizing resolved drift, promoted phases, blockers, and roundtable hooks.
7. If T authorized overnight execution, schedule a one-shot cron job or otherwise launch the worker with a self-contained prompt listing repo paths, phase order, authority boundaries, verification, and final report requirements.

## Axiomancer doctrine examples

- Mechanics owns rules truth. Mobile consumes engine truth and must not invent mercy eligibility, spare/exploit resolution, exploit damage, stat formulas, or combat resources locally.
- Befriend doctrine: 5 Heart skill attempt opens spare/exploit choice; legacy passive friendship must not silently bypass Befriend/HP gate unless explicitly re-doctrined and tested.
- Balance evidence target: **65–75% resolution success** = victory plus friendship/mercy resolution, not raw win rate.

## Verification

At minimum:

- Confirm the first pending rows are the promoted phases.
- Run cheap doc-safe verification (`typecheck`, `typecheck --if-present`, or targeted checks) before committing.
- Check final `git status --short --branch` in both repos.
- Report exact commits pushed and any scheduled job id.
