---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 527645
  name: "Charged Wand"
  ordinal: 356
  slug: "charged-wand"
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
  - "Afflictions"
  - "HEALTH"
  - "Improved"
  - "my(status)Potency"
  - "Potency"
  - "Steal"
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
    url: "https://blightbane.io/card/Charged_Wand"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Charged Wand

## Card identity

- **Ordinal:** 356 of 1692 generated cards
- **Source card id:** `527645`
- **Category:** Basic Attack
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Metaprogress
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Charged Wand` appears in the Neurrone Dawncaster SQLite card table with id `527645`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Steal |#[[my(status)Potency]]+1#| HEALTH.
Improved by the Potency of your Afflictions ([[my(status)Potency]]). Swap.

## Raw rules HTML

```html
Steal |#[[my(status)Potency]]+1#| HEALTH.<br>Improved by the Potency of your Afflictions ([[my(status)Potency]]). Swap.
```

## Observed keyword / token leads

`Afflictions`, `HEALTH`, `Improved`, `my(status)Potency`, `Potency`, `Steal`, `Swap`
