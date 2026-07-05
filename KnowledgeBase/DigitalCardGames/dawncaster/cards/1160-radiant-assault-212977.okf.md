---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 212977
  name: "Radiant Assault"
  ordinal: 1160
  slug: "radiant-assault"
  category: "Action"
  type: "Divine"
  rarity: "Rare"
  expansion: "Metaprogress"
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
  - "Basic Attack"
  - "Make"
  - "Repeat"
  - "typesOfEnergy"
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
    url: "https://blightbane.io/card/Radiant_Assault"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Radiant Assault

## Card identity

- **Ordinal:** 1160 of 1692 generated cards
- **Source card id:** `212977`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Rare
- **Expansion:** Metaprogress
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Radiant Assault` appears in the Neurrone Dawncaster SQLite card table with id `212977`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Make a Basic Attack.
Repeat for each type of energy you have ([[typesOfEnergy]]).

## Raw rules HTML

```html
Make a Basic Attack.<br>Repeat for each type of energy you have ([[typesOfEnergy]]).
```

## Observed keyword / token leads

`Basic Attack`, `Make`, `Repeat`, `typesOfEnergy`
