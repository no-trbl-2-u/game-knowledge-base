# SomberSoft doctrine alignment audit

Use this reference when T asks whether SomberSoft laws, central doctrine, repo docs, Nexus files, and implementation are aligned across Axiomancer Mechanics and Mobile.

## Trigger phrases

- "compare SomberSoft laws/doctrine to mechanics and mobile"
- "is everything aligned?"
- "audit doctrine drift"
- "check central ledger against repos/code"
- "Glanton cleanup pass"

## Standard procedure

1. Establish mainline truth first.
   - Work from `~/Workspace/axiomancer-both`.
   - Fetch both repos.
   - Checkout `main`.
   - Pull/rebase from `origin/main` where safe.
   - Record branch, HEAD, and ahead/behind state for both repos.
   - If a repo is ahead of origin with release/public-publishing implications, do not push unless T explicitly authorizes it.

2. Read central doctrine before local docs.
   - `~/Workspace/VISION.md`
   - `~/Workspace/SOMBERSOFT_COMMAND_LEDGER.md`
   - `~/Workspace/decisions/`
   - Any root report/ledger files that are current sources of company law.

3. Inventory local doctrine and Nexus machinery in both repos.
   - READMEs and repo-local `VISION.md`
   - `docs/adr/`
   - `plan/steps/01_build_plan.md`
   - `plan/PHASE_CANDIDATES.md`
   - `plan/CRITIQUE.md`
   - `plan/AUDIT.md`
   - repo-local `skills/`, `AGENTS.md`, `CLAUDE.md`, `.cursorrules`, or worker entrypoints.

4. Compare doctrine to code ownership.
   - Mechanics owns engine truth, simulation, combat rules, resources, status effects, skill availability, balance metrics, and encounter-state contracts.
   - Mobile owns presentation, comprehension, input flows, screens, smoke/visual evidence, and must not invent engine mechanics locally.
   - Flag any mobile local simulation of engine-owned truth as a contract violation unless it is explicitly temporary scaffolding with a removal path.

5. Use the source-of-truth hierarchy when judging contradictions.
   - T latest explicit decision.
   - CDRs and repo ADRs.
   - Central ledger and root vision.
   - Repo README/domain docs.
   - Nexus build plans and phase candidates.
   - Code/tests as implemented evidence, not necessarily desired law.

6. Produce a durable report for substantial audits.
   - Path: `~/Workspace/reports/audits/YYYY-MM-DD-sombersoft-doctrine-alignment.md`.
   - Include verdict, evidence scope, branch truth, aligned areas, misalignments, priority order, and exact next actions.
   - Keep chat summary compact; the report carries the body.

7. Patch only obvious stale docs during the audit if safe.
   - Safe: wording drift, status language, indexes, moved candidate items, source-of-truth links.
   - Ask first: production release/publish, destructive rewrites, large architecture changes, or anything that changes product direction.

## Common misalignment classes

- Central doctrine says a mechanic is live, while ADR/CDR language still says "candidate", "future", or "proposed".
- Nexus `/march` or `/oversight` skills omit the CDR/ADR layer and therefore route workers by stale law.
- `PHASE_CANDIDATES.md` still lists shipped work as pending.
- Mobile locally simulates a mechanic that mechanics now owns through package/API contract.
- Mechanics implements both old and new doctrine paths, allowing legacy resolution to bypass the intended ritual.
- Worker-facing docs say test/evidence rails are missing after the repo has gained scripts or harnesses.

## Report style

- Say plainly whether the system is aligned.
- Separate P0 code doctrine breaks from P1 Nexus/docs drift and P2 evidence improvements.
- Do not call a stale document harmless if a worker can read it and act from it.
- Do not overclaim full alignment merely because tests pass; tests prove current behavior, not doctrinal obedience.
