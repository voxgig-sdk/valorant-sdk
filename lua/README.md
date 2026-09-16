# Valorant Lua SDK



The Lua SDK for the Valorant API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Agent()` — each with the same small set of operations (`list`, `load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/valorant-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("valorant_sdk")

local client = sdk.new()
```

### 2. List agent records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local agents, err = client:Agent():list()
if err then error(err) end

for _, item in ipairs(agents) do
  print(item["id"], item["assetPath"])
end
```

### 3. Load an agent

```lua
local agent, err = client:Agent():load({ id = "example_id" })
if err then error(err) end
print(agent)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local cosmetics, err = client:Cosmetic():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Cosmetic():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
VALORANT_TEST_LIVE=TRUE
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### ValorantSDK

```lua
local sdk = require("valorant_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### ValorantSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Agent` | `(data) -> AgentEntity` | Create an Agent entity instance. |
| `Competitive` | `(data) -> CompetitiveEntity` | Create a Competitive entity instance. |
| `Cosmetic` | `(data) -> CosmeticEntity` | Create a Cosmetic entity instance. |
| `GameMode` | `(data) -> GameModeEntity` | Create a GameMode entity instance. |
| `Map` | `(data) -> MapEntity` | Create a Map entity instance. |
| `Weapon` | `(data) -> WeaponEntity` | Create a Weapon entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local agent, err = client:Agent():load({ id = "example_id" })
    if err then error(err) end
    -- agent is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Agent

| Field | Description |
| --- | --- |
| `abilities` |  |
| `assetPath` | Asset path in game files |
| `background` | URL to the agent's background image |
| `backgroundGradientColors` | Gradient colors for the agent's background |
| `bustPortrait` | URL to the agent's bust portrait |
| `characterTags` | Tags associated with the character |
| `description` | Description of the agent |
| `developerName` | Internal developer name |
| `displayIcon` | URL to the agent's display icon |
| `displayIconSmall` | URL to the agent's small display icon |
| `displayName` | Display name of the agent |
| `fullPortrait` | URL to the agent's full portrait |
| `fullPortraitV2` | URL to the agent's full portrait version 2 |
| `id` |  |
| `isAvailableForTest` | Whether the agent is available for testing |
| `isBaseContent` | Whether the agent is base content |
| `isFullPortraitRightFacing` | Whether the full portrait faces right |
| `isPlayableCharacter` | Whether the agent is playable |
| `killfeedPortrait` | URL to the agent's killfeed portrait |
| `role` |  |
| `uuid` | Unique identifier for the agent |
| `voiceLine` |  |

Operations: List, Load.

API path: `/v1/agents`

#### Competitive

| Field | Description |
| --- | --- |
| `assetObjectName` | Asset object name |
| `assetPath` | Asset path in game files |
| `tiers` |  |
| `uuid` | Unique identifier for the competitive tier set |

Operations: List.

API path: `/v1/competitivetiers`

#### Cosmetic

| Field | Description |
| --- | --- |
| `animationGif` | URL to the spray's animation GIF |
| `animationPng` | URL to the spray's animation PNG |
| `assetPath` | Asset path in game files |
| `category` | Category of the spray |
| `displayIcon` | URL to the buddy's display icon |
| `displayName` | Display name of the buddy |
| `fullIcon` | URL to the spray's full icon |
| `fullTransparentIcon` | URL to the spray's full transparent icon |
| `hideIfNotOwned` | Whether the spray is hidden if not owned |
| `isHiddenIfNotOwned` | Whether the buddy is hidden if not owned |
| `isNullSpray` | Whether this is a null spray |
| `largeArt` | URL to the card's large art |
| `levels` |  |
| `smallArt` | URL to the card's small art |
| `themeUuid` | UUID of the theme |
| `uuid` | Unique identifier for the buddy |
| `wideArt` | URL to the card's wide art |

Operations: List.

API path: `/v1/buddies`

#### GameMode

| Field | Description |
| --- | --- |
| `allowsMatchTimeouts` | Whether match timeouts are allowed |
| `assetPath` | Asset path in game files |
| `displayIcon` | URL to the game mode's display icon |
| `displayName` | Display name of the game mode |
| `duration` | Duration of the game mode |
| `economyType` | Type of economy system |
| `gameFeatureOverrides` | Game feature overrides |
| `gameRuleBoolOverrides` | Game rule boolean overrides |
| `isMinimapHidden` | Whether the minimap is hidden |
| `isTeamVoiceAllowed` | Whether team voice chat is allowed |
| `orbCount` | Number of orbs in the game mode |
| `roundsPerHalf` | Number of rounds per half |
| `teamRoles` | Team roles in the game mode |
| `uuid` | Unique identifier for the game mode |

Operations: List.

API path: `/v1/gamemodes`

#### Map

| Field | Description |
| --- | --- |
| `assetPath` | Asset path in game files |
| `callouts` |  |
| `coordinates` | Geographic coordinates of the map location |
| `displayIcon` | URL to the map's display icon |
| `displayName` | Display name of the map |
| `id` |  |
| `listViewIcon` | URL to the map's list view icon |
| `mapUrl` | URL to the map overview |
| `narrativeDescription` | Narrative description of the map |
| `splash` | URL to the map's splash image |
| `tacticalDescription` | Tactical description of the map |
| `uuid` | Unique identifier for the map |
| `xMultiplier` | X coordinate multiplier |
| `xScalarToAdd` | X scalar to add |
| `yMultiplier` | Y coordinate multiplier |
| `yScalarToAdd` | Y scalar to add |

Operations: List, Load.

API path: `/v1/maps`

#### Weapon

| Field | Description |
| --- | --- |
| `assetPath` | Asset path in game files |
| `category` | Weapon category (e.g., Rifle, Pistol) |
| `defaultSkinUuid` | UUID of the default skin |
| `displayIcon` | URL to the weapon's display icon |
| `displayName` | Display name of the weapon |
| `id` |  |
| `killStreamIcon` | URL to the weapon's kill stream icon |
| `shopData` |  |
| `skins` |  |
| `uuid` | Unique identifier for the weapon |
| `weaponStats` |  |

Operations: List, Load.

API path: `/v1/weapons`



## Entities


### Agent

Create an instance: `local agent = client:Agent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abilities` | `table` |  |
| `assetPath` | `string` | Asset path in game files |
| `background` | `string` | URL to the agent's background image |
| `backgroundGradientColors` | `table` | Gradient colors for the agent's background |
| `bustPortrait` | `string` | URL to the agent's bust portrait |
| `characterTags` | `table` | Tags associated with the character |
| `description` | `string` | Description of the agent |
| `developerName` | `string` | Internal developer name |
| `displayIcon` | `string` | URL to the agent's display icon |
| `displayIconSmall` | `string` | URL to the agent's small display icon |
| `displayName` | `string` | Display name of the agent |
| `fullPortrait` | `string` | URL to the agent's full portrait |
| `fullPortraitV2` | `string` | URL to the agent's full portrait version 2 |
| `id` | `string` |  |
| `isAvailableForTest` | `boolean` | Whether the agent is available for testing |
| `isBaseContent` | `boolean` | Whether the agent is base content |
| `isFullPortraitRightFacing` | `boolean` | Whether the full portrait faces right |
| `isPlayableCharacter` | `boolean` | Whether the agent is playable |
| `killfeedPortrait` | `string` | URL to the agent's killfeed portrait |
| `role` | `table` |  |
| `uuid` | `string` | Unique identifier for the agent |
| `voiceLine` | `table` |  |

#### Example: Load

```lua
local agent, err = client:Agent():load({ id = "agent_id" })
```

#### Example: List

```lua
local agents, err = client:Agent():list()
```


### Competitive

Create an instance: `local competitive = client:Competitive(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetObjectName` | `string` | Asset object name |
| `assetPath` | `string` | Asset path in game files |
| `tiers` | `table` |  |
| `uuid` | `string` | Unique identifier for the competitive tier set |

#### Example: List

```lua
local competitives, err = client:Competitive():list()
```


### Cosmetic

Create an instance: `local cosmetic = client:Cosmetic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animationGif` | `string` | URL to the spray's animation GIF |
| `animationPng` | `string` | URL to the spray's animation PNG |
| `assetPath` | `string` | Asset path in game files |
| `category` | `string` | Category of the spray |
| `displayIcon` | `string` | URL to the buddy's display icon |
| `displayName` | `string` | Display name of the buddy |
| `fullIcon` | `string` | URL to the spray's full icon |
| `fullTransparentIcon` | `string` | URL to the spray's full transparent icon |
| `hideIfNotOwned` | `boolean` | Whether the spray is hidden if not owned |
| `isHiddenIfNotOwned` | `boolean` | Whether the buddy is hidden if not owned |
| `isNullSpray` | `boolean` | Whether this is a null spray |
| `largeArt` | `string` | URL to the card's large art |
| `levels` | `table` |  |
| `smallArt` | `string` | URL to the card's small art |
| `themeUuid` | `string` | UUID of the theme |
| `uuid` | `string` | Unique identifier for the buddy |
| `wideArt` | `string` | URL to the card's wide art |

#### Example: List

```lua
local cosmetics, err = client:Cosmetic():list()
```


### GameMode

Create an instance: `local game_mode = client:GameMode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowsMatchTimeouts` | `boolean` | Whether match timeouts are allowed |
| `assetPath` | `string` | Asset path in game files |
| `displayIcon` | `string` | URL to the game mode's display icon |
| `displayName` | `string` | Display name of the game mode |
| `duration` | `string` | Duration of the game mode |
| `economyType` | `string` | Type of economy system |
| `gameFeatureOverrides` | `table` | Game feature overrides |
| `gameRuleBoolOverrides` | `table` | Game rule boolean overrides |
| `isMinimapHidden` | `boolean` | Whether the minimap is hidden |
| `isTeamVoiceAllowed` | `boolean` | Whether team voice chat is allowed |
| `orbCount` | `number` | Number of orbs in the game mode |
| `roundsPerHalf` | `number` | Number of rounds per half |
| `teamRoles` | `table` | Team roles in the game mode |
| `uuid` | `string` | Unique identifier for the game mode |

#### Example: List

```lua
local game_modes, err = client:GameMode():list()
```


### Map

Create an instance: `local map = client:Map(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetPath` | `string` | Asset path in game files |
| `callouts` | `table` |  |
| `coordinates` | `string` | Geographic coordinates of the map location |
| `displayIcon` | `string` | URL to the map's display icon |
| `displayName` | `string` | Display name of the map |
| `id` | `string` |  |
| `listViewIcon` | `string` | URL to the map's list view icon |
| `mapUrl` | `string` | URL to the map overview |
| `narrativeDescription` | `string` | Narrative description of the map |
| `splash` | `string` | URL to the map's splash image |
| `tacticalDescription` | `string` | Tactical description of the map |
| `uuid` | `string` | Unique identifier for the map |
| `xMultiplier` | `number` | X coordinate multiplier |
| `xScalarToAdd` | `number` | X scalar to add |
| `yMultiplier` | `number` | Y coordinate multiplier |
| `yScalarToAdd` | `number` | Y scalar to add |

#### Example: Load

```lua
local map, err = client:Map():load({ id = "map_id" })
```

#### Example: List

```lua
local maps, err = client:Map():list()
```


### Weapon

Create an instance: `local weapon = client:Weapon(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetPath` | `string` | Asset path in game files |
| `category` | `string` | Weapon category (e.g., Rifle, Pistol) |
| `defaultSkinUuid` | `string` | UUID of the default skin |
| `displayIcon` | `string` | URL to the weapon's display icon |
| `displayName` | `string` | Display name of the weapon |
| `id` | `string` |  |
| `killStreamIcon` | `string` | URL to the weapon's kill stream icon |
| `shopData` | `table` |  |
| `skins` | `table` |  |
| `uuid` | `string` | Unique identifier for the weapon |
| `weaponStats` | `table` |  |

#### Example: Load

```lua
local weapon, err = client:Weapon():load({ id = "weapon_id" })
```

#### Example: List

```lua
local weapons, err = client:Weapon():list()
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── valorant_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`valorant_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local cosmetic = client:Cosmetic()
cosmetic:list()

-- cosmetic:data_get() now returns the cosmetic data from the last list
-- cosmetic:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
