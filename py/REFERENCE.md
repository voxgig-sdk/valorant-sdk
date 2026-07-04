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
agent = client.agent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ability` | ``$ARRAY`` | No |  |
| `asset_path` | ``$STRING`` | No |  |
| `background` | ``$STRING`` | No |  |
| `background_gradient_color` | ``$ARRAY`` | No |  |
| `bust_portrait` | ``$STRING`` | No |  |
| `character_tag` | ``$ARRAY`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `description` | ``$STRING`` | No |  |
| `developer_name` | ``$STRING`` | No |  |
| `display_icon` | ``$STRING`` | No |  |
| `display_icon_small` | ``$STRING`` | No |  |
| `display_name` | ``$STRING`` | No |  |
| `full_portrait` | ``$STRING`` | No |  |
| `full_portrait_v2` | ``$STRING`` | No |  |
| `is_available_for_test` | ``$BOOLEAN`` | No |  |
| `is_base_content` | ``$BOOLEAN`` | No |  |
| `is_full_portrait_right_facing` | ``$BOOLEAN`` | No |  |
| `is_playable_character` | ``$BOOLEAN`` | No |  |
| `killfeed_portrait` | ``$STRING`` | No |  |
| `role` | ``$OBJECT`` | No |  |
| `status` | ``$INTEGER`` | No |  |
| `uuid` | ``$STRING`` | No |  |
| `voice_line` | ``$OBJECT`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.agent.list({})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.agent.load({"id": "agent_id"})
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
competitive = client.competitive
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_object_name` | ``$STRING`` | No |  |
| `asset_path` | ``$STRING`` | No |  |
| `tier` | ``$ARRAY`` | No |  |
| `uuid` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.competitive.list({})
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
cosmetic = client.cosmetic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animation_gif` | ``$STRING`` | No |  |
| `animation_png` | ``$STRING`` | No |  |
| `asset_path` | ``$STRING`` | No |  |
| `category` | ``$STRING`` | No |  |
| `display_icon` | ``$STRING`` | No |  |
| `display_name` | ``$STRING`` | No |  |
| `full_icon` | ``$STRING`` | No |  |
| `full_transparent_icon` | ``$STRING`` | No |  |
| `hide_if_not_owned` | ``$BOOLEAN`` | No |  |
| `is_hidden_if_not_owned` | ``$BOOLEAN`` | No |  |
| `is_null_spray` | ``$BOOLEAN`` | No |  |
| `large_art` | ``$STRING`` | No |  |
| `level` | ``$ARRAY`` | No |  |
| `small_art` | ``$STRING`` | No |  |
| `theme_uuid` | ``$STRING`` | No |  |
| `uuid` | ``$STRING`` | No |  |
| `wide_art` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.cosmetic.list({})
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
game_mode = client.game_mode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allows_match_timeout` | ``$BOOLEAN`` | No |  |
| `asset_path` | ``$STRING`` | No |  |
| `display_icon` | ``$STRING`` | No |  |
| `display_name` | ``$STRING`` | No |  |
| `duration` | ``$STRING`` | No |  |
| `economy_type` | ``$STRING`` | No |  |
| `game_feature_override` | ``$ARRAY`` | No |  |
| `game_rule_bool_override` | ``$ARRAY`` | No |  |
| `is_minimap_hidden` | ``$BOOLEAN`` | No |  |
| `is_team_voice_allowed` | ``$BOOLEAN`` | No |  |
| `orb_count` | ``$INTEGER`` | No |  |
| `rounds_per_half` | ``$INTEGER`` | No |  |
| `team_role` | ``$ARRAY`` | No |  |
| `uuid` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.game_mode.list({})
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
map = client.map
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_path` | ``$STRING`` | No |  |
| `callout` | ``$ARRAY`` | No |  |
| `coordinate` | ``$STRING`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `display_icon` | ``$STRING`` | No |  |
| `display_name` | ``$STRING`` | No |  |
| `list_view_icon` | ``$STRING`` | No |  |
| `map_url` | ``$STRING`` | No |  |
| `narrative_description` | ``$STRING`` | No |  |
| `splash` | ``$STRING`` | No |  |
| `status` | ``$INTEGER`` | No |  |
| `tactical_description` | ``$STRING`` | No |  |
| `uuid` | ``$STRING`` | No |  |
| `x_multiplier` | ``$NUMBER`` | No |  |
| `x_scalar_to_add` | ``$NUMBER`` | No |  |
| `y_multiplier` | ``$NUMBER`` | No |  |
| `y_scalar_to_add` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.map.list({})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.map.load({"id": "map_id"})
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
weapon = client.weapon
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_path` | ``$STRING`` | No |  |
| `category` | ``$STRING`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `default_skin_uuid` | ``$STRING`` | No |  |
| `display_icon` | ``$STRING`` | No |  |
| `display_name` | ``$STRING`` | No |  |
| `kill_stream_icon` | ``$STRING`` | No |  |
| `shop_data` | ``$OBJECT`` | No |  |
| `skin` | ``$ARRAY`` | No |  |
| `status` | ``$INTEGER`` | No |  |
| `uuid` | ``$STRING`` | No |  |
| `weapon_stat` | ``$OBJECT`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.weapon.list({})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.weapon.load({"id": "weapon_id"})
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

