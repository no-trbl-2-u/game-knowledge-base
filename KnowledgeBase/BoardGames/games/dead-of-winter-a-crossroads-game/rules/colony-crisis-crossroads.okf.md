---
okf_version: 0.2
type: rule_category
game:
  title: "Dead of Winter: A Crossroads Game"
  slug: "dead-of-winter-a-crossroads-game"
  bgg_id: 150376
  publisher: "Plaid Hat Games"
  year: 2014
  weight: 3.01
  edition: "English 2014 standalone/base game; exact printing mapping unresolved"
scope: "colony upkeep, food, waste, crisis, zombies, morale, and Crossroads timing"
mechanics: ["action-points", "area-movement", "cooperative-game", "dice-rolling", "hand-management", "hidden-information", "semi-cooperative-game", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "Dead of Winter rulebook (PH1000)"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/c0/81/c081efff-c39d-40f1-8261-55570a7002dc/ph1000-rulebook-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Pages 4 and 8–13."
  - id: "src-002"
    title: "Dead of Winter FAQ version 1.1"
    url: "https://media.plaidhatgames.com/old_images/games/dead-of-winter/dow-faq.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Crossroads and colony-phase sections."
confidence: high
status: needs_followup
---

# Colony, crisis, and Crossroads

- Claim: The colony phase resolves food, waste, crisis, zombie addition, main-objective check, round-track movement, and first-player pass in that order.
  Source: src-001
  Evidence: Rulebook p. 12, Colony Phase.
  Confidence: high

- Claim: Food cost is one token per two survivors at the colony, rounded up; if insufficient, no food is removed, one permanent starvation token is added, and morale falls by the total starvation tokens then in play.
  Source: src-001, src-002
  Evidence: Rulebook p. 12, Pay Food; FAQ v1.1 §6.1.1 clarifies the cumulative procedure.
  Confidence: high

- Claim: Waste is the face-up discard pile; ten or more cards there causes one morale loss during Check Waste, while spending an action die on Clean Waste removes the top three cards from the game.
  Source: src-001
  Evidence: Rulebook pp. 10 and 12, Clean Waste and Check Waste.
  Confidence: high

- Claim: Crisis contributions are made face down and shuffled; matching symbols add positive points while any nonmatching symbol subtracts one, preventing the crisis when the resulting total reaches the number of non-exiled players.
  Source: src-001
  Evidence: Rulebook pp. 11–12, Add a Card to the Crisis and Resolve Crisis.
  Confidence: high

- Claim: Zombie demand is one per two survivors at the colony, rounded up, plus one per survivor at each non-colony location; overfull entrances break barricades first or kill the lowest-influence survivor when overrun.
  Source: src-001
  Evidence: Rulebook pp. 12–13, Add Zombies and Adding Zombies.
  Confidence: high

- Claim: At the start of a player's turn, the player to the right draws a Crossroads card and reads its trigger privately; if triggered, its text is resolved and normally pauses the turn unless the card says otherwise.
  Source: src-001
  Evidence: Rulebook p. 12, Crossroads Cards.
  Confidence: high

- Claim: A movement-triggered Crossroads event does not fire if the moving survivor dies before completing the move.
  Source: src-002
  Evidence: FAQ v1.1 §2.1.1.
  Confidence: high

Card-local Crossroads triggers, choices, scenario overrides, crisis consequences, and survivor/item abilities remain in the open governing denominator; this record summarizes framework rules, not all 80 event cards or other card faces.
