---
okf_version: 0.2
type: scout_report
game:
  title: "Twilight Struggle"
  slug: "twilight-struggle"
  bgg_id: 12333
  publisher: "GMT Games"
  year: 2005
  weight: null
  edition: "2nd Edition Deluxe Edition rulebook"
scope: "base game"
mechanics: [area-majority-influence, card-play-conflict-resolution, dice-rolling, hand-management, hidden-information, point-to-point-movement, variable-player-powers]
sources:
  - id: "src-001"
    title: "Twilight Struggle Deluxe rulebook — GMT Games"
    url: "https://www.gmtgames.com/living_rules/TS_Rules_Deluxe.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-22"
    notes: "Official rules receipt."
  - id: "src-002"
    title: "Twilight Struggle Collector’s Edition — The Opinionated Gamers"
    url: "https://opinionatedgamers.com/2017/04/26/twilight-struggle-collectors-edition-photos-and-game-history-by-chris-wray/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-22"
    notes: "Independent review and identity receipt."
  - id: "src-003"
    title: "Twilight Struggle box photograph — The Opinionated Gamers"
    url: "https://i0.wp.com/opinionatedgamers.com/wp-content/uploads/2017/04/box.jpeg?resize=506%2C350&ssl=1"
    kind: other
    provenance: secondary
    retrieved_at: "2026-10-22"
    notes: "Visual receipt."
confidence: high
status: verified
---

## Summary

The wishlist-first scout selected Twilight Struggle after skipping the explicitly excluded Quarriors entry and deduplicating the earlier unchecked candidates that already have intake or canonical records. No open PR had a current-head Mennonite REVISE, so scout mode applied. The official GMT rulebook was retrieved with exact static bytes, and an independent editorial source supplied identity and reception evidence. The candidate is staged as `ready_for_audit`; it is not approved or canonical.

## Source-backed facts

- Claim: The packet has official rules, independent reception, and visual receipts spanning two non-BGG organizational domains.
  Source: src-001, src-002, src-003
  Evidence: GMT Games supplied the rulebook; The Opinionated Gamers supplied the editorial page and its image asset; all three receipts record HTTP 200 retrievals.
  Confidence: high

- Claim: The packet publishes one bounded governing-rules record and leaves the factual denominator open.
  Source: src-001, src-002
  Evidence: The manifest records rules 1/1 and factual coverage with `known_total: null`; no exhaustive component or card count beyond the rulebook's cited component list is asserted.
  Confidence: high

## Retrieval path

1. Inspected live open PRs and found none; no current-head Mennonite REVISE existed, so scout mode applied.
2. Read the unchecked wishlist top-down. Quarriors was skipped under the standing exclusion. Dune: Imperium — Uprising, Star Wars: Rebellion, Gloomhaven: Jaws of the Lion, and Gaia Project were skipped because matching intake/canonical records exist despite unchecked wishlist lines. Twilight Struggle was the next eligible physical candidate.
3. Checked canonical games, intake manifests, local branches, all-state PRs, and issues for duplicate slug/ID state. No Twilight Struggle intake, canonical game, branch, or open PR was found.
4. Retrieved the GMT rulebook, The Opinionated Gamers article, and its box image asset. Rendered one reduced rulebook-page derivative and one reduced box derivative as a two-panel contact sheet.
5. Extracted rulebook text with `pdftotext`; retained short quotations and page/section locators only. Static PDF and image receipts preserve exact bytes and SHA-256. The dynamic editorial receipt preserves final URL, source identity, cited excerpt, and observed transport metadata.

## Coverage ledger

The rules denominator is deliberately bounded to the one retrieved official rulebook: recorded 1, known_total 1, percent 100. The factual denominator is not known: recorded 15 source-backed entries, known_total null, percent null. No component, card, rating, or complexity denominator is inferred.

## Strongest rules lesson

The distinctive coupling is the choice between using a card for its event or for operations, with operations feeding influence placement, realignment, coups, or the Space Race while DEFCON limits escalation.

## Strongest reception signal

The independent source reports immediate critical acclaim and long-running ranking prominence, while the packet treats that as editorial testimony rather than a population-wide rating claim.

## Top better-if opportunities

1. onboarding — teach the card-as-event-or-operations decision before the full card history.
2. rules-ambiguity — stage the interaction among headline cards, action rounds, scoring cards, and end-of-turn checks.
3. strategic-depth — make regional scoring, DEFCON, and the Space Race legible without reducing their tension.
4. turn-pacing — surface the ten-turn structure and action-round cadence early.

## Open questions

- BGG HTML returned a Cloudflare block and no rating or weight is claimed.
- The packet excludes the Chinese Civil War variant, late-war scenario, designer optional rules, expansions, and digital implementations.
- The packet does not establish whether the favorable historical reception generalizes to the wider current player population.

## Retrieval failures

- BGG page retrieval returned a Cloudflare block; it was used only as the wishlist discovery lead and no rating or complexity claim was published.