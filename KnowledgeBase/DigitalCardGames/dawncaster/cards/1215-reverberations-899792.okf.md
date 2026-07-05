---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 899792
  name: "Reverberations"
  ordinal: 1215
  slug: "reverberations"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Synthesis"
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
  - "damageBonus+1"
  - "INT"
  - "Removed"
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
    url: "https://blightbane.io/card/Reverberations"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Reverberations

## Card identity

- **Ordinal:** 1215 of 1692 generated cards
- **Source card id:** `899792`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Reverberations` appears in the Neurrone Dawncaster SQLite card table with id `899792`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, gain INT when you play a card you already played this turn. Removed after [[damageBonus+1]] uses. Upgradeable. Unique.

## Raw rules HTML

```html
This combat, gain INT when you play a card you already played this turn. Removed after [[damageBonus+1]] uses. Upgradeable. Unique.
```

## Observed keyword / token leads

`damageBonus+1`, `INT`, `Removed`, `Upgradeable`
