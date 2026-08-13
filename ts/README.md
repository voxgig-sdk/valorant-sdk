# Valorant TypeScript SDK



The TypeScript SDK for the Valorant API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Agent()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
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

Operations: list, load.

API path: `/v1/agents`

#### Competitive

| Field | Description |
| --- | --- |
| `assetObjectName` |  |
| `assetPath` |  |
| `tiers` |  |
| `uuid` |  |

Operations: list.

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

Operations: list.

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

Operations: list.

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

Operations: list, load.

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
| `assetPath` | `string` |  |
| `background` | `string` |  |
| `backgroundGradientColors` | `any[]` |  |
| `bustPortrait` | `string` |  |
| `characterTags` | `any[]` |  |
| `description` | `string` |  |
| `developerName` | `string` |  |
| `displayIcon` | `string` |  |
| `displayIconSmall` | `string` |  |
| `displayName` | `string` |  |
| `fullPortrait` | `string` |  |
| `fullPortraitV2` | `string` |  |
| `isAvailableForTest` | `boolean` |  |
| `isBaseContent` | `boolean` |  |
| `isFullPortraitRightFacing` | `boolean` |  |
| `isPlayableCharacter` | `boolean` |  |
| `killfeedPortrait` | `string` |  |
| `role` | `Record<string, any>` |  |
| `uuid` | `string` |  |
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
| `assetObjectName` | `string` |  |
| `assetPath` | `string` |  |
| `tiers` | `any[]` |  |
| `uuid` | `string` |  |

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
| `animationGif` | `string` |  |
| `animationPng` | `string` |  |
| `assetPath` | `string` |  |
| `category` | `string` |  |
| `displayIcon` | `string` |  |
| `displayName` | `string` |  |
| `fullIcon` | `string` |  |
| `fullTransparentIcon` | `string` |  |
| `hideIfNotOwned` | `boolean` |  |
| `isHiddenIfNotOwned` | `boolean` |  |
| `isNullSpray` | `boolean` |  |
| `largeArt` | `string` |  |
| `levels` | `any[]` |  |
| `smallArt` | `string` |  |
| `themeUuid` | `string` |  |
| `uuid` | `string` |  |
| `wideArt` | `string` |  |

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
| `allowsMatchTimeouts` | `boolean` |  |
| `assetPath` | `string` |  |
| `displayIcon` | `string` |  |
| `displayName` | `string` |  |
| `duration` | `string` |  |
| `economyType` | `string` |  |
| `gameFeatureOverrides` | `any[]` |  |
| `gameRuleBoolOverrides` | `any[]` |  |
| `isMinimapHidden` | `boolean` |  |
| `isTeamVoiceAllowed` | `boolean` |  |
| `orbCount` | `number` |  |
| `roundsPerHalf` | `number` |  |
| `teamRoles` | `any[]` |  |
| `uuid` | `string` |  |

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
| `assetPath` | `string` |  |
| `callouts` | `any[]` |  |
| `coordinates` | `string` |  |
| `displayIcon` | `string` |  |
| `displayName` | `string` |  |
| `listViewIcon` | `string` |  |
| `mapUrl` | `string` |  |
| `narrativeDescription` | `string` |  |
| `splash` | `string` |  |
| `tacticalDescription` | `string` |  |
| `uuid` | `string` |  |
| `xMultiplier` | `number` |  |
| `xScalarToAdd` | `number` |  |
| `yMultiplier` | `number` |  |
| `yScalarToAdd` | `number` |  |

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
| `assetPath` | `string` |  |
| `category` | `string` |  |
| `defaultSkinUuid` | `string` |  |
| `displayIcon` | `string` |  |
| `displayName` | `string` |  |
| `killStreamIcon` | `string` |  |
| `shopData` | `Record<string, any>` |  |
| `skins` | `any[]` |  |
| `uuid` | `string` |  |
| `weaponStats` | `Record<string, any>` |  |

#### Example: Load

```ts
const weapon = await client.Weapon().load({ id: 'weapon_id' })
```

#### Example: List

```ts
const weapons = await client.Weapon().list()
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
