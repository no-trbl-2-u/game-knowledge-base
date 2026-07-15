---
okf_version: 0.2
type: visual_reference
game:
  title: "Game title"
  slug: "game-slug"
  bgg_id: null
  publisher: "Publisher"
  year: null
  weight: null
  edition: "Edition"
scope: "base game"
mechanics: []
sources:
  - id: "src-001"
    title: "Source title"
    url: "https://landing-page.example/"
    asset_url: "https://asset.example/image.jpg"
    kind: image
    provenance: official
    retrieved_at: "YYYY-MM-DD"
    notes: "Where the image came from and why it is retained."
visual_references:
  # Real packets require 4–8 entries. This template shows one entry shape.
  - id: "vis-001"
    source_id: "src-001"
    file: "visuals/references/01-subject.webp"
    subject: other
    capture_type: official
    creator: "Creator"
    rights_holder: "Rights holder"
    usage_basis: editorial-excerpt
    license: ""
    attribution: "Attribution or source locator"
    demonstrates: "The visual-design fact this reference helps an agent inspect."
    rationale: "Why this reduced local excerpt is necessary for private design analysis."
    sha256: "replace-with-64-lowercase-hex-characters"
contact_sheet: "visuals/contact-sheet.webp"
contact_sheet_sha256: "replace-with-64-lowercase-hex-characters"
confidence: low
status: draft
---

# Visual reference packet

## Curation notes

Open the contact sheet first. Explain why each reference belongs in the packet.

## Copyright and provenance

State ownership, transformation, use restrictions, and removal-on-request policy.
