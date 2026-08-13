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
| `assetPath` | `str` | No |  |
| `background` | `str` | No |  |
| `backgroundGradientColors` | `list` | No |  |
| `bustPortrait` | `str` | No |  |
| `characterTags` | `list` | No |  |
| `description` | `str` | No |  |
| `developerName` | `str` | No |  |
| `displayIcon` | `str` | No |  |
| `displayIconSmall` | `str` | No |  |
| `displayName` | `str` | No |  |
| `fullPortrait` | `str` | No |  |
| `fullPortraitV2` | `str` | No |  |
| `isAvailableForTest` | `bool` | No |  |
| `isBaseContent` | `bool` | No |  |
| `isFullPortraitRightFacing` | `bool` | No |  |
| `isPlayableCharacter` | `bool` | No |  |
| `killfeedPortrait` | `str` | No |  |
| `role` | `dict` | No |  |
| `uuid` | `str` | No |  |
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
| `assetObjectName` | `str` | No |  |
| `assetPath` | `str` | No |  |
| `tiers` | `list` | No |  |
| `uuid` | `str` | No |  |

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
| `animationGif` | `str` | No |  |
| `animationPng` | `str` | No |  |
| `assetPath` | `str` | No |  |
| `category` | `str` | No |  |
| `displayIcon` | `str` | No |  |
| `displayName` | `str` | No |  |
| `fullIcon` | `str` | No |  |
| `fullTransparentIcon` | `str` | No |  |
| `hideIfNotOwned` | `bool` | No |  |
| `isHiddenIfNotOwned` | `bool` | No |  |
| `isNullSpray` | `bool` | No |  |
| `largeArt` | `str` | No |  |
| `levels` | `list` | No |  |
| `smallArt` | `str` | No |  |
| `themeUuid` | `str` | No |  |
| `uuid` | `str` | No |  |
| `wideArt` | `str` | No |  |

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
| `allowsMatchTimeouts` | `bool` | No |  |
| `assetPath` | `str` | No |  |
| `displayIcon` | `str` | No |  |
| `displayName` | `str` | No |  |
| `duration` | `str` | No |  |
| `economyType` | `str` | No |  |
| `gameFeatureOverrides` | `list` | No |  |
| `gameRuleBoolOverrides` | `list` | No |  |
| `isMinimapHidden` | `bool` | No |  |
| `isTeamVoiceAllowed` | `bool` | No |  |
| `orbCount` | `int` | No |  |
| `roundsPerHalf` | `int` | No |  |
| `teamRoles` | `list` | No |  |
| `uuid` | `str` | No |  |

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
| `assetPath` | `str` | No |  |
| `callouts` | `list` | No |  |
| `coordinates` | `str` | No |  |
| `displayIcon` | `str` | No |  |
| `displayName` | `str` | No |  |
| `listViewIcon` | `str` | No |  |
| `mapUrl` | `str` | No |  |
| `narrativeDescription` | `str` | No |  |
| `splash` | `str` | No |  |
| `tacticalDescription` | `str` | No |  |
| `uuid` | `str` | No |  |
| `xMultiplier` | `float` | No |  |
| `xScalarToAdd` | `float` | No |  |
| `yMultiplier` | `float` | No |  |
| `yScalarToAdd` | `float` | No |  |

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
| `assetPath` | `str` | No |  |
| `category` | `str` | No |  |
| `defaultSkinUuid` | `str` | No |  |
| `displayIcon` | `str` | No |  |
| `displayName` | `str` | No |  |
| `killStreamIcon` | `str` | No |  |
| `shopData` | `dict` | No |  |
| `skins` | `list` | No |  |
| `uuid` | `str` | No |  |
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

