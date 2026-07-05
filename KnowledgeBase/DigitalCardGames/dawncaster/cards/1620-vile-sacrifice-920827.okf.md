---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 920827
  name: "Vile Sacrifice"
  ordinal: 1620
  slug: "vile-sacrifice"
  category: "Action"
  type: "Corruption"
  rarity: "Uncommon"
  expansion: "Eclypse"
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
  - "Ascend"
  - "Corrupted"
  - "Defiled"
  - "Destroy"
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
    url: "https://blightbane.io/card/Vile_Sacrifice"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Vile Sacrifice

## Card identity

- **Ordinal:** 1620 of 1692 generated cards
- **Source card id:** `920827`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Vile Sacrifice` appears in the Neurrone Dawncaster SQLite card table with id `920827`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Destroy a card in your hand. Corrupted: Ascend. Unique. Defiled.

## Raw rules HTML

```html
Destroy a card in your hand. Corrupted: Ascend. Unique. Defiled.
```

## Observed keyword / token leads

`Ascend`, `Corrupted`, `Defiled`, `Destroy`
