---
okf_version: 0.2
type: card_record
card:
  name: "Grand Finale"
  slug: "grand-finale"
  source_id: "GRAND_FINALE"
  ordinal: 171
  character: "silent"
  color: "silent"
  rarity: "Rare"
  type: "Attack"
  cost: "0"
  keywords: []
upgrade:
  cost: null
sources:
  - id: "src-001"
    title: "Slay the Spire 1 Cards dataset"
    url: "https://huggingface.co/datasets/t22000t/slay-the-spire-1-cards"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "CC BY 4.0 dataset snapshot; source id is the upstream stable card identifier."
  - id: "src-002"
    title: "Spire Archive upstream parser/API"
    url: "https://github.com/nkhoit/spire-archive"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Upstream source named by the dataset; parsed from Slay the Spire game files."
confidence: high
status: verified
---

## Source-backed facts

- Claim: The card is Grand Finale (silent, Rare, Attack) with source identifier GRAND_FINALE.
  Source: src-001
  Evidence: dataset row id=GRAND_FINALE, name=Grand Finale, color=silent, rarity=Rare, type=Attack
  Confidence: high

## Rules text

Can only be played if there are no cards in your draw pile.
Deal 50 damage to ALL enemies.

## Upgrade differences

My draw pile
must be Empty.

- Claim: The upgrade form is represented by the source payload's upgrade description and cost fields.
  Source: src-001
  Evidence: raw_json.upgrade in the dataset row.
  Confidence: high

## Provenance

- Claim: This record is generated from the CC BY 4.0 dataset snapshot and retains the source identifier; no card art is redistributed.
  Source: src-001, src-002
  Evidence: dataset README and LICENSE-DATA distinguish factual card data from Mega Crit game IP and exclude art from this corpus.
  Confidence: high
