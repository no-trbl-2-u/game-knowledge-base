---
okf_version: 0.2
type: visual_reference
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
  - id: "src-101"
    title: "CMON product-page gameplay layout image"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game"
    asset_url: "https://www.cmon.com/wp-content/uploads/2023/06/gameplay-1.png"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; image/png; 659,031 bytes; source SHA-256 542bf3de8057f3f04c2d338a75fbc79ecdf48364ce41501b535a8edfaee9a34c."
  - id: "src-102"
    title: "CMON product-page monster-card image"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game"
    asset_url: "https://www.cmon.com/wp-content/uploads/2023/06/image_1__2_.png"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; image/png; 422,512 bytes; source SHA-256 f13d544c51a36d2cf60d4ffa71c798b44f9970f4a0469a285c1cbae9b1f9d0d9."
  - id: "src-103"
    title: "CMON product-page Action-card image"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game"
    asset_url: "https://www.cmon.com/wp-content/uploads/2023/06/image_2__2_.png"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; image/png; 2,684,174 bytes; source SHA-256 c27f2b9835ae0ef9279b185e53b1d402f555625e1821ba2f41dae800ddac7395."
  - id: "src-104"
    title: "CMON product-page trophy and Hunter Board image"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game"
    asset_url: "https://www.cmon.com/wp-content/uploads/2023/06/image_3-1.png"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; image/png; 2,726,821 bytes; source SHA-256 1d96fb8f87f8f5536e8ec3732bc5582f8a99148e244ddc8eaf9c0088e13efb98."
visual_references:
  - id: "vis-001"
    source_id: "src-101"
    file: "visuals/references/01-setup.webp"
    subject: setup
    capture_type: "materially reduced official product-page image"
    creator: "Unknown; published by CMON"
    rights_holder: "Unknown / respective rights holders"
    usage_basis: editorial-excerpt
    license: ""
    attribution: "Official CMON Bloodborne: The Card Game product-page gameplay image."
    demonstrates: "Five-player radial layout, personal boards, health dials, shared decks, dice, and token reserves."
    rationale: "Makes table footprint and shared-versus-personal component relationships visible without retaining a source-resolution replacement asset."
    sha256: "f09aa9ade757a61b7104bace3fd267712e82b5a0f597fe0f6a83df6163c94262"
  - id: "vis-002"
    source_id: "src-102"
    file: "visuals/references/02-loop.webp"
    subject: cards
    capture_type: "materially reduced official product-page image"
    creator: "Unknown; published by CMON"
    rights_holder: "Unknown / respective rights holders"
    usage_basis: editorial-excerpt
    license: ""
    attribution: "Official CMON Bloodborne: The Card Game monster-card image."
    demonstrates: "Monster health, die color, trophy icons, boss marking, and card-local ability hierarchy."
    rationale: "Proves that encounter cards carry rule-bearing text and exposes their information architecture, while showing only a small noncontiguous sample."
    sha256: "eeae3e6d843ba9263fa8e11549f11f5a5a9c9ba551973661bdba6e4639be2019"
  - id: "vis-003"
    source_id: "src-103"
    file: "visuals/references/03-tension.webp"
    subject: cards
    capture_type: "materially reduced official product-page image"
    creator: "Unknown; published by CMON"
    rights_holder: "Unknown / respective rights holders"
    usage_basis: editorial-excerpt
    license: ""
    attribution: "Official CMON Bloodborne: The Card Game Action-card image."
    demonstrates: "Melee, ranged, and instant-effect color coding plus interaction-oriented upgrade text."
    rationale: "Shows why Action and Upgrade cards belong in the governing-source ledger without preserving the complete card library."
    sha256: "58774eb07226f0764345e344cf9a02d38993b474a024a4f9827b8c22b8f48e62"
  - id: "vis-004"
    source_id: "src-104"
    file: "visuals/references/04-endgame.webp"
    subject: player-aid
    capture_type: "materially reduced official product-page image"
    creator: "Unknown; published by CMON"
    rights_holder: "Unknown / respective rights holders"
    usage_basis: editorial-excerpt
    license: ""
    attribution: "Official CMON Bloodborne: The Card Game trophy and Hunter Board image."
    demonstrates: "Three trophy tracks, collected and banked Blood Echo zones, round sequence, and matching trophy tokens."
    rationale: "Connects physical reward components to scoring and risk-state zones on the player board."
    sha256: "f808050188ce64f15ea81f6a2065e17be07b96667631acf906a776f2cc8213f2"
contact_sheet: "visuals/contact-sheet.webp"
contact_sheet_sha256: "01e4a371202e4e78128a678d84687b90010ad02b76f2d43b3124db66d616a036"
confidence: high
status: needs_followup
---

# Visual reference packet

- Claim: All four retained references are materially reduced transforms of distinct official CMON product-page assets; none is a SomberSoft analytical diagram.
  Source: src-101, src-102, src-103, src-104
  Evidence: "Each source asset returned HTTP 200 and has a preserved source hash; each local WebP has a distinct derivative hash and was visually audited in the contact sheet."
  Confidence: high

- Claim: The packet covers setup, encounter anatomy, Action-card anatomy, and reward/player-board relationships without including Hunter's Nightmare expansion material.
  Source: src-101, src-102, src-103, src-104
  Evidence: "The source assets appear on CMON's standalone product page and show no Rune or Death Token expansion components."
  Confidence: high
