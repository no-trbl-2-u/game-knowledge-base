---
okf_version: 0.2
type: rule_category
game:
  title: "Marvel Champions: The Card Game"
  slug: "marvel-champions-the-card-game"
  bgg_id: 285774
  publisher: "Fantasy Flight Games"
  year: 2019
  weight: null
  edition: "core game"
scope: "base game"
mechanics: [cooperative-game, deck-building, hand-management, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-003"
    title: "Marvel Champions Rules Reference v1.5"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/b6/30/b630ddfe-e745-435b-a284-572dd510e15d/mc_rulesreference_v15-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Audit 2026-07-15: extraction retried with pypdf (56 pages), succeeded. Appendix IV: FAQ (general questions section) is the cited section."
confidence: high
status: verified
---

## Summary

Appendix IV of the Rules Reference is a card-specific FAQ; only its "General Questions" subsection applies corpus-wide (the remaining entries are per-card rulings tied to specific Core Set/expansion cards, out of scope for base-rules claims).

## Source-backed facts

- Claim: A tough status card cannot be saved from discard by an interrupt ability that reduces the incoming damage after the fact — status cards have priority over triggered abilities like interrupts, so tough is discarded first. Tough can only be kept if a constant effect or a hero's own basic-defense DEF reduces the damage to zero before the status-card check.
  Source: src-003
  Evidence: "Status cards have priority over all triggered abilities, like interrupts, so the tough status card must be discarded to prevent all of the damage before any other abilities could trigger." (p.48)
  Confidence: high
- Claim: The Core Set's aspect card counts are intentionally uneven — Leadership has one fewer card than Aggression, Justice, and Protection because it draws from a larger pool of unique card options.
  Source: src-003
  Evidence: "The Leadership aspect received 1 fewer card than the other aspects because it has more unique cards to choose from." (p.48)
  Confidence: high

## Open questions

- Per-card FAQ rulings (Spider-Man, Webbed Up, Jennifer Walters, and further Core Set/expansion-specific entries on pp.48-53) were not transcribed individually — they apply to specific printed cards rather than base rules, and should be pulled on demand by card name rather than pre-loaded into this doc.