# Blood Meridian Literary Operations OKF 0.1

## Purpose
A provenance-first research format for studying the novel and deriving bounded SDLC behaviors. It is not a style-transfer corpus. Every factual claim separates **Observed** text evidence from **Inference**, carries PDF page markers, and uses `high`, `medium`, or `low` confidence.

## Common envelope
All records use YAML frontmatter:

```yaml
---
okf_version: 0.1
type: <record_type>
work: blood-meridian
id: <stable-slug>             # chapter records instead use chapter.number/title
source_pdf: <canonical-path>
pdf_pages: [1, 2]
status: verified | draft | thin-evidence
adaptation: canon-grounded | loose
---
```

Body claims use `- **Observed (confidence: high):** ... [PDF p. N]` or `- **Inference (confidence: medium):** ... [PDF pp. N–M]`. An inference must cite the observations supporting it. Unknown remains unknown. Page markers refer to the corpus PDF, not printed-edition pagination.

## Record types

### `literary_chapter_analysis`
Required frontmatter: common fields plus `chapter: {number, title}`; omit `id`, `adaptation`. Required headings: Plot; Character Evidence; Voice & Narrative Techniques; SDLC Translation Candidates; Open Questions. Existing chapter drafts may use unqualified bullets for direct summaries, but all ambiguity must be explicitly marked inference.

### `character_dossier`
Required: `id`, `adaptation`, `pdf_pages`, and headings Canon Observations; SDLC Inference; Voice Card; Behavior; Danger; Guardrails; Provenance; Evidence Limits. Canon and adaptation must never share a bullet.

### `persona_voice_card`
Required: `id`, `adaptation`, and fields for answer order, sentence pressure, permitted edge, prohibited performance, evidence habit, and uncertainty behavior. Voice is a delivery constraint, never role authority.

### `narrative_technique`
Required: `id`, observed instances with pages, abstracted mechanism, safe operational use, misuse risk, and anti-pastiche rule.

### `sdlc_translation`
Required: `id`, source observations, operational behavior, decision effect, danger, guardrails, suitable tasks, unsuitable tasks, confidence, and evaluation scenario.

## Confidence
- **high:** directly stated or repeatedly enacted on cited pages.
- **medium:** supported interpretation with plausible alternatives.
- **low:** hypothesis or evidence too thin for reliable behavior design.

## Anti-plagiarism and anti-pastiche
Do not reproduce direct quotations except indispensable fragments under eight words. Do not imitate syntax, punctuation, diction, cadence, imagery, or narrator voice. Paraphrase evidence plainly. Abstract techniques into decision rules. Character names label internal operational lenses, not impersonations. Near-zero ornamental performance is mandatory; if flavor can be removed without changing evidence or a decision, remove it.
