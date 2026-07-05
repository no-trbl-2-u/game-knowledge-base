---
okf_version: 0.2
type: digital_card_sources
game:
  title: "Dawncaster"
  slug: "dawncaster"
scope: "digital card corpus sources"
sources:
  - id: "src-001"
    title: "Neurrone Dawncaster SQLite card database"
    url: "https://neurrone.com/dawncaster/dawncaster-cards.db"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Structured SQLite mirror used for first-pass OKF generation."
  - id: "src-002"
    title: "Blightbane cards codex API"
    url: "https://blightbane.io/api/cards-codex?search=&rarity=&category=&type=&banner=&exp="
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Live JSON codex harvested at /root/Workspace/reports/dawncaster-card-library/blightbane-cards-codex.json."
  - id: "src-003"
    title: "Dawncaster Wiki Keywords"
    url: "https://dawncasterrpg.fandom.com/wiki/Keywords"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Lead for future keyword glossary import; not yet merged into the first 500 card records."
confidence: medium
status: draft
---

# Dawncaster corpus sources

## Summary

This file records the source registry for the Dawncaster digital-card OKF corpus.

## Source-backed facts

- Claim: The first 500 card records were generated from the Neurrone SQLite mirror.
  Source: src-001
  Evidence: Local script `scripts/generate-dawncaster-card-okf.py` queries `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

## Open questions

- Determine whether Blightbane or in-game text should be treated as the canonical wording authority for cards.
- Import keyword definitions from the wiki and cross-check against card text.
