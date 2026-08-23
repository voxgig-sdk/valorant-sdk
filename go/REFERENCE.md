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
| `assetPath` | `string` | No | Asset path in game files |
| `background` | `string` | No | URL to the agent's background image |
| `backgroundGradientColors` | `[]any` | No | Gradient colors for the agent's background |
| `bustPortrait` | `string` | No | URL to the agent's bust portrait |
| `characterTags` | `[]any` | No | Tags associated with the character |
| `description` | `string` | No | Description of the agent |
| `developerName` | `string` | No | Internal developer name |
| `displayIcon` | `string` | No | URL to the agent's display icon |
| `displayIconSmall` | `string` | No | URL to the agent's small display icon |
| `displayName` | `string` | No | Display name of the agent |
| `fullPortrait` | `string` | No | URL to the agent's full portrait |
| `fullPortraitV2` | `string` | No | URL to the agent's full portrait version 2 |
| `isAvailableForTest` | `bool` | No | Whether the agent is available for testing |
| `isBaseContent` | `bool` | No | Whether the agent is base content |
| `isFullPortraitRightFacing` | `bool` | No | Whether the full portrait faces right |
| `isPlayableCharacter` | `bool` | No | Whether the agent is playable |
| `killfeedPortrait` | `string` | No | URL to the agent's killfeed portrait |
| `role` | `map[string]any` | No |  |
| `uuid` | `string` | No | Unique identifier for the agent |
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
| `assetObjectName` | `string` | No | Asset object name |
| `assetPath` | `string` | No | Asset path in game files |
| `tiers` | `[]any` | No |  |
| `uuid` | `string` | No | Unique identifier for the competitive tier set |

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
| `animationGif` | `string` | No | URL to the spray's animation GIF |
| `animationPng` | `string` | No | URL to the spray's animation PNG |
| `assetPath` | `string` | No | Asset path in game files |
| `category` | `string` | No | Category of the spray |
| `displayIcon` | `string` | No | URL to the buddy's display icon |
| `displayName` | `string` | No | Display name of the buddy |
| `fullIcon` | `string` | No | URL to the spray's full icon |
| `fullTransparentIcon` | `string` | No | URL to the spray's full transparent icon |
| `hideIfNotOwned` | `bool` | No | Whether the spray is hidden if not owned |
| `isHiddenIfNotOwned` | `bool` | No | Whether the buddy is hidden if not owned |
| `isNullSpray` | `bool` | No | Whether this is a null spray |
| `largeArt` | `string` | No | URL to the card's large art |
| `levels` | `[]any` | No |  |
| `smallArt` | `string` | No | URL to the card's small art |
| `themeUuid` | `string` | No | UUID of the theme |
| `uuid` | `string` | No | Unique identifier for the buddy |
| `wideArt` | `string` | No | URL to the card's wide art |

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
| `allowsMatchTimeouts` | `bool` | No | Whether match timeouts are allowed |
| `assetPath` | `string` | No | Asset path in game files |
| `displayIcon` | `string` | No | URL to the game mode's display icon |
| `displayName` | `string` | No | Display name of the game mode |
| `duration` | `string` | No | Duration of the game mode |
| `economyType` | `string` | No | Type of economy system |
| `gameFeatureOverrides` | `[]any` | No | Game feature overrides |
| `gameRuleBoolOverrides` | `[]any` | No | Game rule boolean overrides |
| `isMinimapHidden` | `bool` | No | Whether the minimap is hidden |
| `isTeamVoiceAllowed` | `bool` | No | Whether team voice chat is allowed |
| `orbCount` | `int` | No | Number of orbs in the game mode |
| `roundsPerHalf` | `int` | No | Number of rounds per half |
| `teamRoles` | `[]any` | No | Team roles in the game mode |
| `uuid` | `string` | No | Unique identifier for the game mode |

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
| `assetPath` | `string` | No | Asset path in game files |
| `callouts` | `[]any` | No |  |
| `coordinates` | `string` | No | Geographic coordinates of the map location |
| `displayIcon` | `string` | No | URL to the map's display icon |
| `displayName` | `string` | No | Display name of the map |
| `listViewIcon` | `string` | No | URL to the map's list view icon |
| `mapUrl` | `string` | No | URL to the map overview |
| `narrativeDescription` | `string` | No | Narrative description of the map |
| `splash` | `string` | No | URL to the map's splash image |
| `tacticalDescription` | `string` | No | Tactical description of the map |
| `uuid` | `string` | No | Unique identifier for the map |
| `xMultiplier` | `float64` | No | X coordinate multiplier |
| `xScalarToAdd` | `float64` | No | X scalar to add |
| `yMultiplier` | `float64` | No | Y coordinate multiplier |
| `yScalarToAdd` | `float64` | No | Y scalar to add |

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
| `assetPath` | `string` | No | Asset path in game files |
| `category` | `string` | No | Weapon category (e.g., Rifle, Pistol) |
| `defaultSkinUuid` | `string` | No | UUID of the default skin |
| `displayIcon` | `string` | No | URL to the weapon's display icon |
| `displayName` | `string` | No | Display name of the weapon |
| `killStreamIcon` | `string` | No | URL to the weapon's kill stream icon |
| `shopData` | `map[string]any` | No |  |
| `skins` | `[]any` | No |  |
| `uuid` | `string` | No | Unique identifier for the weapon |
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

