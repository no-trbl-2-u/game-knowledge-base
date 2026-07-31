---
okf_version: 0.2
type: scout_report
game:
  title: "Bloodborne: The Card Game"
  slug: "bloodborne-the-card-game"
  bgg_id: 195856
  publisher: "CMON"
  year: 2016
  weight: 2.04
  edition: "English 2016 standalone base game"
scope: "English 2016 standalone base game; The Hunter's Nightmare expansion and promotional or translated material excluded"
mechanics: ["hand-management", "push-your-luck", "semi-cooperative-game", "set-collection", "simultaneous-action-selection"]
sources:
  - id: "src-001"
    title: "CMON — Bloodborne: The Card Game"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Official live product page; direct HTML blocked, original-URL proxy and direct assets retrieved."
  - id: "src-002"
    title: "Bloodborne: The Card Game Rulebook — verified third-party copy"
    url: "https://cdn.1j1ju.com/medias/66/14/bb-bloodborne-the-card-game-rulebook.pdf"
    kind: rulebook_pdf
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Complete rules copy, but not an official CMON-hosted retrieval."
  - id: "src-004"
    title: "Ars Technica — Bloodborne: The Card Game is actually pretty great"
    url: "https://arstechnica.com/gaming/2016/09/bloodborne-the-card-game-is-actually-pretty-great/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Independent review."
followups:
  - source_id: null
    url: "https://resources.cmon.com/Bloodborne-The-Card-Game-Rulebook.pdf"
    failure: not_found
    fallback: "Complete third-party 16-page rules copy src-002 used provisionally."
    retry_needs: alternate_source
    notes: "HTTP 404 on 2026-07-31. Need CMON's exact final rules URL or publisher-supplied file."
  - source_id: null
    url: "https://resources.cmon.com/Bloodborne-Card-Game-Rulebook.pdf"
    failure: not_found
    fallback: "Complete third-party 16-page rules copy src-002 used provisionally."
    retry_needs: alternate_source
    notes: "HTTP 404 on 2026-07-31."
  - source_id: "src-001"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game"
    failure: blocked
    fallback: "Original-URL text proxy and direct wp-content image assets returned HTTP 200; no rules link appeared under Rules & More."
    retry_needs: manual_review
    notes: "Direct automated request and browser both met Cloudflare/HTTP 403 on 2026-07-31."
confidence: high
status: needs_followup
---

# Scout report

## Verdict

- Claim: This existing canonical record must remain `needs_followup`, not `verified`.
  Source: src-001, src-002
  Evidence: "The only complete rulebook retrieved is third-party hosted; CMON's live support area did not expose a final rulebook, FAQ, errata, or card-clarification index."
  Confidence: high

## What is acquired

- Claim: The base-game physical manifest is closed at seven categories, and all seven quantities are transcribed.
  Source: src-001
  Evidence: "87 cards, 5 Hunter Boards, 5 Hunter Health Dials, 75 Blood Echo plastic tokens, 16 cardboard tokens, 3 custom Monster dice, and 1 rulebook."
  Confidence: high

- Claim: The inspected rules copy covers setup, eight round steps, combat and death, Hunter's Dream upgrades, trophies, Final Boss resolution, scoring, and ties.
  Source: src-002
  Evidence: "Rulebook table of contents and pp. 5–15."
  Confidence: high

- Claim: Independent reception supports both praise and friction without model-generated sentiment.
  Source: src-004
  Evidence: "Ars praises bluffing, dread, and push-your-luck tension while warning that take-that nastiness will not suit players who dislike being mean to friends."
  Confidence: high

## Why the governing denominator is open

The complete official support/document index is unknown. Five card classes are proven to carry local rules: Starter Actions, Upgrades, Monsters, Chalice Bosses, and Final Bosses. Their physical quantities are known, but their complete identity/text corpus was not acquired. Official FAQ/errata absence was not proven from a closed publisher support index. Therefore an achieved governing percentage would be fabricated; the correct value is **unknown**.

## Exact help requested from T

Please provide one of:

1. the exact CMON-hosted final English 2016 rulebook URL or publisher-supplied file, plus any official FAQ/errata/card-clarification link; and
2. an authoritative complete base-game card list/readout (or permission to use a specifically identified, immutable secondary card corpus) covering all five rule-bearing card classes.

With those authorities, Bathcat can close the denominator and a fresh Mennonite can audit the repaired PR head. This draft must not be marked ready or merged meanwhile.
