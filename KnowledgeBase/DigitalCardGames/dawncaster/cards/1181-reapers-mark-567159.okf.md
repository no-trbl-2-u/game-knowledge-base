---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 567159
  name: "Reapers Mark"
  ordinal: 1181
  slug: "reapers-mark"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
  expansion: "Catalyst"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 1
  intstr: 0
  blood: 0
observed_terms:
  - "After"
  - "Darkness"
  - "Deep Wound"
  - "Hit"
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
    url: "https://blightbane.io/card/Reapers_Mark"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Reapers Mark

## Card identity

- **Ordinal:** 1181 of 1692 generated cards
- **Source card id:** `567159`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Reapers Mark` appears in the Neurrone Dawncaster SQLite card table with id `567159`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage.
After you lose all Darkness, inflict a Deep Wound for each time this attack Hit.
Darkness 5.

## Raw rules HTML

```html
Deal [damage:3] damage.<br>After you lose all Darkness, inflict a Deep Wound for each time this attack Hit.<br>Darkness 5.
```

## Observed keyword / token leads

`After`, `Darkness`, `Deep Wound`, `Hit`
