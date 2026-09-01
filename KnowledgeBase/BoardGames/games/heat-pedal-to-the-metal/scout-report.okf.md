---
okf_version: 0.2
type: scout_report
game:
  title: "Heat: Pedal to the Metal"
  slug: "heat-pedal-to-the-metal"
  bgg_id: 366013
  publisher: "Days of Wonder"
  year: 2022
  weight: 2.20
  edition: "English base game / v1.1 rules"
scope: "base game"
mechanics: [hand-management, deck-bag-and-pool-building, push-your-luck, catch-up-mechanism, simultaneous-action-selection, race, solo-solitaire-game, variable-setup]
followups: []
sources:
  - id: "src-001"
    title: "Heat official product page"
    url: "https://www.daysofwonder.com/heat/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-07"
    notes: "Official Days of Wonder page with metadata and rules downloads."
  - id: "src-002"
    title: "Heat: Pedal to the Metal | BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/366013/heat-pedal-to-the-metal"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-07"
    notes: "Discovery and public signal page."
  - id: "src-003"
    title: "Heat: Pedal to the Metal basic rules v1.1"
    url: "https://cdn.svc.asmodee.net/staging-daysofwonder/uploads/2024/07/9101-HT-Rules-EN.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-07"
    notes: "Official core rules PDF."
  - id: "src-004"
    title: "Heat: Pedal to the Metal advanced rules v1.1"
    url: "https://cdn.svc.asmodee.net/production-daysofwonder/uploads/2025/03/9101-HT-RulesAdvanced-EN_compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-07"
    notes: "Official advanced/championship rules PDF."
  - id: "src-005"
    title: "Heat: Pedal to the Metal Review | Roll to Review"
    url: "https://rolltoreview.com/heat-pedal-to-the-metal-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-07"
    notes: "Reception source."
  - id: "src-006"
    title: "Heat: Pedal to the Metal Board Game Review | Co-op Board Games"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/heat-pedal-to-the-metal/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-07"
    notes: "Reception source."
  - id: "src-007"
    title: "Heat: Pedal to the Metal Review | Shelf Gamer"
    url: "https://shelfgamer.com/reviews/heat-pedal-to-the-metal"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-07"
    notes: "Reception source."
confidence: high
status: verified
---

## Scout objective

Study one board game for rules structure, reception, and better-if opportunities.

## Why this game

- Wishlist entry consumed: wishlist empty — free choice.
- BGG signal: BGG item 366013, rank 47, rating 8.0, weight 2.20/5 at retrieval.
- Mechanics relevance: hand management, push-your-luck Heat economy, catch-up/rubber-band systems, solo automation, and modular progression.
- Review/reception signal: multiple review sources praise race tension and simultaneous turns while naming catch-up, iconography, randomness, and footprint friction.

## Source search path

- BoardGameGeek: found metadata, weight, mechanisms, official link, and review leads.
- Publisher page: found official Days of Wonder product page and download links.
- Official rulebook: found and inspected official basic rules v1.1 PDF.
- FAQ/errata: no separate official FAQ/errata found during this run.
- Review sources: Roll to Review, Co-op Board Games, Shelf Gamer.
- Forum/community sources: not mined beyond BGG page-level signal.

## Rulebook extraction status

- Official rulebook found: yes.
- File inspected: yes, via web extraction of the official PDF.
- Page count/version/date if known: v1.1; page count not recorded.
- Text extraction quality: adequate for categorized summaries and short citations.

## Documents written

- `games/heat-pedal-to-the-metal/index.okf.md`
- `games/heat-pedal-to-the-metal/sources.okf.md`
- `games/heat-pedal-to-the-metal/rules/overview.okf.md`
- `games/heat-pedal-to-the-metal/rules/setup.okf.md`
- `games/heat-pedal-to-the-metal/rules/turn-structure.okf.md`
- `games/heat-pedal-to-the-metal/rules/actions.okf.md`
- `games/heat-pedal-to-the-metal/rules/scoring-endgame.okf.md`
- `games/heat-pedal-to-the-metal/rules/edge-cases-faq.okf.md`
- `games/heat-pedal-to-the-metal/reception/reviews.okf.md`
- `games/heat-pedal-to-the-metal/reception/better-if.okf.md`

## Run validation

- `WISHLIST.md` entry checked off: n-a; wishlist already empty.
- `node scripts/generate-index.mjs` run after writing docs: yes.
- `node scripts/validate-okf.mjs` exit 0 before push: yes.

## Strongest design lessons

Heat turns aggression into future hand pollution. The best evidence-backed pattern is speed-as-debt: players may push now, but the deck remembers.

## Strongest player complaints

Catch-up systems can preserve a race and still feel unearned; large physical production can make an otherwise swift card engine cumbersome at the table.

## Open questions

- No official FAQ/errata source was captured.
- BGG comments were not mined at scale.
