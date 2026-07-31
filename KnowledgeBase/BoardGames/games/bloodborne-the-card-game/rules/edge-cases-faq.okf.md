---
okf_version: 0.2
type: rule_category
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
    notes: "Dynamic proxy receipt: HTTP 200, 4,979 bytes, SHA-256 fc29588d8a3474e2d817ef081bc84ba9d14b57b17cdbd38c288f644d1ba6e43c; current Rules & More lists Rulebook, 79.01 MB."
  - id: "src-002"
    title: "CMON — Bloodborne: The Card Game Rulebook"
    url: "https://cmon-files.s3.amazonaws.com/pdf/assets_item/resource/43/Bloodborne_Rulebook__2_.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Official 2016 CMON S3 object; 92,484,273 bytes; 16 pages; SHA-256 e5010bc06faf0a4fc05b70228836401825a123c4dad0459233edcd318b664b38."
confidence: high
status: needs_followup
---

# Edge cases and unresolved FAQ authority

- Claim: Four-player encounters receive one extra Blood Echo and five-player encounters receive two; this applies to Monsters, Bosses, and the Final Boss.
  Source: src-002
  Evidence: "Rulebook pp. 6–7 and 14."
  Confidence: high

- Claim: Damage cannot remove more Echoes than remain on the encounter, so later attacks can receive fewer or no Echoes.
  Source: src-002
  Evidence: "Rulebook p. 10, Important note in Hunters Attack."
  Confidence: high

- Claim: Killing an encounter during Instant resolution skips the next three combat steps, but the round still reaches Hunter's Dream and end-of-round cleanup.
  Source: src-002
  Evidence: "Rulebook p. 10 says to skip the next three steps; the sequence on p. 9 places Dream and end-of-round after those steps."
  Confidence: high

- Claim: A Hunter who played an Instant attack does not attack again during the ordinary Hunters Attack step.
  Source: src-002
  Evidence: "Rulebook p. 10 Instant example and p. 11 Hunters Attack example."
  Confidence: high

- Claim: A surviving Boss neither escapes nor refreshes lost Echoes, and the dungeon does not advance until that Boss dies.
  Source: src-002
  Evidence: "Rulebook p. 11 under Fighting Bosses and p. 14 under Reveal the Next Monster."
  Confidence: high

- Claim: A Hunter entering the Dream can still die from the halved, rounded-down Monster attack; if dead after having played Dream, they retain the Dream-based used-card recovery exception.
  Source: src-002
  Evidence: "Rulebook pp. 12 and 14 under Hunter's Dream, Dead Hunters, and Hunter Death."
  Confidence: high

- Claim: The current dynamic CMON page proxy exposes the official Rulebook at 79.01 MB, while a closed publisher-wide FAQ, errata, clarification, and support inventory remains unverified.
  Source: src-001
  Evidence: "The dated proxy receipt shows Rules & More → Rulebook → 79.01 MB; this changing product-page surface is not an exhaustive publisher-wide support index and does not prove universal FAQ/errata absence."
  Confidence: medium

## Open authority questions

Complete card-local effects remain outside this corpus. In particular, Monster reveal/escape/ongoing abilities, Upgrade effects, and five Final Boss global modifiers can change timing, damage, state, or victory incentives. They are not silently treated as covered by this rulebook summary.
