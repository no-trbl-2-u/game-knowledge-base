---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 191435
  name: "Lightning Rod"
  ordinal: 941
  slug: "lightning-rod"
  category: "Artifact"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Catalyst"
  color: "Blue"
  cost:
  dex: 0
  int: 1
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Chain"
  - "damageBonus+3"
  - "Shocked"
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
    url: "https://blightbane.io/card/Lightning_Rod"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Lightning Rod

## Card identity

- **Ordinal:** 941 of 1692 generated cards
- **Source card id:** `191435`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Lightning Rod` appears in the Neurrone Dawncaster SQLite card table with id `191435`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain [[damageBonus+3]] Shocked.
At the start of your turn, gain Chain equal to your Shocked. Upgradeable. Unique.

## Raw rules HTML

```html
Gain [[damageBonus+3]] Shocked.<br>At the start of your turn, gain Chain equal to your Shocked. Upgradeable. Unique.
```

## Observed keyword / token leads

`Chain`, `damageBonus+3`, `Shocked`, `Upgradeable`
