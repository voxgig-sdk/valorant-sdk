# Valorant Ruby SDK Reference

Complete API reference for the Valorant Ruby SDK.


## ValorantSDK

### Constructor

```ruby
require_relative 'Valorant_sdk'

client = ValorantSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ValorantSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = ValorantSDK.test
```


### Instance Methods

#### `Agent(data = nil)`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `Competitive(data = nil)`

Create a new `Competitive` entity instance. Pass `nil` for no initial data.

#### `Cosmetic(data = nil)`

Create a new `Cosmetic` entity instance. Pass `nil` for no initial data.

#### `GameMode(data = nil)`

Create a new `GameMode` entity instance. Pass `nil` for no initial data.

#### `Map(data = nil)`

Create a new `Map` entity instance. Pass `nil` for no initial data.

#### `Weapon(data = nil)`

Create a new `Weapon` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AgentEntity

```ruby
agent = client.Agent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ability` | `Array` | No |  |
| `asset_path` | `String` | No |  |
| `background` | `String` | No |  |
| `background_gradient_color` | `Array` | No |  |
| `bust_portrait` | `String` | No |  |
| `character_tag` | `Array` | No |  |
| `data` | `Hash` | No |  |
| `description` | `String` | No |  |
| `developer_name` | `String` | No |  |
| `display_icon` | `String` | No |  |
| `display_icon_small` | `String` | No |  |
| `display_name` | `String` | No |  |
| `full_portrait` | `String` | No |  |
| `full_portrait_v2` | `String` | No |  |
| `is_available_for_test` | `Boolean` | No |  |
| `is_base_content` | `Boolean` | No |  |
| `is_full_portrait_right_facing` | `Boolean` | No |  |
| `is_playable_character` | `Boolean` | No |  |
| `killfeed_portrait` | `String` | No |  |
| `role` | `Hash` | No |  |
| `status` | `Integer` | No |  |
| `uuid` | `String` | No |  |
| `voice_line` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Agent.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Agent.load({ "id" => "agent_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CompetitiveEntity

```ruby
competitive = client.Competitive
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_object_name` | `String` | No |  |
| `asset_path` | `String` | No |  |
| `tier` | `Array` | No |  |
| `uuid` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Competitive.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CompetitiveEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CosmeticEntity

```ruby
cosmetic = client.Cosmetic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animation_gif` | `String` | No |  |
| `animation_png` | `String` | No |  |
| `asset_path` | `String` | No |  |
| `category` | `String` | No |  |
| `display_icon` | `String` | No |  |
| `display_name` | `String` | No |  |
| `full_icon` | `String` | No |  |
| `full_transparent_icon` | `String` | No |  |
| `hide_if_not_owned` | `Boolean` | No |  |
| `is_hidden_if_not_owned` | `Boolean` | No |  |
| `is_null_spray` | `Boolean` | No |  |
| `large_art` | `String` | No |  |
| `level` | `Array` | No |  |
| `small_art` | `String` | No |  |
| `theme_uuid` | `String` | No |  |
| `uuid` | `String` | No |  |
| `wide_art` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Cosmetic.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CosmeticEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GameModeEntity

```ruby
game_mode = client.GameMode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allows_match_timeout` | `Boolean` | No |  |
| `asset_path` | `String` | No |  |
| `display_icon` | `String` | No |  |
| `display_name` | `String` | No |  |
| `duration` | `String` | No |  |
| `economy_type` | `String` | No |  |
| `game_feature_override` | `Array` | No |  |
| `game_rule_bool_override` | `Array` | No |  |
| `is_minimap_hidden` | `Boolean` | No |  |
| `is_team_voice_allowed` | `Boolean` | No |  |
| `orb_count` | `Integer` | No |  |
| `rounds_per_half` | `Integer` | No |  |
| `team_role` | `Array` | No |  |
| `uuid` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.GameMode.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GameModeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MapEntity

```ruby
map = client.Map
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_path` | `String` | No |  |
| `callout` | `Array` | No |  |
| `coordinate` | `String` | No |  |
| `data` | `Hash` | No |  |
| `display_icon` | `String` | No |  |
| `display_name` | `String` | No |  |
| `list_view_icon` | `String` | No |  |
| `map_url` | `String` | No |  |
| `narrative_description` | `String` | No |  |
| `splash` | `String` | No |  |
| `status` | `Integer` | No |  |
| `tactical_description` | `String` | No |  |
| `uuid` | `String` | No |  |
| `x_multiplier` | `Float` | No |  |
| `x_scalar_to_add` | `Float` | No |  |
| `y_multiplier` | `Float` | No |  |
| `y_scalar_to_add` | `Float` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Map.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Map.load({ "id" => "map_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MapEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WeaponEntity

```ruby
weapon = client.Weapon
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_path` | `String` | No |  |
| `category` | `String` | No |  |
| `data` | `Hash` | No |  |
| `default_skin_uuid` | `String` | No |  |
| `display_icon` | `String` | No |  |
| `display_name` | `String` | No |  |
| `kill_stream_icon` | `String` | No |  |
| `shop_data` | `Hash` | No |  |
| `skin` | `Array` | No |  |
| `status` | `Integer` | No |  |
| `uuid` | `String` | No |  |
| `weapon_stat` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Weapon.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Weapon.load({ "id" => "weapon_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WeaponEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = ValorantSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

