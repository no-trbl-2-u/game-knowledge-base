---
okf_version: 0.2
type: rule_category
game:
  title: "Gloomhaven"
  slug: "gloomhaven"
  bgg_id: 174430
  publisher: "Cephalofair Games"
  year: 2017
  weight: 3.90
  edition: "base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, hand-management, point-to-point-movement, variable-player-powers]
sources:
  - id: "src-005"
    title: "Gloomhaven — Dized Rules: Exhaustion"
    url: "https://rules.dized.com/game/I7lEsCGOS2-zgol-ZRNf3g/JCOXDscCS3a2rgiHrt6_Eg/exhaustion"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Exhaustion summary."
  - id: "src-008"
    title: "Cephalofair Games — Gloomhaven support and resources"
    url: "https://cephalofair.com/pages/gloomhaven"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-31"
    notes: "Official publisher support hub, confirmed in the 2026-08-31 librarian pass."
  - id: "src-009"
    title: "Gloomhaven Rulebook (2017 English edition) — mirrored PDF"
    url: "https://cdn.1j1ju.com/medias/8d/c5/21-gloomhaven-rulebook.pdf"
    kind: rulebook_pdf
    provenance: secondary
    retrieved_at: "2026-09-03"
    notes: "Static 52-page PDF receipt; 13,154,428 bytes; SHA-256 9965c76dfc747c82a4013d645e95f5ffc64692865617527734199b064a2117fe."
  - id: "src-010"
    title: "Gloomhaven review: 2017’s biggest board game is astoundingly good — Ars Technica"
    url: "https://arstechnica.com/gaming/2017/04/gloomhaven-review-2017s-biggest-board-game-is-astoundingly-good/2/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-09-03"
    notes: "HTTP 200 dynamic HTML receipt; final URL redirected to the article root; cited monster-AI passage remained present."
  - id: "src-011"
    title: "Official FAQ for Gloomhaven (2025) / Second Edition"
    url: "https://cephalofairgames.github.io/gloomhaven2e-faq/"
    kind: faq
    provenance: official
    retrieved_at: "2026-09-03"
    notes: "Current Second Edition FAQ; used only to confirm that the current official authority is edition-specific, not as a 2017 rules substitute."
confidence: medium
status: verified
---

## Edge-case findings

- Claim: A character who becomes exhausted during a scenario cannot return to that scenario.
  Source: src-005
  Evidence: Dized summary states there is no coming back from exhaustion during a scenario.
  Confidence: medium

- Claim: The publisher maintains an official Gloomhaven FAQ and an official errata list for First Printing (2025) copies, both linked from the publisher support hub.
  Source: src-008
  Evidence: The Cephalofair Gloomhaven page links a "Gloomhaven FAQ" hosted at cephalofairgames.github.io and lists major errata for First Printing (2025) copies.
  Confidence: high

- Claim: At the start of a round, one card is played for each monster type currently on the map from its respective monster ability deck, and that card governs both normal and elite monsters of that type for the round.
  Source: src-009
  Evidence: The 2017 rulebook's "Monster Ability Cards" section on PDF page 10 says one card is played for each monster type from its respective deck and that the card determines the abilities for every monster of that type, including normal and elite monsters.
  Confidence: high

- Claim: A monster ability card's shuffle icon sends that monster set's discard pile back into its draw deck at the end of the round; monsters only perform the abilities listed on that round's card.
  Source: src-009
  Evidence: The 2017 rulebook's monster-card explanation on PDF page 10 defines the shuffle symbol, and its End of Round section on PDF page 32 directs players to shuffle the corresponding monster-type discards when the symbol was drawn; the Monster Ability Cards section says unlisted abilities are not performed.
  Confidence: high

- Claim: Independent reception describes the monster automation as quick to run while preserving uncertainty that can force players to revise plans.
  Source: src-010
  Evidence: Ars Technica's review says, "Running the AI is thankfully quick and painless," and that unpredictability in the monster AI means players may need to come up with new plans on the fly.
  Confidence: high

## Open questions

Exhaustion triggers, hand-loss timing, and monster-specific exceptions still require official FAQ verification. The current official FAQ linked from src-008 is explicitly a 2025/Second Edition authority (src-011); it should not be backdated into this 2017 base-game record. The 2017 monster ability-card and shuffle rules are now supported by the exact retrieved PDF receipt in src-009.