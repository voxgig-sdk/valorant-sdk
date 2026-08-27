# Valorant Python SDK Reference

Complete API reference for the Valorant Python SDK.


## ValorantSDK

### Constructor

```python
from valorant_sdk import ValorantSDK

client = ValorantSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ValorantSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = ValorantSDK.test()
```


### Instance Methods

#### `Agent(data=None)`

Create a new `AgentEntity` instance. Pass `None` for no initial data.

#### `Competitive(data=None)`

Create a new `CompetitiveEntity` instance. Pass `None` for no initial data.

#### `Cosmetic(data=None)`

Create a new `CosmeticEntity` instance. Pass `None` for no initial data.

#### `GameMode(data=None)`

Create a new `GameModeEntity` instance. Pass `None` for no initial data.

#### `Map(data=None)`

Create a new `MapEntity` instance. Pass `None` for no initial data.

#### `Weapon(data=None)`

Create a new `WeaponEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AgentEntity

```python
agent = client.Agent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abilities` | `list` | No |  |
| `assetPath` | `str` | No | Asset path in game files |
| `background` | `str` | No | URL to the agent's background image |
| `backgroundGradientColors` | `list` | No | Gradient colors for the agent's background |
| `bustPortrait` | `str` | No | URL to the agent's bust portrait |
| `characterTags` | `list` | No | Tags associated with the character |
| `description` | `str` | No | Description of the agent |
| `developerName` | `str` | No | Internal developer name |
| `displayIcon` | `str` | No | URL to the agent's display icon |
| `displayIconSmall` | `str` | No | URL to the agent's small display icon |
| `displayName` | `str` | No | Display name of the agent |
| `fullPortrait` | `str` | No | URL to the agent's full portrait |
| `fullPortraitV2` | `str` | No | URL to the agent's full portrait version 2 |
| `id` | `str` | No |  |
| `isAvailableForTest` | `bool` | No | Whether the agent is available for testing |
| `isBaseContent` | `bool` | No | Whether the agent is base content |
| `isFullPortraitRightFacing` | `bool` | No | Whether the full portrait faces right |
| `isPlayableCharacter` | `bool` | No | Whether the agent is playable |
| `killfeedPortrait` | `str` | No | URL to the agent's killfeed portrait |
| `role` | `dict` | No |  |
| `uuid` | `str` | No | Unique identifier for the agent |
| `voiceLine` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Agent().list()
for agent in results:
    print(agent)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Agent().load({"id": "agent_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompetitiveEntity

```python
competitive = client.Competitive()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetObjectName` | `str` | No | Asset object name |
| `assetPath` | `str` | No | Asset path in game files |
| `tiers` | `list` | No |  |
| `uuid` | `str` | No | Unique identifier for the competitive tier set |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Competitive().list()
for competitive in results:
    print(competitive)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompetitiveEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CosmeticEntity

```python
cosmetic = client.Cosmetic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animationGif` | `str` | No | URL to the spray's animation GIF |
| `animationPng` | `str` | No | URL to the spray's animation PNG |
| `assetPath` | `str` | No | Asset path in game files |
| `category` | `str` | No | Category of the spray |
| `displayIcon` | `str` | No | URL to the buddy's display icon |
| `displayName` | `str` | No | Display name of the buddy |
| `fullIcon` | `str` | No | URL to the spray's full icon |
| `fullTransparentIcon` | `str` | No | URL to the spray's full transparent icon |
| `hideIfNotOwned` | `bool` | No | Whether the spray is hidden if not owned |
| `isHiddenIfNotOwned` | `bool` | No | Whether the buddy is hidden if not owned |
| `isNullSpray` | `bool` | No | Whether this is a null spray |
| `largeArt` | `str` | No | URL to the card's large art |
| `levels` | `list` | No |  |
| `smallArt` | `str` | No | URL to the card's small art |
| `themeUuid` | `str` | No | UUID of the theme |
| `uuid` | `str` | No | Unique identifier for the buddy |
| `wideArt` | `str` | No | URL to the card's wide art |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Cosmetic().list()
for cosmetic in results:
    print(cosmetic)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CosmeticEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GameModeEntity

```python
game_mode = client.GameMode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowsMatchTimeouts` | `bool` | No | Whether match timeouts are allowed |
| `assetPath` | `str` | No | Asset path in game files |
| `displayIcon` | `str` | No | URL to the game mode's display icon |
| `displayName` | `str` | No | Display name of the game mode |
| `duration` | `str` | No | Duration of the game mode |
| `economyType` | `str` | No | Type of economy system |
| `gameFeatureOverrides` | `list` | No | Game feature overrides |
| `gameRuleBoolOverrides` | `list` | No | Game rule boolean overrides |
| `isMinimapHidden` | `bool` | No | Whether the minimap is hidden |
| `isTeamVoiceAllowed` | `bool` | No | Whether team voice chat is allowed |
| `orbCount` | `int` | No | Number of orbs in the game mode |
| `roundsPerHalf` | `int` | No | Number of rounds per half |
| `teamRoles` | `list` | No | Team roles in the game mode |
| `uuid` | `str` | No | Unique identifier for the game mode |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GameMode().list()
for game_mode in results:
    print(game_mode)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GameModeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MapEntity

```python
map = client.Map()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetPath` | `str` | No | Asset path in game files |
| `callouts` | `list` | No |  |
| `coordinates` | `str` | No | Geographic coordinates of the map location |
| `displayIcon` | `str` | No | URL to the map's display icon |
| `displayName` | `str` | No | Display name of the map |
| `id` | `str` | No |  |
| `listViewIcon` | `str` | No | URL to the map's list view icon |
| `mapUrl` | `str` | No | URL to the map overview |
| `narrativeDescription` | `str` | No | Narrative description of the map |
| `splash` | `str` | No | URL to the map's splash image |
| `tacticalDescription` | `str` | No | Tactical description of the map |
| `uuid` | `str` | No | Unique identifier for the map |
| `xMultiplier` | `float` | No | X coordinate multiplier |
| `xScalarToAdd` | `float` | No | X scalar to add |
| `yMultiplier` | `float` | No | Y coordinate multiplier |
| `yScalarToAdd` | `float` | No | Y scalar to add |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Map().list()
for map in results:
    print(map)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Map().load({"id": "map_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MapEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WeaponEntity

```python
weapon = client.Weapon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetPath` | `str` | No | Asset path in game files |
| `category` | `str` | No | Weapon category (e.g., Rifle, Pistol) |
| `defaultSkinUuid` | `str` | No | UUID of the default skin |
| `displayIcon` | `str` | No | URL to the weapon's display icon |
| `displayName` | `str` | No | Display name of the weapon |
| `id` | `str` | No |  |
| `killStreamIcon` | `str` | No | URL to the weapon's kill stream icon |
| `shopData` | `dict` | No |  |
| `skins` | `list` | No |  |
| `uuid` | `str` | No | Unique identifier for the weapon |
| `weaponStats` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Weapon().list()
for weapon in results:
    print(weapon)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Weapon().load({"id": "weapon_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WeaponEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = ValorantSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

