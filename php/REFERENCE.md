# Valorant PHP SDK Reference

Complete API reference for the Valorant PHP SDK.


## ValorantSDK

### Constructor

```php
require_once __DIR__ . '/valorant_sdk.php';

$client = new ValorantSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ValorantSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = ValorantSDK::test();
```


### Instance Methods

#### `Agent($data = null)`

Create a new `AgentEntity` instance. Pass `null` for no initial data.

#### `Competitive($data = null)`

Create a new `CompetitiveEntity` instance. Pass `null` for no initial data.

#### `Cosmetic($data = null)`

Create a new `CosmeticEntity` instance. Pass `null` for no initial data.

#### `GameMode($data = null)`

Create a new `GameModeEntity` instance. Pass `null` for no initial data.

#### `Map($data = null)`

Create a new `MapEntity` instance. Pass `null` for no initial data.

#### `Weapon($data = null)`

Create a new `WeaponEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): ValorantUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AgentEntity

```php
$agent = $client->Agent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abilities` | `array` | No |  |
| `assetPath` | `string` | No |  |
| `background` | `string` | No |  |
| `backgroundGradientColors` | `array` | No |  |
| `bustPortrait` | `string` | No |  |
| `characterTags` | `array` | No |  |
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
| `role` | `array` | No |  |
| `uuid` | `string` | No |  |
| `voiceLine` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Agent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Agent()->load(["id" => "agent_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentEntity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompetitiveEntity

```php
$competitive = $client->Competitive();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetObjectName` | `string` | No |  |
| `assetPath` | `string` | No |  |
| `tiers` | `array` | No |  |
| `uuid` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Competitive()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompetitiveEntity`

Create a new `CompetitiveEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CosmeticEntity

```php
$cosmetic = $client->Cosmetic();
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
| `levels` | `array` | No |  |
| `smallArt` | `string` | No |  |
| `themeUuid` | `string` | No |  |
| `uuid` | `string` | No |  |
| `wideArt` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Cosmetic()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CosmeticEntity`

Create a new `CosmeticEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GameModeEntity

```php
$game_mode = $client->GameMode();
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
| `gameFeatureOverrides` | `array` | No |  |
| `gameRuleBoolOverrides` | `array` | No |  |
| `isMinimapHidden` | `bool` | No |  |
| `isTeamVoiceAllowed` | `bool` | No |  |
| `orbCount` | `int` | No |  |
| `roundsPerHalf` | `int` | No |  |
| `teamRoles` | `array` | No |  |
| `uuid` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GameMode()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GameModeEntity`

Create a new `GameModeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MapEntity

```php
$map = $client->Map();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetPath` | `string` | No |  |
| `callouts` | `array` | No |  |
| `coordinates` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `listViewIcon` | `string` | No |  |
| `mapUrl` | `string` | No |  |
| `narrativeDescription` | `string` | No |  |
| `splash` | `string` | No |  |
| `tacticalDescription` | `string` | No |  |
| `uuid` | `string` | No |  |
| `xMultiplier` | `float` | No |  |
| `xScalarToAdd` | `float` | No |  |
| `yMultiplier` | `float` | No |  |
| `yScalarToAdd` | `float` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Map()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Map()->load(["id" => "map_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MapEntity`

Create a new `MapEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WeaponEntity

```php
$weapon = $client->Weapon();
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
| `shopData` | `array` | No |  |
| `skins` | `array` | No |  |
| `uuid` | `string` | No |  |
| `weaponStats` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Weapon()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Weapon()->load(["id" => "weapon_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WeaponEntity`

Create a new `WeaponEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new ValorantSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

