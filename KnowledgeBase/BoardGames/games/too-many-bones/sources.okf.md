---
okf_version: 0.2
type: sources
game:
  title: "Too Many Bones"
  slug: "too-many-bones"
  bgg_id: 192135
  publisher: "Chip Theory Games"
  year: 2017
  weight: null
  edition: "English base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, hand-management, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Too Many Bones"
    url: "https://boardgamegeek.com/boardgame/192135/too-many-bones"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-19"
    notes: "Discovery and ranking source; direct page blocked."
  - id: "src-002"
    title: "Chip Theory Games — Too Many Bones"
    url: "https://chiptheorygames.com/products/too-many-bones"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-19"
    notes: "Official product page."
  - id: "src-003"
    title: "UltraBoardGames — Too Many Bones rules"
    url: "https://www.ultraboardgames.com/too-many-bones/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-19"
    notes: "Secondary rules summary."
  - id: "src-004"
    title: "Brawling Brothers — Too Many Bones review"
    url: "https://brawlingbrothers.com/too-many-bones-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-19"
    notes: "Review source."
  - id: "src-005"
    title: "Polyhedron Collider — Too Many Bones review"
    url: "https://www.polyhedroncollider.com/2019/07/too-many-bones-review.html"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-19"
    notes: "Review source."
  - id: "src-006"
    title: "Too Many Bones Rulebook v2.2 (Chip Theory Games support, Dropbox-hosted)"
    url: "https://www.dropbox.com/scl/fi/mwe9nv6bb68gtkkhgx04o/TMB-Rulebook.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-05"
    notes: "32-page official base-game rulebook v2.2, linked from the Chip Theory Games support page; downloaded and text-extracted with pypdf on the librarian retry pass. Prose pages (setup, overview) extract cleanly; the Baddie-chip and dice-icon component-list pages extract with interleaved icon glyphs and are not reliable for precise numeric claims without further review."
confidence: medium
status: needs_followup
---

## Source register

The official publisher page and the official rulebook (src-006) are the strongest accessible sources. BGG is the discovery and score source. The secondary rules page and two reviews provide provisional extraction and reception evidence pending fuller rulebook coverage.

## Retrieval failures

- Claim: Direct BGG XML and HTML retrieval was unavailable.
  Source: src-001
  Evidence: Automated requests returned HTTP 401/403 during this run.
  Confidence: high
- Claim: The publisher support page and product page were rate-limited during direct retrieval.
  Source: src-002
  Evidence: Automated request returned HTTP 429; search results exposed the product description.
  Confidence: high