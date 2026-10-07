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
  - id: "src-005"
    title: "Days of Wonder FAQ/downloads portal (2015-04-03 archive capture)"
    url: "http://web.archive.org/web/20150403062225/http://www.daysofwonder.com/shadowsovercamelot/en/content/faq/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-10-07"
    notes: "HTTP 200; 22,104 bytes, retrieved via Wayback after the prior pass's 429 rate-limit cleared. Lists the download links then offered for Rules book, Quests book, FAQ, Merlin's Company Rules, and Bedivere's coat of arms across English/French/German/Italian/Korean. The FAQ link (sc_faq_en.pdf) is byte-identical (SHA-256 2f4ab8d1756e5743dd7cf12802bebb371dcf08141b448d9867adce5ca7a90709) to already-acquired src-002. The English Rules-book link is sc_rules_2012_en.pdf, not a plain sc_rules_en.pdf; German/Italian/Korean still used plain-named rules files at this date."
  - id: "src-006"
    title: "Archived pre-2015 English reprint rulebook (2012 edition line)"
    url: "http://web.archive.org/web/20150403062225/http://cdn1.daysofwonder.com/shadowsovercamelot/en/img/sc_rules_2012_en.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-07"
    notes: "HTTP 200; 6,252,777 bytes; 20 pages; SHA-256 ec846e47b52bc4e6af887e51cacfde2bb707e7ab7bbcee79561a383bd6369aca. PDF title 'SOC rulebook EN reprint 2012:TTR2 europe rules EN'; CreationDate 2012-04-23, ModDate 2013-02-07. Distinct file from src-003 (ModDate 2015-05-18, different hash): an earlier revision of the same 2012-reprint line, not the original 2005 release."
followups:
  - source_id: "src-004"
    url: "https://ncdn0.daysofwonder.com/shadowsovercamelot/en/img/sc_rules_en.pdf"
    failure: blocked
    fallback: "2005 Book of Quests and FAQ 1.0 govern acquired release law; 2015 rulebook is labeled comparison only."
    retry_needs: alternate_source
    notes: "Direct CDN and www requests returned 403; exact Wayback CDX URL query returned []. Need immutable original Rules booklet bytes and any release player aid/card reference. Retried 2026-09-04 (librarian): CDN still HTTP 403, and the Wayback availability API returned an empty `archived_snapshots` object for this exact asset URL, independently confirming the earlier empty CDX result. Retried 2026-10-07 (librarian): fetched the historical downloads portal (src-005), a 2015-04-03 capture — it already linked the English Rules book as sc_rules_2012_en.pdf, not a plain sc_rules_en.pdf, while German/Italian/Korean still used plain-named files. This corroborates (does not prove) that the English release file had already been replaced site-wide by 2015, consistent with the empty CDX/404 result; it is not evidence of permanent absence. retry_needs changed from wayback_snapshot to alternate_source: no archive capture of this exact filename exists at any date tried, so a third-party 2005-era mirror or scan is the next retrievable document."
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

- Claim: By 2015-04-03, the official downloads portal's complete FAQ/support inventory was: Rules book, Quests book, FAQ, Merlin's Company Rules, and Bedivere's coat of arms, across English/French/German/Italian/Korean. This closes the "complete historical official web FAQ/support inventory" followup for that date.
  Source: src-005
  Evidence: Archived page lists exactly these five document families with per-language file-size labels and direct PDF links.
  Confidence: high

## Exact residual help

- Claim: Closure requires document sources only — a lawful nonreplacement English 2005 first-retail component inventory document; immutable original Rules/Book of Quests/aids with publisher chain; and licensed base-only card/loyalty/quest/board/die identity/text/face denominators. Physical-copy acquisition and box/SKU/lot inspection are out of scope for this corpus; where no lawful document source exists, the denominator stays permanently `UNKNOWN` and these records stay `needs_followup` as an accepted terminal state.
  Source: src-001, src-002, src-003, src-004, src-005, src-006
  Evidence: These are the open authority classes above.
  Confidence: high

- Claim: Bathcat authored but does not approve, mark ready, promote, or merge; a wholly fresh Mennonite must audit the exact PR head and T retains final authority.
  Source: src-004
  Evidence: No self-approval or promotion artifact is present; disposition remains needs_followup.
  Confidence: high
