---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 401179
  name: "Aura of Heroism"
  ordinal: 133
  slug: "aura-of-heroism"
  category: "Enchantment"
  type: "Utility"
  rarity: "Common"
  expansion: "None"
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
  - "Dazed"
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
    url: "https://blightbane.io/card/Aura_of_Heroism"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aura of Heroism

## Card identity

- **Ordinal:** 133 of 1692 generated cards
- **Source card id:** `401179`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** None
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Aura of Heroism` appears in the Neurrone Dawncaster SQLite card table with id `401179`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

You are immune to Dazed. Unique.

## Raw rules HTML

```html
You are immune to Dazed. Unique.
```

## Observed keyword / token leads

`Dazed`
