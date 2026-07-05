---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 893359
  name: "Profane Shell"
  ordinal: 1133
  slug: "profane-shell"
  category: "Action"
  type: "Utility"
  rarity: "Common"
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
    intstr: 1
    blood: 0
observed_terms:
  - "Afflictions"
  - "Barrier"
  - "Convert"
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
    url: "https://blightbane.io/card/Profane_Shell"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Profane Shell

## Card identity

- **Ordinal:** 1133 of 1692 generated cards
- **Source card id:** `893359`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Profane Shell` appears in the Neurrone Dawncaster SQLite card table with id `893359`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Convert one of your 
Afflictions to Barrier.
Draw a card.

## Raw rules HTML

```html
Convert one of your <br>Afflictions to Barrier.<br>Draw a card.
```

## Observed keyword / token leads

`Afflictions`, `Barrier`, `Convert`
