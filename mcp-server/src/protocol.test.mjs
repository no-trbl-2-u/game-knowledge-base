// mcp-server/src/protocol.test.mjs
//
// Drives the server the way a real MCP client does, rather than the way curl
// does. server.test.mjs checks that each method returns the right shape; this
// checks that a client following the MCP Streamable HTTP spec can complete a
// session against it — correct Accept headers, the initialize handshake in
// order, the MCP-Protocol-Version header on subsequent requests, and the
// response content type a client parses.
//
// This does not replace connecting an actual client, which remains a manual
// step: no in-repo test can prove a particular host's implementation agrees.
// What it does prove is that failures there are the client's to explain.

import assert from 'node:assert/strict'
import test from 'node:test'

import { TOKEN, makeEnv } from './fixture.mjs'
import { handleRequest } from './server.js'

// A minimal client that carries session state the way a real one does.
class Client {
  constructor(env) {
    this.env = env
    this.negotiatedVersion = null
    this.nextId = 1
  }

  async send(message, { accept = 'application/json, text/event-stream' } = {}) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: accept,
      Authorization: `Bearer ${TOKEN}`,
    }
    // The spec has clients echo the negotiated version on every request after
    // initialize. A server that rejected or mishandled it would break real
    // clients while passing every curl-shaped test.
    if (this.negotiatedVersion) headers['MCP-Protocol-Version'] = this.negotiatedVersion

    return handleRequest(new Request('https://kb.test/mcp', {
      method: 'POST',
      headers,
      body: JSON.stringify(message),
    }), this.env)
  }

  async request(method, params) {
    const res = await this.send({ jsonrpc: '2.0', id: this.nextId++, method, ...(params ? { params } : {}) })
    assert.equal(res.status, 200, `${method} returned HTTP ${res.status}`)
    assert.match(res.headers.get('Content-Type') ?? '', /application\/json/, `${method} sent a non-JSON content type`)
    const body = await res.json()
    assert.equal(body.jsonrpc, '2.0')
    return body
  }

  async notify(method) {
    return this.send({ jsonrpc: '2.0', method })
  }
}

test('a spec-following client can complete a full session', async () => {
  const client = new Client(makeEnv())

  // 1. initialize
  const init = await client.request('initialize', {
    protocolVersion: '2025-06-18',
    capabilities: {},
    clientInfo: { name: 'protocol-test', version: '1.0.0' },
  })
  assert.ok(init.result, 'initialize returned no result')
  assert.ok(init.result.protocolVersion, 'server did not state a protocol version')
  assert.ok(init.result.serverInfo?.name)
  assert.ok(init.result.capabilities?.tools, 'server must advertise the tools capability')
  client.negotiatedVersion = init.result.protocolVersion

  // 2. initialized notification — no response body, and the client must not
  //    treat the empty 202 as a protocol error.
  const ack = await client.notify('notifications/initialized')
  assert.equal(ack.status, 202)
  assert.equal(await ack.text(), '')

  // 3. discovery, now carrying MCP-Protocol-Version
  const list = await client.request('tools/list')
  assert.ok(Array.isArray(list.result.tools))
  assert.equal(list.result.tools.length, 6)

  // 4. a call, driven by what discovery returned rather than a hardcoded name
  const first = list.result.tools.find((t) => t.name === 'kb_overview')
  assert.ok(first, 'kb_overview missing from discovery')
  const call = await client.request('tools/call', { name: first.name, arguments: {} })
  assert.ok(Array.isArray(call.result.content))
  assert.equal(call.result.content[0].type, 'text')
  assert.ok(call.result.content[0].text.length)

  // 5. keepalive
  assert.deepEqual((await client.request('ping')).result, {})
})

test('request ids are echoed exactly, including string and zero ids', async () => {
  const env = makeEnv()
  for (const id of [0, 1, 'abc', '0']) {
    const res = await handleRequest(new Request('https://kb.test/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` },
      body: JSON.stringify({ jsonrpc: '2.0', id, method: 'ping' }),
    }), env)
    const body = await res.json()
    // A client matches responses to requests by id. Coercing 0 to null, or
    // '0' to 0, silently strands the caller waiting forever.
    assert.equal(body.id, id, `id ${JSON.stringify(id)} came back as ${JSON.stringify(body.id)}`)
    assert.equal(typeof body.id, typeof id)
  }
})

test('every advertised tool is callable with its minimal valid arguments', async () => {
  const client = new Client(makeEnv())
  const { result } = await client.request('tools/list')

  // Discovery promises a contract. A tool that appears in tools/list but
  // throws on its own required arguments is worse than one that is absent.
  const minimal = {
    kb_overview: {},
    kb_find_games: { mechanic: 'deck-building' },
    kb_search: { query: 'mechanics' },
    kb_read_doc: { path: 'BoardGames/games/tester/index.okf.md' },
    kb_cards: { query: 'Spark' },
    kb_keyword: { term: 'affliction' },
  }

  for (const tool of result.tools) {
    const args = minimal[tool.name]
    assert.ok(args !== undefined, `no minimal arguments known for advertised tool ${tool.name}`)

    // Required properties must actually exist in the schema we are satisfying.
    for (const required of tool.inputSchema.required ?? []) {
      assert.ok(required in args, `${tool.name} requires ${required}, which the probe omits`)
      assert.ok(tool.inputSchema.properties[required], `${tool.name} requires undeclared property ${required}`)
    }

    const call = await client.request('tools/call', { name: tool.name, arguments: args })
    assert.ok(!call.error, `${tool.name} returned a JSON-RPC error`)
    assert.notEqual(call.result.isError, true, `${tool.name} reported a tool error: ${call.result.content[0].text}`)
    assert.ok(call.result.content[0].text.length, `${tool.name} returned empty text`)
  }
})

test('a client that omits the token gets a clean 401, not a hang or a 500', async () => {
  const res = await handleRequest(new Request('https://kb.test/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'initialize', params: {} }),
  }), makeEnv())

  assert.equal(res.status, 401)
  // A client needs to know it was an auth failure, not a transport one.
  assert.match(res.headers.get('WWW-Authenticate') ?? '', /Bearer/)
})
