---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 514461
  name: "Perseverance"
  ordinal: 1080
  slug: "perseverance"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Synthesis"
  color: "Gold"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 1
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Affliction"
  - "Afflictions"
  - "Gain HOLY"
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
    url: "https://blightbane.io/card/Perseverance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Perseverance

## Card identity

- **Ordinal:** 1080 of 1692 generated cards
- **Source card id:** `514461`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Gold
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Perseverance` appears in the Neurrone Dawncaster SQLite card table with id `514461`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain HOLY for each of your Afflictions, then cleanse an Affliction.

## Raw rules HTML

```html
Gain HOLY for each of your Afflictions, then cleanse an Affliction.
```

## Observed keyword / token leads

`Affliction`, `Afflictions`, `Gain HOLY`
