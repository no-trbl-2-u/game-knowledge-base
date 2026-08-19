# Axiomancer encounter taxonomy distinction

Use this when discussing Axiomancer encounter design, especially future non-combat Event encounters and minigames.

## Core distinction

Do not collapse these layers:

1. **Encounter Archetype / Type** — player-facing design identity: what sort of trial this is.
   - Examples: Combat, Social Parley, Moral Dilemma, Exploration, Hazard, Gathering/Resource, Rest/Sanctuary, Village/Market, Narrative/Cutscene, Puzzle/Logic, Gambit/Chance, Quest/Discovery.
   - Answers: "What kind of situation is the player entering?"

2. **Encounter Procedure / What Happens progression** — the sequence of beats inside an archetype.
   - Examples: intro -> choose lesser evil -> wager resource -> resolve check/minigame -> reveal consequence -> apply alignment/faction/quest/reward changes -> consume node -> unlock next nodes.
   - Answers: "What unfolds after the encounter starts?"

3. **Engine Handler / `MapEventKind`** — current mechanics dispatch bucket.
   - Current values: `encounter`, `interaction`, `gathering`, `rest`, `village`, `cutscene`, `hazard`, `loot-cache`.
   - These are implementation buckets, not necessarily final player-facing encounter types.

## Pitfall

When T asks for encounter "types," do not merely list `MapEventKind` values unless he explicitly asks for the code enum. Ask whether he means design archetypes only if ambiguous; otherwise separate archetype, procedure, and engine handler in the answer.

## Design rule

Keep the taxonomy smaller than the procedure library. A fat list of ultra-specific types makes the system brittle. Prefer a compact set of encounter archetypes, each supporting multiple procedures and resolution scripts.
