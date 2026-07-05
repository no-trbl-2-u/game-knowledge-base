---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 265070
  name: "Cling to Sanity"
  ordinal: 381
  slug: "cling-to-sanity"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Metamorphosis"
  color: "Blue"
  cost:
  dex: 0
  int: 1
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Affliction"
  - "Cleanse"
  - "Corruption"
  - "HEALTH"
  - "Remove"
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
    url: "https://blightbane.io/card/Cling_to_Sanity"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Cling to Sanity

## Card identity

- **Ordinal:** 381 of first 500 generated cards
- **Source card id:** `265070`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Metamorphosis
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Cling to Sanity` appears in the Neurrone Dawncaster SQLite card table with id `265070`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Remove a Corruption from your deck, then gain 5 HEALTH and Cleanse an Affliction.

## Raw rules HTML

```html
Remove a Corruption from your deck, then gain 5 HEALTH and Cleanse an Affliction.
```

## Observed keyword / token leads

`Affliction`, `Cleanse`, `Corruption`, `HEALTH`, `Remove`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
