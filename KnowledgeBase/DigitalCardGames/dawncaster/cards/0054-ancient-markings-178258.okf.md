---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 178258
  name: "Ancient Markings"
  ordinal: 54
  slug: "ancient-markings"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 1
  intstr: 0
  blood: 0
observed_terms:
  - "Ancestral"
  - "Delve"
  - "Summon"
  - "Totem"
  - "Totems"
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
    url: "https://blightbane.io/card/Ancient_Markings"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ancient Markings

## Card identity

- **Ordinal:** 54 of first 500 generated cards
- **Source card id:** `178258`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Ancient Markings` appears in the Neurrone Dawncaster SQLite card table with id `178258`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Delve and play a Totem.
Ancestral: Summon two more random Totems.

## Raw rules HTML

```html
Delve and play a Totem.<br>Ancestral: Summon two more random Totems.
```

## Observed keyword / token leads

`Ancestral`, `Delve`, `Summon`, `Totem`, `Totems`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
