---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 337175
  name: "Artificer's Insight"
  ordinal: 103
  slug: "artificer-s-insight"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Catalyst"
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
  - "Equipment"
  - "equipments"
  - "Repeat"
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
    url: "https://blightbane.io/card/Artificer%27s_Insight"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Artificer's Insight

## Card identity

- **Ordinal:** 103 of 1692 generated cards
- **Source card id:** `337175`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Catalyst
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Artificer's Insight` appears in the Neurrone Dawncaster SQLite card table with id `337175`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw a card.
Repeat for each active Equipment ([[equipments]]).

## Raw rules HTML

```html
Draw a card.<br>Repeat for each active Equipment ([[equipments]]).
```

## Observed keyword / token leads

`Equipment`, `equipments`, `Repeat`
