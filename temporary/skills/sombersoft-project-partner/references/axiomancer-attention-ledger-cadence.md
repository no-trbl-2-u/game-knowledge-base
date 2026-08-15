# Axiomancer attention-ledger cadence

Use when T asks to review `NEEDS_ATTENTION.md` / `NEEDS_HUMAN_ATTENTION.md`, determine stale items, promote one to a phase, or add the rest to roundtable.

## Pattern

1. Establish mainline truth first for both Axiomancer repos: fetch/pull clean `main` or inspect `origin/main` explicitly. Local checkouts can be behind.
2. Read all attention ledgers:
   - `axiomancer-mechanics/NEEDS_ATTENTION.md`
   - `axiomancer-mobile/NEEDS_ATTENTION.md`
   - `axiomancer-mobile/plan/NEEDS_HUMAN_ATTENTION.md` if present
3. Classify each row against current code/docs/plans as:
   - **current** — still true and not queued,
   - **stale** — resolved, contradicted, or superseded,
   - **partially stale** — some subwork shipped but remaining scope exists,
   - **queued** — already promoted to a phase/build-plan row.
4. If T directs a specific item into phase work, create a normal repo-local promoted phase brief and build-plan row. Do not implement the phase unless asked.
5. If T says to “take note of the rest” or “add one to each roundtable,” update the live Daily SomberSoft Roundtable cron prompt, not just chat memory. The roundtable should handle exactly one unresolved attention-ledger item per run: inspect current truth, then close, promote/recommend, or defer with blocker.
6. When the selected item is already resolved on main but stale in one repo ledger, do a small factual cleanup rather than merely reporting it: patch the stale `NEEDS_ATTENTION.md` section to a dated RESOLVED note, remove any nearby stale code/doc comments that still point at deleted source-of-truth files, run `git diff --check` plus the narrowest relevant type/test/e2e witness, then commit/push the cleanup from clean `main` if repo policy permits. This is ledger hygiene, not broad implementation.
7. Verify scheduler state with `cronjob(action="list")` after updating.

## Doctrine pitfall: skills access wording

T clarified on 2026-06-20: `equippedSkills` is no longer relevant. The gameplay access surface is learned skills only. Existing code/docs may still use legacy names such as `knownSkills`; do not preserve or bless `equippedSkills` as compatibility doctrine. If the repo uses `knownSkills` as the implementation field, treat it as the learned-skill catalogue unless a newer field has replaced it.

## Reporting shape

Keep the final report compact:

- stale count / partially stale count / current count
- phase promoted, if any
- cron updated, if any
- commits pushed
- verification commands/results
