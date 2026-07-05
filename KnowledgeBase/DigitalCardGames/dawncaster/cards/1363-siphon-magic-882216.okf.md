---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 882216
  name: "Siphon Magic"
  ordinal: 1363
  slug: "siphon-magic"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Core"
  color: "Blue"
  cost:
  dex: 0
  int: 1
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Blessing"
  - "Steal"
sources:
  - id: "src-001"
    title: "Neurrone Dawncaster SQLite card database"
    url: "https://neurrone.com/dawncaster/dawncaster-cards.db"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Local harvested copy: /root/Workspace/reports/dawncaster-card-library/neurrone-dawncaster-cards.db"
  - id: "src-002"
    title: "Blightbane Dawncaster card page"
    url: "https://blightbane.io/card/Siphon_Magic"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Siphon Magic

## Card identity

- **Ordinal:** 1363 of 1692 generated cards
- **Source card id:** `882216`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Core
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Siphon Magic` appears in the Neurrone Dawncaster SQLite card table with id `882216`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Steal a Blessing 
from your opponent.

## Raw rules HTML

```html
Steal a Blessing <br>from your opponent.
```

## Observed keyword / token leads

`Blessing`, `Steal`
