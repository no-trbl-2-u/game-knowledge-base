# Kid encounter playtest learning protocol

Use this before normal mobile encounter/minigame playthrough evidence. Instead of a one-off scout pass, The Kid runs an iterative, multi-generation encounter-learning protocol so he gets measurably better at each Axiomancer encounter over time and so regressions become visible against a known-good baseline.

This protocol layers on top of `references/axiomancer-mobile-ui-playtest-harness.md` (launch/route/Hermes-browser mechanics) and slots into `references/axiomancer-daily-playthrough-cron.md` (where the daily evidence ritual calls it). Durable per-encounter doctrine accumulates in `references/kid-encounter-agents/`.

## Why this exists

The Kid should not re-learn each minigame from scratch every day. Each encounter type accrues durable **play doctrine** — how to enter, read, and win it — in an encounter-specific agent file. Transient build bugs go to reports and critique queues, never into doctrine. Over days the Kid plays better, and when a minigame's stable behavior changes, the agent file makes the regression obvious.

## Core loop (per encounter)

- The unit of work ("a ladder") is **one encounter type/category** OR **one specific named encounter/node**. Preserve that breadth — both are valid.
- A ladder is **5 sequential runs** (the generation ladder below). Notes chain forward: run `N` receives the accumulated notes from runs `1..N-1`.
- Each run is a **fresh subagent**. It reads, plays, learns, tests end-to-end, returns the structured note schema, and **stops**. The parent (main Kid) holds the accumulated notes and spins up the next run with them.
- Runs **within** a ladder are strictly sequential — notes must accumulate; that is the whole point. **Different** ladders (different encounter types/nodes) may run in parallel as `n` independent ladders where time and tooling allow. Spin up `n` workers across ladders, not within one.

## Generation ladder (5 runs, rotating lens)

Each run has one **primary lens** for emphasis, but **every run reports all evidence** (the schema below requires bug, UX, strategy, and outcome fields regardless of lens).

| Run | Generation | Primary lens | Notes input | Mandate |
|-----|------------|--------------|-------------|---------|
| 1 | naive player | UX / readability | none | First contact. No prior notes. Surface what a real first-time player sees, misreads, or gets lost in. Learn the minigame from zero. |
| 2 | informed player | winning | runs 1 | Use the notes to actually beat the encounter. Confirm a real win path exists and is reachable. |
| 3 | informed player | strategy | runs 1-2 | Optimize. Learn the minigame deeply: openings, priorities, resource/turn math, the strong line of play. |
| 4 | informed player | bug-hunt | runs 1-3 | With mastery, push the edges. Hunt breakage, soft-locks, bad states, dead buttons, impossible/again-and-again loops. |
| 5 | regression hunter | regression / breakage | mature notes 1-4 | Replay against the now-mature doctrine. Verify nothing that used to work has rotted. Flag drift from the known-good baseline. |

This honors the naive → informed → regression ladder while rotating the focus across all five lenses: **winning, finding bugs, learning strategy, UX/readability, and regression/breakage.**

## Pick your encounter (preserve the breadth)

A ladder binds to ONE of:

- **Broad category/type:** `combat` (standard), `boss`, `hazard`, `rest`, `gather`, `treasure` (loot), `quest` (village / NPC / interaction). Within a type-ladder each run may sample a different concrete node of that type.
- **Specific named encounter/node:** e.g. `fv-3` "Hanged Wood", `nf-5` "Wolf's Den", a named boss. All 5 runs target the same node so notes accumulate coherently.

The category set above is the real `NodeType` taxonomy from the mobile engine — do not invent encounter types or labels.

## Active daily rotation

The standing daily Kid rotation is deliberately narrow:

1. `hazard`
2. `gather`
3. `combat`

Rotate through those three unless T names a different focus. Boss, Rest, Treasure/Loot-cache, and Quest can be probed when T directs it or when another report makes them urgent, but they are not part of the ordinary daily rotation.

## App route — SELF → DEV MENU → trigger encounter

Launch the app per the harness doc (`references/axiomancer-mobile-ui-playtest-harness.md`). Then reach the encounter directly via the in-app developer route (the dev menu is `__DEV__`-only):

1. Go to the `SELF` tab.
2. Tap `DEV MENU` (collapsed by default; a chevron `▸`/`▾` expands it).
3. Scroll to the `DEBUG · TRIGGER ENCOUNTER` section (sub-label "jump to WILDS + fire it").
4. Tap the encounter-type button. Mapping:

   | Encounter category | Dev-menu button |
   |--------------------|-----------------|
   | combat (standard)  | `COMBAT` |
   | boss               | `BOSS` |
   | hazard             | `HAZARD` |
   | rest               | `REST` |
   | gather             | `GATHER` |
   | loot / treasure    | `TREASURE` |
   | village / interaction / quest / NPC | `QUEST` |

5. For a **specific named node** rather than a type: the dev buttons fire by *type*, so walk WILDS exploration to that node and enter it (node registry: `state/exploration-maps/*.layout.ts`). In a production-style export the dev menu may be absent — fall back to WILDS navigation to a node of the wanted type.

Record the exact route and selection in every run's notes.

## Read before you play

Each run reads documentation for its encounter **if documentation exists; if not, it reads the code.**

- Encounter docs (mobile, read what's relevant): `docs/combat.md`, `docs/hazard-*.md`, `specs/08-event-screen-wiring.md`, `docs/presenters.md`, `plan/phases/phase_118_combat_encounter_retrigger.md`, plus any newer `docs/`/`plan/` material for the type.
- If no doc covers the type/minigame: read the presenter/engine and components (`state/presenters/*.engine.ts`, the encounter/event/combat components).
- **If an agent file already exists** for this encounter under `references/kid-encounter-agents/`, that file is the **base prompt**: use it instead of a generic scout prompt, then layer the run's lens, run number, and accumulated notes on top.

## What a run must do

1. Read docs (or code if docs are missing/insufficient) and any existing agent file for the encounter.
2. Launch the app, reach `SELF`, open `DEV MENU`, and trigger the encounter via `DEBUG · TRIGGER ENCOUNTER` (record the exact path).
3. Play through it to the best of its ability; learn the minigame; take notes on how to play it well.
4. Test **end-to-end**: reach a real resolution (combat: stance → action → round resolution → outcome; hazard/event: minigame completion or honest failure). Check the browser console. Capture screenshots/artifacts.
5. Return the **structured note schema** below to the parent, then stop running.

## Structured note schema (required from every subagent)

Every subagent returns exactly these fields:

- encounter selected
- encounter category/type
- run number and run lens (`naive`, `winning`, `bug-hunt`, `strategy`, `UX/readability`, `regression` as applicable)
- docs read
- code read if docs are missing or insufficient
- exact app route and dev-menu selection path
- minigame rules learned
- winning/optimization strategy
- UX/readability observations
- bugs/blockers with repro steps
- screenshots/artifacts/console logs
- confidence level
- recommended durable agent-file updates
- transient report/CRITIQUE candidates

### Hazard-specific final-report questions

When the selected encounter is `hazard`, the final daily report and the consolidated ladder summary must explicitly answer these five questions:

1. Why did the player/Kid choose Safe or Risk?
2. What did each die allow or block?
3. Why did each failed round fail?
4. Which reward option was picked, including whether the choice was in-focus, stronger off-focus, or card removal if those slots exist?
5. What card, scar, CRACK burden, or future hazard state is now feared or wanted in the next Hazard?

Pass signal: the run can explain failure without handwaving, name the desired deck direction, and remember at least one card by name or function. If it cannot, report Hazard readability as design-red even when commands pass.

## After the ladder — consolidate durable agent files

When all 5 runs finish, the parent/main Kid:

1. Reads all five runs' notes for the ladder.
2. Creates or updates `references/kid-encounter-agents/<file>.md` using `references/kid-encounter-agents/_TEMPLATE.md`, writing **stable play doctrine only**: how to enter, understand, read, and win the encounter/minigame; loss conditions; known-good end-to-end checklist; regression watchpoints.
3. If an agent file already exists, **merge** the new stable knowledge, raise/lower the confidence line on the evidence, and avoid duplication. Update the file rather than spawning a second one.
4. Updates the directory index in `references/kid-encounter-agents/README.md` if a new file was created.

## Durable vs transient firewall (do not let bugs rot in doctrine)

- **Agent files = stable doctrine.** "This minigame works like X; read it like Y; play it like Z; if W changes, that is a regression."
- **Reports / CRITIQUE / issue candidates = transient.** "Build of <date> had bug B with repro R and console line C."
- Route every transient bug/blocker OUT of the agent file to: the dated playthrough report (`~/Workspace/reports/axiomancer-playthrough/YYYY-MM-DD.md`), the owning repo's `plan/CRITIQUE.md` (mobile vs mechanics by ownership; use `skills/jot.md` conventions where they apply), and issue candidates.
- A bug earns an agent-file line only when it has stabilized into doctrine (a permanent rule or durable known-limitation), and even then it is phrased as doctrine, not as a build-specific defect.

## Scoping within a daily run (no silent truncation)

- A full sweep is up to 7 encounter types × 5 runs = 35 subagents. A single daily cron usually cannot do all of it.
- **Minimum:** complete at least one encounter's full 5-run ladder per daily run.
- Rotate only between the three active daily targets: **Hazard**, **Gathering**, and **Combat**. Boss, Rest, Treasure, and Quest doctrine files may exist for attended or T-directed probes, but the ordinary daily loop does not spend rotation slots on them.
- Record in the daily report which ladder ran, which of the Hazard/Gathering/Combat rotation targets were deferred, and why. Never imply full coverage when coverage was partial.

## Mechanics-style evidence matrix for Kid playthroughs — NO tuning

The Kid's playthrough should now borrow the **structure** of the mechanics tuning skills without borrowing their authority. This means fixed matrices, run counts, player tiers, decks, seeds, and strategy labels — **not** A/B testing, not numeric tuning, not applying balance changes, and not opening tuning PRs.

### Universal report requirements

For every encounter ladder, the daily report must show actual counts, not just prose:

- encounter/category/node selected;
- player tier(s) or preset(s) used where applicable;
- strategy/playstyle labels used;
- deck/preset labels used where applicable;
- seed list or deterministic scenario IDs;
- attempted runs, completed runs, wins/clears/failures/timeouts/blockers;
- outcome rates as fractions and percentages;
- average rounds/turns where the harness exposes them;
- named blockers and which cells they invalidated.

If a UI harness cannot complete the full matrix, run the strongest committed CLI/e2e/sim witness as fallback, label it as fallback, and still report the matrix cells attempted vs deferred. Do not claim player-feel from CLI-only evidence.

### Combat/boss matrix shape

When the selected encounter is combat or boss, mimic `mechanics-tuning`/playtest reporting shape:

- player tiers/presets: early/L1, mid/L6, late/L15, endgame/L30 when available; if mobile exposes fewer presets, use the closest named dev preset and state the mapping;
- strategies: aggressive, defensive, mixed, strategist/status-first;
- minimum sample: 3 seeds/runs per feasible tier × strategy cell for daily evidence; 5+ runs per cell when time allows;
- report win, defeat, friendship/mercy, timeout, average rounds, stance/action dominance, skill/resource usage, and whether status-effect play actually mattered.

### Hazard matrix shape

When the selected encounter is Hazard, mimic `hazard-tuning` structure but do not tune:

- hazards/routes: include Safe and Risk routes when the UI/harness exposes both; use fixed hazard IDs/seeds where available;
- run count: minimum 3 seeds/runs per deck × playstyle cell; 5 seeds/runs per cell when time allows;
- deck presets: starter baseline/control; early straightforward; late straightforward; early enchantment; late enchantment; early utility; late utility. If the mobile dev menu lacks deterministic preset buttons, use the closest available deterministic setup and explicitly mark missing preset support as a harness/UI gap;
- playstyles: naive/minimum-reading, conservative Safe-first, opportunist Risk-first, strategist adaptive, bug-hunt/regression;
- report per cell: attempts, completions, Perfect/Complete/Failure marks, final score, Safe/Risk choice rationale, dice blocked/allowed, failed-round causes, reward picked, deck/scar/CRACK state, and readability status;
- preserve the 5-run learning ladder lenses, but add the matrix counts around them so T can see how many playthroughs actually happened.

### Gathering / Quest / Rest / Treasure matrix shape

When the selected encounter is another minigame, mirror its mechanics skill/sim vocabulary where known:

- Gathering: timid/restraint, balanced/skilled push-your-luck, greedy/blind extraction; report eruption/despoilment, richness kept, rewards, and whether restraint beats greed.
- Quest Board: safe/low-risk, gambler/press-your-luck, economist/reward-optimizer; report reward distribution, failure/escalation, and verb clarity.
- Rest: conservative recovery, upgrade-seeking, risk/greed if available; report resource spent, recovery gained, upgrades, and comprehension.
- Treasure/Loot-cache: cautious probe, deep delve, seal/leave; report reward depth, danger, and whether the payoff feels like loot rather than flat shillings.

The matrix is evidence scaffolding. It does not grant the Kid permission to change mechanics, mobile, or tuning values unless a separate user instruction asks for implementation.

## Agent-file naming + breadth

- Category file: `<type>.md` — `combat.md`, `boss.md`, `hazard.md`, `rest.md`, `gather.md`, `treasure.md`, `quest.md`.
- Specific named node: `<node-id>-<slug>.md` — e.g. `fv-3-hanged-wood.md`, `nf-5-wolfs-den.md`.

See `references/kid-encounter-agents/README.md` for the directory contract and `references/kid-encounter-agents/_TEMPLATE.md` for the format.

## Pitfalls

- Don't overclaim a full minigame playthrough you never finished. If you never reached resolution, say so — same discipline as the harness doc's "do not overclaim a full combat UI playthrough" rule.
- If native browser interaction cannot complete a drag-heavy minigame or dev trigger path, use the repo's committed e2e harness as fallback evidence **only after labeling it as fallback**. A harness pass proves the harness route, not necessarily the exact manual route.
- Treat hidden DOM/test IDs as insufficient encounter proof. A debug trigger succeeds only when the hazard/event/combat UI is visibly rendered and playable; mounted overlays behind SELF/WILDS are transient bugs for the dated report/CRITIQUE, not stable doctrine.
- Don't let one run's transient build bug enter the durable agent file. Doctrine ages; bugs don't belong in it.
- Don't parallelize runs **within** a ladder — the accumulating notes are the mechanism that makes the Kid improve.
- Don't invent encounter types, node IDs, or button labels. The dev-menu buttons and the `NodeType` enum are the source of truth.
- The dev menu is `__DEV__`-only and the trigger jumps to WILDS to fire by type; for named-node ladders you still navigate WILDS to the exact node.

## Verification

- **Per run:** exact route recorded; resolution reached or honestly marked incomplete; console checked; artifacts saved; full schema returned.
- **Per ladder:** agent file created/updated with stable doctrine; transient bugs routed out to report/CRITIQUE/issues; confidence recorded; coverage and deferrals logged in the daily report.

## Related

- `references/axiomancer-mobile-ui-playtest-harness.md` — launch/route/Hermes-browser mechanics and the SELF/dev-menu encounter-selection route.
- `references/axiomancer-daily-playthrough-cron.md` — where this protocol slots into the daily evidence ritual.
- `references/axiomancer-playtest-evidence.md` — engine-level evidence discipline and Tobin-readable judgment shape.
- `references/kid-encounter-agents/` — durable per-encounter play doctrine and the agent-file template.
