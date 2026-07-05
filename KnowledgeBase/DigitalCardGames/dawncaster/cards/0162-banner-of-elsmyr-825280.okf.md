---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 825280
  name: "Banner of Elsmyr"
  ordinal: 162
  slug: "banner-of-elsmyr"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Catalyst"
  color: "Purple"
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
  - "Gain HOLY"
  - "Turn"
  - "Zeal"
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
    url: "https://blightbane.io/card/Banner_of_Elsmyr"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Banner of Elsmyr

## Card identity

- **Ordinal:** 162 of 1692 generated cards
- **Source card id:** `825280`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Purple
- **Cost summary:** holy=2

## Source-backed facts

- Claim: `Banner of Elsmyr` appears in the Neurrone Dawncaster SQLite card table with id `825280`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn:
Gain HOLY and 1 Zeal. Unique.

## Raw rules HTML

```html
Start of Turn:<br>Gain HOLY and 1 Zeal. Unique.
```

## Observed keyword / token leads

`Gain HOLY`, `Turn`, `Zeal`
