---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 54735
  name: "Prophetic Bolt"
  ordinal: 1138
  slug: "prophetic-bolt"
  category: "Action"
  type: "Magic"
  rarity: "Common"
  expansion: "Infinitum"
  color: "Aqua"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 1
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Inflict Doom"
  - "tempValue"
  - "When Foretold"
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
    url: "https://blightbane.io/card/Prophetic_Bolt"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Prophetic Bolt

## Card identity

- **Ordinal:** 1138 of 1692 generated cards
- **Source card id:** `54735`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Prophetic Bolt` appears in the Neurrone Dawncaster SQLite card table with id `54735`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3+[[tempValue]]] damage.
Inflict Doom equal to
the damage dealt. When Foretold, add 5 damage.

## Raw rules HTML

```html
Deal [damage:3+[[tempValue]]] damage.<br>Inflict Doom equal to<br>the damage dealt. When Foretold, add 5 damage.
```

## Observed keyword / token leads

`Inflict Doom`, `tempValue`, `When Foretold`
