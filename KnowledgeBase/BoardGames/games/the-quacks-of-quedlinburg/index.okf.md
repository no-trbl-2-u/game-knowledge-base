---
okf_version: 0.2
type: game_index
game:
  title: "The Quacks of Quedlinburg"
  slug: "the-quacks-of-quedlinburg"
  bgg_id: 244521
  publisher: "Schmidt Spiele / North Star Games"
  year: 2018
  weight: 1.94
  edition: "English base game / Quacks current listing"
scope: "base game"
mechanics: [deck-bag-and-pool-building, push-your-luck, catch-up-mechanism, simultaneous-action-selection, dice-rolling, variable-setup]
sources:
  - id: "src-001"
    title: "Quacks | Board Game | BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/244521/quacks"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Discovery layer for BGG id, title change, weight, rank, rating, player count, mechanisms, and publisher metadata."
  - id: "src-002"
    title: "The Quacks of Quedlinburg official product page"
    url: "https://www.schmidtspiele.de/detail/product/the-quacks-of-quedlinburg.html"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-05"
    notes: "Official Schmidt Spiele English product page; lists designer, player count, play time, article number, and English rules file name."
  - id: "src-003"
    title: "The Quacks of Quedlinburg Rulebook PDF"
    url: "https://cdn.1j1ju.com/medias/ba/73/db-the-quacks-of-quedlinburg-rulebook.pdf"
    kind: rulebook_pdf
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Accessible English rulebook mirror used for rule extraction after official page identified the English rules file."
confidence: high
status: verified
---

## Summary

The Quacks of Quedlinburg is a light family-weight bag-building push-your-luck game about brewing potions over nine rounds. It matters to SomberSoft because it makes probability tactile: every purchase changes the contents of a private bag, every draw asks whether greed outruns judgment, and the catch-up system keeps ruined players in the contest.

## Source-backed facts

- Claim: BoardGameGeek lists the game as BGG item 244521, originally The Quacks of Quedlinburg and currently listed as Quacks, released in 2018 with complexity weight 1.94/5.
  Source: src-001
  Evidence: "BGG Item ID: 244521"; "Original title: The Quacks of Quedlinburg"; "Complexity / Weight 1.94 / 5".
  Confidence: high
- Claim: BGG describes the core loop as each player drawing ingredient chips from a personal bag and adding them to a pot until they stop or explode.
  Source: src-001
  Evidence: "Each player has their own bag of ingredient chips" and "Push your luck as far as you can, but if you add too many cherry bombs, your pot will explode!"
  Confidence: high
- Claim: Schmidt Spiele's official English product page names Wolfgang Warsch and lists 2–4 players and 45 minutes.
  Source: src-002
  Evidence: "Wolfgang Warsch"; "2 from 4 players"; "45 min."
  Confidence: high
- Claim: The rulebook says the game consists of nine turns.
  Source: src-003
  Evidence: "The game consists of 9 turns."
  Confidence: high

## Rules / Mechanics

Bag-building supplies the long arc; push-your-luck supplies the moment-to-moment verdict. Variable ingredient books change what each color does across plays without changing the round skeleton.

## Player friction

Known friction concentrates around luck tolerance, component wear, low direct interaction, possible runaway perception late in the game, and the temptation/possibility to misdraw during simultaneous private bag play. See reception docs.

## Praised design

The design grants drama without attack. Players suffer by their own hand, laugh at the bag, and still buy better futures.

## Better-if opportunities

- component-clarity: bag-drawn cardboard chips are under physical stress and should be made robust if the system expects repeated tactile shuffling.
- randomness: high-luck systems need visible mitigation and permission to enjoy failure.
- player-interaction: simultaneous solitaire can still feel communal if reveals, busts, and bonus contests are staged publicly.

## Design implications for SomberSoft

Axiomancer can use a similar risk economy: let the player knowingly pollute a pool for power, then offer enough remediation that a bust feels authored rather than arbitrary.

## Open questions

- Whether current CMYK/Schmidt editions materially revise component durability or rules text from the cited older English rulebook.
