---
name: gather
encounter_type: gather
scope: category
node_ids: []
dev_menu_button: GATHER
docs:
  - axiomancer-mobile/components/DebugTriggerEncounter.tsx
  - axiomancer-mobile/app/gathering/index.tsx
  - axiomancer-mechanics/skills/gathering-tuning.md
confidence: high
runs_informing_this: "Seeded from current dev-menu/code inspection and mechanics gathering-tuning vocabulary; 2026-06-17 Kid gathering evidence; 2026-06-19 five-run Kid gathering ladder; 2026-06-23 five-run Kid gathering ladder covering naive/timid GLEAN, informed balanced push-your-luck, greedy STRIP rout, bug-hunt offering/tool/tutorial edges, and regression harness checks, plus mechanics CLI matrix for glean/strip seeds 42/43/44 and gathering balance/CLI e2e tests."
updated: 2026-06-23
---

# Gathering — play doctrine

> Durable play doctrine for The Kid. Stable how-to-play only. **Transient bugs do NOT live here** — route them to the dated playthrough report, the owning repo's `plan/CRITIQUE.md`, or issue candidates.

## How to enter (exact route)

SELF → `DEV TOOLS` / `/dev` → `DEBUG · TRIGGER ENCOUNTER` → `GATHER`, or `/dev` → `DEBUG · GATHERING` → `GO GLEANING`. Current Mobile moved encounter controls out of the collapsed SELF dev menu and onto the `/dev` tools screen; old harnesses that wait for `dev-menu-header` on `/character` are stale and should be updated to click `self-dev-tools-link` or navigate `/dev` before triggering. The category trigger jumps to WILDS and calls `beginGathering({})`, routing through the same GatheringGate to `/gathering`. Direct `DEBUG · GATHERING` may also exist as a shortcut.

## What it is

Gathering / The Gleaning is a push-your-luck extraction minigame. A real run enters the board, makes harvest/restraint decisions, resolves danger/escalation, and claims or loses spoils.

## Rules learned

- Mechanics tuning doctrine names the core incentive gradient: blind greed < timid restraint < skilled push-your-luck.
- The Kid must report whether the mobile playthrough makes that gradient legible, not tune the numbers.
- Evidence should separate UI comprehension from mechanics outcome rates.
- `GLEAN` / the Tender Hand is the restraint route: it starts safer, caps yield, begins with grace, and can reach `COMMUNION` by taking low-wrath plots, paying offerings/tools, and leaving before wrath overtakes the site.
- `STRIP` / the Stripping Hand is greed: it can show a richer satchel quickly, but blind take-first play can drive wrath to 12 and route the player through eruption.
- Wrath thresholds matter. First reprisal pressure around wrath 4 teaches cost; later pressure and DUSK/root-depth prices tell the player when greed has become a sentence.
- Offerings and tools are real restraint verbs. `WARDEN'S BELL` can lower wrath and then becomes spent; material offerings can trade satchel pieces for grace/wrath relief.

## How to read it (UX / state cues)

- Watch plot/site state, wrath/danger pressure, kept pieces/richness, offering/tool/boon affordances if present, and claim/leave controls.
- Good state: the player can tell when taking more is tempting but dangerous, and what restraint buys.
- Bad state: rewards look like a vending machine, wrath/escalation is invisible, or claim/leave is unclear.
- Strong mobile cues from the 2026-06-19 and 2026-06-23 ladders: `WRATH`, `GRACE`, `TAKINGS`, stratum/depth ribbon, satchel families, boon checkmarks, offering/tool chips, and `WITHDRAW / KEEP N PIECES` all support play without code-reading.
- DUSK and root-depth wrath prices are the cleanest "stop now" cues.
- Watch offering affordability and payment clarity: disabled offerings are functionally no-ops when unavailable, but may not explain why; material offerings can consume a satchel piece without enough pre-tap preview of the exact piece consumed.
- `HORN SICKLE` has strong feedback in current mobile: after use the board shows `SICKLED — next taking free`, marks the tool spent, and visibly changes next TAKE costs to `free`.
- `WARDEN'S BELL` is functionally observed reducing wrath (`WRATH 1 → 0`) and becoming spent, but its copy/availability can still be unclear when wrath is already 0.

## How to play it well (winning doctrine)

- Matrix playstyles: timid/restraint, balanced/skilled push-your-luck, greedy/blind extraction.
- Timid should leave safely with modest spoils.
- Greedy should expose why blind extraction is punished.
- Balanced should push while reading danger and leave with the best expected result.
- Timid first-contact line: choose `GLEAN`, take only free/low-risk pieces, pay an offering or use a tool when it clearly buys safety, and withdraw early. This can produce `LADEN`/`COMMUNION` with modest spoils and no eruption; 2026-06-23 naive evidence produced `LADEN` with 2 pieces / 3 richness and both no-bite/low-wrath boons.
- Balanced line: choose `GLEAN`, push into deeper strata, accept one controlled reprisal if the satchel is worth it, use `WARDEN'S BELL`, `HORN SICKLE`, or an offering to pull wrath back or make one deeper take free, then withdraw before despoilment/eruption. A 2026-06-19 mobile run on `mire-mint` held 6 pieces / 11 richness and ended `COMMUNION` at wrath 1 / grace 2; a 2026-06-23 run reached a clean `LADEN` ledger at 5 pieces / 8 richness.
- Greedy boundary lesson: `STRIP` plus blind TAKE-first play can reach an attractive satchel and then erupt. A 2026-06-19 run on `bone-orchard` reached 7 pieces / 19 richness before wrath 12, then routed and lost 4 to the site; a 2026-06-23 `bone-orchard` seed `7171` regression reconfirmed blind STRIP reached 7 pieces / 19 richness, `ROUTED`, 4 carried, and `LOST TO THE SITE`. This is useful evidence that balanced restraint beats blind greed.

## Loss / failure conditions & recovery

- Eruption/despoilment/empty spoils are meaningful failures when the run reaches resolution.
- A dead button, no route, or stuck tutorial overlay is a blocker, not a gameplay loss.
- `ROUTED` plus `LOST TO THE SITE` is a valid completed failure state; record pre-eruption satchel, pieces lost, family meters, and whether the player understood why it happened.
- Recovery before the break: stop taking, use an available tool/offering, and withdraw while the label still promises kept spoils.

## Known-good end-to-end checklist

- Enter via SELF → DEV TOOLS / `/dev` → `DEBUG · TRIGGER ENCOUNTER` → `GATHER`, or direct `DEBUG · GATHERING` → `GO GLEANING`.
- Reach `/gathering` visibly, not `/event` with `NO EVENT`.
- Choose approach: `GLEAN` for restraint/winning proof or `STRIP` for greed/eruption proof.
- Make extraction/restraint decisions, including at least one TAKE and, when possible, one tool/offering use.
- Reach claim/resolve state: `COMMUNION`/`LADEN` clean exit or `ROUTED` eruption settlement.
- Claim the spoils ledger and return to the app.
- Record rewards/spoils, wrath/grace, pieces/richness, reprisals/eruption, and console/runtime status.

## Regression watchpoints (stable)

- `GATHER` dev trigger remains available under `DEBUG · TRIGGER ENCOUNTER`.
- The flow should route to `/gathering`, not generic `/event` with `NO EVENT`.
- The incentive gradient should be legible: restraint and skilled push-your-luck must be distinguishable from blind greed.
- GLEAN should be able to exit cleanly through outcome and spoils claim.
- STRIP greed should be able to reach eruption/routed settlement and still claim/close cleanly; routed is a completed failure, not a harness failure.
- Tutorial should teach in order. Current watchpoint from 2026-06-19 and reproduced 2026-06-23: if the tutorial allows descending before the TAKE/TEND lesson, copy may reference verge plots that are no longer visible; workers should gate early `DESCEND` or make tutorial copy dynamic.
- Disabled controls such as `NO DEEPER` and unaffordable offerings should not mutate state when clicked. Current disabled offerings pass the no-op functional check but remain clarity debt when the reason for unavailability is only implied by cost text.
- Non-blocking Reanimated transform warnings are known noise unless paired with visible play failure or page errors.

## Open questions / learn next

- Run a larger mobile matrix with deterministic site/seed controls by playstyle: timid/restraint, balanced push-your-luck, greedy/blind extraction.
- Decide whether disabled offering chips need explicit affordability/cost reasons.
- Decide whether material offerings need a clearer pre-tap preview of the exact piece consumed.
- Reprobe tutorial sequencing after any tutorial-control change: no depth skip should leave stale lesson copy behind.

## Subagent run directive

Read this doctrine plus current gathering docs/code, enter via SELF → DEV TOOLS / `/dev` → `GATHER`, play with the parent-injected lens/run number and matrix cell, return the structured note schema, and stop. Put build-specific bugs in transient report/CRITIQUE candidates.

## Provenance

- Confidence: `high`. Informed by: current code/doc inspection; 2026-06-17 gathering evidence; 2026-06-19 five-run Kid ladder with mobile manual/harness runs, mechanics CLI matrix, committed `e2e:gathering`, gathering balance sim, and CLI e2e. Last updated: `2026-06-19`.
