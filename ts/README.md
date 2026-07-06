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

`list()` resolves to an array of Agent objects — iterate it directly:

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
  const agents = await client.Agent().list()
  console.log(agents)
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

const agent = await client.Agent().list()
// agent is a bare entity populated with mock response data
console.log(agent)
```

You can also use the instance method:

```ts
const client = new ValorantSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Agent()

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

Operations: list, load.

API path: `/v1/agents`

#### Competitive

| Field | Description |
| --- | --- |
| `asset_object_name` |  |
| `asset_path` |  |
| `tier` |  |
| `uuid` |  |

Operations: list.

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

Operations: list.

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

Operations: list.

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

Operations: list, load.

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
| `ability` | `any[]` |  |
| `asset_path` | `string` |  |
| `background` | `string` |  |
| `background_gradient_color` | `any[]` |  |
| `bust_portrait` | `string` |  |
| `character_tag` | `any[]` |  |
| `data` | `Record<string, any>` |  |
| `description` | `string` |  |
| `developer_name` | `string` |  |
| `display_icon` | `string` |  |
| `display_icon_small` | `string` |  |
| `display_name` | `string` |  |
| `full_portrait` | `string` |  |
| `full_portrait_v2` | `string` |  |
| `is_available_for_test` | `boolean` |  |
| `is_base_content` | `boolean` |  |
| `is_full_portrait_right_facing` | `boolean` |  |
| `is_playable_character` | `boolean` |  |
| `killfeed_portrait` | `string` |  |
| `role` | `Record<string, any>` |  |
| `status` | `number` |  |
| `uuid` | `string` |  |
| `voice_line` | `Record<string, any>` |  |

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
| `asset_object_name` | `string` |  |
| `asset_path` | `string` |  |
| `tier` | `any[]` |  |
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
| `animation_gif` | `string` |  |
| `animation_png` | `string` |  |
| `asset_path` | `string` |  |
| `category` | `string` |  |
| `display_icon` | `string` |  |
| `display_name` | `string` |  |
| `full_icon` | `string` |  |
| `full_transparent_icon` | `string` |  |
| `hide_if_not_owned` | `boolean` |  |
| `is_hidden_if_not_owned` | `boolean` |  |
| `is_null_spray` | `boolean` |  |
| `large_art` | `string` |  |
| `level` | `any[]` |  |
| `small_art` | `string` |  |
| `theme_uuid` | `string` |  |
| `uuid` | `string` |  |
| `wide_art` | `string` |  |

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
| `allows_match_timeout` | `boolean` |  |
| `asset_path` | `string` |  |
| `display_icon` | `string` |  |
| `display_name` | `string` |  |
| `duration` | `string` |  |
| `economy_type` | `string` |  |
| `game_feature_override` | `any[]` |  |
| `game_rule_bool_override` | `any[]` |  |
| `is_minimap_hidden` | `boolean` |  |
| `is_team_voice_allowed` | `boolean` |  |
| `orb_count` | `number` |  |
| `rounds_per_half` | `number` |  |
| `team_role` | `any[]` |  |
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
| `asset_path` | `string` |  |
| `callout` | `any[]` |  |
| `coordinate` | `string` |  |
| `data` | `Record<string, any>` |  |
| `display_icon` | `string` |  |
| `display_name` | `string` |  |
| `list_view_icon` | `string` |  |
| `map_url` | `string` |  |
| `narrative_description` | `string` |  |
| `splash` | `string` |  |
| `status` | `number` |  |
| `tactical_description` | `string` |  |
| `uuid` | `string` |  |
| `x_multiplier` | `number` |  |
| `x_scalar_to_add` | `number` |  |
| `y_multiplier` | `number` |  |
| `y_scalar_to_add` | `number` |  |

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
| `asset_path` | `string` |  |
| `category` | `string` |  |
| `data` | `Record<string, any>` |  |
| `default_skin_uuid` | `string` |  |
| `display_icon` | `string` |  |
| `display_name` | `string` |  |
| `kill_stream_icon` | `string` |  |
| `shop_data` | `Record<string, any>` |  |
| `skin` | `any[]` |  |
| `status` | `number` |  |
| `uuid` | `string` |  |
| `weapon_stat` | `Record<string, any>` |  |

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
const agent = client.Agent()
await agent.list()

// agent.data() now returns the agent data from the last `list`
// agent.match() returns the last match criteria
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
