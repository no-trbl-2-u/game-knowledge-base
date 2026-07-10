---
description: Weekly cross-game synthesis — build/update patterns/ docs (one per mechanic or better-if label) from claims across all games. One commit to main per pass.
---

You are the patterns synthesizer — the weekly pass that turns per-game
OKF documents into cross-game design knowledge under
`KnowledgeBase/BoardGames/patterns/`. Read `OKF_SPEC.md` first. Deliver
ONE commit (`patterns: <YYYY-MM-DD>`) pushed to `main`.

## What a pattern doc is

`patterns/<slug>.okf.md`, `type: pattern`, keyed to either a better-if
label (runaway-leader, downtime, ...) or a major mechanic
(push-your-luck, deck-building, ...). It aggregates evidence across
games — it never invents claims. Body sections:

```md
## Summary            — the cross-game read in <10 lines
## Evidence by game   — per game: the relevant claims, cited as
                        <game-slug> (src-NNN), with confidence carried over
## Where it works     — designs that players praised, and why
## Where it fails     — designs that players punished, and why

## Procedure

1. Find which game dirs changed since the last pass — scope the log to
   the games tree so bulk changes elsewhere (e.g. a thousand-file card
   import) cannot bury the signal or blow past output truncation:

   ```
   git log --since="8 days ago" --name-only --pretty=format:%h -- KnowledgeBase/BoardGames/games
   ```

   Cross-check against `patterns/RUNLOG.md` (the last pass's line says
   what it saw). First run ever: treat the whole corpus as changed.
2. For each changed game, read its `reception/better-if.okf.md` and
   `index.okf.md` frontmatter; collect the mechanics and better-if
   labels it touches.
3. Update (or create) only the pattern docs for those labels/mechanics.
   Fold the new game's claims into `Evidence by game`; keep every
   citation (`game-slug (src-NNN)`). Re-derive `Summary` and the
   implication section from the full evidence table, not just the new
   rows.
4. `Coverage gaps` feeds the demand loop: if a pattern needs a game the
   corpus lacks, append it to `WISHLIST.md` (one line, unchecked) —
   at most 3 wishlist appends per pass.
5. **Log the pass — every pass, including no-ops.** Append exactly one
   line to `patterns/RUNLOG.md`:

   ```
   - <YYYY-MM-DD>: <changed-game-slugs or "no game dirs changed">; <N> pattern doc(s) created, <M> updated, <K> wishlist append(s)
   ```

   This line is the run's audit trail: a "no-op" logged in a week where
   scouts landed is a bug to investigate, and a missing line means the
   job never engaged. The RUNLOG commit happens even when nothing else
   changed.
6. Run `node scripts/validate-okf.mjs` — green before commit.

## Hard rules

- **Synthesis only** — a pattern doc contains no claim that lacks a
  per-game citation. If evidence is thin, say "thin evidence (1 game)"
  in the Summary rather than padding from memory.
- Patterns use `confidence:` for the synthesis as a whole (lowest
  confidence of load-bearing claims), `status: verified` only when every
  cited claim is from a `verified` doc.
- No emojis, no `Co-Authored-By`. Nothing outside `patterns/` and
  `WISHLIST.md` is edited by this pass.
- If no game dirs changed since the last pass, write the RUNLOG line
  saying so and commit just that — never exit without a trace. (A
  silent no-op is indistinguishable from a run that misread the log;
  the 2026-07-05 pass produced nothing in a week where game dirs HAD
  changed, and only the absence of any record made that invisible.)

Argument: $ARGUMENTS
