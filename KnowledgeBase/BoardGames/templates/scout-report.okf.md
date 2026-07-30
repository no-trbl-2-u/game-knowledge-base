---
okf_version: 0.2
type: scout_report
game:
  title: "{{GAME_TITLE}}"
  slug: "{{GAME_SLUG}}"
  bgg_id: null
  publisher: "{{PUBLISHER}}"
  year: null
  weight: null
  edition: "{{EDITION}}"
scope: "base game"
mechanics: [] # controlled slugs from OKF_SPEC.md — same list on every doc of this game
followups: [] # one entry per failed source fetch/extraction; see OKF_SPEC.md §Failed-source followups
sources: []
confidence: medium
status: draft
---

## Scout objective

Assemble one noncanonical candidate packet for rules structure, reception, and better-if design opportunities. This template does not authorize canonical promotion.

## Why this game

- Wishlist entry consumed (topmost unchecked, or "wishlist empty — free choice"):
- BGG signal:
- Mechanics relevance:
- Review/reception signal:

## Source search path

- Discovery source (BGG optional):
- Publisher page:
- Official rulebook outside BGG:
- FAQ/errata:
- Independent review outside BGG and outside publisher domain:
- Forum/community sources:
- Other credible sources (video, designer commentary, archive, retailer):
- Retrieval receipt files:

## Rulebook extraction status

- Official rulebook found: yes/no
- File inspected: yes/no
- Page count/version/date if known:
- Text extraction quality:
- Retrieved byte count and SHA-256 verified:
- Exact page/section/timestamp locators recorded:

## Documents written

- `index.okf.md`
- `sources.okf.md`
- `rules/overview.okf.md`
- `rules/setup.okf.md`
- `rules/turn-structure.okf.md`
- `rules/actions.okf.md`
- `rules/scoring-endgame.okf.md`
- `rules/edge-cases-faq.okf.md`
- `reception/reviews.okf.md`
- `reception/better-if.okf.md`

## Run validation

- Candidate cohort: cooperative / solo_rpg / rotating_focus
- Candidate status: blocked / ready_for_audit
- `node scripts/validate-intake.mjs --run <run-id>` exit 0: required
- Independent approval: forbidden in Bathcat pass
- Canonical `games/` write: forbidden in Bathcat pass

## Strongest design lessons

## Strongest player complaints

## This game would be better if...

## SomberSoft implications

## Open questions
