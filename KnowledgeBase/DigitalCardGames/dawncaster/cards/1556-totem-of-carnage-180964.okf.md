---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 180964
  name: "Totem of Carnage"
  ordinal: 1556
  slug: "totem-of-carnage"
  category: "Summon"
  type: "Utility"
  rarity: "Common"
  expansion: "None"
  color: "None"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Anger"
  - "enchantmentStacks"
  - "Turn"
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
    url: "https://blightbane.io/card/Totem_of_Carnage"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Totem of Carnage

## Card identity

- **Ordinal:** 1556 of 1692 generated cards
- **Source card id:** `180964`
- **Category:** Summon
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** None
- **Color:** None
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Totem of Carnage` appears in the Neurrone Dawncaster SQLite card table with id `180964`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn:
Gain [[enchantmentStacks]] Anger.

## Raw rules HTML

```html
Start of Turn:<br>Gain [[enchantmentStacks]] Anger.
```

## Observed keyword / token leads

`Anger`, `enchantmentStacks`, `Turn`
