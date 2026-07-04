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
2. **Drain `status: needs_followup`.** For each such doc, read its
   `Open questions` / failure notes, retry the failed sources (WebFetch
   the URLs; for PDFs try WebFetch first, then `curl -L` + a text
   extraction attempt). On success: verify or correct the affected
   claims, upgrade their per-claim confidence, flip doc status to
   `verified`. On another failure: leave status, append a dated retry
   note with what a future attempt needs. Never delete an honest
   failure record.
3. **Wishlist hygiene.** For each unchecked `WISHLIST.md` entry that the
   corpus now covers, check it off with a pointer to the game dir.
4. **Dedupe / contradiction check.** Flag (in the commit body, not by
   deleting) near-duplicate docs and claims that contradict across docs
   of the same game.

Hard rules:

- **Never mirror copyrighted rulebook text.** Short quotes to prove
  claims, per the spec's citation discipline.
- **Content edits must preserve provenance:** every changed claim keeps
  or gains a `Source:` + `Evidence:` + `Confidence:` triplet.
- **No new games.** Scouting is the daily cron's job; you maintain.
- **Validator green before commit.** No emojis, no `Co-Authored-By`.
- If nothing needs doing, exit cleanly with no commit — "clean" is a
  valid pass.

Argument: $ARGUMENTS
