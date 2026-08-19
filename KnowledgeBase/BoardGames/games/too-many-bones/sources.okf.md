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
  - id: "src-006"
    title: "Too Many Bones Rulebook (v2.2)"
    url: "https://www.dropbox.com/scl/fi/mwe9nv6bb68gtkkhgx04o/TMB-Rulebook.pdf?rlkey=1y2zxkqw7mpi98aljmaoipjzq&e=1&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Official rulebook, retrieved via the publisher support page link (chiptheorygames.com/pages/support/too-many-bones) and text-extracted with curl + pypdf during the 2026-08-19 librarian pass. 32 pages, versioned v2.2 on the cover; battle-sequence diagram internally marked v2.3."
  - id: "src-007"
    title: "Chip Theory Games — Too Many Bones FAQs (support solutions index)"
    url: "https://tmbsupport.chiptheorygames.com/support/solutions/33000133540"
    kind: faq
    provenance: official
    retrieved_at: "2026-08-19"
    notes: "Support-portal solutions index; article titles confirm FAQ topic coverage (battle timing, Baddie skills, Tyrants, character-specific rulings) but individual article bodies were not retrieved in this pass — the index lists titles/navigation only."
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
confidence: high
status: needs_followup
last_verified: "2026-08-19"
---

## Source register

The official rulebook (src-006) is now the strongest accessible source for rules claims. BGG remains the discovery and score source but stays blocked. The secondary rules page and two reviews remain useful for reception evidence.

## Retrieval failures

- Claim: Direct BGG XML and HTML retrieval was unavailable.
  Source: src-001
  Evidence: Automated requests returned HTTP 401/403 during this run.
  Confidence: high
  Note (2026-08-19 librarian pass): retried via WebFetch; still HTTP 403. Matches the systemic BGG block documented across the corpus (see `marvel-champions-the-card-game/scout-report.okf.md`) rather than a game-specific issue.
- Claim: The publisher support page was rate-limited during direct retrieval.
  Source: src-002
  Evidence: Automated request returned HTTP 429; search results exposed the product description.
  Confidence: high
  Resolution (2026-08-19 librarian pass): retried via WebFetch; the support page now returns HTTP 200 and links the official rulebook (src-006) and FAQ index (src-007). Followup resolved.