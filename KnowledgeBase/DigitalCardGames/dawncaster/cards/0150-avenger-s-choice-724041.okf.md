---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 724041
  name: "Avenger's Choice"
  ordinal: 150
  slug: "avenger-s-choice"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Eclypse"
  color: "Red"
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
  - "Blood"
  - "Charges"
  - "Conjure Forged"
  - "Fire"
  - "Forged"
  - "If HOLY"
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
    url: "https://blightbane.io/card/Avenger%27s_Choice"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Avenger's Choice

## Card identity

- **Ordinal:** 150 of first 500 generated cards
- **Source card id:** `724041`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Avenger's Choice` appears in the Neurrone Dawncaster SQLite card table with id `724041`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Conjure Forged in Blood. If HOLY was spent, conjure a Forged in Fire instead. Charges (1/1).

## Raw rules HTML

```html
Conjure Forged in Blood. If HOLY was spent, conjure a Forged in Fire instead. Charges (1/1).
```

## Observed keyword / token leads

`Blood`, `Charges`, `Conjure Forged`, `Fire`, `Forged`, `If HOLY`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
