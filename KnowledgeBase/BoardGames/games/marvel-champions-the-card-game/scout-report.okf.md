---
okf_version: 0.2
type: scout_report
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
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/285774/marvel-champions-the-card-game"
    failure: blocked
    fallback: "Search result snippet and BGG URL identity"
    retry_needs: manual_review
    notes: "2026-07-12: direct urllib request returned HTTP 403. Retried 2026-07-15 (audit) via WebFetch: still HTTP 403. This matches a systemic block on boardgamegeek.com pages seen across most games in this corpus (see weekly check-links 'suspect' list) — not a game-specific issue. Downgrading retry_needs to manual_review since two automated tool types (urllib, WebFetch) have both failed; a genuine interactive/authenticated browser session is needed next."
sources:
  - id: "src-001"
    title: "BoardGameGeek — Marvel Champions: The Card Game"
    url: "https://boardgamegeek.com/boardgame/285774/marvel-champions-the-card-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-12"
    notes: "Selection and eligibility source."
  - id: "src-002"
    title: "Fantasy Flight Games — Marvel Champions product page"
    url: "https://www.fantasyflightgames.com/en/products/marvel-champions-the-card-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-12"
    notes: "Official rules hub."
  - id: "src-003"
    title: "Marvel Champions Rules Reference v1.5"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/b6/30/b630ddfe-e745-435b-a284-572dd510e15d/mc_rulesreference_v15-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Audit 2026-07-15: retried with WebFetch download + pypdf extraction (not available to the 2026-07-12 scout run's toolset); succeeded, 56 pages. Followup resolved."
  - id: "src-004"
    title: "Meeple Mountain — Marvel Champions review"
    url: "https://www.meeplemountain.com/reviews/marvel-champions-the-card-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Audit 2026-07-15: full text retrieved via WebFetch. Followup resolved."
confidence: medium
status: needs_followup
---

## Scout objective

Study one cooperative deck-building/card-construction game for rules structure, reception, and better-if opportunities.

## Why this game

- Wishlist entry consumed: no unchecked entries; free choice.
- BGG signal: BGG page identified a prominent eligible cooperative LCG; direct live score metadata was blocked, so exact score comparison remains unresolved.
- Mechanics relevance: cooperative play, hero deck construction, hand management, asymmetric powers, and solo suitability.
- Review/reception signal: available review snippet praises hero/villain combination breadth.

## Source search path

- BoardGameGeek: game page located; direct fetch blocked with HTTP 403.
- Publisher page: Fantasy Flight Games product/download hub located.
- Official rulebook: v1.5 PDF URL located; extraction failed; current v1.7 reference advertised by publisher page.
- Review sources: Meeple Mountain review located as a lead.

## Rulebook extraction status

- Official rulebook found: yes
- File inspected: yes (audit 2026-07-15 retry)
- Page count/version/date if known: v1.5, 56 pages; current v1.7 advertised by the publisher page but not yet retrieved/diffed.
- Text extraction quality: good — WebFetch download + pypdf extraction produced clean, readable text across every sampled page (glossary entries, appendices, FAQ).

## Documents written

- `games/marvel-champions-the-card-game/index.okf.md`
- `games/marvel-champions-the-card-game/sources.okf.md`
- `games/marvel-champions-the-card-game/rules/overview.okf.md`
- `games/marvel-champions-the-card-game/rules/setup.okf.md`
- `games/marvel-champions-the-card-game/rules/turn-structure.okf.md`
- `games/marvel-champions-the-card-game/rules/actions.okf.md`
- `games/marvel-champions-the-card-game/rules/scoring-endgame.okf.md`
- `games/marvel-champions-the-card-game/rules/edge-cases-faq.okf.md`
- `games/marvel-champions-the-card-game/reception/reviews.okf.md`
- `games/marvel-champions-the-card-game/reception/better-if.okf.md`

## Run validation

- `WISHLIST.md` entry checked off: n/a — wishlist had no unchecked entry.
- `node scripts/generate-index.mjs` run after writing docs: done (audit 2026-07-15 pass)
- `node scripts/validate-okf.mjs` exit 0 before push: done (audit 2026-07-15 pass)

## Strongest design lessons

The available evidence points to combinatorial replayability as the game's primary design asset: hero identity and villain scenario can be recombined without abandoning a shared cooperative frame.

## Strongest player complaints

Established 2026-07-15 (audit) from the full Meeple Mountain review: occasional deck-driven bad luck can feel unfair, and post-game component sorting (resorting character-specific cards back to their owners) is a genuine chore. See `reception/reviews.okf.md`.

## This game would be better if...

Post-game teardown/sorting were less manual — see `reception/better-if.okf.md` (corrected 2026-07-15: the doc's original onboarding/expansion-bloat opportunities were unsupported guesses from a search snippet; the full review actually praises both of those areas).

## Open questions

- What is the current BGG score/rank/weight? Still blocked as of 2026-07-15 (see `followups`).
- Which rules-reference revision is canonical for the core-game corpus? v1.5 is now fully extracted and cited; v1.7 (advertised by the publisher page) has not been retrieved or diffed against it.