---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 498589
  name: "Eldermind Pendant"
  ordinal: 583
  slug: "eldermind-pendant"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Metamorphosis"
  color: "Aqua"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 3
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Dragon"
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
    url: "https://blightbane.io/card/Eldermind_Pendant"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Eldermind Pendant

## Card identity

- **Ordinal:** 583 of 1692 generated cards
- **Source card id:** `498589`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Metamorphosis
- **Color:** Aqua
- **Cost summary:** dexint=3

## Source-backed facts

- Claim: `Eldermind Pendant` appears in the Neurrone Dawncaster SQLite card table with id `498589`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Whenever you play a non-conjured Dragon card, repeat your "Start of Turn" effects. Unique.

## Raw rules HTML

```html
Whenever you play a non-conjured Dragon card, repeat your "Start of Turn" effects. Unique.
```

## Observed keyword / token leads

`Dragon`, `Turn`
