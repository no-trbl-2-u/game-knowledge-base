---
okf_version: 0.2
type: card_record
card:
  name: "Multi-Cast"
  slug: "multi-cast"
  source_id: "MULTI_CAST"
  ordinal: 221
  character: "defect"
  color: "defect"
  rarity: "Rare"
  type: "Skill"
  cost: "-1"
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

- Claim: The card is Multi-Cast (defect, Rare, Skill) with source identifier MULTI_CAST.
  Source: src-001
  Evidence: dataset row id=MULTI_CAST, name=Multi-Cast, color=defect, rarity=Rare, type=Skill
  Confidence: high

## Rules text

Evoke your next Orb X times.

## Upgrade differences

Evoke your next Orb X+1 times.

- Claim: The upgrade form is represented by the source payload's upgrade description and cost fields.
  Source: src-001
  Evidence: raw_json.upgrade in the dataset row.
  Confidence: high

## Provenance

- Claim: This record is generated from the CC BY 4.0 dataset snapshot and retains the source identifier; no card art is redistributed.
  Source: src-001, src-002
  Evidence: dataset README and LICENSE-DATA distinguish factual card data from Mega Crit game IP and exclude art from this corpus.
  Confidence: high
