---
okf_version: 0.2
type: rule_category
game:
  title: "Oathsworn: Into the Deepwood"
  slug: "oathsworn-into-the-deepwood"
  bgg_id: 251661
  publisher: "Shadowborne Games"
  year: 2022
  weight: 3.70
  edition: "base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, hand-management, point-to-point-movement, variable-player-powers]
sources:
  - id: "src-001"
    title: "Oathsworn: Into the Deepwood — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/251661/oathsworn-into-the-deepwood"
    kind: bgg_page
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "BGG files/forums lead for future rules verification."
confidence: low
status: needs_followup
---

## Open questions

No official FAQ or errata was retrieved in this run. Librarian follow-up should verify: exploding-dice limits, card-versus-dice resolution, campaign reset policy, defeated-character handling, and enemy activation edge cases.

Retried 2026-09-23 (librarian): the BGG game page and XML API are still blocked (systemic Cloudflare block, consistent with the corpus-wide finding recorded in other games' scout-report.okf.md followups). Checked the official publisher domain directly — `shadowborne-games.com/pages/resources` and `shadowborne-games.com/pages/oathsworn` both return HTTP 200 but neither links a hosted rulebook or FAQ PDF (only character/Free Company sheets and two supplementary encounter/ability PDFs); their rulebook links point back to BGG filepages. This narrows the search but does not close it: a future pass needs either an authenticated BGG session or the Kickstarter/Gamefound FAQ pages (both untested for bot walls this pass).

## Source-backed facts

- Claim: BGG is the identified community repository for the game page and likely file/forum leads.
  Source: src-001
  Evidence: The BGG game page is the corpus discovery and follow-up URL.
  Confidence: medium
