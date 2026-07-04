# Valorant Golang SDK Reference

Complete API reference for the Valorant Golang SDK.


## ValorantSDK

### Constructor

```go
func NewValorantSDK(options map[string]any) *ValorantSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *ValorantSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *ValorantSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Agent(data map[string]any) ValorantEntity`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `Competitive(data map[string]any) ValorantEntity`

Create a new `Competitive` entity instance. Pass `nil` for no initial data.

#### `Cosmetic(data map[string]any) ValorantEntity`

Create a new `Cosmetic` entity instance. Pass `nil` for no initial data.

#### `GameMode(data map[string]any) ValorantEntity`

Create a new `GameMode` entity instance. Pass `nil` for no initial data.

#### `Map(data map[string]any) ValorantEntity`

Create a new `Map` entity instance. Pass `nil` for no initial data.

#### `Weapon(data map[string]any) ValorantEntity`

Create a new `Weapon` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AgentEntity

```go
agent := client.Agent(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Agent(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Agent(nil).Load(map[string]any{"id": "agent_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CompetitiveEntity

```go
competitive := client.Competitive(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_object_name` | ``$STRING`` | No |  |
| `asset_path` | ``$STRING`` | No |  |
| `tier` | ``$ARRAY`` | No |  |
| `uuid` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Competitive(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompetitiveEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CosmeticEntity

```go
cosmetic := client.Cosmetic(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Cosmetic(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CosmeticEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GameModeEntity

```go
game_mode := client.GameMode(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GameMode(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GameModeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MapEntity

```go
map := client.Map(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Map(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Map(nil).Load(map[string]any{"id": "map_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MapEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WeaponEntity

```go
weapon := client.Weapon(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Weapon(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Weapon(nil).Load(map[string]any{"id": "weapon_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WeaponEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewValorantSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

