---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 992262
  name: "Bless Weapon"
  ordinal: 226
  slug: "bless-weapon"
  category: "Action"
  type: "Divine"
  rarity: "Common"
  expansion: "Core"
  color: "Purple"
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
  - "Basic Attack"
  - "HEALTH"
  - "HOLY"
  - "Lasting"
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
    url: "https://blightbane.io/card/Bless_Weapon"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Bless Weapon

## Card identity

- **Ordinal:** 226 of 1692 generated cards
- **Source card id:** `992262`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Purple
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Bless Weapon` appears in the Neurrone Dawncaster SQLite card table with id `992262`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This turn, whenever 
you play a Basic Attack gain 1 HEALTH and HOLY. Lasting.

## Raw rules HTML

```html
This turn, whenever <br>you play a Basic Attack gain 1 HEALTH and HOLY. Lasting.
```

## Observed keyword / token leads

`Basic Attack`, `HEALTH`, `HOLY`, `Lasting`
