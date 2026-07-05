---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 740974
  name: "Brew Concoction"
  ordinal: 302
  slug: "brew-concoction"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Core Extended"
  color: "Green"
  cost:
  dex: 1
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Charges"
  - "Delve"
  - "Potion"
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
    url: "https://blightbane.io/card/Brew_Concoction"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Brew Concoction

## Card identity

- **Ordinal:** 302 of first 500 generated cards
- **Source card id:** `740974`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Core Extended
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Brew Concoction` appears in the Neurrone Dawncaster SQLite card table with id `740974`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Delve a Potion. Charges (1/1).

## Raw rules HTML

```html
Delve a Potion. Charges (1/1).
```

## Observed keyword / token leads

`Charges`, `Delve`, `Potion`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
