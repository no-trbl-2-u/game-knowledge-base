---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 261420
  name: "Arcane Weaver"
  ordinal: 97
  slug: "arcane-weaver"
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
  - "Echo"
  - "Magic"
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
    url: "https://blightbane.io/card/Arcane_Weaver"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Arcane Weaver

## Card identity

- **Ordinal:** 97 of first 500 generated cards
- **Source card id:** `261420`
- **Category:** Basic Attack
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Metaprogress
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Arcane Weaver` appears in the Neurrone Dawncaster SQLite card table with id `261420`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:2] damage.
Echo your next non-basic Magic action this turn.

## Raw rules HTML

```html
Deal [damage:2] damage.<br>Echo your next non-basic Magic action this turn.
```

## Observed keyword / token leads

`Echo`, `Magic`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
