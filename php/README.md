# Valorant PHP SDK



The PHP SDK for the Valorant API — an entity-oriented client using PHP conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
composer require voxgig/valorant-sdk
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'valorant_sdk.php';

$client = new ValorantSDK([
    "apikey" => getenv("VALORANT_APIKEY"),
]);
```

### 2. List agents

```php
[$result, $err] = $client->Agent()->list();
if ($err) { throw new \Exception($err); }

if (is_array($result)) {
    foreach ($result as $item) {
        $d = $item->data_get();
        echo $d["id"] . " " . $d["name"] . "\n";
    }
}
```

### 3. Load a agent

```php
[$result, $err] = $client->Agent()->load(["id" => "example_id"]);
if ($err) { throw new \Exception($err); }
print_r($result);
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
if ($err) { throw new \Exception($err); }

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
}
```

### Prepare a request without sending it

```php
[$fetchdef, $err] = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);
if ($err) { throw new \Exception($err); }

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = ValorantSDK::test();

[$result, $err] = $client->Valorant()->load(["id" => "test01"]);
// $result contains mock response data
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
VALORANT_APIKEY=<your-key>
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
| `apikey` | `string` | API key for authentication. |
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
| `Agent` | `($data): AgentEntity` | Create a Agent entity instance. |
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
| `list` | `($reqmatch, $ctrl): array` | List entities matching the criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return `[$result, $err]`. The first value is an
`array` with these keys:

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
| `ability` |  |
| `asset_path` |  |
| `background` |  |
| `background_gradient_color` |  |
| `bust_portrait` |  |
| `character_tag` |  |
| `data` |  |
| `description` |  |
| `developer_name` |  |
| `display_icon` |  |
| `display_icon_small` |  |
| `display_name` |  |
| `full_portrait` |  |
| `full_portrait_v2` |  |
| `is_available_for_test` |  |
| `is_base_content` |  |
| `is_full_portrait_right_facing` |  |
| `is_playable_character` |  |
| `killfeed_portrait` |  |
| `role` |  |
| `status` |  |
| `uuid` |  |
| `voice_line` |  |

Operations: List, Load.

API path: `/v1/agents`

#### Competitive

| Field | Description |
| --- | --- |
| `asset_object_name` |  |
| `asset_path` |  |
| `tier` |  |
| `uuid` |  |

Operations: List.

API path: `/v1/competitivetiers`

#### Cosmetic

| Field | Description |
| --- | --- |
| `animation_gif` |  |
| `animation_png` |  |
| `asset_path` |  |
| `category` |  |
| `display_icon` |  |
| `display_name` |  |
| `full_icon` |  |
| `full_transparent_icon` |  |
| `hide_if_not_owned` |  |
| `is_hidden_if_not_owned` |  |
| `is_null_spray` |  |
| `large_art` |  |
| `level` |  |
| `small_art` |  |
| `theme_uuid` |  |
| `uuid` |  |
| `wide_art` |  |

Operations: List.

API path: `/v1/buddies`

#### GameMode

| Field | Description |
| --- | --- |
| `allows_match_timeout` |  |
| `asset_path` |  |
| `display_icon` |  |
| `display_name` |  |
| `duration` |  |
| `economy_type` |  |
| `game_feature_override` |  |
| `game_rule_bool_override` |  |
| `is_minimap_hidden` |  |
| `is_team_voice_allowed` |  |
| `orb_count` |  |
| `rounds_per_half` |  |
| `team_role` |  |
| `uuid` |  |

Operations: List.

API path: `/v1/gamemodes`

#### Map

| Field | Description |
| --- | --- |
| `asset_path` |  |
| `callout` |  |
| `coordinate` |  |
| `data` |  |
| `display_icon` |  |
| `display_name` |  |
| `list_view_icon` |  |
| `map_url` |  |
| `narrative_description` |  |
| `splash` |  |
| `status` |  |
| `tactical_description` |  |
| `uuid` |  |
| `x_multiplier` |  |
| `x_scalar_to_add` |  |
| `y_multiplier` |  |
| `y_scalar_to_add` |  |

Operations: List, Load.

API path: `/v1/maps`

#### Weapon

| Field | Description |
| --- | --- |
| `asset_path` |  |
| `category` |  |
| `data` |  |
| `default_skin_uuid` |  |
| `display_icon` |  |
| `display_name` |  |
| `kill_stream_icon` |  |
| `shop_data` |  |
| `skin` |  |
| `status` |  |
| `uuid` |  |
| `weapon_stat` |  |

Operations: List, Load.

API path: `/v1/weapons`



## Entities


### Agent

Create an instance: `const agent = client.Agent()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ability` | ``$ARRAY`` |  |
| `asset_path` | ``$STRING`` |  |
| `background` | ``$STRING`` |  |
| `background_gradient_color` | ``$ARRAY`` |  |
| `bust_portrait` | ``$STRING`` |  |
| `character_tag` | ``$ARRAY`` |  |
| `data` | ``$OBJECT`` |  |
| `description` | ``$STRING`` |  |
| `developer_name` | ``$STRING`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_icon_small` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `full_portrait` | ``$STRING`` |  |
| `full_portrait_v2` | ``$STRING`` |  |
| `is_available_for_test` | ``$BOOLEAN`` |  |
| `is_base_content` | ``$BOOLEAN`` |  |
| `is_full_portrait_right_facing` | ``$BOOLEAN`` |  |
| `is_playable_character` | ``$BOOLEAN`` |  |
| `killfeed_portrait` | ``$STRING`` |  |
| `role` | ``$OBJECT`` |  |
| `status` | ``$INTEGER`` |  |
| `uuid` | ``$STRING`` |  |
| `voice_line` | ``$OBJECT`` |  |

#### Example: Load

```ts
const agent = await client.Agent().load({ id: 'agent_id' })
```

#### Example: List

```ts
const agents = await client.Agent().list()
```


### Competitive

Create an instance: `const competitive = client.Competitive()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_object_name` | ``$STRING`` |  |
| `asset_path` | ``$STRING`` |  |
| `tier` | ``$ARRAY`` |  |
| `uuid` | ``$STRING`` |  |

#### Example: List

```ts
const competitives = await client.Competitive().list()
```


### Cosmetic

Create an instance: `const cosmetic = client.Cosmetic()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `animation_gif` | ``$STRING`` |  |
| `animation_png` | ``$STRING`` |  |
| `asset_path` | ``$STRING`` |  |
| `category` | ``$STRING`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `full_icon` | ``$STRING`` |  |
| `full_transparent_icon` | ``$STRING`` |  |
| `hide_if_not_owned` | ``$BOOLEAN`` |  |
| `is_hidden_if_not_owned` | ``$BOOLEAN`` |  |
| `is_null_spray` | ``$BOOLEAN`` |  |
| `large_art` | ``$STRING`` |  |
| `level` | ``$ARRAY`` |  |
| `small_art` | ``$STRING`` |  |
| `theme_uuid` | ``$STRING`` |  |
| `uuid` | ``$STRING`` |  |
| `wide_art` | ``$STRING`` |  |

#### Example: List

```ts
const cosmetics = await client.Cosmetic().list()
```


### GameMode

Create an instance: `const game_mode = client.GameMode()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allows_match_timeout` | ``$BOOLEAN`` |  |
| `asset_path` | ``$STRING`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `duration` | ``$STRING`` |  |
| `economy_type` | ``$STRING`` |  |
| `game_feature_override` | ``$ARRAY`` |  |
| `game_rule_bool_override` | ``$ARRAY`` |  |
| `is_minimap_hidden` | ``$BOOLEAN`` |  |
| `is_team_voice_allowed` | ``$BOOLEAN`` |  |
| `orb_count` | ``$INTEGER`` |  |
| `rounds_per_half` | ``$INTEGER`` |  |
| `team_role` | ``$ARRAY`` |  |
| `uuid` | ``$STRING`` |  |

#### Example: List

```ts
const game_modes = await client.GameMode().list()
```


### Map

Create an instance: `const map = client.Map()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_path` | ``$STRING`` |  |
| `callout` | ``$ARRAY`` |  |
| `coordinate` | ``$STRING`` |  |
| `data` | ``$OBJECT`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `list_view_icon` | ``$STRING`` |  |
| `map_url` | ``$STRING`` |  |
| `narrative_description` | ``$STRING`` |  |
| `splash` | ``$STRING`` |  |
| `status` | ``$INTEGER`` |  |
| `tactical_description` | ``$STRING`` |  |
| `uuid` | ``$STRING`` |  |
| `x_multiplier` | ``$NUMBER`` |  |
| `x_scalar_to_add` | ``$NUMBER`` |  |
| `y_multiplier` | ``$NUMBER`` |  |
| `y_scalar_to_add` | ``$NUMBER`` |  |

#### Example: Load

```ts
const map = await client.Map().load({ id: 'map_id' })
```

#### Example: List

```ts
const maps = await client.Map().list()
```


### Weapon

Create an instance: `const weapon = client.Weapon()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_path` | ``$STRING`` |  |
| `category` | ``$STRING`` |  |
| `data` | ``$OBJECT`` |  |
| `default_skin_uuid` | ``$STRING`` |  |
| `display_icon` | ``$STRING`` |  |
| `display_name` | ``$STRING`` |  |
| `kill_stream_icon` | ``$STRING`` |  |
| `shop_data` | ``$OBJECT`` |  |
| `skin` | ``$ARRAY`` |  |
| `status` | ``$INTEGER`` |  |
| `uuid` | ``$STRING`` |  |
| `weapon_stat` | ``$OBJECT`` |  |

#### Example: Load

```ts
const weapon = await client.Weapon().load({ id: 'weapon_id' })
```

#### Example: List

```ts
const weapons = await client.Weapon().list()
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as the second element in the return array.

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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$moon = $client->Moon();
[$result, $err] = $moon->load(["planet_id" => "earth", "id" => "luna"]);

// $moon->dataGet() now returns the loaded moon data
// $moon->matchGet() returns the last match criteria
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
