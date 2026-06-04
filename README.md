# Valorant SDK

Browse Valorant agents, weapons, maps, game modes, cosmetics, and competitive tiers sourced from the game's own files

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Valorant API

[Valorant-API](https://valorant-api.com) is a community-run, unofficial REST API that exposes in-game data and assets extracted directly from Valorant game files. The project auto-updates after each game patch so the data stays in sync with the live client.

What you get from the API:
- Playable agents and their abilities
- Weapons, skins, and chromas
- Maps and game modes
- Competitive tiers / ranked information
- Cosmetics such as weapon buddies, player cards, sprays, and titles
- Seasons and in-game currencies

The API is read-only and does not require authentication. CORS is disabled on the public endpoints, so calls are typically made server-side. Full endpoint reference is published at the dashboard at [dash.valorant-api.com](https://dash.valorant-api.com/).

## Try it

**TypeScript**
```bash
npm install valorant
```

**Python**
```bash
pip install valorant-sdk
```

**PHP**
```bash
composer require voxgig/valorant-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/valorant-sdk/go
```

**Ruby**
```bash
gem install valorant-sdk
```

**Lua**
```bash
luarocks install valorant-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ValorantSDK } from 'valorant'

const client = new ValorantSDK({})

// List all agents
const agents = await client.Agent().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o valorant-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "valorant": {
      "command": "/abs/path/to/valorant-mcp"
    }
  }
}
```

## Entities

The API exposes 6 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Agent** | Playable Valorant agents and their ability data, exposed under `/v1/agents` | `/v1/agents` |
| **Competitive** | Ranked / competitive tier information used in Valorant matchmaking | `/v1/competitivetiers` |
| **Cosmetic** | Cosmetic items such as weapon buddies, player cards, sprays, and titles, e.g. `/v1/buddies` | `/v1/buddies` |
| **GameMode** | Valorant game modes available in the client | `/v1/gamemodes` |
| **Map** | Playable maps in Valorant, including metadata and assets | `/v1/maps` |
| **Weapon** | Weapons along with their skins and chromas pulled from the game files | `/v1/weapons` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from valorant_sdk import ValorantSDK

client = ValorantSDK({})

# List all agents
agents, err = client.Agent(None).list(None, None)

# Load a specific agent
agent, err = client.Agent(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'valorant_sdk.php';

$client = new ValorantSDK([]);

// List all agents
[$agents, $err] = $client->Agent(null)->list(null, null);

// Load a specific agent
[$agent, $err] = $client->Agent(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/valorant-sdk/go"

client := sdk.NewValorantSDK(map[string]any{})

// List all agents
agents, err := client.Agent(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Valorant_sdk"

client = ValorantSDK.new({})

# List all agents
agents, err = client.Agent(nil).list(nil, nil)

# Load a specific agent
agent, err = client.Agent(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("valorant_sdk")

local client = sdk.new({})

-- List all agents
local agents, err = client:Agent(nil):list(nil, nil)

-- Load a specific agent
local agent, err = client:Agent(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ValorantSDK.test()
const result = await client.Agent().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ValorantSDK.test(None, None)
result, err = client.Agent(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ValorantSDK::test(null, null);
[$result, $err] = $client->Agent(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Agent(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ValorantSDK.test(nil, nil)
result, err = client.Agent(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Agent(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Valorant API

- Upstream: [https://valorant-api.com](https://valorant-api.com)
- API docs: [https://dash.valorant-api.com/](https://dash.valorant-api.com/)

- Valorant-API is a non-official API and is not endorsed by Riot Games
- Riot Games, Valorant, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
- No explicit licence terms are published for the API itself; check the site before redistributing assets
- Attribution to the underlying game data source (Riot Games) is expected when displaying assets

---

Generated from the Valorant API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
