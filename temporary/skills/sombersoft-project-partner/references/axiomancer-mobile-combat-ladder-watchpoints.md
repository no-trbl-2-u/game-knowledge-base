# Axiomancer Mobile combat ladder watchpoints

Use this when The Kid daily playthrough target is `Combat`, when judging mobile combat UI evidence, or when promoting combat playtest findings into Mobile critique/phase work.

## Evidence pattern that worked

- Establish mainline truth first, then verify installed mechanics package truth with `npm ls axiomancer-mechanics --depth=0`.
- If the installed package is invalid/stale against `package.json`, run `npm ci` before any typecheck, visual, e2e, or browser verdict.
- Build/export through the committed harness (`npm run verify:visual` or e2e scripts) before browser probing.
- Use the current dev route truth: SELF/Character may show a DEV TOOLS link, but direct `/dev` is an acceptable exported-web fallback when the link click does not visibly navigate. From `/dev`, use `ENCOUNTER TRIGGERS` → `COMBAT`.
- Combat UI evidence is not complete until it reaches stance choice → action or skill choice → round resolution. Terminal victory/defeat is stronger evidence; record if only one round was reached.

## Matrix/lens shape

For a daily five-run ladder, preserve the Kid learning ladder while reporting matrix cells:

1. naive/UX — fresh/default, aggressive first-contact.
2. winning — counter-stance and clean terminal resolution.
3. strategy/status-first — use a higher-tier preset if available; generate fuel, use skills, and record status chips/log lines.
4. bug-hunt — probe `ITEM`, flee, unaffordable skills, clipping, and final aftermath.
5. regression — replay the known-good fresh route and confirm console/canon copy.

Report tier/preset, strategy, attempts, completed rounds, terminal outcomes, friendship/mercy, timeouts, console/runtime status, and deferred cells.

## Stable combat observations from 2026-06-21

- Fresh COMBAT trigger repeatedly produced `SALT-GNAW RAT`.
- Core loop worked: `/dev` → `ENCOUNTER TRIGGERS` → `COMBAT` → `FIGHT` → stance → action/skill → round resolution → victory.
- Main combat UI preserved `VITAE`, `STANCE`, and `CHOOSE A STANCE`; the old HEALTH/GUARD main-combat regression was not present in the completed ladder.
- Pre-fight copy still used `HP`/`hp` (`Lv 1 foe · 15 HP`, `level 1 · 15 hp.`); treat this as copy debt against VITAE doctrine.
- Body actions generated BOD fuel; Body skills such as `Achilles' Gambit` / `Ad Hominem Strike` became usable. Heart skills remained unaffordable without HRT fuel.
- Status names/logs surfaced (`Ad Baculum`, `Briar Stance`, `Post Hoc Tremor`, `Fleeting Kindness`, scour/removal lines), but mechanical effect explanation was thin.

## Bug/critique candidates to preserve as transient findings

Do not bake these into stable doctrine as “rules”; route them to the dated report, Mobile `plan/CRITIQUE.md`, or phase briefs if T/Judge promotes them:

- SELF → `Open dev tools` / DEV TOOLS link may not visibly navigate in exported browser runs; direct `/dev` works.
- Action cards can be clipped/offscreen after stance selection or round continuation.
- Victory aftermath may show `FINAL BLOW · STRIKE · 0` despite observed nonzero lethal attack/skill.
- Unaffordable skills can open confirmation and silently no-op instead of explaining insufficient fuel.
- `ITEM unavailable` can appear clickable and silently no-op.
- Pre-fight and in-combat flee controls can appear clickable while giving no visible result/explanation under `NO RETREAT`.
- Combat log grammar can show lines like `Foe apply Vital Empathy`.

## Reporting rule

If visual smoke is red but export and console are clean, inspect diff images before classifying. Root/character/exploration pixel drift without runtime errors and without HEALTH/GUARD copy is baseline/regression judgment, not proof of broken combat.