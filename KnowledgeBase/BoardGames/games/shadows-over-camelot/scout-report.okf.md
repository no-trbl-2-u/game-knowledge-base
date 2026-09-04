---
okf_version: 0.2
type: scout_report
game:
  title: "Shadows over Camelot"
  slug: "shadows-over-camelot"
  bgg_id: 15062
  publisher: "Days of Wonder"
  year: 2005
  weight: null
  edition: "English 2005 first/release retail base game; release rulebook bytes not recovered"
scope: "English 2005 first/release retail base game only; 2015/reprint rules are later comparison; Merlin's Company, Sir Bedivere/promos, translations, variants, replacements, and digital implementations excluded"
mechanics: ["cooperative-game", "dice-rolling", "hand-management", "hidden-information", "semi-cooperative-game", "set-collection", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "Shadows over Camelot Book of Quests"
    url: "https://ncdn0.daysofwonder.com/shadowsovercamelot/en/img/sc_quests_en.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "2005; 16 pages; SHA-256 2e96d255acd1ed17f0a345608531aa45e9f4aa0d180625b9ab0f7e17d0c0cde9."
  - id: "src-002"
    title: "Shadows over Camelot FAQ 1.0"
    url: "https://cdn.svc.asmodee.net/production-daysofwonder/uploads/2024/07/sc_faq_en.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "2005-10-12; 6 pages; SHA-256 2f4ab8d1756e5743dd7cf12802bebb371dcf08141b448d9867adce5ca7a90709."
  - id: "src-003"
    title: "Later official English rulebook"
    url: "https://ncdn0.daysofwonder.com/shadowsovercamelot/en/img/sc_rules_2015_en.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "2012/2015 reprint comparison; 20 pages; SHA-256 1e3f5abb3938be9c7ede217405f96b750a92234c2e2ad962d9fff77408a3d950."
  - id: "src-004"
    title: "Retired original English rulebook locator"
    url: "https://ncdn0.daysofwonder.com/shadowsovercamelot/en/img/sc_rules_en.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 403; www host also 403; exact CDX query empty."
followups:
  - source_id: "src-004"
    url: "https://ncdn0.daysofwonder.com/shadowsovercamelot/en/img/sc_rules_en.pdf"
    failure: blocked
    fallback: "2005 Book of Quests and FAQ 1.0 govern acquired release law; 2015 rulebook is labeled comparison only."
    retry_needs: wayback_snapshot
    notes: "Direct CDN and www requests returned 403; exact Wayback CDX URL query returned []. Need immutable original Rules booklet bytes and any release player aid/card reference. Retried 2026-09-04 (librarian): CDN still HTTP 403, and the Wayback availability API returned an empty `archived_snapshots` object for this exact asset URL, independently confirming the earlier empty CDX result. No archive capture of this PDF exists, so retry_needs `wayback_snapshot` is not satisfiable for this URL; a future pass must find an alternate immutable copy of the 2005 Rules booklet instead."
  - source_id: null
    url: "https://www.daysofwonder.com/shadowsovercamelot/en/content/faq"
    failure: blocked
    fallback: "Official FAQ 1.0 PDF acquired directly from Asmodee CDN."
    retry_needs: wayback_snapshot
    notes: "Direct/browser Access Denied; text-proxy retrieval aid reports current 404. Need complete historical official web FAQ/support inventory and explicit version bridge. Retried 2026-09-04 (librarian): live URL still HTTP 403, but the Wayback availability API CONFIRMS a usable capture exists — http://web.archive.org/web/20150403062225/http://www.daysofwonder.com/shadowsovercamelot/en/content/faq/ (status 200, timestamp 20150403062225). Retrieval of that capture was not completed this pass: web.archive.org returned HTTP 429 rate-limiting to both curl and a real browser session throughout the run. This is an environmental throttle, not a missing document. Next pass should fetch that exact capture URL directly; retry_needs `wayback_snapshot` is correct and now has a concrete target."
  - source_id: null
    url: "lawful immutable English 2005 first-retail component inventory document"
    failure: not_found
    fallback: "Later 2015 inventory is retained only as a provisional lead; 2005 review supplies secondary observations."
    retry_needs: alternate_source
    notes: "Need a lawful line-by-line nonreplacement first-retail component inventory document. Physical-copy acquisition and box/SKU/lot inspection are out of scope for this corpus; absent such a document source the first-print denominator stays permanently UNKNOWN."
  - source_id: null
    url: "authority://licensed-base-component-face-manifest"
    failure: other
    fallback: "Framework and grouped classes from acquired official documents."
    retry_needs: alternate_source
    notes: "Need complete base-only identities/text/faces/mappings for cards, coats, boards, swords, D8, relics, and miniatures without replacement-quality mirroring."
confidence: medium
status: needs_followup
---

# Remediation disposition

- Claim: This packet is **needs_followup**, OPEN+DRAFT+DO NOT MERGE; no rules/factual percentage or composite is lawful because first-print physical, release Rules/support, and governing face/text denominators remain open.
  Source: src-001, src-002, src-003, src-004
  Evidence: Two release-era official PDFs are acquired, but original Rules bytes, first-retail inspection, historical support inventory, and complete local-text mappings are absent; later inventory is not release proof.
  Confidence: high

## Provisional later-inventory arithmetic

- Claim: The later rulebook lists 168 cards as 84 White + 76 Black + 8 Loyalty; White is 69 Standard + 15 Special, Black is 64 Standard + 12 Special. This grouped class arithmetic is a **later reprint lead**, not a first-release denominator.
  Source: src-003
  Evidence: Later rulebook p. 3 component spread.
  Confidence: high

- Claim: The later rulebook lists 30 miniatures as 12 Siege Engines + 3 relics + 4 Saxons + 4 Picts + 7 Knights; other listed units under the declared physical-object convention are 1 master board + 3 double-sided Quest boards + 16 double-sided swords + 7 coats + 7 d6 + 1 d8 + 2 booklets = 37, yielding 168 + 30 + 37 = **235 provisional listed physical units**. The online access number is printed on the Rules and is not counted as a separate object; insert/tray and faces/sides are excluded.
  Source: src-003
  Evidence: Later rulebook p. 3 exact printed rows; arithmetic was independently executed in the remediation worktree.
  Confidence: low

## Governing-class ledger

- Claim: Acquired framework covers Rules as later comparison; 2005 Book of Quests; master-board Camelot/Round Table/Siege framework; Black Knight, Pict, Saxon, Grail, Excalibur, Lancelot then Dragon Quest frameworks; seven named base Knights and powers; White regular/special and Black standard/special flows; Loyalty/Traitor procedure; Fight/Grail/Merlin/special flows; swords and color sides; siege/Pict/Saxon pieces; relics; life/hand/quest placement; and revealed-Traitor play.
  Source: src-001, src-002, src-003
  Evidence: Book of Quests pp. 2-16, FAQ sections I-IX excluding Sir Bedivere, and later rulebook pp. 3-19.
  Confidence: medium

- Claim: Complete quantity/identity/text/mapping/face/side/surface denominators remain **UNKNOWN** for the first-print Rules/aids; every card identity and duplicate allocation; seven coat/figure/power mappings as physically printed; every main/Quest board face; sword faces; D8 face map; relic/miniature printing; and release support corpus.
  Source: src-001, src-002, src-003, src-004
  Evidence: Acquired 2005 texts explain classes and many identities but do not establish a licensed exhaustive physical face manifest; the only complete inventory spread acquired is later.
  Confidence: high

## Exact residual help

- Claim: Closure requires document sources only — a lawful nonreplacement English 2005 first-retail component inventory document; immutable original Rules/Book of Quests/aids with publisher chain; complete historical official FAQ/web support inventory and version bridge; and licensed base-only card/loyalty/quest/board/die identity/text/face denominators. Physical-copy acquisition and box/SKU/lot inspection are out of scope for this corpus; where no lawful document source exists, the denominator stays permanently `UNKNOWN` and these records stay `needs_followup` as an accepted terminal state.
  Source: src-001, src-002, src-003, src-004
  Evidence: These are the open authority classes above.
  Confidence: high

- Claim: Bathcat authored but does not approve, mark ready, promote, or merge; a wholly fresh Mennonite must audit the exact PR head and T retains final authority.
  Source: src-004
  Evidence: No self-approval or promotion artifact is present; disposition remains needs_followup.
  Confidence: high
