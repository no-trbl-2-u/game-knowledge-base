---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 20988
  name: "Aeternal Mitre"
  ordinal: 24
  slug: "aeternal-mitre"
  category: "Equipment"
  type: "Divine"
  rarity: "Rare"
  expansion: "Synthesis"
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
  - "Activate"
  - "Aeternal"
  - "Durability"
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
    url: "https://blightbane.io/card/Aeternal_Mitre"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aeternal Mitre

## Card identity

- **Ordinal:** 24 of first 500 generated cards
- **Source card id:** `20988`
- **Category:** Equipment
- **Type:** Divine
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Gold
- **Cost summary:** holy=2

## Source-backed facts

- Claim: `Aeternal Mitre` appears in the Neurrone Dawncaster SQLite card table with id `20988`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate to gain HOLY for each Aeternal vestment equipped. Durability (3/3). Unique.

## Raw rules HTML

```html
Activate to gain HOLY for each Aeternal vestment equipped. Durability (3/3). Unique.
```

## Observed keyword / token leads

`Activate`, `Aeternal`, `Durability`, `HOLY`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
