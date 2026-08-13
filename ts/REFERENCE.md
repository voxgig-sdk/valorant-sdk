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
| `abilities` | `any[]` | No |  |
| `assetPath` | `string` | No |  |
| `background` | `string` | No |  |
| `backgroundGradientColors` | `any[]` | No |  |
| `bustPortrait` | `string` | No |  |
| `characterTags` | `any[]` | No |  |
| `description` | `string` | No |  |
| `developerName` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayIconSmall` | `string` | No |  |
| `displayName` | `string` | No |  |
| `fullPortrait` | `string` | No |  |
| `fullPortraitV2` | `string` | No |  |
| `isAvailableForTest` | `boolean` | No |  |
| `isBaseContent` | `boolean` | No |  |
| `isFullPortraitRightFacing` | `boolean` | No |  |
| `isPlayableCharacter` | `boolean` | No |  |
| `killfeedPortrait` | `string` | No |  |
| `role` | `Record<string, any>` | No |  |
| `uuid` | `string` | No |  |
| `voiceLine` | `Record<string, any>` | No |  |

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
| `assetObjectName` | `string` | No |  |
| `assetPath` | `string` | No |  |
| `tiers` | `any[]` | No |  |
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
| `animationGif` | `string` | No |  |
| `animationPng` | `string` | No |  |
| `assetPath` | `string` | No |  |
| `category` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `fullIcon` | `string` | No |  |
| `fullTransparentIcon` | `string` | No |  |
| `hideIfNotOwned` | `boolean` | No |  |
| `isHiddenIfNotOwned` | `boolean` | No |  |
| `isNullSpray` | `boolean` | No |  |
| `largeArt` | `string` | No |  |
| `levels` | `any[]` | No |  |
| `smallArt` | `string` | No |  |
| `themeUuid` | `string` | No |  |
| `uuid` | `string` | No |  |
| `wideArt` | `string` | No |  |

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
| `allowsMatchTimeouts` | `boolean` | No |  |
| `assetPath` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `duration` | `string` | No |  |
| `economyType` | `string` | No |  |
| `gameFeatureOverrides` | `any[]` | No |  |
| `gameRuleBoolOverrides` | `any[]` | No |  |
| `isMinimapHidden` | `boolean` | No |  |
| `isTeamVoiceAllowed` | `boolean` | No |  |
| `orbCount` | `number` | No |  |
| `roundsPerHalf` | `number` | No |  |
| `teamRoles` | `any[]` | No |  |
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
| `assetPath` | `string` | No |  |
| `callouts` | `any[]` | No |  |
| `coordinates` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `listViewIcon` | `string` | No |  |
| `mapUrl` | `string` | No |  |
| `narrativeDescription` | `string` | No |  |
| `splash` | `string` | No |  |
| `tacticalDescription` | `string` | No |  |
| `uuid` | `string` | No |  |
| `xMultiplier` | `number` | No |  |
| `xScalarToAdd` | `number` | No |  |
| `yMultiplier` | `number` | No |  |
| `yScalarToAdd` | `number` | No |  |

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
| `assetPath` | `string` | No |  |
| `category` | `string` | No |  |
| `defaultSkinUuid` | `string` | No |  |
| `displayIcon` | `string` | No |  |
| `displayName` | `string` | No |  |
| `killStreamIcon` | `string` | No |  |
| `shopData` | `Record<string, any>` | No |  |
| `skins` | `any[]` | No |  |
| `uuid` | `string` | No |  |
| `weaponStats` | `Record<string, any>` | No |  |

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

