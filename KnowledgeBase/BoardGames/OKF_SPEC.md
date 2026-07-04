# OKF Specification — Board Game Research

OKF here means **Operational Knowledge File**: markdown documents with strict frontmatter, source-backed claims, and explicit design implications.

This is a provisional SomberSoft format. If T defines another OKF standard, replace this file and migrate forward.

## Required frontmatter

```yaml
---
okf_version: 0.1
type: game_index | sources | rule_category | reception | better_if | scout_report
game:
  title: ""
  slug: ""
  bgg_id: null
  publisher: ""
  year: null
  edition: ""
scope: "base game | expansion | edition-specific | unknown"
sources:
  - id: "src-001"
    title: ""
    url: ""
    kind: publisher_page | rulebook_pdf | bgg_page | bgg_forum | review | video | faq | errata | other
    provenance: official | secondary | community | unknown
    retrieved_at: "YYYY-MM-DD"
    notes: ""
confidence: high | medium | low
status: draft | verified | needs_followup
---
```

## Body structure

Use these sections when applicable:

```md
## Summary

## Source-backed facts

- Claim: ...
  Source: src-001
  Evidence: "short quote or section/page reference"
  Confidence: high

## Rules / Mechanics

## Player friction

## Praised design

## Better-if opportunities

## Design implications for SomberSoft

## Open questions
```

## Citation discipline

- Every factual rule claim needs a source ID.
- Exact quotes must be short.
- Summaries must not pretend to be verbatim text.
- Community interpretations must be labeled as community testimony.
- Reviews are reception evidence, not rules evidence.

## Better-if classification

Classify improvement opportunities under one or more labels:

- onboarding
- setup/teardown
- component clarity
- rules ambiguity
- turn pacing
- downtime
- randomness
- strategic depth
- runaway leader
- kingmaking
- player interaction
- combat resolution
- scoring/endgame
- solo/co-op automation
- campaign/progression
- balance/faction asymmetry
- expansion bloat
- accessibility

## Minimum daily scout output

A valid daily run must write:

- `index.okf.md`
- `sources.okf.md`
- at least three categorized rule docs if rules are found
- `reception/reviews.okf.md`
- `reception/better-if.okf.md`
- `scout-report.okf.md`

If rules are not found, write a `scout-report.okf.md` with the failed search path and next source leads.
