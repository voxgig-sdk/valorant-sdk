# Valorant Ruby SDK Reference

Complete API reference for the Valorant Ruby SDK.


## ValorantSDK

### Constructor

```ruby
require_relative 'valorant_sdk'

client = ValorantSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
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

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

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

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## AgentEntity

```ruby
agent = client.Agent
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Agent.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Agent.load({ "id" => "agent_id" })
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
| `asset_object_name` | ``$STRING`` | No |  |
| `asset_path` | ``$STRING`` | No |  |
| `tier` | ``$ARRAY`` | No |  |
| `uuid` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Competitive.list(nil)
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Cosmetic.list(nil)
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.GameMode.list(nil)
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Map.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Map.load({ "id" => "map_id" })
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Weapon.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Weapon.load({ "id" => "weapon_id" })
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

