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
| 2026-07-17T04:10:05Z | validate-okf | full corpus + index/sidecar freshness | 1947 files | 0 | yes | - |
| 2026-07-17T04:35:32Z | validate-okf | full corpus + index/sidecar freshness | 2392 files | 0 | yes | - |
| 2026-07-17T15:46:43Z | generate-index | games/**/*.okf.md frontmatter | 53 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-17T15:46:44Z | validate-okf | full corpus + index/sidecar freshness | 2418 files | 2 | yes | - |
| 2026-07-17T15:52:20Z | generate-index | games/**/*.okf.md frontmatter | 53 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-17T15:52:20Z | validate-okf | full corpus + index/sidecar freshness | 2420 files | 0 | yes | - |
| 2026-07-18T13:14:10Z | generate-index | games/**/*.okf.md frontmatter | 54 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-18T13:14:11Z | validate-okf | full corpus + index/sidecar freshness | 2432 files | 0 | yes | - |
| 2026-07-19T06:03:47Z | generate-index | games/**/*.okf.md frontmatter | 55 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-19T06:03:48Z | validate-okf | full corpus + index/sidecar freshness | 2443 files | 2 | yes | - |
| 2026-07-19T06:05:02Z | generate-index | games/**/*.okf.md frontmatter | 55 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-19T06:05:03Z | validate-okf | full corpus + index/sidecar freshness | 2444 files | 0 | yes | - |
| 2026-07-19T06:05:22Z | validate-okf | full corpus + index/sidecar freshness | 2444 files | 0 | yes | - |
| 2026-07-19T07:52:00Z | validate-okf | full corpus + index/sidecar freshness | 2470 files | 0 | yes | - |
| 2026-07-19T07:53:13Z | generate-index | games/**/*.okf.md frontmatter | 55 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-19T07:53:14Z | validate-okf | full corpus + index/sidecar freshness | 2470 files | 0 | yes | - |
| 2026-07-20T06:04:14Z | generate-index | games/**/*.okf.md frontmatter | 57 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-20T06:04:14Z | validate-okf | full corpus + index/sidecar freshness | 2482 files | 0 | yes | - |
