---
okf_version: 0.2
type: rule_category
game:
  title: "Marvel Champions: The Card Game"
  slug: "marvel-champions-the-card-game"
  bgg_id: 285774
  publisher: "Fantasy Flight Games"
  year: 2019
  weight: null
  edition: "core game"
scope: "base game"
mechanics: [cooperative-game, deck-building, hand-management, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-002"
    title: "Fantasy Flight Games — Marvel Champions product page"
    url: "https://www.fantasyflightgames.com/en/products/marvel-champions-the-card-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-12"
    notes: "Official rules download hub."
  - id: "src-003"
    title: "Marvel Champions Rules Reference v1.5"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/b6/30/b630ddfe-e745-435b-a284-572dd510e15d/mc_rulesreference_v15-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Audit 2026-07-15: extraction retried with pypdf (56 pages), succeeded. Appendix II: Setup is the cited section."
confidence: high
status: verified
---

## Summary

Setup is a fixed 16-step sequence (Appendix II of the Rules Reference): pick identities, set hit points and first player, stage each identity's obligation/nemesis, shuffle decks, pick a scenario, build the encounter deck, resolve setup/when-revealed abilities, then draw and mulligan starting hands.

## Source-backed facts

- Claim: Setup proceeds through 16 numbered steps, from identity selection through resolving character setup abilities.
  Source: src-003
  Evidence: "1. Select Identities... 2. Set Hit Points... 3. Select First Player... 4. Set Aside Obligations... 5. Set Aside Nemesis Sets... 6. Shuffle Player Decks... 8. Select Scenario... 10. Create the Encounter Deck... 14. Draw Cards... 15. Resolve Mulligans... 16. Resolve Character Setup Abilities." (p.43)
  Confidence: high
- Claim: The encounter deck is built by shuffling the encounter sets listed on the main scheme card's side 1A together with the obligation cards set aside in step 4.
  Source: src-003
  Evidence: "Create the Encounter Deck. Shuffle the encounter sets listed on side 1A of the main scheme card with the obligation cards set aside during setup step four to create the encounter deck." (p.43)
  Confidence: high
- Claim: Mulligan discards are not shuffled back into a player's deck at setup time.
  Source: src-003
  Evidence: "Resolve Mulligans. Each player may discard any number of cards from hand, and then draw up to their starting hand size. (Do not shuffle these discarded cards back into their decks at this time.)" (p.43)
  Confidence: high

## Open questions

- Player-count scaling adjustments (if any) live in the Learn to Play book/scenario inserts, not the Rules Reference glossary consulted this pass.