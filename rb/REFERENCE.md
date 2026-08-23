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
| `abilities` | `Array` | No |  |
| `assetPath` | `String` | No | Asset path in game files |
| `background` | `String` | No | URL to the agent's background image |
| `backgroundGradientColors` | `Array` | No | Gradient colors for the agent's background |
| `bustPortrait` | `String` | No | URL to the agent's bust portrait |
| `characterTags` | `Array` | No | Tags associated with the character |
| `description` | `String` | No | Description of the agent |
| `developerName` | `String` | No | Internal developer name |
| `displayIcon` | `String` | No | URL to the agent's display icon |
| `displayIconSmall` | `String` | No | URL to the agent's small display icon |
| `displayName` | `String` | No | Display name of the agent |
| `fullPortrait` | `String` | No | URL to the agent's full portrait |
| `fullPortraitV2` | `String` | No | URL to the agent's full portrait version 2 |
| `isAvailableForTest` | `Boolean` | No | Whether the agent is available for testing |
| `isBaseContent` | `Boolean` | No | Whether the agent is base content |
| `isFullPortraitRightFacing` | `Boolean` | No | Whether the full portrait faces right |
| `isPlayableCharacter` | `Boolean` | No | Whether the agent is playable |
| `killfeedPortrait` | `String` | No | URL to the agent's killfeed portrait |
| `role` | `Hash` | No |  |
| `uuid` | `String` | No | Unique identifier for the agent |
| `voiceLine` | `Hash` | No |  |

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
| `assetObjectName` | `String` | No | Asset object name |
| `assetPath` | `String` | No | Asset path in game files |
| `tiers` | `Array` | No |  |
| `uuid` | `String` | No | Unique identifier for the competitive tier set |

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
| `animationGif` | `String` | No | URL to the spray's animation GIF |
| `animationPng` | `String` | No | URL to the spray's animation PNG |
| `assetPath` | `String` | No | Asset path in game files |
| `category` | `String` | No | Category of the spray |
| `displayIcon` | `String` | No | URL to the buddy's display icon |
| `displayName` | `String` | No | Display name of the buddy |
| `fullIcon` | `String` | No | URL to the spray's full icon |
| `fullTransparentIcon` | `String` | No | URL to the spray's full transparent icon |
| `hideIfNotOwned` | `Boolean` | No | Whether the spray is hidden if not owned |
| `isHiddenIfNotOwned` | `Boolean` | No | Whether the buddy is hidden if not owned |
| `isNullSpray` | `Boolean` | No | Whether this is a null spray |
| `largeArt` | `String` | No | URL to the card's large art |
| `levels` | `Array` | No |  |
| `smallArt` | `String` | No | URL to the card's small art |
| `themeUuid` | `String` | No | UUID of the theme |
| `uuid` | `String` | No | Unique identifier for the buddy |
| `wideArt` | `String` | No | URL to the card's wide art |

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
| `allowsMatchTimeouts` | `Boolean` | No | Whether match timeouts are allowed |
| `assetPath` | `String` | No | Asset path in game files |
| `displayIcon` | `String` | No | URL to the game mode's display icon |
| `displayName` | `String` | No | Display name of the game mode |
| `duration` | `String` | No | Duration of the game mode |
| `economyType` | `String` | No | Type of economy system |
| `gameFeatureOverrides` | `Array` | No | Game feature overrides |
| `gameRuleBoolOverrides` | `Array` | No | Game rule boolean overrides |
| `isMinimapHidden` | `Boolean` | No | Whether the minimap is hidden |
| `isTeamVoiceAllowed` | `Boolean` | No | Whether team voice chat is allowed |
| `orbCount` | `Integer` | No | Number of orbs in the game mode |
| `roundsPerHalf` | `Integer` | No | Number of rounds per half |
| `teamRoles` | `Array` | No | Team roles in the game mode |
| `uuid` | `String` | No | Unique identifier for the game mode |

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
| `assetPath` | `String` | No | Asset path in game files |
| `callouts` | `Array` | No |  |
| `coordinates` | `String` | No | Geographic coordinates of the map location |
| `displayIcon` | `String` | No | URL to the map's display icon |
| `displayName` | `String` | No | Display name of the map |
| `listViewIcon` | `String` | No | URL to the map's list view icon |
| `mapUrl` | `String` | No | URL to the map overview |
| `narrativeDescription` | `String` | No | Narrative description of the map |
| `splash` | `String` | No | URL to the map's splash image |
| `tacticalDescription` | `String` | No | Tactical description of the map |
| `uuid` | `String` | No | Unique identifier for the map |
| `xMultiplier` | `Float` | No | X coordinate multiplier |
| `xScalarToAdd` | `Float` | No | X scalar to add |
| `yMultiplier` | `Float` | No | Y coordinate multiplier |
| `yScalarToAdd` | `Float` | No | Y scalar to add |

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
| `assetPath` | `String` | No | Asset path in game files |
| `category` | `String` | No | Weapon category (e.g., Rifle, Pistol) |
| `defaultSkinUuid` | `String` | No | UUID of the default skin |
| `displayIcon` | `String` | No | URL to the weapon's display icon |
| `displayName` | `String` | No | Display name of the weapon |
| `killStreamIcon` | `String` | No | URL to the weapon's kill stream icon |
| `shopData` | `Hash` | No |  |
| `skins` | `Array` | No |  |
| `uuid` | `String` | No | Unique identifier for the weapon |
| `weaponStats` | `Hash` | No |  |

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

