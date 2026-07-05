---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 157350
  name: "Surveillance"
  ordinal: 1501
  slug: "surveillance"
  category: "Action"
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
  - "Basic Attack"
  - "Equipment"
  - "Foretell"
  - "foretell+3"
  - "Take"
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
    url: "https://blightbane.io/card/Surveillance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Surveillance

## Card identity

- **Ordinal:** 1501 of 1692 generated cards
- **Source card id:** `157350`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Surveillance` appears in the Neurrone Dawncaster SQLite card table with id `157350`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Foretell [[foretell+3]].
Take 2 damage and draw a card. If it is a Basic Attack or Equipment card, repeat this.

## Raw rules HTML

```html
Foretell [[foretell+3]].
Take 2 damage and draw a card. If it is a Basic Attack or Equipment card, repeat this.
```

## Observed keyword / token leads

`Basic Attack`, `Equipment`, `Foretell`, `foretell+3`, `Take`
