---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 165064
  name: "Anima Listener"
  ordinal: 60
  slug: "anima-listener"
  category: "Enchantment"
  type: "Utility"
  rarity: "Monster"
  expansion: "None"
  color: "Monster"
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
  - "(areaSpecial)Anima"
  - "Anima"
  - "Dealing Reaping"
  - "Foes"
  - "Maximum HEALTH"
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
    url: "https://blightbane.io/card/Anima_Listener"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Anima Listener

## Card identity

- **Ordinal:** 60 of 1692 generated cards
- **Source card id:** `165064`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Anima Listener` appears in the Neurrone Dawncaster SQLite card table with id `165064`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Foes gain [[(areaSpecial)Anima]] Maximum HEALTH. You lose [[(areaSpecial)Anima]] Maximum HEALTH. Dealing Reaping damage reverses this effect. Unique.

## Raw rules HTML

```html
Foes gain [[(areaSpecial)Anima]] Maximum HEALTH. You lose [[(areaSpecial)Anima]] Maximum HEALTH. Dealing Reaping damage reverses this effect. Unique.
```

## Observed keyword / token leads

`(areaSpecial)Anima`, `Anima`, `Dealing Reaping`, `Foes`, `Maximum HEALTH`
