---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 855284
  name: "Vile Thoughts"
  ordinal: 1622
  slug: "vile-thoughts"
  category: "Action"
  type: "Corruption"
  rarity: "Uncommon"
  expansion: "Eclypse"
  color: "Blue"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 3
observed_terms:
  - "Afflictions"
  - "Channel"
  - "INT"
  - "Magic Actions"
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
    url: "https://blightbane.io/card/Vile_Thoughts"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Vile Thoughts

## Card identity

- **Ordinal:** 1622 of 1692 generated cards
- **Source card id:** `855284`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Blue
- **Cost summary:** blood=3

## Source-backed facts

- Claim: `Vile Thoughts` appears in the Neurrone Dawncaster SQLite card table with id `855284`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Magic Actions inflict random Afflictions equal to your remaining INT. Channel.

## Raw rules HTML

```html
Magic Actions inflict random Afflictions equal to your remaining INT. Channel.
```

## Observed keyword / token leads

`Afflictions`, `Channel`, `INT`, `Magic Actions`
