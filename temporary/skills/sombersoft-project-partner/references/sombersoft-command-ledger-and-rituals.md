# SomberSoft Command Ledger and Operating Rituals

Session-derived doctrine for SomberSoft company operations. Use this when maintaining `~/Workspace/SOMBERSOFT_COMMAND_LEDGER.md`, designing recurring agent rituals, or judging completion evidence for Axiomancer work.

## Central doctrine location

- Central ledger lives at `~/Workspace/SOMBERSOFT_COMMAND_LEDGER.md`.
- Root-level files in `~/Workspace` are intentionally used because every directory under `~/Workspace` may be a repository; Workspace-root doctrine stays visible across projects.
- Repo-local doctrine should live near the work and be linked from the central ledger.

Standing rule:

> Central ledger declares doctrine. Local repo docs operationalize it. Agent entrypoints enforce it.

## SomberSoft thesis and lanes

Current thesis:

> SomberSoft builds dark, thoughtful games and personable AI workflows where systems reveal philosophy through play, automation, and consequence.

Primary focus:

- Experimental RPG mechanics — build new forms of play, not regurgitations of inherited genre furniture.
- Personable AI workflows/workstations — agents, rituals, tools, and interfaces that feel like capable collaborators rather than sterile automation.

Company lanes:

1. Axiomancer — flagship game, experimental RPG mechanics, philosophy embodied through systems.
2. AI Workflows / Workstations — Hermes workflows, agent gangs, command ledgers, personable automation, internal tools that may become products.
3. Experiments — prototypes, strange mechanics, UI rituals, agent studies, short-lived tests that graduate or die.

Doctrine:

> Prefer strange, legible, consequential systems over safe imitation.

## Standing jurisdiction

For SomberSoft work, T grants Hermes aggressive mainline autonomy:

- inspect, test, plan, edit, commit directly on `main`, push `main`, and keep local checkouts current with frequent `origin/main` pulls;
- do not create new branches, push branches, or open PRs unless T explicitly asks for branch-based work or PR flow;
- proactively challenge weak plans and suggest stronger alternatives.

Ask first for destructive deletion, spending money, secrets/auth changes, public publishing, third-party contact, production deploy/release, or major architecture/product-direction changes.

## Recurring rituals

Times are intended as America/New_York. Cron may use UTC, so account for EDT/EST offsets.

- Daily 04:00 ET — The Kid runs Axiomancer mechanics + mobile playthrough and writes `~/Workspace/reports/axiomancer-playthrough/YYYY-MM-DD.md`.
- Daily 10:00 ET — The Judge runs SomberSoft roundtable, synthesizes agent reports and prior-day work, asks T for needed direction, and writes `~/Workspace/reports/roundtable/YYYY-MM-DD.md`.
- Weekly Saturday 11:00 ET — The Judge runs alignment on workflow, mission, and next campaign, writes `~/Workspace/reports/alignment/YYYY-MM-DD.md`, and chooses one named campaign focus for the following week.
- Weekly doctrine sweeper — starts only after an intentional delay when established; reviews reports for settled doctrine and writes `~/Workspace/reports/doctrine-sweeper/YYYY-MM-DD.md`.
- Monthly on the 1st at 11:00 ET — Strategy Court on company direction, product/research/tooling calls, kill-list candidates, monetization, specialist/Hermes-agent needs, and next campaign; writes `~/Workspace/reports/strategy-court/YYYY-MM-DD.md`.

## Evidence standard for Axiomancer completion

Axiomancer work is not done on implementation alone. Default completion proof:

1. Initial implementation satisfies the stated ask.
2. Tests are added or updated.
3. Hermetic e2e is prioritized as the highest proof where feasible.
4. Playthrough testing is updated when the change affects gameplay, player flow, comprehension, mobile screens, or automation harness expectations.
5. A playthrough test is run to verify the original ask from the player's/system's point of view.
6. Report exact commands, results, changed files, artifacts, and gaps.

If hermetic e2e is infeasible, state why and identify the nearest durable substitute.

## Specialist and Hermes-agent recruitment

The Judge should aggressively recommend new specialists when SomberSoft shows a recurring judgment need, repeated failure pattern, missing capability, or durable workflow one role should own.

Recommendations may be either:

- a Blood Meridian-inspired persona/specialist; or
- a separate Hermes Agent/profile/worker when the work needs independent execution, scheduling, tools, memory, or sustained autonomy rather than only a persona voice.

Do not recruit ornament. Recruit pressure made visible.

## BDD / behavior-spec agenda

T wants to discuss BDD/Cucumber-style playthrough verification:

- express playthrough expectations as clear behaviors;
- when The Kid is confused, point to a specific behavior;
- T can decide: fix it, intended, or test is wrong.

Also consider BDD-style tests for agents/personas: clear-language scenarios can audit SomberSoft's agentic workflows and persona behavior better than only scripted testing.
