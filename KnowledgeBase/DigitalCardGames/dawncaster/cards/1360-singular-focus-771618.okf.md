---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 771618
  name: "Singular Focus"
  ordinal: 1360
  slug: "singular-focus"
  category: "Code"
  type: "Divine"
  rarity: "Legendary"
  expansion: "Core Extended"
  color: "Blue"
  cost:
  dex: 0
  int: 3
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "All"
  - "Code"
  - "Combat"
  - "Element"
  - "Grounded"
  - "Permanently Attune"
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
    url: "https://blightbane.io/card/Singular_Focus"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Singular Focus

## Card identity

- **Ordinal:** 1360 of 1692 generated cards
- **Source card id:** `771618`
- **Category:** Code
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Blue
- **Cost summary:** int=3

## Source-backed facts

- Claim: `Singular Focus` appears in the Neurrone Dawncaster SQLite card table with id `771618`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Combat: Permanently Attune to the element most common in your deck. Code: All cards but this share the same Element. Unique. Grounded.

## Raw rules HTML

```html
Start of Combat: Permanently Attune to the element most common in your deck. Code: All cards but this share the same Element. Unique. Grounded.
```

## Observed keyword / token leads

`All`, `Code`, `Combat`, `Element`, `Grounded`, `Permanently Attune`
