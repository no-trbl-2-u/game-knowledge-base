---
okf_version: 0.2
type: rule_category
game:
  title: "Arydia: The Paths We Dare Tread"
  slug: "arydia-the-paths-we-dare-tread"
  bgg_id: 219650
  publisher: "Far Off Games"
  year: 2026
  weight: null
  edition: "base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, variable-player-powers]
sources:
  - id: "src-001"
    title: "Arydia: The Paths We Dare Tread — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/219650/arydia-the-paths-we-dare-tread"
    kind: bgg_page
    provenance: official
    retrieved_at: "2026-07-23"
    notes: "Campaign identity."
  - id: "src-007"
    title: "Arydia Rulebook (v35)"
    url: "https://www.dropbox.com/scl/fi/q9qpvu1uc1pea3lozj6i6/Rulebook_280x216mm_FlatFormat_v35_Cropped_OP.pdf?rlkey=fx2oqdenrwmbjcy32jpfsojh0&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Official rulebook, retrieved and text-extracted in the 2026-08-19 librarian pass."
confidence: high
status: verified
last_verified: "2026-08-19"
---

## End-state status

- Claim: The game is structured as a campaign in which characters quest and attempt to earn their way home.
  Source: src-001
  Evidence: BGG description frames the objective as earning the exiles' way home through exploration, fighting, and questing.
  Confidence: high
- Claim: A combat encounter is won when all foes are defeated; the party then loots XP and Rewards (Special rewards last), flips the Mode token back to Adventure, checks whether any exile is at 0 HP, and refreshes markers for Out-of-Combat skills/items.
  Source: src-007
  Evidence: "If all foes have been defeated, the players achieve victory. Follow these steps: 1. Loot: Gain XP/Rewards, saving Special rewards for last. 2. Flip the Mode Token to 'Adventure.' ... 3. Refresh markers for Out of Combat skills/items."
  Confidence: high
- Claim: A combat encounter ends in defeat if every exile in the party is knocked out (KO'd) at the end of an Exile Turn, which triggers drawing a specific Event card; exiles may instead flee combat as a free action if adjacent to an exit pointer, which likewise draws an Event card.
  Source: src-007
  Evidence: "If every exile in the party is KO'd at the end of an Exile Turn, draw [EVT card] ... To flee combat, on an exile's turn, that exile must be adjacent to a Hex pointer that leads back to the Worldmap or stairs ... Flee: As a free action, draw [EVT card]."
  Confidence: high
- Claim: Rewards for defeating foes are granted per AI card rather than per individual foe miniature — the party gains the listed XP/Reward once for the whole AI card regardless of party size or how many foes shared it, and any Kae (currency) reward is divided by party agreement.
  Source: src-007
  Evidence: "For each AI card (not Grid card), gain the XP and Reward once for the entire party regardless of party size or number of foes that share the AI card ... The party decides how to divide any Kae gained."
  Confidence: high

No conventional victory-point scoring system was identified; success is tracked through campaign progress (quests, character advancement, and the exiles' pardon/return-home objective) rather than a numeric score.