---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 543552
  name: "Sunder Armor"
  ordinal: 1491
  slug: "sunder-armor"
  category: "Action"
  type: "Melee"
  rarity: "Uncommon"
  expansion: "Core"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 2
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Armor"
  - "other(status)Armor"
  - "Remove"
  - "Vulnerable"
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
    url: "https://blightbane.io/card/Sunder_Armor"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Sunder Armor

## Card identity

- **Ordinal:** 1491 of 1692 generated cards
- **Source card id:** `543552`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Red
- **Cost summary:** str=2

## Source-backed facts

- Claim: `Sunder Armor` appears in the Neurrone Dawncaster SQLite card table with id `543552`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Remove your foe's Armor, then deal damage equal to the Armor removed ([[other(status)Armor]]) and inflict 2 Vulnerable

## Raw rules HTML

```html
Remove your foe's Armor, then deal damage equal to the Armor removed ([[other(status)Armor]]) and inflict 2 Vulnerable
```

## Observed keyword / token leads

`Armor`, `other(status)Armor`, `Remove`, `Vulnerable`
