---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 105003
  name: "Aspect of Vengeance"
  ordinal: 110
  slug: "aspect-of-vengeance"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "None"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 1
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "HEALTH"
  - "myCurrentHealth"
  - "Slain"
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
    url: "https://blightbane.io/card/Aspect_of_Vengeance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aspect of Vengeance

## Card identity

- **Ordinal:** 110 of 1692 generated cards
- **Source card id:** `105003`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** None
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Aspect of Vengeance` appears in the Neurrone Dawncaster SQLite card table with id `105003`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Your attacks deal additional damage equal to your HEALTH ([[myCurrentHealth]]). You are Slain at the end of your turn. Unique.

## Raw rules HTML

```html
Your attacks deal additional damage equal to your HEALTH ([[myCurrentHealth]]). You are Slain at the end of your turn. Unique.
```

## Observed keyword / token leads

`HEALTH`, `myCurrentHealth`, `Slain`
