---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 579751
  name: "Phylactery Visor"
  ordinal: 1085
  slug: "phylactery-visor"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Infinitum"
  color: "Purple"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 3
observed_terms:
  - "Armor"
  - "Bane"
  - "Corrupted"
  - "Hexglaive"
  - "Inflict"
  - "Transform"
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
    url: "https://blightbane.io/card/Phylactery_Visor"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Phylactery Visor

## Card identity

- **Ordinal:** 1085 of 1692 generated cards
- **Source card id:** `579751`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Infinitum
- **Color:** Purple
- **Cost summary:** blood=3

## Source-backed facts

- Claim: `Phylactery Visor` appears in the Neurrone Dawncaster SQLite card table with id `579751`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 1 Bane.
Corrupted: On death, your health becomes 10, you gain 100 Armor, then Transform this into a Hexglaive. Unique.

## Raw rules HTML

```html
Inflict 1 Bane.<br>Corrupted: On death, your health becomes 10, you gain 100 Armor, then Transform this into a Hexglaive. Unique.
```

## Observed keyword / token leads

`Armor`, `Bane`, `Corrupted`, `Hexglaive`, `Inflict`, `Transform`
