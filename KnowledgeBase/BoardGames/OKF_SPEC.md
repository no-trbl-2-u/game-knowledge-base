# OKF Specification — Board Game Research

OKF here means **Operational Knowledge File**: markdown documents with strict frontmatter, source-backed claims, confidence labels, and retrieval-friendly metadata.

This is a provisional SomberSoft format. If T defines another OKF standard, replace this file and migrate forward.

Current version: **0.2**. Every document in the corpus carries `okf_version: 0.2`; the validator (`scripts/validate-okf.mjs`) rejects anything else. 0.2 adds `mechanics`, `better_if_labels`, `game.weight`, and the `followups` block over 0.1.

## Required frontmatter

```yaml
---
okf_version: 0.2
type: game_index | sources | rule_category | reception | better_if | scout_report | visual_reference | pattern | operations | design_reference | digital_card_game_index | digital_card_sources | digital_card_glossary | digital_card_keyword | card_record
game:
  title: ""
  slug: ""
  bgg_id: null
  publisher: ""
  year: null
  weight: null        # BGG complexity weight (e.g. 3.80); null if unknown. Meaningful on game_index docs.
  edition: ""
scope: "base game | expansion | edition-specific | unknown"
mechanics: []          # REQUIRED on game docs — controlled slugs from the vocabulary below, e.g. [deck-building, hand-management]
better_if_labels: []   # REQUIRED on type: reception / better_if docs — labels from the better-if taxonomy below
sources:
  - id: "src-001"
    title: ""
    url: ""
    kind: publisher_page | rulebook_pdf | bgg_page | bgg_forum | review | video | faq | errata | other
    provenance: official | secondary | community | unknown
    retrieved_at: "YYYY-MM-DD"
    notes: ""
confidence: high | medium | low
status: draft | verified | needs_followup
---
```

Field rules:

- `mechanics` is required on every game-scoped doc (`game_index`, `sources`, `rule_category`, `reception`, `better_if`, `scout_report`) and carries the **game's** mechanics list, identical across all docs of one game. This is the metadata firewall: an agent greps frontmatter to learn what a game is about without opening bodies. Optional on `pattern` and `operations` docs.
- `better_if_labels` is required on `reception` and `better_if` docs only; it lists the taxonomy labels the doc's body actually discusses.
- `game.weight` is the BGG complexity weight, cited from the game's discovery source; `null` when unknown.
- `pattern` and `operations` docs omit the `game` block, `scope`, and `sources` requirements where they do not apply (see the validator for the exact exemptions).
- `visual_reference` is a game-scoped manifest at `games/<slug>/visuals/packet.okf.md`. It carries the game metadata and mechanics firewall plus the visual packet contract below.
- Digital card-game docs (`digital_card_game_index`, `digital_card_sources`, `digital_card_glossary`, `digital_card_keyword`, `card_record`) are source-evidence records for large digital card corpora. They are exempt from board-game `mechanics` vocabulary requirements; `card_record` may use a `card:` frontmatter block instead of `game:`.
- A `card_record`'s `card:` block must carry `name`, `slug`, `source_id`, `ordinal`, and a `cost:` field. Digital card schemas may use a scalar cost (for example `"1"`, `"X"`, or `"-"`) or a nested vector. The Dawncaster vector retains all nine fields (`dex`, `int`, `str`, `holy`, `neutral`, `dexint`, `dexstr`, `intstr`, `blood`) nested one level below `cost:` (4-space indent); the validator enforces that nesting when the vector form is used.

## Design references (`KnowledgeBase/References/`)

`type: design_reference` records hold **outside design knowledge** — published
guides, designer interviews, GDC talks, postmortems, community craft wisdom —
converted into source-backed OKF form. They are not about any single game, so
they omit the `game:` block and `scope`; the validator exempts them from the
game-doc requirements. Discipline that still applies:

- Full `sources` registry + `Claim / Source / Evidence / Confidence` triplets
  in the body. Claims taken from search excerpts (body never fetched) must be
  marked `Confidence: low` and listed under Open questions for a later audit.
- `mechanics` tags are optional but encouraged (metadata firewall: tag the
  mechanisms the reference is about, e.g. `[deck-building, market]`).
- `better_if_labels` optional; tag them when the reference speaks to those
  friction areas.

Layout: topic folders under `KnowledgeBase/References/` (e.g.
`References/deckbuilding/`). These docs are not part of the game INDEX.

## Mechanics vocabulary (controlled)

Kebab-cased, seeded from BGG mechanism names. **Extend the vocabulary first, then use the new slug** — never invent per-doc synonyms (`deckbuilding` vs `deck-building` splits retrieval). The validator enforces membership.

The machine-authoritative copy of ALL controlled vocabularies (this list,
the better-if taxonomy, and every enum) is **`KnowledgeBase/OKF_VOCAB.json`**
— the validator loads it directly. Extend the JSON first; the lists in this
spec are the human-readable mirror.

```txt
action-points          action-queue           action-retrieval       action-selection
area-majority-influence area-movement         auction-bidding        campaign-game
card-play-conflict-resolution                 catch-up-mechanism     cooperative-game
deck-bag-and-pool-building                    deck-building          dice-rolling
drafting               end-game-bonuses       engine-building        force-commitment
grid-coverage          grid-movement          hand-management        hidden-information
income                 legacy-game            market                 modular-board
multi-use-cards        negotiation            open-drafting          pick-up-and-deliver
point-to-point-movement push-your-luck        race                   resource-management
set-collection         simultaneous-action-selection                 solo-solitaire-game
tableau-building       tech-trees-tech-tracks tile-placement         trick-taking
turn-order-claim-action variable-player-powers variable-setup        worker-placement
```

(`scripts/validate-okf.mjs` no longer carries its own copy — it reads
`KnowledgeBase/OKF_VOCAB.json`, so the JSON and this prose are the only
two places to keep aligned.)

## Better-if taxonomy (controlled)

Kebab-cased labels for classifying improvement opportunities. Use these exact slugs in `better_if_labels`; body prose may spell them out.

- onboarding
- setup-teardown
- component-clarity
- rules-ambiguity
- turn-pacing
- downtime
- randomness
- strategic-depth
- runaway-leader
- kingmaking
- player-interaction
- combat-resolution
- scoring-endgame
- solo-coop-automation
- campaign-progression
- balance-faction-asymmetry
- expansion-bloat
- accessibility

## Visual reference packets

Each game carries exactly one curated visual packet:

```txt
games/<slug>/visuals/
  packet.okf.md
  contact-sheet.webp
  references/
    01-box-cover.webp
    02-components.webp
    03-setup.webp
    04-decision-state.webp
```

The manifest declares **4–8** `visual_references`. Every entry requires `id`,
`source_id`, `file`, `subject`, `capture_type`, `creator`, `rights_holder`,
`usage_basis`, `license`, `attribution`, `demonstrates`, `rationale`, and
`sha256`. Paths are game-relative POSIX paths under `visuals/`; local assets
are WebP only. `subject` is controlled by `visual_subjects` and `usage_basis`
by `visual_usage_bases` in `KnowledgeBase/OKF_VOCAB.json`. A source used by a
visual reference records its source locator as `url` and exact downloadable
asset as `asset_url`; these may be the same when a stable direct asset URL is
the only available locator. The packet declares `contact_sheet` and
`contact_sheet_sha256`; agents should open that sheet before individual
references.

Public availability and `provenance: official` do not grant a license. Prefer
own work, permission, open licenses, or public-domain material. A narrowly
transformed `editorial-excerpt` is permitted only for private visual analysis:
it must be materially reduced, attributed, linked to its source, and carry a
specific rationale. Do not store complete rulebooks, complete card libraries,
source-resolution promotional art, community photographs without permission,
or images that substitute for cards, boards, player aids, or other game
components. A reduced page-overview derivative is permitted when visual
hierarchy is the analytical target, the text is not retained at practical
replacement quality, and the packet contains only a few noncontiguous pages
that cannot substitute for the source rulebook. Contact sheets inherit every
source image's restrictions. Preserve
license terms exactly; never infer Creative Commons status. Remove material on
rights-holder request.

## Body structure

Use these sections when applicable:

```md
## Summary

## Source-backed facts

- Claim: ...
  Source: src-001
  Evidence: "short quote or section/page reference"
  Confidence: high

## Rules / Mechanics

## Player friction

## Praised design

## Better-if opportunities

## Open questions
```

## Citation discipline

- Every factual rule claim needs a source ID.
- Exact quotes must be short.
- Summaries must not pretend to be verbatim text.
- Community interpretations must be labeled as community testimony.
- Reviews are reception evidence, not rules evidence.

## Corpus index (generated)

`KnowledgeBase/BoardGames/INDEX.okf.md` is the machine twin of `index.html`: one row per game (slug, title, year, weight, mechanics, top better-if labels, status, doc count) plus an inverted mechanics → games table. It is **generated, never hand-edited**:

```sh
node scripts/generate-index.mjs          # regenerate
node scripts/generate-index.mjs --check  # exit 1 if stale
```

Regenerate it at the end of every scout run and every librarian/patterns pass. The validator fails the corpus when INDEX is stale.

## Digital card corpus sidecars (generated)

Large digital card corpora keep machine sidecars next to their OKF records. For Dawncaster (`KnowledgeBase/DigitalCardGames/dawncaster/`), `cards.csv`, `cards.json`, and `card-index.csv` are derived from `cards/*.okf.md` — **generated, never hand-edited**:

```sh
node scripts/generate-dawncaster-card-sidecars.mjs          # regenerate
node scripts/generate-dawncaster-card-sidecars.mjs --check  # exit 1 if stale
```

Edit card records (or rerun `scripts/generate-dawncaster-card-okf.py` against the SQLite mirror), then regenerate the sidecars. The validator fails the corpus when they are stale.

## Failed-source followups (structured failure records)

The scout does **not** stash failed source documents (raw PDFs/HTML conflict with the copyright doctrine below and bloat shallow clones). Instead, every fetch/extraction failure becomes a machine-consumable record in the game's `scout-report.okf.md` frontmatter:

```yaml
followups:
  - source_id: "src-003"      # id in the game's sources.okf.md registry; null if never registered
    url: "https://..."        # exact URL that failed
    failure: pdf_extraction   # tls | timeout | http_error | pdf_extraction | paywall | not_found | blocked | other
    fallback: "what was used instead (e.g. search snippets, secondary summary)"
    retry_needs: pdf_tooling  # browser_fetch | pdf_tooling | wayback_snapshot | alternate_source | manual_review | other
    notes: "dated context; append retry outcomes here"
```

A `scout_report` doc with `status: needs_followup` must carry a non-empty `followups` block — the weekly librarian pass consumes exactly this. Prose failure notes remain welcome but do not replace the block.

## Minimum daily scout output

A valid daily run must write:

- `index.okf.md`
- `sources.okf.md`
- at least three categorized rule docs if rules are found
- `reception/reviews.okf.md`
- `reception/better-if.okf.md`
- `scout-report.okf.md` (with a `followups` block for any failed source)

If rules are not found, write a `scout-report.okf.md` with the failed search path, next source leads, and structured `followups`.

Before pushing, every run must also:

1. **Select from the wishlist first**: take the topmost unchecked `WISHLIST.md` entry; check it off in the same run (linking the new game dir). Free-choice selection applies only when the wishlist is empty.
2. **Regenerate the corpus index**: `node scripts/generate-index.mjs`.
3. **Validate its own output**: `node scripts/validate-okf.mjs` — any finding means the run failed; fix before pushing. This spec, not the scout's memory of it, is the output format.
