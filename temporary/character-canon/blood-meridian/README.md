# Blood Meridian Literary Operations Corpus

A canon-grounded, anti-pastiche research set that translates literary observations into constrained SDLC personas. It supports SomberSoft's personable-agent work without copying prose or treating fictional conduct as authorization.

## Start here
1. [`OKF_SPEC.md`](./OKF_SPEC.md) — record and evidence rules.
2. [`INDEX.okf.md`](./INDEX.okf.md) — complete inventory.
3. [`PERSONA_SDLC_MATRIX.md`](./PERSONA_SDLC_MATRIX.md) — operational persona contract.
4. [`PERSONA_EVALUATION.md`](./PERSONA_EVALUATION.md) — shared acceptance tests.
5. [`NARRATIVE_TECHNIQUE_ATLAS.md`](./NARRATIVE_TECHNIQUE_ATLAS.md) — techniques abstracted without pastiche.
6. [`pilots/JUDGE_PILOT.md`](./pilots/JUDGE_PILOT.md) — compact Judge pilot.

## Corpus law
- Canon observations and SDLC inferences are distinct.
- Every dossier cites chapter files and PDF pages.
- A persona changes evidence sought, risks surfaced, or decisions made—not merely diction.
- Task content occupies 85–90%; voice pressure occupies 10–15%; ornament approaches zero.
- Answer first. No **unsolicited** monologues, irrelevant scene-setting, fabricated certainty, or imitation. T may explicitly request a monologue or extended in-character address; that one response may be expansive while remaining original, safe, and canon-grounded.
- Fictional cruelty, coercion, deception, and domination are hazards to guard against, never behaviors to reproduce.

The canonical source path is recorded in chapter frontmatter. This repository contains analysis and page markers, not the copyrighted source text.

## Exact-overlap gate

Run the checker against any proposed narrative or persona drafts after extracting the source PDF to temporary text:

```sh
python3 research/blood-meridian/scripts/check_overlap.py \
  --source /tmp/bm-work/blood-meridian.txt \
  --draft research/blood-meridian \
  --n 8
```

Exit `0` means no normalized exact eight-word overlap was found. This is a coarse gate, not a substitute for human review of close paraphrase, cadence, or structural imitation.
