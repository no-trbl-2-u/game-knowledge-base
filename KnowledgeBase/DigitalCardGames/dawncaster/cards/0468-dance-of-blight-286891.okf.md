---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 286891
  name: "Dance of Blight"
  ordinal: 468
  slug: "dance-of-blight"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Eclypse"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 1
observed_terms:
  - "Completing"
  - "damageBonus+1"
  - "Gain Ritualist"
  - "Heavy"
  - "Performance"
  - "Potency"
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
    url: "https://blightbane.io/card/Dance_of_Blight"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dance of Blight

## Card identity

- **Ordinal:** 468 of 1692 generated cards
- **Source card id:** `286891`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Orange
- **Cost summary:** blood=1

## Source-backed facts

- Claim: `Dance of Blight` appears in the Neurrone Dawncaster SQLite card table with id `286891`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain Ritualist and [[damageBonus+1]] Potency. Completing a Performance returns this to hand. Upgradeable. Heavy.

## Raw rules HTML

```html
Gain Ritualist and [[damageBonus+1]] Potency. Completing a Performance returns this to hand. Upgradeable. Heavy.
```

## Observed keyword / token leads

`Completing`, `damageBonus+1`, `Gain Ritualist`, `Heavy`, `Performance`, `Potency`, `Upgradeable`
