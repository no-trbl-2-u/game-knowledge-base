---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 523265
  name: "Dispel Magic"
  ordinal: 530
  slug: "dispel-magic"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Core"
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
  - "Blessings"
  - "Dispel"
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
    url: "https://blightbane.io/card/Dispel_Magic"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dispel Magic

## Card identity

- **Ordinal:** 530 of 1692 generated cards
- **Source card id:** `523265`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Dispel Magic` appears in the Neurrone Dawncaster SQLite card table with id `523265`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Dispel all Blessings from your opponent.

## Raw rules HTML

```html
Dispel all Blessings from your opponent.
```

## Observed keyword / token leads

`Blessings`, `Dispel`
