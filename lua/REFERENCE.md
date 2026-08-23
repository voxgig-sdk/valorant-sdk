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
| `assetPath` | `string` | No | Asset path in game files |
| `background` | `string` | No | URL to the agent's background image |
| `backgroundGradientColors` | `table` | No | Gradient colors for the agent's background |
| `bustPortrait` | `string` | No | URL to the agent's bust portrait |
| `characterTags` | `table` | No | Tags associated with the character |
| `description` | `string` | No | Description of the agent |
| `developerName` | `string` | No | Internal developer name |
| `displayIcon` | `string` | No | URL to the agent's display icon |
| `displayIconSmall` | `string` | No | URL to the agent's small display icon |
| `displayName` | `string` | No | Display name of the agent |
| `fullPortrait` | `string` | No | URL to the agent's full portrait |
| `fullPortraitV2` | `string` | No | URL to the agent's full portrait version 2 |
| `isAvailableForTest` | `boolean` | No | Whether the agent is available for testing |
| `isBaseContent` | `boolean` | No | Whether the agent is base content |
| `isFullPortraitRightFacing` | `boolean` | No | Whether the full portrait faces right |
| `isPlayableCharacter` | `boolean` | No | Whether the agent is playable |
| `killfeedPortrait` | `string` | No | URL to the agent's killfeed portrait |
| `role` | `table` | No |  |
| `uuid` | `string` | No | Unique identifier for the agent |
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
| `assetObjectName` | `string` | No | Asset object name |
| `assetPath` | `string` | No | Asset path in game files |
| `tiers` | `table` | No |  |
| `uuid` | `string` | No | Unique identifier for the competitive tier set |

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
| `animationGif` | `string` | No | URL to the spray's animation GIF |
| `animationPng` | `string` | No | URL to the spray's animation PNG |
| `assetPath` | `string` | No | Asset path in game files |
| `category` | `string` | No | Category of the spray |
| `displayIcon` | `string` | No | URL to the buddy's display icon |
| `displayName` | `string` | No | Display name of the buddy |
| `fullIcon` | `string` | No | URL to the spray's full icon |
| `fullTransparentIcon` | `string` | No | URL to the spray's full transparent icon |
| `hideIfNotOwned` | `boolean` | No | Whether the spray is hidden if not owned |
| `isHiddenIfNotOwned` | `boolean` | No | Whether the buddy is hidden if not owned |
| `isNullSpray` | `boolean` | No | Whether this is a null spray |
| `largeArt` | `string` | No | URL to the card's large art |
| `levels` | `table` | No |  |
| `smallArt` | `string` | No | URL to the card's small art |
| `themeUuid` | `string` | No | UUID of the theme |
| `uuid` | `string` | No | Unique identifier for the buddy |
| `wideArt` | `string` | No | URL to the card's wide art |

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
| `allowsMatchTimeouts` | `boolean` | No | Whether match timeouts are allowed |
| `assetPath` | `string` | No | Asset path in game files |
| `displayIcon` | `string` | No | URL to the game mode's display icon |
| `displayName` | `string` | No | Display name of the game mode |
| `duration` | `string` | No | Duration of the game mode |
| `economyType` | `string` | No | Type of economy system |
| `gameFeatureOverrides` | `table` | No | Game feature overrides |
| `gameRuleBoolOverrides` | `table` | No | Game rule boolean overrides |
| `isMinimapHidden` | `boolean` | No | Whether the minimap is hidden |
| `isTeamVoiceAllowed` | `boolean` | No | Whether team voice chat is allowed |
| `orbCount` | `number` | No | Number of orbs in the game mode |
| `roundsPerHalf` | `number` | No | Number of rounds per half |
| `teamRoles` | `table` | No | Team roles in the game mode |
| `uuid` | `string` | No | Unique identifier for the game mode |

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
| `assetPath` | `string` | No | Asset path in game files |
| `callouts` | `table` | No |  |
| `coordinates` | `string` | No | Geographic coordinates of the map location |
| `displayIcon` | `string` | No | URL to the map's display icon |
| `displayName` | `string` | No | Display name of the map |
| `listViewIcon` | `string` | No | URL to the map's list view icon |
| `mapUrl` | `string` | No | URL to the map overview |
| `narrativeDescription` | `string` | No | Narrative description of the map |
| `splash` | `string` | No | URL to the map's splash image |
| `tacticalDescription` | `string` | No | Tactical description of the map |
| `uuid` | `string` | No | Unique identifier for the map |
| `xMultiplier` | `number` | No | X coordinate multiplier |
| `xScalarToAdd` | `number` | No | X scalar to add |
| `yMultiplier` | `number` | No | Y coordinate multiplier |
| `yScalarToAdd` | `number` | No | Y scalar to add |

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
| `assetPath` | `string` | No | Asset path in game files |
| `category` | `string` | No | Weapon category (e.g., Rifle, Pistol) |
| `defaultSkinUuid` | `string` | No | UUID of the default skin |
| `displayIcon` | `string` | No | URL to the weapon's display icon |
| `displayName` | `string` | No | Display name of the weapon |
| `killStreamIcon` | `string` | No | URL to the weapon's kill stream icon |
| `shopData` | `table` | No |  |
| `skins` | `table` | No |  |
| `uuid` | `string` | No | Unique identifier for the weapon |
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

