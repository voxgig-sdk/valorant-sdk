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
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
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
| `ability` | `table` | No |  |
| `asset_path` | `string` | No |  |
| `background` | `string` | No |  |
| `background_gradient_color` | `table` | No |  |
| `bust_portrait` | `string` | No |  |
| `character_tag` | `table` | No |  |
| `data` | `table` | No |  |
| `description` | `string` | No |  |
| `developer_name` | `string` | No |  |
| `display_icon` | `string` | No |  |
| `display_icon_small` | `string` | No |  |
| `display_name` | `string` | No |  |
| `full_portrait` | `string` | No |  |
| `full_portrait_v2` | `string` | No |  |
| `is_available_for_test` | `boolean` | No |  |
| `is_base_content` | `boolean` | No |  |
| `is_full_portrait_right_facing` | `boolean` | No |  |
| `is_playable_character` | `boolean` | No |  |
| `killfeed_portrait` | `string` | No |  |
| `role` | `table` | No |  |
| `status` | `number` | No |  |
| `uuid` | `string` | No |  |
| `voice_line` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Agent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Agent():load({ id = "agent_id" })
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
| `asset_object_name` | `string` | No |  |
| `asset_path` | `string` | No |  |
| `tier` | `table` | No |  |
| `uuid` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Competitive():list()
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
| `animation_gif` | `string` | No |  |
| `animation_png` | `string` | No |  |
| `asset_path` | `string` | No |  |
| `category` | `string` | No |  |
| `display_icon` | `string` | No |  |
| `display_name` | `string` | No |  |
| `full_icon` | `string` | No |  |
| `full_transparent_icon` | `string` | No |  |
| `hide_if_not_owned` | `boolean` | No |  |
| `is_hidden_if_not_owned` | `boolean` | No |  |
| `is_null_spray` | `boolean` | No |  |
| `large_art` | `string` | No |  |
| `level` | `table` | No |  |
| `small_art` | `string` | No |  |
| `theme_uuid` | `string` | No |  |
| `uuid` | `string` | No |  |
| `wide_art` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Cosmetic():list()
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
| `allows_match_timeout` | `boolean` | No |  |
| `asset_path` | `string` | No |  |
| `display_icon` | `string` | No |  |
| `display_name` | `string` | No |  |
| `duration` | `string` | No |  |
| `economy_type` | `string` | No |  |
| `game_feature_override` | `table` | No |  |
| `game_rule_bool_override` | `table` | No |  |
| `is_minimap_hidden` | `boolean` | No |  |
| `is_team_voice_allowed` | `boolean` | No |  |
| `orb_count` | `number` | No |  |
| `rounds_per_half` | `number` | No |  |
| `team_role` | `table` | No |  |
| `uuid` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GameMode():list()
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
| `asset_path` | `string` | No |  |
| `callout` | `table` | No |  |
| `coordinate` | `string` | No |  |
| `data` | `table` | No |  |
| `display_icon` | `string` | No |  |
| `display_name` | `string` | No |  |
| `list_view_icon` | `string` | No |  |
| `map_url` | `string` | No |  |
| `narrative_description` | `string` | No |  |
| `splash` | `string` | No |  |
| `status` | `number` | No |  |
| `tactical_description` | `string` | No |  |
| `uuid` | `string` | No |  |
| `x_multiplier` | `number` | No |  |
| `x_scalar_to_add` | `number` | No |  |
| `y_multiplier` | `number` | No |  |
| `y_scalar_to_add` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Map():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Map():load({ id = "map_id" })
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
| `asset_path` | `string` | No |  |
| `category` | `string` | No |  |
| `data` | `table` | No |  |
| `default_skin_uuid` | `string` | No |  |
| `display_icon` | `string` | No |  |
| `display_name` | `string` | No |  |
| `kill_stream_icon` | `string` | No |  |
| `shop_data` | `table` | No |  |
| `skin` | `table` | No |  |
| `status` | `number` | No |  |
| `uuid` | `string` | No |  |
| `weapon_stat` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Weapon():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Weapon():load({ id = "weapon_id" })
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

