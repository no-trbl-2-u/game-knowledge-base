---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 70233
  name: "Prowl (Companion)"
  ordinal: 1141
  slug: "prowl-companion"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Synthesis"
  color: "Orange"
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
  - "Advantage"
  - "companionlevel"
  - "Critical Hit"
  - "Ferocity"
  - "Grant"
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
    url: "https://blightbane.io/card/Prowl_%28Companion%29"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Prowl (Companion)

## Card identity

- **Ordinal:** 1141 of 1692 generated cards
- **Source card id:** `70233`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Orange
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Prowl (Companion)` appears in the Neurrone Dawncaster SQLite card table with id `70233`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Grant [[companionlevel]] Ferocity.
Advantage: Grant 'Your next attack inflicts a Critical Hit'.

## Raw rules HTML

```html
Grant [[companionlevel]] Ferocity.
Advantage: Grant 'Your next attack inflicts a Critical Hit'.
```

## Observed keyword / token leads

`Advantage`, `companionlevel`, `Critical Hit`, `Ferocity`, `Grant`
