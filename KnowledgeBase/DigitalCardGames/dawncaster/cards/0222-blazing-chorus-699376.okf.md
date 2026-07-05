---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 699376
  name: "Blazing Chorus"
  ordinal: 222
  slug: "blazing-chorus"
  category: "Action"
  type: "Divine"
  rarity: "Common"
  expansion: "Synthesis"
  color: "Gold"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 1
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Charges"
  - "Hymn"
  - "On Hit"
  - "Play"
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
    url: "https://blightbane.io/card/Blazing_Chorus"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Blazing Chorus

## Card identity

- **Ordinal:** 222 of first 500 generated cards
- **Source card id:** `699376`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Synthesis
- **Color:** Gold
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Blazing Chorus` appears in the Neurrone Dawncaster SQLite card table with id `699376`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage.
On Hit: Play a Hymn from a selection equal to the damage dealt. Charges (1/1).

## Raw rules HTML

```html
Deal [damage:3] damage.
On Hit: Play a Hymn from a selection equal to the damage dealt. Charges (1/1).
```

## Observed keyword / token leads

`Charges`, `Hymn`, `On Hit`, `Play`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
