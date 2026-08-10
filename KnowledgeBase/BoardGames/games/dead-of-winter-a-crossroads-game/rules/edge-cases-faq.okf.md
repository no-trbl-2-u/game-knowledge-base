---
okf_version: 0.2
type: rule_category
game:
  title: "Dead of Winter: A Crossroads Game"
  slug: "dead-of-winter-a-crossroads-game"
  bgg_id: 150376
  publisher: "Plaid Hat Games"
  year: 2014
  weight: null
  edition: "English 2014 first/release printing"
scope: "card hierarchy, official FAQ v1.1, and edition-sensitive edge cases"
mechanics: ["action-points", "area-movement", "cooperative-game", "dice-rolling", "hand-management", "hidden-information", "semi-cooperative-game", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "Dead of Winter rulebook (English 2014 release printing)"
    url: "https://media.plaidhatgames.com/old_images/games/dead-of-winter/rules.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Page 15 hierarchy and variants."
  - id: "src-002"
    title: "Dead of Winter FAQ version 1.1"
    url: "https://media.plaidhatgames.com/old_images/games/dead-of-winter/dow-faq.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "All four pages inspected."
  - id: "src-003"
    title: "Dead of Winter FAQ Available"
    url: "https://www.plaidhatgames.com/news/463/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Official 2015 announcement."
  - id: "src-009"
    title: "Dead of Winter rulebook PH1000 (2020 revised printing comparison)"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/c0/81/c081efff-c39d-40f1-8261-55570a7002dc/ph1000-rulebook-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Comparison only; not authority for the 2014 target."
confidence: high
status: needs_followup
---

# FAQ and hierarchy

- Claim: Card text overrides the rulebook; when two effects appear simultaneous the first player orders them, and an item cannot interrupt an effect already resolving.
  Source: src-001
  Evidence: Rulebook p. 15, Card Text.
  Confidence: high

- Claim: A third wound kills before medicine can be played because medicine cannot interrupt the wound effect.
  Source: src-001
  Evidence: Rulebook p. 15 example under Card Text.
  Confidence: high

- Claim: FAQ v1.1 corrects Loretta Clay's printed activation from exactly four to four-or-higher and explains that Edward White spends two dice for his combined attack/ability.
  Source: src-002
  Evidence: FAQ v1.1 §§1.2.1 and 1.3.1.
  Confidence: high

- Claim: FAQ v1.1 clarifies John Price's copied abilities as location-sensitive, allows combinations, and treats his copy as a new once-per-round instance.
  Source: src-002
  Evidence: FAQ v1.1 §§1.1.1–1.1.5.
  Confidence: high

- Claim: Attract and Microphone cannot place zombies into full locations, so they neither overrun nor break barricades.
  Source: src-002
  Evidence: FAQ v1.1 §5.1.1.
  Confidence: high

- Claim: During zombie addition, morale is checked after colony placement, after all non-colony placements, and after noise resolution; replacement of a player's last survivor can interrupt these steps.
  Source: src-002
  Evidence: FAQ v1.1 §6.2.1.
  Confidence: high

- Claim: PH1000 adds a general “Roll a Die” rule that does not appear in the target 2014 rulebook; it is retained only as a revised-print comparison and not as target law.
  Source: src-001, src-009
  Evidence: PH1000 p. 15 contains a “Roll a Die” section and index entry; the byte-verified 2014 rulebook has neither.
  Confidence: high

## Variant boundary

Rulebook p. 15 contains cooperative, two-player, betrayer, hardcore, and player-elimination variants. They are documented official options, not silently blended into the standard setup. The two-player branch uses the cooperative variant with seven starting items and three survivors kept from four; this record does not claim that frontmatter stores a player-range field, because the current OKF game schema has no such field.

## Open support question

FAQ v1.1 is proven official by `src-003`, but the current support owner could not be inventoried because its product page returned a Cloudflare challenge. Therefore v1.1 is not claimed to be the final-ever FAQ/errata document.
