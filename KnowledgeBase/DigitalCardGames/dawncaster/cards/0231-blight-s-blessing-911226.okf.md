---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 911226
  name: "Blight's Blessing"
  ordinal: 231
  slug: "blight-s-blessing"
  category: "Action"
  type: "Divine"
  rarity: "Monster"
  expansion: "None"
  color: "Monster"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 1
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Affliction"
  - "chapter"
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
    url: "https://blightbane.io/card/Blight%27s_Blessing"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Blight's Blessing

## Card identity

- **Ordinal:** 231 of 1692 generated cards
- **Source card id:** `911226`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Blight's Blessing` appears in the Neurrone Dawncaster SQLite card table with id `911226`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain and inflict a random Affliction with [[chapter]] stacks.

## Raw rules HTML

```html
Gain and inflict a random Affliction with [[chapter]] stacks.
```

## Observed keyword / token leads

`Affliction`, `chapter`
