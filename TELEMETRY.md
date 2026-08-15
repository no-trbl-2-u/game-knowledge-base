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
| 2026-07-30T12:03:17Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-30T12:03:17Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 0 | yes | - |
| 2026-07-30T13:06:11Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 8 | yes | - |
| 2026-07-30T13:06:53Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 0 | yes | - |
| 2026-07-30T13:22:42Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-30T13:22:42Z | generate-sidecars | dawncaster/cards/*.okf.md | 1692 cards | 0 | yes | wrote 3 sidecar files |
| 2026-07-30T13:22:42Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 0 | yes | - |
| 2026-07-30T13:24:40Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 0 | yes | - |
| 2026-07-30T13:38:19Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-30T13:38:19Z | generate-sidecars | dawncaster/cards/*.okf.md | 1692 cards | 0 | yes | wrote 3 sidecar files |
| 2026-07-30T13:38:19Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 8 | yes | - |
| 2026-07-30T13:39:33Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-30T13:39:33Z | generate-sidecars | dawncaster/cards/*.okf.md | 1692 cards | 0 | yes | wrote 3 sidecar files |
| 2026-07-30T13:39:33Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 0 | yes | - |
| 2026-07-30T13:41:49Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 0 | yes | - |
| 2026-07-30T13:52:18Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-30T13:52:18Z | generate-sidecars | dawncaster/cards/*.okf.md | 1692 cards | 0 | yes | wrote 3 sidecar files |
| 2026-07-30T13:52:18Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 0 | yes | - |
| 2026-07-31T00:38:46Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 0 | yes | - |
| 2026-07-31T00:40:05Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-31T00:40:05Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 0 | yes | - |
| 2026-07-31T05:25:15Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-31T05:25:15Z | validate-okf | full corpus + index/sidecar freshness | 2605 files | 0 | yes | - |
| 2026-07-31T06:09:40Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-31T06:09:41Z | validate-okf | full corpus + index/sidecar freshness | 2611 files | 0 | yes | - |
| 2026-07-31T07:14:55Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-31T07:14:55Z | validate-okf | full corpus + index/sidecar freshness | 2620 files | 0 | yes | - |
| 2026-07-31T07:15:57Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-31T07:15:57Z | validate-okf | full corpus + index/sidecar freshness | 2620 files | 0 | yes | - |
| 2026-07-31T07:44:51Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-31T07:44:51Z | validate-okf | full corpus + index/sidecar freshness | 2620 files | 0 | yes | - |
| 2026-07-31T08:15:35Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-31T08:15:35Z | validate-okf | full corpus + index/sidecar freshness | 2620 files | 0 | yes | - |
| 2026-07-31T08:43:50Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-31T08:43:50Z | validate-okf | full corpus + index/sidecar freshness | 2620 files | 0 | yes | - |
| 2026-07-31T16:44:35Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-31T16:44:35Z | validate-okf | full corpus + index/sidecar freshness | 2611 files | 0 | yes | - |
| 2026-07-31T20:40:26Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-07-31T20:40:26Z | validate-okf | full corpus + index/sidecar freshness | 2611 files | 0 | yes | - |
| 2026-07-31T22:40:10Z | validate-okf | full corpus + index/sidecar freshness | 2611 files | 0 | yes | - |
| 2026-07-31T22:51:13Z | validate-okf | full corpus + index/sidecar freshness | 2611 files | 0 | yes | - |
| 2026-08-01T00:40:31Z | validate-okf | full corpus + index/sidecar freshness | 2611 files | 0 | yes | - |
| 2026-08-01T00:58:57Z | validate-okf | full corpus + index/sidecar freshness | 2611 files | 0 | yes | - |
| 2026-08-01T01:10:13Z | validate-okf | full corpus + index/sidecar freshness | 2611 files | 0 | yes | - |
| 2026-08-01T01:23:04Z | validate-okf | full corpus + index/sidecar freshness | 2611 files | 0 | yes | - |
| 2026-08-01T01:40:16Z | validate-okf | full corpus + index/sidecar freshness | 2611 files | 0 | yes | - |
| 2026-08-01T01:51:32Z | validate-okf | full corpus + index/sidecar freshness | 2611 files | 0 | yes | - |
| 2026-08-01T03:50:31Z | validate-okf | full corpus + index/sidecar freshness | 2611 files | 0 | yes | - |
| 2026-08-01T07:33:32Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-01T07:33:32Z | validate-okf | full corpus + index/sidecar freshness | 2620 files | 0 | yes | - |
| 2026-08-01T08:07:55Z | validate-okf | full corpus + index/sidecar freshness | 2616 files | 0 | yes | - |
| 2026-08-01T08:33:48Z | validate-okf | full corpus + index/sidecar freshness | 2625 files | 0 | yes | - |
| 2026-08-01T08:44:51Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-01T08:44:52Z | validate-okf | full corpus + index/sidecar freshness | 2629 files | 0 | yes | - |
| 2026-08-01T09:20:13Z | validate-okf | full corpus + index/sidecar freshness | 2625 files | 2 | yes | - |
| 2026-08-01T09:21:34Z | validate-okf | full corpus + index/sidecar freshness | 2625 files | 0 | yes | - |
| 2026-08-01T09:59:15Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-01T09:59:16Z | validate-okf | full corpus + index/sidecar freshness | 2625 files | 0 | yes | - |
| 2026-08-01T10:00:19Z | generate-index | games/**/*.okf.md frontmatter | 77 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-01T10:00:20Z | validate-okf | full corpus + index/sidecar freshness | 2625 files | 0 | yes | - |
| 2026-08-01T10:07:54Z | validate-okf | full corpus + index/sidecar freshness | 2625 files | 0 | yes | - |
| 2026-08-01T10:21:19Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-01T10:21:20Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-01T10:21:37Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-01T10:21:38Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-01T10:35:30Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-02T13:05:31Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-02T15:11:10Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-02T15:11:11Z | validate-okf | full corpus + index/sidecar freshness | 2646 files | 0 | yes | - |
| 2026-08-02T15:19:06Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-02T15:19:06Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-02T15:36:59Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-02T15:37:00Z | validate-okf | full corpus + index/sidecar freshness | 2646 files | 0 | yes | - |
| 2026-08-02T15:39:57Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-02T15:39:57Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-02T16:51:57Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-02T16:51:59Z | validate-okf | full corpus + index/sidecar freshness | 2646 files | 0 | yes | - |
| 2026-08-02T15:33:21Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-02T15:37:03Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-02T15:37:03Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-02T15:39:57Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-02T15:39:57Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-02T16:52:05Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-02T16:52:05Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-03T15:37:56Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-03T15:37:57Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-04T14:10:21Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-04T16:10:31Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-04T16:10:31Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-04T17:52:45Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-04T17:52:45Z | generate-sidecars | dawncaster/cards/*.okf.md | 1692 cards | 0 | yes | wrote 3 sidecar files |
| 2026-08-04T17:52:46Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-04T18:29:20Z | generate-index | games/**/*.okf.md frontmatter | 78 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-04T18:29:20Z | validate-okf | full corpus + index/sidecar freshness | 2637 files | 0 | yes | - |
| 2026-08-04T21:48:59Z | generate-index | games/**/*.okf.md frontmatter | 79 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-04T21:48:59Z | validate-okf | full corpus + index/sidecar freshness | 2649 files | 0 | yes | - |
| 2026-08-04T21:49:26Z | generate-index | games/**/*.okf.md frontmatter | 79 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-04T21:49:26Z | validate-okf | full corpus + index/sidecar freshness | 2649 files | 0 | yes | - |
| 2026-08-05T00:05:17Z | generate-index | games/**/*.okf.md frontmatter | 79 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-05T00:05:17Z | validate-okf | full corpus + index/sidecar freshness | 2658 files | 0 | yes | - |
| 2026-08-05T00:04:40Z | generate-index | games/**/*.okf.md frontmatter | 79 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-05T00:04:41Z | validate-okf | full corpus + index/sidecar freshness | 2649 files | 0 | yes | - |
| 2026-08-05T02:09:39Z | generate-index | games/**/*.okf.md frontmatter | 80 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-05T02:09:39Z | validate-okf | full corpus + index/sidecar freshness | 2661 files | 0 | yes | - |
| 2026-08-05T02:10:03Z | generate-index | games/**/*.okf.md frontmatter | 80 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-05T02:10:04Z | validate-okf | full corpus + index/sidecar freshness | 2661 files | 0 | yes | - |
| 2026-08-08T01:20:18Z | generate-index | games/**/*.okf.md frontmatter | 80 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-08T01:22:35Z | validate-okf | full corpus + index/sidecar freshness | 2670 files | 0 | yes | - |
| 2026-08-08T09:03:18Z | generate-index | games/**/*.okf.md frontmatter | 80 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-08T09:03:49Z | generate-index | games/**/*.okf.md frontmatter | 80 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-08T09:03:50Z | validate-okf | full corpus + index/sidecar freshness | 2678 files | 0 | yes | - |
| 2026-08-08T06:19:39Z | generate-index | games/**/*.okf.md frontmatter | 80 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-08T06:19:39Z | validate-okf | full corpus + index/sidecar freshness | 2670 files | 0 | yes | - |
| 2026-08-10T15:38:26Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-10T15:38:27Z | validate-okf | full corpus + index/sidecar freshness | 2682 files | 0 | yes | - |
| 2026-08-10T15:38:49Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-10T15:38:49Z | validate-okf | full corpus + index/sidecar freshness | 2682 files | 0 | yes | - |
| 2026-08-10T18:22:56Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-10T18:23:37Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-10T18:24:12Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-10T18:24:12Z | validate-okf | full corpus + index/sidecar freshness | 2690 files | 0 | yes | - |
| 2026-08-10T19:39:18Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-10T19:39:18Z | validate-okf | full corpus + index/sidecar freshness | 2690 files | 0 | yes | - |
| 2026-08-10T19:40:33Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-10T19:41:04Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-10T19:51:57Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-10T19:52:01Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-10T20:02:18Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-10T20:02:18Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-10T20:13:00Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-10T20:13:00Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-11T06:19:38Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-11T06:19:42Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-12T13:26:18Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-12T13:26:27Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-12T13:28:51Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-12T13:28:52Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-12T21:57:04Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-12T21:57:05Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-12T21:58:13Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-12T21:58:13Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-12T22:07:41Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-12T22:07:42Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-13T06:11:35Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-13T06:11:35Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-13T06:15:02Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-13T06:15:02Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-13T06:15:53Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-13T06:15:54Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-13T17:05:19Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-13T17:05:20Z | validate-okf | full corpus + index/sidecar freshness | 2726 files | 0 | yes | - |
| 2026-08-14T06:06:59Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-14T06:06:59Z | validate-okf | full corpus + index/sidecar freshness | 2718 files | 0 | yes | - |
| 2026-08-14T23:07:26Z | validate-okf | full corpus + index/sidecar freshness | 2726 files | 0 | yes | - |
| 2026-08-15T06:08:42Z | generate-index | games/**/*.okf.md frontmatter | 81 table row | 0 | yes | wrote KnowledgeBase/BoardGames/INDEX.okf.md |
| 2026-08-15T06:08:42Z | validate-okf | full corpus + index/sidecar freshness | 2726 files | 0 | yes | - |
