# Valorant Python SDK



The Python SDK for the Valorant API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Agent()` — each
carrying a small, uniform set of operations (`list`, `load`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/valorant-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from valorant_sdk import ValorantSDK

client = ValorantSDK()
```

### 2. List agent records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    agents = client.Agent().list()
    for agent in agents:
        print(agent)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an agent

`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    agent = client.Agent().load({"id": "example_id"})
    print(agent)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    cosmetics = client.Cosmetic().list()
    print(cosmetics)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = ValorantSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
cosmetic = client.Cosmetic().list()
# cosmetic contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = ValorantSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### ValorantSDK

```python
from valorant_sdk import ValorantSDK

client = ValorantSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = ValorantSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### ValorantSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `agent = client.Agent()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abilities` | `list` |  |
| `assetPath` | `str` | Asset path in game files |
| `background` | `str` | URL to the agent's background image |
| `backgroundGradientColors` | `list` | Gradient colors for the agent's background |
| `bustPortrait` | `str` | URL to the agent's bust portrait |
| `characterTags` | `list` | Tags associated with the character |
| `description` | `str` | Description of the agent |
| `developerName` | `str` | Internal developer name |
| `displayIcon` | `str` | URL to the agent's display icon |
| `displayIconSmall` | `str` | URL to the agent's small display icon |
| `displayName` | `str` | Display name of the agent |
| `fullPortrait` | `str` | URL to the agent's full portrait |
| `fullPortraitV2` | `str` | URL to the agent's full portrait version 2 |
| `id` | `str` |  |
| `isAvailableForTest` | `bool` | Whether the agent is available for testing |
| `isBaseContent` | `bool` | Whether the agent is base content |
| `isFullPortraitRightFacing` | `bool` | Whether the full portrait faces right |
| `isPlayableCharacter` | `bool` | Whether the agent is playable |
| `killfeedPortrait` | `str` | URL to the agent's killfeed portrait |
| `role` | `dict` |  |
| `uuid` | `str` | Unique identifier for the agent |
| `voiceLine` | `dict` |  |

#### Example: Load

```python
agent = client.Agent().load({"id": "agent_id"})
```

#### Example: List

```python
agents = client.Agent().list()
```


### Competitive

Create an instance: `competitive = client.Competitive()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetObjectName` | `str` | Asset object name |
| `assetPath` | `str` | Asset path in game files |
| `tiers` | `list` |  |
| `uuid` | `str` | Unique identifier for the competitive tier set |

#### Example: List

```python
competitives = client.Competitive().list()
```


### Cosmetic

Create an instance: `cosmetic = client.Cosmetic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animationGif` | `str` | URL to the spray's animation GIF |
| `animationPng` | `str` | URL to the spray's animation PNG |
| `assetPath` | `str` | Asset path in game files |
| `category` | `str` | Category of the spray |
| `displayIcon` | `str` | URL to the buddy's display icon |
| `displayName` | `str` | Display name of the buddy |
| `fullIcon` | `str` | URL to the spray's full icon |
| `fullTransparentIcon` | `str` | URL to the spray's full transparent icon |
| `hideIfNotOwned` | `bool` | Whether the spray is hidden if not owned |
| `isHiddenIfNotOwned` | `bool` | Whether the buddy is hidden if not owned |
| `isNullSpray` | `bool` | Whether this is a null spray |
| `largeArt` | `str` | URL to the card's large art |
| `levels` | `list` |  |
| `smallArt` | `str` | URL to the card's small art |
| `themeUuid` | `str` | UUID of the theme |
| `uuid` | `str` | Unique identifier for the buddy |
| `wideArt` | `str` | URL to the card's wide art |

#### Example: List

```python
cosmetics = client.Cosmetic().list()
```


### GameMode

Create an instance: `game_mode = client.GameMode()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowsMatchTimeouts` | `bool` | Whether match timeouts are allowed |
| `assetPath` | `str` | Asset path in game files |
| `displayIcon` | `str` | URL to the game mode's display icon |
| `displayName` | `str` | Display name of the game mode |
| `duration` | `str` | Duration of the game mode |
| `economyType` | `str` | Type of economy system |
| `gameFeatureOverrides` | `list` | Game feature overrides |
| `gameRuleBoolOverrides` | `list` | Game rule boolean overrides |
| `isMinimapHidden` | `bool` | Whether the minimap is hidden |
| `isTeamVoiceAllowed` | `bool` | Whether team voice chat is allowed |
| `orbCount` | `int` | Number of orbs in the game mode |
| `roundsPerHalf` | `int` | Number of rounds per half |
| `teamRoles` | `list` | Team roles in the game mode |
| `uuid` | `str` | Unique identifier for the game mode |

#### Example: List

```python
game_modes = client.GameMode().list()
```


### Map

Create an instance: `map = client.Map()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetPath` | `str` | Asset path in game files |
| `callouts` | `list` |  |
| `coordinates` | `str` | Geographic coordinates of the map location |
| `displayIcon` | `str` | URL to the map's display icon |
| `displayName` | `str` | Display name of the map |
| `id` | `str` |  |
| `listViewIcon` | `str` | URL to the map's list view icon |
| `mapUrl` | `str` | URL to the map overview |
| `narrativeDescription` | `str` | Narrative description of the map |
| `splash` | `str` | URL to the map's splash image |
| `tacticalDescription` | `str` | Tactical description of the map |
| `uuid` | `str` | Unique identifier for the map |
| `xMultiplier` | `float` | X coordinate multiplier |
| `xScalarToAdd` | `float` | X scalar to add |
| `yMultiplier` | `float` | Y coordinate multiplier |
| `yScalarToAdd` | `float` | Y scalar to add |

#### Example: Load

```python
map = client.Map().load({"id": "map_id"})
```

#### Example: List

```python
maps = client.Map().list()
```


### Weapon

Create an instance: `weapon = client.Weapon()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetPath` | `str` | Asset path in game files |
| `category` | `str` | Weapon category (e.g., Rifle, Pistol) |
| `defaultSkinUuid` | `str` | UUID of the default skin |
| `displayIcon` | `str` | URL to the weapon's display icon |
| `displayName` | `str` | Display name of the weapon |
| `id` | `str` |  |
| `killStreamIcon` | `str` | URL to the weapon's kill stream icon |
| `shopData` | `dict` |  |
| `skins` | `list` |  |
| `uuid` | `str` | Unique identifier for the weapon |
| `weaponStats` | `dict` |  |

#### Example: Load

```python
weapon = client.Weapon().load({"id": "weapon_id"})
```

#### Example: List

```python
weapons = client.Weapon().list()
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── valorant_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`valorant_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
cosmetic = client.Cosmetic()
cosmetic.list()

# cosmetic.data_get() now returns the cosmetic data from the last list
# cosmetic.match_get() returns the last match criteria
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
