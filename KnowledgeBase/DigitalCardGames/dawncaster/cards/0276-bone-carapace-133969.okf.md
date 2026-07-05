---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 133969
  name: "Bone Carapace"
  ordinal: 276
  slug: "bone-carapace"
  category: "Enchantment"
  type: "Utility"
  rarity: "Monster"
  expansion: "None"
  color: "Monster"
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
  - "difficulty"
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
    url: "https://blightbane.io/card/Bone_Carapace"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Bone Carapace

## Card identity

- **Ordinal:** 276 of 1692 generated cards
- **Source card id:** `133969`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Bone Carapace` appears in the Neurrone Dawncaster SQLite card table with id `133969`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn:
Gain |#15*[[difficulty]]#| Armor. Unique.

## Raw rules HTML

```html
Start of Turn:<br>Gain |#15*[[difficulty]]#| Armor. Unique.
```

## Observed keyword / token leads

`Armor`, `difficulty`, `Turn`
