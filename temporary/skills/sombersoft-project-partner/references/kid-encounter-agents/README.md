# Kid encounter agent files

Durable, per-encounter **play doctrine** that The Kid maintains and reuses. When an encounter-learning ladder completes (see `../kid-encounter-playtest-learning.md`), the main Kid writes or updates a file here. On future runs, if a file already exists for the encounter, the spawned subagent uses that file as its **base prompt** instead of a generic scout prompt, then layers on the run's lens, run number, and accumulated notes.

This is how the Kid gets better over time: each encounter accrues stable knowledge of how to enter, read, and win it, and that knowledge is reused and sharpened on every future ladder.

## What lives here

Stable doctrine only:

- how to enter the encounter (exact route),
- what the minigame is and how it works,
- how to read its on-screen state,
- how to play it well (winning/optimization doctrine),
- loss/failure conditions and recovery,
- a known-good end-to-end checklist (what proves a real, complete playthrough),
- regression watchpoints (durable expectations that, if broken, signal a regression).

## What does NOT live here

Transient build bugs, build-specific repro steps, one-off blockers, console errors from a single build. Those go to:

- `~/Workspace/reports/axiomancer-playthrough/YYYY-MM-DD.md` (the dated playthrough report),
- the owning repo's `plan/CRITIQUE.md` (mobile vs mechanics by ownership; `skills/jot.md` conventions where they apply),
- issue candidates.

See the durable-vs-transient firewall in `../kid-encounter-playtest-learning.md`. A bug becomes an agent-file line only after it stabilizes into permanent doctrine, and even then it is phrased as doctrine, not as a build-specific defect.

## Naming

- **Category file:** `<type>.md` — `combat.md`, `boss.md`, `hazard.md`, `rest.md`, `gather.md`, `treasure.md`, `quest.md`.
- **Specific named node:** `<node-id>-<slug>.md` — e.g. `fv-3-hanged-wood.md`, `nf-5-wolfs-den.md`.

Category labels map to the dev-menu trigger buttons: `COMBAT`, `BOSS`, `HAZARD`, `REST`, `GATHER`, `TREASURE`, `QUEST` (see the protocol doc).

## Using a file as a subagent base prompt

The parent composes a run's subagent prompt as:

> this doctrine file + run lens + run number + accumulated notes from prior runs + the structured note schema to return.

The file is the durable base; the run-specific directive is layered on top. The file's `## Subagent run directive` section tells the spawned worker what to do with the doctrine for the current run.

## Updating

- Merge new stable knowledge into the existing file; don't duplicate or spawn a second file for the same encounter.
- Raise or lower the `confidence` line based on the evidence.
- Keep transient bugs OUT. Keep each file lean and current; prune doctrine that later runs prove wrong.

## Format

Copy `_TEMPLATE.md` for any new encounter agent file.

## Index

Maintained by the main Kid. One row per encounter agent file.

| File | Encounter | Scope | Confidence | Last updated |
|------|-----------|-------|------------|--------------|
| `_TEMPLATE.md` | (template, not an encounter) | — | — | — |
| `hazard-combat-first-level.md` | Hazard-style combat first-level walkthrough | route | medium | 2026-06-23 |
| `combat.md` | Legacy Combat | category | medium | 2026-06-21 |
| `boss.md` | Boss | category | low | 2026-06-16 |
| `hazard.md` | Hazard | category | high | 2026-06-22 |
| `gather.md` | Gathering | category | low | 2026-06-16 |
| `rest.md` | Rest | category | low | 2026-06-16 |
| `treasure.md` | Treasure / Loot-cache | category | low | 2026-06-16 |
| `quest.md` | Quest Board | category | low | 2026-06-16 |
