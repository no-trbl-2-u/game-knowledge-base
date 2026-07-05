---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 636716
  name: "Essence of Pain"
  ordinal: 610
  slug: "essence-of-pain"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Core Extended"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 1
observed_terms:
  - "Anger"
  - "HEALTH"
  - "Heavy"
  - "One Use"
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
    url: "https://blightbane.io/card/Essence_of_Pain"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Essence of Pain

## Card identity

- **Ordinal:** 610 of 1692 generated cards
- **Source card id:** `636716`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Core Extended
- **Color:** Red
- **Cost summary:** blood=1

## Source-backed facts

- Claim: `Essence of Pain` appears in the Neurrone Dawncaster SQLite card table with id `636716`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use: Gain 3 Anger.
Gain [healing:3] HEALTH. Heavy.

## Raw rules HTML

```html
One Use: Gain 3 Anger.<br>Gain [healing:3] HEALTH. Heavy.
```

## Observed keyword / token leads

`Anger`, `HEALTH`, `Heavy`, `One Use`
