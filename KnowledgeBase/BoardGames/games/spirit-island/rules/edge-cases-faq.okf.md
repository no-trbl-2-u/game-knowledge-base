---
okf_version: 0.1
type: rule_category
game:
  title: "Spirit Island"
  slug: "spirit-island"
  bgg_id: 162886
  publisher: "Greater Than Games"
  year: 2017
  edition: "core game"
scope: "base game"
sources:
  - id: "src-004"
    title: "Spirit Island Wiki — Main Page"
    url: "https://spiritislandwiki.com/index.php?title=Main_Page"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-02"
    notes: "Publisher-linked FAQ/wiki landing page."
  - id: "src-002"
    title: "Greater Than Games — Spirit Island product page"
    url: "https://shop.greaterthangames.com/products/spirit-island"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-02"
    notes: "Official page links FAQ/wiki."
confidence: medium
status: needs_followup
---

## Summary

The publisher links a FAQ/wiki, and the wiki describes itself as official, but this scout only extracted the main page. Individual FAQ/errata edge cases remain a follow-up task.

## Source-backed facts

- Claim: Greater Than Games links the FAQ/wiki from the official product page.
  Source: src-002
  Evidence: "Browse FAQ" link beside the rulebook download.
  Confidence: high
- Claim: The wiki calls itself the Official Spirit Island wiki and tracks thousands of pages.
  Source: src-004
  Evidence: "Welcome to the Official Spirit Island wiki"; "3,323 pages (390 articles)".
  Confidence: high
- Claim: The wiki has navigational categories for spirits, adversaries, scenarios, aspect cards, power cards, fear cards, blight cards, event cards, island boards, layouts, and glossary.
  Source: src-004
  Evidence: Main page lists those category links.
  Confidence: high

## Rules / Mechanics

Likely FAQ domains based on wiki structure:
- Power-card timing and targeting.
- Spirit-specific innate powers.
- Adversary/scenario overrides.
- Blight/fear/event card interactions.
- Island board and layout exceptions.

## Player friction

- A large official wiki implies a rich rules ecosystem but also suggests many possible exception surfaces.

## Praised design

- Official wiki support is valuable for a complex expandable game.

## Better-if opportunities

- rules ambiguity: provide canonical FAQ exports by base/expansion/module.
- accessibility: in-app glossary/search would reduce page-hunting.

## Design implications for SomberSoft

A complex system needs a living oracle. Build expandable games with source-linked rulings from the beginning.

## Open questions

- Which FAQ pages are core-game-only and which require expansions?
- Are there official errata documents separate from wiki entries?
- Which edge cases recur most often in player forums?

## Retry notes
- 2026-07-04: Attempted to drill into specific wiki subpages (`Category:FAQ`, `FAQ`) beyond the main landing page (`src-004`) to answer the open questions, but guessed URLs returned empty/404 content rather than real pages. Per citation discipline this pass did not fabricate a URL to force a result. A future attempt needs the actual FAQ/errata subpage URL from a real search (BGG forum links or a site search on spiritislandwiki.com), not a guessed path.
