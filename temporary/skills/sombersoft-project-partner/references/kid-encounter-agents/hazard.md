---
name: hazard
encounter_type: hazard
scope: category
node_ids: []
dev_menu_button: HAZARD
docs:
  - axiomancer-mobile/design/hazard-minigame-mobile.md
  - axiomancer-mobile/scripts/hazard-e2e.mjs
  - axiomancer-mobile/components/hazard/
  - axiomancer-mobile/state/presenters/hazard.engine.ts
confidence: high
runs_informing_this: "2026-06-13 five-run Kid ladder; 2026-06-14 five-run Kid ladder; 2026-06-15 five-run Kid ladder; 2026-06-16 five-run Kid ladder; 2026-06-18 five-run Kid ladder; 2026-06-22 five-run Kid ladder; stock e2e, targeted hazard tests, adapted positive-seed/browser/engine witnesses, mobile visual/typecheck evidence, encounter-routing e2e, and current dev-tools route regression evidence"
updated: 2026-06-22
---

# Hazard — play doctrine

> Durable play doctrine for The Kid. Stable how-to-play only. **Transient bugs do NOT live here** — route them to the dated playthrough report, the owning repo's `plan/CRITIQUE.md`, or issue candidates (see the firewall in `../kid-encounter-playtest-learning.md`).

## How to enter (exact route)

SELF → `DEV MENU` → `DEBUG · TRIGGER ENCOUNTER` → `HAZARD`.

The shipped browser e2e path enters the same surface by opening the exported web build, navigating to the character/SELF route, expanding the dev menu, and using the hazard debug trigger. It pins deterministic dev hooks before boot:

- safe route seed: `424242`
- risk route seed: `424243`

## What it is

Hazard is a tactical card-and-dice crisis minigame. The player chooses Safe or Risk, stages action cards, powers mana actions with persistent dice, resolves three rounds into `O` or `X` marks, then claims the result and rewards/consequences ledger. A real playthrough reaches the final outcome ledger and closes cleanly back to the app.

## Rules learned

- Route choice happens before the round sequence and binds the whole hazard.
- The screen presents a dice-cast interstitial before play.
- Each round lets the player stage cards from hand into the play area.
- Round 1 should exercise the trash/bin path: dragging a hand card to the trash increments discard and reduces hand count.
- Staged cards can be powered by dragging available mana dice onto them.
- Pressing `PLAY` commits the staged set and resolves the round.
- Each resolved round produces an `O` or `X` verdict.
- The stock deterministic e2e witness (`424242` Safe, `424243` Risk) produced `X X X` on both routes but still reached clean failure/reward-claim resolution. Treat it as an interaction/regression witness, not a winning-strategy witness.
- Positive-seed browser/engine witnesses prove real completion paths exist: Safe seed `1` can reach `PERFECT` (`O O O`) on Cracked Cliff with minimum-spend dice preservation; Risk seed `2` can reach `COMPLETE` (`O X X`); a 2026-06-15 targeted engine sim found Cracked Cliff Safe seed `26` can also project `O O O` from a balanced opening hand.
- Current shipped e2e doctrine asserts no automatic re-cast across rounds: dice IDs remain stable through the hazard unless card effects or implementation doctrine deliberately change them.
- Card effects can create or recast dice later. On the confirmed Safe seed `1` perfect line, `PILGRIM'S BLESSING` in round II creates the late resources needed for round III.
- Recent manual category samples show multiple hazard shells remain readable: `THE FAMINE MARCH` (`THE FORAGE TRAIL` / `THE DRY FLATS`), `CRACKED CLIFF PATH` (`LEDGE CRAWL` / `THE LEAP`), and `ASHFALL CROSSING` (`CINDER RIDGE` / `THE ASH RUN`).

## How to read it (UX / state cues)

- Route labels distinguish Safe and Risk.
- Dice are board objects; watch whether they remain available/spent/exhausted consistently across rounds.
- The hand, staged lane, trash/discard count, route badge, round label, and `O`/`X` marks are the chief state cues.
- Good state: visible hand cards, visible staged cards after drag, dice can attach to cards, `PLAY` advances to a clear verdict, final ledger appears.
- Bad state: card detail opens when trash/drop was intended, staged count fails to increase after drag, dice cannot be assigned, `PLAY` stalls, or final ledger cannot be claimed.

## How to play it well (winning doctrine)

- First prove the interaction loop: drag one weak/least useful card to trash, stage the rest, power the strongest staged cards with matching dice, then commit. The stock e2e's mandatory first-round trash is coverage of the bin path, not necessarily optimal play.
- For actual win-seeking, current cracked-cliff evidence favors **threshold-sufficient tempo**, not blind all-in play and not passive hoarding: stage the useful hand, spend enough dice to clear the current threshold, preserve or create dice for the late round when possible, and let surplus/momentum carry when it is cheap.
- At route select, do the first calculation before picking the route: total the opening hand's free/powered `FORCE + ESCAPE` for Safe and separately check whether both `FORCE` and `ESCAPE` can clear Risk. Pick Risk only when the lower meter is credible; overkilling one meter does not save a failed Risk round.
- Confirmed Safe seed `1` Cracked Cliff perfect line: round I stage all and power `SCRAMBLE` with the blue die (`PASSAGE 21/20`); round II stage all and power `PILGRIM'S BLESSING` with the yellow/gold die (`PASSAGE 30/23`, momentum +3, conjured dice); round III stage all and power `CLIFFRUNNER` with conjured yellow/gold plus `STONE STEPS` with conjured red (`PASSAGE 26/25`), final `O O O` / `PERFECT`.
- Safe seed `1` is a **minimum-spend tempo** lesson, not an all-in lesson: spend only enough to clear the current threshold and preserve/create late dice. A Safe all-in comparison can degrade the same seed to `COMPLETE` by exhausting dice before round III.
- Safe is the teaching/survival route because combined `PASSAGE` tolerates Force/Escape imbalance. Risk is the reward/perfect route only when the hand and dice can satisfy both meters in the same round. Risk seed `1` all-in comparison produced `X O X`, failing when one meter lagged even while the combined total looked strong, so do not prefer Risk by default.
- Treat all three rounds as one attrition puzzle. Do not spend attention merely winning round one if it leaves later rounds unreadable.
- **Threshold-sufficient tempo is the stable winning doctrine.** On Cracked Cliff Safe seed `1`, over-dragging/over-spending dice can degrade the known Perfect line into `O O X`; stop spending once the current threshold is crossed unless the card effect creates late resources.
- `PILGRIM'S BLESSING` is not scrap fodder on positive Safe lines: powering it in round II can both clear the current threshold and create/recast the late dice needed for round III.
- The current dev-tools route is SELF → `DEV TOOLS` (`self-dev-tools-link`) → Developer screen. The older inline `dev-menu-header` harness expectation is stale for the exported app surface.
- Current dev hazard deck controls expose deterministic presets: starter baseline, early/late straightforward, early/late enchantment, early/late utility, plus random `SHUFFLE FATE`. Use them for future matrix cells instead of reporting preset support absent.
- Current mechanics hazard CLI IDs are semantic (`cracked-cliff`, `flooded-undercroft`, `ashfall-crossing`, `famine-march`, `bandit-hunt`, `fever-rot`), not old `H01`/`H02` shorthand; the CLI route flag still accepts `top`/`bottom`, which map to Safe/Risk in output.
- Current CLI auto fallback evidence for `cracked-cliff`: Safe/top seed `1`, 3 runs all `OOX` complete; Risk/bottom seed `2`, 3 runs `XOO` complete, `OOX` complete, `XXX` failure. Treat CLI auto as fallback/system evidence, not phone feel.
- Current mobile regression evidence confirms the manual Safe seed `1` Cracked Cliff Perfect route still works from the exported app: `O O O`, `PERFECT`, `QUIET COMMUNION` reward preview/claim.
- The 2026-06-22 regression ladder reconfirmed that first-round trash or greedy/all-in spending can degrade the same Safe seed `1` line to `O O X`/`X O X`; trash-bin coverage is not winning doctrine. Preserve threshold-sufficient tempo: spend just enough to cross the current threshold, and prefer `PILGRIM'S BLESSING`/`QUIET COMMUNION` style resource/enchantment scaling for future hazards.
- Current stock e2e seeds are regression witnesses, not optimal-win witnesses: they complete cleanly but fail `X X X`. Future ladders should run configurable positive seeds such as Safe `1` and Risk `2` to demonstrate at least one `O` and then a full positive/partial-success claim.

## Loss / failure conditions & recovery

- Three `X` verdicts produce failure. Failure is acceptable evidence only if the flow still reaches the outcome and rewards/consequences ledger.
- Recover from a weak hand by using the trash/bin to discard and by prioritizing cards/dice that hit the active threshold type.
- If a drag opens card detail instead of moving the card, close the detail and mark the drop path suspect; repeated failures belong in the dated report, not here.

## Known-good end-to-end checklist

- Enter via SELF → DEV MENU → HAZARD or the equivalent deterministic e2e dev hook.
- See route/dice-cast opening.
- For Safe route: play all three rounds, stage cards, power cards, resolve each round, reach final outcome, claim/close clean.
- For Risk route: repeat the same full sequence.
- Confirm no browser console/runtime errors in the harness output.
- Optional screenshot evidence: `screenshots/hazard-e2e/01-safe-route-select.png` through `20-risk-rewards.png` when `HAZARD_E2E_SCREENSHOTS=1` is set.

## Regression watchpoints (stable)

- Dev trigger button remains `HAZARD` under SELF → DEV MENU.
- The preferred route is `DEBUG · TRIGGER ENCOUNTER` → `HAZARD`; `DEBUG · HAZARD` / `BRAVE IT` is an acceptable dev fallback when the category trigger fails to surface a visible minigame.
- Both category-triggered and direct-debug hazard entry must produce a visibly rendered intro/route-select/board, not merely mounted hidden test IDs behind SELF or WILDS.
- Both Safe and Risk routes can be completed end-to-end from the exported web build.
- Route-select panels/opening hand should be visibly readable after the Reanimated entrance settles; immediate screenshots may falsely look blank while DOM hit targets exist.
- Wait for the dice-cast interstitial to fully clear before dragging cards; otherwise the board can be visible while drops fail and `PLAY` remains disabled.
- Tapping a card opens its detail/rules overlay; staging still requires drag. The overlay currently closes by tapping anywhere, but the accessibility tree may expose that close affordance as a generic clickable surface rather than a semantic button/dialog.
- Drag-to-trash discards a hand card rather than opening detail.
- Dragging a staged card to trash currently behaves like silent unstage/return-to-hand rather than discard; if doctrine changes to allow staged-card discard, demand explicit feedback and discard-count truth.
- Drag-to-stage increases staged count.
- Dice drag onto staged cards and become visible as powered/spent.
- `PLAY` advances each round and marks `O`/`X` visibly.
- Final result and rewards/consequences can be claimed and closed.
- Reward selection is a two-step flow in the current UI: tap an offered card to open the preview, press `TAKE THIS CARD` inside the preview, then press the main `TAKE IT — ONWARD` ledger confirm. If the preview is open, the main confirm behind it is intentionally blocked.
- Reward offer accessibility remains mixed: some runs expose card names via aria labels or preview but not tile inner text. A card-name tile regression belongs in the dated report/CRITIQUE, not as stable play doctrine.
- Reward preview keyword serialization can render raw `[object Object]` text; this is a transient UI bug/watchpoint, not a rules change.
- On the web/dev route, wait for the hazard intro overlay to be fully hidden before clicking Safe/Risk. Immediate route input after intro dismissal can look swallowed; the committed e2e avoids this by waiting for `hazard-intro-overlay` to detach/hidden before selecting a route.
- Dice recast doctrine is currently split in old docs versus shipped e2e comments; treat any intentional change here as doctrine work requiring doc/code reconciliation.
- The known RN-web warning cluster (`accessibilityElementsHidden`, `importantForAccessibility`, `translateX`, `translateY`, React 19 `element.ref`, Reanimated transform/opacity warnings) is noise unless it is paired with a visible play blocker or runtime page error.

## Open questions / learn next

- Add first-class configurable winning/regression seeds to the committed hazard e2e harness so stock failure witnesses and positive-route witnesses can both run without temporary script copies.
- Reconcile the old mobile design brief line that risk dice re-cast between rounds with the shipped e2e assertion that dice never re-cast.
- Add structured console capture to the encounter-learning ladder if the generic hazard e2e does not expose all page console output.
- Decide whether staged-card-to-trash should be forbidden with feedback or should become an explicit discard action.
- Investigate the intermittent debug-entry layering/activation issue from the 2026-06-14 and 2026-06-15 ladders: category trigger or direct debug can leave SELF/WILDS DOM mounted behind hazard, and accessibility-level clicks on `DEBUG · TRIGGER ENCOUNTER` → `HAZARD` can fail to visibly route while DOM/test-id activation succeeds.

## Subagent run directive

When this file is used as a subagent's base prompt, the worker should: read this doctrine plus the encounter's current docs/code, enter via the route above, play with the **lens and run number the parent injected**, learn/confirm the doctrine, test end-to-end, and return the structured note schema from `../kid-encounter-playtest-learning.md`. Then stop. Propose stable updates to this file in the `recommended durable agent-file updates` field; put build-specific bugs in `transient report/CRITIQUE candidates`.

## Provenance

- Confidence: `high`. Informed by: `2026-06-13`, `2026-06-14`, `2026-06-15`, `2026-06-16`, and `2026-06-18` daily Kid hazard ladders, five fresh subagent runs per ladder, stock exported-web hazard e2e, encounter-routing e2e, adapted positive-seed browser/engine witnesses, targeted hazard tests, current dev-tools route evidence, CLI auto fallback matrix, and successful mobile typecheck / visual smoke export evidence. Last updated: `2026-06-18`.
