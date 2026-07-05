---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 978382
  name: "Expel Corruption"
  ordinal: 622
  slug: "expel-corruption"
  category: "Action"
  type: "Utility"
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
  - "Affliction"
  - "Cleanse"
  - "Gain STR"
  - "VOID"
  - "VOIDVOIDVOIDVOID"
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
    url: "https://blightbane.io/card/Expel_Corruption"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Expel Corruption

## Card identity

- **Ordinal:** 622 of 1692 generated cards
- **Source card id:** `978382`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Expel Corruption` appears in the Neurrone Dawncaster SQLite card table with id `978382`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Cleanse an Affliction
and remove VOIDVOIDVOIDVOID.
Gain STR for every two VOID removed this way.

## Raw rules HTML

```html
Cleanse an Affliction<br>and remove VOIDVOIDVOIDVOID.<br>Gain STR for every two VOID removed this way.
```

## Observed keyword / token leads

`Affliction`, `Cleanse`, `Gain STR`, `VOID`, `VOIDVOIDVOIDVOID`
