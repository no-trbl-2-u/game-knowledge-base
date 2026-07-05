---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 701906
  name: "First Aid Kit"
  ordinal: 666
  slug: "first-aid-kit"
  category: "Item"
  type: "Utility"
  rarity: "Common"
  expansion: "Core"
  color: "Brown"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 1
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Bandages"
  - "Charges"
  - "Conjure"
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
    url: "https://blightbane.io/card/First_Aid_Kit"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# First Aid Kit

## Card identity

- **Ordinal:** 666 of 1692 generated cards
- **Source card id:** `701906`
- **Category:** Item
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `First Aid Kit` appears in the Neurrone Dawncaster SQLite card table with id `701906`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Conjure 2 Bandages. Charges (1/1).

## Raw rules HTML

```html
Conjure 2 Bandages. Charges (1/1).
```

## Observed keyword / token leads

`Bandages`, `Charges`, `Conjure`
