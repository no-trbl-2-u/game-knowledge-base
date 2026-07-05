---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 643673
  name: "Corrupt Magic"
  ordinal: 424
  slug: "corrupt-magic"
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
  intstr: 1
  blood: 1
observed_terms:
  - "Affliction"
  - "Blessing"
  - "Convert"
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
    url: "https://blightbane.io/card/Corrupt_Magic"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Corrupt Magic

## Card identity

- **Ordinal:** 424 of first 500 generated cards
- **Source card id:** `643673`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Purple
- **Cost summary:** intstr=1, blood=1

## Source-backed facts

- Claim: `Corrupt Magic` appears in the Neurrone Dawncaster SQLite card table with id `643673`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Convert a foe's Blessing into a random Affliction.

## Raw rules HTML

```html
Convert a foe's Blessing into a random Affliction.
```

## Observed keyword / token leads

`Affliction`, `Blessing`, `Convert`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
