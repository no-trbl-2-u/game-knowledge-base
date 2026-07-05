---
okf_version: 0.2
type: rule_category
game:
  title: "Dune: Imperium"
  slug: "dune-imperium"
  bgg_id: 316554
  publisher: "Dire Wolf"
  year: 2020
  edition: "English base game"
scope: "base game"
mechanics: [deck-building, worker-placement, hand-management, multi-use-cards, force-commitment, race, variable-player-powers]
sources:
  - id: "src-003"
    title: "DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official English rulebook."
  - id: "src-004"
    title: "DUNE_IMPERIUM_FAQ_25-1-13.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_FAQ_25-1-13.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official errata and FAQ."
confidence: high
status: verified
---

## Summary

Most edge cases arise from timing, optional costs, intrigue timing, alliance loss, and component/state definitions. The 2025 FAQ is substantial and should be treated as living rules support.

## Source-backed facts

- Claim: Official FAQ/errata was last updated January 13, 2025.
  Source: src-004
  Evidence: FAQ lines 1-4.
  Confidence: high
- Claim: Missionaria Protectiva has an erratum: it is part of the Bene Gesserit Faction; first English printing cards lack this under title.
  Source: src-004
  Evidence: FAQ lines 13-18.
  Confidence: high
- Claim: Losing an Alliance token can occur if a formerly tied player now takes it, or if the holder falls to 3 or lower influence.
  Source: src-004
  Evidence: FAQ lines 50-65.
  Confidence: high
- Claim: Most effects are mandatory unless "may," an arrow cost, or optional black-X trashing applies.
  Source: src-004
  Evidence: FAQ lines 262-282.
  Confidence: high
- Claim: A player cannot re-recruit troops from garrison to bypass the limit of deploying up to two garrison troops to Conflict.
  Source: src-004
  Evidence: FAQ lines 404-409.
  Confidence: high
- Claim: When an Agent goes to a Combat space, troops recruited that turn from any source may be deployed.
  Source: src-004
  Evidence: FAQ lines 413-417.
  Confidence: high

## Rules / Mechanics

Key edge-case principles:
- Costs must actually be paid to gain effects.
- Intrigue cards require timing, conditions, and costs.
- Alliance tokens are positional and can be lost or transferred.
- Combat strength depends on having a troop in conflict unless expansion pieces create exceptions.

## Player friction

Timing windows create most ambiguity: Plot vs Combat vs Endgame Intrigues, reveal-turn draws, and "when you win a Conflict" effects.

## Better-if opportunities

- rules ambiguity: include a timing-window card for Intrigues.
- component clarity: mark errata-prone first-print cards or include replacement labels.
- combat resolution: provide conflict deployment reminder: current-turn recruits plus up to two garrison troops.

## Design implications for SomberSoft

If a system uses hidden tactical interrupts, its timing grammar must be visible. Every interrupt type needs an explicit window and a UI/table marker.

## Open questions

- Whether expansions increase ambiguity enough to merit separate combined-rules summaries.
