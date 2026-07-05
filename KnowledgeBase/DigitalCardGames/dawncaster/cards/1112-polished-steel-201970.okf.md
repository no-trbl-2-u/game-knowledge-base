---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 201970
  name: "Polished Steel"
  ordinal: 1112
  slug: "polished-steel"
  category: "Enchantment"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Synthesis"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 1
  blood: 0
observed_terms:
  - "Armor"
  - "damageBonus+1"
  - "Equipment"
  - "Upgradeable"
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
    url: "https://blightbane.io/card/Polished_Steel"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Polished Steel

## Card identity

- **Ordinal:** 1112 of 1692 generated cards
- **Source card id:** `201970`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Polished Steel` appears in the Neurrone Dawncaster SQLite card table with id `201970`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, gain [[damageBonus+1]] Armor whenever you activate an Equipment. Upgradeable. Unique.

## Raw rules HTML

```html
This combat, gain [[damageBonus+1]] Armor whenever you activate an Equipment. Upgradeable. Unique.
```

## Observed keyword / token leads

`Armor`, `damageBonus+1`, `Equipment`, `Upgradeable`
