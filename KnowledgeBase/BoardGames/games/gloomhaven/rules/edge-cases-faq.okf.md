---
okf_version: 0.2
type: rule_category
game:
  title: "Gloomhaven"
  slug: "gloomhaven"
  bgg_id: 174430
  publisher: "Cephalofair Games"
  year: 2017
  weight: 3.90
  edition: "base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, hand-management, point-to-point-movement, variable-player-powers]
sources:
  - id: "src-005"
    title: "Gloomhaven — Dized Rules: Exhaustion"
    url: "https://rules.dized.com/game/I7lEsCGOS2-zgol-ZRNf3g/JCOXDscCS3a2rgiHrt6_Eg/exhaustion"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Exhaustion summary."
  - id: "src-008"
    title: "Gloomhaven — Cephalofair Games official resources page"
    url: "https://cephalofair.com/pages/gloomhaven"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-26"
    notes: "Found in the 2026-08-26 librarian pass; official support hub linking a digital rulebook, an official FAQ, and an errata section."
confidence: medium
status: needs_followup
---

## Edge-case findings

- Claim: A character who becomes exhausted during a scenario cannot return to that scenario.
  Source: src-005
  Evidence: Dized summary states there is no coming back from exhaustion during a scenario.
  Confidence: medium
- Claim: The publisher maintains an official errata section covering at least a first-printing campaign-sheet event-card note and a Scenario 26 setup correction, alongside a separate official FAQ page and a digital rulebook.
  Source: src-008
  Evidence: Official resources page's errata section documents corrections for a first-printing batch, including a campaign-sheet event-card note and a Scenario 26 setup correction; links to a digital rulebook (Google Drive) and an official FAQ (cephalofairgames.github.io/gloomhaven2e-faq/, URL slug not independently confirmed as first-edition-scoped).
  Confidence: medium

## Open questions

Exhaustion triggers, hand-loss timing, and monster-specific exceptions require official FAQ verification. The linked official FAQ's URL slug says "gloomhaven2e" — confirm whether it covers the base (first) edition before citing it against this base-game-scoped record.