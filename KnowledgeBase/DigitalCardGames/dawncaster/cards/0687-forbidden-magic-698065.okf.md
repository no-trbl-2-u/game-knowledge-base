---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 698065
  name: "Forbidden Magic"
  ordinal: 687
  slug: "forbidden-magic"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Metamorphosis"
  color: "Blue"
  cost:
  dex: 0
  int: 1
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 2
observed_terms:
  - "Conjure"
  - "Corrupted"
  - "Elite"
  - "Fireball"
  - "Frostbolt"
  - "Lightning Bolt"
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
    url: "https://blightbane.io/card/Forbidden_Magic"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Forbidden Magic

## Card identity

- **Ordinal:** 687 of 1692 generated cards
- **Source card id:** `698065`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Metamorphosis
- **Color:** Blue
- **Cost summary:** int=1, blood=2

## Source-backed facts

- Claim: `Forbidden Magic` appears in the Neurrone Dawncaster SQLite card table with id `698065`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Conjure a free Fireball, Frostbolt or Lightning Bolt.
Corrupted: Conjure an Elite version instead. Unique.

## Raw rules HTML

```html
Conjure a free Fireball, Frostbolt or Lightning Bolt.<br>Corrupted: Conjure an Elite version instead. Unique.
```

## Observed keyword / token leads

`Conjure`, `Corrupted`, `Elite`, `Fireball`, `Frostbolt`, `Lightning Bolt`
