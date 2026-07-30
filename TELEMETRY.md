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
| 2026-07-20T07:04:34Z | generate-index | games/**/*.okf.md frontmatter | 57 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-20T07:04:35Z | validate-okf | full corpus + index/sidecar freshness | 2482 files | 0 | yes | - |
| 2026-07-20T07:04:51Z | validate-okf | full corpus + index/sidecar freshness | 2482 files | 0 | yes | - |
| 2026-07-22T15:49:40Z | validate-okf | full corpus + index/sidecar freshness | 2482 files | 0 | yes | - |
| 2026-07-22T20:15:16Z | generate-index | games/**/*.okf.md frontmatter | 59 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-22T20:15:16Z | validate-okf | full corpus + index/sidecar freshness | 2495 files | 0 | yes | - |
| 2026-07-22T20:15:43Z | validate-okf | full corpus + index/sidecar freshness | 2495 files | 0 | yes | - |
| 2026-07-22T20:16:23Z | validate-okf | full corpus + index/sidecar freshness | 2495 files | 0 | yes | - |
| 2026-07-23T02:01:14Z | generate-index | games/**/*.okf.md frontmatter | 61 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-23T02:01:14Z | validate-okf | full corpus + index/sidecar freshness | 2508 files | 0 | yes | - |
| 2026-07-23T02:02:01Z | validate-okf | full corpus + index/sidecar freshness | 2508 files | 0 | yes | - |
| 2026-07-23T02:03:01Z | validate-okf | full corpus + index/sidecar freshness | 2508 files | 0 | yes | - |
| 2026-07-23T02:04:46Z | validate-okf | full corpus + index/sidecar freshness | 2508 files | 0 | yes | - |
| 2026-07-23T02:05:23Z | validate-okf | full corpus + index/sidecar freshness | 2508 files | 0 | yes | - |
| 2026-07-23T06:05:26Z | generate-index | games/**/*.okf.md frontmatter | 62 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-23T06:05:26Z | validate-okf | full corpus + index/sidecar freshness | 2519 files | 1 | yes | - |
| 2026-07-23T06:06:43Z | generate-index | games/**/*.okf.md frontmatter | 62 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-23T06:06:44Z | validate-okf | full corpus + index/sidecar freshness | 2520 files | 1 | yes | - |
| 2026-07-23T06:07:09Z | generate-index | games/**/*.okf.md frontmatter | 62 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-23T06:07:09Z | validate-okf | full corpus + index/sidecar freshness | 2520 files | 0 | yes | - |
| 2026-07-23T06:07:30Z | validate-okf | full corpus + index/sidecar freshness | 2520 files | 0 | yes | - |
| 2026-07-23T20:23:58Z | generate-index | games/**/*.okf.md frontmatter | 62 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-23T20:23:59Z | validate-okf | full corpus + index/sidecar freshness | 2529 files | 0 | yes | - |
| 2026-07-24T06:05:42Z | generate-index | games/**/*.okf.md frontmatter | 63 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-24T06:05:42Z | validate-okf | full corpus + index/sidecar freshness | 2541 files | 0 | yes | - |
| 2026-07-24T06:05:57Z | validate-okf | full corpus + index/sidecar freshness | 2541 files | 0 | yes | - |
| 2026-07-26T06:38:12Z | generate-index | games/**/*.okf.md frontmatter | 76 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-26T06:38:12Z | validate-okf | full corpus + index/sidecar freshness | 2571 files | 202 | yes | - |
| 2026-07-26T06:41:30Z | generate-index | games/**/*.okf.md frontmatter | 75 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-26T06:41:30Z | validate-okf | full corpus + index/sidecar freshness | 2581 files | 0 | yes | - |
| 2026-07-26T06:45:50Z | check-links | all frontmatter url: in KnowledgeBase/ | 1944 unique  | 88 | yes | 14 dead, 74 suspect |
| 2026-07-26T06:48:55Z | generate-index | games/**/*.okf.md frontmatter | 75 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-26T06:48:56Z | validate-okf | full corpus + index/sidecar freshness | 2581 files | 0 | yes | - |
| 2026-07-26T06:50:56Z | check-links | all frontmatter url: in KnowledgeBase/ | 1944 unique  | 82 | yes | 3 dead, 79 suspect |
| 2026-07-26T06:51:16Z | validate-okf | full corpus + index/sidecar freshness | 2581 files | 0 | yes | - |
| 2026-07-27T06:08:56Z | generate-index | games/**/*.okf.md frontmatter | 76 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-27T06:08:57Z | validate-okf | full corpus + index/sidecar freshness | 2593 files | 0 | yes | - |
| 2026-07-27T07:04:17Z | generate-index | games/**/*.okf.md frontmatter | 76 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-27T07:04:18Z | validate-okf | full corpus + index/sidecar freshness | 2593 files | 0 | yes | - |
| 2026-07-28T06:05:25Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-28T06:05:25Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 0 | yes | - |
| 2026-07-29T06:05:37Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-29T06:05:38Z | validate-okf | full corpus + index/sidecar freshness | 2617 files | 0 | yes | - |
| 2026-07-29T10:32:45Z | generate-index | games/**/*.okf.md frontmatter | 101 table ro | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-29T10:32:45Z | validate-okf | full corpus + index/sidecar freshness | 2859 files | 626 | yes | - |
| 2026-07-29T10:35:14Z | generate-index | games/**/*.okf.md frontmatter | 101 table ro | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-29T10:35:14Z | validate-okf | full corpus + index/sidecar freshness | 2859 files | 0 | yes | - |
| 2026-07-29T10:39:41Z | check-links | all frontmatter url: in KnowledgeBase/ | 2061 unique  | 137 | yes | 8 dead, 129 suspect |
| 2026-07-29T10:41:18Z | generate-index | games/**/*.okf.md frontmatter | 101 table ro | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-29T10:41:18Z | validate-okf | full corpus + index/sidecar freshness | 2859 files | 0 | yes | - |
| 2026-07-29T10:43:19Z | check-links | all frontmatter url: in KnowledgeBase/ | 2058 unique  | 127 | yes | 3 dead, 124 suspect |
| 2026-07-29T12:09:01Z | generate-index | games/**/*.okf.md frontmatter | 101 table ro | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-29T12:09:02Z | validate-okf | full corpus + index/sidecar freshness | 2859 files | 0 | yes | - |
| 2026-07-29T12:11:09Z | generate-index | games/**/*.okf.md frontmatter | 101 table ro | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-29T12:11:09Z | validate-okf | full corpus + index/sidecar freshness | 2859 files | 0 | yes | - |
| 2026-07-29T12:15:53Z | generate-index | games/**/*.okf.md frontmatter | 163 table ro | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-29T12:15:53Z | validate-okf | full corpus + index/sidecar freshness | 3579 files | 600 | yes | - |
| 2026-07-29T12:16:53Z | generate-index | games/**/*.okf.md frontmatter | 163 table ro | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-29T12:16:53Z | validate-okf | full corpus + index/sidecar freshness | 3579 files | 0 | yes | - |
| 2026-07-29T12:19:58Z | generate-index | games/**/*.okf.md frontmatter | 163 table ro | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-29T12:19:58Z | validate-okf | full corpus + index/sidecar freshness | 3579 files | 0 | yes | - |
| 2026-07-30T08:57:48Z | validate-okf | full corpus + index/sidecar freshness | 3579 files | 0 | yes | - |
| 2026-07-30T09:03:21Z | generate-index | games/**/*.okf.md frontmatter | 163 table ro | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-30T09:03:31Z | validate-okf | full corpus + index/sidecar freshness | 3579 files | 0 | yes | - |
