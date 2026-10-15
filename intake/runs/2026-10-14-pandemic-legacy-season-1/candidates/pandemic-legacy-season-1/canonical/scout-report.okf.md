---
okf_version: 0.2
type: scout_report
game:
  title: "Pandemic Legacy: Season 1"
  slug: "pandemic-legacy-season-1"
  bgg_id: 161936
  publisher: "Z-Man Games"
  year: 2015
  weight: null
  edition: "English retail edition; blue/red rulebooks; source PDF ©2015, 2018"
scope: "base game"
mechanics: [action-points, campaign-game, cooperative-game, hand-management, hidden-information, legacy-game, set-collection, variable-player-powers]
followups: []
sources:
  - id: "src-001"
    title: "BoardGameGeek API identity — Pandemic Legacy: Season 1"
    url: "https://api.geekdo.com/api/geekitems?objectid=161936&objecttype=thing"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-10-15"
    notes: "HTTP 200, application/json, 53,047 bytes, SHA-256 8a02a7dd873a9d9c1f52055b5b3238391cf8e70e6bf75130f63076d8c8fdcea3; item objectid/id 161936 and canonical_link identify the game."
  - id: "src-002"
    title: "Pandemic Legacy: Season 1 English rulebook — Z-Man Games"
    url: "https://cdn.svc.asmodee.net/production-zman/uploads/2024/09/zm7170_zm7171_rules_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-14"
    notes: "Official governing rules and identity."
  - id: "src-003"
    title: "Pandemic Legacy: Season 1 review — Geeks Under Grace"
    url: "https://www.geeksundergrace.com/tabletop/review-pandemic-legacy-season-1/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-14"
    notes: "Independent reception and spoiler-free campaign testimony."
confidence: high
status: verified
---

## Identity and scope

- Claim: The packet is a cooperative-campaign cohort record for Pandemic Legacy: Season 1, not Pandemic base game or Season 2.
  Source: src-001, src-002
  Evidence: The BoardGameGeek API identity receipt records item objectid/id 161936, canonical link, and the name Pandemic Legacy: Season 1; the rulebook's title/copyright identity and its 12-month legacy setup are specific to Pandemic Legacy: Season 1.
  Confidence: high

- Claim: BGG is retained only as the discovery and numeric identity lead; no rating or complexity weight is claimed.
  Source: src-001
  Evidence: The BGG API identity receipt records item objectid/id 161936 and the canonical link; game.weight remains null and no BGG rating receipt is published.
  Confidence: high

## Coverage ledger

- Claim: The packet records one retrieved governing-rules document and 14 source-backed factual entries without manufacturing an exhaustive component or legacy-content denominator.
  Source: src-002, src-003
  Evidence: The manifest records rules 1/1 and factual coverage 14/null; the official rulebook and independent review are the retained evidence base.
  Confidence: high

## Key field findings

- Claim: The campaign carries forward permanent decisions while resetting ordinary board state, hands, outbreaks, and other transient play state between games.
  Source: src-002
  Evidence: Rulebook p. 5 distinguishes permanent writing/stickers/destruction from the pieces and cards that start fresh each game.
  Confidence: high

- Claim: A month provides up to two attempts; success advances to the next month, while a second failure advances the campaign after the retry.
  Source: src-002
  Evidence: Rulebook p. 5 explains the 12-month structure and the success/failure retry rule.
  Confidence: high

## Interpretation

- Claim: Pandemic Legacy makes campaign memory a physical rules mechanism rather than a narrative wrapper.
  Source: src-002, src-003
  Evidence: The official rules require permanent alterations and sealed information; the independent review treats those changes as the central legacy experience. This causal design reading is Bathcat's interpretation.
  Confidence: medium

## Open questions

- Claim: This packet does not establish a complete inventory of sealed packages, legacy-deck cards, campaign events, component counts, current rating, or post-campaign replay variants.
  Source: src-002, src-003
  Evidence: Those inventories were not retrieved in this bounded pass; their denominators remain unknown rather than inferred.
  Confidence: high
