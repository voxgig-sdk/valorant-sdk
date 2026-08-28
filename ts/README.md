# Valorant TypeScript SDK



The TypeScript SDK for the Valorant API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Agent()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/valorant-sdk/releases](https://github.com/voxgig-sdk/valorant-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { ValorantSDK } from '@voxgig-sdk/valorant'

const client = new ValorantSDK()
```

### 2. List agent records

`list()` resolves to an array of Agent ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const agents = await client.Agent().list()

for (const agent of agents) {
  console.log(agent)
}
```

### 3. Load an agent

`load()` returns the entity directly and throws on failure:

```ts
try {
  const agent = await client.Agent().load({ id: 'example_id' })
  console.log(agent)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const cosmetics = await client.Cosmetic().list()
  console.log(cosmetics)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = ValorantSDK.test()

const cosmetic = await client.Cosmetic().list()
// cosmetic is the entity, populated with mock response data
// — call cosmetic.data() for the record itself
console.log(cosmetic)
```

You can also use the instance method:

```ts
const client = new ValorantSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Cosmetic()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new ValorantSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
VALORANT_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### ValorantSDK

#### Constructor

```ts
new ValorantSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Agent(data?)` | `AgentEntity` | Create an Agent entity instance. |
| `Competitive(data?)` | `CompetitiveEntity` | Create a Competitive entity instance. |
| `Cosmetic(data?)` | `CosmeticEntity` | Create a Cosmetic entity instance. |
| `GameMode(data?)` | `GameModeEntity` | Create a GameMode entity instance. |
| `Map(data?)` | `MapEntity` | Create a Map entity instance. |
| `Weapon(data?)` | `WeaponEntity` | Create a Weapon entity instance. |
| `tester(testopts?, sdkopts?)` | `ValorantSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `ValorantSDK.test(testopts?, sdkopts?)` | `ValorantSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): ValorantSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Agent

| Field | Description |
| --- | --- |
| `abilities` |  |
| `assetPath` | Asset path in game files |
| `background` | URL to the agent's background image |
| `backgroundGradientColors` | Gradient colors for the agent's background |
| `bustPortrait` | URL to the agent's bust portrait |
| `characterTags` | Tags associated with the character |
| `description` | Description of the agent |
| `developerName` | Internal developer name |
| `displayIcon` | URL to the agent's display icon |
| `displayIconSmall` | URL to the agent's small display icon |
| `displayName` | Display name of the agent |
| `fullPortrait` | URL to the agent's full portrait |
| `fullPortraitV2` | URL to the agent's full portrait version 2 |
| `id` |  |
| `isAvailableForTest` | Whether the agent is available for testing |
| `isBaseContent` | Whether the agent is base content |
| `isFullPortraitRightFacing` | Whether the full portrait faces right |
| `isPlayableCharacter` | Whether the agent is playable |
| `killfeedPortrait` | URL to the agent's killfeed portrait |
| `role` |  |
| `uuid` | Unique identifier for the agent |
| `voiceLine` |  |

Operations: list, load.

API path: `/v1/agents`

#### Competitive

| Field | Description |
| --- | --- |
| `assetObjectName` | Asset object name |
| `assetPath` | Asset path in game files |
| `tiers` |  |
| `uuid` | Unique identifier for the competitive tier set |

Operations: list.

API path: `/v1/competitivetiers`

#### Cosmetic

| Field | Description |
| --- | --- |
| `animationGif` | URL to the spray's animation GIF |
| `animationPng` | URL to the spray's animation PNG |
| `assetPath` | Asset path in game files |
| `category` | Category of the spray |
| `displayIcon` | URL to the buddy's display icon |
| `displayName` | Display name of the buddy |
| `fullIcon` | URL to the spray's full icon |
| `fullTransparentIcon` | URL to the spray's full transparent icon |
| `hideIfNotOwned` | Whether the spray is hidden if not owned |
| `isHiddenIfNotOwned` | Whether the buddy is hidden if not owned |
| `isNullSpray` | Whether this is a null spray |
| `largeArt` | URL to the card's large art |
| `levels` |  |
| `smallArt` | URL to the card's small art |
| `themeUuid` | UUID of the theme |
| `uuid` | Unique identifier for the buddy |
| `wideArt` | URL to the card's wide art |

Operations: list.

API path: `/v1/buddies`

#### GameMode

| Field | Description |
| --- | --- |
| `allowsMatchTimeouts` | Whether match timeouts are allowed |
| `assetPath` | Asset path in game files |
| `displayIcon` | URL to the game mode's display icon |
| `displayName` | Display name of the game mode |
| `duration` | Duration of the game mode |
| `economyType` | Type of economy system |
| `gameFeatureOverrides` | Game feature overrides |
| `gameRuleBoolOverrides` | Game rule boolean overrides |
| `isMinimapHidden` | Whether the minimap is hidden |
| `isTeamVoiceAllowed` | Whether team voice chat is allowed |
| `orbCount` | Number of orbs in the game mode |
| `roundsPerHalf` | Number of rounds per half |
| `teamRoles` | Team roles in the game mode |
| `uuid` | Unique identifier for the game mode |

Operations: list.

API path: `/v1/gamemodes`

#### Map

| Field | Description |
| --- | --- |
| `assetPath` | Asset path in game files |
| `callouts` |  |
| `coordinates` | Geographic coordinates of the map location |
| `displayIcon` | URL to the map's display icon |
| `displayName` | Display name of the map |
| `id` |  |
| `listViewIcon` | URL to the map's list view icon |
| `mapUrl` | URL to the map overview |
| `narrativeDescription` | Narrative description of the map |
| `splash` | URL to the map's splash image |
| `tacticalDescription` | Tactical description of the map |
| `uuid` | Unique identifier for the map |
| `xMultiplier` | X coordinate multiplier |
| `xScalarToAdd` | X scalar to add |
| `yMultiplier` | Y coordinate multiplier |
| `yScalarToAdd` | Y scalar to add |

Operations: list, load.

API path: `/v1/maps`

#### Weapon

| Field | Description |
| --- | --- |
| `assetPath` | Asset path in game files |
| `category` | Weapon category (e.g., Rifle, Pistol) |
| `defaultSkinUuid` | UUID of the default skin |
| `displayIcon` | URL to the weapon's display icon |
| `displayName` | Display name of the weapon |
| `id` |  |
| `killStreamIcon` | URL to the weapon's kill stream icon |
| `shopData` |  |
| `skins` |  |
| `uuid` | Unique identifier for the weapon |
| `weaponStats` |  |

Operations: list, load.

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
| `abilities` | `any[]` |  |
| `assetPath` | `string` | Asset path in game files |
| `background` | `string` | URL to the agent's background image |
| `backgroundGradientColors` | `any[]` | Gradient colors for the agent's background |
| `bustPortrait` | `string` | URL to the agent's bust portrait |
| `characterTags` | `any[]` | Tags associated with the character |
| `description` | `string` | Description of the agent |
| `developerName` | `string` | Internal developer name |
| `displayIcon` | `string` | URL to the agent's display icon |
| `displayIconSmall` | `string` | URL to the agent's small display icon |
| `displayName` | `string` | Display name of the agent |
| `fullPortrait` | `string` | URL to the agent's full portrait |
| `fullPortraitV2` | `string` | URL to the agent's full portrait version 2 |
| `id` | `string` |  |
| `isAvailableForTest` | `boolean` | Whether the agent is available for testing |
| `isBaseContent` | `boolean` | Whether the agent is base content |
| `isFullPortraitRightFacing` | `boolean` | Whether the full portrait faces right |
| `isPlayableCharacter` | `boolean` | Whether the agent is playable |
| `killfeedPortrait` | `string` | URL to the agent's killfeed portrait |
| `role` | `Record<string, any>` |  |
| `uuid` | `string` | Unique identifier for the agent |
| `voiceLine` | `Record<string, any>` |  |

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
| `assetObjectName` | `string` | Asset object name |
| `assetPath` | `string` | Asset path in game files |
| `tiers` | `any[]` |  |
| `uuid` | `string` | Unique identifier for the competitive tier set |

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
| `animationGif` | `string` | URL to the spray's animation GIF |
| `animationPng` | `string` | URL to the spray's animation PNG |
| `assetPath` | `string` | Asset path in game files |
| `category` | `string` | Category of the spray |
| `displayIcon` | `string` | URL to the buddy's display icon |
| `displayName` | `string` | Display name of the buddy |
| `fullIcon` | `string` | URL to the spray's full icon |
| `fullTransparentIcon` | `string` | URL to the spray's full transparent icon |
| `hideIfNotOwned` | `boolean` | Whether the spray is hidden if not owned |
| `isHiddenIfNotOwned` | `boolean` | Whether the buddy is hidden if not owned |
| `isNullSpray` | `boolean` | Whether this is a null spray |
| `largeArt` | `string` | URL to the card's large art |
| `levels` | `any[]` |  |
| `smallArt` | `string` | URL to the card's small art |
| `themeUuid` | `string` | UUID of the theme |
| `uuid` | `string` | Unique identifier for the buddy |
| `wideArt` | `string` | URL to the card's wide art |

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
| `allowsMatchTimeouts` | `boolean` | Whether match timeouts are allowed |
| `assetPath` | `string` | Asset path in game files |
| `displayIcon` | `string` | URL to the game mode's display icon |
| `displayName` | `string` | Display name of the game mode |
| `duration` | `string` | Duration of the game mode |
| `economyType` | `string` | Type of economy system |
| `gameFeatureOverrides` | `any[]` | Game feature overrides |
| `gameRuleBoolOverrides` | `any[]` | Game rule boolean overrides |
| `isMinimapHidden` | `boolean` | Whether the minimap is hidden |
| `isTeamVoiceAllowed` | `boolean` | Whether team voice chat is allowed |
| `orbCount` | `number` | Number of orbs in the game mode |
| `roundsPerHalf` | `number` | Number of rounds per half |
| `teamRoles` | `any[]` | Team roles in the game mode |
| `uuid` | `string` | Unique identifier for the game mode |

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
| `assetPath` | `string` | Asset path in game files |
| `callouts` | `any[]` |  |
| `coordinates` | `string` | Geographic coordinates of the map location |
| `displayIcon` | `string` | URL to the map's display icon |
| `displayName` | `string` | Display name of the map |
| `id` | `string` |  |
| `listViewIcon` | `string` | URL to the map's list view icon |
| `mapUrl` | `string` | URL to the map overview |
| `narrativeDescription` | `string` | Narrative description of the map |
| `splash` | `string` | URL to the map's splash image |
| `tacticalDescription` | `string` | Tactical description of the map |
| `uuid` | `string` | Unique identifier for the map |
| `xMultiplier` | `number` | X coordinate multiplier |
| `xScalarToAdd` | `number` | X scalar to add |
| `yMultiplier` | `number` | Y coordinate multiplier |
| `yScalarToAdd` | `number` | Y scalar to add |

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
| `assetPath` | `string` | Asset path in game files |
| `category` | `string` | Weapon category (e.g., Rifle, Pistol) |
| `defaultSkinUuid` | `string` | UUID of the default skin |
| `displayIcon` | `string` | URL to the weapon's display icon |
| `displayName` | `string` | Display name of the weapon |
| `id` | `string` |  |
| `killStreamIcon` | `string` | URL to the weapon's kill stream icon |
| `shopData` | `Record<string, any>` |  |
| `skins` | `any[]` |  |
| `uuid` | `string` | Unique identifier for the weapon |
| `weaponStats` | `Record<string, any>` |  |

#### Example: Load

```ts
const weapon = await client.Weapon().load({ id: 'weapon_id' })
```

#### Example: List

```ts
const weapons = await client.Weapon().list()
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
valorant/
├── src/
│   ├── ValorantSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { ValorantSDK } from '@voxgig-sdk/valorant'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const cosmetic = client.Cosmetic()
await cosmetic.list()

// cosmetic.data() now returns the cosmetic data from the last `list`
// cosmetic.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
