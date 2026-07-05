---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 177094
  name: "Dark Renewal"
  ordinal: 487
  slug: "dark-renewal"
  category: "Action"
  type: "Corruption"
  rarity: "Uncommon"
  expansion: "Eclypse"
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
  blood: 0
observed_terms:
  - "Charges"
  - "Defiled"
  - "Destroy"
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
    url: "https://blightbane.io/card/Dark_Renewal"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dark Renewal

## Card identity

- **Ordinal:** 487 of 1692 generated cards
- **Source card id:** `177094`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Dark Renewal` appears in the Neurrone Dawncaster SQLite card table with id `177094`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Destroy a card, then add a base copy of that card to your deck. Charges (1/1). Defiled.

## Raw rules HTML

```html
Destroy a card, then add a base copy of that card to your deck. Charges (1/1). Defiled.
```

## Observed keyword / token leads

`Charges`, `Defiled`, `Destroy`
