# Hermes upgrades ledger pattern

Use when T asks to improve Hermes itself, review available tools, configure providers, enable toolsets, or proceed through Hermes upgrades one at a time.

## Stable ledger

Track the work in:

`~/Workspace/HERMES_UPGRADES.md`

This file is a SomberSoft root-level operations ledger, not a repo-local artifact. Use it to preserve upgrade queue, status, rationale, commands, verification, and completed decisions.

## Operating pattern

1. Load `hermes-agent` first for Hermes configuration/setup work.
2. Inspect live state before advising if the question depends on current setup:
   - `hermes tools list`
   - `hermes config`
   - `hermes mcp list`
   - `hermes status --all`
   - `hermes doctor`
3. Produce a prioritized upgrade queue with concise entries:
   - what
   - use/value
   - needed prerequisite/API key if any
   - command
   - verification
4. Put the queue in `~/Workspace/HERMES_UPGRADES.md` when T wants to track it.
5. Execute upgrades one at a time. After each upgrade:
   - run the verification command
   - patch the ledger item from `pending` to `completed` or `blocked`
   - add a short completed-upgrades/decision-log entry
   - report only the result and the next queued action
6. Ask before changes involving secrets, costly providers, public/production effects, destructive operations, or major model/provider direction.

## Current first-pass queue shape

The initial 2026-06-03 queue used this order:

1. `hermes doctor --fix`
2. enable filesystem checkpoints
3. set approvals to `smart`
4. add OpenRouter
5. configure fallback model
6. configure delegation model explicitly
7. add stronger web extraction/search providers such as Exa + Firecrawl
8. create specialist Hermes profiles for the SomberSoft gang
9. enable Discord gateway if collaboration expands
10. enable/test Mixture of Agents

Do not treat this queue as eternal law. Reinspect live `hermes doctor` and config before executing later items.

## Provider/fallback configuration pitfalls

Lessons from the 2026-06-03 Hermes upgrade pass:

- Verify fallback providers with a real one-shot call before leaving them installed. Credential discovery can succeed while the provider still cannot serve traffic because of billing, quota, or model access.
- If a candidate fallback fails live verification, revert `fallback_providers` rather than leaving a known-broken route in config.
- For structured config such as `fallback_providers`, be careful with `hermes config set`: passing JSON text may be written as a YAML string instead of a list. Prefer an editor or a YAML-aware script, then verify by reading `~/.hermes/config.yaml` and by calling the relevant Hermes config helper if needed.
- Model availability should be checked against the provider before choosing the fallback model. For Anthropic on 2026-06-03, `claude-sonnet-4-6` was available, but the account was blocked by low credit balance.
- When a config change succeeds but active runtime behavior may be cached, tell T plainly that `/reset` or gateway restart may be needed before the current session uses it.

## Style rule

T prefers Hermes upgrade work one concise item at a time: what it is, what it is used for, and what is needed. Avoid turning each step into a broad essay unless asked.
