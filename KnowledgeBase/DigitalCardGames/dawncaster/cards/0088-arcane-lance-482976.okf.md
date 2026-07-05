---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 482976
  name: "Arcane Lance"
  ordinal: 88
  slug: "arcane-lance"
  category: "Action"
  type: "Magic"
  rarity: "Common"
  expansion: "Infinitum"
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
  - "Free"
  - "Mergecraft"
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
    url: "https://blightbane.io/card/Arcane_Lance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Arcane Lance

## Card identity

- **Ordinal:** 88 of first 500 generated cards
- **Source card id:** `482976`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Arcane Lance` appears in the Neurrone Dawncaster SQLite card table with id `482976`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage.
Free when conjured.
Mergecraft 3.

## Raw rules HTML

```html
Deal [damage:3] damage.<br>Free when conjured.<br>Mergecraft 3.
```

## Observed keyword / token leads

`Free`, `Mergecraft`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
