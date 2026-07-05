---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 377873
  name: "Muscle Memory"
  ordinal: 1031
  slug: "muscle-memory"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Metamorphosis"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 1
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Frenzy"
  - "Gain STR"
  - "Melee Action"
  - "STR"
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
    url: "https://blightbane.io/card/Muscle_Memory"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Muscle Memory

## Card identity

- **Ordinal:** 1031 of 1692 generated cards
- **Source card id:** `377873`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Metamorphosis
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Muscle Memory` appears in the Neurrone Dawncaster SQLite card table with id `377873`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw a Melee Action. 
Frenzy: Gain STR STR.

## Raw rules HTML

```html
Draw a Melee Action. <br>Frenzy: Gain STR STR.
```

## Observed keyword / token leads

`Frenzy`, `Gain STR`, `Melee Action`, `STR`
