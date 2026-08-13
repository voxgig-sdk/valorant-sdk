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
| `abilities` | `table` | No |  |
| `assetPath` | `string` | No |  |
| `background` | `string` | No |  |
| `backgroundGradientColors` | `table` | No |  |
| `bustPortrait` | `string` | No |  |
| `characterTags` | `table` | No |  |
| `description` | `string` | No |  |
| `developerName` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayIconSmall` | `string` | No |  |
| `displayName` | `string` | No |  |
| `fullPortrait` | `string` | No |  |
| `fullPortraitV2` | `string` | No |  |
| `isAvailableForTest` | `boolean` | No |  |
| `isBaseContent` | `boolean` | No |  |
| `isFullPortraitRightFacing` | `boolean` | No |  |
| `isPlayableCharacter` | `boolean` | No |  |
| `killfeedPortrait` | `string` | No |  |
| `role` | `table` | No |  |
| `uuid` | `string` | No |  |
| `voiceLine` | `table` | No |  |

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
| `assetObjectName` | `string` | No |  |
| `assetPath` | `string` | No |  |
| `tiers` | `table` | No |  |
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
| `animationGif` | `string` | No |  |
| `animationPng` | `string` | No |  |
| `assetPath` | `string` | No |  |
| `category` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `fullIcon` | `string` | No |  |
| `fullTransparentIcon` | `string` | No |  |
| `hideIfNotOwned` | `boolean` | No |  |
| `isHiddenIfNotOwned` | `boolean` | No |  |
| `isNullSpray` | `boolean` | No |  |
| `largeArt` | `string` | No |  |
| `levels` | `table` | No |  |
| `smallArt` | `string` | No |  |
| `themeUuid` | `string` | No |  |
| `uuid` | `string` | No |  |
| `wideArt` | `string` | No |  |

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
| `allowsMatchTimeouts` | `boolean` | No |  |
| `assetPath` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `duration` | `string` | No |  |
| `economyType` | `string` | No |  |
| `gameFeatureOverrides` | `table` | No |  |
| `gameRuleBoolOverrides` | `table` | No |  |
| `isMinimapHidden` | `boolean` | No |  |
| `isTeamVoiceAllowed` | `boolean` | No |  |
| `orbCount` | `number` | No |  |
| `roundsPerHalf` | `number` | No |  |
| `teamRoles` | `table` | No |  |
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
| `assetPath` | `string` | No |  |
| `callouts` | `table` | No |  |
| `coordinates` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `listViewIcon` | `string` | No |  |
| `mapUrl` | `string` | No |  |
| `narrativeDescription` | `string` | No |  |
| `splash` | `string` | No |  |
| `tacticalDescription` | `string` | No |  |
| `uuid` | `string` | No |  |
| `xMultiplier` | `number` | No |  |
| `xScalarToAdd` | `number` | No |  |
| `yMultiplier` | `number` | No |  |
| `yScalarToAdd` | `number` | No |  |

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
| `assetPath` | `string` | No |  |
| `category` | `string` | No |  |
| `defaultSkinUuid` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `killStreamIcon` | `string` | No |  |
| `shopData` | `table` | No |  |
| `skins` | `table` | No |  |
| `uuid` | `string` | No |  |
| `weaponStats` | `table` | No |  |

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

