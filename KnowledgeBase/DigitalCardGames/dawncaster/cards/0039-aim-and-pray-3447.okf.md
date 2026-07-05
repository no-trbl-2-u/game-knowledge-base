---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 3447
  name: "Aim and Pray"
  ordinal: 39
  slug: "aim-and-pray"
  category: "Action"
  type: "Magic"
  rarity: "Monster"
  expansion: "None"
  color: "Monster"
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
  - "Burning"
  - "damageBonus"
  - "Frozen"
  - "HEALTH"
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
    url: "https://blightbane.io/card/Aim_and_Pray"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aim and Pray

## Card identity

- **Ordinal:** 39 of 1692 generated cards
- **Source card id:** `3447`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Aim and Pray` appears in the Neurrone Dawncaster SQLite card table with id `3447`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain |#5+[[damageBonus]]#| HEALTH, OR deal that much damage OR inflict that much Frozen or Burning.

## Raw rules HTML

```html
Gain |#5+[[damageBonus]]#| HEALTH, OR deal that much damage OR inflict that much Frozen or Burning.
```

## Observed keyword / token leads

`Burning`, `damageBonus`, `Frozen`, `HEALTH`
