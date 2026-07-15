---
okf_version: 0.2
type: card_record
card:
  name: "All for One"
  slug: "all-for-one"
  source_id: "ALL_FOR_ONE"
  ordinal: 8
  character: "defect"
  color: "defect"
  rarity: "Rare"
  type: "Attack"
  cost: "2"
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

- Claim: The card is All for One (defect, Rare, Attack) with source identifier ALL_FOR_ONE.
  Source: src-001
  Evidence: dataset row id=ALL_FOR_ONE, name=All for One, color=defect, rarity=Rare, type=Attack
  Confidence: high

## Rules text

Deal 10 damage.
Put all cost 0 cards from your discard pile into your hand.

## Upgrade differences

Deal 14 damage.
Put all cost 0 cards from your discard pile into your hand.

- Claim: The upgrade form is represented by the source payload's upgrade description and cost fields.
  Source: src-001
  Evidence: raw_json.upgrade in the dataset row.
  Confidence: high

## Provenance

- Claim: This record is generated from the CC BY 4.0 dataset snapshot and retains the source identifier; no card art is redistributed.
  Source: src-001, src-002
  Evidence: dataset README and LICENSE-DATA distinguish factual card data from Mega Crit game IP and exclude art from this corpus.
  Confidence: high
