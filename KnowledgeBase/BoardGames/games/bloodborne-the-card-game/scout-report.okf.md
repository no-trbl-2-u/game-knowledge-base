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
  - id: "src-005"
    title: "CMON — Bloodborne: The Card Game Rulebook (2025 web re-export)"
    url: "https://www.cmon.com/wp-content/uploads/2025/03/Bloodborne_rulebook_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-18"
    notes: "82,846,744 bytes; 16 pages; SHA-256 c03978b1bbbe6793e0f082bfc2320e6ba397303d631d9597287c088fe2a8d3ed; PDF metadata creation/mod date 2025-03-22, Adobe InDesign 20.0 / Adobe PDF Library 17.0 (Macintosh). Page-by-page text extraction is byte-identical to src-002 on all 16 pages: this is a 2025 re-export of the same 2016 rulebook, not a revised edition, and carries no embedded errata or version-change marker beyond the republish date."
followups:
  - source_id: "src-001"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game"
    failure: blocked
    fallback: "Dated original-URL proxy and direct assets returned HTTP 200; proxy currently lists Rulebook 79.01 MB."
    retry_needs: manual_review
    notes: "Direct access remained Cloudflare/HTTP 403. A closed publisher-wide FAQ/errata/clarification/support inventory, or authoritative evidence of absence, remains required; the dynamic product page alone cannot close it. Retried 2026-09-04 (librarian): the Cloudflare block has LIFTED — the product page now returns HTTP 200 (72,449 bytes) to a direct fetch. Enumerated it: it exposes exactly one PDF, the official rulebook at https://www.cmon.com/wp-content/uploads/2025/03/Bloodborne_rulebook_web.pdf, plus a link to the publisher-wide portal https://support.cmon.com/hc/en-us. That portal was also retrieved (HTTP 200) and is a fulfillment/customer-service help centre — its article set is shipping, refunds, pledge-manager, damaged-component and 'How do I get the Rulebook for my game' topics — not a rules FAQ/errata archive. This narrows but does not close the entry, and is NOT an absence claim. Next retrieval target: the dated rulebook PDF itself for any embedded errata/version marker. Retried 2026-11-18 (librarian): fetched that exact PDF (src-005) and diffed its extracted text against the already-held 2016 rulebook (src-002) page by page — all 16 pages are textually identical, so the 2025 re-export carries no errata or rules changes. The product page's single PDF link is confirmed to hold no hidden errata; the remaining open question is strictly whether a FAQ/errata document exists somewhere off this page, which this retrieval cannot answer. Not an absence claim; retry_needs stays manual_review for that narrower question. Retried 2026-11-25 (librarian): queried the support.cmon.com Zendesk help-center search API directly (not just the portal's browse page) for 'bloodborne', 'bloodborne faq', 'bloodborne errata', and 'bloodborne rulebook' across its full article index. Only one Bloodborne-specific article exists site-wide ('About Bloodborne', article 25401440247828), and it is a redirect stub linking back to the two cmon.com product pages — no FAQ or errata content. The generic cross-product article 'How can I check the FAQs for my game?' (28363959379860) confirms the publisher's own process: a game's FAQ, if one exists, is linked from that game's own product page under 'Rules & More', which the 2026-09-04 retrieval already enumerated and found to expose only the rulebook PDF, no FAQ link. This is a considerably tighter negative result than before (an index-wide search, not a portal browse), but it is still not an authoritative absence claim — the support portal's own article index could be incomplete or a FAQ could exist outside Zendesk entirely. retry_needs stays manual_review; a future pass would need either a direct publisher statement that no Bloodborne FAQ exists, or to find one outside this portal."
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

- Claim: The 2025 CMON-hosted rulebook PDF is a re-export of the original 2016 rulebook, not a revised edition; it introduces no rules changes or errata.
  Source: src-002, src-005
  Evidence: Page-by-page text extraction of src-005 (16 pages) is identical to src-002 (16 pages) on every page; src-005's PDF metadata records an InDesign re-export dated 2025-03-22 with no version or printing marker beyond that date.
  Confidence: high

## Why the governing denominator is open

The official rulebook row is closed. The Hunter Boards/player aids and Monster dice are rule-bearing surfaces, and the official rulebook sufficiently governs their printed round/track/zone and damage/combo functions. Dials and tokens are governed state/value markers. Five card classes still carry local rules: Starter Actions, Upgrades, Monsters, Chalice Bosses, and Final Bosses. Their quantities are known, but their complete identity/text corpus is not acquired. A closed publisher-wide FAQ/errata/clarification/support inventory is also unproved. Therefore the governing denominator remains **OPEN / UNKNOWN**, with no percentage or composite score.

## Exact help requested from T

Residual HOLD request:

1. provide a complete immutable base-game card-local corpus covering Starter Actions, Upgrades, Monsters, Chalice Dungeon Bosses, and Final Bosses;
2. provide a closed official FAQ/errata/clarification/support inventory, or authoritative evidence that none exists; and
3. only if an official card corpus remains unavailable, T may approve a named immutable secondary card corpus.

With those authorities, Bathcat can close the denominator and a fresh Mennonite can audit the repaired PR head. This draft must not be marked ready or merged meanwhile.
