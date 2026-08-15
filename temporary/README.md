# Temporary Bathcat and Mennonite dossier

Generated: 2026-08-14T23:05:36.559230+00:00

This directory is a complete operational handoff package for SomberSoft's Bathcat and Mennonite KB pipeline. It contains their role prompts, procedures, sanitized profile configuration, native cron definitions, all cron output artifacts, relevant profile logs, full systemd journals, active skill packages, Blood Meridian research corpus, shared harness, KB law, historical operator documents, automation bridge work, relevant public GitHub PR/issue evidence, and live status snapshots.

## Security boundary

Raw `.env`, `auth.json`, OAuth material, state databases, unrelated private sessions, dependency trees, caches, browser/media artifacts, and MCP stderr floods are not published. They are inventoried with size and checksum in `EXCLUDED-SENSITIVE-AND-EPHEMERAL.json`. Text included here was passed through a credential redactor. `MANIFEST.json` records every included file, source, checksum, size, and redaction count.

## Layout

- `profiles/` — SOUL, procedures, sanitized configs/memory, all cron definitions and outputs, relevant logs
- `skills/` — complete attached and SomberSoft role skill packages
- `character-canon/` — full Blood Meridian OKF research corpus, renamed with `.txt` suffix where needed to avoid KB validation
- `shared/` — SomberSoft specialist harness
- `automation/` — native services, journals, and staged REVISE→Bathcat bridge
- `kb-law/` — current repository law and historical operator prompts
- `github/` — relevant public PRs, comments, reviews, commits, and issues
- `history/` — specialist-related Git history
- `status/` — live snapshots at collection time

This directory is deliberately named `temporary` at T's direction. It is archival/diagnostic material, not canonical game evidence.
