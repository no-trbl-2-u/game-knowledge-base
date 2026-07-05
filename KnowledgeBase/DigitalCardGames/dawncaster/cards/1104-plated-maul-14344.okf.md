---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 14344
  name: "Plated Maul"
  ordinal: 1104
  slug: "plated-maul"
  category: "Basic Attack"
  type: "Melee"
  rarity: "Common"
  expansion: "None"
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
  - "Armor"
  - "On Hit"
  - "Swap"
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
    url: "https://blightbane.io/card/Plated_Maul"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Plated Maul

## Card identity

- **Ordinal:** 1104 of 1692 generated cards
- **Source card id:** `14344`
- **Category:** Basic Attack
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** None
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Plated Maul` appears in the Neurrone Dawncaster SQLite card table with id `14344`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage.
On Hit: Gain 6 Armor.
Swap.

## Raw rules HTML

```html
Deal [damage:3] damage.<br>On Hit: Gain 6 Armor.<br>Swap.
```

## Observed keyword / token leads

`Armor`, `On Hit`, `Swap`
