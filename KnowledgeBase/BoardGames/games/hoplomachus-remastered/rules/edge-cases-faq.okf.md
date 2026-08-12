---
okf_version: 0.2
type: rule_category
game:
  title: "Hoplomachus: Remastered"
  slug: "hoplomachus-remastered"
  bgg_id: 338434
  publisher: "Chip Theory Games"
  year: 2022
  weight: null
  edition: "Remastered core game"
scope: "base game"
mechanics: [cooperative-game, deck-bag-and-pool-building, dice-rolling, hand-management, variable-player-powers, solo-solitaire-game]
sources:
  - id: "src-003"
    title: "Chip Theory Games — Hoplomachus support and downloads"
    url: "https://chiptheorygames.com/pages/support/hoplomachus"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-11"
    notes: "Official FAQ link."
  - id: "src-004"
    title: "Hoplomachus: Remastered Rulebook"
    url: "https://www.dropbox.com/scl/fi/jr3vnbix2w3bjjpj7jojp/HRemastered-Rulebook.pdf?rlkey=5ogucfycaqggibhdkgfbt6529&e=1&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-11"
    notes: "Publisher-linked rulebook."
  - id: "src-005"
    title: "Chip Theory Games — Hoplomachus FAQs (Remastered Specific Qs)"
    url: "https://support.chiptheorygames.com/support/solutions/33000133541"
    kind: faq
    provenance: official
    retrieved_at: "2026-08-12"
    notes: "Freshdesk solutions category page; retrieved via curl. Article listing indexed; two Remastered-specific articles fetched directly (33000294913, 33000284491)."
confidence: high
status: verified
---

## Summary

The publisher maintains a separate FAQ portal for rulings; its "Remastered Specific Qs" section is now indexed below. The rulebook remains the primary source for the baseline distinctions below.

## Source-backed facts

- Claim: An official FAQ exists for current rulings, clarifications, and errata.
  Source: src-003
  Evidence: support page says the FAQ is kept updated with "rulings, clarifications, and errata."
  Confidence: high
- Claim: Cooperative players may decide rival-unit choices together.
  Source: src-004
  Evidence: cooperative player-choice guidance in the rulebook.
  Confidence: high

## FAQ answers — Remastered Specific Qs

- Claim: An inactive hero in a player's camp does not count toward that player's four-unit camp limit; when drawing units, a player draws until reaching four units excluding an inactive hero. Active heroes do count toward the camp unit limit.
  Source: src-005
  Evidence: "No, while the hero is inactive in your camp, it does not count as one of your four units that you can have in your camp. When you draw units, draw until you have four, excluding your inactive hero. Active heroes in your camp do count towards your unit limit, however."
  Confidence: high
- Claim: Against the Shaghad titan, a defeated shard is flipped and gains 5 HP of the opposite color; if fewer than 5 matching-color HP chips remain, it gains as many as are available, and if none of the required color remain, the shard is instead considered defeated and reverts to its previous color.
  Source: src-005
  Evidence: "When playing against the titan Shaghad, shards that are defeated are flipped and gain 5 HP of the opposite color. If there are not 5 HP chips of the required color available, give the shard as much HP as possible. If there are no HP chips of the required color available, the shard is considered defeated and reverts back to the previous color it had."
  Confidence: high

## Open questions

- The FAQ portal lists dozens of additional articles beyond the two "Remastered Specific Qs" entries (Victorum/Remastered errata, skill-interaction rulings, arena-specific questions); only the two Remastered-labeled articles were fetched in this pass. A future pass should index the errata articles (e.g. Depthcharger's Tactician Skill, Scheherazade HP chips) and general skill-interaction articles that apply to Remastered.
- How do simultaneous or conflicting unit skills resolve in every mode?

## Retry notes

- 2026-08-12 (librarian pass): `src-006`/support-portal followup resolved — the solutions category page (previously recorded as blocked) loaded via `curl -L` (HTTP 200); the two "Remastered Specific Qs" article pages were fetched directly and their full answer text extracted and indexed above.