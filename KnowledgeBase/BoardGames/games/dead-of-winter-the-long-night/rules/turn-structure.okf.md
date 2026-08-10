---
okf_version: 0.2
type: rule_category
game:
  title: "Dead of Winter: The Long Night"
  slug: "dead-of-winter-the-long-night"
  bgg_id: 193037
  publisher: "Plaid Hat Games"
  year: 2016
  weight: null
  edition: "English 2016 first/release printing"
scope: "edition-specific round and turn economy"
mechanics: ["action-points", "area-movement", "cooperative-game", "dice-rolling", "hand-management", "hidden-information", "semi-cooperative-game", "variable-player-powers"]
sources:
  - id: "src-001"
    title: "Dead of Winter: The Long Night rulebook"
    url: "https://media.plaidhatgames.com/old_images/games/dead-of-winter/rules-tln.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Pages 8 and 12-13."
confidence: high
status: needs_followup
---

# Turn structure

- Claim: Player Turns proceeds Reveal Crisis, Roll Action Dice, then player turns in order.
  Source: src-001
  Evidence: Rulebook p.8.
  Confidence: high

- Claim: A player rolls one action die per survivor controlled plus one; unused results form the action pool.
  Source: src-001
  Evidence: Rulebook p.8, "Roll Action Dice."
  Confidence: high

- Claim: Colony phase order is Pay Food, Check Waste, Resolve Crisis, Add Zombies, Check Main Objective, Move Round Tracker, and Pass First Player Token.
  Source: src-001
  Evidence: Rulebook pp.12-13.
  Confidence: high

- Claim: The Long Night adds a possible vote to keep the first-player token with its current holder.
  Source: src-001
  Evidence: Rulebook pp.13 and 16.
  Confidence: high

- Claim: Food demand is one token per two colony survivors, rounded up and counting helpless survivors; if the supply is short, no food is removed, one starvation token is added, and morale falls by the total starvation-token count.
  Source: src-001
  Evidence: Rulebook p.12, Colony Phase step 1, "Pay Food."
  Confidence: high

- Claim: Waste lowers morale by one for each complete group of ten cards in the waste pile.
  Source: src-001
  Evidence: Rulebook p.12, Colony Phase step 2, "Check Waste."
  Confidence: high

- Claim: Crisis contributions are shuffled and revealed: each matching-symbol card scores one, each nonmatching card subtracts one, and the threshold is the number of non-exiled players. Below threshold resolves the printed failure; meeting it prevents the crisis; exceeding it by at least two also raises morale by one, then all contributions leave play.
  Source: src-001
  Evidence: Rulebook p.12, Colony Phase step 3, "Resolve Crisis." Printed crisis-specific consequences remain card-local `UNKNOWN`.
  Confidence: high

- Claim: Zombie demand is one per two colony survivors rounded up, plus one per survivor at each non-colony location; unruly helpless survivors can modify those counts. Each noise token is flipped and adds a zombie only on its marked result.
  Source: src-001
  Evidence: Rulebook pp.12-13, Colony Phase step 4, plus p.16 for unruly counting.
  Confidence: high

- Claim: Zombies enter one at a time; at a full entrance they first destroy a barricade and cancel that zombie, otherwise overrun and kill the lowest-influence survivor (or a helpless survivor if no ordinary survivor is present), reducing morale for the death.
  Source: src-001
  Evidence: Rulebook p.13, "Adding Zombies."
  Confidence: high
