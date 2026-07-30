# Board-game intake quarantine

`intake/runs/` is the noncanonical boundary between discovery and the trusted
board-game corpus. Nothing beneath this directory is returned by the game
index or KB MCP server. A candidate becomes canonical only through
`scripts/promote-intake.mjs` after an independent Mennonite approval bound to
the exact packet hash.

## Six-candidate doctrine

A Bathcat run may select at most six unique candidates:

- 2 cooperative;
- 2 solo RPG;
- 2 matching the rotating focus.

These are ceilings, not quotas. Honest shortfalls and zero-promotion runs are
valid. A candidate with missing evidence is `blocked`; it has no `canonical/`
staging tree and records its blockers in `manifest.json`.

BGG is optional discovery, identity, rating, and community evidence. It is not
the research boundary and cannot satisfy `official_rules`. Each promotable
candidate requires, at minimum:

- an official rules receipt from outside BGG;
- an independent review receipt from outside BGG and outside the official
  rules domain;
- two distinct non-BGG organizational domains overall;
- rating evidence when `game.weight` is not `null`;
- meaningful source-linked visual evidence;
- complete claim-level `Source / Evidence / Confidence` triplets.

Publisher sites, publisher CDNs, official FAQs and errata, designer
commentary, independent reviews, videos, forums, archives, retailers, and
other credible sources are allowed when their role and provenance are stated.
Search snippets and model prior are leads, never evidence.

## Directory contract

```text
intake/runs/<run-id>/
  manifest.json
  candidates/<slug>/
    evidence.json
    canonical/                 # absent while blocked
      index.okf.md
      sources.okf.md
      scout-report.okf.md
      rules/overview.okf.md
      rules/setup.okf.md
      rules/turn-structure.okf.md
      rules/actions.okf.md
      rules/scoring-endgame.okf.md
      rules/edge-cases-faq.okf.md
      reception/reviews.okf.md
      reception/better-if.okf.md
      visuals/packet.okf.md
      visuals/contact-sheet.webp
      visuals/references/*.webp
    approval.json              # Mennonite only; mutually exclusive with rejection
    rejection.json             # Mennonite only; exact failed packet preserved
```

`run-id` is `YYYY-MM-DD` or `YYYY-MM-DD-slug`. The run manifest uses schema
version 1:

```json
{
  "schema_version": 1,
  "run_id": "2026-07-31",
  "created_at": "2026-07-31T06:00:00.000Z",
  "scout": {
    "name": "Bathcat",
    "role": "Field Intelligence and Knowledge Scout"
  },
  "target": {
    "cooperative": 2,
    "solo_rpg": 2,
    "rotating_focus": 2,
    "total": 6
  },
  "focus": { "mechanic": "deck-building" },
  "candidates": [
    {
      "slug": "example-game",
      "title": "Example Game",
      "bgg_id": null,
      "cohort": "cooperative",
      "status": "blocked",
      "discovery_sources": ["https://boardgamegeek.com/boardgame/1/example-game"],
      "blockers": ["official rulebook not yet retrieved"]
    }
  ]
}
```

`bgg_id` is nullable, not mandatory. Non-null IDs must be unique within the
run. A `rotating_focus` candidate also requires a concrete `focus_fit` sentence
of at least twenty characters. All staged canonical records must agree on game
identity, scope, mechanics, and source definitions and must carry
`status: verified`; unresolved followups cannot enter a promotable packet.

Candidate states are `blocked`, `ready_for_audit`, `rejected`, `approved`,
and `promoted`. Bathcat may write only the first two. The Mennonite may move
an audited packet to `rejected` or `approved`. Only the promotion script may
write `promoted`.

## Retrieval receipts

Every source in `evidence.json` is a retrieval receipt, not a citation-shaped
promise. Use the capture tool whenever the source is fetchable:

```sh
node scripts/capture-source-receipt.mjs \
  --url 'https://publisher.example/rules.pdf' \
  --id src-001 \
  --roles official_rules \
  --title 'Official rulebook' \
  --provenance official \
  --locator 'page 6, Turn sequence' \
  --evidence 'The active player resolves the four phases in order.' \
  --output /tmp/src-001.json
```

The receipt records original/final URLs, HTTP status, content type, byte
length, retrieval timestamp, and SHA-256. For textual sources, the capture
tool refuses evidence text that does not occur in the fetched body. PDF and
video excerpts require a precise page or timestamp and independent audit.
Do not commit downloaded full rulebooks or source-resolution art.

An evidence packet contains:

```json
{
  "schema_version": 1,
  "slug": "example-game",
  "researcher": {
    "name": "Bathcat",
    "role": "Field Intelligence and Knowledge Scout"
  },
  "researched_at": "2026-07-31T06:30:00.000Z",
  "sources": []
}
```

Allowed source roles are `identity`, `official_rules`,
`independent_review`, `rating`, `visual`, `faq`, `errata`,
`designer_commentary`, and `community`.

## Independent approval

Bathcat must not create `approval.json`. The Mennonite audits the actual
sources and staged canonical files, then obtains the immutable packet hash:

```sh
node scripts/promote-intake.mjs hash <run-id> <slug>
```

Approval schema:

```json
{
  "schema_version": 1,
  "decision": "approved",
  "auditor": {
    "name": "The Mennonite",
    "role": "Requirements and Risk Examiner"
  },
  "reviewed_at": "2026-07-31T08:00:00.000Z",
  "packet_sha256": "64 lowercase hexadecimal characters",
  "reviewed_source_ids": ["src-001", "src-002", "src-003", "src-004"],
  "checks": {
    "official_rules_inspected": true,
    "independent_review_inspected": true,
    "claims_supported": true,
    "source_roles_distinct": true,
    "rating_evidence_checked": true,
    "visuals_meaningful": true,
    "no_placeholders": true,
    "no_generated_semantic_content": true
  },
  "notes": "Concrete audit findings and any limitations, at least twenty characters."
}
```

Changing any byte in `evidence.json` or `canonical/` invalidates approval.
The ready packet must already be merged to protected `main`. Approval or
rejection is then added in a separate audit-only PR that changes only the
decision record and manifest status; CI rejects a decision introduced beside
new or modified packet bytes. The decision itself becomes immutable once
committed.
The auditor must reject rather than repair the scout's packet. Rejection is
recorded in `rejection.json` with `decision: rejected`, the Mennonite identity,
`reviewed_at`, `packet_sha256`, and one or more concrete `reasons` of at least
20 characters. Repairs return to Bathcat; Bathcat removes the old rejection,
revises the packet, returns the state to `ready_for_audit`, and submits a new
hash for a fresh audit.

## Deterministic promotion

After the audit-only PR is merged, protected `main` contains both the approval
and `approved` manifest status. Promotion occurs in a third PR. CI rejects any
canonical game addition whose approval did not already exist on the base
branch. With the worktree clean:

```sh
node scripts/promote-intake.mjs check <run-id> <slug>
node scripts/promote-intake.mjs promote <run-id> <slug>
```

Promotion copies the approved staging tree byte-for-byte, marks the manifest,
regenerates the index, and runs the canonical validator. It authors no facts.
A validation failure rolls back the game directory and manifest mutation.

Before commit or push:

```sh
node --test scripts/intake-lib.test.mjs scripts/validate-intake-package.test.mjs scripts/fail-closed.test.mjs scripts/validate-okf-provenance.test.mjs
node scripts/validate-intake.mjs --base origin/main
node scripts/generate-index.mjs
node scripts/validate-okf.mjs
```

The intake gate also blocks more than six new game directories, more than two
candidates per cohort, unsupported claims, placeholder markers, duplicate
long-form prose, duplicate visual bytes, low-information label images,
semantic generator scripts targeting `games/`, symlinked packet content,
canonical directory rename/relocation bypasses, packet mutation after audit,
and canonical trees that differ from the approved staging tree.

## Failure law

Any hard-gate failure stops promotion and places the recurring pipeline in
fail-closed state. Do not retry by weakening a check. Record the blocked
candidate and reason, pause further writing, and deliver the validator output
to T. Resume only after the fault is corrected and the entire gate suite is
green.

Cron workers wrap every hard gate and push with `scripts/fail-closed.mjs`.
When a wrapped command fails, the wrapper invokes `hermes cron pause` for the
named scout/auditor jobs and writes an evidence record beneath
`~/.hermes/state/game-kb-intake-failures/`. A normal evidence rejection is not
an infrastructure failure; two rejections in one run or more than half of the
audited ready packets pauses the next scout run for review.
