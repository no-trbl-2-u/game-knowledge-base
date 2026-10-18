---
okf_version: 0.2
type: scout_report
game:
  title: "War of the Ring: Second Edition"
  slug: "war-of-the-ring"
  bgg_id: 115746
  publisher: "Ares Games"
  year: 2012
  weight: null
  edition: "English Second Edition, 2012 release"
scope: "base game"
mechanics: [action-selection, area-majority-influence, area-movement, campaign-game, card-play-conflict-resolution, dice-rolling, hand-management, hidden-information, variable-setup]
sources:
  - id: "src-001"
    title: "War of the Ring – Second Edition (English Rulebook) — Ares Games on Issuu"
    url: "https://issuu.com/aresgames/docs/wotr001-rulebook_en_web"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-18"
    notes: "Official rulebook publication."
  - id: "src-002"
    title: "War of the Ring Board Game Review — Meeple Mountain"
    url: "https://www.meeplemountain.com/reviews/war-of-the-ring-2nd-edition/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-18"
    notes: "Independent review."
  - id: "src-003"
    title: "War of the Ring Second Edition Review — Gaming Respawn"
    url: "https://gamingrespawn.com/board-game-reviews/22702/war-ring-second-edition-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-18"
    notes: "Independent review."
  - id: "src-008"
    title: "War of the Ring (Second Edition) — Fuzzy Llama Reviews"
    url: "https://fuzzyllamareviews.com/2019/09/27/war-of-the-ring-second-edition/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-18"
    notes: "Independent review."
confidence: high
status: verified
followups: []
---

## Summary

This ready-for-audit packet was selected from the top unchecked physical tabletop wishlist backfill after excluding Quarriors under standing instruction and skipping Dune: Imperium – Uprising because it is already present on current `main`. Retrieval found an official Ares Games rulebook publication, three independent review sources, and four distinct visual assets.

## Source-backed facts

- Claim: The packet is ready for independent audit rather than approved or promoted.
  Source: src-001, src-002
  Evidence: The run stages `status: ready_for_audit`, preserves source receipts, and does not contain `approval.json` or a canonical `games/` destination.
  Confidence: high

- Claim: The coverage ledger is intentionally bounded and does not claim a component or card denominator.
  Source: src-001
  Evidence: One official governing document is recorded; the visual packet records four observed images; no unretrieved total is manufactured.
  Confidence: high

## Retrieval notes

The Ares Games rules source was retrieved through the publisher's official Issuu account because the Ares Games website returned Cloudflare HTTP 403 in this environment. That transport fact does not establish source absence: the official Ares publication was available and identifies the English Second Edition rulebook. The packet cites the publication and page/section locators for audit; it does not retain the complete rulebook.

## Open questions

- Reopen the official publication and verify every page locator and edition boundary during Mennonite audit.
- Confirm whether the BGG complexity weight should be added after an authenticated rating retrieval; it is null here rather than inferred.
