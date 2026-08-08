---
okf_version: 0.2
type: scout_report
game:
  title: "Dominion"
  slug: "dominion"
  bgg_id: 36218
  publisher: "Rio Grande Games"
  year: 2008
  weight: null
  edition: "Current Rio Grande Games English 2nd Edition base game (RIO531; current core rulebook dated in-file 2021)"
scope: "base game"
mechanics: [deck-building, hand-management, market, resource-management, variable-setup]
sources:
  - id: "src-001"
    title: "Rio Grande Games — Dominion product page"
    url: "https://www.riograndegames.com/games/dominion/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-08"
    notes: "Current product identity, stock RIO531, UPC, player count, deck-building description, and rules link."
  - id: "src-002"
    title: "Rio Grande Games — Dominion 2nd Edition rulebook"
    url: "https://www.riograndegames.com/wp-content/uploads/2016/09/Dominion2E.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-08"
    notes: "HTTP 200 application/pdf; 16 pages; SHA-256 ea9e3fbef0064e6773c8772bbb234ac7d06c71a478422b45143432a29aa64273; current 2E core authority."
  - id: "src-003"
    title: "Board Game Quest — Dominion Review"
    url: "https://www.boardgamequest.com/dominion-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-08"
    notes: "Independent review dated Feb 26, 2013; base-game reception and review score."
  - id: "src-004"
    title: "Board Game Quest — Dominion box photograph"
    url: "https://www.boardgamequest.com/wp-content/uploads/2012/11/Dominion.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-08"
    notes: "Review lead image; source asset hash 49bc71a3dc650eed0fb5435de999104ab5da5f410c21c4082473bd638ffcf359."
  - id: "src-005"
    title: "Board Game Quest — Dominion game overview photograph"
    url: "https://www.boardgamequest.com/wp-content/uploads/2013/02/IMG_2969-300x225.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-08"
    notes: "Review game-overview image; source asset hash 6b9bc5d02ef2a089b584e2c508ff7b627d617396e9e30191d2257e2dcf10dba6."
  - id: "src-006"
    title: "Board Game Quest — Dominion game-experience photograph"
    url: "https://www.boardgamequest.com/wp-content/uploads/2013/02/IMG_2961-600x450.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-08"
    notes: "Review gameplay image; source asset hash 68bc8b699bd0e2c59919899bfa4a0a752682dc094aea9898de388944ec60dce5."
  - id: "src-007"
    title: "Dominion Strategy — Dominion 2019 Errata and Rules Tweaks"
    url: "https://dominionstrategy.com/2019/09/25/dominion-2019-errata-and-rules-tweaks/"
    kind: other
    provenance: community
    retrieved_at: "2026-08-08"
    notes: "Community/designer-attributed errata discussion; not treated as official current-print authority."
confidence: high
status: verified
---

# Bathcat scout report

## Scope decision

- Claim: This packet covers the released physical Dominion base game represented by Rio Grande Games stock RIO531, current English 2nd Edition rules, and no expansions, promos, online implementation, or digital adaptation.
  Source: src-001, src-002
  Evidence: The official product page identifies Dominion® and its stock/UPC; the official PDF is titled WideDominion, carries the current base-game rules and a 2021 in-file rules production reference, and separately lists expansions only as later combinations.
  Confidence: high
- Claim: Dominion is an eligible physical tabletop candidate for the rotating-focus deck-building coverage request.
  Source: src-001, src-003
  Evidence: Rio Grande sells the physical base product and labels it Deck Building; Board Game Quest reviews the physical base set as a 2–4 player, roughly 30-minute deck-building game.
  Confidence: high

## Authority inventory

- Claim: The bounded rules denominator is one acquired exact-scope official core rulebook, recorded as 1/1 for claims published here.
  Source: src-002
  Evidence: The inspected 16-page PDF supplies setup, ABC turn structure, action/buy/clean-up procedures, card-type and deck handling rules, endgame, and base-card reference used by the staged rule records.
  Confidence: high
- Claim: No separate official FAQ/errata document is required by the claims published in this packet.
  Source: src-001, src-002, src-007
  Evidence: The official product/support discovery exposed the core PDF; the only retrieved titled errata discussion was the community Dominion Strategy article, which is explicitly not used to overwrite the current rulebook. No inaccessible source is silently treated as empty.
  Confidence: medium

## Reception and visual evidence

- Claim: The packet has independent reception outside both Rio Grande Games and BGG, and spans two non-BGG organizational domains overall.
  Source: src-001, src-003
  Evidence: Rio Grande Games supplies the official authority and Board Game Quest supplies the independent review and visual assets; BGG is not used as a retrieved authority or rating source.
  Confidence: high
- Claim: The three-panel contact sheet contains distinct, recognizable evidence: box cover, card/game overview, and a wider tabletop card state.
  Source: src-004, src-005, src-006
  Evidence: Same-turn visual inspection confirmed three uncropped, uncorrupted panels with distinct subjects; the reduced images are not replacement-quality for the rulebook or card library.
  Confidence: high

## Known limits

- Claim: The packet does not claim a complete card-text, expansion, promo, or printing-history denominator.
  Source: src-002, src-007
  Evidence: The rulebook inventory is bounded to its printed base-game component list and shared framework; later card-specific errata are acknowledged but not imported from the community article.
  Confidence: high

