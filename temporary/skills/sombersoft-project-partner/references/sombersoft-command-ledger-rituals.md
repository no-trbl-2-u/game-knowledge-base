# SomberSoft Command Ledger and Rituals

Session-derived doctrine for SomberSoft operating practice. Use with `sombersoft-project-partner` when the user discusses company process, Axiomancer, public artifacts, recurring reviews, or agent/specialist workflows.

## Central doctrine location

- Central company doctrine lives at `~/Workspace/SOMBERSOFT_COMMAND_LEDGER.md`.
- Root-level files directly under `~/Workspace` are intentionally in scope for all SomberSoft projects because every directory under `~/Workspace` may be a repository.
- Repo-local doctrine should still live near the work; the central ledger links outward.

Doctrine model:

> Central ledger declares doctrine. Local repo docs operationalize it. Agent entrypoints enforce it.

## Standing autonomy

For SomberSoft work, the user wants aggressive autonomy. Hermes may inspect, test, edit, commit, push, open PRs, and merge to main by default. Open a PR instead of merging only when explicitly asked.

Still ask before destructive deletion, spending money, secrets/auth changes, third-party contact, public publishing, production deploy/release, or major architecture/product-direction changes.

## Recurring rituals

Times are intended as America/New_York local time; cron may be scheduled in UTC and should be checked around daylight-saving changes.

- Daily 04:00 ET — The Kid runs Axiomancer mechanics + mobile playthrough and writes `~/Workspace/reports/axiomancer-playthrough/YYYY-MM-DD.md`.
- Daily 10:00 ET — The Judge runs the SomberSoft roundtable and writes `~/Workspace/reports/roundtable/YYYY-MM-DD.md`.
- Weekly Saturday 11:00 ET — SomberSoft alignment; must choose one named campaign focus for the following week and write `~/Workspace/reports/alignment/YYYY-MM-DD.md`.
- Weekly doctrine sweeper — reviews recent reports for settled doctrine; initially delayed two weeks from setup to avoid premature noise; writes `~/Workspace/reports/doctrine-sweeper/YYYY-MM-DD.md`.
- Monthly on the 1st at 11:00 ET — Strategy Court for product/research/tooling calls, kill-list candidates, monetization, and next campaign; writes `~/Workspace/reports/strategy-court/YYYY-MM-DD.md`.

## Company thesis and lanes

Working thesis:

> SomberSoft builds dark, thoughtful games and personable AI workflows where systems reveal philosophy through play, automation, and consequence.

Primary focus:

- Experimental RPG mechanics — new forms of play, not regurgitated genre furniture.
- Personable AI workflows/workstations — agents, rituals, tools, and interfaces that feel like collaborators rather than sterile automation.

Official lanes:

1. Axiomancer — flagship game, experimental RPG mechanics, philosophy through systems, highest craft standard.
2. AI Workflows / Workstations — Hermes workflows, agent gangs, command ledgers, personable automation, internal tools that may become products.
3. Experiments — prototypes, strange mechanics, UI rituals, agent studies, short-lived tests that either graduate or die.

## Axiomancer evidence and legibility

Completion evidence for Axiomancer work:

1. Initial implementation satisfies the ask.
2. Tests are added or updated; hermetic e2e is highest-priority proof.
3. Playthrough testing is updated when gameplay/player flow/comprehension/mobile/harness behavior changes.
4. Playthrough test is run to verify the ask from the player/system point of view.
5. Report changed files, exact verification commands/results, playthrough artifacts, and known gaps or hermetic-test debt.

Axiomancer mechanic legibility questions:

1. What does the player do?
2. What pressure does the player feel?
3. What changes because of the player’s choice?
4. What philosophical claim does the mechanic embody?
5. Does another RPG do this or something adjacent?
6. What did players/designers like and dislike about that adjacent mechanic?
7. How does Axiomancer ebb from precedent into something new rather than regurgitating it?
8. For UI: can a first-time player understand what happened, why it happened, and what they can do next?

Precedent research is reconnaissance before invention, not obedience to precedent.

## Agent leverage and recruitment

Use agents aggressively for playthrough loops, regression discovery, test generation, repo inspections, code review, doctrine extraction, report summaries, blog/process article drafting, BDD behavior scenario generation, and comparing mechanics against precedent.

Do not let agents replace final product taste, company mission, player empathy, philosophical intent, final calls on intended-vs-broken behavior, or public publishing approval.

Recommend new specialists aggressively when there is a recurring judgment need, repeated failure pattern, missing capability, or durable workflow. Also recommend a separate Hermes Agent/profile/worker—not just a persona—when the work needs independent execution, scheduling, tools, memory, or sustained autonomy.

## BDD/Cucumber agenda

Pinned discussion topic: using BDD/Gherkin/Cucumber-style behavior specs for playthrough verification and agent/persona workflow audits.

Intended use:

- The Kid can point to a specific behavior when confused.
- T can judge: fix it, intended, or test is wrong.
- Agent/persona tests can use clear language scenarios rather than only scripted tests.
- This may make SomberSoft’s agentic workflows auditable in human terms.

## Public artifacts

For now, draft internal blog-style articles that outline process, decisions, playtest lessons, experimental RPG mechanics, and agentic workflow development. These become seed material for a later public SomberSoft website.

Website agenda: public home for devlogs, mechanic breakdowns, playtest reports, agent workflow case studies, screenshots/clips, doctrine notes, preview APKs, and playable builds.

## Kill list

Idea states: Alive, Later, Absorbed, Dead, Watch.

Any idea inactive for 30 days should be judged during weekly alignment: keep, defer, absorb, test, or kill.
