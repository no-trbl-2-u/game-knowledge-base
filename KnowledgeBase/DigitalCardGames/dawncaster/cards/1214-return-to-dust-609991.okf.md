---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 609991
  name: "Return to Dust"
  ordinal: 1214
  slug: "return-to-dust"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Eclypse"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 3
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Agile"
  - "Ambush"
  - "Costs"
  - "Reset"
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
    url: "https://blightbane.io/card/Return_to_Dust"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Return to Dust

## Card identity

- **Ordinal:** 1214 of 1692 generated cards
- **Source card id:** `609991`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Aqua
- **Cost summary:** dexint=3

## Source-backed facts

- Claim: `Return to Dust` appears in the Neurrone Dawncaster SQLite card table with id `609991`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw 3 cards.
Reset your Ambush.
Agile: Costs no energy.

## Raw rules HTML

```html
Draw 3 cards.<br>Reset your Ambush.<br>Agile: Costs no energy.
```

## Observed keyword / token leads

`Agile`, `Ambush`, `Costs`, `Reset`
