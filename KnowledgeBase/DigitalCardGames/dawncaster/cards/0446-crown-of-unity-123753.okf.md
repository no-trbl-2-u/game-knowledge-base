---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 123753
  name: "Crown of Unity"
  ordinal: 446
  slug: "crown-of-unity"
  category: "Equipment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Catalyst"
  color: "Brown"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 2
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Activate"
  - "Durability"
  - "Surge"
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
    url: "https://blightbane.io/card/Crown_of_Unity"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Crown of Unity

## Card identity

- **Ordinal:** 446 of 1692 generated cards
- **Source card id:** `123753`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Brown
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Crown of Unity` appears in the Neurrone Dawncaster SQLite card table with id `123753`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate to conjure 
a Surge. Durability (5/5). Unique.

## Raw rules HTML

```html
Activate to conjure <br>a Surge. Durability (5/5). Unique.
```

## Observed keyword / token leads

`Activate`, `Durability`, `Surge`
