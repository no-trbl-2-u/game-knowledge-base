---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 663780
  name: "Banner of Valyn"
  ordinal: 165
  slug: "banner-of-valyn"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Catalyst"
  color: "Purple"
  cost:
    dex: 0
    int: 2
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Focus"
  - "Gain INT"
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
    url: "https://blightbane.io/card/Banner_of_Valyn"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Banner of Valyn

## Card identity

- **Ordinal:** 165 of 1692 generated cards
- **Source card id:** `663780`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Purple
- **Cost summary:** int=2

## Source-backed facts

- Claim: `Banner of Valyn` appears in the Neurrone Dawncaster SQLite card table with id `663780`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn:
Gain INT and 1 Focus. Unique.

## Raw rules HTML

```html
Start of Turn:<br>Gain INT and 1 Focus. Unique.
```

## Observed keyword / token leads

`Focus`, `Gain INT`, `Turn`
