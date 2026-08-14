---
name: combat
encounter_type: combat
scope: category
node_ids: []
dev_menu_button: COMBAT
docs:
  - axiomancer-mobile/docs/combat.md
  - axiomancer-mobile/components/DebugTriggerEncounter.tsx
  - axiomancer-mobile/app/(tabs)/combat.tsx
  - axiomancer-mobile/state/presenters/combat.engine.ts
confidence: medium
runs_informing_this: "Seeded from current dev-menu/code inspection; 2026-06-21 five-run Kid combat ladder on exported mobile app with early/fresh, L15, aggressive, winning, status-first, bug-hunt, and regression lenses."
updated: 2026-06-21
---

# Legacy Combat — play doctrine

> Durable play doctrine for The Kid. Stable how-to-play only. **Transient bugs do NOT live here** — route them to the dated playthrough report, the owning repo's `plan/CRITIQUE.md`, or issue candidates.
>
> **2026-06-23 T steering:** this file is now a legacy `/combat` regression witness. Daily combat playtesting should use `hazard-combat-first-level.md` unless T explicitly asks for old combat. Do not let SELF → DEV MENU → COMBAT or CLI stance/attack loops stand in for the new Hazard-style combat route.

## How to enter (exact route)

SELF → `DEV MENU` → `DEBUG · TRIGGER ENCOUNTER` → `COMBAT` (`testID="debug-trigger-encounter-encounter"`). The dev trigger jumps to WILDS and seeds the lowest-level standard foe on the current map, excluding boss/unique enemies. Use `DEBUG · PLAYTHROUGHS` first when testing fresh/endgame extremes.

Current exported-web route truth: if the SELF `DEV TOOLS` link does not visibly navigate in a browser harness, direct `/dev` is a valid dev fallback, then use `ENCOUNTER TRIGGERS` → `COMBAT`. Treat the failed link click as a transient harness/product candidate, not as absence of dev tools.

## What it is

A standard combat encounter. A real run reaches combat prelude, enters fight, chooses stance/action/skill where available, resolves rounds, and reaches victory, defeat, friendship/mercy, flee, or an honest blocker.

## Rules learned

- Dev COMBAT uses the gentlest standard foe available on the current map; current fresh evidence repeatedly produced `SALT-GNAW RAT`.
- The mobile surface must preserve engine truth for `VITAE`, `STANCE`, skill costs, resource affordability, deterministic skill results, and battle-log events.
- Combat evidence is incomplete unless it reaches at least stance choice → action choice → round resolution.
- Stance choice gates available skill families. Basic actions generate stance-matched fuel; e.g. Body actions exposed usable Body skills after BOD fuel was earned, while Heart skills stayed unaffordable with HRT 0.
- Skills and status effects can resolve from the mobile surface: current evidence saw `Achilles' Gambit`, `Ad Hominem Strike`, `Briar Stance`, `Ad Baculum`, `Fleeting Kindness`, and status scour lines.
- `DEFEND` can be useful as a status/fuel setup action on high-tier presets, but low-level fresh fights may die before status play matters.

## How to read it (UX / state cues)

- Watch the enemy panel, VITAE, STANCE/stance cards, skill/action affordances, resource strips, resolve panel, and aftermath/modal state.
- Good state: readable enemy intent/status, affordable/unaffordable skills are clear, deterministic skill outcomes do not show fake dice roll ceremony, round result advances cleanly.
- Bad state: blank `/combat` field state, hidden stance/action controls, stale HEALTH/GUARD copy, dead `ITEM`, unavailable learned skills, resource display not changing after rounds.

## How to play it well (winning doctrine)

- Matrix playstyles: aggressive, defensive, mixed, strategist/status-first.
- Strategist/status-first should prove whether status effects matter, not merely whether basic attacks win.
- Use fresh/L1 and endgame presets available today; map mid/L6 and late/L15 to closest future dev presets or mechanics fallback until mobile exposes them.
- For the current fresh Salt-Gnaw Rat witness, read the foe stance first. If the foe shows Mind, Body stance has advantage and Body + Attack can win fast.
- To test skills instead of just raw attack, generate fuel with a basic Body action, then use an affordable Body skill such as `Achilles' Gambit` or `Ad Hominem Strike`.
- To test status/fuel setup, use a higher-tier preset and `DEFEND` before skill use; record visible status chips and battle-log apply/scour lines.

## Loss / failure conditions & recovery

- Defeat is valid evidence if the run reaches a real aftermath and records what decisions led there.
- Timeout/soft-lock/blank field is not a combat result; it is a blocker cell.

## Known-good end-to-end checklist

- Enter via SELF → DEV MENU → COMBAT.
- Confirm combat prelude/modal appears over WILDS.
- Choose stance.
- Choose a legal action or skill.
- Resolve at least one round.
- Continue to a terminal result or record exact blocker.
- Check console/runtime status.

## Regression watchpoints (stable)

- `COMBAT` dev trigger remains available under `DEBUG · TRIGGER ENCOUNTER`.
- Canon copy stays `VITAE` and `STANCE`, never HEALTH/GUARD. Current main combat UI stayed canonical, but pre-fight intro copy still said `HP`; report that as copy debt until fixed.
- The active combat route must not render only `THE FIELD STIRS.` for seeded combat evidence unless explicitly approved as empty-state doctrine.
- Learned/unlocked skills should surface when affordable; legacy equipped-skill gating is implementation debt, not doctrine.
- Action cards should remain fully visible and clickable after stance selection and after continuing into later rounds; clipped/offscreen action cards are a mobile UX regression.
- Unavailable `ITEM`, unaffordable skills, and flee controls should either resolve or explain refusal. Silent no-ops are bugs or unclear doctrine.
- Final victory copy should reflect the real final action and damage. Current evidence repeatedly saw `FINAL BLOW · STRIKE · 0` despite observed lethal attacks/skills.

## Open questions / learn next

- Add or verify deterministic mid/late combat player presets in mobile dev menu.
- Establish first full Kid matrix: fresh/endgame × aggressive/defensive/mixed/strategist with real counts.

## Subagent run directive

Read this doctrine plus current combat docs/code, enter via SELF → DEV MENU → COMBAT, play with the parent-injected lens/run number and matrix cell, return the structured note schema, and stop. Put build-specific bugs in transient report/CRITIQUE candidates.

## Provenance

- Confidence: `medium`. Informed by: current code/doc inspection and the 2026-06-21 daily Kid combat ladder on exported mobile web. That ladder completed five runs across naive/aggressive, winning, strategy/status-first, bug-hunt, and regression lenses, including fresh/L1 and L15 preset evidence, terminal victories, skill-resource gating, status visibility, edge-case control probes, and clean browser console checks. Last updated: `2026-06-21`.
