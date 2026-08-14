---
name: board-game-rules-research
description: Find, verify, extract, and cite tabletop/board-game rules and rulebooks for KB ingestion, design research, and mechanics analysis. Use when asked to locate rules for a board/card game, compare rulesets, build a tabletop mechanics corpus, or test whether a source like BGG is sufficient.
---

# Board Game Rules Research

Use this skill when the task is to locate, verify, extract, or summarize official tabletop game rules. The purpose is not merely to find a likely PDF. The purpose is to establish provenance and produce usable evidence for a knowledge base or design decision.

## Core doctrine

BoardGameGeek is a discovery layer, not the courthouse of record. Use it for metadata, ratings, mechanics tags, forums, versions, and leads. Do not assume it hosts the complete or current rules.

For actual rules, prefer this source order:

1. Publisher/product page
2. Publisher-hosted downloads/resources/FAQ/errata pages
3. Official linked files on trusted storage/CDN platforms
4. BGG files/forum links as secondary leads
5. Retail pages, fan aids, rules summaries, and videos only when official sources fail

## Workflow

1. Identify the exact game and edition/expansion.
   - Normalize title variants.
   - Watch for standalone expansions, decks, promos, revised editions, and campaign variants.

2. Search broadly, then narrow to official provenance.
   - Query title + `rules`, `rulebook`, `PDF`, `publisher`, and expansion/deck name.
   - Prefer publisher product pages even when the PDF itself lives on Dropbox, Google Drive, or a CDN.

3. Verify the file, not just the link.
   - Download or open the target.
   - Confirm it is a rulebook/rules reference, not a marketing sheet or play aid.
   - Record file type, page count, size, version/date if present, and whether text extraction works.

4. Extract enough text to prove identity.
   - Capture title page lines, version, table of contents, and any relevant mechanics headings.
   - Do not mirror the whole copyrighted rulebook unless the user specifically has rights or asks for private analysis within fair-use limits.

5. Report with provenance.
   - Official product/source URL
   - Direct rulebook URL if available
   - Verification evidence
   - Any caveats: version ambiguity, expansion dependency, fan-made status, inaccessible file, or missing errata

6. For KB ingestion, store source metadata separately from extracted mechanics summaries.
   - `source_url`
   - `rulebook_url`
   - `publisher`
   - `edition/version`
   - `retrieved_at`
   - `extraction_status`
   - `citation snippets`
   - `mechanics schema / normalized summary`

## Pitfalls

- Do not stop at BGG when BGG lacks files. Search the publisher and linked product resources.
- Do not treat a third-party summary as rules unless no official rules are accessible.
- Do not conflate base-game rules with expansion/deck-specific rules.
- Do not claim a rulebook is verified until you have inspected the file contents.
- Do not build a KB around one source class. Publisher pages, BGG metadata, files, errata, and community discussions each answer different questions.

## Edition identity, receipts, and visual-source lessons

- **Bridge the SKU, product page, and rules file explicitly.** A current publisher storefront may expose the product through a collection page, embedded Shopify metadata, or a short handle rather than the obvious long title slug. Search the publisher's collection/product HTML and record the exact SKU, product title, vendor, product URL, and image URL. Treat the rulebook's printed Art. No., copyright/imprint line, language, and version/date as separate witnesses; do not silently convert a file creation date or an award date into a release/edition claim.
- **Use a bounded retrieval ladder when a likely official URL fails.** Try the publisher's current product/collection page, short product handle, support/download/manual path, then inspect page source for CDN or Shopify assets. Record the original URL and final redirected URL separately. A 403/401/404 from one surface is a retrieval state, not proof that the authority is absent. Keep BGG in the discovery/metadata lane; it is never the official rules authority.
- **Make the ledger machine-auditable.** For every fetched source record HTTP status, final URL, content type, byte length, retrieval timestamp, and SHA-256. For PDFs also record page count, page dimensions, extractability, relevant title/imprint/page locator, and any encryption or extraction warnings. For HTML and images retain a short source-bound evidence excerpt or precise visual observation; never substitute a guessed quote.
- **Treat visual evidence as its own lane.** A meaningful packet needs at least two distinct non-BGG asset sources, not merely two article pages or a PDF page excerpt. Record both the source/article URL and the direct `asset_url`, fetch each asset, hash it, inspect it, and state what is visibly supported: box/product identity, component spread, setup, or live play. Do not infer unreadable edition/language details and do not describe a staged component photograph as gameplay.
- **Keep uncertainty narrow and actionable.** If the candidate is otherwise eligible but BGG identity/rating or FAQ/errata retrieval is blocked, mark that exact field unverified and omit dependent claims. An exact-edition official core rulebook plus independent review and meaningful visuals can make a `ready_for_audit` packet feasible without pretending that unlocated auxiliary authorities were checked.

See `references/crew-planet-nine-scouting.md` for a concrete SKU/Art. No./asset-receipt example.

## KB intake delivery and visual provenance

When research is being staged for a knowledge-base intake packet, treat rules authority, product identity, reception, and visuals as separate evidence lanes:

1. **Keep edition boundaries explicit.** A publisher SKU page and a publisher-hosted PDF are not automatically the same printing or language. Record the exact SKU/EAN, PDF language/file identifier, copyright/version/date, and the bridge between them. If the bridge is not witnessed, publish the uncertainty and narrow claims rather than silently treating a translated PDF as the English insert.
2. **Blocked official pages are retrieval states.** A 403/429 on the current product page does not prove absence. Check publisher support/download surfaces, page source/CDN assets, lawful archive captures, and browser-rendered pages. An archived publisher page can preserve identity evidence while the direct current URL remains a separately recorded block.
3. **Visual manifests need asset-level receipts.** Every visual source referenced by `visual_references` must declare both `url` and `asset_url`; the asset URL must match a real machine receipt. Preserve at least two distinct source asset URLs, use controlled subject vocabulary, reduce derivatives rather than retaining source-resolution art, hash every derivative and the contact sheet, and inspect the contact sheet before delivery. A PDF page excerpt alone is not a substitute when the packet gate expects source image assets.
4. **Use substantive receipt excerpts.** `capture-source-receipt.mjs` requires an evidence excerpt long enough to be meaningful; for binary/image receipts, provide a descriptive source-bound sentence rather than a filename or a guessed quote. Preserve HTTP status, final URL, content type, byte length, retrieval time, and SHA-256. If a transport layer returns compressed HTML, compare the receipt against the decoded body as well as the wire response.
5. **Keep visual registries minimal and unique.** Build the visual packet's local `sources:` registry once from the visual receipts; do not concatenate a generic full registry into it or reuse source IDs. Each visual source must occur exactly once, carry its matching `asset_url`, and resolve to the same receipt URL. Run the staged intake validator immediately after assembling the packet—duplicate source blocks can mask the real asset-url failure and are cheap to catch before prose is frozen.
6. **Audit semantic source-role correctness, not just schema validity.** A clean validator can prove that every claim has a syntactically complete `Source / Evidence / Confidence` triplet while missing that a rules receipt is cited for a visual observation, or that a visual claim overstates what a staged product photograph shows. Reopen the cited source and ask whether that source could actually support the exact sentence. Correct source IDs, narrow the claim, or remove unsupported wording before approval.
6. **Audit visual language and state claims directly.** Do not infer language from tiny card text or describe a product-layout photograph as observed live gameplay. Inspect the source asset and retained derivative; distinguish box cover, component spread, table presence, setup, and actual play state. A contact sheet can prove distinct reduced images and nonreplacement handling, but not a rules interpretation or an unobserved language.
7. **Interpret staged CI correctly.** On a pre-approval `ready_for_audit` intake PR, `validate` should pass while `intake-complete` may fail solely because the packet has not yet been promoted. Inspect the failed job log. Repair only additional findings; do not promote or mutate a Bathcat head to make an expected final-state gate green.
8. **Freeze only after the full gate sequence.** Run focused intake validation, regression/provenance tests, base-diff validation, index generation, full corpus validation, visual tests, and `git diff --check`; compute the packet hash, commit the complete packet, then push and verify local/tracking/remote/live head equality.

See `references/intake-visuals-and-intermediate-ci.md` for a compact receipt schema, visual-gate checklist, and expected intermediate-CI diagnostic.

## REVISE repair and replay-stability discipline

When repairing a staged intake packet after an exact-head audit, treat receipt reproducibility as a first-class evidence claim, not clerical metadata:

1. Reopen the exact current PR head and repair only the named receipt/source defects. Preserve the edition boundary, scope, and semantic claims unless the audit explicitly requires narrowing them.
2. For Wayback captures, test replay modifiers separately. `id_` may expose a different or blocked payload than `if_`; prefer the stable replay variant whose fetched body/asset is repeatedly reproducible and whose URL is recorded everywhere. A changed byte count or hash is a custody defect until the new response is inspected.
3. For dynamic publisher HTML, prefer a stable archived/static response when the live page drifts. For official PDFs and image assets, test the direct publisher/CDN endpoint as well as archived replays; a current HTTP 200 with a stable repeated hash can be stronger than a fragile archive receipt, while a 403 is only a retrieval state.
4. After changing a receipt URL, update `evidence.json`, the run manifest discovery list when applicable, every canonical document registry that carries that source, every `asset_url` paired with visual sources, and dependent claim paths together. Run the staged validator immediately; it catches URL mismatches and inconsistent sibling registries.
5. Re-fetch repaired binary/image receipts more than once and inspect the visual contact sheet in the foreground. Record status, content type, byte length, SHA-256, page count where relevant, and source-bound evidence text. Do not call a staged product photograph gameplay unless the visible state supports that wording.
6. Freeze only after focused intake/provenance tests, base-diff intake validation, index generation, full OKF validation, visual tests, and `git diff --check` pass. Compute the packet hash, commit and push normally, then verify local/tracking/remote/live head equality. Leave the PR open/draft and hand the exact new SHA to a fresh auditor; the expected pre-approval completion failure is not a reason to promote or mutate the packet.

### Fresh receipt verification before declaring completion

A local schema check is not custody verification. After editing `evidence.json`, the manifest, or source registries, create a disposable `/tmp` Python verifier with `tempfile.NamedTemporaryFile(prefix="hermes-verify-", ...)`; check JSON parsing, URL linkage, stale replay modifiers, and recorded status/content type first, then re-fetch the declared URL and compare HTTP status, byte length, SHA-256, and source-bound identity markers. Remove the verifier in `finally`. Report this explicitly as **ad-hoc verification**, not suite green. If the body is stable but differs from the receipt, treat it as a reproducibility blocker: test plain, `if_`, and `id_` replay variants separately, record each result, and do not silently rewrite the receipt or claim success. The repair is incomplete until a stable payload is chosen and all sibling registries are updated together.

For a concrete Wayback `id_`/`if_` replay comparison, receipt update sequence, and exact-head handoff pattern, see `references/revise-replay-receipts.md`. For the disposable-verifier recipe and payload-drift reporting pattern, see `references/fresh-receipt-verification.md`.

## References

- `references/20-strong-cloudspire-source-test.md` — session test showing official Chip Theory Games product page -> Dropbox PDF discovery and verification pattern.
- `references/intake-visuals-and-intermediate-ci.md` — KB intake visual source receipts, edition-boundary handling, and pre-approval CI interpretation.
