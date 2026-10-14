---
okf_version: 0.2
type: rule_category
game:
  title: "Brass: Birmingham"
  slug: "brass-birmingham"
  bgg_id: 224517
  publisher: "Roxley Games"
  year: 2018
  weight: null
  edition: "Retail edition; Rulebook v2018.11"
scope: "base game"
mechanics: [hand-management, income, market, resource-management, tile-placement, turn-order-claim-action, variable-setup]
sources:
  - id: "src-002"
    title: "Brass: Birmingham Rulebook — Roxley"
    url: "https://cdn.shopify.com/s/files/1/0246/2190/8043/files/Brass-Birmingham-Rulebook.pdf?v=1758826281"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-14"
    notes: "Official edge-case authority."
confidence: high
status: verified
---

## Edge-case findings

- Claim: A player may overbuild any of their own Industry tiles, but may overbuild an opponent's Coal Mine or Iron Works only when no resource of that type remains on any Industry tile or in its Market.
  Source: src-002
  Evidence: The Overbuilding procedure distinguishes unrestricted replacement of one's own tile from the resource-empty condition for replacing an opponent's Coal Mine or Iron Works.
  Confidence: high

- Claim: Coal consumed for a rail Link must come from the closest connected unflipped Coal Mine when available, otherwise it may be purchased from the Coal Market through a connection.
  Source: src-002
  Evidence: The Consuming Coal procedure specifies the closest connected mine first and the connected Coal Market fallback.
  Confidence: high

- Claim: Iron does not require a connection to be consumed; it comes first from an unflipped Iron Works and otherwise from the Iron Market.
  Source: src-002
  Evidence: The Consuming Iron procedure says an Industry tile need not be connected and gives the Iron Works then Iron Market order.
  Confidence: high

- Claim: A player's own unflipped Breweries need not be connected to supply beer, while another player's Brewery and Merchant beer must be connected to the relevant location.
  Source: src-002
  Evidence: The Consuming Beer section distinguishes own Breweries from opponents' Breweries and Merchant beer.
  Confidence: high

- Claim: If a player has no Industry or Link tiles on the board, that player may discard an Industry card to build a matching Industry anywhere undeveloped or discard any card to build a Link on any undeveloped line.
  Source: src-002
  Evidence: The “Building If You Have No Tiles on the Board” exception grants those two fallback build options.
  Confidence: high
