---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 72725
  name: "Concordance"
  ordinal: 406
  slug: "concordance"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Catalyst"
  color: "Purple"
  cost:
    dex: 0
    int: 1
    str: 1
    holy: 1
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Banner"
  - "Grounded"
  - "One Use"
  - "Select"
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
    url: "https://blightbane.io/card/Concordance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Concordance

## Card identity

- **Ordinal:** 406 of 1692 generated cards
- **Source card id:** `72725`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Catalyst
- **Color:** Purple
- **Cost summary:** int=1, str=1, holy=1

## Source-backed facts

- Claim: `Concordance` appears in the Neurrone Dawncaster SQLite card table with id `72725`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use:
Select a Banner and add it to your deck. Grounded.

## Raw rules HTML

```html
One Use:<br>Select a Banner and add it to your deck. Grounded.
```

## Observed keyword / token leads

`Banner`, `Grounded`, `One Use`, `Select`
