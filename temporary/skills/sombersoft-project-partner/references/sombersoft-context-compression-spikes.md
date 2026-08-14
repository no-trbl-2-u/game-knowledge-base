# SomberSoft context-compression spike pattern

Use this reference when T asks whether a third-party context compression/proxy tool such as Headroom is worth adopting for Hermes, SomberSoft specialist profiles, or autonomous coding workers.

## Class verdict from Headroom spike, 2026-06-05

Headroom (`headroom-ai` 0.23.0) was tested in an isolated venv under `/root/Workspace/spikes/headroom-context-compression`. It was not installed globally and no Hermes or external agent config was modified.

Verdict: **PARTIAL**.

- Promising for backend worker lanes, read-heavy audits, noisy CI/playtest logs, and specialist output floods.
- Not proven enough for the main Judge Telegram profile or production Hermes gateway path.
- Exact Axiomancer evidence, diffs, test failures, and playtest logs must remain sacred; compression is only acceptable when exact markers remain visible or originals are retrievable.

## Safe spike sequence

1. Create an isolated workspace under `/root/Workspace/spikes/<tool-purpose>/`.
2. Use a venv or other disposable install path. Do not install globally first.
3. Smoke-test CLI, proxy/server health, and MCP/server support if relevant.
4. Run synthetic probes that include exact sentinel strings and Axiomancer-shaped evidence:
   - structured combat/event JSON logs
   - noisy plain logs with fatal marker lines
   - code/diff-like evidence that should remain exact
5. Run at least one actual Axiomancer repo evidence probe without modifying the repos.
6. Write `README.md` in the spike workspace with commands, hard numbers, surprises, and verdict.
7. Update `/root/Workspace/HERMES_UPGRADES.md` with a compact queue/decision note.
8. Stop any background proxy/server before final report.

## Evidence standards

Report hard numbers where possible:

- package/version tested
- install scope
- health endpoint results
- before/after tokens
- exact marker preservation
- whether code/diffs were protected or compressed
- what config was or was not modified

Use sentinel markers in probes, e.g. `AXIOMANCER_SENTINEL_7319`, then verify whether the compressed output still contains the exact string.

## Headroom-specific notes

- `headroom proxy` local readiness should be checked with `/health` and `/livez`.
- In the tested version, `/healthz` appeared to route upstream and should not be used as the local health check.
- `headroom mcp status` checks default proxy assumptions; if the spike uses a non-default port, interpret proxy status accordingly.
- Recent code/diff evidence may be protected instead of compressed. That is acceptable; evidence preservation outranks token savings.
- The next meaningful proof is wrapping a contained backend coding worker (`headroom wrap codex` or `headroom wrap claude`) on a read-heavy Axiomancer audit and comparing token stats, latency, correctness, and evidence quality against a normal run.

## Adoption rule

Do not put new compression/proxy tooling between T and the main Judge profile first. Prove it in backend worker lanes such as Glanton, Webster, Governor, Codex/Claude audits, or CI/playtest-log summarizers. Only promote toward the main Hermes profile after correctness and evidence preservation are repeatedly demonstrated.
