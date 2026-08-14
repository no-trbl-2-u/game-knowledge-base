# Axiomancer cross-repo doctrine → mobile design doc pattern

Use when T asks to "consume knowledge" from mechanics/design sources and create a matching design document inside `axiomancer-mobile`.

## Pattern proven in session

1. **Load SomberSoft/Axiomancer workflow first.** Use `sombersoft-project-partner`; if mechanics/balance/card/dice design is involved, also load `rpg-balance-tuning` or the relevant specialist skill.
2. **Establish repo truth.** In `~/Workspace/axiomancer-both/axiomancer-mobile`, fetch/pull current `origin/main` and inspect status before edits. For normal Axiomancer docs work, T's default allows committing/pushing to `main` after a clean pull unless he asks otherwise.
3. **Read existing mobile doc style.** Inspect `design/*.md`, `design-spec.md`, `specs/00-how-to-use-specs.md`, and the mobile README so the new doc matches local shape and presentation-layer boundaries.
4. **Consume mechanics doctrine before mobile writing.** For Hazard minigame this meant reading:
   - `axiomancer-mechanics/docs/hazard-minigame.md`
   - `docs/hazard-minigame-prd.md`
   - `docs/hazard-minigame-tdd.md`
   - `docs/hazard-minigame-bdd.md`
   - `plan/phases/phase_131_hazard_minigame.md`
   - `skills/hazard-tuning.md`
   - current local `src/World/Hazard/*` implementation as witness, not doctrine.
5. **Separate source-of-truth levels.** Mechanics owns rules/state/randomness/scoring/tuning; mobile owns presenter shape, touch flow, legibility, components, and tests. If current code lags accepted doctrine, state that caveat rather than designing around the partial implementation.
6. **Write the mobile doc as implementation-ready design law.** Include source-of-truth list, executive summary, flow/state order, terminology, component recommendations, presenter/store shape, current integration points, implementation caveats, accessibility, test guidance, phases, and Definition of Done.
7. **Verify the artifact.** Read back the file, check key sentinel phrases, `git diff --stat`, commit, pull/rebase if push is rejected, push, and report the final commit/status.

## Hazard-specific doctrine anchors

- Opening hand is visible before route choice.
- Route choice happens before dice roll and is binding.
- Four mana dice roll once and persist across rounds.
- Dice do not auto-refresh unless card/enchantment text says so.
- X dice are blocked unless X-interaction cards/enchantments enable them.
- Top/free actions are distinct from bottom/mana actions.
- Round results are `O`/`X`; final score is `count(O) - count(X)`.
- Exactly four v0 progress types: Stability, Escape, Supply, Force. Focus is a buff mechanic, not a progress type.
- Mobile must preserve canon resource language such as `VITAE` and `STANCE`.

## Pitfalls

- Do not treat current partial mechanics implementation as stronger than accepted mechanics doctrine.
- Do not invent new mobile rules to patch an engine gap; document the caveat and gate implementation behind package exports/tests.
- Do not leave a design doc as chat summary. Put it in `axiomancer-mobile/design/` and commit it.
- Do not run expensive/full verify gates for markdown-only docs unless the repo policy or T asks; readback + git diff/status is adequate evidence for doc-only work.
