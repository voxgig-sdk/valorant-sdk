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
| `assetPath` | `String` | No |  |
| `background` | `String` | No |  |
| `backgroundGradientColors` | `Array` | No |  |
| `bustPortrait` | `String` | No |  |
| `characterTags` | `Array` | No |  |
| `description` | `String` | No |  |
| `developerName` | `String` | No |  |
| `displayIcon` | `String` | No |  |
| `displayIconSmall` | `String` | No |  |
| `displayName` | `String` | No |  |
| `fullPortrait` | `String` | No |  |
| `fullPortraitV2` | `String` | No |  |
| `isAvailableForTest` | `Boolean` | No |  |
| `isBaseContent` | `Boolean` | No |  |
| `isFullPortraitRightFacing` | `Boolean` | No |  |
| `isPlayableCharacter` | `Boolean` | No |  |
| `killfeedPortrait` | `String` | No |  |
| `role` | `Hash` | No |  |
| `uuid` | `String` | No |  |
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
| `assetObjectName` | `String` | No |  |
| `assetPath` | `String` | No |  |
| `tiers` | `Array` | No |  |
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
| `animationGif` | `String` | No |  |
| `animationPng` | `String` | No |  |
| `assetPath` | `String` | No |  |
| `category` | `String` | No |  |
| `displayIcon` | `String` | No |  |
| `displayName` | `String` | No |  |
| `fullIcon` | `String` | No |  |
| `fullTransparentIcon` | `String` | No |  |
| `hideIfNotOwned` | `Boolean` | No |  |
| `isHiddenIfNotOwned` | `Boolean` | No |  |
| `isNullSpray` | `Boolean` | No |  |
| `largeArt` | `String` | No |  |
| `levels` | `Array` | No |  |
| `smallArt` | `String` | No |  |
| `themeUuid` | `String` | No |  |
| `uuid` | `String` | No |  |
| `wideArt` | `String` | No |  |

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
| `allowsMatchTimeouts` | `Boolean` | No |  |
| `assetPath` | `String` | No |  |
| `displayIcon` | `String` | No |  |
| `displayName` | `String` | No |  |
| `duration` | `String` | No |  |
| `economyType` | `String` | No |  |
| `gameFeatureOverrides` | `Array` | No |  |
| `gameRuleBoolOverrides` | `Array` | No |  |
| `isMinimapHidden` | `Boolean` | No |  |
| `isTeamVoiceAllowed` | `Boolean` | No |  |
| `orbCount` | `Integer` | No |  |
| `roundsPerHalf` | `Integer` | No |  |
| `teamRoles` | `Array` | No |  |
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
| `assetPath` | `String` | No |  |
| `callouts` | `Array` | No |  |
| `coordinates` | `String` | No |  |
| `displayIcon` | `String` | No |  |
| `displayName` | `String` | No |  |
| `listViewIcon` | `String` | No |  |
| `mapUrl` | `String` | No |  |
| `narrativeDescription` | `String` | No |  |
| `splash` | `String` | No |  |
| `tacticalDescription` | `String` | No |  |
| `uuid` | `String` | No |  |
| `xMultiplier` | `Float` | No |  |
| `xScalarToAdd` | `Float` | No |  |
| `yMultiplier` | `Float` | No |  |
| `yScalarToAdd` | `Float` | No |  |

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
| `assetPath` | `String` | No |  |
| `category` | `String` | No |  |
| `defaultSkinUuid` | `String` | No |  |
| `displayIcon` | `String` | No |  |
| `displayName` | `String` | No |  |
| `killStreamIcon` | `String` | No |  |
| `shopData` | `Hash` | No |  |
| `skins` | `Array` | No |  |
| `uuid` | `String` | No |  |
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

