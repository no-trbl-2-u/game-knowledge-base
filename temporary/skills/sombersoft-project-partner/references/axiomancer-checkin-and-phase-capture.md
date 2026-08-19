# Axiomancer check-in + phase capture pattern

Use when T says he has not checked in for a while, asks what needs attention, asks whether the Kid proved a playthrough, and also gives a fresh product/UI direction to turn into phases.

## Pattern

1. **Establish current mainline truth first.** Fetch/fast-forward both Axiomancer repos when available; read latest playthrough and roundtable reports before answering from memory.
2. **Answer in the order T asked.** Keep the first pass compact:
   - what needs T's attention/decision now;
   - whether the Kid proved the requested playthrough, with proof levels separated;
   - what phase work was created or queued.
3. **Separate decision-needed from work-needed.** Only elevate real product/doctrine choices to T. Implementation backlog, stale harnesses, visual diffs, and candidate cleanup are work items unless they require his direction.
4. **For Kid combat proof, use a four-level verdict.**
   - Mechanics route proof from actual first-level nodes.
   - Mechanics standalone Hazard-style combat CLI proof.
   - Mobile route entry into in-place Hazard-style combat.
   - Full mobile card-powered victory/mercy resolution.
   Do not collapse entry proof into full playthrough proof.
5. **When T gives a fresh UI/product direction in the same check-in, capture it immediately as durable repo phases.** Do not merely recommend phases. Write repo-local phase briefs, add build-plan rows, add/update `PHASE_CANDIDATES.md` promoted entries if that repo uses it, verify with `git diff --check`, then commit/push clean `main` when policy allows.
6. **For mobile combat card legibility work, split compact vs detail surfaces.**
   - Compact phase: small hand/staged/reward cards get glyphs and keyword chips.
   - Detail phase: selected card modal explains free/powered actions and defines shown keywords.
   Derive keywords from engine/presenter fields, not card-name parsing.

## Reporting shape

- Start with the direct verdicts, not machinery.
- Name the single decision if one exists.
- For Kid evidence, say exactly what was proven and what was not.
- For phase work, include phase numbers, paths, commit hash, and push/clean status.

## Pitfalls

- Do not make T read the whole roundtable/playthrough reports back to himself.
- Do not say “proper playthrough” if card-powered resolution was not reached.
- Do not call `combat-sim` an agentic playthrough; it is a Monte-Carlo balance witness.
- Do not make new mobile UI phases depend on settling unrelated visual-baseline debt unless the requested work itself touches those baselines.
