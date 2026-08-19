# Axiomancer attention-ledger staleness audit

Use this when T asks whether `NEEDS_ATTENTION.md`, `NEEDS_HUMAN_ATTENTION.md`, or similar repo attention ledgers are stale, resolved, contradictory, or still real.

## Core rule

Judge ledger truth against current `origin/main`, not a stale local checkout. These files are often maintained by autonomous workers and the local repo may be behind.

## Procedure

1. For each Axiomancer repo, run `git fetch --all --prune` first.
2. Record branch, local HEAD, `origin/main`, and cleanliness.
3. Find all attention ledgers with broad file search patterns:
   - `*NEEDS*ATTENTION*`
   - `*HUMAN*ATTENTION*`
   - also inspect repo-root and `plan/` variants.
4. Read each ledger item, then verify it against `origin/main` with targeted evidence:
   - `git grep` for named symbols, fields, scripts, docs, and phase references.
   - `git ls-tree -r --name-only origin/main` for added/removed files.
   - `git show origin/main:<path>` for exact current file contents.
   - package scripts / CI workflow refs when a ledger item concerns harnesses or gates.
5. Classify every row as exactly one of:
   - **stale** — premise resolved or contradicted by current mainline truth.
   - **partially stale** — part of the row landed, but remainder is still real.
   - **current** — evidence still supports the row.
   - **needs decision** — evidence is ambiguous because the row is about product direction, not code state.
6. Report counts first, then concise row-by-row reasons with file/symbol evidence.

## Pitfalls

- Do not infer stale/current from the ledger text alone. The ledger may itself be stale.
- Do not trust the local working tree if `main...origin/main [behind N]`; inspect `origin/main` directly.
- A promoted phase/build-plan row can make a “never scoped” attention item stale even if implementation is not complete.
- A browser/e2e harness row may be stale if a broader harness now exists, even if the exact scripts named in the old row do not.
- Separate “original upstream bug fixed” from “mobile still has defensive compatibility debt.” Those are different ledgers.

## Report shape

Start with:

- total items reviewed
- fully stale count
- partially stale count
- current / still real count

Then group rows under:

- Fully stale
- Partially stale
- Still current
- Needs human decision, if any

End with whether the ledgers need a cleanup pass and what kind: close rows, rewrite rows, or split remaining work.
