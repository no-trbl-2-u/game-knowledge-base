---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 947035
  name: "Vipers Touch"
  ordinal: 1626
  slug: "vipers-touch"
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
  - "Double"
  - "Inflict"
  - "other(status)Charmed"
  - "Poison"
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
    url: "https://blightbane.io/card/Vipers_Touch"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Vipers Touch

## Card identity

- **Ordinal:** 1626 of 1692 generated cards
- **Source card id:** `947035`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Metamorphosis
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Vipers Touch` appears in the Neurrone Dawncaster SQLite card table with id `947035`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 3 Poison.
Double the target's Poison if it has 20 or more Charmed ([[other(status)Charmed]]).

## Raw rules HTML

```html
Inflict 3 Poison.<br>Double the target's Poison if it has 20 or more Charmed ([[other(status)Charmed]]).
```

## Observed keyword / token leads

`Charmed`, `Double`, `Inflict`, `other(status)Charmed`, `Poison`
