# SomberSoft specialist Hermes profiles

Session learning: when T asks to turn SomberSoft gang personas into operational units, treat it as Hermes profile work, not only persona prose.

## Current profile roster

Profiles created under `~/.hermes/profiles/` with wrapper aliases in `/root/.local/bin/`:

- `judge` — front-office Judge / primary operator
- `tobin` — RPG Systems Theologian
- `kid` — Field Playtester and Prototype Scout
- `toadvine` — Art / Asset Ruffian
- `glanton` — Nexus State / Execution Commander
- `mennonite` — Requirements and Risk Examiner
- `bathcat` — Field Intelligence and Knowledge Scout

T prefers one Judge Telegram DM with specialist profiles used as backend instruments unless he later asks for direct bots/chats.

## Creation pattern

Use `hermes-agent` first for exact Hermes commands. Then create profiles with full cloned state so credentials, skills, MCP, and config begin from the working default profile:

```bash
hermes profile create <name> --clone-all
```

After creation, write a role-specific `SOUL.md` in each profile. For cross-profile writes, be explicit that T authorized specialist profile setup.

## Baseline profile tuning pattern

Set safety defaults and assign a role-owned working directory rather than a generic workspace root:

```bash
<profile> config set terminal.cwd <role-owned-path>
<profile> config set approvals.mode smart
<profile> config set checkpoints.enabled true
```

Current cwd doctrine:

- `judge`, `mennonite`: `/root/Workspace/SomberSoft`
- `tobin`, `kid`, `toadvine`, `glanton`: `/root/Workspace/SomberSoft/Axiomancer`
- `bathcat`: `/root/Workspace/SomberSoft/game-knowledge-base`

Then tune by role with `tools enable/disable` rather than leaving every backend profile with the full Judge tool loadout.

Current intended loadouts:

- `judge`: broad front-office loadout retained.
- `tobin`: web, browser, terminal, file, code_execution, vision, skills, todo, memory, session_search, clarify; high reasoning.
- `kid`: web, browser, terminal, file, code_execution, vision, video, skills, todo, memory, session_search, clarify; browser recording enabled.
- `toadvine`: web, browser, terminal, file, code_execution, vision, image_gen, video, skills, todo, memory, session_search, clarify; browser recording enabled.
- `glanton`: web, terminal, file, code_execution, skills, todo, memory, session_search, clarify, delegation, cronjob, messaging; high reasoning and the largest execution budget.
- `mennonite`: web, terminal, file, code_execution, skills, todo, memory, session_search, clarify.
- `bathcat`: web, browser, terminal, file, code_execution, x_search, skills, todo, memory, session_search, clarify; high reasoning and browser recording enabled.

## Role-based model allocation

Do not flatten the gang onto the strongest or newest model. Allocate model cost and reasoning capacity by jurisdiction, then align scheduled jobs with the same law.

Current intended allocation:

- Default Judge and `judge`: `openai-codex / gpt-5.6-sol`
- `tobin`: `openai-codex / gpt-5.6-sol`
- `kid`: `openai-codex / gpt-5.6-luna`
- `toadvine`: `openai-codex / gpt-5.6-luna`
- `glanton`: `openai-codex / gpt-5.6-luna`
- `mennonite`: `openai-codex / gpt-5.6-luna`
- `bathcat`: `openai-codex / gpt-5.6-luna`

Sol is for expensive synthesis and systems judgment. Luna is the default for field work, production execution, documentation, orchestration, and retrieval. A title such as “commander” or “magistrate” does not itself justify Sol.

Before setting a model, confirm its exact ID in the live Hermes model catalog/provider listing. Apply profile changes with `<profile> config set model.default <model-id>` and validate each profile with `<profile> config check`.

Role-labeled cron jobs are a separate configuration surface. A job whose prompt says “You are The Kid” or “You are Bathcat” may still inherit the default Judge model unless the job has an explicit override. Audit live cron state after profile changes and pin Judge/Tobin judgment rituals to Sol and Kid/Bathcat field jobs to Luna. Script-only `no_agent` jobs need no model override.

## Aggressive tuning pass

When T grants broad permission to tune specialists aggressively, do more than write better persona prose. Apply profile-level operating budgets and standing orders, then verify them.

Useful config knobs:

```bash
<profile> config set agent.reasoning_effort <medium|high>
<profile> config set agent.max_turns <role-budget>
<profile> config set terminal.timeout <seconds>
<profile> config set agent.environment_hint '<role-specific standing order>'
<profile> config set browser.record_sessions true   # Kid, Toadvine, Bathcat when evidence/research benefits
```

Known-good budget shape:

- `judge`: high reasoning, max turns about 120, timeout about 240s; coordinate specialists aggressively.
- `tobin`: high reasoning, max turns about 110, timeout about 240s; inspect Axiomancer docs/repos before substantial mechanics claims.
- `kid`: medium reasoning, max turns about 100, timeout about 240s; run builds and gather screenshots/logs/repro steps.
- `toadvine`: medium reasoning, max turns about 100, timeout about 240s; use vision/image/design tools and produce concrete asset direction.
- `glanton`: high reasoning, max turns about 130, timeout about 300s; decompose campaigns, assign specialists, demand verification gates.
- `mennonite`: medium reasoning, max turns about 90, timeout about 220s; test assumptions, run premortems, and write only proportional acceptance/abort criteria and specifications.
- `bathcat`: high reasoning, max turns about 120, timeout about 300s; source first, preserve provenance, distinguish witnessed fact/interpretation/hearsay/unknown, and corroborate consequential claims.

Also patch each profile `SOUL.md` with an `Operational aggression` section that states what the role should actively do, what weak work it should attack, and what evidence it must return. Keep safety gates intact: ask before destructive, costly, secret-bearing, public, production, or major-direction actions.

## Verification

Run:

```bash
hermes profile list
hermes config check
for p in judge tobin kid toadvine glanton mennonite bathcat; do
  $p config check
  $p tools list
  $p mcp list
  test -s "/root/.hermes/profiles/$p/SOUL.md"
  test -s "/root/.hermes/profiles/$p/memories/MEMORY.md"
  test -s "/root/.hermes/profiles/$p/memories/USER.md"
done
hermes cron list
hermes gateway status
```

Verify exact model and cwd values from each profile's live config, not from a prior command's success message. Test important MCPs with `mcp test`, not merely `mcp list`. For shared doctrine/profile rewrites, scan the exact live SOUL/memory/skill files for retired paths and prove every specialist SOUL binds to the shared harness.

A fresh model-response smoke is desirable but is not interchangeable with config/MCP/scheduler proof. If runtime authentication or provider billing blocks the response smoke, report that gap plainly while preserving the successful lower-layer evidence. Do not rewrite credentials merely to make the audit look green.

A gateway process may refuse to restart itself. Respect that guard instead of bypassing it. Profile configs are read by fresh profile sessions; if a gateway restart is actually required, perform it from an external shell or ask T to use the supported gateway restart path.

Record the result in `/root/Workspace/SomberSoft/HERMES_UPGRADES.md` when this is part of Hermes upgrade work.

## Pitfalls

- Do not assign every specialist the newest/highest-cost model. T wants model allocation by jurisdiction: Judge/Tobin on Sol; Kid/Toadvine/Glanton/Mennonite/Bathcat on Luna.
- Do not assume changing a named profile also changes role-labeled cron jobs. Inspect explicit cron model/provider overrides and align them separately.
- Do not confuse `delegate_task` subagents with named Hermes profiles. `delegate_task` is temporary and usually inherits the active model/config; profiles are durable and can have separate config, tools, memory, skills, and gateway state.
- Do not start separate Telegram bots by default. T chose a single Judge DM with backend specialists unless he later requests direct specialist chats.
- Do not over-specialize models before provider/billing reality is known. Start with tool/profile separation, then tune models later.
- The Mennonite's role is requirements and risk examination: premortems, assumptions, contradictions, acceptance/abort criteria, and proportional PRDs/BDDs/TDDs/worker packets. He is not a gameplay designer, researcher, or permanent veto.
- Bathcat's role is field intelligence and retrieval: prior art, source trails, provenance, contextual blockers, and knowledge-base scouting. He is not a mechanics judge or specification owner.
