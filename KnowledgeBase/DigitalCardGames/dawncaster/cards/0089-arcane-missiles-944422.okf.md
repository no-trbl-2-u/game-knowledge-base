---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 944422
  name: "Arcane Missiles"
  ordinal: 89
  slug: "arcane-missiles"
  category: "Action"
  type: "Magic"
  rarity: "Common"
  expansion: "Infinitum"
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
  - "damageBonus"
  - "Mergecraft"
  - "Upgrades"
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
    url: "https://blightbane.io/card/Arcane_Missiles"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Arcane Missiles

## Card identity

- **Ordinal:** 89 of 1692 generated cards
- **Source card id:** `944422`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Arcane Missiles` appears in the Neurrone Dawncaster SQLite card table with id `944422`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:1-[[damageBonus]]] damage (|#[[damageBonus]]+1#|) times.
Upgrades improve the number of attacks instead of damage. Mergecraft 1.

## Raw rules HTML

```html
Deal [damage:1-[[damageBonus]]] damage (|#[[damageBonus]]+1#|) times.<br>Upgrades improve the number of attacks instead of damage. Mergecraft 1.
```

## Observed keyword / token leads

`damageBonus`, `Mergecraft`, `Upgrades`
