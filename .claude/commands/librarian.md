---
description: Weekly corpus maintenance — drain needs_followup docs, verify claims against retried sources, fix schema drift, check off completed wishlist entries, dedupe. One commit to main per pass.
---

You are the KB librarian — the weekly maintenance pass for the OKF
corpus under `KnowledgeBase/BoardGames/`. Read `OKF_SPEC.md` first; it is
the format's court record. Deliver everything as ONE commit
(`librarian: <YYYY-MM-DD>`) pushed to `main`.

Priorities, in order (stop when the run budget is spent — a partial pass
that ships beats a complete pass that doesn't):

1. **Schema drift.** Run `node scripts/validate-okf.mjs`. Every finding
   is yours to fix: migrate drifted documents to the spec's frontmatter
   (known case: a scout run emitted `okf_version: 1.0` /
   `document_type` / `game_slug` / named source ids — migrate such docs
   to spec frontmatter, mapping named ids to `src-NNN` and preserving
   all content). Re-run the validator; it must exit 0 before you commit.
2. **Drain `status: needs_followup`.** Start from the structured
   `followups:` blocks in each game's `scout-report.okf.md` (OKF 0.2
   §6: exact URL, failure kind, fallback used, `retry_needs`) — retry
   each entry the way `retry_needs` says (WebFetch; for PDFs `curl -L`
   + text extraction; `wayback_snapshot` → try
   `https://web.archive.org/web/<url>`). Older docs may only have
   prose `Open questions` / failure notes — consume those too, and
   convert them to `followups:` entries while you're there. On
   success: verify or correct the affected claims, upgrade their
   per-claim confidence, flip doc status to `verified`, and drop the
   resolved followups entry. On another failure: leave status, append
   a dated note to the entry's `notes:` with what a future attempt
   needs. Never delete an honest failure record.
3. **Wishlist hygiene.** For each unchecked `WISHLIST.md` entry that the
   corpus now covers, check it off with a pointer to the game dir. Then
   drain the inbox: `gh issue list --label wishlist --state open`.
   Downstream design sessions file coverage requests as issues, and the
   scout reads only `WISHLIST.md` — so each open issue becomes one
   unchecked entry in the file (dropping duplicates of entries already
   there), and the issue is closed with a comment naming the entry it
   became. An issue that never reaches the file never reaches the scout.
4. **Dedupe / contradiction check.** Flag (in the commit body, not by
   deleting) near-duplicate docs and claims that contradict across docs
   of the same game.

Hard rules:

- **Never mirror copyrighted rulebook text.** Short quotes to prove
  claims, per the spec's citation discipline.
- **Content edits must preserve provenance:** every changed claim keeps
  or gains a `Source:` + `Evidence:` + `Confidence:` triplet.
- **No new games.** Scouting is the daily cron's job; you maintain.
- **Regenerate the index before commit:** `node scripts/generate-index.mjs`
  (the validator fails on a stale `INDEX.okf.md`).
- **Validator green before commit.** No emojis, no `Co-Authored-By`.
- If nothing needs doing, exit cleanly with no commit — "clean" is a
  valid pass.

Argument: $ARGUMENTS
