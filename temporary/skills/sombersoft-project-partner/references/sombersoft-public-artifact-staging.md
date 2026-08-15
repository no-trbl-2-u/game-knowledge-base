# SomberSoft public artifact staging

Use when T asks to save company-facing writing, devlogs, art notes, preview-build copy, website material, or public artifact drafts.

## Directory

Company/public-site staging lives at:

`/root/Workspace/sombersoft-company/`

Standard lanes:

- `blog/` — polished essays and public posts.
- `devlogs/` — build notes, progress reports, release narratives.
- `art/` — art-direction notes, asset briefs, generated-art provenance, preview sheets.
- `preview-builds/` — preview-build notes, links, test instructions, known issues, changelog copy.

## Pattern

1. Save the artifact immediately when T identifies something as public/company material.
2. Prefer Markdown with frontmatter for future static-site ingestion.
3. Keep status explicit: usually `draft` unless T says publish-ready.
4. Include useful metadata: `title`, `date`, `author`, `status`, `type`, `tags`, and `summary`.
5. Add or maintain lane READMEs when creating new artifact categories.
6. Verify by reading the saved file back or listing the directory.
7. Save durable location knowledge in memory/fact store when a new company artifact lane is created.

## First artifact precedent

The first company blog post was saved as:

`/root/Workspace/sombersoft-company/blog/2026-06-04-knowledge-is-dominion.md`

Title: `Knowledge Is Dominion`

The tone was Judge/SomberSoft philosophy: naming, testing, shaping, and shipping worlds. Preserve that as precedent for company doctrine essays, but do not force all devlogs into that register; public build notes should remain clear and artifact-first.
