# Axiomancer promoted phase handoff

Use when T says to "turn this into a promoted phase", "queue it for the mechanics worker", "make it ready for /march", or similar.

## Pattern

1. **Treat it as durable Nexus work, not chat summary.** The output should be a worker-ready phase brief plus queue state, not merely a recommendation.
2. **Ground the brief in the live repo.** For Axiomancer mechanics, work under `~/Workspace/axiomancer-both/axiomancer-mechanics`; confirm branch/status and avoid touching unrelated dirty work.
3. **Choose the next phase number from the build plan queue.** Inspect `plan/steps/01_build_plan.md` and existing `plan/phases/phase_<N>_*.md` files.
4. **Write the phase brief.** Preferred path: `plan/phases/phase_<N>_<slug>.md`. Include:
   - Outcome
   - Source / user decision
   - Implementation units with file paths
   - Decisions made upfront — DO NOT ASK
   - Verify gate
   - Commit body template
   - Definition of Done
   - Follow-ups out of scope
5. **Promote in both Nexus surfaces.** Add a `[ ]` row to `plan/steps/01_build_plan.md` and a `## Promoted` entry in `plan/PHASE_CANDIDATES.md` when that file is being used for oversight provenance.
6. **Verify the handoff artifact.** At minimum run `git diff --check` on the files you touched and read back the relevant snippets.
7. **Commit and push on `main` when the user asked for the worker to pick it up.** This is not implementation of the phase; it is queue-state publication.
9. **Honor explicit clarification gates.** If T says to ask a minimum number of clarifying questions before making phases, do that first, one question at a time. After the answers arrive, write the phase briefs with those answers under “Decisions made upfront — DO NOT ASK” or equivalent source-decision sections.
10. **Report exactly what changed.** Include phase number, brief path, commit hash, push status, and any unrelated dirty files left untouched.

## Pitfalls

- Do not implement the phase while promoting it unless T explicitly asked to ship the work now.
- Do not hide open questions in the brief. Resolve them as "Decisions made upfront — DO NOT ASK" using the strongest current default.
- Do not overwrite or revert unrelated dirty balance/playtest files when the requested task is only phase promotion.
- Do not leave the phase only in `PHASE_CANDIDATES.md`; `/march` reads the build-plan queue for dispatch.
- When T asks for multiple phases across both Axiomancer repos in one breath, treat each repo as its own Nexus publication lane: sync both, choose phase numbers independently from each repo's live phase files/build plan, write repo-local briefs, patch repo-local build plan + PHASE_CANDIDATES, verify each diff, and commit/push each repo separately.
- Direct-steering phase promotions often supersede existing queue themes but should not erase them. Insert the new pending rows near the active queue head after the current promoted block, preserving older pending rows unless T explicitly reprioritizes or removes them.
- When T says a phase should be promoted "above all else" or similar, make that priority literal: insert the `[ ]` build-plan row immediately under `**Next up (autonomous loop's queue):**` before older rows, add a matching top entry under `## Promoted` in `plan/PHASE_CANDIDATES.md`, write a worker-ready phase brief, run `git diff --check`, then commit/push each affected repo separately. This is queue-state publication, not implementation.
- If T says a later visual audit will decide what to remove, encode that as a non-goal: preserve existing controls/buttons now, organize for audit, and do not prune preemptively.

## Example from the Labyrinth pass

T corrected the Labyrinth concept into literal Act II doctrine. The right handoff was:

- create `plan/phases/phase_121_labyrinth_act_ii_world_puzzle_doctrine.md`
- add `[ ] Phase 121` to `plan/steps/01_build_plan.md`
- add Phase 121 under `plan/PHASE_CANDIDATES.md` → `## Promoted`
- commit and push the Nexus docs only
- leave unrelated playtest/balance working-tree changes untouched
