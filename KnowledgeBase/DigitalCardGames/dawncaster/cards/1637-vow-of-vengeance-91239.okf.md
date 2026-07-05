---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 91239
  name: "Vow of Vengeance"
  ordinal: 1637
  slug: "vow-of-vengeance"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Eclypse"
  color: "Red"
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
  - "Delve"
  - "Oath"
  - "Take"
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
    url: "https://blightbane.io/card/Vow_of_Vengeance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Vow of Vengeance

## Card identity

- **Ordinal:** 1637 of 1692 generated cards
- **Source card id:** `91239`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Vow of Vengeance` appears in the Neurrone Dawncaster SQLite card table with id `91239`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Take 3 damage.
Delve an Oath and play it. Charges (1/1).

## Raw rules HTML

```html
Take 3 damage.<br>Delve an Oath and play it. Charges (1/1).
```

## Observed keyword / token leads

`Charges`, `Delve`, `Oath`, `Take`
