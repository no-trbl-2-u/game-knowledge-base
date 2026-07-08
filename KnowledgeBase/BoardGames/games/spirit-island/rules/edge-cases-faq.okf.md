---
okf_version: 0.2
type: rule_category
game:
  title: "Spirit Island"
  slug: "spirit-island"
  bgg_id: 162886
  publisher: "Greater Than Games"
  year: 2017
  edition: "core game"
scope: "base game"
mechanics: [cooperative-game, hand-management, simultaneous-action-selection, modular-board, variable-player-powers, solo-solitaire-game, variable-setup]
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
  - id: "src-005"
    title: "Targeting — Spirit Island Wiki"
    url: "https://spiritislandwiki.com/index.php?title=Targeting"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Real subpage URL found via web search (guessed URLs in the prior pass 404ed); covers Range/Target, the 'do as much as you can' principle, and cross-archipelago Spirit targeting costs."
  - id: "src-006"
    title: "Blight — Spirit Island Wiki"
    url: "https://spiritislandwiki.com/index.php?title=Blight"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Real subpage URL found via web search; covers Blight-add/cascade rules and the common Ravage-Blight misplay."
confidence: high
status: verified
---

## Summary

The publisher links a FAQ/wiki, and the wiki describes itself as official. This pass located real FAQ subpage URLs (Targeting, Blight) via web search — the prior pass's guessed URLs (`Category:FAQ`, `FAQ`) had 404ed — and extracted concrete edge-case rulings from them.

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
- Claim: A Power affects only one target land per use, even if the Power has multiple effects; if part of a Power's text can't apply, resolve the rest and skip only the inapplicable part ("do as much as you can").
  Source: src-005
  Evidence: "It only affects one single target land...If a Power has multiple effects, they ALL apply to the same land."
  Confidence: high
- Claim: Targeting a Spirit you don't share an islet with costs 1 Energy per Ocean jump required to reach them, paid when the Power is used.
  Source: src-005
  Evidence: "Targeting a Spirit with whom you don't share an islet costs 1 Energy per Ocean jump you have to make, paid when the Power is used."
  Confidence: high
- Claim: Ravaging adds only one Blight to a land regardless of total Damage dealt (not one Blight per 2 Damage), and a land that already has Blight cascades Blight to only one adjacent land (not all adjacent lands) — a commonly misplayed rule.
  Source: src-006
  Evidence: "Ravaging adds only one Blight to a land (not one per 2 Damage!), and Blight only cascades to a single adjacent land (not to all of them!)."
  Confidence: high
- Claim: Adding Blight to a land destroys one Presence from each Spirit present there; moving Blight via a card effect (rather than adding it) does not destroy Presence or trigger a cascade, and Isolate does not affect Blight cascades.
  Source: src-006
  Evidence: "Destroy one Presence from each Spirit with Presence there"; "[moving Blight] does NOT Destroy Presence or trigger cascades"; "Isolate does not affect Blight cascades."
  Confidence: high

## Rules / Mechanics

Likely FAQ domains based on wiki structure:
- Power-card timing and targeting (now confirmed for cross-archipelago targeting; see above).
- Spirit-specific innate powers.
- Adversary/scenario overrides.
- Blight/fear/event card interactions (now confirmed for Ravage-Blight and cascade rules; see above).
- Island board and layout exceptions.

## Player friction

- A large official wiki implies a rich rules ecosystem but also suggests many possible exception surfaces.

## Praised design

- Official wiki support is valuable for a complex expandable game.

## Better-if opportunities

- rules ambiguity: provide canonical FAQ exports by base/expansion/module.
- accessibility: in-app glossary/search would reduce page-hunting.

## Open questions

- Which FAQ pages are core-game-only and which require expansions? (Targeting and Blight above are core-game rules; the wiki's compiled rulebook otherwise interleaves Jagged Earth/Branch & Claw notation.)
- Are there official errata documents separate from wiki entries? A web search surfaced a mention of Branch & Claw "Blight Spreads" Event errata (2nd/3rd printings) on the wiki, not yet directly fetched.
- Which edge cases recur most often in player forums?

## Retry notes
- 2026-07-04: Attempted to drill into specific wiki subpages (`Category:FAQ`, `FAQ`) beyond the main landing page (`src-004`) to answer the open questions, but guessed URLs returned empty/404 content rather than real pages. Per citation discipline this pass did not fabricate a URL to force a result. A future attempt needs the actual FAQ/errata subpage URL from a real search (BGG forum links or a site search on spiritislandwiki.com), not a guessed path.
- 2026-07-08 (librarian pass): Resolved. A web search surfaced real wiki subpage URLs (`Targeting`, `Blight`, plus `Isolate`, `Event`, `How to Play`, `Rulebook Introduction` as further leads) instead of guessed paths. Fetched Targeting and Blight and added concrete edge-case rulings above with direct quotes (src-005, src-006). The Branch & Claw errata lead and expansion-specific FAQ split remain open for a future pass.
