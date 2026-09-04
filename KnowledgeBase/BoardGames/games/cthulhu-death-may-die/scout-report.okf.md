---
okf_version: 0.2
type: scout_report
game:
  title: "Cthulhu: Death May Die"
  slug: "cthulhu-death-may-die"
  bgg_id: 253344
  publisher: "CMON"
  year: 2019
  weight: null
  edition: "English core game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, grid-movement, modular-board, variable-player-powers]
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/253344/cthulhu-death-may-die"
    failure: blocked
    fallback: "BGG search result and page URL used as discovery lead; no numeric rating asserted."
    retry_needs: alternate_source
    notes: "Direct page retrieval returned HTTP 403 on 2026-07-28. Retried 2026-09-04 (librarian): still HTTP 403, and a real headless Chromium session (Playwright) was also held at the Cloudflare 'Performing security verification' interstitial. Systemic to boardgamegeek.com from this environment. No body claim depends on this source, so the document remains verified; this entry stays open only as a discovery-provenance record."
sources:
  - id: "src-001"
    title: "BoardGameGeek — Cthulhu: Death May Die"
    url: "https://boardgamegeek.com/boardgame/253344/cthulhu-death-may-die"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-08-31"
    notes: "Discovery and rating-source lead. The page describes the game as a cooperative dice-driven Elder God hunt; direct numeric rating retrieval returned HTTP 403, so no exact rating is asserted."
  - id: "src-002"
    title: "Cthulhu: Death May Die — Rules of the Game"
    url: "https://resources.cmon.com/DMD_Rulebook_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-28"
    notes: "CMON official 20-page PDF; downloaded and text-extracted successfully. SHA-256: 2a9d7f3b8f4380de3c45f3a0f9a2ca7a1d74eea9f6af0ebf3d67fd4e8f4a9ac1."
  - id: "src-003"
    title: "Cthulhu: Death May Die Review — Co-op Board Games"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/cthulhu-death-may-die-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-31"
    notes: "Independent cooperative-game review; full text retrieved and extracted in the 2026-08-31 librarian pass (the 2026-07-28 extraction backend failure is resolved)."
  - id: "src-004"
    title: "Dized Rules — Cthulhu: Death May Die — Sanity"
    url: "https://rules.dized.com/game/kp6yXekcT6agDFGangIB1Q/XXNB96tBSqWBcLGQXdDfYA/sanity"
    kind: faq
    provenance: secondary
    retrieved_at: "2026-07-28"
    notes: "Structured rules reference used as a secondary lead for sanity terminology."
confidence: medium
status: verified
---

## Scout objective

Study one high-scoring, eligible RPG/role-playing board game for rules structure, reception, and better-if opportunities.

## Why this game

- Wishlist entry consumed (topmost unchecked, or "wishlist empty — free choice"): **Skipped**. The top entry, card costing benchmarks, is not an RPG/role-playing board game and was excluded by the current focus.
- BGG signal: BGG page for game 253344 was used as the discovery and rating-source lead. Direct numeric rating retrieval returned HTTP 403, so no exact rating/rank is claimed; the candidate was selected as a strong undiscovered RPG fit among the available BGG leads.
- Mechanics relevance: investigator roles, skill growth, campaign-style episodes, scenario objectives, tactical combat, dice checks, sanity, and boss stages.
- Review/reception signal: one independent cooperative-game review lead was recorded; direct extraction remains open.

## Source search path

- BoardGameGeek: https://boardgamegeek.com/boardgame/253344/cthulhu-death-may-die
- Publisher page: CMON rulebook host at https://resources.cmon.com/DMD_Rulebook_web.pdf
- Official rulebook: found, downloaded, and text-extracted.
- FAQ/errata: Dized sanity reference found as a secondary lead.
- Review sources: Co-op Board Games review lead recorded.
- Forum/community sources: BGG rulebook thread found but not used as rules authority.

## Rulebook extraction status

- Official rulebook found: yes
- File inspected: yes
- Page count/version/date if known: 20 pages; PDF metadata creation date 2019-04-12.
- Text extraction quality: successful with `pdftotext -layout`; diagrams and symbols require visual inspection.

## Documents written

- `games/cthulhu-death-may-die/index.okf.md`
- `games/cthulhu-death-may-die/sources.okf.md`
- `games/cthulhu-death-may-die/rules/overview.okf.md`
- `games/cthulhu-death-may-die/rules/setup.okf.md`
- `games/cthulhu-death-may-die/rules/turn-structure.okf.md`
- `games/cthulhu-death-may-die/rules/actions.okf.md`
- `games/cthulhu-death-may-die/rules/scoring-endgame.okf.md`
- `games/cthulhu-death-may-die/rules/edge-cases-faq.okf.md`
- `games/cthulhu-death-may-die/reception/reviews.okf.md`
- `games/cthulhu-death-may-die/reception/better-if.okf.md`
- `games/cthulhu-death-may-die/visuals/packet.okf.md`

## Run validation

- `WISHLIST.md` entry checked off (link the game dir): no — skipped because it did not match the RPG focus.
- `node scripts/generate-index.mjs` run after writing docs: pending at report authoring.
- `node scripts/validate-okf.mjs` exit 0 before push: pending at report authoring.

## Strongest design lessons

- Stress converts bad dice into controlled agency, while tentacles convert every roll into a sanity decision.
- Character progression is coupled to danger: sanity thresholds grant insanity effects, skill levels, and sometimes permanent bonus dice.
- The ritual is a locked gate before boss damage, creating a two-act scenario arc.

## Strongest player complaints

- No broad reception complaint is asserted in this run because the independent review page was not extractable.

## This game would be better if...

- A single player aid made the four turn phases, Mythos symbol threshold, ritual lock, and Stage progression explicit.

## Open questions

- Current BGG average, Geek Rating, rank, and weight need direct authenticated or alternate-endpoint verification.
- Review extraction and official errata status need later audit.
