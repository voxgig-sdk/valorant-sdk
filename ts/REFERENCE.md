# Valorant TypeScript SDK Reference

Complete API reference for the Valorant TypeScript SDK.


## ValorantSDK

### Constructor

```ts
new ValorantSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ValorantSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = ValorantSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `ValorantSDK` instance in test mode.


### Instance Methods

#### `Agent(data?: object)`

Create a new `Agent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentEntity` instance.

#### `Competitive(data?: object)`

Create a new `Competitive` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompetitiveEntity` instance.

#### `Cosmetic(data?: object)`

Create a new `Cosmetic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CosmeticEntity` instance.

#### `GameMode(data?: object)`

Create a new `GameMode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GameModeEntity` instance.

#### `Map(data?: object)`

Create a new `Map` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MapEntity` instance.

#### `Weapon(data?: object)`

Create a new `Weapon` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WeaponEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `ValorantSDK.test()`.

**Returns:** `ValorantSDK` instance in test mode.


---

## AgentEntity

```ts
const agent = client.Agent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ability` | `any[]` | No |  |
| `asset_path` | `string` | No |  |
| `background` | `string` | No |  |
| `background_gradient_color` | `any[]` | No |  |
| `bust_portrait` | `string` | No |  |
| `character_tag` | `any[]` | No |  |
| `data` | `Record<string, any>` | No |  |
| `description` | `string` | No |  |
| `developer_name` | `string` | No |  |
| `display_icon` | `string` | No |  |
| `display_icon_small` | `string` | No |  |
| `display_name` | `string` | No |  |
| `full_portrait` | `string` | No |  |
| `full_portrait_v2` | `string` | No |  |
| `is_available_for_test` | `boolean` | No |  |
| `is_base_content` | `boolean` | No |  |
| `is_full_portrait_right_facing` | `boolean` | No |  |
| `is_playable_character` | `boolean` | No |  |
| `killfeed_portrait` | `string` | No |  |
| `role` | `Record<string, any>` | No |  |
| `status` | `number` | No |  |
| `uuid` | `string` | No |  |
| `voice_line` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Agent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Agent().load({ id: 'agent_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `ValorantSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompetitiveEntity

```ts
const competitive = client.Competitive()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_object_name` | `string` | No |  |
| `asset_path` | `string` | No |  |
| `tier` | `any[]` | No |  |
| `uuid` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Competitive().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompetitiveEntity` instance with the same client and
options.

#### `client()`

Return the parent `ValorantSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CosmeticEntity

```ts
const cosmetic = client.Cosmetic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `animation_gif` | `string` | No |  |
| `animation_png` | `string` | No |  |
| `asset_path` | `string` | No |  |
| `category` | `string` | No |  |
| `display_icon` | `string` | No |  |
| `display_name` | `string` | No |  |
| `full_icon` | `string` | No |  |
| `full_transparent_icon` | `string` | No |  |
| `hide_if_not_owned` | `boolean` | No |  |
| `is_hidden_if_not_owned` | `boolean` | No |  |
| `is_null_spray` | `boolean` | No |  |
| `large_art` | `string` | No |  |
| `level` | `any[]` | No |  |
| `small_art` | `string` | No |  |
| `theme_uuid` | `string` | No |  |
| `uuid` | `string` | No |  |
| `wide_art` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Cosmetic().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CosmeticEntity` instance with the same client and
options.

#### `client()`

Return the parent `ValorantSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GameModeEntity

```ts
const game_mode = client.GameMode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allows_match_timeout` | `boolean` | No |  |
| `asset_path` | `string` | No |  |
| `display_icon` | `string` | No |  |
| `display_name` | `string` | No |  |
| `duration` | `string` | No |  |
| `economy_type` | `string` | No |  |
| `game_feature_override` | `any[]` | No |  |
| `game_rule_bool_override` | `any[]` | No |  |
| `is_minimap_hidden` | `boolean` | No |  |
| `is_team_voice_allowed` | `boolean` | No |  |
| `orb_count` | `number` | No |  |
| `rounds_per_half` | `number` | No |  |
| `team_role` | `any[]` | No |  |
| `uuid` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GameMode().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GameModeEntity` instance with the same client and
options.

#### `client()`

Return the parent `ValorantSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MapEntity

```ts
const map = client.Map()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_path` | `string` | No |  |
| `callout` | `any[]` | No |  |
| `coordinate` | `string` | No |  |
| `data` | `Record<string, any>` | No |  |
| `display_icon` | `string` | No |  |
| `display_name` | `string` | No |  |
| `list_view_icon` | `string` | No |  |
| `map_url` | `string` | No |  |
| `narrative_description` | `string` | No |  |
| `splash` | `string` | No |  |
| `status` | `number` | No |  |
| `tactical_description` | `string` | No |  |
| `uuid` | `string` | No |  |
| `x_multiplier` | `number` | No |  |
| `x_scalar_to_add` | `number` | No |  |
| `y_multiplier` | `number` | No |  |
| `y_scalar_to_add` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Map().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Map().load({ id: 'map_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MapEntity` instance with the same client and
options.

#### `client()`

Return the parent `ValorantSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WeaponEntity

```ts
const weapon = client.Weapon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asset_path` | `string` | No |  |
| `category` | `string` | No |  |
| `data` | `Record<string, any>` | No |  |
| `default_skin_uuid` | `string` | No |  |
| `display_icon` | `string` | No |  |
| `display_name` | `string` | No |  |
| `kill_stream_icon` | `string` | No |  |
| `shop_data` | `Record<string, any>` | No |  |
| `skin` | `any[]` | No |  |
| `status` | `number` | No |  |
| `uuid` | `string` | No |  |
| `weapon_stat` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Weapon().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Weapon().load({ id: 'weapon_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WeaponEntity` instance with the same client and
options.

#### `client()`

Return the parent `ValorantSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new ValorantSDK({
  feature: {
    test: { active: true },
  }
})
```

