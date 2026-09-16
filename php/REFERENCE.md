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
| `assetPath` | `string` | No | Asset path in game files |
| `background` | `string` | No | URL to the agent's background image |
| `backgroundGradientColors` | `array` | No | Gradient colors for the agent's background |
| `bustPortrait` | `string` | No | URL to the agent's bust portrait |
| `characterTags` | `array` | No | Tags associated with the character |
| `description` | `string` | No | Description of the agent |
| `developerName` | `string` | No | Internal developer name |
| `displayIcon` | `string` | No | URL to the agent's display icon |
| `displayIconSmall` | `string` | No | URL to the agent's small display icon |
| `displayName` | `string` | No | Display name of the agent |
| `fullPortrait` | `string` | No | URL to the agent's full portrait |
| `fullPortraitV2` | `string` | No | URL to the agent's full portrait version 2 |
| `id` | `string` | No |  |
| `isAvailableForTest` | `bool` | No | Whether the agent is available for testing |
| `isBaseContent` | `bool` | No | Whether the agent is base content |
| `isFullPortraitRightFacing` | `bool` | No | Whether the full portrait faces right |
| `isPlayableCharacter` | `bool` | No | Whether the agent is playable |
| `killfeedPortrait` | `string` | No | URL to the agent's killfeed portrait |
| `role` | `array` | No |  |
| `uuid` | `string` | No | Unique identifier for the agent |
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
| `assetObjectName` | `string` | No | Asset object name |
| `assetPath` | `string` | No | Asset path in game files |
| `tiers` | `array` | No |  |
| `uuid` | `string` | No | Unique identifier for the competitive tier set |

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
| `levels` | `array` | No |  |
| `smallArt` | `string` | No | URL to the card's small art |
| `themeUuid` | `string` | No | UUID of the theme |
| `uuid` | `string` | No | Unique identifier for the buddy |
| `wideArt` | `string` | No | URL to the card's wide art |

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
| `allowsMatchTimeouts` | `bool` | No | Whether match timeouts are allowed |
| `assetPath` | `string` | No | Asset path in game files |
| `displayIcon` | `string` | No | URL to the game mode's display icon |
| `displayName` | `string` | No | Display name of the game mode |
| `duration` | `string` | No | Duration of the game mode |
| `economyType` | `string` | No | Type of economy system |
| `gameFeatureOverrides` | `array` | No | Game feature overrides |
| `gameRuleBoolOverrides` | `array` | No | Game rule boolean overrides |
| `isMinimapHidden` | `bool` | No | Whether the minimap is hidden |
| `isTeamVoiceAllowed` | `bool` | No | Whether team voice chat is allowed |
| `orbCount` | `int` | No | Number of orbs in the game mode |
| `roundsPerHalf` | `int` | No | Number of rounds per half |
| `teamRoles` | `array` | No | Team roles in the game mode |
| `uuid` | `string` | No | Unique identifier for the game mode |

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
| `assetPath` | `string` | No | Asset path in game files |
| `callouts` | `array` | No |  |
| `coordinates` | `string` | No | Geographic coordinates of the map location |
| `displayIcon` | `string` | No | URL to the map's display icon |
| `displayName` | `string` | No | Display name of the map |
| `id` | `string` | No |  |
| `listViewIcon` | `string` | No | URL to the map's list view icon |
| `mapUrl` | `string` | No | URL to the map overview |
| `narrativeDescription` | `string` | No | Narrative description of the map |
| `splash` | `string` | No | URL to the map's splash image |
| `tacticalDescription` | `string` | No | Tactical description of the map |
| `uuid` | `string` | No | Unique identifier for the map |
| `xMultiplier` | `float` | No | X coordinate multiplier |
| `xScalarToAdd` | `float` | No | X scalar to add |
| `yMultiplier` | `float` | No | Y coordinate multiplier |
| `yScalarToAdd` | `float` | No | Y scalar to add |

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
| `assetPath` | `string` | No | Asset path in game files |
| `category` | `string` | No | Weapon category (e.g., Rifle, Pistol) |
| `defaultSkinUuid` | `string` | No | UUID of the default skin |
| `displayIcon` | `string` | No | URL to the weapon's display icon |
| `displayName` | `string` | No | Display name of the weapon |
| `id` | `string` | No |  |
| `killStreamIcon` | `string` | No | URL to the weapon's kill stream icon |
| `shopData` | `array` | No |  |
| `skins` | `array` | No |  |
| `uuid` | `string` | No | Unique identifier for the weapon |
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
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```php
$client = new ValorantSDK([
  "feature" => [
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

