---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 168982
  name: "Banner of Rehdan"
  ordinal: 164
  slug: "banner-of-rehdan"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Catalyst"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 2
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Anger"
  - "Gain STR"
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
    url: "https://blightbane.io/card/Banner_of_Rehdan"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Banner of Rehdan

## Card identity

- **Ordinal:** 164 of 1692 generated cards
- **Source card id:** `168982`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Purple
- **Cost summary:** str=2

## Source-backed facts

- Claim: `Banner of Rehdan` appears in the Neurrone Dawncaster SQLite card table with id `168982`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn:
Gain STR and 1 Anger. Unique.

## Raw rules HTML

```html
Start of Turn:<br>Gain STR and 1 Anger. Unique.
```

## Observed keyword / token leads

`Anger`, `Gain STR`, `Turn`
