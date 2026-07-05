---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 722053
  name: "Shredder Axe"
  ordinal: 1352
  slug: "shredder-axe"
  category: "Basic Attack"
  type: "Melee"
  rarity: "Rare"
  expansion: "Metamorphosis"
  color: "Brown"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 2
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Critical Hit"
  - "Interrupt"
  - "Performing"
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
    url: "https://blightbane.io/card/Shredder_Axe"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Shredder Axe

## Card identity

- **Ordinal:** 1352 of 1692 generated cards
- **Source card id:** `722053`
- **Category:** Basic Attack
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Metamorphosis
- **Color:** Brown
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Shredder Axe` appears in the Neurrone Dawncaster SQLite card table with id `722053`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:8] damage.
If you are Performing, Interrupt and Critical Hit.

## Raw rules HTML

```html
Deal [damage:8] damage.<br>If you are Performing, Interrupt and Critical Hit.
```

## Observed keyword / token leads

`Critical Hit`, `Interrupt`, `Performing`
