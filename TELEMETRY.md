# TELEMETRY.md — corpus scan log

Appended by the deterministic scripts (via `scripts/telemetry-log.mjs`):
validate-okf (full-corpus runs only — the per-file post-write hook does
not log), check-links, generate-index, and the sidecar generator. Newest
rows last; the writer keeps the most recent 400 rows.

`complete` means the scan covered its whole intended scope; `findings`
counts whatever that pass flags (schema findings, dead links, ...).
Rows are point-in-time data — do not edit by hand, do not treat as a
work queue. The AI passes (scout/librarian/patterns/audit) have their
own logs (`patterns/RUNLOG.md`, run issues); this file is the
deterministic tier's.

| when (UTC) | pass | scope | scanned | findings | complete | note |
|---|---|---|---|---|---|---|
| 2026-08-10T18:36:09Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-10T18:37:06Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-10T18:37:10Z | validate-okf | full corpus + index/sidecar freshness | 2694 files | 0 | yes | - |
