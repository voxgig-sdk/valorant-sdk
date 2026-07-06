# Valorant Python SDK Reference

Complete API reference for the Valorant Python SDK.


## ValorantSDK

### Constructor

```python
from valorant_sdk import ValorantSDK

client = ValorantSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ValorantSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = ValorantSDK.test()
```


### Instance Methods

#### `Agent(data=None)`

Create a new `AgentEntity` instance. Pass `None` for no initial data.

#### `Competitive(data=None)`

Create a new `CompetitiveEntity` instance. Pass `None` for no initial data.

#### `Cosmetic(data=None)`

Create a new `CosmeticEntity` instance. Pass `None` for no initial data.

#### `GameMode(data=None)`

Create a new `GameModeEntity` instance. Pass `None` for no initial data.

#### `Map(data=None)`

Create a new `MapEntity` instance. Pass `None` for no initial data.

#### `Weapon(data=None)`

Create a new `WeaponEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AgentEntity

```python
agent = client.Agent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ability` | `list` | No |  |
| `asset_path` | `str` | No |  |
| `background` | `str` | No |  |
| `background_gradient_color` | `list` | No |  |
| `bust_portrait` | `str` | No |  |
| `character_tag` | `list` | No |  |
| `data` | `dict` | No |  |
| `description` | `str` | No |  |
| `developer_name` | `str` | No |  |
| `display_icon` | `str` | No |  |
| `display_icon_small` | `str` | No |  |
| `display_name` | `str` | No |  |
| `full_portrait` | `str` | No |  |
| `full_portrait_v2` | `str` | No |  |
| `is_available_for_test` | `bool` | No |  |
| `is_base_content` | `bool` | No |  |
| `is_full_portrait_right_facing` | `bool` | No |  |
| `is_playable_character` | `bool` | No |  |
| `killfeed_portrait` | `str` | No |  |
| `role` | `dict` | No |  |
| `status` | `int` | No |  |
| `uuid` | `str` | No |  |
| `voice_line` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Agent().list()
for agent in results:
    print(agent)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Agent().load({"id": "agent_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompetitiveEntity

```python
competitive = client.Competitive()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_object_name` | `str` | No |  |
| `asset_path` | `str` | No |  |
| `tier` | `list` | No |  |
| `uuid` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Competitive().list()
for competitive in results:
    print(competitive)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompetitiveEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CosmeticEntity

```python
cosmetic = client.Cosmetic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animation_gif` | `str` | No |  |
| `animation_png` | `str` | No |  |
| `asset_path` | `str` | No |  |
| `category` | `str` | No |  |
| `display_icon` | `str` | No |  |
| `display_name` | `str` | No |  |
| `full_icon` | `str` | No |  |
| `full_transparent_icon` | `str` | No |  |
| `hide_if_not_owned` | `bool` | No |  |
| `is_hidden_if_not_owned` | `bool` | No |  |
| `is_null_spray` | `bool` | No |  |
| `large_art` | `str` | No |  |
| `level` | `list` | No |  |
| `small_art` | `str` | No |  |
| `theme_uuid` | `str` | No |  |
| `uuid` | `str` | No |  |
| `wide_art` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Cosmetic().list()
for cosmetic in results:
    print(cosmetic)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CosmeticEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GameModeEntity

```python
game_mode = client.GameMode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allows_match_timeout` | `bool` | No |  |
| `asset_path` | `str` | No |  |
| `display_icon` | `str` | No |  |
| `display_name` | `str` | No |  |
| `duration` | `str` | No |  |
| `economy_type` | `str` | No |  |
| `game_feature_override` | `list` | No |  |
| `game_rule_bool_override` | `list` | No |  |
| `is_minimap_hidden` | `bool` | No |  |
| `is_team_voice_allowed` | `bool` | No |  |
| `orb_count` | `int` | No |  |
| `rounds_per_half` | `int` | No |  |
| `team_role` | `list` | No |  |
| `uuid` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GameMode().list()
for game_mode in results:
    print(game_mode)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GameModeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MapEntity

```python
map = client.Map()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_path` | `str` | No |  |
| `callout` | `list` | No |  |
| `coordinate` | `str` | No |  |
| `data` | `dict` | No |  |
| `display_icon` | `str` | No |  |
| `display_name` | `str` | No |  |
| `list_view_icon` | `str` | No |  |
| `map_url` | `str` | No |  |
| `narrative_description` | `str` | No |  |
| `splash` | `str` | No |  |
| `status` | `int` | No |  |
| `tactical_description` | `str` | No |  |
| `uuid` | `str` | No |  |
| `x_multiplier` | `float` | No |  |
| `x_scalar_to_add` | `float` | No |  |
| `y_multiplier` | `float` | No |  |
| `y_scalar_to_add` | `float` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Map().list()
for map in results:
    print(map)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Map().load({"id": "map_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MapEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WeaponEntity

```python
weapon = client.Weapon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_path` | `str` | No |  |
| `category` | `str` | No |  |
| `data` | `dict` | No |  |
| `default_skin_uuid` | `str` | No |  |
| `display_icon` | `str` | No |  |
| `display_name` | `str` | No |  |
| `kill_stream_icon` | `str` | No |  |
| `shop_data` | `dict` | No |  |
| `skin` | `list` | No |  |
| `status` | `int` | No |  |
| `uuid` | `str` | No |  |
| `weapon_stat` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Weapon().list()
for weapon in results:
    print(weapon)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Weapon().load({"id": "weapon_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WeaponEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = ValorantSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

