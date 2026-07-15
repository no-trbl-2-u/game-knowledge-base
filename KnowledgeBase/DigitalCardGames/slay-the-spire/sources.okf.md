---
okf_version: 0.2
type: digital_card_sources
game:
  title: "Slay the Spire"
  slug: "slay-the-spire"
scope: "source registry for the base-game card corpus"
sources:
  - id: "src-001"
    title: "Slay the Spire 1 Cards dataset"
    url: "https://huggingface.co/datasets/t22000t/slay-the-spire-1-cards"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Versioned Parquet snapshot; commit a608db182f593107de22e0534e8f5ce04e4b80d9; CC BY 4.0 dataset license."
  - id: "src-002"
    title: "Dataset provenance record"
    url: "https://huggingface.co/datasets/t22000t/slay-the-spire-1-cards/resolve/a608db182f593107de22e0534e8f5ce04e4b80d9/provenance.json"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Machine-readable fetch provenance for the snapshot."
  - id: "src-003"
    title: "Dataset license"
    url: "https://github.com/timothy22000/slaythespire-codex/blob/main/LICENSE-DATA"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "CC BY 4.0; attribution required to this project and Spire Archive; game IP remains Mega Crit."
  - id: "src-004"
    title: "Spire Archive upstream parser/API"
    url: "https://github.com/nkhoit/spire-archive"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Named upstream source; parses game files and exposes structured game data."
  - id: "src-005"
    title: "Slay the Spire card website (corroboration lead only)"
    url: "https://slaythespire.gg/"
    kind: other
    provenance: community
    retrieved_at: "2026-07-15"
    notes: "Not used for extraction because it is a rendered site without the same versioned whole-dataset/license trail."
confidence: high
status: verified
---

## Source-backed facts

- Claim: The extraction source is a versioned machine-readable Parquet dataset, not a scrape of the rendered card website.
  Source: src-001, src-002
  Evidence: Hugging Face dataset exposes cards.parquet and provenance.json at commit a608db182f593107de22e0534e8f5ce04e4b80d9.
  Confidence: high

- Claim: Redistribution of the dataset files is permitted under CC BY 4.0 subject to attribution, while Mega Crit's game IP is separately acknowledged.
  Source: src-003
  Evidence: LICENSE-DATA §§1–3 and note on game content.
  Confidence: high

## Retrieval method

Retrieved with curl from the pinned Hugging Face dataset commit on 2026-07-15; inspected Parquet schema with PyArrow and retained only text/metadata fields, excluding image bytes.
