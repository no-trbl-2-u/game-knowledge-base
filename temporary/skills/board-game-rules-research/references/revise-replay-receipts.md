# REVISE replay-receipt field pattern

Use this pattern when a Mennonite exact-head audit reports that a committed source receipt cannot be reproduced.

## Field sequence

1. Fetch the declared URL exactly and record status, final URL, content type, byte length, and SHA-256.
2. If the URL is a Wayback replay, compare the default replay with `id_` and `if_` variants. These can return different payloads: wrapper HTML, raw archived content, or a blocked/partial response. Keep the variant that is stable and semantically inspectable.
3. Repeat the winning fetch at least twice. For PDFs, confirm page count and extractability. For images, identify the file and inspect the visual. For HTML, search the fetched body for the exact identity/reception evidence used by the packet.
4. Use `capture-source-receipt.mjs` with a substantive evidence excerpt. Binary/image evidence must be a descriptive source-bound observation of at least 20 characters; a filename is not evidence.
5. Propagate the URL and receipt metadata to every carrying source registry. Visual sources require matching `url` and `asset_url`. Run `node scripts/validate-intake.mjs --run <run-id>` before any broader gate.

## Typical outcomes

- **Stable direct publisher/CDN:** use the current URL if repeated hashes match and the body/asset is inspectable; retain a blocked current product page as a separately documented retrieval state when needed.
- **Stable archived HTML:** use a raw/static replay such as `if_` when it reproducibly contains the product identifiers; do not retain a wrapper replay merely because its hash was recorded earlier.
- **Stable archived binary:** use the replay URL whose repeated bytes match the inspected asset. Avoid treating a one-off transport result as proof.
- **No stable authority:** remove or narrow dependent claims/visuals. Do not keep citation-shaped receipts whose payload cannot be reopened.

## Delivery checks

Run, in repository order:

```sh
node scripts/validate-intake.mjs --run <run-id>
node --test scripts/intake-lib.test.mjs scripts/validate-intake-package.test.mjs scripts/fail-closed.test.mjs scripts/validate-okf-provenance.test.mjs
node scripts/validate-intake.mjs --base origin/main
node scripts/generate-index.mjs
node scripts/validate-okf.mjs
node --test scripts/validate-okf-visuals.test.mjs
git diff --check
node scripts/promote-intake.mjs hash <run-id> <slug>
```

Commit the repaired packet, push normally, and verify local HEAD, tracking ref, remote branch ref, and live PR `headRefOid` are identical. The PR stays open/draft/DO NOT MERGE for the fresh audit. A pre-approval `intake-complete` failure is expected when the packet is still `ready_for_audit`; inspect it, but do not promote to clear it.
