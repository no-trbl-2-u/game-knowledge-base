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
    title: "Cephalofair Games — Gloomhaven support and resources"
    url: "https://cephalofair.com/pages/gloomhaven"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-31"
    notes: "Official publisher support hub, confirmed in the 2026-08-31 librarian pass."
confidence: medium
status: verified
---

## Edge-case findings

- Claim: A character who becomes exhausted during a scenario cannot return to that scenario.
  Source: src-005
  Evidence: Dized summary states there is no coming back from exhaustion during a scenario.
  Confidence: medium

- Claim: The publisher maintains an official Gloomhaven FAQ and an official errata list for First Printing (2025) copies, both linked from the publisher support hub.
  Source: src-008
  Evidence: The Cephalofair Gloomhaven page links a "Gloomhaven FAQ" hosted at cephalofairgames.github.io and lists major errata for First Printing (2025) copies.
  Confidence: high

## Open questions

Exhaustion triggers, hand-loss timing, and monster-specific exceptions still require official FAQ verification. The retrievable document is now known: the official FAQ linked from src-008 at cephalofairgames.github.io, plus the First Printing (2025) errata on that same publisher page. A later pass should fetch both.