---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 41818
  name: "Flourishing Bow"
  ordinal: 676
  slug: "flourishing-bow"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Metamorphosis"
  color: "Green"
  cost:
    dex: 1
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Charmed"
  - "Evasion"
  - "Finale"
  - "Inflict"
  - "Perform"
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
    url: "https://blightbane.io/card/Flourishing_Bow"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Flourishing Bow

## Card identity

- **Ordinal:** 676 of 1692 generated cards
- **Source card id:** `41818`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Metamorphosis
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Flourishing Bow` appears in the Neurrone Dawncaster SQLite card table with id `41818`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 1 Evasion.
Inflict 5 Charmed.
Finale: Perform 2.

## Raw rules HTML

```html
Gain 1 Evasion.<br>Inflict 5 Charmed.<br>Finale: Perform 2.
```

## Observed keyword / token leads

`Charmed`, `Evasion`, `Finale`, `Inflict`, `Perform`
