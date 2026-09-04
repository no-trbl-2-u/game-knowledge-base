---
okf_version: 0.2
type: scout_report
game:
  title: "Dead of Winter: The Long Night"
  slug: "dead-of-winter-the-long-night"
  bgg_id: 193037
  publisher: "Plaid Hat Games"
  year: 2016
  weight: null
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
    url: "https://web.archive.org/cdx/search/cdx?url=media.plaidhatgames.com/old_images/games/dead-of-winter/*"
    failure: other
    fallback: "Bounded CDX inventory found rules-tln.pdf, pre-target dow-faq.pdf, base rules, and Warring Colonies rules."
    retry_needs: manual_review
    notes: "Need independent authority-inventory confirmation that no target FAQ/errata/module sheet is omitted."
  - source_id: null
    url: "https://www.fantasyflightgames.com/en/products/dead-of-winter-the-long-night/"
    failure: blocked
    fallback: "Plaid Hat live and archived primary sources."
    retry_needs: manual_review
    notes: "HTTP 403 Cloudflare is not evidence of absence. Retried 2026-09-04 (librarian): still HTTP 403, and a real headless Chromium session (Playwright) against fantasyflightgames.com was held at the Cloudflare 'Performing security verification' interstitial without clearing. The Wayback availability API also returns an empty `archived_snapshots` object for this exact URL, so no archive fallback exists. browser_fetch is exhausted for this domain from this environment; downgraded to manual_review. Still not evidence of absence."
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

### Card, board, location, and reference authority

- Claim: The rulebook supplies shared framework for the 8 dual-sided main objectives; 40 secret, betrayal, and exiled objectives; 20 survivors; 165 starting/location items; 22 crises; 10 improvements; 12 Raxxon experiments; 6 pill side effects; and 70 Crossroads cards, but does not close their complete target-printing identities, sides, or card-local semantics.
  Source: src-001
  Evidence: Rulebook pp.2-3 inventories these classes, pp.6-18 provide shared procedures, and p.15 makes contradictory card effects controlling; complete card-local authority remains `UNKNOWN`.
  Confidence: high

- Claim: The five reference sheets, colony board, and nine location cards have rulebook-level setup and shared-use framework, but their complete target-printing faces, printed text, and location-specific semantics remain `UNKNOWN`.
  Source: src-001
  Evidence: Rulebook pp.3 and 6-7 describe their shared roles; the rulebook does not inventory every printed face or location-card instruction.
  Confidence: high

### Semantic token, marker, die, and standee authority

- Claim: The rulebook closes the shared wound-token law—ordinary wounds, frostbite as a wound that adds another wound at the start of its controller's turns, and death at three wound-type tokens—but the physical ordinary/frostbite face printing and face distribution of all 25 tokens remain `UNKNOWN`.
  Source: src-001
  Evidence: Rulebook pp.11 and 14, "Rolling for Exposure" and "Killing Survivors."
  Confidence: high

- Claim: The rulebook closes barricade placement and zombie-blocking use, and closes explosive traps as the alternate barricade-token state that also removes zombies at that entrance when destroyed; the physical reverse/alternate printing and distribution of all 20 tokens remain `UNKNOWN`.
  Source: src-001
  Evidence: Rulebook pp.10, 13, and 16, "Barricade," "Adding Zombies," and "Explosive Traps."
  Confidence: high

- Claim: The rulebook closes normal versus unruly helpless-survivor behavior, including unruly tokens counting twice for food and zombie addition and medicine flipping them to normal; the physical side printing and distribution of all 20 tokens remain `UNKNOWN`.
  Source: src-001
  Evidence: Rulebook p.16, "Unruly Helpless Survivors."
  Confidence: high

- Claim: The rulebook closes despair as a wound-like token that only despair-specific effects remove; the physical printing and identity of the 12 tokens remain `UNKNOWN`.
  Source: src-001
  Evidence: Rulebook p.16, "Despair."
  Confidence: high

- Claim: Food, noise, and starvation tokens have closed shared procedures—food pays colony demand or raises unused action dice, noise can extend searches and later risks zombies, and failed food payment adds starvation whose accumulated count lowers morale—but their target-printing faces remain unverified.
  Source: src-001
  Evidence: Rulebook pp.9-13, "Search," "Spend Food Tokens," and Colony Phase steps 1 and 4.
  Confidence: high

- Claim: Advancement tokens generically accumulate toward printed improvement thresholds, after which either the improvement card or its corresponding improvement token may mark the active improvement; the one-to-one identities, thresholds, effects, and card-token mapping for all 10 pairs remain `UNKNOWN`.
  Source: src-001
  Evidence: Rulebook p.17, "The Improvements Module."
  Confidence: high

- Claim: The first-player token and two track markers have closed shared functions—turn/decision priority, first-player pass-or-retain vote, and morale/round tracking—but their physical faces remain unverified.
  Source: src-001
  Evidence: Rulebook pp.6-8, 13, and 16 describe marker placement, priority, and token transfer/vote.
  Confidence: high

- Claim: Action dice are six-sided results used as player action pools and as general random dice; in Raxxon, unused dice may instead be placed at that location to satisfy the top Audio Log's two-die containment code. The physical face printing remains unverified.
  Source: src-001
  Evidence: Rulebook pp.8 and 15 for ordinary use and p.18, "The Containment Code," for Raxxon placement and matching.
  Confidence: high

- Claim: The exposure die has blank, wound, frostbite, and bitten result classes with rulebook-defined effects, but the physical arrangement and multiplicity of its six faces remain `UNKNOWN`.
  Source: src-001
  Evidence: Rulebook p.11, "Rolling for Exposure," identifies the four result classes but does not enumerate face multiplicity.
  Confidence: high

- Claim: Standard zombie standees are board occupants and the 20 zombie tokens substitute when standees run out; survivor standees correspond to survivor cards; bandit standees follow the Bandits framework. Exact survivor-card/standee identities and physical printing remain `UNKNOWN`.
  Source: src-001
  Evidence: Rulebook pp.6, 13-14, and 17 covers setup, zombie-token substitution, survivor addition, and bandit placement.
  Confidence: high

- Claim: Each experiment card's Audio Log specifies special-zombie placement using matching standees and its encounter side governs those zombies; the complete identity and mapping between 12 cards and 19 standees remain `UNKNOWN`.
  Source: src-001
  Evidence: Rulebook pp.18-19 supplies the framework and depicts named standee classes, but does not close the complete physical card-to-standee inventory.
  Confidence: high

The 100 plastic stands and rulebook are physical support/source pieces rather than independent rule-bearing identity classes. Quantities are known; all card-local and physical-face gaps above remain `UNKNOWN`. No governing percentage is lawful.

## Component arithmetic

Counting convention: 42 printed inventory rows; grouped names are preserved exactly. Physical-piece sum is 757. Category arithmetic by printed noun: 362 cards, 5 reference sheets, 168 tokens/markers, 89 standees, 100 stands, 1 board, 1 rulebook, and 31 dice; `362+5+168+89+100+1+1+31=757`. This proves aggregate quantity only, not face/text completeness.

## Exact help requested

No retrievable document source is currently known for a lawful immutable corpus recording identity/semantics (not replacement-quality text) for every rule-bearing card, board side, location, reference sheet, token face, die face, and card/standee or card/token mapping. The current FFG support inventory past Cloudflare and an independently bounded target FAQ/errata/module-sheet inventory remain separate open-source checks.

Physical-copy acquisition and box/SKU/lot inspection are **out of scope** for this corpus and must not be requested. Where no lawful document source exists, the affected denominators stay permanently `UNKNOWN` and the records stay `needs_followup` — that is an accepted terminal state, not a pending task.
