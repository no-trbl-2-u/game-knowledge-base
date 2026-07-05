---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 851525
  name: "Wave of Light"
  ordinal: 1652
  slug: "wave-of-light"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Core"
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
  - "Affliction"
  - "Cleanse"
  - "Regenerate"
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
    url: "https://blightbane.io/card/Wave_of_Light"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Wave of Light

## Card identity

- **Ordinal:** 1652 of 1692 generated cards
- **Source card id:** `851525`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Wave of Light` appears in the Neurrone Dawncaster SQLite card table with id `851525`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Cleanse an Affliction. 
Gain 2 Regenerate

## Raw rules HTML

```html
Cleanse an Affliction. <br>Gain 2 Regenerate
```

## Observed keyword / token leads

`Affliction`, `Cleanse`, `Regenerate`
