# Valorant PHP SDK



The PHP SDK for the Valorant API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Agent()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/valorant-sdk/releases](https://github.com/voxgig-sdk/valorant-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'valorant_sdk.php';

$client = new ValorantSDK();
```

### 2. List agent records

```php
try {
    // list() returns an array of Agent records — iterate directly.
    $agents = $client->Agent()->list();
    foreach ($agents as $item) {
        echo $item["abilities"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load an agent

```php
try {
    // load() returns the ENTITY — call data_get() for the Agent record (throws on error).
    $agent = $client->Agent()->load(["id" => "example_id"]);
    print_r($agent);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $cosmetics = $client->Cosmetic()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = ValorantSDK::test();

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$cosmetic = $client->Cosmetic()->list();
print_r($cosmetic);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new ValorantSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
VALORANT_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### ValorantSDK

```php
require_once 'valorant_sdk.php';
$client = new ValorantSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = ValorantSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### ValorantSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Agent` | `($data): AgentEntity` | Create an Agent entity instance. |
| `Competitive` | `($data): CompetitiveEntity` | Create a Competitive entity instance. |
| `Cosmetic` | `($data): CosmeticEntity` | Create a Cosmetic entity instance. |
| `GameMode` | `($data): GameModeEntity` | Create a GameMode entity instance. |
| `Map` | `($data): MapEntity` | Create a Map entity instance. |
| `Weapon` | `($data): WeaponEntity` | Create a Weapon entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Agent

| Field | Description |
| --- | --- |
| `abilities` |  |
| `assetPath` |  |
| `background` |  |
| `backgroundGradientColors` |  |
| `bustPortrait` |  |
| `characterTags` |  |
| `description` |  |
| `developerName` |  |
| `displayIcon` |  |
| `displayIconSmall` |  |
| `displayName` |  |
| `fullPortrait` |  |
| `fullPortraitV2` |  |
| `isAvailableForTest` |  |
| `isBaseContent` |  |
| `isFullPortraitRightFacing` |  |
| `isPlayableCharacter` |  |
| `killfeedPortrait` |  |
| `role` |  |
| `uuid` |  |
| `voiceLine` |  |

Operations: List, Load.

API path: `/v1/agents`

#### Competitive

| Field | Description |
| --- | --- |
| `assetObjectName` |  |
| `assetPath` |  |
| `tiers` |  |
| `uuid` |  |

Operations: List.

API path: `/v1/competitivetiers`

#### Cosmetic

| Field | Description |
| --- | --- |
| `animationGif` |  |
| `animationPng` |  |
| `assetPath` |  |
| `category` |  |
| `displayIcon` |  |
| `displayName` |  |
| `fullIcon` |  |
| `fullTransparentIcon` |  |
| `hideIfNotOwned` |  |
| `isHiddenIfNotOwned` |  |
| `isNullSpray` |  |
| `largeArt` |  |
| `levels` |  |
| `smallArt` |  |
| `themeUuid` |  |
| `uuid` |  |
| `wideArt` |  |

Operations: List.

API path: `/v1/buddies`

#### GameMode

| Field | Description |
| --- | --- |
| `allowsMatchTimeouts` |  |
| `assetPath` |  |
| `displayIcon` |  |
| `displayName` |  |
| `duration` |  |
| `economyType` |  |
| `gameFeatureOverrides` |  |
| `gameRuleBoolOverrides` |  |
| `isMinimapHidden` |  |
| `isTeamVoiceAllowed` |  |
| `orbCount` |  |
| `roundsPerHalf` |  |
| `teamRoles` |  |
| `uuid` |  |

Operations: List.

API path: `/v1/gamemodes`

#### Map

| Field | Description |
| --- | --- |
| `assetPath` |  |
| `callouts` |  |
| `coordinates` |  |
| `displayIcon` |  |
| `displayName` |  |
| `listViewIcon` |  |
| `mapUrl` |  |
| `narrativeDescription` |  |
| `splash` |  |
| `tacticalDescription` |  |
| `uuid` |  |
| `xMultiplier` |  |
| `xScalarToAdd` |  |
| `yMultiplier` |  |
| `yScalarToAdd` |  |

Operations: List, Load.

API path: `/v1/maps`

#### Weapon

| Field | Description |
| --- | --- |
| `assetPath` |  |
| `category` |  |
| `defaultSkinUuid` |  |
| `displayIcon` |  |
| `displayName` |  |
| `killStreamIcon` |  |
| `shopData` |  |
| `skins` |  |
| `uuid` |  |
| `weaponStats` |  |

Operations: List, Load.

API path: `/v1/weapons`



## Entities


### Agent

Create an instance: `$agent = $client->Agent();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abilities` | `array` |  |
| `assetPath` | `string` |  |
| `background` | `string` |  |
| `backgroundGradientColors` | `array` |  |
| `bustPortrait` | `string` |  |
| `characterTags` | `array` |  |
| `description` | `string` |  |
| `developerName` | `string` |  |
| `displayIcon` | `string` |  |
| `displayIconSmall` | `string` |  |
| `displayName` | `string` |  |
| `fullPortrait` | `string` |  |
| `fullPortraitV2` | `string` |  |
| `isAvailableForTest` | `bool` |  |
| `isBaseContent` | `bool` |  |
| `isFullPortraitRightFacing` | `bool` |  |
| `isPlayableCharacter` | `bool` |  |
| `killfeedPortrait` | `string` |  |
| `role` | `array` |  |
| `uuid` | `string` |  |
| `voiceLine` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Agent record (throws on error).
$agent = $client->Agent()->load(["id" => "agent_id"]);
```

#### Example: List

```php
// list() returns an array of Agent records (throws on error).
$agents = $client->Agent()->list();
```


### Competitive

Create an instance: `$competitive = $client->Competitive();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetObjectName` | `string` |  |
| `assetPath` | `string` |  |
| `tiers` | `array` |  |
| `uuid` | `string` |  |

#### Example: List

```php
// list() returns an array of Competitive records (throws on error).
$competitives = $client->Competitive()->list();
```


### Cosmetic

Create an instance: `$cosmetic = $client->Cosmetic();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animationGif` | `string` |  |
| `animationPng` | `string` |  |
| `assetPath` | `string` |  |
| `category` | `string` |  |
| `displayIcon` | `string` |  |
| `displayName` | `string` |  |
| `fullIcon` | `string` |  |
| `fullTransparentIcon` | `string` |  |
| `hideIfNotOwned` | `bool` |  |
| `isHiddenIfNotOwned` | `bool` |  |
| `isNullSpray` | `bool` |  |
| `largeArt` | `string` |  |
| `levels` | `array` |  |
| `smallArt` | `string` |  |
| `themeUuid` | `string` |  |
| `uuid` | `string` |  |
| `wideArt` | `string` |  |

#### Example: List

```php
// list() returns an array of Cosmetic records (throws on error).
$cosmetics = $client->Cosmetic()->list();
```


### GameMode

Create an instance: `$game_mode = $client->GameMode();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowsMatchTimeouts` | `bool` |  |
| `assetPath` | `string` |  |
| `displayIcon` | `string` |  |
| `displayName` | `string` |  |
| `duration` | `string` |  |
| `economyType` | `string` |  |
| `gameFeatureOverrides` | `array` |  |
| `gameRuleBoolOverrides` | `array` |  |
| `isMinimapHidden` | `bool` |  |
| `isTeamVoiceAllowed` | `bool` |  |
| `orbCount` | `int` |  |
| `roundsPerHalf` | `int` |  |
| `teamRoles` | `array` |  |
| `uuid` | `string` |  |

#### Example: List

```php
// list() returns an array of GameMode records (throws on error).
$game_modes = $client->GameMode()->list();
```


### Map

Create an instance: `$map = $client->Map();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetPath` | `string` |  |
| `callouts` | `array` |  |
| `coordinates` | `string` |  |
| `displayIcon` | `string` |  |
| `displayName` | `string` |  |
| `listViewIcon` | `string` |  |
| `mapUrl` | `string` |  |
| `narrativeDescription` | `string` |  |
| `splash` | `string` |  |
| `tacticalDescription` | `string` |  |
| `uuid` | `string` |  |
| `xMultiplier` | `float` |  |
| `xScalarToAdd` | `float` |  |
| `yMultiplier` | `float` |  |
| `yScalarToAdd` | `float` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Map record (throws on error).
$map = $client->Map()->load(["id" => "map_id"]);
```

#### Example: List

```php
// list() returns an array of Map records (throws on error).
$maps = $client->Map()->list();
```


### Weapon

Create an instance: `$weapon = $client->Weapon();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetPath` | `string` |  |
| `category` | `string` |  |
| `defaultSkinUuid` | `string` |  |
| `displayIcon` | `string` |  |
| `displayName` | `string` |  |
| `killStreamIcon` | `string` |  |
| `shopData` | `array` |  |
| `skins` | `array` |  |
| `uuid` | `string` |  |
| `weaponStats` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Weapon record (throws on error).
$weapon = $client->Weapon()->load(["id" => "weapon_id"]);
```

#### Example: List

```php
// list() returns an array of Weapon records (throws on error).
$weapons = $client->Weapon()->list();
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── valorant_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`valorant_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$cosmetic = $client->Cosmetic();
$cosmetic->list();

// $cosmetic->data_get() now returns the cosmetic data from the last list
// $cosmetic->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
