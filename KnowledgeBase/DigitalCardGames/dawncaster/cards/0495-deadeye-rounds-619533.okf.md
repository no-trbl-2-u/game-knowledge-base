---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 619533
  name: "Deadeye Rounds"
  ordinal: 495
  slug: "deadeye-rounds"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
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
  - "Ranged Actions"
  - "Reload"
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
    url: "https://blightbane.io/card/Deadeye_Rounds"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Deadeye Rounds

## Card identity

- **Ordinal:** 495 of 1692 generated cards
- **Source card id:** `619533`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Deadeye Rounds` appears in the Neurrone Dawncaster SQLite card table with id `619533`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Your next 2 Ranged Actions deal extra damage equal to the previous damage. Start of Turn: Reload.

## Raw rules HTML

```html
Your next 2 Ranged Actions deal extra damage equal to the previous damage. Start of Turn: Reload.
```

## Observed keyword / token leads

`Ranged Actions`, `Reload`, `Turn`
