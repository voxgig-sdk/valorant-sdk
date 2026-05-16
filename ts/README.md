# Valorant TypeScript SDK

The TypeScript SDK for the Valorant API. Provides a type-safe, entity-oriented interface with full async/await support.


## Install
```bash
npm install valorant
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { ValorantSDK } from 'valorant'

const client = new ValorantSDK({
  apikey: process.env.VALORANT_APIKEY,
})
```

### 2. List agents

```ts
const result = await client.Agent().list()

if (result.ok) {
  for (const item of result.data) {
    console.log(item.id, item.name)
  }
}
```

### 3. Load a agent

```ts
const result = await client.Agent().load({ id: 'example_id' })

if (result.ok) {
  console.log(result.data)
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

const result = await client.Planet().load({ id: 'test01' })
// result.ok === true
// result.data contains mock response data
```

You can also use the instance method:

```ts
const client = new ValorantSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Planet()

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
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
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
VALORANT_TEST_LIVE=TRUE
VALORANT_APIKEY=<your-key>
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
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
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
| `Agent(data?)` | `AgentEntity` | Create a Agent entity instance. |
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
| `load` | `load(reqmatch?, ctrl?): Promise<Result>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Result>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Result>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Result>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Result>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): ValorantSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Result shape

All entity operations return a Result object:

```ts
{
  ok: boolean      // true if the HTTP status is 2xx
  status: number   // HTTP status code
  headers: object  // response headers
  data: any        // parsed JSON response body
}
```

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
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

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
import { ValorantSDK } from 'valorant'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const moon = client.Moon()
await moon.load({ planet_id: 'earth', id: 'luna' })

// moon.data() now returns the loaded moon data
// moon.match() returns { planet_id: 'earth', id: 'luna' }
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
