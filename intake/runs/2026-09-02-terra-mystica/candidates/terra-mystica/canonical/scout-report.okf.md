---
okf_version: 0.2
type: scout_report
game:
  title: "Terra Mystica"
  slug: "terra-mystica"
  bgg_id: 120677
  publisher: "Feuerland Spiele / Z-Man Games"
  year: 2012
  weight: null
  edition: "Base game; claims bounded to Feuerland Spiele German rulebook v1.2 and official product page"
scope: "base game"
mechanics: [area-majority-influence, engine-building, income, modular-board, resource-management, tile-placement, variable-player-powers, variable-setup]
followups: []
sources:
  - id: "src-001"
    title: "Feuerland Spiele — Terra Mystica product page"
    url: "https://www.feuerland-spiele.de/spiele/terra-mystica/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-09-02"
    notes: "Identity and download inventory receipt."
  - id: "src-002"
    title: "Feuerland Spiele — Terra Mystica Spielregel PDF"
    url: "https://www.feuerland-spiele.de/fileadmin/game/Terra_Mystica/Regel-Deutsch.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-09-02"
    notes: "Governing base-game rules receipt."
  - id: "src-003"
    title: "Board Game Quest — Terra Mystica Review"
    url: "https://www.boardgamequest.com/wp-json/wp/v2/posts/5905"
    kind: review
    provenance: secondary
    retrieved_at: "2026-09-02"
    notes: "Independent reception receipt."
  - id: "src-004"
    title: "SPACE-BIFF! — Terra Terrifica"
    url: "https://spacebiff.com/2014/08/04/terra-mystica/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-09-02"
    notes: "Independent reception receipt."
confidence: high
status: verified
---

## Scout objective

Assemble one noncanonical ready-for-audit packet for a physical tabletop game matching the rotating engine-building and runaway-leader research request. Bathcat does not approve or promote this packet.

## Why this game

- Wishlist entry consumed: top unchecked physical request was the competitive area-control or engine-building game with reviewer-documented snowball pressure; Quarriors / Dice Masters remains excluded by standing directive.
- BGG signal: the discovery URL identifies Terra Mystica as the requested physical title (BGG 120677); no BGG rating or complexity weight is claimed.
- Mechanics relevance: the official rules document terrain conversion, building income engines, asymmetric peoples, and majority scoring.
- Review/reception signal: two independent reviews document the heavy learning curve and describe blocking an ahead player as the primary direct counterplay.

## Source search path

- Discovery source: https://boardgamegeek.com/boardgame/120677/terra-mystica
- Publisher page: https://www.feuerland-spiele.de/spiele/terra-mystica/
- Official rulebook outside BGG: https://www.feuerland-spiele.de/fileadmin/game/Terra_Mystica/Regel-Deutsch.pdf
- FAQ/errata: no separate applicable document was retrieved; no absence claim is made.
- Independent reviews: Board Game Quest JSON receipt and SPACE-BIFF! direct HTML receipt.
- Retrieval receipt files: receipt-src-001.json through receipt-src-006.json; consolidated in evidence.json.

## Rulebook extraction status

- Official rulebook found: yes
- File inspected: yes; pdftotext extraction of the 20-page PDF
- Page count/version/date: 20 pages; PDF creation 2013-08-15; footer v1.2
- Text extraction quality: readable German text with layout artifacts; page and section locators recorded
- Retrieved byte count and SHA-256 verified: 10,876,886 bytes; 6d2d1ed08d28aac034d034b35a3fd9a43b59a1d0168d1c2412ce7cd653229b62
- Exact page/section locators recorded: printed pages 2–15 and appendix pages 17–20

## Open questions

The packet does not settle the absence of catch-up mechanisms across expansions, variants, or all printings. It also omits rating evidence, a complete FAQ/errata inventory, and an English rules receipt. These are honest scope limits, not manufactured coverage.

## Gate result

- Candidate cohort: rotating_focus
- Candidate status: ready_for_audit
- `node scripts/validate-intake.mjs --run 2026-09-02-terra-mystica` exit 0: required before handoff
- Independent approval: forbidden in Bathcat pass
- Canonical `games/` write: forbidden in Bathcat pass
