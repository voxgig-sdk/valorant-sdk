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
| `ability` | `[]any` | No |  |
| `asset_path` | `string` | No |  |
| `background` | `string` | No |  |
| `background_gradient_color` | `[]any` | No |  |
| `bust_portrait` | `string` | No |  |
| `character_tag` | `[]any` | No |  |
| `data` | `map[string]any` | No |  |
| `description` | `string` | No |  |
| `developer_name` | `string` | No |  |
| `display_icon` | `string` | No |  |
| `display_icon_small` | `string` | No |  |
| `display_name` | `string` | No |  |
| `full_portrait` | `string` | No |  |
| `full_portrait_v2` | `string` | No |  |
| `is_available_for_test` | `bool` | No |  |
| `is_base_content` | `bool` | No |  |
| `is_full_portrait_right_facing` | `bool` | No |  |
| `is_playable_character` | `bool` | No |  |
| `killfeed_portrait` | `string` | No |  |
| `role` | `map[string]any` | No |  |
| `status` | `int` | No |  |
| `uuid` | `string` | No |  |
| `voice_line` | `map[string]any` | No |  |

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
| `asset_object_name` | `string` | No |  |
| `asset_path` | `string` | No |  |
| `tier` | `[]any` | No |  |
| `uuid` | `string` | No |  |

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
| `animation_gif` | `string` | No |  |
| `animation_png` | `string` | No |  |
| `asset_path` | `string` | No |  |
| `category` | `string` | No |  |
| `display_icon` | `string` | No |  |
| `display_name` | `string` | No |  |
| `full_icon` | `string` | No |  |
| `full_transparent_icon` | `string` | No |  |
| `hide_if_not_owned` | `bool` | No |  |
| `is_hidden_if_not_owned` | `bool` | No |  |
| `is_null_spray` | `bool` | No |  |
| `large_art` | `string` | No |  |
| `level` | `[]any` | No |  |
| `small_art` | `string` | No |  |
| `theme_uuid` | `string` | No |  |
| `uuid` | `string` | No |  |
| `wide_art` | `string` | No |  |

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
| `allows_match_timeout` | `bool` | No |  |
| `asset_path` | `string` | No |  |
| `display_icon` | `string` | No |  |
| `display_name` | `string` | No |  |
| `duration` | `string` | No |  |
| `economy_type` | `string` | No |  |
| `game_feature_override` | `[]any` | No |  |
| `game_rule_bool_override` | `[]any` | No |  |
| `is_minimap_hidden` | `bool` | No |  |
| `is_team_voice_allowed` | `bool` | No |  |
| `orb_count` | `int` | No |  |
| `rounds_per_half` | `int` | No |  |
| `team_role` | `[]any` | No |  |
| `uuid` | `string` | No |  |

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
| `asset_path` | `string` | No |  |
| `callout` | `[]any` | No |  |
| `coordinate` | `string` | No |  |
| `data` | `map[string]any` | No |  |
| `display_icon` | `string` | No |  |
| `display_name` | `string` | No |  |
| `list_view_icon` | `string` | No |  |
| `map_url` | `string` | No |  |
| `narrative_description` | `string` | No |  |
| `splash` | `string` | No |  |
| `status` | `int` | No |  |
| `tactical_description` | `string` | No |  |
| `uuid` | `string` | No |  |
| `x_multiplier` | `float64` | No |  |
| `x_scalar_to_add` | `float64` | No |  |
| `y_multiplier` | `float64` | No |  |
| `y_scalar_to_add` | `float64` | No |  |

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
| `asset_path` | `string` | No |  |
| `category` | `string` | No |  |
| `data` | `map[string]any` | No |  |
| `default_skin_uuid` | `string` | No |  |
| `display_icon` | `string` | No |  |
| `display_name` | `string` | No |  |
| `kill_stream_icon` | `string` | No |  |
| `shop_data` | `map[string]any` | No |  |
| `skin` | `[]any` | No |  |
| `status` | `int` | No |  |
| `uuid` | `string` | No |  |
| `weapon_stat` | `map[string]any` | No |  |

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

