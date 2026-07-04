# Valorant Python SDK



The Python SDK for the Valorant API — an entity-oriented client following Pythonic conventions.

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

### 2. List agents

```python
try:
    result = client.agent.list()
    for item in result:
        d = item.data_get()
        print(d["id"], d["name"])
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an agent

```python
try:
    result = client.agent.load({"id": "example_id"})
    print(result)
except Exception as err:
    print(f"load failed: {err}")
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
    print(result["err"])     # error value
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

result = client.agent.load({"id": "test01"})
# result contains mock response data
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
| `Agent` | `(data) -> AgentEntity` | Create a Agent entity instance. |
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
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the bare result data (a `dict` for single-entity
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
| `ability` |  |
| `asset_path` |  |
| `background` |  |
| `background_gradient_color` |  |
| `bust_portrait` |  |
| `character_tag` |  |
| `data` |  |
| `description` |  |
| `developer_name` |  |
| `display_icon` |  |
| `display_icon_small` |  |
| `display_name` |  |
| `full_portrait` |  |
| `full_portrait_v2` |  |
| `is_available_for_test` |  |
| `is_base_content` |  |
| `is_full_portrait_right_facing` |  |
| `is_playable_character` |  |
| `killfeed_portrait` |  |
| `role` |  |
| `status` |  |
| `uuid` |  |
| `voice_line` |  |

Operations: List, Load.

API path: `/v1/agents`

#### Competitive

| Field | Description |
| --- | --- |
| `asset_object_name` |  |
| `asset_path` |  |
| `tier` |  |
| `uuid` |  |

Operations: List.

API path: `/v1/competitivetiers`

#### Cosmetic

| Field | Description |
| --- | --- |
| `animation_gif` |  |
| `animation_png` |  |
| `asset_path` |  |
| `category` |  |
| `display_icon` |  |
| `display_name` |  |
| `full_icon` |  |
| `full_transparent_icon` |  |
| `hide_if_not_owned` |  |
| `is_hidden_if_not_owned` |  |
| `is_null_spray` |  |
| `large_art` |  |
| `level` |  |
| `small_art` |  |
| `theme_uuid` |  |
| `uuid` |  |
| `wide_art` |  |

Operations: List.

API path: `/v1/buddies`

#### GameMode

| Field | Description |
| --- | --- |
| `allows_match_timeout` |  |
| `asset_path` |  |
| `display_icon` |  |
| `display_name` |  |
| `duration` |  |
| `economy_type` |  |
| `game_feature_override` |  |
| `game_rule_bool_override` |  |
| `is_minimap_hidden` |  |
| `is_team_voice_allowed` |  |
| `orb_count` |  |
| `rounds_per_half` |  |
| `team_role` |  |
| `uuid` |  |

Operations: List.

API path: `/v1/gamemodes`

#### Map

| Field | Description |
| --- | --- |
| `asset_path` |  |
| `callout` |  |
| `coordinate` |  |
| `data` |  |
| `display_icon` |  |
| `display_name` |  |
| `list_view_icon` |  |
| `map_url` |  |
| `narrative_description` |  |
| `splash` |  |
| `status` |  |
| `tactical_description` |  |
| `uuid` |  |
| `x_multiplier` |  |
| `x_scalar_to_add` |  |
| `y_multiplier` |  |
| `y_scalar_to_add` |  |

Operations: List, Load.

API path: `/v1/maps`

#### Weapon

| Field | Description |
| --- | --- |
| `asset_path` |  |
| `category` |  |
| `data` |  |
| `default_skin_uuid` |  |
| `display_icon` |  |
| `display_name` |  |
| `kill_stream_icon` |  |
| `shop_data` |  |
| `skin` |  |
| `status` |  |
| `uuid` |  |
| `weapon_stat` |  |

Operations: List, Load.

API path: `/v1/weapons`



## Entities


### Agent

Create an instance: `const agent = client.agent`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ability` | ``$ARRAY`` |  |
| `asset_path` | ``$STRING`` |  |
| `background` | ``$STRING`` |  |
| `background_gradient_color` | ``$ARRAY`` |  |
| `bust_portrait` | ``$STRING`` |  |
| `character_tag` | ``$ARRAY`` |  |
| `data` | ``$OBJECT`` |  |
| `description` | ``$STRING`` |  |
| `developer_name` | ``$STRING`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_icon_small` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `full_portrait` | ``$STRING`` |  |
| `full_portrait_v2` | ``$STRING`` |  |
| `is_available_for_test` | ``$BOOLEAN`` |  |
| `is_base_content` | ``$BOOLEAN`` |  |
| `is_full_portrait_right_facing` | ``$BOOLEAN`` |  |
| `is_playable_character` | ``$BOOLEAN`` |  |
| `killfeed_portrait` | ``$STRING`` |  |
| `role` | ``$OBJECT`` |  |
| `status` | ``$INTEGER`` |  |
| `uuid` | ``$STRING`` |  |
| `voice_line` | ``$OBJECT`` |  |

#### Example: Load

```ts
const agent = await client.agent.load({ id: 'agent_id' })
```

#### Example: List

```ts
const agents = await client.agent.list()
```


### Competitive

Create an instance: `const competitive = client.competitive`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_object_name` | ``$STRING`` |  |
| `asset_path` | ``$STRING`` |  |
| `tier` | ``$ARRAY`` |  |
| `uuid` | ``$STRING`` |  |

#### Example: List

```ts
const competitives = await client.competitive.list()
```


### Cosmetic

Create an instance: `const cosmetic = client.cosmetic`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animation_gif` | ``$STRING`` |  |
| `animation_png` | ``$STRING`` |  |
| `asset_path` | ``$STRING`` |  |
| `category` | ``$STRING`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `full_icon` | ``$STRING`` |  |
| `full_transparent_icon` | ``$STRING`` |  |
| `hide_if_not_owned` | ``$BOOLEAN`` |  |
| `is_hidden_if_not_owned` | ``$BOOLEAN`` |  |
| `is_null_spray` | ``$BOOLEAN`` |  |
| `large_art` | ``$STRING`` |  |
| `level` | ``$ARRAY`` |  |
| `small_art` | ``$STRING`` |  |
| `theme_uuid` | ``$STRING`` |  |
| `uuid` | ``$STRING`` |  |
| `wide_art` | ``$STRING`` |  |

#### Example: List

```ts
const cosmetics = await client.cosmetic.list()
```


### GameMode

Create an instance: `const game_mode = client.game_mode`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allows_match_timeout` | ``$BOOLEAN`` |  |
| `asset_path` | ``$STRING`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `duration` | ``$STRING`` |  |
| `economy_type` | ``$STRING`` |  |
| `game_feature_override` | ``$ARRAY`` |  |
| `game_rule_bool_override` | ``$ARRAY`` |  |
| `is_minimap_hidden` | ``$BOOLEAN`` |  |
| `is_team_voice_allowed` | ``$BOOLEAN`` |  |
| `orb_count` | ``$INTEGER`` |  |
| `rounds_per_half` | ``$INTEGER`` |  |
| `team_role` | ``$ARRAY`` |  |
| `uuid` | ``$STRING`` |  |

#### Example: List

```ts
const game_modes = await client.game_mode.list()
```


### Map

Create an instance: `const map = client.map`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_path` | ``$STRING`` |  |
| `callout` | ``$ARRAY`` |  |
| `coordinate` | ``$STRING`` |  |
| `data` | ``$OBJECT`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `list_view_icon` | ``$STRING`` |  |
| `map_url` | ``$STRING`` |  |
| `narrative_description` | ``$STRING`` |  |
| `splash` | ``$STRING`` |  |
| `status` | ``$INTEGER`` |  |
| `tactical_description` | ``$STRING`` |  |
| `uuid` | ``$STRING`` |  |
| `x_multiplier` | ``$NUMBER`` |  |
| `x_scalar_to_add` | ``$NUMBER`` |  |
| `y_multiplier` | ``$NUMBER`` |  |
| `y_scalar_to_add` | ``$NUMBER`` |  |

#### Example: Load

```ts
const map = await client.map.load({ id: 'map_id' })
```

#### Example: List

```ts
const maps = await client.map.list()
```


### Weapon

Create an instance: `const weapon = client.weapon`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_path` | ``$STRING`` |  |
| `category` | ``$STRING`` |  |
| `data` | ``$OBJECT`` |  |
| `default_skin_uuid` | ``$STRING`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `kill_stream_icon` | ``$STRING`` |  |
| `shop_data` | ``$OBJECT`` |  |
| `skin` | ``$ARRAY`` |  |
| `status` | ``$INTEGER`` |  |
| `uuid` | ``$STRING`` |  |
| `weapon_stat` | ``$OBJECT`` |  |

#### Example: Load

```ts
const weapon = await client.weapon.load({ id: 'weapon_id' })
```

#### Example: List

```ts
const weapons = await client.weapon.list()
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as the second element in the return tuple.

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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
agent = client.agent
agent.load({"id": "example_id"})

# agent.data_get() now returns the loaded agent data
# agent.match_get() returns the last match criteria
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
