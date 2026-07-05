---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 705917
  name: "Fervent Strikes"
  ordinal: 649
  slug: "fervent-strikes"
  category: "Action"
  type: "Divine"
  rarity: "Common"
  expansion: "Infinitum"
  color: "Gold"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 1
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Attacks"
  - "Demons"
  - "Firecast"
  - "Undead"
  - "Zeal"
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
    url: "https://blightbane.io/card/Fervent_Strikes"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Fervent Strikes

## Card identity

- **Ordinal:** 649 of 1692 generated cards
- **Source card id:** `705917`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Gold
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Fervent Strikes` appears in the Neurrone Dawncaster SQLite card table with id `705917`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 1 Zeal.
Deal [damage:1] damage twice. Attacks four times against Demons or Undead. Firecast.

## Raw rules HTML

```html
Gain 1 Zeal.<br>Deal [damage:1] damage twice. Attacks four times against Demons or Undead. Firecast.
```

## Observed keyword / token leads

`Attacks`, `Demons`, `Firecast`, `Undead`, `Zeal`
