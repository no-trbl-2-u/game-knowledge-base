---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 542853
  name: "Crooked Wand"
  ordinal: 443
  slug: "crooked-wand"
  category: "Basic Attack"
  type: "Magic"
  rarity: "Common"
  expansion: "Metaprogress"
  color: "Brown"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 1
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Affliction"
  - "Inflict"
  - "Swap"
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
    url: "https://blightbane.io/card/Crooked_Wand"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Crooked Wand

## Card identity

- **Ordinal:** 443 of first 500 generated cards
- **Source card id:** `542853`
- **Category:** Basic Attack
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Metaprogress
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Crooked Wand` appears in the Neurrone Dawncaster SQLite card table with id `542853`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:1] damage.
Inflict a random Affliction.
Swap.

## Raw rules HTML

```html
Deal [damage:1] damage.<br>Inflict a random Affliction.<br>Swap.
```

## Observed keyword / token leads

`Affliction`, `Inflict`, `Swap`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
