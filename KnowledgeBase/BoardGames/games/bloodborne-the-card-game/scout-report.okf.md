---
okf_version: 0.2
type: scout_report
game:
  title: "Bloodborne: The Card Game"
  slug: "bloodborne-the-card-game"
  bgg_id: 195856
  publisher: "CMON"
  year: 2016
  weight: 2.04
  edition: "English 2016 standalone base game"
scope: "English 2016 standalone base game; The Hunter's Nightmare expansion and promotional or translated material excluded"
mechanics: ["hand-management", "push-your-luck", "semi-cooperative-game", "set-collection", "simultaneous-action-selection"]
sources:
  - id: "src-001"
    title: "CMON — Bloodborne: The Card Game"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Direct HTML blocked; dated dynamic proxy returned HTTP 200 and displayed Rules & More → Rulebook → 79.01 MB."
  - id: "src-002"
    title: "CMON — Bloodborne: The Card Game Rulebook"
    url: "https://cmon-files.s3.amazonaws.com/pdf/assets_item/resource/43/Bloodborne_Rulebook__2_.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Official 2016 CMON S3 object; 92,484,273 bytes; 16 pages; SHA-256 e5010bc06faf0a4fc05b70228836401825a123c4dad0459233edcd318b664b38."
  - id: "src-004"
    title: "Ars Technica — Bloodborne: The Card Game is actually pretty great"
    url: "https://arstechnica.com/gaming/2016/09/bloodborne-the-card-game-is-actually-pretty-great/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Independent review."
  - id: "src-009"
    title: "CMON — Bloodborne: The Card Game Rulebook (2025 web reupload)"
    url: "https://www.cmon.com/wp-content/uploads/2025/03/Bloodborne_rulebook_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-04"
    notes: "16 pages; 82,846,744 bytes; SHA-256 c03978b1bbbe6793e0f082bfc2320e6ba397303d631d9597287c088fe2a8d3ed; metadata dated 2025-03-22. Text is word-for-word identical to src-002 (2016 original); no errata or version marker."
followups:
  - source_id: "src-001"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game"
    failure: blocked
    fallback: "Dated original-URL proxy and direct assets returned HTTP 200; proxy currently lists Rulebook 79.01 MB."
    retry_needs: manual_review
    notes: "Direct access remained Cloudflare/HTTP 403. A closed publisher-wide FAQ/errata/clarification/support inventory, or authoritative evidence of absence, remains required; the dynamic product page alone cannot close it. Retried 2026-09-04 (librarian): the Cloudflare block has LIFTED — the product page now returns HTTP 200 (72,449 bytes) to a direct fetch. Enumerated it: it exposes exactly one PDF, the official rulebook at https://www.cmon.com/wp-content/uploads/2025/03/Bloodborne_rulebook_web.pdf, plus a link to the publisher-wide portal https://support.cmon.com/hc/en-us. That portal was also retrieved (HTTP 200) and is a fulfillment/customer-service help centre — its article set is shipping, refunds, pledge-manager, damaged-component and 'How do I get the Rulebook for my game' topics — not a rules FAQ/errata archive. This narrows but does not close the entry, and is NOT an absence claim. Next retrieval target: the dated rulebook PDF itself for any embedded errata/version marker. Retried 2026-11-04 (librarian): fetched that dated rulebook PDF (src-009) and extracted its full text. It is word-for-word identical to the 2016 original (src-002), with no embedded errata or version marker — the 2025 upload is a pure recompression/reflow of the unchanged 2016 rules, not a new edition. That named retrieval target is now closed with a negative result; the publisher-wide FAQ/errata/clarification/support inventory itself remains open, since the only remaining official support surface found (support.cmon.com) is a fulfillment help centre, not a rules archive. retry_needs stays manual_review: no further automatable retrieval target is known."
confidence: high
status: needs_followup
---

# Scout report

## Verdict

- Claim: This existing canonical record must remain `needs_followup`, not `verified`.
  Source: src-001, src-002
  Evidence: "The official CMON rulebook is now acquired, but complete local text for five card classes and a closed publisher-wide FAQ/errata/clarification/support inventory remain unproved."
  Confidence: high

## What is acquired

- Claim: The base-game physical manifest is closed at seven categories, and all seven quantities are transcribed.
  Source: src-001
  Evidence: "87 cards, 5 Hunter Boards, 5 Hunter Health Dials, 75 Blood Echo plastic tokens, 16 cardboard tokens, 3 custom Monster dice, and 1 rulebook."
  Confidence: high

- Claim: The official rulebook covers setup, eight round steps, combat and death, Hunter's Dream upgrades, trophies, Final Boss resolution, scoring, and ties.
  Source: src-002
  Evidence: "Rulebook table of contents and pp. 5–15."
  Confidence: high

- Claim: Independent reception supports both praise and friction without model-generated sentiment.
  Source: src-004
  Evidence: "Ars praises bluffing, dread, and push-your-luck tension while warning that take-that nastiness will not suit players who dislike being mean to friends."
  Confidence: high

- Claim: CMON's 2025 web-hosted rulebook reupload carries no rules changes; it is a byte-for-byte text match to the 2016 original, confirming the official rules have not drifted since release.
  Source: src-002, src-009
  Evidence: "Full text extraction of src-009 is word-for-word identical to src-002 aside from PDF-reflow whitespace artifacts; no errata or version marker is present in either file."
  Confidence: high

## Why the governing denominator is open

The official rulebook row is closed. The Hunter Boards/player aids and Monster dice are rule-bearing surfaces, and the official rulebook sufficiently governs their printed round/track/zone and damage/combo functions. Dials and tokens are governed state/value markers. Five card classes still carry local rules: Starter Actions, Upgrades, Monsters, Chalice Bosses, and Final Bosses. Their quantities are known, but their complete identity/text corpus is not acquired. A closed publisher-wide FAQ/errata/clarification/support inventory is also unproved. Therefore the governing denominator remains **OPEN / UNKNOWN**, with no percentage or composite score.

## Exact help requested from T

Residual HOLD request:

1. provide a complete immutable base-game card-local corpus covering Starter Actions, Upgrades, Monsters, Chalice Dungeon Bosses, and Final Bosses;
2. provide a closed official FAQ/errata/clarification/support inventory, or authoritative evidence that none exists; and
3. only if an official card corpus remains unavailable, T may approve a named immutable secondary card corpus.

With those authorities, Bathcat can close the denominator and a fresh Mennonite can audit the repaired PR head. This draft must not be marked ready or merged meanwhile.
