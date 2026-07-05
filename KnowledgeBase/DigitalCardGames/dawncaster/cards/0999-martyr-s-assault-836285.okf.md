---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 836285
  name: "Martyr's Assault"
  ordinal: 999
  slug: "martyr-s-assault"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
  expansion: "Eclypse"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 1
    holy: 1
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Untempered"
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
    url: "https://blightbane.io/card/Martyr%27s_Assault"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Martyr's Assault

## Card identity

- **Ordinal:** 999 of 1692 generated cards
- **Source card id:** `836285`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** str=1, holy=1

## Source-backed facts

- Claim: `Martyr's Assault` appears in the Neurrone Dawncaster SQLite card table with id `836285`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal and take [damage:3] damage, then upgrade all your Untempered cards equal to the damage dealt.

## Raw rules HTML

```html
Deal and take [damage:3] damage, then upgrade all your Untempered cards equal to the damage dealt.
```

## Observed keyword / token leads

`Untempered`
