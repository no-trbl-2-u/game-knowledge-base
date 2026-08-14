# Axiomancer Mobile Memoir inner-tab phase pattern

Use when T asks to reorganize the Memoir screen, journal/codex surfaces, quest records, alliances, philosophy/alignment, or effects-known/unknown readback into phase work.

## Session-derived doctrine (2026-06-19)

T requested Memoir inner tabs for:

- Quests
- Alliances
- Philosophy
- Effects

Clarifications captured before phase promotion:

- The Memoir inner tabs are **read-only for now**. Do not add tracking, pinning, marking-understood, joining/betraying, doctrine-choice, or apply-effect actions unless T later asks.
- Unknown effects render as exactly `???`.
- Known effects include only effects the player can currently cause and effects the player has encountered/been affected by. Do **not** dump the whole engine effects library into Known.
- Effects needs two collapsible/expandable sections: `KNOWN` and `UNKNOWN`.
- Effect rows are accordions: collapsed state shows icon + name (or `???`); expanded known rows show what the effect does and what causes it; expanded unknown rows may show vague cause/context but must not leak mechanics.

## Promotion pattern

If T asks for a phase per Memoir inner tab:

1. Ask the requested clarification count before writing phase files if T explicitly asks for questions. Follow the global one-question-at-a-time rule.
2. Create separate mobile phase briefs for each tab rather than one sprawling phase.
3. Phase ordering should put the tab scaffold first, usually Quests, because current Memoir already has quest data and can establish the shared inner-tab shell.
4. Later tab phases should depend on that scaffold and stay within their content domain.
5. Update both Nexus surfaces:
   - `plan/steps/01_build_plan.md`
   - `plan/PHASE_CANDIDATES.md` → `## Promoted`
6. Commit and push queue-state publication on clean `main` when T asked workers to pick it up.

## Recommended split

- Quests: add the inner-tab shell, default to Quests, move existing quest groups under it.
- Alliances: read durable relationship/bond/faction truth if present; use honest empty states where the engine/mobile store has no alliance model.
- Philosophy: move existing moral/philosophical Measure surface under Philosophy; use richer alignment state if available, otherwise label provisional derivation honestly.
- Effects: implement known/unknown collapsible sections and per-effect accordion rows with the known/unknown doctrine above.

## Pitfalls

- Do not fake alliances or factions from quest prose.
- Do not invent persistent effect-discovery state if current engine/mobile state cannot support it; document the limitation and use current/encountered/recent-effect truth only.
- Do not reveal unknown effect names or mechanics under the unknown accordion.
- Do not convert read-only tabs into player-action surfaces without fresh direction.
