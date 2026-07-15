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
  - id: "src-003"
    title: "Marvel Champions Rules Reference v1.5"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/b6/30/b630ddfe-e745-435b-a284-572dd510e15d/mc_rulesreference_v15-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Audit 2026-07-15: extraction retried with pypdf (56 pages), succeeded. Player Phase, Player Turn, and Villain Phase glossary entries are the cited sections."
confidence: high
status: verified
---

## Summary

A round alternates a player phase (each player takes one turn, in player order) and a villain phase (threat placement, villain/minion activation, encounter card dealing and resolution).

## Source-backed facts

- Claim: During a turn, a player may perform any of six turn options in any order, repeating all but "change form" as many times as they can afford.
  Source: src-003
  Evidence: "During their turn, a player may perform the following options, in any order. Each option, except 'change form,' may be performed as many times as the player is able... Change form... Play an ally, upgrade, or support card... Use their alter-ego's basic recovery... or their hero's basic attack or thwart power... Use an ally card... Trigger an 'Action' card ability... Ask another player to trigger an 'Action' ability..." (p.28)
  Confidence: high
- Claim: "Change form" (hero ↔ alter-ego) may only be used once per turn.
  Source: src-003
  Evidence: "Change form from hero to alter-ego, or from alter-ego to hero. This option may only be performed once each turn." (p.28)
  Confidence: high
- Claim: After all players take their turn, the player phase ends with players discarding down or drawing up to hand size and readying all their cards.
  Source: src-003
  Evidence: "After each player has taken a turn, the players discard down or draw up to their hand size and ready all cards they control." (p.28)
  Confidence: high
- Claim: The villain phase is a fixed 7-step sequence: place accelerated threat, each player is attacked/schemed against in player order, deal encounter cards (plus one per hazard icon in play), reveal and resolve encounter cards in player order, pass the first player token, then end phase/round effects resolve.
  Source: src-003
  Evidence: "1. Place the amount of threat indicated in the main scheme's acceleration field... 2. In player order, each player resolves the following: a. The villain activates against the player. b. Each minion engaged with the player activates... 3. Deal one encounter card to each player. Deal one additional card for each hazard symbol... 4. The first player reveals each of their encounter cards... 5. Pass the first player token... 6. Any effects that last 'until the end of the [villain] phase'... end. 7. Resolve any 'when/after the villain phase ends'... effects." (p.39)
  Confidence: high

## Open questions

- None outstanding for the base round/turn/villain-phase sequence; scenario-specific modifications are out of scope for the base glossary.