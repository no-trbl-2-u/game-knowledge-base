---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 73401
  name: "Vexing Presence"
  ordinal: 1616
  slug: "vexing-presence"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "Gold"
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
  - "Charmed"
  - "End"
  - "Inflict"
  - "Jinxed"
  - "Turn"
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
    url: "https://blightbane.io/card/Vexing_Presence"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Vexing Presence

## Card identity

- **Ordinal:** 1616 of 1692 generated cards
- **Source card id:** `73401`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Gold
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Vexing Presence` appears in the Neurrone Dawncaster SQLite card table with id `73401`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

End of Turn:
Inflict 1 Jinxed and double 
your foe's Charmed. Unique.

## Raw rules HTML

```html
End of Turn:<br>Inflict 1 Jinxed and double <br>your foe's Charmed. Unique.
```

## Observed keyword / token leads

`Charmed`, `End`, `Inflict`, `Jinxed`, `Turn`
