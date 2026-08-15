---
name: <encounter-agent-name — e.g. hazard, or fv-3-hanged-wood>
encounter_type: <combat | boss | hazard | rest | gather | treasure | quest>
scope: <category | named-node>
node_ids: []            # for named-node files, e.g. [fv-3]; empty for a pure category
dev_menu_button: <COMBAT | BOSS | HAZARD | REST | GATHER | TREASURE | QUEST | n/a (walk WILDS)>
docs: []                # doc paths the ladder read, e.g. [docs/combat.md]
confidence: <low | medium | high>
runs_informing_this: <which ladder/runs produced this, with real dates — do not fabricate>
updated: <YYYY-MM-DD — fill from the real run date; leave TODO if unknown>
---

# <Encounter> — play doctrine

> Durable play doctrine for The Kid. Stable how-to-play only. **Transient bugs do NOT live here** — route them to the dated playthrough report, the owning repo's `plan/CRITIQUE.md`, or issue candidates (see the firewall in `../kid-encounter-playtest-learning.md`).

## How to enter (exact route)

SELF → `DEV MENU` → `DEBUG · TRIGGER ENCOUNTER` → `<BUTTON>`. (Named node: walk WILDS to `<node-id>` "<label>".) Record any preconditions — required map, level, party/resource state.

## What it is

One short paragraph: what the minigame/encounter is and what counts as winning it.

## Rules learned

- The mechanics that govern the minigame: turns, resources, stances, cards, timers, choices, the win/lose math.

## How to read it (UX / state cues)

- What the screen shows; which labels/indicators matter; what a good vs bad state looks like at a glance.

## How to play it well (winning doctrine)

- Concrete strong line of play: opening, mid, close. What to prioritize, what to avoid, the optimization that separates a win from a loss.

## Loss / failure conditions & recovery

- What ends the encounter badly, how to avoid it, and how to recover when it goes wrong.

## Known-good end-to-end checklist

- The sequence that proves a real, complete playthrough (combat: stance → action → round resolution → outcome; hazard/event: minigame completion or honest failure). Use this to tell a real run from an incomplete one.

## Regression watchpoints (stable)

- Durable expectations that, if they change or break, signal a regression against this known-good baseline. These are stable expectations, not build-specific bugs.

## Open questions / learn next

- What's still unknown; what the next ladder should probe.

## Subagent run directive

When this file is used as a subagent's base prompt, the worker should: read this doctrine plus the encounter's current docs/code, enter via the route above, play with the **lens and run number the parent injected**, learn/confirm the doctrine, test end-to-end, and return the structured note schema from `../kid-encounter-playtest-learning.md`. Then stop. Propose stable updates to this file in the `recommended durable agent-file updates` field; put build-specific bugs in `transient report/CRITIQUE candidates`.

## Provenance

- Confidence: `<low|medium|high>`. Informed by: `<runs / dates>`. Last updated: `<YYYY-MM-DD>`.
