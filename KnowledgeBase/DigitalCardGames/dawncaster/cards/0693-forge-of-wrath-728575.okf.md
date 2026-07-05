---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 728575
  name: "Forge of Wrath"
  ordinal: 693
  slug: "forge-of-wrath"
  category: "Equipment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Eclypse"
  color: "Gold"
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
  - "Battlespear"
  - "Durability"
  - "HOLY"
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
    url: "https://blightbane.io/card/Forge_of_Wrath"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Forge of Wrath

## Card identity

- **Ordinal:** 693 of 1692 generated cards
- **Source card id:** `728575`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Gold
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Forge of Wrath` appears in the Neurrone Dawncaster SQLite card table with id `728575`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate to take 3 damage, gain HOLY and create a Battlespear. Durability (5/5). Unique.

## Raw rules HTML

```html
Activate to take 3 damage, gain HOLY and create a Battlespear. Durability (5/5). Unique.
```

## Observed keyword / token leads

`Activate`, `Battlespear`, `Durability`, `HOLY`
