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
fmt.Println(agent.GetName()) // "agent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abilities` | `[]any` | No |  |
| `assetPath` | `string` | No |  |
| `background` | `string` | No |  |
| `backgroundGradientColors` | `[]any` | No |  |
| `bustPortrait` | `string` | No |  |
| `characterTags` | `[]any` | No |  |
| `description` | `string` | No |  |
| `developerName` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayIconSmall` | `string` | No |  |
| `displayName` | `string` | No |  |
| `fullPortrait` | `string` | No |  |
| `fullPortraitV2` | `string` | No |  |
| `isAvailableForTest` | `bool` | No |  |
| `isBaseContent` | `bool` | No |  |
| `isFullPortraitRightFacing` | `bool` | No |  |
| `isPlayableCharacter` | `bool` | No |  |
| `killfeedPortrait` | `string` | No |  |
| `role` | `map[string]any` | No |  |
| `uuid` | `string` | No |  |
| `voiceLine` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Agent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Agent(nil).Load(map[string]any{"id": "agent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
fmt.Println(competitive.GetName()) // "competitive"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetObjectName` | `string` | No |  |
| `assetPath` | `string` | No |  |
| `tiers` | `[]any` | No |  |
| `uuid` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Competitive(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(cosmetic.GetName()) // "cosmetic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animationGif` | `string` | No |  |
| `animationPng` | `string` | No |  |
| `assetPath` | `string` | No |  |
| `category` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `fullIcon` | `string` | No |  |
| `fullTransparentIcon` | `string` | No |  |
| `hideIfNotOwned` | `bool` | No |  |
| `isHiddenIfNotOwned` | `bool` | No |  |
| `isNullSpray` | `bool` | No |  |
| `largeArt` | `string` | No |  |
| `levels` | `[]any` | No |  |
| `smallArt` | `string` | No |  |
| `themeUuid` | `string` | No |  |
| `uuid` | `string` | No |  |
| `wideArt` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Cosmetic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
gameMode := client.GameMode(nil)
fmt.Println(gameMode.GetName()) // "game_mode"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowsMatchTimeouts` | `bool` | No |  |
| `assetPath` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `duration` | `string` | No |  |
| `economyType` | `string` | No |  |
| `gameFeatureOverrides` | `[]any` | No |  |
| `gameRuleBoolOverrides` | `[]any` | No |  |
| `isMinimapHidden` | `bool` | No |  |
| `isTeamVoiceAllowed` | `bool` | No |  |
| `orbCount` | `int` | No |  |
| `roundsPerHalf` | `int` | No |  |
| `teamRoles` | `[]any` | No |  |
| `uuid` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GameMode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
map_ := client.Map(nil)
fmt.Println(map_.GetName()) // "map"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetPath` | `string` | No |  |
| `callouts` | `[]any` | No |  |
| `coordinates` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `listViewIcon` | `string` | No |  |
| `mapUrl` | `string` | No |  |
| `narrativeDescription` | `string` | No |  |
| `splash` | `string` | No |  |
| `tacticalDescription` | `string` | No |  |
| `uuid` | `string` | No |  |
| `xMultiplier` | `float64` | No |  |
| `xScalarToAdd` | `float64` | No |  |
| `yMultiplier` | `float64` | No |  |
| `yScalarToAdd` | `float64` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Map(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Map(nil).Load(map[string]any{"id": "map_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
fmt.Println(weapon.GetName()) // "weapon"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetPath` | `string` | No |  |
| `category` | `string` | No |  |
| `defaultSkinUuid` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `killStreamIcon` | `string` | No |  |
| `shopData` | `map[string]any` | No |  |
| `skins` | `[]any` | No |  |
| `uuid` | `string` | No |  |
| `weaponStats` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Weapon(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Weapon(nil).Load(map[string]any{"id": "weapon_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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

