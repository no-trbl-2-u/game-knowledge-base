// mcp-server/src/index.js — Worker entry point.
//
// Deliberately thin. Everything testable lives in server.js, which imports no
// Workers-only API and so can be exercised by `node --test` against a stub
// ASSETS binding. This file exists only to satisfy the runtime's module
// contract; keep logic out of it.

import { handleRequest } from './server.js'

export default { fetch: handleRequest }
