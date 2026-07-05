---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 184290
  name: "Glaivestrike"
  ordinal: 741
  slug: "glaivestrike"
  category: "Action"
  type: "Melee"
  rarity: "Common"
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
  - "Conjure"
  - "Corrupted"
  - "Hexglaive"
  - "Make"
  - "On Hit"
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
    url: "https://blightbane.io/card/Glaivestrike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Glaivestrike

## Card identity

- **Ordinal:** 741 of 1692 generated cards
- **Source card id:** `184290`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Metaprogress
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Glaivestrike` appears in the Neurrone Dawncaster SQLite card table with id `184290`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Make a Basic Attack.
On Hit and Corrupted: Conjure a Hexglaive.

## Raw rules HTML

```html
Make a Basic Attack.<br>On Hit and Corrupted: Conjure a Hexglaive.
```

## Observed keyword / token leads

`Basic Attack`, `Conjure`, `Corrupted`, `Hexglaive`, `Make`, `On Hit`
