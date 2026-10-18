---
okf_version: 0.2
type: sources
game:
  title: "War of the Ring: Second Edition"
  slug: "war-of-the-ring"
  bgg_id: 115746
  publisher: "Ares Games"
  year: 2012
  weight: null
  edition: "English Second Edition, 2012 release"
scope: "base game"
mechanics: [action-selection, area-majority-influence, area-movement, campaign-game, card-play-conflict-resolution, dice-rolling, hand-management, hidden-information, variable-setup]
sources:
  - id: "src-001"
    title: "War of the Ring – Second Edition (English Rulebook) — Ares Games on Issuu"
    url: "https://issuu.com/aresgames/docs/wotr001-rulebook_en_web"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-18"
    notes: "Official Ares Games Srl account; 48-page English rulebook publication."
  - id: "src-002"
    title: "War of the Ring Board Game Review — Meeple Mountain"
    url: "https://www.meeplemountain.com/reviews/war-of-the-ring-2nd-edition/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-18"
    notes: "Independent review."
  - id: "src-003"
    title: "War of the Ring Second Edition Review — Gaming Respawn"
    url: "https://gamingrespawn.com/board-game-reviews/22702/war-ring-second-edition-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-18"
    notes: "Independent review."
  - id: "src-004"
    title: "War of the Ring review gameplay image 1 — Gaming Respawn"
    url: "https://i0.wp.com/gamingrespawn.com/wp-content/uploads/2017/05/pic1211010.jpg?fit=960%2C675&ssl=1"
    kind: other
    provenance: secondary
    retrieved_at: "2026-10-18"
    notes: "Review image source; derivative retained only in the visual packet."
  - id: "src-005"
    title: "War of the Ring review gameplay image 2 — Gaming Respawn"
    url: "https://i0.wp.com/gamingrespawn.com/wp-content/uploads/2017/05/pic1186334_lg.jpg?resize=1024%2C683&ssl=1"
    kind: other
    provenance: secondary
    retrieved_at: "2026-10-18"
    notes: "Review image source; derivative retained only in the visual packet."
  - id: "src-006"
    title: "War of the Ring review gameplay image 3 — Gaming Respawn"
    url: "https://i0.wp.com/gamingrespawn.com/wp-content/uploads/2017/05/pic1174516_lg.jpg?resize=1024%2C768&ssl=1"
    kind: other
    provenance: secondary
    retrieved_at: "2026-10-18"
    notes: "Review image source; derivative retained only in the visual packet."
  - id: "src-007"
    title: "War of the Ring review gameplay image 4 — Gaming Respawn"
    url: "https://i0.wp.com/gamingrespawn.com/wp-content/uploads/2017/05/pic1186336_lg.jpg?resize=1024%2C683&ssl=1"
    kind: other
    provenance: secondary
    retrieved_at: "2026-10-18"
    notes: "Review image source; derivative retained only in the visual packet."
  - id: "src-008"
    title: "War of the Ring (Second Edition) — Fuzzy Llama Reviews"
    url: "https://fuzzyllamareviews.com/2019/09/27/war-of-the-ring-second-edition/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-18"
    notes: "Independent review."
confidence: high
status: verified
---

## Source register

The exact retrieval receipts for these sources are stored in the sibling `evidence.json` file. Static image derivatives are hashed in `visuals/packet.okf.md`; the full rulebook is not copied into the repository.

- Claim: The official rulebook source is publisher-controlled Ares Games material, while the reception sources are independent publications on three separate review domains.
  Source: src-001, src-002, src-003, src-008
  Evidence: The Issuu record identifies the Ares Games Srl publisher account; the review receipts resolve to Meeple Mountain, Gaming Respawn, and Fuzzy Llama Reviews.
  Confidence: high

- Claim: The visual packet uses four distinct review-image URLs and four reduced WebP derivatives rather than retaining source-resolution promotional art.
  Source: src-004, src-005, src-006, src-007
  Evidence: Each receipt records a distinct Gaming Respawn image URL, HTTP 200 response, byte length, and SHA-256; the packet records derivative hashes.
  Confidence: high
