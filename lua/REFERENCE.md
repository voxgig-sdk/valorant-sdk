# Valorant Lua SDK Reference

Complete API reference for the Valorant Lua SDK.


## ValorantSDK

### Constructor

```lua
local sdk = require("valorant_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts, sdkopts)`

Create a test client with mock features active. Both arguments may be `nil`.

```lua
local client = sdk.test(nil, nil)
```


### Instance Methods

#### `Agent(data)`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `Competitive(data)`

Create a new `Competitive` entity instance. Pass `nil` for no initial data.

#### `Cosmetic(data)`

Create a new `Cosmetic` entity instance. Pass `nil` for no initial data.

#### `GameMode(data)`

Create a new `GameMode` entity instance. Pass `nil` for no initial data.

#### `Map(data)`

Create a new `Map` entity instance. Pass `nil` for no initial data.

#### `Weapon(data)`

Create a new `Weapon` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AgentEntity

```lua
local agent = client:Agent(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Agent(nil):list(nil, nil)
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Agent(nil):load({ id = "agent_id" }, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CompetitiveEntity

```lua
local competitive = client:Competitive(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_object_name` | ``$STRING`` | No |  |
| `asset_path` | ``$STRING`` | No |  |
| `tier` | ``$ARRAY`` | No |  |
| `uuid` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Competitive(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompetitiveEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CosmeticEntity

```lua
local cosmetic = client:Cosmetic(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Cosmetic(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CosmeticEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GameModeEntity

```lua
local game_mode = client:GameMode(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GameMode(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GameModeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MapEntity

```lua
local map = client:Map(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Map(nil):list(nil, nil)
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Map(nil):load({ id = "map_id" }, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MapEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WeaponEntity

```lua
local weapon = client:Weapon(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Weapon(nil):list(nil, nil)
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Weapon(nil):load({ id = "weapon_id" }, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WeaponEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

