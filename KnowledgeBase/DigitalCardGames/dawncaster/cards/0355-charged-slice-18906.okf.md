---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 18906
  name: "Charged Slice"
  ordinal: 355
  slug: "charged-slice"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Core Extended"
  color: "Green"
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
  - "damageBonus"
  - "DEX"
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
    url: "https://blightbane.io/card/Charged_Slice"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Charged Slice

## Card identity

- **Ordinal:** 355 of 1692 generated cards
- **Source card id:** `18906`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Core Extended
- **Color:** Green
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Charged Slice` appears in the Neurrone Dawncaster SQLite card table with id `18906`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3-[[damageBonus]]] damage. 
This damage is improved by |#[[damageBonus]]+1#| for each of your DEX. Upgradeable.

## Raw rules HTML

```html
Deal [damage:3-[[damageBonus]]] damage. <br>This damage is improved by |#[[damageBonus]]+1#| for each of your DEX. Upgradeable.
```

## Observed keyword / token leads

`damageBonus`, `DEX`, `Upgradeable`
