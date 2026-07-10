# Valorant Golang SDK



The Golang SDK for the Valorant API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Agent(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/valorant-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/valorant-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/valorant-sdk/go=../valorant-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/valorant-sdk/go"
)

func main() {
    client := sdk.New()

    // List agent records — the value is the array of records itself.
    agents, err := client.Agent(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range agents.([]any) {
        fmt.Println(item)
    }

    // Load a single agent — the value is the loaded record.
    agent, err := client.Agent(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(agent)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
agents, err := client.Agent(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = agents
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

agent, err := client.Agent(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(agent) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewValorantSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
VALORANT_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewValorantSDK

```go
func NewValorantSDK(options map[string]any) *ValorantSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *ValorantSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### ValorantSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Agent` | `(data map[string]any) ValorantEntity` | Create an Agent entity instance. |
| `Competitive` | `(data map[string]any) ValorantEntity` | Create a Competitive entity instance. |
| `Cosmetic` | `(data map[string]any) ValorantEntity` | Create a Cosmetic entity instance. |
| `GameMode` | `(data map[string]any) ValorantEntity` | Create a GameMode entity instance. |
| `Map` | `(data map[string]any) ValorantEntity` | Create a Map entity instance. |
| `Weapon` | `(data map[string]any) ValorantEntity` | Create a Weapon entity instance. |

### Entity interface (ValorantEntity)

All entities implement the `ValorantEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    agent, err := client.Agent(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // agent is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Agent

| Field | Description |
| --- | --- |
| `"ability"` |  |
| `"asset_path"` |  |
| `"background"` |  |
| `"background_gradient_color"` |  |
| `"bust_portrait"` |  |
| `"character_tag"` |  |
| `"data"` |  |
| `"description"` |  |
| `"developer_name"` |  |
| `"display_icon"` |  |
| `"display_icon_small"` |  |
| `"display_name"` |  |
| `"full_portrait"` |  |
| `"full_portrait_v2"` |  |
| `"is_available_for_test"` |  |
| `"is_base_content"` |  |
| `"is_full_portrait_right_facing"` |  |
| `"is_playable_character"` |  |
| `"killfeed_portrait"` |  |
| `"role"` |  |
| `"status"` |  |
| `"uuid"` |  |
| `"voice_line"` |  |

Operations: List, Load.

API path: `/v1/agents`

#### Competitive

| Field | Description |
| --- | --- |
| `"asset_object_name"` |  |
| `"asset_path"` |  |
| `"tier"` |  |
| `"uuid"` |  |

Operations: List.

API path: `/v1/competitivetiers`

#### Cosmetic

| Field | Description |
| --- | --- |
| `"animation_gif"` |  |
| `"animation_png"` |  |
| `"asset_path"` |  |
| `"category"` |  |
| `"display_icon"` |  |
| `"display_name"` |  |
| `"full_icon"` |  |
| `"full_transparent_icon"` |  |
| `"hide_if_not_owned"` |  |
| `"is_hidden_if_not_owned"` |  |
| `"is_null_spray"` |  |
| `"large_art"` |  |
| `"level"` |  |
| `"small_art"` |  |
| `"theme_uuid"` |  |
| `"uuid"` |  |
| `"wide_art"` |  |

Operations: List.

API path: `/v1/buddies`

#### GameMode

| Field | Description |
| --- | --- |
| `"allows_match_timeout"` |  |
| `"asset_path"` |  |
| `"display_icon"` |  |
| `"display_name"` |  |
| `"duration"` |  |
| `"economy_type"` |  |
| `"game_feature_override"` |  |
| `"game_rule_bool_override"` |  |
| `"is_minimap_hidden"` |  |
| `"is_team_voice_allowed"` |  |
| `"orb_count"` |  |
| `"rounds_per_half"` |  |
| `"team_role"` |  |
| `"uuid"` |  |

Operations: List.

API path: `/v1/gamemodes`

#### Map

| Field | Description |
| --- | --- |
| `"asset_path"` |  |
| `"callout"` |  |
| `"coordinate"` |  |
| `"data"` |  |
| `"display_icon"` |  |
| `"display_name"` |  |
| `"list_view_icon"` |  |
| `"map_url"` |  |
| `"narrative_description"` |  |
| `"splash"` |  |
| `"status"` |  |
| `"tactical_description"` |  |
| `"uuid"` |  |
| `"x_multiplier"` |  |
| `"x_scalar_to_add"` |  |
| `"y_multiplier"` |  |
| `"y_scalar_to_add"` |  |

Operations: List, Load.

API path: `/v1/maps`

#### Weapon

| Field | Description |
| --- | --- |
| `"asset_path"` |  |
| `"category"` |  |
| `"data"` |  |
| `"default_skin_uuid"` |  |
| `"display_icon"` |  |
| `"display_name"` |  |
| `"kill_stream_icon"` |  |
| `"shop_data"` |  |
| `"skin"` |  |
| `"status"` |  |
| `"uuid"` |  |
| `"weapon_stat"` |  |

Operations: List, Load.

API path: `/v1/weapons`



## Entities


### Agent

Create an instance: `agent := client.Agent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ability` | `[]any` |  |
| `asset_path` | `string` |  |
| `background` | `string` |  |
| `background_gradient_color` | `[]any` |  |
| `bust_portrait` | `string` |  |
| `character_tag` | `[]any` |  |
| `data` | `map[string]any` |  |
| `description` | `string` |  |
| `developer_name` | `string` |  |
| `display_icon` | `string` |  |
| `display_icon_small` | `string` |  |
| `display_name` | `string` |  |
| `full_portrait` | `string` |  |
| `full_portrait_v2` | `string` |  |
| `is_available_for_test` | `bool` |  |
| `is_base_content` | `bool` |  |
| `is_full_portrait_right_facing` | `bool` |  |
| `is_playable_character` | `bool` |  |
| `killfeed_portrait` | `string` |  |
| `role` | `map[string]any` |  |
| `status` | `int` |  |
| `uuid` | `string` |  |
| `voice_line` | `map[string]any` |  |

#### Example: Load

```go
agent, err := client.Agent(nil).Load(map[string]any{"id": "agent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(agent) // the loaded record
```

#### Example: List

```go
agents, err := client.Agent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agents) // the array of records
```


### Competitive

Create an instance: `competitive := client.Competitive(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_object_name` | `string` |  |
| `asset_path` | `string` |  |
| `tier` | `[]any` |  |
| `uuid` | `string` |  |

#### Example: List

```go
competitives, err := client.Competitive(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(competitives) // the array of records
```


### Cosmetic

Create an instance: `cosmetic := client.Cosmetic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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
| `hide_if_not_owned` | `bool` |  |
| `is_hidden_if_not_owned` | `bool` |  |
| `is_null_spray` | `bool` |  |
| `large_art` | `string` |  |
| `level` | `[]any` |  |
| `small_art` | `string` |  |
| `theme_uuid` | `string` |  |
| `uuid` | `string` |  |
| `wide_art` | `string` |  |

#### Example: List

```go
cosmetics, err := client.Cosmetic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cosmetics) // the array of records
```


### GameMode

Create an instance: `gameMode := client.GameMode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allows_match_timeout` | `bool` |  |
| `asset_path` | `string` |  |
| `display_icon` | `string` |  |
| `display_name` | `string` |  |
| `duration` | `string` |  |
| `economy_type` | `string` |  |
| `game_feature_override` | `[]any` |  |
| `game_rule_bool_override` | `[]any` |  |
| `is_minimap_hidden` | `bool` |  |
| `is_team_voice_allowed` | `bool` |  |
| `orb_count` | `int` |  |
| `rounds_per_half` | `int` |  |
| `team_role` | `[]any` |  |
| `uuid` | `string` |  |

#### Example: List

```go
gameModes, err := client.GameMode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(gameModes) // the array of records
```


### Map

Create an instance: `map_ := client.Map(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_path` | `string` |  |
| `callout` | `[]any` |  |
| `coordinate` | `string` |  |
| `data` | `map[string]any` |  |
| `display_icon` | `string` |  |
| `display_name` | `string` |  |
| `list_view_icon` | `string` |  |
| `map_url` | `string` |  |
| `narrative_description` | `string` |  |
| `splash` | `string` |  |
| `status` | `int` |  |
| `tactical_description` | `string` |  |
| `uuid` | `string` |  |
| `x_multiplier` | `float64` |  |
| `x_scalar_to_add` | `float64` |  |
| `y_multiplier` | `float64` |  |
| `y_scalar_to_add` | `float64` |  |

#### Example: Load

```go
map_, err := client.Map(nil).Load(map[string]any{"id": "map_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(map_) // the loaded record
```

#### Example: List

```go
map_s, err := client.Map(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(map_s) // the array of records
```


### Weapon

Create an instance: `weapon := client.Weapon(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asset_path` | `string` |  |
| `category` | `string` |  |
| `data` | `map[string]any` |  |
| `default_skin_uuid` | `string` |  |
| `display_icon` | `string` |  |
| `display_name` | `string` |  |
| `kill_stream_icon` | `string` |  |
| `shop_data` | `map[string]any` |  |
| `skin` | `[]any` |  |
| `status` | `int` |  |
| `uuid` | `string` |  |
| `weapon_stat` | `map[string]any` |  |

#### Example: Load

```go
weapon, err := client.Weapon(nil).Load(map[string]any{"id": "weapon_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(weapon) // the loaded record
```

#### Example: List

```go
weapons, err := client.Weapon(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(weapons) // the array of records
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/valorant-sdk/go/
├── valorant.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/valorant-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
agent := client.Agent(nil)
agent.List(nil, nil)

// agent.Data() now returns the agent data from the last list
// agent.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
