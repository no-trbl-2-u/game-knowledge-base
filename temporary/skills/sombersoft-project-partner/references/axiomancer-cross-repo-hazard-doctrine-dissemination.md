# Axiomancer cross-repo Hazard doctrine dissemination

Use this reference when T makes accepted Hazard minigame design decisions in chat and asks for them to be propagated through Mobile, Mechanics, and central SomberSoft documentation.

## Scope

Update all three doctrine surfaces when the decision affects rules, UX, and company record:

- `~/Workspace/axiomancer-both/axiomancer-mechanics` — rules truth, PRD/TDD/BDD/API docs, tuning skills.
- `~/Workspace/axiomancer-both/axiomancer-mobile` — presentation, layout, interaction, phase candidates/design docs.
- `~/Workspace/SomberSoft` — central CDR/ledger record of accepted doctrine.

## Delegation pattern

If T asks to pass the decision to Claude Code, run one Claude worker per repo so each worker edits only its own domain. Give each worker:

1. repo path and exact doc-surface responsibility;
2. the accepted design decisions in concise bullets;
3. the source-of-truth split: mechanics owns rules/contracts, mobile owns presentation/comprehension, SomberSoft owns company decision record;
4. explicit verification requirements: inspect diff, run `git diff --check`, and report changed files.

When T explicitly requires `/model`, use interactive Claude Code and set the model before the task prompt; see the `claude-code` skill for the slash-command rule.

## Current Hazard doctrine anchors from the session

- Route layout should be stacked vertically on mobile, with wider/full-width panels for real information density.
- Safe route remains single-meter and more approachable.
- Risk route uses a dual-meter `BOTH REQUIRED` requirement.
- Dice are cast once at route selection and do not auto-refresh, auto-reroll, or freely carry over as spendable mana between rounds. Spent dice stay spent unless card/enchantment text changes them. Risk route difficulty comes from dual `BOTH REQUIRED` meters, not an automatic between-round re-cast.
- Mana/card colors collapse to four: red, blue, purple, gold.
- Dice have two `X`/wild faces because there are now four colors.
- Gold cards are rare, most powerful, and require gold mana/dice.
- Red cards commonly push one meter high and sometimes the other low; Blue mirrors that for the other meter; Purple sits midrange and can support either meter depending on card identity.
- Utility cards remain part of every color family: draw, convert dice, reroll/recast support, and related manipulation.
- Preserve explicitly approved UI appearance when fixing hit-testing: for the Hazard PLAY button, the translucent/sulfur-glow look was desired; only invisible stacking/clickability fixes should survive unless T approves visual changes.

## Pitfalls

- Do not let a worker soften accepted doctrine into optional language. If T says Risk rerolls between rounds, docs must say Risk rerolls between rounds.
- Do not update only one repo. Hazard decisions cross rules, UX, and central doctrine.
- Do not trust synthetic click tests alone for UI hit-testing. A visible button can still be occluded by fanned cards; verify real hit targets or equivalent DOM element-at-point evidence when UI interaction is at issue.
- Do not commit/push automatically if repo branch state is not the expected clean mainline policy; report branch truth first.