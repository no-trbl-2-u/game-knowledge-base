# Blood Meridian persona and narrative corpus workflow

Use when T asks to make SomberSoft personas more canon-faithful or Axiomancer narration more strongly influenced by *Blood Meridian* without plagiarism.

## Authority and locations

- Canon PDF: `/root/BloodMeridian.pdf` (canonical cache copy may also exist under `~/.hermes/cache/documents/`).
- Company literary evidence: `~/Workspace/SomberSoft/research/blood-meridian/`.
- Axiomancer narrative law: `~/Workspace/SomberSoft/Axiomancer/axiomancer-mechanics/docs/narrative/`.
- The source novel itself is not committed to SomberSoft repositories.

## Method

1. Extract the PDF to temporary text while preserving PDF-page markers.
2. Split into Chapters I–XXIII plus Epilogue.
3. Produce one OKF chapter record with plot, character evidence, abstract narrative techniques, SDLC translation candidates, open questions, and page provenance.
4. Distill cross-chapter character dossiers. Separate canon observations from company-role inference; label sparse evidence and loose adaptations honestly.
5. Translate dossiers into compact operational voice cards. Persona must alter evidence sought, risks weighted, or decisions made—not merely diction.
6. Keep live persona prompts small. Chapter records are provenance, not prompt payload.
7. Build game narrative law separately: style constitution, surface-specific voice registers, project lexicon, anti-imitation rules, evaluation rubric, and one pilot encounter.
8. Run exact-overlap checks and human review for close paraphrase, cadence, imagery, and structural imitation.
9. Pilot one persona and one scene before gang-wide or game-wide rollout.

## Anti-fluff law

- 85–90% task content.
- 10–15% character voice and behavioral pressure.
- Near-zero ornamental performance.
- Answer first; no monologues, irrelevant scene-setting, costume language, faux quotations, or generic biblical weather.
- Mechanics and UI clarity override atmosphere.

## Anti-plagiarism law

- Do not prompt agents to “write like Cormac McCarthy.”
- Abstract techniques; do not retain reusable source phrases.
- Keep direct quotation rare and under eight words when indispensable for evidence.
- Require Axiomancer-specific cosmology, objects, consequences, vocabulary, and dramatic purpose.
- Run `research/blood-meridian/scripts/check_overlap.py` against temporary extracted source text. Exact overlap is only a coarse gate; human review remains mandatory.

## Known role-fit warning

Do not assume every useful SomberSoft role is canonically obvious. Webster and the Governor have thin evidence for their present company functions; preserve explicit loose-adaptation labels unless later evidence supports a tighter translation.

## Verification

- All expected chapter and dossier files exist.
- Frontmatter is consistent.
- Evidence claims carry chapter/page provenance.
- Internal links resolve.
- Exact-overlap gate is clean.
- Repo lexicon and `git diff --check` pass.
- Both owning repositories finish clean and synchronized after approved delivery.
