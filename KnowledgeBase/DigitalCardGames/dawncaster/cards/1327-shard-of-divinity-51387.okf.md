---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 51387
  name: "Shard of Divinity"
  ordinal: 1327
  slug: "shard-of-divinity"
  category: "Artifact"
  type: "Divine"
  rarity: "Rare"
  expansion: "Core Extended"
  color: "Gold"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 2
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Blessing"
  - "HOLY"
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
    url: "https://blightbane.io/card/Shard_of_Divinity"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Shard of Divinity

## Card identity

- **Ordinal:** 1327 of 1692 generated cards
- **Source card id:** `51387`
- **Category:** Artifact
- **Type:** Divine
- **Rarity:** Rare
- **Expansion:** Core Extended
- **Color:** Gold
- **Cost summary:** holy=2

## Source-backed facts

- Claim: `Shard of Divinity` appears in the Neurrone Dawncaster SQLite card table with id `51387`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, gain a random Blessing whenever you spend HOLY. Unique.

## Raw rules HTML

```html
This combat, gain a random Blessing whenever you spend HOLY. Unique.
```

## Observed keyword / token leads

`Blessing`, `HOLY`
