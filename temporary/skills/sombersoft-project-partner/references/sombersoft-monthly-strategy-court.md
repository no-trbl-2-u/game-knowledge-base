# SomberSoft Monthly Strategy Court

Use when running the monthly SomberSoft Strategy Court cron or when T asks for company/product strategy across SomberSoft.

## Trigger

- Monthly ritual: 1st of each month at 11:00 America/New_York.
- Current cron may be UTC-offset based; note DST offset explicitly.
- Scope is company direction, product/research/tooling/public-artifact calls, monetization, kill-list hygiene, and next monthly campaign.

## Procedure

1. Read `/root/Workspace/SOMBERSOFT_COMMAND_LEDGER.md` first if present.
2. Review the last month of reports under `/root/Workspace/reports/`:
   - `axiomancer-playthrough/`
   - `roundtable/`
   - `alignment/`
   - `audits/`
   - prior `strategy-court/` reports if any.
3. Use context from latest weekly alignment and daily roundtable when provided, but verify durable report files where possible.
4. Inspect repos of interest under `/root/Workspace`, especially:
   - `/root/Workspace/axiomancer-both/axiomancer-mechanics`
   - `/root/Workspace/axiomancer-both/axiomancer-mobile`
5. Establish mainline truth:
   - `git fetch origin --prune`
   - pull/rebase `main` where allowed and safe
   - record branch, HEAD, origin/main, divergence, and dirty state.
6. Judge company shape:
   - what SomberSoft is becoming
   - whether current work matches the company thesis
   - whether the AI-workflow lane is serving the game or becoming theater.
7. Classify work into:
   - product
   - research
   - tooling
   - public artifact
   - kill/defer/watch/alive.
8. Make monetization/productization recommendations only when real evidence supports them. Prefer “later, after evidence rails” over fantasy revenue stories.
9. Recommend hires or separate Hermes Agents when recurring work exceeds persona-level judgment.
10. Name next month’s campaign and 1–3 concrete shippable artifacts.
11. Patch the central ledger only for settled facts or clearly labeled proposals.
12. Write the full record to `/root/Workspace/reports/strategy-court/YYYY-MM-DD.md`.
13. Final report to T must include:
    - verdict
    - product/research/tooling calls
    - kill-list candidates
    - next campaign
    - specialist/Hermes-agent recommendations
    - highest-priority question for T if needed.

## Judgment pattern

Use strong strategic language, but keep facts anchored in reports, commits, and verification output. If the available evidence window is shorter than a month, say so plainly instead of pretending a full month exists.

## Ledger patch standard

Good monthly ledger patches:

- first monthly Strategy Court report path exists
- next monthly campaign proposal
- settled T decisions that affect company direction
- kill/defer/watch/alive changes
- shipped evidence rails or newly stable rituals
- small factual corrections discovered during court, such as stale report paths or prompt-vs-actual ledger/report-root drift

Avoid patching the ledger with transient commit SHAs or daily status that belongs in the dated report.

## Report/ledger verification pitfall

When the court patches and pushes the central ledger, do not leave the dated Strategy Court report with guessed or stale commit SHAs. After the ledger push, re-check the doctrine repo HEAD/status and patch the report with the actual pushed commit(s). If a second factual ledger correction is needed after the first push, commit/push it too, then update the report again so final HEAD, path corrections, and commit list agree. This matters especially while report-root history is split between `/root/Workspace/reports/*` and `/root/Workspace/SomberSoft/reports/*`.

## Pitfalls

- Do not let public-artifact ambition outrun Axiomancer evidence stability.
- Do not let AI-workflow rituals become the product unless they are visibly improving product outcomes.
- Do not propose new specialists as ornament. Recommend a persona for recurring judgment pressure; recommend a separate Hermes Agent/profile when the work needs independent scheduling, tools, memory, or sustained autonomy.
- Do not classify mobile visual-smoke exit `2` as product failure when the export succeeds and the issue is missing baselines; treat it as baseline debt unless reproduced otherwise.
- Do not treat branch-scoped reports as mainline truth without repo hygiene verification.
