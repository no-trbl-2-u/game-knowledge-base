# Board-game intake quarantine

`intake/runs/` is the noncanonical boundary between discovery and the trusted
board-game corpus. Nothing beneath this directory is returned by the game
index or KB MCP server. A candidate becomes canonical only through
`scripts/promote-intake.mjs` after an independent Mennonite approval bound to
the exact packet hash.

## Three-game coverage doctrine

A Bathcat daily batch selects up to three unique candidates:

- 1 cooperative;
- 1 solo RPG;
- 1 matching the rotating focus.

These are ceilings, not quotas. Each selected game is independent. A candidate
gets one `YYYY-MM-DD-<slug>` run and one PR from Bathcat research through
Mennonite audit and deterministic promotion. One weak game never withholds sound
candidates.

A candidate enters with whatever it can evidence. Thin coverage is not a reason
to withhold a game — a later pass adds to it, and a game absent from the corpus
teaches nothing at all. Only one condition keeps a candidate out of Git: no
lawful document evidence exists for it yet, so there is nothing to publish that
a source supports. That case records an `intake-gap` issue with the measured
shortfall, the attempted sources, and the document leads a later scheduled pass
should try. Nothing in the pipeline waits on a human.

Gap deduplication is mechanical. Normalize the candidate to its lowercase
kebab-case slug and known numeric BGG ID (or `none`), then search all issue
states before creating anything:

```bash
gh issue list --state all --search '"[intake-gap] <slug> [bgg:<id-or-none>]" in:title' \
  --json number,state,title,url
```

The canonical title/key is exactly
`[intake-gap] <slug> [bgg:<id-or-none>]`. Update an open match or reopen a
closed match when the same evidence gap recurs. Create a new issue only when
the exact key has no match. The required `Stable intake slug` and `BGG ID or
none` fields must repeat the title key so reviewers can detect drift.

### Coverage is additive

Every candidate records a reproducible coverage ledger, and the ledger is
**descriptive, never an admission gate**. No percentage — on rules, on
components, on anything — blocks a packet. Aim high on rules coverage, because
governing rules are the point of the corpus; components and other factual
detail may land low-to-mid and improve later. A record that covers a rulebook
and three components is a real record; the next pass adds the fourth.

What admission *does* require is that everything published is real: every claim
carries `Source / Evidence / Confidence`, every source is a retrieval receipt,
and nothing is asserted beyond what a source supports. Narrow the scope and omit
the claim instead of reaching for it.

No worker may manufacture a denominator, estimate a count it did not observe,
infer a value from a similar game, or fill a gap from model prior. An
unretrieved denominator is `known_total: null` / `percent: null`, and an
unretrieved fact is simply absent. A permanently open denominator is an accepted
terminal state. The validator enforces the arithmetic — recorded may not exceed
its denominator, and a percentage must be the computed result — so a ledger
cannot be made to flatter itself, but it is free to be honestly small.

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
    rejection.json             # legacy only; new failures use PR REVISE
```

`run-id` is `YYYY-MM-DD-<slug>` for ordinary scout output. The run manifest
uses schema version 3. Version 3 adds independently mergeable one-candidate
runs and a mandatory actionable gap report for blocked candidates:

```json
{
  "schema_version": 3,
  "run_id": "2026-07-31-example-game",
  "created_at": "2026-07-31T06:00:00.000Z",
  "scout": {
    "name": "Bathcat",
    "role": "Field Intelligence and Knowledge Scout"
  },
  "target": {
    "cooperative": 1,
    "solo_rpg": 1,
    "rotating_focus": 1,
    "total": 3
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
      "blockers": ["official rulebook not yet retrieved"],
      "coverage": {
        "deckbuilder": false,
        "methodology": "Counts governing documents and source-backed factual ledger entries.",
        "rules": { "recorded": 0, "known_total": 1, "percent": 0 },
        "factual": { "recorded": 0, "known_total": 10, "percent": 0 }
      },
      "gap": {
        "threshold_summary": "No governing rules document has been retrieved yet, so no rules claim has a source to rest on.",
        "missing_evidence": ["The complete official governing rulebook remains unavailable."],
        "attempted_sources": [
          {
            "url": "https://publisher.example/example-game/rules",
            "result": "The publisher endpoint exposed no retrievable rules document."
          }
        ],
        "retry_leads": ["Publisher rules endpoint and archive captures of it remain untried and should be attempted next."]
      }
    }
  ]
}
```

Each run contains at most one candidate. Across all runs created in one UTC
day, the validator enforces no more than three candidates and no more than one
per cohort. `bgg_id` is nullable, not mandatory. A `rotating_focus` candidate also requires a concrete `focus_fit` sentence
of at least twenty characters. All staged canonical records must agree on game
identity, scope, mechanics, and source definitions and must carry
`status: verified` — which describes the claims the record publishes, not how
much of the game it covers. A packet may carry open `followups`; they are the
additive to-do the weekly librarian drains, and recording a known gap is always
preferred to leaving it silent.

Candidate states remain `blocked`, `ready_for_audit`, `rejected`, `approved`,
and `promoted` for historical compatibility. New Git diffs may introduce only
`ready_for_audit`: `blocked` research belongs in an issue, and a failed audit is
recorded as `REVISE` on the PR rather than a committed `rejection.json`.
Bathcat writes `ready_for_audit`; the Mennonite writes `approved`; only the
promotion script writes `promoted`.

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
  "schema_version": 3,
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
  "schema_version": 3,
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
Bathcat commits the complete `ready_for_audit` packet before handing the exact
PR head to a fresh Mennonite. A passing auditor adds `approval.json` and changes
only that run's manifest status to `approved` in a second commit on the same PR
branch. CI verifies that the parent commit contained the complete ready packet,
that the approval commit touched no other path, and that no packet byte changed
after approval. The decision is immutable once committed.

### Audit the packet, not the check

A `ready_for_audit` head is unpromoted by law: only the auditor may author the
approval that promotion requires, so the scout cannot deliver a promoted head
and must not try. Completion is therefore a merge-time gate, not an open-PR
gate — `validate` is expected to pass on a ready head, and the audit proceeds on
the packet's merits. Requiring the pre-approval head to be green would demand
of the scout the one thing only the auditor can do, and the packet would sit
forever. Green is required where it means something: on the final promoted head,
before the merge commit.

A failed audit is a PR verdict, not repository content. The Mennonite posts
`REVISE` with exact defects and returns the same branch to a fresh Bathcat.
Bathcat repairs the packet before any approval exists, commits a new frozen
head, and hands it to a fresh Mennonite. New `rejection.json` records and
committed blocked packets are rejected by CI.

### Event-driven correction work order

An exact-head `REVISE` also creates or updates one reusable issue titled
`[kb-revise] PR #<number>`. The issue body contains exactly one
`SOMBERSOFT_KB_LOOP` JSON marker generated by
`scripts/kb-loop-issue.mjs`; agents must not hand-author or edit that marker.

The lawful state machine is:

```
REVISE + bathcat-ready
  -> Bathcat claims bathcat-running and repairs the same PR
  -> MENNONITE_READY + mennonite-ready
  -> fresh Mennonite exact-head audit
     -> REVISE (next bounded attempt)
     -> HOLD (stop and notify T)
     -> GO (promote, merge, then close the issue)
```

Every transition rechecks the live PR and its full head SHA. Webhook delivery
is only a bell; the live issue, PR, and exact-head verdict are authority.
Delivery IDs and label claims are deduplicated before specialist dispatch.
There are at most three Bathcat repair attempts. A fourth `REVISE` becomes
`HOLD`; it never starts another repair automatically. `GO` closes the issue
only after GitHub reports that the exact PR head merged. Daily native-profile
crons remain recovery backstops, but event runs never fall through into fresh
scouting.

## Deterministic promotion

After the approval commit, promotion occurs in a third commit on the same PR.
CI requires the promotion commit's parent to contain the immutable approval and
`approved` status, permits only the destination game tree, run manifest,
generated board-game index, and telemetry, and rejects later mutation. The
manifest transition may change only `approved` to `promoted` and add the valid
`promoted_at` timestamp written by the promotion tool. With the
worktree clean:

```sh
node scripts/promote-intake.mjs check <run-id> <slug>
node scripts/promote-intake.mjs promote <run-id> <slug>
```

Promotion copies the approved staging tree byte-for-byte, marks the manifest,
regenerates the index, and runs the canonical validator. It authors no facts.
A validation failure rolls back the game directory and manifest mutation. The
Mennonite commits the result, reruns all gates, posts `GO` bound to the final
head, and uses a **merge commit**. Squash and rebase merges are prohibited for
new-game intake because they erase the audited commit boundaries.

Before commit or push:

```sh
node --test scripts/intake-lib.test.mjs scripts/validate-intake-package.test.mjs scripts/fail-closed.test.mjs scripts/validate-okf-provenance.test.mjs
node scripts/validate-intake.mjs --base origin/main
node scripts/generate-index.mjs
node scripts/validate-okf.mjs
```

The intake gate also blocks more than three daily candidates, more than one
candidate per cohort per UTC day, multi-candidate run directories, blocked
candidates without an actionable gap report, unsupported claims, placeholder markers, duplicate
long-form prose, duplicate visual bytes, low-information label images,
semantic generator scripts targeting `games/`, symlinked packet content,
canonical directory rename/relocation bypasses, packet mutation after audit,
canonical trees that differ from the approved staging tree, and incomplete
claim-level evidence. It does not gate on how much of a game is covered.

## Failure law

An evidence shortfall is not a failure at all. Thin coverage is published and
extended later; a total absence of lawful document evidence records an
`intake-gap` issue while sound packets continue independently. Do not commit a
blocked packet or open a report PR.

A malformed ready packet, failed validator, unsafe Git state, or delivery
failure remains fail-closed for that run: stop before writing further, preserve
exact evidence, and never weaken a check. Failing CI is fail-closed too, with
one exception that is not a failure: the completion finding on a pre-approval
`ready_for_audit` head. That state is expected, and auditing proceeds on the
packet's merits. Future scheduled retries remain enabled so a transient failure
cannot permanently disable intake.

Cron workers wrap every hard gate and push with `scripts/fail-closed.mjs`.
When a wrapped command fails, it exits nonzero and writes an evidence record
beneath `~/.hermes/state/game-kb-intake-failures/`; it does not mutate cron state.
A normal evidence rejection is not an infrastructure failure. Repeated identical
failures accumulate durable evidence records and are surfaced in the run report;
the scheduler stays live, and no run waits on a reply.
