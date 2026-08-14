# 20 Strong: Cloudspire source test

Session lesson: when asked to find rules for `20 Strong: Cloudspire`, BoardGameGeek alone was insufficient as a rulebook source. The successful path was publisher-first discovery.

## Verified path

- Official product page: `https://chiptheorygames.com/products/20-strong-cloudspire-deck`
- Rulebook URL linked from that page: `https://www.dropbox.com/scl/fi/ws9bbacz62iv60t1lmkgh/20S-CS_Rulebook.pdf?rlkey=wb90aaw3es3qxnl5xj47uppjg&st=jr3y211v&dl=0`
- Direct download variant tested by changing `dl=0` to `dl=1`.

## Verification evidence captured

- File name: `20S-CS_Rulebook.pdf`
- Type: PDF
- PDF version: 1.5
- Pages: 48
- Size: 6,106,911 bytes
- Text extraction: succeeded with `pdftotext`
- Extracted title evidence:

```text
CLOUDSPIRE
RULES OF PLAY
Version 1.0
```

Extracted table-of-contents evidence included:

- Winning & Losing
- Setup
- Round Structure
- Spires
- Blueprints
- Mini-Heroes
- Mini-Bosses
- Draw/Keep Rewards
- Endgame
- More Adversity

## Durable pattern

Use BGG for metadata and leads, then resolve official rules through publisher/product/resource pages. Many publishers host PDFs on third-party storage or CDNs, so official provenance may be the page that links the file, not the file host itself.

## KB implication

For tabletop KB/MCP ingestion, use a two-stage resolver:

1. BGG or search metadata pass: names, editions, variants, mechanics tags, publisher clues.
2. Official source pass: publisher/product/rulebook/errata discovery, PDF verification, text extraction, source metadata capture.
