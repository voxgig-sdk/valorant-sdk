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
| `assetPath` | `string` | No | Asset path in game files |
| `background` | `string` | No | URL to the agent's background image |
| `backgroundGradientColors` | `any[]` | No | Gradient colors for the agent's background |
| `bustPortrait` | `string` | No | URL to the agent's bust portrait |
| `characterTags` | `any[]` | No | Tags associated with the character |
| `description` | `string` | No | Description of the agent |
| `developerName` | `string` | No | Internal developer name |
| `displayIcon` | `string` | No | URL to the agent's display icon |
| `displayIconSmall` | `string` | No | URL to the agent's small display icon |
| `displayName` | `string` | No | Display name of the agent |
| `fullPortrait` | `string` | No | URL to the agent's full portrait |
| `fullPortraitV2` | `string` | No | URL to the agent's full portrait version 2 |
| `id` | `string` | No |  |
| `isAvailableForTest` | `boolean` | No | Whether the agent is available for testing |
| `isBaseContent` | `boolean` | No | Whether the agent is base content |
| `isFullPortraitRightFacing` | `boolean` | No | Whether the full portrait faces right |
| `isPlayableCharacter` | `boolean` | No | Whether the agent is playable |
| `killfeedPortrait` | `string` | No | URL to the agent's killfeed portrait |
| `role` | `Record<string, any>` | No |  |
| `uuid` | `string` | No | Unique identifier for the agent |
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
| `assetObjectName` | `string` | No | Asset object name |
| `assetPath` | `string` | No | Asset path in game files |
| `tiers` | `any[]` | No |  |
| `uuid` | `string` | No | Unique identifier for the competitive tier set |

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
| `animationGif` | `string` | No | URL to the spray's animation GIF |
| `animationPng` | `string` | No | URL to the spray's animation PNG |
| `assetPath` | `string` | No | Asset path in game files |
| `category` | `string` | No | Category of the spray |
| `displayIcon` | `string` | No | URL to the buddy's display icon |
| `displayName` | `string` | No | Display name of the buddy |
| `fullIcon` | `string` | No | URL to the spray's full icon |
| `fullTransparentIcon` | `string` | No | URL to the spray's full transparent icon |
| `hideIfNotOwned` | `boolean` | No | Whether the spray is hidden if not owned |
| `isHiddenIfNotOwned` | `boolean` | No | Whether the buddy is hidden if not owned |
| `isNullSpray` | `boolean` | No | Whether this is a null spray |
| `largeArt` | `string` | No | URL to the card's large art |
| `levels` | `any[]` | No |  |
| `smallArt` | `string` | No | URL to the card's small art |
| `themeUuid` | `string` | No | UUID of the theme |
| `uuid` | `string` | No | Unique identifier for the buddy |
| `wideArt` | `string` | No | URL to the card's wide art |

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
| `allowsMatchTimeouts` | `boolean` | No | Whether match timeouts are allowed |
| `assetPath` | `string` | No | Asset path in game files |
| `displayIcon` | `string` | No | URL to the game mode's display icon |
| `displayName` | `string` | No | Display name of the game mode |
| `duration` | `string` | No | Duration of the game mode |
| `economyType` | `string` | No | Type of economy system |
| `gameFeatureOverrides` | `any[]` | No | Game feature overrides |
| `gameRuleBoolOverrides` | `any[]` | No | Game rule boolean overrides |
| `isMinimapHidden` | `boolean` | No | Whether the minimap is hidden |
| `isTeamVoiceAllowed` | `boolean` | No | Whether team voice chat is allowed |
| `orbCount` | `number` | No | Number of orbs in the game mode |
| `roundsPerHalf` | `number` | No | Number of rounds per half |
| `teamRoles` | `any[]` | No | Team roles in the game mode |
| `uuid` | `string` | No | Unique identifier for the game mode |

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
| `assetPath` | `string` | No | Asset path in game files |
| `callouts` | `any[]` | No |  |
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
| `xMultiplier` | `number` | No | X coordinate multiplier |
| `xScalarToAdd` | `number` | No | X scalar to add |
| `yMultiplier` | `number` | No | Y coordinate multiplier |
| `yScalarToAdd` | `number` | No | Y scalar to add |

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
| `assetPath` | `string` | No | Asset path in game files |
| `category` | `string` | No | Weapon category (e.g., Rifle, Pistol) |
| `defaultSkinUuid` | `string` | No | UUID of the default skin |
| `displayIcon` | `string` | No | URL to the weapon's display icon |
| `displayName` | `string` | No | Display name of the weapon |
| `id` | `string` | No |  |
| `killStreamIcon` | `string` | No | URL to the weapon's kill stream icon |
| `shopData` | `Record<string, any>` | No |  |
| `skins` | `any[]` | No |  |
| `uuid` | `string` | No | Unique identifier for the weapon |
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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

