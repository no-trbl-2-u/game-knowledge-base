---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 156749
  name: "Call of the Void"
  ordinal: 321
  slug: "call-of-the-void"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Catalyst"
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
  - "Doom"
  - "Foretold"
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
    url: "https://blightbane.io/card/Call_of_the_Void"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Call of the Void

## Card identity

- **Ordinal:** 321 of 1692 generated cards
- **Source card id:** `156749`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Catalyst
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Call of the Void` appears in the Neurrone Dawncaster SQLite card table with id `156749`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

At the end of your turn inflict Doom for each card you've Foretold. Unique.

## Raw rules HTML

```html
At the end of your turn inflict Doom for each card you've Foretold. Unique.
```

## Observed keyword / token leads

`Doom`, `Foretold`
