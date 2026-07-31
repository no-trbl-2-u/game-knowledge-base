---
okf_version: 0.2
type: visual_reference
game:
  title: "Nemesis: Lockdown"
  slug: "nemesis-lockdown"
  bgg_id: 310100
  publisher: "Awaken Realms"
  year: 2022
  weight: null
  edition: "English 2022 first-release retail core box; 2021-dated base rulebook bytes plus 2022-03-25 FAQ"
scope: "English first-release retail core box only; crowdfunding bundles, Stretch Goals, expansions, add-ons, compatibility content, translations, reprints, and digital adaptation excluded"
mechanics: ["action-points", "cooperative-game", "dice-rolling", "hand-management", "hidden-information", "modular-board", "semi-cooperative-game", "solo-solitaire-game", "variable-player-powers"]
sources:
  - id: "src-001"
    title: "Nemesis: Lockdown Corebox Rulebook"
    url: "https://awakenrealms.com/images/download/Nemesis_Lockdown/ENG/Nemesis_LD_Rulebook_280x280mm_bleed3mm-32-pages.pdf"
    asset_url: "https://awakenrealms.com/images/download/Nemesis_Lockdown/ENG/Nemesis_LD_Rulebook_280x280mm_bleed3mm-32-pages.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "6,075,325 bytes; SHA-256 d8a939c54552e640b1d0efa1b7552a81e8b4205f04029634eb7f58d10ff2ef43."
  - id: "src-002"
    title: "Nemesis: Lockdown Room Sheet"
    url: "https://awakenrealms.com/images/download/Nemesis_Lockdown/ENG/Nemesis_LD_Room_Sheet_280x280mm_bleed3mm-4-pages.pdf"
    asset_url: "https://awakenrealms.com/images/download/Nemesis_Lockdown/ENG/Nemesis_LD_Room_Sheet_280x280mm_bleed3mm-4-pages.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "8,062,167 bytes; SHA-256 6a88875bf52a04c681e373a8cceb8c676130ede505e1710ea5901494753294d4."
visual_references:
  - id: "vis-001"
    source_id: "src-001"
    file: "visuals/references/01-setup.webp"
    subject: setup
    capture_type: "editorial excerpt: rulebook p. 6 crop x60 y180 w700 h520 at 100 dpi"
    creator: "Awaken Realms rulebook team; derivative by SomberSoft"
    rights_holder: "Awaken Realms / respective creators"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no license inferred"
    attribution: "Reduced excerpt from official Nemesis: Lockdown Corebox Rulebook, p. 6."
    demonstrates: "setup iconography and procedural hierarchy"
    rationale: "300 px reduced crop is useful for private layout analysis, omits most of the page, and cannot replace the rulebook."
    sha256: "a7f740515e5fd6965bff2dc8381c4f6119797f2ef7f20ea017374ea3c69210b1"
  - id: "vis-002"
    source_id: "src-001"
    file: "visuals/references/02-loop.webp"
    subject: player-aid
    capture_type: "editorial excerpt: rulebook p. 13 crop x390 y80 w700 h520 at 100 dpi"
    creator: "Awaken Realms rulebook team; derivative by SomberSoft"
    rights_holder: "Awaken Realms / respective creators"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no license inferred"
    attribution: "Reduced excerpt from official Nemesis: Lockdown Corebox Rulebook, p. 13."
    demonstrates: "round and Event-phase hierarchy"
    rationale: "300 px reduced crop retains only overview-scale hierarchy and is below practical replacement readability."
    sha256: "0fe380ac6910104bcc5dcfc3ad4e9764d1dabfa4f1aeb5550f10a832bfca2fb4"
  - id: "vis-003"
    source_id: "src-001"
    file: "visuals/references/03-tension.webp"
    subject: decision-state
    capture_type: "editorial excerpt: rulebook p. 17 crop x40 y180 w700 h520 at 100 dpi"
    creator: "Awaken Realms rulebook team; derivative by SomberSoft"
    rights_holder: "Awaken Realms / respective creators"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no license inferred"
    attribution: "Reduced excerpt from official Nemesis: Lockdown Corebox Rulebook, p. 17."
    demonstrates: "exploration-token decision presentation"
    rationale: "Noncontiguous 300 px crop supports visual hierarchy analysis without preserving replacement-quality rules text."
    sha256: "596d788bd17b216ffe27a106cdcfa9338fc2d72b5419863bc7e59b79329d905e"
  - id: "vis-004"
    source_id: "src-002"
    file: "visuals/references/04-endgame.webp"
    subject: board-state
    capture_type: "editorial excerpt: Room Sheet p. 4 crop x370 y480 w700 h520 at 100 dpi"
    creator: "Awaken Realms rulebook team; derivative by SomberSoft"
    rights_holder: "Awaken Realms / respective creators"
    usage_basis: editorial-excerpt
    license: "All rights reserved; no license inferred"
    attribution: "Reduced excerpt from official Nemesis: Lockdown Room Sheet, p. 4."
    demonstrates: "summary icon and goal hierarchy"
    rationale: "300 px crop is a small nonreplacement excerpt, distinct from the rulebook panels and free of SG/expansion content."
    sha256: "d18bad6471f9a0cb79f192e6316d4f87560f69ddab284fdcb83eb14d948f8f6e"
contact_sheet: "visuals/contact-sheet.webp"
contact_sheet_sha256: "0c4ddef375fc08651a90b86a7bd41eaa2033a3b3f23bde99885b0ba65475ec9c"
confidence: medium
status: needs_followup
---

# Visual Reference Packet

- Claim: Four noncontiguous excerpts are 300 × 222 px each and the contact sheet is 600 × 500 px; all metadata was stripped and WebP bytes replaced the four canonical synthetic paths in place.
  Source: src-001, src-002
  Evidence: Poppler 25.06.0 rendered 100 dpi; FFmpeg 7.1.2 used the declared crops, `scale=300:-2:flags=lanczos`, `-map_metadata -1`, `libwebp -quality 68`; contact used white padding and quality 72.
  Confidence: high

- Claim: Visual inspection found four distinct, uncorrupted target-core excerpts: setup/intruder symbols, Event flow, exploration effects, and Room-Sheet summary/goals; no Stretch Goals, Chytrids, expansion, promotional, or digital-adaptation leakage appears, and paragraph text is below practical replacement readability.
  Source: src-001, src-002
  Evidence: Contact sheet inspected at 600 × 500 after generation; only headings/icons and coarse hierarchy are comfortably legible.
  Confidence: high

- Claim: These are rights-restricted editorial derivatives, not licensed replacements; source availability does not grant reuse rights.
  Source: src-001, src-002
  Evidence: Official PDFs contain credits but no open-content license; each rationale limits the analytical excerpt.
  Confidence: high
