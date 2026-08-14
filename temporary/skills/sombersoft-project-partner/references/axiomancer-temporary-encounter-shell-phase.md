# Axiomancer temporary non-combat encounter shell phases

Use when T asks to queue, plan, or route Axiomancer Mobile work for non-combat Event encounters before final minigames exist.

## Trigger

- T asks for an "encounter shell" or skeleton modal for Event encounter types aside from combat.
- T wants `/march` or autonomous phase workers to pick up temporary scaffolding work.
- Playtest reports are confusing known missing Event minigames with regressions.

## Pattern

1. Treat the shell as delivery work, not design exploration.
2. Update the mobile build plan so `/march` sees a first pending `[ ]` row under `plan/steps/01_build_plan.md`.
3. Add a phase brief under `plan/phases/phase_<N>_temporary_encounter_shell_modal.md` with:
   - explicit scope: minimal shell only,
   - tests for at least two non-combat event kinds,
   - regression that combat-prelude still uses the combat modal,
   - DoD requiring docs/comments to call the shells temporary.
4. Add or update repo documentation such as `docs/temporary-encounter-shells.md` naming the removal condition: a shell stops being temporary only after that Event type gets a designed and tested minigame or bespoke flow.
5. Patch `skills/march.md` if needed so autonomous workers know the phase is valid delivery work and must not drift into final minigame design.
6. Link the temporary-shell doctrine from README or the relevant agent entrypoint if future workers must see it.
7. If the decision affects SomberSoft-wide agenda, update `~/Workspace/SOMBERSOFT_COMMAND_LEDGER.md` with the campaign item.

## Pitfalls

- Do not design final minigames inside the skeleton phase. That is a later Tobin/design judgment pass.
- Do not let Kid/Judge playtest reports classify missing final minigames as unknown regressions once temporary shells are documented.
- Do not disturb the existing combat-prelude → combat → aftermath modal arc while adding non-combat shells.
- Do not merely discuss the phase in chat; `/march` reads the build-plan queue, so the pending row is the operative handoff.

## Verification

Minimum planning-only verification:

- pending `[ ]` phase row exists in mobile `plan/steps/01_build_plan.md`,
- phase brief exists in `plan/phases/`,
- temporary doctrine doc exists and is linked,
- `/march` skill mentions the phase or the generic rule needed to pick it up,
- git status/commit/push checked where appropriate.
