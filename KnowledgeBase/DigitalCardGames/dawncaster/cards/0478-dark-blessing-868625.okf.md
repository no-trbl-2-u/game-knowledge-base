---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 868625
  name: "Dark Blessing"
  ordinal: 478
  slug: "dark-blessing"
  category: "Action"
  type: "Corruption"
  rarity: "Common"
  expansion: "Infinitum"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 1
observed_terms:
  - "Affliction"
  - "Anger"
  - "Inflict"
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
    url: "https://blightbane.io/card/Dark_Blessing"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dark Blessing

## Card identity

- **Ordinal:** 478 of first 500 generated cards
- **Source card id:** `868625`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Purple
- **Cost summary:** blood=1

## Source-backed facts

- Claim: `Dark Blessing` appears in the Neurrone Dawncaster SQLite card table with id `868625`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 1 Anger.
Inflict a random Affliction with 3 stacks.

## Raw rules HTML

```html
Gain 1 Anger.<br>Inflict a random Affliction with 3 stacks.
```

## Observed keyword / token leads

`Affliction`, `Anger`, `Inflict`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
