---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 182720
  name: "Powder Pockets"
  ordinal: 1119
  slug: "powder-pockets"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Infinitum"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 1
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Bomb"
  - "Bombs"
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
    url: "https://blightbane.io/card/Powder_Pockets"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Powder Pockets

## Card identity

- **Ordinal:** 1119 of 1692 generated cards
- **Source card id:** `182720`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Infinitum
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Powder Pockets` appears in the Neurrone Dawncaster SQLite card table with id `182720`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Conjure a Bomb.
If you had no Bombs in hand, return this card to hand. Charges (3/3).

## Raw rules HTML

```html
Conjure a Bomb.<br>If you had no Bombs in hand, return this card to hand. Charges (3/3).
```

## Observed keyword / token leads

`Bomb`, `Bombs`, `Charges`, `Conjure`
