---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 678056
  name: "Spellstrike"
  ordinal: 1423
  slug: "spellstrike"
  category: "Action"
  type: "Melee"
  rarity: "Uncommon"
  expansion: "Core"
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
  - "Blessing"
  - "Dispel"
  - "Make"
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
    url: "https://blightbane.io/card/Spellstrike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Spellstrike

## Card identity

- **Ordinal:** 1423 of 1692 generated cards
- **Source card id:** `678056`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Spellstrike` appears in the Neurrone Dawncaster SQLite card table with id `678056`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Dispel a Blessing.
Make a Basic Attack.

## Raw rules HTML

```html
Dispel a Blessing.<br>Make a Basic Attack.
```

## Observed keyword / token leads

`Basic Attack`, `Blessing`, `Dispel`, `Make`
