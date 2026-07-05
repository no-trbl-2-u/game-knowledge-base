---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 486592
  name: "Incendiary Ammo"
  ordinal: 884
  slug: "incendiary-ammo"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Infinitum"
  color: "Red"
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
  - "Hit"
  - "Ranged Actions"
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
    url: "https://blightbane.io/card/Incendiary_Ammo"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Incendiary Ammo

## Card identity

- **Ordinal:** 884 of 1692 generated cards
- **Source card id:** `486592`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Red
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Incendiary Ammo` appears in the Neurrone Dawncaster SQLite card table with id `486592`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Your next 3 Ranged Actions inflict 5 Burning on Hit.

## Raw rules HTML

```html
Your next 3 Ranged Actions inflict 5 Burning on Hit.
```

## Observed keyword / token leads

`Burning`, `Hit`, `Ranged Actions`
