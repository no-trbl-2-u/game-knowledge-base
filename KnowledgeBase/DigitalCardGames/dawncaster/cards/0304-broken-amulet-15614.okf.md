---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 15614
  name: "Broken Amulet"
  ordinal: 304
  slug: "broken-amulet"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "Brown"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 1
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Actions"
  - "Increase"
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
    url: "https://blightbane.io/card/Broken_Amulet"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Broken Amulet

## Card identity

- **Ordinal:** 304 of 1692 generated cards
- **Source card id:** `15614`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Broken Amulet` appears in the Neurrone Dawncaster SQLite card table with id `15614`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Actions deal 1 extra damage. Start of Turn: Increase this damage bonus by one. Unique.

## Raw rules HTML

```html
Actions deal 1 extra damage. Start of Turn: Increase this damage bonus by one. Unique.
```

## Observed keyword / token leads

`Actions`, `Increase`, `Turn`
