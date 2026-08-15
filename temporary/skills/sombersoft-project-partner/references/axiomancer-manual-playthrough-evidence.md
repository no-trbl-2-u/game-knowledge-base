# Axiomancer manual playthrough evidence workflow

Use when T performs a manual Axiomancer playthrough, sends screenshots, or reports first-player findings while an agenda or automation loop is in progress.

## Core rule

Manual playthrough evidence outranks the meeting agenda. Pause the agenda, capture the field report, then resume planning from the corrected evidence. Do not wait for screenshot baselines before fixing independent gameplay bugs.

## Evidence filing pattern

For `axiomancer-mobile`:

1. Treat user screenshots as evidence and, when approved as reference material, store them under:
   - `test-artifacts/reference-screenshots/<YYYY-MM-DD>-manual-playthrough/`
2. Use ordered, semantic filenames rather than cache names or timestamps only, e.g.:
   - `01-title-or-opening.jpg`
   - `03-wilds-map.jpg`
   - `05-combat-actions-item-broken.jpg`
   - `10-dev-menu-open.jpg`
3. Update `plan/PLAYTEST_REPORT.md` with a concise manual-playthrough addendum including:
   - observed behavior
   - screenshot directory and filename index
   - which findings are UI, mechanics, or balance evidence
4. Add user-source rows to `plan/CRITIQUE.md` for mobile-owned defects. Examples:
   - broken combat Item action layout
   - inert `/wilds` map nodes
   - SELF screen labels wrapping into unreadable columns
5. Commit and push evidence-only changes without running verify/deploy gates unless code changed.

For `axiomancer-mechanics`:

1. File mechanics-owned playthrough findings in `plan/CRITIQUE.md` or the repo-local equivalent.
2. Prefer actionable rows over broad lament. Include reproduction distinction and expected state.
3. Commit and push when the repo-local autonomy contract allows it.

## Findings shape from 2026-05-29 manual playthrough

Useful durable patterns:

- Combat recurrence can be outcome-specific. In the observed case, defeat + restart allowed a later fight, while both friendship victory and regular victory suppressed future combat. Future agents should test defeat/restart, friendship victory, and regular victory separately before declaring a combat recurrence bug fixed.
- Screenshot/reference-baseline work is parallel to mechanics fixes. Do not block combat recurrence repair on screenshot processing.
- First-playthrough difficulty evidence should distinguish mathematical scaling from onboarding order. Scaling may be conceptually desired but still feel brutal if the first fight denies room to learn stance, tokens, skills, friendship, items, and retreat.
- Skill availability should be judged from player expectation: if a skill is learned, the player expects it to be available unless a deliberate deck/loadout system is designed. Combat presentation should filter by current usability.
- Token accumulation failures invalidate skill-casting evidence; fix/prove the resource economy before judging skills.
- Dev Menu screenshots are evidence of available test levers. Seed, Populate, mock Combat, Map reset, presets, XP/level-up, Mana drain/fill, Currency, and Alignment shifts can support canonical playtest lanes.

## Canonical playtest lanes requested

When building deterministic Axiomancer playtest coverage, include at least:

1. **Start-game lane**
   - level 1 player
   - easy enemies
   - proves onboarding balance and basic loop comprehension

2. **Endgame lane**
   - max level
   - max stats
   - all items and all skills unlocked
   - proves late-system coverage and endgame UI pressure

These lanes belong before broad scaling/tuning conclusions. They create the witnesses; then Tobin can judge the numbers.

## Pitfalls

- Do not let `/march` or an agenda keep moving while fresh manual playthrough evidence is arriving.
- Do not treat all screenshots as merely visual baselines; many are mechanics or balance evidence.
- Do not file everything in mobile. Split findings by ownership: mobile for presentation/layout/route interaction; mechanics for recurrence, token economy, skill semantics, and balance lanes.
- Do not overclaim a full playthrough if remaining map nodes do nothing or a button blocks progress. Report the blocked path precisely.
