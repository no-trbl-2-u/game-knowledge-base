---
okf_version: 0.2
type: rule_category
game:
  title: "Unmatched: Battle of Legends, Volume One"
  slug: "unmatched-battle-of-legends-volume-one"
  bgg_id: null
  publisher: "Restoration Games"
  year: 2019
  weight: null
  edition: "Battle of Legends, Volume One"
scope: "base game"
mechanics: [card-play-conflict-resolution, grid-movement, hand-management, multi-use-cards, variable-player-powers]
sources:
  - id: "src-001"
    title: "Unmatched: Battle of Legends, Vol. 1 — Restoration Games product page"
    url: "https://restorationgames.com/shop/battle-of-legends-vol-1-unmatched/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-09-03"
    notes: "Official product identity and publisher description."
  - id: "src-002"
    title: "Unmatched: Battle of Legends, Volume 1 official rules"
    url: "https://restorationgames.com/wp-content/uploads/2019/07/UM-Battle_of_Legends_vol1_Rules-two-page.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-09-03"
    notes: "Official nine-page rules PDF."
  - id: "src-003"
    title: "(Un)Match This — SPACE-BIFF!"
    url: "https://spacebiff.com/2019/10/10/unmatched/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-09-03"
    notes: "Independent review."
  - id: "src-004"
    title: "Unmatched: Battle of Legends, Vol. 1 product image"
    url: "https://restorationgames.com/wp-content/uploads/2019/07/UM_BoLv1_primary-900x900-1.png"
    asset_url: "https://restorationgames.com/wp-content/uploads/2019/07/UM_BoLv1_primary-900x900-1.png"
    kind: image
    provenance: official
    retrieved_at: "2026-09-03"
    notes: "Official product image."
  - id: "src-005"
    title: "Unmatched: Battle of Legends, Vol. 1 art detail image"
    url: "https://restorationgames.com/wp-content/uploads/2019/07/UM_BoLv1_ArtFocus1.png"
    asset_url: "https://restorationgames.com/wp-content/uploads/2019/07/UM_BoLv1_ArtFocus1.png"
    kind: image
    provenance: official
    retrieved_at: "2026-09-03"
    notes: "Official art detail image."
confidence: high
status: verified
---

## Edge-case findings

- Claim: A maneuver that needs a card after the deck is empty does not reshuffle the discard pile; instead, each fighter immediately takes two damage.
  Source: src-002
  Evidence: The drawing-cards rule says that when the deck is empty the fighters are exhausted, and a required draw while exhausted causes each fighter to take two damage rather than reshuffling.
  Confidence: high

- Claim: Effects that would resolve at the same time give the defender priority, unless another rule specifies otherwise.
  Source: src-002
  Evidence: The combat procedure states that the defender’s effect resolves first when two effects would appear to resolve at the same time.
  Confidence: high

- Claim: After-combat effects can still resolve when a fighter is defeated during combat, unless the defeat triggers the end of the game.
  Source: src-002
  Evidence: The combat procedure expressly preserves played-card after-combat effects unless the defeat ends the game.
  Confidence: high

## Boundary

The packet records only edge cases explicitly present in the retrieved Volume One rules PDF. It does not infer later FAQ or expansion exceptions.
