---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 891752
  name: "Wicked Glare"
  ordinal: 1663
  slug: "wicked-glare"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 2
  blood: 0
observed_terms:
  - "Defiled"
  - "Hex"
  - "Inflict"
  - "Remove"
  - "VOID"
  - "VOIDVOID"
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
    url: "https://blightbane.io/card/Wicked_Glare"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Wicked Glare

## Card identity

- **Ordinal:** 1663 of 1692 generated cards
- **Source card id:** `891752`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Purple
- **Cost summary:** intstr=2

## Source-backed facts

- Claim: `Wicked Glare` appears in the Neurrone Dawncaster SQLite card table with id `891752`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Remove all VOID. 
Inflict 1 Hex for each VOIDVOID cleansed this way. Unique. Defiled.

## Raw rules HTML

```html
Remove all VOID. <br>Inflict 1 Hex for each VOIDVOID cleansed this way. Unique. Defiled.
```

## Observed keyword / token leads

`Defiled`, `Hex`, `Inflict`, `Remove`, `VOID`, `VOIDVOID`
