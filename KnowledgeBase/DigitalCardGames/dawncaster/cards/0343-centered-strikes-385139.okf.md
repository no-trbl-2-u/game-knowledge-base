---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 385139
  name: "Centered Strikes"
  ordinal: 343
  slug: "centered-strikes"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Core"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 1
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Basic Attacks"
  - "Focus Unique"
  - "Mantras"
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
    url: "https://blightbane.io/card/Centered_Strikes"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Centered Strikes

## Card identity

- **Ordinal:** 343 of first 500 generated cards
- **Source card id:** `385139`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Core
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Centered Strikes` appears in the Neurrone Dawncaster SQLite card table with id `385139`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, your Basic Attacks and Mantras deal additional damage equal to your Focus Unique.

## Raw rules HTML

```html
This combat, your Basic Attacks and Mantras deal additional damage equal to your Focus Unique.
```

## Observed keyword / token leads

`Basic Attacks`, `Focus Unique`, `Mantras`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
