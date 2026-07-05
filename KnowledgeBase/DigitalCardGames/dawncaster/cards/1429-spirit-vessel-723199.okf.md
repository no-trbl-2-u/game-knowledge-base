---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 723199
  name: "Spirit Vessel"
  ordinal: 1429
  slug: "spirit-vessel"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Orange"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 2
    intstr: 0
    blood: 0
observed_terms:
  - "Effigy"
  - "Heal"
  - "Maximum HEALTH"
  - "myMaxHealth/5"
  - "Requires"
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
    url: "https://blightbane.io/card/Spirit_Vessel"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Spirit Vessel

## Card identity

- **Ordinal:** 1429 of 1692 generated cards
- **Source card id:** `723199`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Orange
- **Cost summary:** dexstr=2

## Source-backed facts

- Claim: `Spirit Vessel` appears in the Neurrone Dawncaster SQLite card table with id `723199`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Requires an Effigy
Heal 20 percent of your Maximum HEALTH ([[myMaxHealth/5]]). Your foe loses an equal amount of Maximum HEALTH. Unique.

## Raw rules HTML

```html
Requires an Effigy<br>Heal 20 percent of your Maximum HEALTH ([[myMaxHealth/5]]). Your foe loses an equal amount of Maximum HEALTH. Unique.
```

## Observed keyword / token leads

`Effigy`, `Heal`, `Maximum HEALTH`, `myMaxHealth/5`, `Requires`
