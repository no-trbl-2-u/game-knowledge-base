# SomberSoft Hermes global npm tooling

Use this reference when T asks what free global npm packages could improve Hermes, the Judge, or SomberSoft specialist profiles.

## Pattern

1. Load `hermes-agent` first because this is Hermes configuration work.
2. Inspect live Node/npm state before recommending or installing:
   - `node --version`
   - `npm --version`
   - `npm config get prefix`
   - `npm list -g --depth=0`
   - check whether the npm prefix `bin` directory is on `PATH`.
3. Prefer free/open-source CLI packages that create real operational leverage for multiple profiles.
4. Install only the agreed/recommended set, then verify both binary discovery and `--version` output where possible.
5. Update `~/Workspace/HERMES_UPGRADES.md` after a successful install/config pass.

## High-value free global npm tools

Recommended core set:

```bash
npm install -g @openai/codex opencode-ai @google/gemini-cli playwright @playwright/mcp @mermaid-js/mermaid-cli svgo typescript tsx eslint prettier depcheck npm-check-updates madge cspell markdownlint-cli2 @stoplight/spectral-cli lighthouse
```

Role mapping:

- Judge / Glanton: `@openai/codex`, `opencode-ai`, `@google/gemini-cli` for agentic coding lanes and fallback execution artillery.
- Kid / Toadvine: `playwright`, `@playwright/mcp`, `lighthouse` for UI traversal, visual checks, and web UX pressure tests.
- Webster / Governor: `@mermaid-js/mermaid-cli`, `cspell`, `markdownlint-cli2`, `@stoplight/spectral-cli` for specs, diagrams, docs, and API contracts.
- General coding: `typescript`, `tsx`, `eslint`, `prettier`, `depcheck`, `npm-check-updates`, `madge` for type/lint/format/dependency/import-graph judgment.
- Toadvine: `svgo` for SVG cleanup and optimization.

## PATH fix

Hermes' npm prefix may be `/root/.hermes/node`; do not assume its bin directory is already visible.

Durable shell additions:

```bash
export PATH="/root/.hermes/node/bin:$PATH"
```

Add it to `/root/.bashrc` and `/root/.profile` when operating on this host. If the current Hermes tool environment still cannot see binaries, symlink new npm bins into `/root/.local/bin` because that path is commonly present in Hermes tool PATH.

Verification pattern:

```bash
npm list -g --depth=0
for c in codex opencode gemini playwright playwright-mcp mmdc svgo tsc tsx eslint prettier depcheck ncu madge cspell markdownlint-cli2 spectral lighthouse; do
  command -v "$c" || true
done
```

Then run `--version` probes for the installed commands, accepting that some tools print nonstandard version output.

## Memory-assist packages

Do not blindly install memory packages. Memory needs deliberate provider/MCP architecture or it becomes duplicate doctrine.

Useful candidates found during the npm review:

- `@modelcontextprotocol/server-memory` — MIT; MCP knowledge-graph memory server. Best npm-native candidate for a structured shared memory surface.
- `vectra` — MIT; lightweight file-backed vector DB for local KB indexing.
- `@xenova/transformers` — Apache-2.0; local JS embeddings.
- `sqlite-vec` — MIT OR Apache; SQLite vector search extension.
- `better-sqlite3` — MIT; reliable SQLite driver if building custom KB scripts.
- `langchain` / `llamaindex` — MIT; broad RAG frameworks, heavier than usually needed.

Preferred next memory upgrade order:

1. Inspect `hermes memory status` and installed memory plugins.
2. Decide whether to configure a native Hermes memory provider or add `@modelcontextprotocol/server-memory` as an MCP server.
3. If using MCP memory, scope it deliberately: Governor/Webster first if uncertain; whole gang only after testing retrieval quality.
4. Record the architecture in `~/Workspace/HERMES_UPGRADES.md` and avoid storing transient task status as memory.

## MCP memory server setup

Use this when T authorizes an npm-native memory graph for Hermes.

Install and configure:

```bash
npm install -g @modelcontextprotocol/server-memory
mkdir -p /root/.hermes/mcp-memory
printf 'Y\n' | hermes mcp add memory \
  --command /root/.hermes/node/bin/mcp-server-memory \
  --env MEMORY_FILE_PATH=/root/.hermes/mcp-memory/memory.jsonl
```

Why `printf 'Y\n'`: `hermes mcp add` connects, discovers tools, and then asks whether to enable them. In non-interactive tool runs, failing to answer leaves the server unconfigured even after a successful connection.

Verify:

```bash
hermes mcp list
hermes mcp test memory
```

Expected result: server `memory` enabled; test connects and discovers 9 knowledge-graph tools: `create_entities`, `create_relations`, `add_observations`, `delete_entities`, `delete_observations`, `delete_relations`, `read_graph`, `search_nodes`, `open_nodes`.

Additions/removals to `mcp_servers` require a new Hermes session or gateway restart before the MCP tools appear in conversations. Do not promise immediate in-chat tool availability until the process has restarted.

Recommended storage path on this host: `/root/.hermes/mcp-memory/memory.jsonl`. For specialist profile-local graphs, use each profile's `$HERMES_HOME` instead of the default profile path.

## Pitfalls

- Do not encode transient `command not found` or unconfigured credential state as a durable limitation. Capture the fix, not the failure.
- Do not claim a package is free to operate when only the npm package is free; coding agents may still require OAuth/API/service access.
- Do not expose tunnels or public preview links merely because `localtunnel`, `vercel`, or similar CLIs exist; public-facing actions still need approval.
