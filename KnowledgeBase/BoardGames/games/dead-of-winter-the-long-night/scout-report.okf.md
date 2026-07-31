---
okf_version: 0.2
type: scout_report
game:
  title: "Dead of Winter: The Long Night"
  slug: "dead-of-winter-the-long-night"
  bgg_id: 193037
  publisher: "Plaid Hat Games"
  year: 2016
  weight: 3.33
  edition: "English 2016 first/release printing"
scope: "edition-specific remediation and open governing ledger"
mechanics: ["action-points", "area-movement", "cooperative-game", "dice-rolling", "hand-management", "hidden-information", "semi-cooperative-game", "variable-player-powers"]
sources:
  - id: "src-001"
    title: "Dead of Winter: The Long Night rulebook"
    url: "https://media.plaidhatgames.com/old_images/games/dead-of-winter/rules-tln.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Release PDF verified against Wayback capture."
  - id: "src-002"
    title: "Plaid Hat release announcement"
    url: "https://web.archive.org/web/20160320090013id_/http://www.plaidhatgames.com/news/652"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Release-era standalone/compatibility evidence."
followups:
  - source_id: null
    url: "physical://dead-of-winter-the-long-night-2016-first-printing"
    failure: other
    fallback: "Official aggregate inventory and rulebook diagrams only."
    retry_needs: manual_review
    notes: "Inspect a confirmed 2016 English copy to close every card/board/reference identity and rule-bearing text class without reproducing full text."
  - source_id: null
    url: "https://web.archive.org/cdx/search/cdx?url=media.plaidhatgames.com/old_images/games/dead-of-winter/*"
    failure: other
    fallback: "Bounded CDX inventory found rules-tln.pdf, pre-target dow-faq.pdf, base rules, and Warring Colonies rules."
    retry_needs: manual_review
    notes: "Need independent authority-inventory confirmation that no target FAQ/errata/module sheet is omitted."
  - source_id: null
    url: "https://www.fantasyflightgames.com/en/products/dead-of-winter-the-long-night/"
    failure: blocked
    fallback: "Plaid Hat live and archived primary sources."
    retry_needs: browser_fetch
    notes: "HTTP 403 Cloudflare is not evidence of absence."
confidence: high
status: needs_followup
---

# Remediation report

## Disposition

`BLOCKED / needs_followup / DO NOT MERGE.` The release rulebook boundary is strong, but the governing denominator remains open because card-local exceptions override the rulebook and the full target-printing card/board/reference identity/text corpus was not lawfully acquired.

- Claim: Card text outranks the rulebook.
  Source: src-001
  Evidence: Rulebook p.15: when a card effect contradicts the rulebook, the card effect takes precedence.
  Confidence: high

## Ledger

Acquired authority groups: target rulebook; release-era product announcement; official aggregate component inventory; module setup/rules for Improvements, Bandits, and Raxxon; instructional Raxxon and Bandit scenarios; two independent reviews; four source-derived visual excerpts.

Open rule-bearing classes: 8 dual-sided main objectives (including scenario chain sides), 40 secret/betrayal/exiled objectives, 20 survivor abilities, 165 starting/location item cards, 22 crises, 10 improvements, 12 Raxxon experiments, 6 pill side effects, 70 Crossroads cards, 5 reference sheets, colony board, and 9 location cards. Quantities are known; complete distinct face/side/text identities are not. No governing percentage is lawful.

## Component arithmetic

Counting convention: 42 printed inventory rows; grouped names are preserved exactly. Physical-piece sum is 757. Category arithmetic by printed noun: 362 cards, 5 reference sheets, 168 tokens/markers, 89 standees, 100 stands, 1 board, 1 rulebook, and 31 dice; `362+5+168+89+100+1+1+31=757`. This proves aggregate quantity only, not face/text completeness.

## Exact help requested

T/manual: provide or inspect a confirmed English 2016 first-printing box and record identity/semantics (not replacement-quality text) for every rule-bearing card, board side, location, and reference sheet; confirm SKU/lot/printing markers from box and rulebook; and retrieve current FFG support through an authenticated/manual browser. A fresh Mennonite must audit the exact PR head after repair.
