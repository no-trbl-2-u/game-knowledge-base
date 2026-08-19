# Axiomancer roster-wide difficulty tuning loop

Use this reference when T asks to promote, execute, supervise, or judge Axiomancer combat balance work after Phase 107.

## Source decision

T direct decision from 2026-06-02:

- Promote roster-wide difficulty tuning before writing the difficulty-curve doctrine spec.
- Use a fix → playthrough → fix → playthrough loop.
- The first success target is approximately 70% win rate **for every current strategy**, not merely the aggregate.
- Required canonical play styles are AGGRESSIVE, DEFENSIVE, MIXED, and STRATEGIST; STRATEGIST prioritizes skills, status effects, synergies, and resource planning.
- Combat doctrine: Axiomancer is fundamentally status-effect-centered. Basic attacks and friendly wins may sometimes work, but ignoring skills and status planning should make combat harder.
- Befriend doctrine: do not solve friendship by merely lowering boss HP gates. Keep HP pressure, make Befriend a starting heart-based skill requiring 5 heart tokens to attempt, and after success present spare/befriend vs exploit/free-critical choice.
- Doctrine should follow measured playtest bands, not precede them.

## Required preflight before tuning

Before changing encounter/player numbers, prove the combat machinery is trustworthy:

1. Token resource generation works.
   - Basic attack/defend grants are correct.
   - Equipment/set generation bonuses still chain correctly.
   - Resource events in playtest output match combat state.
2. Skills work.
   - Learned/unlocked skills from `knownSkills` are available without an equipped-skill gate.
   - Consumers expose only affordable unlocked skills.
   - `canUseSkill`, `spendResources`, `executeSkill`, playtest skill-use metrics, and report evidence agree.
3. Status effects work.
   - Skill-applied effects land under the Phase 80 always-land contract where applicable.
   - Tick, expiry, and stat-modifier behavior match docs/tests.

If this preflight finds a real engine bug, fix the bug before tuning balance.

## Authorized first-pass tuning surface

Adjust parameters smallest-change-first:

- enemy stats / level
- player stats / level
- player equipment
- player skills

Do not silently change core mechanics. If parameter tuning cannot reach target, stop and bring T a mechanics proposal before altering:

- friendship eligibility semantics
- token generation formulae
- skill cost model
- damage/resistance formulae
- action economy
- status-effect application rules
- AI decision model beyond authored enemy parameters

## Loop

1. Adjust parameters.
2. Run playtests using Phase 104 probes and relevant roster scenarios.
3. Inspect win/defeat/friendship/timeout rates, policy summaries, rounds-to-resolve, skill use, resource events, item use, and stance/action distributions.
4. Repeat until approximately 70% win rate for **every current strategy** and no obvious policy pathology remains.

## Finish gate

A tuning pass is not finished when the aggregate reaches target. It is finished only when every current harness strategy reaches the target band or is explicitly retired. Required Axiomancer play styles are:

- AGGRESSIVE — direct damage pressure.
- DEFENSIVE — survival and endurance.
- MIXED — rotates major combat intentions.
- STRATEGIST — prioritizes skills, status effects, status synergies, and resource planning.

The STRATEGIST path must prove the intended mastery route. If brute attack repetition is as good as or better than skill/status planning, the mechanics are not sound.

## Friendship / Befriend doctrine

If Phase 107 reaches the stop condition for friendship/STRATEGIST, the leading mechanics proposal is:

1. Leave the HP gate in place.
2. Add **Befriend** as a starting heart-based skill.
3. Require 5 heart tokens to attempt Befriend.
4. On success, open a consequential choice:
   - spare / befriend / preserve the encounter, with later text dependent on philosophical alignment;
   - exploit the opening for a free guaranteed critical attack.
5. Mechanics must expose this in CLI first; Mobile consumes engine truth with a modal later.

Defend should be used only when the player fears a large attack, wants resources, or is pursuing Befriend. If defend becomes a free always-correct bunker, the system is sick.

Open details before implementation: whether the 5 heart is spent or only held, whether failure consumes tokens, how statuses modify eligibility/success, whether exploit closes the mercy route, and which alignment/content consequences fire.

## Durable repo anchors

As of the original promotion, the doctrine was saved in:

- `axiomancer-mechanics/plan/steps/01_build_plan.md` — active Phase 107 row.
- `axiomancer-mechanics/plan/phases/phase_107_roster_wide_difficulty_tuning.md` — full phase brief.
- `axiomancer-mechanics/automation/playtest/NEXT_STEPS.md` — loop instructions.
- `axiomancer-mechanics/docs/playtest.md` — playtest-module doctrine.
- `~/Workspace/SOMBERSOFT_COMMAND_LEDGER.md` — central active campaign artifact.
