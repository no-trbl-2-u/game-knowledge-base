---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 694945
  name: "Suntree Twig"
  ordinal: 1495
  slug: "suntree-twig"
  category: "Basic Attack"
  type: "Divine"
  rarity: "Legendary"
  expansion: "None"
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
  - "Demons"
  - "Grounded"
  - "Lifedrain"
  - "Undead"
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
    url: "https://blightbane.io/card/Suntree_Twig"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Suntree Twig

## Card identity

- **Ordinal:** 1495 of 1692 generated cards
- **Source card id:** `694945`
- **Category:** Basic Attack
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Suntree Twig` appears in the Neurrone Dawncaster SQLite card table with id `694945`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:1] damage.
Lifedrain against Demons and Undead. Grounded.

## Raw rules HTML

```html
Deal [damage:1] damage.<br>Lifedrain against Demons and Undead. Grounded.
```

## Observed keyword / token leads

`Demons`, `Grounded`, `Lifedrain`, `Undead`
