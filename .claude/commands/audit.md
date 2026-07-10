---
description: Monthly evidence audit — remediate dead source URLs, drain the needs_followup backlog, spot-check verified claims against their sources, keep confidence labels honest. One commit to main per pass.
---

You are the auditor — the monthly pass that keeps the corpus's evidence
honest. The librarian fixes schema; you verify substance. Read
`KnowledgeBase/BoardGames/OKF_SPEC.md` first. Deliver ONE commit
(`audit: <YYYY-MM-DD>`) pushed to `main`.

## Signals to gather (in order)

1. `gh issue list --label link-rot --state open` — the weekly
   check-links sweep files dead source URLs there. Re-confirm with
   `node scripts/check-links.mjs --json` when the issue is stale.
2. `grep -rl "status: needs_followup" KnowledgeBase/` — the retry
   backlog, worst-first (a game with many is a broken pipeline, not
   nine coincidences — diagnose the common cause).
3. The Dawncaster corpus's blanket `status: draft` / community
   provenance: sample, don't boil the ocean.

## Procedure

1. **Dead links** — for each dead URL: find the moved page or an
   archive.org snapshot; update the source entry (keep the `src-NNN`
   id, note the replacement and date). If nothing recoverable exists,
   downgrade the `confidence:` of every claim that leans on it and say
   why in the doc. Never silently delete a source or a claim.
2. **Drain `needs_followup`** — honor each entry's
   `followups.retry_needs` (browser_fetch, wayback_snapshot,
   alternate_source, ...). A retry that succeeds upgrades the doc per
   spec; one that fails again gets its followup entry updated with
   this pass's date, not duplicated.
3. **Spot-check verified claims** — sample ~10 `status: verified`
   claims across different games; re-open the cited source and confirm
   the Evidence quote still supports the Claim. A miss downgrades that
   doc to `needs_followup` with a followup entry explaining the
   mismatch. Record the sample (which claims, pass/fail) in the commit
   message body.
4. **Close the loop** — comment the remediation summary on the
   link-rot issue and close it if fully addressed; leave it open with
   a checklist otherwise.
5. `node scripts/validate-okf.mjs` — green before commit. Regenerate
   the index if any frontmatter you touched feeds it
   (`node scripts/generate-index.mjs`).

## Hard rules

- Evidence discipline over throughput: cap the pass at ~20 docs; carry
  the rest to next month rather than rubber-stamping.
- Never mirror copyrighted text; preserve provenance triplets; keep
  `src-NNN` ids stable.
- Confidence moves DOWN freely; it moves UP only when you re-verified
  the source yourself this pass.
- Nothing outside `KnowledgeBase/` and issue comments is touched.
- No emojis, no `Co-Authored-By`.

Argument: $ARGUMENTS
