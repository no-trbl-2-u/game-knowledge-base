---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 347323
  name: "Absorb Magic"
  ordinal: 3
  slug: "absorb-magic"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Core Extended"
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
  - "Blessing"
  - "Dispel"
  - "INT"
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
    url: "https://blightbane.io/card/Absorb_Magic"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Absorb Magic

## Card identity

- **Ordinal:** 3 of 1692 generated cards
- **Source card id:** `347323`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Core Extended
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Absorb Magic` appears in the Neurrone Dawncaster SQLite card table with id `347323`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Dispel a random Blessing. 
If a blessing was dispelled this way gain INT

## Raw rules HTML

```html
Dispel a random Blessing. <br>If a blessing was dispelled this way gain INT
```

## Observed keyword / token leads

`Blessing`, `Dispel`, `INT`
