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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

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
| `ability` | ``$ARRAY`` | No |  |
| `asset_path` | ``$STRING`` | No |  |
| `background` | ``$STRING`` | No |  |
| `background_gradient_color` | ``$ARRAY`` | No |  |
| `bust_portrait` | ``$STRING`` | No |  |
| `character_tag` | ``$ARRAY`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `description` | ``$STRING`` | No |  |
| `developer_name` | ``$STRING`` | No |  |
| `display_icon` | ``$STRING`` | No |  |
| `display_icon_small` | ``$STRING`` | No |  |
| `display_name` | ``$STRING`` | No |  |
| `full_portrait` | ``$STRING`` | No |  |
| `full_portrait_v2` | ``$STRING`` | No |  |
| `is_available_for_test` | ``$BOOLEAN`` | No |  |
| `is_base_content` | ``$BOOLEAN`` | No |  |
| `is_full_portrait_right_facing` | ``$BOOLEAN`` | No |  |
| `is_playable_character` | ``$BOOLEAN`` | No |  |
| `killfeed_portrait` | ``$STRING`` | No |  |
| `role` | ``$OBJECT`` | No |  |
| `status` | ``$INTEGER`` | No |  |
| `uuid` | ``$STRING`` | No |  |
| `voice_line` | ``$OBJECT`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Agent()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Agent()->load(["id" => "agent_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): AgentEntity`

Create a new `AgentEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CompetitiveEntity

```php
$competitive = $client->Competitive();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_object_name` | ``$STRING`` | No |  |
| `asset_path` | ``$STRING`` | No |  |
| `tier` | ``$ARRAY`` | No |  |
| `uuid` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Competitive()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CompetitiveEntity`

Create a new `CompetitiveEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CosmeticEntity

```php
$cosmetic = $client->Cosmetic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animation_gif` | ``$STRING`` | No |  |
| `animation_png` | ``$STRING`` | No |  |
| `asset_path` | ``$STRING`` | No |  |
| `category` | ``$STRING`` | No |  |
| `display_icon` | ``$STRING`` | No |  |
| `display_name` | ``$STRING`` | No |  |
| `full_icon` | ``$STRING`` | No |  |
| `full_transparent_icon` | ``$STRING`` | No |  |
| `hide_if_not_owned` | ``$BOOLEAN`` | No |  |
| `is_hidden_if_not_owned` | ``$BOOLEAN`` | No |  |
| `is_null_spray` | ``$BOOLEAN`` | No |  |
| `large_art` | ``$STRING`` | No |  |
| `level` | ``$ARRAY`` | No |  |
| `small_art` | ``$STRING`` | No |  |
| `theme_uuid` | ``$STRING`` | No |  |
| `uuid` | ``$STRING`` | No |  |
| `wide_art` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Cosmetic()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CosmeticEntity`

Create a new `CosmeticEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## GameModeEntity

```php
$game_mode = $client->GameMode();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allows_match_timeout` | ``$BOOLEAN`` | No |  |
| `asset_path` | ``$STRING`` | No |  |
| `display_icon` | ``$STRING`` | No |  |
| `display_name` | ``$STRING`` | No |  |
| `duration` | ``$STRING`` | No |  |
| `economy_type` | ``$STRING`` | No |  |
| `game_feature_override` | ``$ARRAY`` | No |  |
| `game_rule_bool_override` | ``$ARRAY`` | No |  |
| `is_minimap_hidden` | ``$BOOLEAN`` | No |  |
| `is_team_voice_allowed` | ``$BOOLEAN`` | No |  |
| `orb_count` | ``$INTEGER`` | No |  |
| `rounds_per_half` | ``$INTEGER`` | No |  |
| `team_role` | ``$ARRAY`` | No |  |
| `uuid` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->GameMode()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GameModeEntity`

Create a new `GameModeEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MapEntity

```php
$map = $client->Map();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_path` | ``$STRING`` | No |  |
| `callout` | ``$ARRAY`` | No |  |
| `coordinate` | ``$STRING`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `display_icon` | ``$STRING`` | No |  |
| `display_name` | ``$STRING`` | No |  |
| `list_view_icon` | ``$STRING`` | No |  |
| `map_url` | ``$STRING`` | No |  |
| `narrative_description` | ``$STRING`` | No |  |
| `splash` | ``$STRING`` | No |  |
| `status` | ``$INTEGER`` | No |  |
| `tactical_description` | ``$STRING`` | No |  |
| `uuid` | ``$STRING`` | No |  |
| `x_multiplier` | ``$NUMBER`` | No |  |
| `x_scalar_to_add` | ``$NUMBER`` | No |  |
| `y_multiplier` | ``$NUMBER`` | No |  |
| `y_scalar_to_add` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Map()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Map()->load(["id" => "map_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MapEntity`

Create a new `MapEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## WeaponEntity

```php
$weapon = $client->Weapon();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_path` | ``$STRING`` | No |  |
| `category` | ``$STRING`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `default_skin_uuid` | ``$STRING`` | No |  |
| `display_icon` | ``$STRING`` | No |  |
| `display_name` | ``$STRING`` | No |  |
| `kill_stream_icon` | ``$STRING`` | No |  |
| `shop_data` | ``$OBJECT`` | No |  |
| `skin` | ``$ARRAY`` | No |  |
| `status` | ``$INTEGER`` | No |  |
| `uuid` | ``$STRING`` | No |  |
| `weapon_stat` | ``$OBJECT`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Weapon()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Weapon()->load(["id" => "weapon_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): WeaponEntity`

Create a new `WeaponEntity` instance with the same client and
options.

#### `getName(): string`

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

