# Intake visuals and intermediate CI reference

Use this reference when a rules-research result is being frozen into a SomberSoft `ready_for_audit` packet.

## Visual receipt pattern

A visual manifest source should contain at least:

```yaml
- id: "src-004"
  url: "https://cdn.publisher.example/product-image.webp"
  asset_url: "https://cdn.publisher.example/product-image.webp"
  kind: other
  provenance: official
  retrieved_at: "YYYY-MM-DD"
  notes: "HTTP 200 official product asset; source receipt SHA-256 <source-hash>."
```

The corresponding `visual_references` entry must point to that source ID, use a controlled `subject`, point to a reduced derivative under `visuals/references/`, and carry the derivative SHA-256. Preserve a contact-sheet path and contact-sheet hash. Keep at least two distinct source asset URLs. Source-resolution product art and full rulebook pages do not belong in the packet.

For image receipts, `capture-source-receipt.mjs` may report `application/octet-stream`; that is still a usable receipt when HTTP status, byte length, final URL, hash, locator, and a substantive evidence sentence are preserved. The source hash and reduced-derivative hash are intentionally different.

## Semantic provenance audit

Schema validation is necessary but not sufficient. For every claim in `index.okf.md`, rule/reception record, `scout-report.okf.md`, visual packet, and evidence ledger:

1. Confirm the cited source ID exists in that document and resolves to the same title, URL, kind, and provenance as the machine receipt.
2. Ask whether the source can support the exact observation: rules PDFs support rules text; review pages support reception; image receipts support visible subjects; contact-sheet inspection does not prove language, gameplay state, or mechanics.
3. Reopen the source and inspect visual language/state claims directly. Do not call a staged product layout an observed live game, and do not claim Spanish/French/German text from unreadable or visibly English card imagery.
4. If a claim is overbroad, narrow it or replace the source IDs before approval. A clean `validate-intake --run` result does not catch semantic source-role mismatches.

## Edition-boundary checklist

Before declaring a packet ready, compare:

- publisher SKU/article number and EAN;
- official product-page title and product family;
- rulebook language and file identifier;
- copyright/version/date on the inspected PDF;
- whether the PDF is explicitly linked from the product page or only found on the publisher domain.

If the SKU-to-PDF bridge is incomplete, state the exact boundary in `edition_scope` and `exclusions`. Do not upgrade a Spanish/French/German rules PDF into an English-edition claim without a witnessed bridge. The candidate may still be auditable if claims are narrowed to the retrieved authority.

## Expected pre-approval CI diagnostic

A Bathcat intake PR is intentionally an intermediate state. The normal pattern is:

- local `validate-intake --run <run-id>`: clean;
- local `validate-intake --base origin/main`: clean;
- GitHub `validate`: pass;
- GitHub `intake-complete`: fail with only the message that `ready_for_audit` must end promoted in the same PR.

This final-state failure is expected before Mennonite approval/promotion. Fetch the job log and distinguish it from any extra packet finding. Do not alter the packet, create approval artifacts, promote, approve, or merge to clear the expected gate.

## Frozen delivery order

1. Focused intake validation.
2. Intake regression, fail-closed, and provenance tests.
3. Diff-aware base validation.
4. Index generation.
5. Full corpus validation.
6. Focused visual tests.
7. `git diff --check`.
8. Packet hash via `promote-intake.mjs hash`.
9. One commit containing the complete packet and telemetry.
10. Push normally through the fail-closed wrapper.
11. Verify local, tracking, remote, and live PR head SHAs.
12. Post a pre-approval handoff with the exact head SHA and packet hash.
