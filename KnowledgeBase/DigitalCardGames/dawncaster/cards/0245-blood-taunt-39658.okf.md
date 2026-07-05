---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 39658
  name: "Blood Taunt"
  ordinal: 245
  slug: "blood-taunt"
  category: "Action"
  type: "Utility"
  rarity: "Monster"
  expansion: "None"
  color: "Monster"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Anger"
  - "Silenced"
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
    url: "https://blightbane.io/card/Blood_Taunt"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Blood Taunt

## Card identity

- **Ordinal:** 245 of 1692 generated cards
- **Source card id:** `39658`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Blood Taunt` appears in the Neurrone Dawncaster SQLite card table with id `39658`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 1 Anger.
If your foe played 4 or more cards, inflict Silenced.

## Raw rules HTML

```html
Gain 1 Anger.<br>If your foe played 4 or more cards, inflict Silenced.
```

## Observed keyword / token leads

`Anger`, `Silenced`
